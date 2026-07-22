# Loopia, Azure och SEO

## 1. Azure Communication Services Email

1. Skapa en Email Communication Services-resurs.
2. Lägg till en egen domän och koppla den till en Communication Services-resurs.
3. Lägg Azure-portalen DNS-poster för domänverifiering, SPF och DKIM hos Loopia.
4. Vänta tills Azure visar domänen som verifierad.
5. Skapa en MailFrom-adress, exempelvis `noreply@skyddsrumsgruppen.se`.

Lägg följande som Application settings i Function App, aldrig i Git:

- `Email:ConnectionString`
- `Email:SenderAddress`
- `Email:RecipientAddress`
- `Email:SiteUrl=https://www.skyddsrumsgruppen.se`

## 2. Azure Function

- Publicera projektet `BE_skyddsrum` till en Azure Function App.
- Backend använder .NET 10 isolated. På Linux ska Function App därför använda Flex Consumption; vanlig Linux Consumption stöder inte .NET 10. Windows eller annan kompatibel plan fungerar också.
- Endpointen blir `https://DIN-FUNCTION-APP.azurewebsites.net/api/contact`.
- Tillåt endast dessa CORS-origins i Function App:
  - `https://www.skyddsrumsgruppen.se`
  - `https://skyddsrumsgruppen.se`
- Använd inte `*` tillsammans med produktionsdomänen.
- API:t är anonymt eftersom det används av ett publikt formulär. Lägg aldrig en function key i JavaScript.
- Aktivera Application Insights, men logga inte formulärtext eller kompletta personuppgifter.

Kodens rate limiting och dubblettskydd är per Function-instans. För distribuerat skydd vid hög trafik används Azure Front Door WAF eller API Management framför Function App.

## 3. Frontend hos Loopia

1. Sätt `VITE_API_BASE_URL` till Function-appens `/api`-adress.
2. Kör `npm run build`.
3. Ladda upp innehållet i `dist` till webbplatsens dokumentrot hos Loopia.
4. Säkerställ att HTTPS är aktivt och omdirigera en av `www`/utan `www` permanent till den canonical-variant som används här: `www`.
5. `.htaccess` i bygget gör att direkta besök till exempelvis `/kontakt` går till React-appen.

## 4. SEO efter publicering

- Lägg till `https://www.skyddsrumsgruppen.se/sitemap.xml` i Google Search Console.
- Kontrollera startsidan, tjänster, vanliga frågor, vanliga åtgärder och kontakt med URL Inspection.
- Validera organisationsdata med Googles Rich Results Test.
- Säkerställ att alla canonical-URL:er svarar med HTTP 200 och att domänomdirigeringen bara tar ett steg.
- Sitelinks väljs automatiskt av Google. Tydlig navigation, unika titlar, interna länkar och en ren sitemap förbättrar möjligheten men garanterar inte visningen.

För maximal SEO på sikt bör de viktigaste React-rutterna förhandsrenderas till HTML vid build. Nuvarande metadata och JSON-LD är korrekta, men huvuddelen av de routespecifika taggarna sätts i webbläsaren.
