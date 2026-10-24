# Refleksjonsnotat

## Sentrale valg

## En utfordring og hvordan jeg løste den

## Hva jeg har lært

## Hva jeg ville forbedret med mer tid

---

# Logg

## feature/pages

Jeg har brukt vanlig CSS fremfor Tailwind fordi jeg kan CSS fra før og heller vil bruke tiden på å lære Next.js. Av samme grunn valgte jeg vekk React Compiler og Cache Components, som ikke trengs i et prosjekt av denne størrelsen. Nettstedet er på norsk, selv om oppskriftene fra API-et er på engelsk. Header og Footer er satt opp som egne komponenter og `main` ligger i layouten slik at alle sidene får den.

Feilsøking: Jeg skrev `<link>` med liten l i stedet for `Link`. Da brukte React HTML-elementet for stilark i stedet for lenkekomponenten fra Next.js.

## feature/ingredients

Vinklingen på nettsiden handler om å finne retter basert på ingredienser man har i kjøleskapet. Derfor har jeg laget en egen liste med noen av de vanligste tingene i et norsk kjøleskap. Hver ingrediens har et norsk navn som vises for brukeren, og en verdi som allerede er skrevet i formatet API-et forventer, så den ikke må gjøres om i koden.

Når det ikke finnes oppskrifter med en ingrediens, gir API-et tilbake `null` i stedet for en tom liste. Funksjonen min gjør `null` om til en tom liste, slik at siden alltid får en liste å jobbe med. All kontakt med API-et er samlet i `lib/api.ts`, slik at sidene ikke trenger å vite hvor dataene kommer fra.

Oversiktssiden henter dataene på serveren. Jeg trenger derfor ikke `useEffect` og `useState`, slik jeg gjorde i Video Poker.

Feilsøking: Jeg fikk 404 på `/recipes` selv om mappene og filene var riktige. Utviklingsserveren hadde en gammel versjon av prosjektet lagret i `.next`-mappa. Jeg løste det ved å stoppe serveren, slette mappa og starte på nytt.

## feature/recipe-card

Jeg har satt opp komponenten `RecipeCard` som viser rettene med bilde og nanv. Komponenten får retten inn som en prop med typen `MealSummary`. Hele kortet er en `Link`til detaljsiden slik at man kan klikke hvor som helst på kortet og klikke enkelt med tastaturet.

Bildet har en tom alt teskt siden navnet står i overskriften. En skjermleser ville lest dette to ganger hvis ikke.
