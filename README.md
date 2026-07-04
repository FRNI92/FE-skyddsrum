# FE-skyddsrum

## Azure Static Web Apps

Frontend byggs med Vite och deployas till Azure Static Web Apps.

Viktiga inställningar:

- `output_location`: `dist`
- `staticwebapp.config.json`: routing, auth och SPA fallback
- `VITE_API_BASE_URL`: lämna som `/api` om Functions ligger integrerat med SWA, sätt till extern Functions-URL om backend körs separat

Adminytan ligger under `/admin` och ska skyddas både i Static Web Apps och i backendens admin-endpoints.
