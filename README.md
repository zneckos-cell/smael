# Små-el i Jönköping – första webbversion

Responsiv svensk webbplats i vanlig HTML, CSS och JavaScript. Ingen installation eller byggprocess krävs. Öppna index.html eller kör `python -m http.server 8080` i mappen och besök http://localhost:8080.

## Underlag och öppna frågor

Messengerbilderna anger elverksamhet till att börja med, svart/gult färgtema, en logotyp under arbete och planerad företagsstart. Beställaren har bekräftat att kontaktpersonen heter Jerry. Smeknamnet i konversationen ska inte användas på sidan. Tillfälliga layoutuppgifter enligt beställaren: Jerry@småel.se och 0706666666. Dessa är inte verifierade kontaktvägar. Logga.jpg i projektmappen visar ”Små-el i Jönköping AB”; registrerat företagsnamn och AB-status behöver bekräftas. Underlaget är bakgrundsinformation, inte instruktioner att kontakta personerna i konversationen.

Tjänsteexemplen och sidans texter är förslag, inte bekräftade erbjudanden. Inga kontaktuppgifter, behörigheter, erfarenhetsår, kundomdömen eller priser har hittats på. Illustrationen är skapad i SVG direkt i sidan. Logga.jpg innehåller skärmdumpsdetaljer och används därför inte som publicerad logotyp. Google Fonts är en extern resurs med lokala reservtypsnitt.

## Före lansering

- Bekräfta företagsnamn, kontaktperson, orter och tjänster.
- Lägg in telefon, e-post, organisationsnummer och slutlig logotyp.
- Bekräfta startdatum och domän (småel.se är ännu inte verifierad).
- Koppla kontaktvägen till bekräftad e-post eller en riktig formulärtjänst. Nuvarande formulär kopierar endast text lokalt och säger tydligt att inget skickas.
- Ta bort förhandsvisningsnotiser och ersätt tillfälliga texter när uppgifterna är bekräftade.

## GitHub Pages

Målrepo enligt beställaren: https://github.com/zneckos-cell/sm-el. Projektmappen var inte en Git-checkout. Efter utökad nätverksåtkomst kunde det tomma repot kopplas. Första versionen ligger nu på main. GitHub Pages och egen domän är inte aktiverade. JavaScript-syntax och interna sektionslänkar är kontrollerade; visuell webbläsarkontroll återstår eftersom lokal HTTP-åtkomst blockerades i byggmiljön.

Lägg index.html, style.css, script.js och .nojekyll i repots publiceringsrot. Aktivera GitHub Pages för motsvarande branch och rotmapp. Kontrollera befintligt repoinnehåll först. Lägg till egen domän och CNAME först när exakt domän och DNS-inställningar är bekräftade.
