# Arkitektur

- Frontend: statisk React/Vite-sajt som kan hostas hos Loopia.
- Backend: separat Azure Functions-app med `POST /api/contact`.
- E-post: Azure Communication Services Email.
- Innehåll: versionshanterade TypeScript-filer och lokala bildresurser.
- Ingen admin, inloggning, artikel-API, Cosmos DB eller Blob Storage.

Backend är auktoritativ för validering, dubblettskydd och rate limiting. Frontendens validering och 60-sekunders spärr förbättrar användarupplevelsen men betraktas aldrig som säkerhetsgräns.
