# Skyddsrumsgruppen frontend

Publik Vite/React-webbplats. Innehåll uppdateras direkt i koden. Det finns ingen admin-, artikel- eller databasintegration.

## Utveckling

```powershell
npm install
npm run dev
npm run typecheck
npm run build
```

## Kontakt-API

Formuläret skickar `POST /api/contact` som standard.

När frontend ligger hos Loopia och Azure Function körs separat byggs sajten med:

```powershell
$env:VITE_API_BASE_URL="https://DIN-FUNCTION-APP.azurewebsites.net/api"
npm run build
```

Endast den publika API-adressen får finnas i `VITE_API_BASE_URL`. Connection strings, function keys och e-posthemligheter får aldrig läggas i frontend.

Se [DEPLOYMENT.md](./DEPLOYMENT.md) för hela checklistan.
