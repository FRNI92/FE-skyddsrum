# Upgrade Plan

Den här V1.0-strukturen är byggd så att framtida funktioner kan läggas till runt befintliga sidor, inte genom att skriva om dem.

## Azure Functions

- Lägg HTTP-endpoints under `/api`, först `POST /api/contact`.
- Behåll frontend-kontraktet i `src/services/api.ts`.
- Validera payloads server-side och returnera tydliga statuskoder.

## SendGrid

- Använd Azure Function för att skicka kontaktmail via SendGrid.
- Lägg mallar och avsändarlogik i Functions-projektet.
- Frontend behöver bara fortsätta anropa `submitContactForm`.

## Cosmos DB

- Flytta data från `src/data` till Cosmos DB när adminportalen finns.
- Behåll typerna i `src/types` som kontrakt mellan frontend, Functions och admin.
- Börja med collections för `pages`, `articles`, `services` och `leads`.

## Blob Storage

- Lägg framtida bilder, dokument och nedladdningsbara filer i Blob Storage.
- Spara metadata och alt-texter i Cosmos DB.
- Byt lokala bildimporter mot URL:er från en content service.

## Adminportal

- Skapa en separat route-grupp under `/admin`.
- Skydda admin med autentisering innan routes laddas.
- Återanvänd samma content-interfaces som publika webbplatsen.

## Bloggsystem

- Lägg artiklar i en datamodell med slug, title, description, author, dates och rich content.
- Aktivera Article JSON-LD per artikel.
- Generera sitemap entries för varje publicerad artikel.

## Bildhantering

- Kräv alt-text, width, height och mime-type i bildmetadata.
- Servera WebP/AVIF där det är möjligt.
- Använd Blob Storage plus CDN när trafiken ökar.

## Autentisering

- Börja med Microsoft Entra ID eller Azure Static Web Apps Authentication.
- Skilj publika routes från admin-routes.
- Lägg roller för admin, editor och viewer.
