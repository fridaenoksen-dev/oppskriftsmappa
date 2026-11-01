# Oppskriftsmappa

Oppskriftsmappa hjelper deg med å finne middagsidéer ut fra en hovedingrediens du allerede har hjemme. Du velger en ingrediens og nettsiden viser deg retter som bruker den. Hver rett har en egen side med ingredienser og fremgangsmåte.

Nettstedet er laget for travle hverdager hvor man vil ha en middagsidé raskt og ikke starte med handlelisten.

## Kom i gang

Du trenger Node.js 20.9 eller nyere.

1. Klon repositoryet og gå inn i mappa.
2. Installer avhengighetene med `npm install`.
3. Start utviklingsserveren med `npm run dev`.
4. Åpne `http://localhost:3000` i nettleseren.

Bygg prosjektet med `npm run build`.

## API

Oppskriftene hentes fra [TheMealDB](https://www.themealdb.com), en åpen database med oppskrifter.

Nettstedet bruker den gratis testnøkkelen som ligger i adressen til APIet slik at det ikke trengs noen konfigurasjon eller hemmelig nøkkel.

## Kjente begrensninger

- Brukeren kan velge blant femten ingredienser som jeg har valgt ut. APIet har mange flere.
- Filteret finner kun retter der ingrediensen står oppført med nøyaktig samme navn. En rett med kyllingfilet vises for eksempel ikke når man velger kylling.
- Oppskriftene er på engelsk, mens resten av nettstedet er på Norsk. Innholdet fra APIet er merket med `lang="en"`slik at skjermlesere bruker riktig uttale.
- Det finnes ikke en søkefunksjon.
- Bildene vises med vanlig `img` og ikke med `Image`fra Next.js, så de er ikke optimaliserte.
