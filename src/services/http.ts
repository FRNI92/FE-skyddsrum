const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "/api";

type ApiErrorPayload = {
  error?: string;
  fields?: Record<string, string>;
};

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly fields: Record<string, string> = {},
    public readonly retryAfterSeconds?: number
  ) {
    super(message);
    this.name = "ApiError";
  }
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const headers = new Headers(options.headers);
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15_000);

  if (options.body !== undefined && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers,
      signal: controller.signal,
      body: options.body === undefined ? undefined : JSON.stringify(options.body)
    });

    if (!response.ok) {
      let payload: ApiErrorPayload = {};
      try {
        payload = (await response.json()) as ApiErrorPayload;
      } catch {
        // The status code still provides a safe fallback below.
      }

      const retryAfter = Number(response.headers.get("Retry-After"));
      throw new ApiError(
        payload.error ?? "Förfrågan kunde inte genomföras.",
        response.status,
        payload.fields,
        Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : undefined
      );
    }

    if (response.status === 204) return undefined as T;
    return response.json() as Promise<T>;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new ApiError("Anropet tog för lång tid. Kontrollera anslutningen och försök igen.", 408);
    }
    throw new ApiError("Kunde inte ansluta till formulärtjänsten.", 0);
  } finally {
    window.clearTimeout(timeout);
  }
}
