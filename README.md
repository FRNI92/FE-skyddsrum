# FE-skyddsrum

## Azure Static Web Apps

Frontend byggs med Vite och deployas till Azure Static Web Apps.

Viktiga inställningar:

- `output_location`: `dist`
- `staticwebapp.config.json`: routing och SPA fallback
- `VITE_API_BASE_URL`: lämna som `/api` om Functions ligger integrerat med SWA, sätt till extern Functions-URL om backend körs separat

Kontaktformuläret är förberett för en framtida emailservice via `/api/contact`.
