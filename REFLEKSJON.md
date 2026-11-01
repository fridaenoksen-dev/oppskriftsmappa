# Refleksjonsnotat

## Sentrale valg

Jeg var innom flere tematikker men endte opp med å gå for noe jeg anså som ikke for komplisert med tanke på at dette er et krevende nok fag og jeg må bruke tiden jeg kan på å få til det grunnleggende. APIet krever ingen nøkkel, har bilder på alle retter og har egne endepunkter for liste, enkeltrett og filtrering.

Jeg endte opp med å sette en egen liste med ingredienser som er satt opp med norske navn for brukeren samtidig som APIet får verdien i et format den forventer. Det gikk fra en nedtrekksliste til en samling av knapper som jeg anser som mer brukervennlig.

All kontakt med APIet er samlet i `lib/api.ts` og logikken som rydder i ingrediensene og indtruksjonene ligger i `lib/meal-utils.ts`. Sidene viser kun resultatet og det er skilt mellom ingen treff som gir en tom liste og en melding, en rett som ikke finnes gir 404 med `not found()` og feil ved henting fanges opp av `error.tsx`.

## En utfordring og hvordan jeg løste den

Etter at jeg la inn datahentingen på oversiktssiden så fikk jeg en 404. Mappen og filen var riktig og de andre sidene fungerte som de skulle. Jeg sjekket opp adressen, mappenavn og filnavn. Jeg måtte også teste å ta vekk datahentingen for å se om feilen lå der. Utvilingsserveren hadde en gammel versjon av prosjektet lagret i `.next`-mappen. Så ved å slette mappen og starte på nytt, fungerte den igjen. Den siste løsningen måtte jeg ha ekstra hjelp av KI til å finne etter og ha prøvd de tingene jeg kunne selv og google.

## Hva jeg har lært

Dette var for meg en oppgave med betraktelig mindre hodebry enn Video Poker. Her henter sidene dataene på serveren før siden sendes til nettleseren, og tilstanden ligger i URL-en (ikke Zusand storen). Når brukeren velger laks, går de til `/recipes?ingredient=salmon`. Valget overlever en oppdatering, kan deles og tilbakeknappen virker.

Det var nytt at mappestrukturen er rutingen. En mye deiligere måte å jobbe på etter min mening. Mappen `[id]` gjør at én fil dekker alle rettene: `/recipes/52772` gir siden `params` med ID-en, som jeg bruker til å hente riktig rett. `searchParams` fungerer på samme måte for alt etter spørsmålstegnet.

Jeg har også lært hvordan man setter opp typer for data man ikke styrer selv. APIet har tjue nummererte felt for ingredienser, og i stedet for å skrive opp alle, brukte jeg en indekssignatur som sier at objektet kan ha andre tekstfelt. Så fikk man kjenne på at `npm run build` er strengere enn utviklingsserveren, da bygget feilet på en type som ikke var eksportert.

## Hva jeg ville forbedret med mer tid

Jeg har hengt litt bakpå og brukt mye kapasitet på den den forrige delinnleveringen. Det merker man jo på denne oppgaven siden de går litt i hverandre på grunn av det. Men mer fornøyd med hvordan jeg (tror) jeg treffer på denne kontra den andre. Ingen tvil om at det burde være mulig å søke på navn eller ingrediens som bruker. Eller kanskje huke av for flere ingredienser. Rett og slett gjort søket litt mer avansert så det blir mer brukervennlig. Litt klønete også at nettstedet er en miks av norsk og engelsk.
