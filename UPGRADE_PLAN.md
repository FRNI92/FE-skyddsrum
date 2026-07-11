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

- Använd bara Cosmos DB om publika artiklar eller leads senare behöver lagras via backend.
- Behåll typerna i `src/types` som kontrakt mellan frontend och Functions.
- För manuellt redaktionellt innehåll kan `src/data` fortsätta vara källan.

## Blob Storage

- Lägg framtida bilder, dokument och nedladdningsbara filer i Blob Storage.
- Spara metadata och alt-texter tillsammans med det manuellt uppdaterade innehållet.
- Byt lokala bildimporter mot URL:er från en content service först när behovet finns.

## Bloggsystem

- Lägg artiklar i en datamodell med slug, title, description, author, dates och rich content.
- Aktivera Article JSON-LD per artikel.
- Generera sitemap entries för varje publicerad artikel.

## Bildhantering

- Kräv alt-text, width, height och mime-type i bildmetadata.
- Servera WebP/AVIF där det är möjligt.
- Använd Blob Storage plus CDN när trafiken ökar.

## Innehållsflöde

- Kunden skickar text och bilder för nya vanliga åtgärder.
- Uppdatera `src/data/actions.ts` och relevanta assets manuellt.
- Kör build och publicera när innehållet är granskat.
