# Skyddsrumsgruppen arkitektur

## Rekommenderad lösning

- Frontend: React/Vite i Azure Static Web Apps.
- Backend: Azure Functions .NET 8 Isolated i separat repo.
- Auth: behövs inte för frontend i nuläget.
- Artiklar: valfritt framtida API, annars manuellt innehåll i repo.
- Bilder: lokala assets i frontend, eventuellt Azure Blob Storage senare.
- Kontaktformulär: Azure Function som skickar e-post via Azure Communication Services Email eller SendGrid.

## Viktigt om separata repositories

Om frontend och backend ligger i separata repos finns två praktiska val:

1. Integrerad SWA API under `/api`.
   - Enklast authmässigt.
   - Passar bäst när Functions deployas tillsammans med Static Web App.

2. Separat Azure Functions App.
   - Passar separata repos bättre.
   - Sätt `VITE_API_BASE_URL` i Static Web Apps till backendens URL.
   - CORS måste tillåta Static Web Apps-domänen.

För lägsta kostnad: börja med SWA Free och Functions Consumption för kontaktformuläret. Var noga med budget alerts i Azure.

## Frontendstruktur

```text
src/
  components/
  data/
  pages/
    ArticlesPage.tsx
    ArticlePage.tsx
  services/
    api.ts
    http.ts
  types/
  utils/
```

## Backendstruktur

```text
Backend/
  Skyddsrum.Functions/
    Functions/
      ArticlesFunctions.cs
      ContactFunctions.cs
    Services/
      ArticleService.cs
      EmailService.cs
    Repositories/
      ArticleRepository.cs
    Models/
      Article.cs
      ImageAsset.cs
    DTOs/
      ArticleDto.cs
      ContactFormDto.cs
    Email/
      EmailOptions.cs
```

## API endpoints

Publika:

```text
GET  /api/articles
GET  /api/articles/{slug}
POST /api/contact
```

## Datamodell för artikel

```text
id
slug
title
description
category
content
status
authorName
imageUrl
imageAlt
publishedAt
updatedAt
```

## Bilder och vanliga åtgärder

Kunden skickar text och bilder till utvecklaren. Innehåll för vanliga åtgärder uppdateras manuellt i `src/data/actions.ts` och relevanta assets läggs i repo.

Tänk på:

- Komprimera bilder innan publicering.
- Ange alt-text för varje bild.
- Håll datafilen strukturerad så nya åtgärder kan läggas till utan sidrefaktor.

## Säkerhet

- Validera all input i Functions.
- Sanera artikelinnehåll innan render/publicering.
- Lägg inga connection strings i frontend.
- Använd Azure budget alerts.
