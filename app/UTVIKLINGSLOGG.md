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

## feature/recipe-detail

Detalsiden henter ID-fra URLen gjennom `params`. Jeg har også satt opp en egen funksjon `getMealById`som returnerer `null` når retten ikke finnes. Da kaller siden `notFound()`og viser 404-siden.

API-et har tjue nummererte felter for ingredienser og tjue for mengder. I stedet for å skrive opp alle førti i typen `MealDetail` har jeg lagt til en indekssignatur som sier at objektet kan ha andre tekstfelt. Da kan jeg hente opp ingrediensene med en løkke. Logikken som rydder ingredienser og instruksjoner er satt opp i egne funksjoner i `lib/meal-utils.ts`slik at siden kun viser resultatet.

Instruksjonene kommer som en lang tekst og deles opp ved linjeskiftene og viser trinnene i en nummerert liste.

## feature/styling

Brukt kokebok og andre relevante nettsider som inspirasjon med store bilder, svarte tynne streker og en fet overskrift.

Fjernet mør modus for å ikke teste alle farger to ganger.

Alle fargene er satt opp som i :root.

Brukt CSS Grid med auto-fill og minmax for kortene slik at antall kolonner tilpasser seg uten @media.

Flexbox med flex-wrap for ingrediensknappene siden de har ilik bredde.

Den valgte knappen styles med aria-current, som er samme attributt som skjermlesere bruker. Også lagt på lang="en" der det er aktuelt så skjermlesere bruker engelsk uttale.

Instruksjonene hadde nummerlinjer som ble til egne punkter. Justerte dette med et regulært uttrykk i .filter()
