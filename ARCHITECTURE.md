# Skyddsrumsgruppen arkitektur

## Rekommenderad lösning

- Frontend: React/Vite i Azure Static Web Apps.
- Backend: Azure Functions .NET 8 Isolated i separat repo.
- Auth: Azure Static Web Apps Authentication.
- Artiklar: Cosmos DB for NoSQL, helst med Free Tier aktiverat vid skapande.
- Bilder: Azure Blob Storage.
- Kontaktformulär: Azure Function som skickar e-post via Azure Communication Services Email eller SendGrid.

## Viktigt om separata repositories

Om frontend och backend ligger i separata repos finns två praktiska val:

1. Integrerad SWA API under `/api`.
   - Enklast authmässigt.
   - Passar bäst när Functions deployas tillsammans med Static Web App.

2. Separat Azure Functions App.
   - Passar separata repos bättre.
   - Sätt `VITE_API_BASE_URL` i Static Web Apps till backendens URL.
   - Backend måste själv validera autentisering och roller.
   - CORS måste tillåta Static Web Apps-domänen.

För lägsta kostnad: börja med SWA Free, Cosmos DB Free Tier och Functions Consumption. Var noga med budget alerts i Azure.

## Frontendstruktur

```text
src/
  components/
  data/
  pages/
    ArticlesPage.tsx
    ArticlePage.tsx
    AdminDashboardPage.tsx
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
      AdminArticlesFunctions.cs
      UploadFunctions.cs
      ContactFunctions.cs
      AuthFunctions.cs
    Services/
      ArticleService.cs
      UploadService.cs
      EmailService.cs
    Repositories/
      ArticleRepository.cs
    Models/
      Article.cs
      ImageAsset.cs
    DTOs/
      ArticleDto.cs
      ArticleInputDto.cs
      UploadInitDto.cs
      ContactFormDto.cs
    Authentication/
      CurrentUserReader.cs
      AdminAuthorization.cs
    Storage/
      BlobStorageOptions.cs
      BlobStorageService.cs
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

Admin:

```text
GET    /api/admin/me
GET    /api/admin/articles
GET    /api/admin/articles/{id}
POST   /api/admin/articles
PUT    /api/admin/articles/{id}
DELETE /api/admin/articles/{id}
POST   /api/admin/articles/{id}/publish
POST   /api/admin/upload/init
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

## Blob Storage

Lagra bilder i en privat container och ladda upp via kortlivad SAS-url från backend. Spara bara metadata och publik bild-URL i Cosmos DB.

Tänk på:

- Kräv `contentType`.
- Tillåt bara bildtyper som `image/jpeg`, `image/png`, `image/webp` och `image/avif`.
- Sätt maxstorlek i backend.
- Kräv alt-text innan publicering.

## Säkerhet

- Lita inte på att `/admin` är dolt i frontend.
- Kontrollera adminroll i varje admin-endpoint.
- Validera all input i Functions.
- Sanera artikelinnehåll innan render/publicering.
- Lägg inga connection strings i frontend.
- Använd Azure budget alerts.
