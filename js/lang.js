// ============================================================
//  lang.js  –  Angiko portfólió  –  HU / EN / DE / FR
//  Betölteni minden HTML oldalon, a </body> előtt utolsóként
// ============================================================

const TRANSLATIONS = {

  nav: {
    rolam:     { hu: "Rólam",           en: "About",             de: "Über mich",          fr: "À propos" },
    portfolio: { hu: "Portfólió",       en: "Portfolio",         de: "Portfolio",           fr: "Portfolio" },
    kapcsolat: { hu: "Kapcsolat",       en: "Contact",           de: "Kontakt",             fr: "Contact" },
    diploma:   { hu: "Diplomamunka",    en: "Thesis Work",       de: "Abschlussarbeit",     fr: "Mémoire" },
    game:      { hu: "Familiáris-sokk", en: "Familiar-Shock",    de: "Familiar-Schock",     fr: "Choc familier" },
    darkmode:  { hu: "🌙 Dark mode",    en: "🌙 Dark mode",      de: "🌙 Dunkel",           fr: "🌙 Sombre" },
  },

  index: {
    h1:    { hu: "Kőszegi Angéla", en: "Kőszegi Angéla", de: "Kőszegi Angéla", fr: "Kőszegi Angéla" },
    h2:    { hu: "Grafikusművész hallgató\nJunior Frontend Developer",
             en: "Graphic Artist Student\nJunior Frontend Developer",
             de: "Grafikerin (Studentin)\nJunior Frontend-Entwicklerin",
             fr: "Étudiante en arts graphiques\nDéveloppeuse Frontend Junior" },
    h3:    { hu: "Üdvözöllek, remélem elbájolhatlak!",
             en: "Welcome, I hope to enchant you!",
             de: "Willkommen, ich hoffe, ich kann dich verzaubern!",
             fr: "Bienvenue, j'espère vous enchanter !" },
    intro: { hu: "Ezen az oldalon betekintést nyújtok számodra, hogy mivel foglalkozom. A manuális és digitális grafika irányzatában alkotok, emellett érdeklődöm a weboldalak és szoftverfejlesztés világa felé. Ezt az oldalt én készítettem, mint jr. Frontend-fejlesztő vizsgamunka projektet ami szerepelteti az egyetemi grafikáimat, az ott készített diplomamunkámat és elkészítésének folyamatát.",
             en: "This site gives you an insight into what I do. I create in the field of manual and digital graphics, and I'm also interested in web and software development. I built this site myself as a jr. Frontend Developer exam project, featuring my university artworks, my thesis and its creation process.",
             de: "Diese Seite gibt dir einen Einblick in meine Arbeit. Ich schaffe im Bereich der manuellen und digitalen Grafik und interessiere mich außerdem für Web- und Softwareentwicklung. Diese Seite habe ich selbst als Prüfungsprojekt als jr. Frontend-Entwicklerin erstellt, das meine Universitätsgrafiken, meine Abschlussarbeit und deren Entstehungsprozess zeigt.",
             fr: "Ce site vous donne un aperçu de ce que je fais. Je crée dans le domaine de la graphique manuelle et numérique, et je m'intéresse aussi au développement web et logiciel. J'ai créé ce site moi-même comme projet d'examen de développeuse Frontend jr., présentant mes œuvres universitaires, mon mémoire et son processus de création." },
    cta:   { hu: "Megnézem a portfóliót", en: "View my portfolio", de: "Portfolio ansehen", fr: "Voir le portfolio" },
  },

  rolam: {
    card1title: { hu: "Grafikusművész MA",       en: "MA Graphic Artist",              de: "MA Grafikerin",                  fr: "MA Arts Graphiques" },
    card1sub:   { hu: "Eszterházy Károly Katolikus Egyetem", en: "Eszterházy Károly Catholic University", de: "Eszterházy-Károly-Kath.-Universität", fr: "Université Catholique Eszterházy Károly" },
    card2title: { hu: "Grafikus OKJ",            en: "Graphic Designer (VET)",         de: "Grafikdesignerin (Berufsausb.)", fr: "Designer graphique (Bac Pro)" },
    card2sub:   { hu: "Nyíregyházi Művészeti Szakgimnázium", en: "Nyíregyháza Art Secondary School", de: "Kunstgymnasium Nyíregyháza",       fr: "Lycée artistique de Nyíregyháza" },
    card3title: { hu: "Junior Frontend Developer", en: "Junior Frontend Developer",    de: "Junior Frontend-Entwicklerin",   fr: "Développeuse Frontend Junior" },
    card3sub:   { hu: "International Education Center", en: "International Education Center", de: "International Education Center", fr: "International Education Center" },
    skills:     { hu: "Készségeim:",             en: "My Skills:",                     de: "Meine Fähigkeiten:",             fr: "Mes compétences :" },
    hDesign:    { hu: "Design",                  en: "Design",                         de: "Design",                         fr: "Design" },
    hLang:      { hu: "Nyelvek",                 en: "Languages",                      de: "Sprachen",                       fr: "Langues" },
    hFront:     { hu: "Frontend",                en: "Frontend",                       de: "Frontend",                       fr: "Frontend" },
    hSport:     { hu: "Sport",                   en: "Sport",                          de: "Sport",                          fr: "Sport" },
    inspirH2:   { hu: "Inspirációk",             en: "Inspirations",                   de: "Inspirationen",                  fr: "Inspirations" },
    durerH5:    { hu: "A részletgazdag vonalvezetése és az anatómiai pontossága kezdetektől fogva lenyűgözött. Finomsága, képi világa jelentik számomra a magas-művészet alapkövét...",
                  en: "His richly detailed linework and anatomical precision have captivated me from the very beginning. His refinement and visual world represent for me the cornerstone of high art...",
                  de: "Seine detailreiche Linienführung und anatomische Präzision haben mich von Anfang an fasziniert. Seine Feinheit und Bilderwelt bilden für mich den Grundstein der Hochkunst...",
                  fr: "Sa richesse de trait et sa précision anatomique m'ont fascinée dès le début. Sa finesse et son univers visuel représentent pour moi la pierre angulaire de l'art majeur..." },
    durerBtn:   { hu: "Kicsoda?",  en: "Who is he?",    de: "Wer ist er?",   fr: "Qui est-il ?" },
    boschH5:    { hu: "Pokolian elmés. Literálisan. Álom, illetve rémálomszerű dimenziói fantáziadúsak, lázad az emberi képzelet határai ellen.",
                  en: "Infernally clever. Literally. His dreamlike and nightmarish dimensions are wildly imaginative, rebelling against the limits of human fantasy.",
                  de: "Höllisch klug. Wörtlich. Seine traum- und albtraumhaften Dimensionen sind fantasievoll und rebellieren gegen die Grenzen der menschlichen Vorstellungskraft.",
                  fr: "Diaboliquement ingénieux. Littéralement. Ses dimensions oniriques et cauchemardesques sont pleines d'imagination, défiant les limites de la fantaisie humaine." },
    boschBtn:   { hu: "Bocsánat?", en: "Pardon?",       de: "Wie bitte?",    fr: "Pardon ?" },
    malefH5:    { hu: "Sötét, misztikus atmoszféra és narratív képi világ, amely érzelmi reakciót vált ki. Művészeti közreműködés.",
                  en: "A dark, mystical atmosphere and narrative visual world that evokes an emotional response. Artistic collaboration.",
                  de: "Eine dunkle, mystische Atmosphäre und eine narrative Bilderwelt, die emotionale Reaktionen hervorruft. Künstlerische Zusammenarbeit.",
                  fr: "Une atmosphère sombre et mystique et un univers visuel narratif suscitant une réaction émotionnelle. Collaboration artistique." },
    malefBtn:   { hu: "Olvasnék róla!", en: "Tell me more!", de: "Mehr lesen!", fr: "En savoir plus !" },
  },

  portfolio: {
    intro:     { hu: "Itt található valamennyi munkám a stílusom és alkotásaim átláthatósága érdekében.",
                 en: "Here you will find all my works for a transparent overview of my style and creations.",
                 de: "Hier findest du all meine Arbeiten für einen transparenten Überblick über meinen Stil und meine Werke.",
                 fr: "Vous trouverez ici l'ensemble de mes travaux pour une vue transparente de mon style et de mes créations." },
    btnAll:    { hu: "Összes",         en: "All",           de: "Alle",            fr: "Tout" },
    btnIllu:   { hu: "Illusztrációk", en: "Illustrations", de: "Illustrationen",  fr: "Illustrations" },
    btnColl:   { hu: "Kollázs",        en: "Collage",       de: "Collagen",        fr: "Collages" },
    diplomaH1: { hu: "Méhecském",      en: "My Little Bee", de: "Mein Bienchen",   fr: "Mon Abeille" },
    diplomaH3: { hu: "Diplomamunka sorozatom, mely az egyediséget ötvözi az eretnek boszorkánysággal illetve deviáns viselkedésnek hitt női sokféleséggel",
                 en: "My thesis series, which combines uniqueness with heretical witchcraft and the female diversity once considered deviant behaviour.",
                 de: "Meine Abschlussarbeitsreihe, die Einzigartigkeit mit ketzerischer Hexerei und weiblicher Vielfalt verbindet, die einst als abweichendes Verhalten galt.",
                 fr: "Ma série de mémoire, qui allie singularité à la sorcellerie hérétique et à la diversité féminine jadis considérée comme comportement déviant." },
    diplomaP:  { hu: "Feldolgozom, hogy sokszor a különbség, eltérés, nem feltétlenül ördögi eredetű, az hogy másképpen viselkedünk illetve eltérően nezünk ki kivűl, vagy éppenséggel belűlről, teljesen elfogadható",
                 en: "I explore how difference and deviation are not necessarily of demonic origin — that behaving differently or looking different on the outside, or even on the inside, is entirely acceptable.",
                 de: "Ich verarbeite, dass Unterschiede und Abweichungen nicht notwendigerweise teuflischen Ursprungs sind — anders zu handeln oder anders auszusehen, äußerlich wie innerlich, ist völlig akzeptabel.",
                 fr: "J'explore comment la différence et la déviance ne sont pas nécessairement d'origine démoniaque — se comporter différemment ou avoir une apparence différente, extérieurement ou intérieurement, est tout à fait acceptable." },
  },

  kapcsolat: {
    h2:         { hu: "Megrendelés / Kapcsolat", en: "Order / Contact",        de: "Bestellung / Kontakt",    fr: "Commande / Contact" },
    labelNev:   { hu: "Név",                     en: "Name",                   de: "Name",                    fr: "Nom" },
    labelEmail: { hu: "Email",                   en: "Email",                  de: "E-Mail",                  fr: "E-mail" },
    labelProj:  { hu: "Projekt típusa",          en: "Project type",           de: "Projekttyp",              fr: "Type de projet" },
    optDef:     { hu: "-- válassz --",           en: "-- choose --",           de: "-- wählen --",            fr: "-- choisir --" },
    opt1:       { hu: "Weboldal",                en: "Website",                de: "Webseite",                fr: "Site web" },
    opt2:       { hu: "Webes játék",             en: "Web game",               de: "Webspiel",                fr: "Jeu web" },
    opt3:       { hu: "Grafika / Design",        en: "Graphics / Design",      de: "Grafik / Design",         fr: "Graphisme / Design" },
    labelMsg:   { hu: "Üzenet",                  en: "Message",                de: "Nachricht",               fr: "Message" },
    summLbl:    { hu: "Összegzés:",              en: "Summary:",               de: "Zusammenfassung:",        fr: "Résumé :" },
    noProj:     { hu: "Nincs kiválasztott projekt.", en: "No project selected.", de: "Kein Projekt ausgewählt.", fr: "Aucun projet sélectionné." },
    send:       { hu: "Küldés",                  en: "Send",                   de: "Senden",                  fr: "Envoyer" },
    errFill:    { hu: "Kérlek, töltsd ki az összes mezőt!", en: "Please fill in all fields!", de: "Bitte fülle alle Felder aus!", fr: "Veuillez remplir tous les champs !" },
    successMsg: { hu: "Üzenet elküldve, hamarosan felveszem Önnel a kapcsolatot!", en: "Message sent, I'll get back to you soon!", de: "Nachricht gesendet, ich melde mich bald!", fr: "Message envoyé, je vous recontacterai bientôt !" },
    projSep:    { hu: " – becsült ár: ",         en: " – estimated price: ",   de: " – geschätzter Preis: ",  fr: " – prix estimé : " },
  },

  game: {
    startBtn:   { hu: "Nyomj le bármilyen gombot a kezdéshez", en: "Press any key to start", de: "Beliebige Taste zum Starten drücken", fr: "Appuie sur n'importe quelle touche" },
    gameOver:   { hu: "JÁTÉK VÉGE!",   en: "GAME OVER!",    de: "SPIEL VORBEI!",   fr: "FIN DE JEU !" },
    crashed:    { hu: "Nekimentél valaminek!", en: "You crashed!", de: "Du bist gecrasht!", fr: "Tu as crashé !" },
    scoreLabel: { hu: "Pontszám:",     en: "Score:",        de: "Punktzahl:",      fr: "Score :" },
    distLabel:  { hu: "Távolság:",     en: "Distance:",     de: "Distanz:",        fr: "Distance :" },
    restart:    { hu: "Újra",          en: "Play Again",    de: "Nochmal",         fr: "Rejouer" },
    instrText:  { hu: "SZÓKÖZ vagy FEL nyíl = ugrás | Tartsd nyomva a magasabb ugráshoz",
                  en: "SPACE or UP ARROW to jump | Hold to jump higher",
                  de: "LEERTASTE oder PFEILTASTE HOCH = springen | Gedrückt halten für höheres Springen",
                  fr: "ESPACE ou FLÈCHE HAUT pour sauter | Maintenir enfoncé pour sauter plus haut" },
  },
};

// ─────────────────────────────────────────────────────────────
const LANG_KEY = "angiko_lang";
let currentLang = localStorage.getItem(LANG_KEY) || "hu";

function t(section, key) {
  return TRANSLATIONS[section]?.[key]?.[currentLang] ?? "";
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;
  applyTranslations();
  highlightActiveLangBtn();
}

function highlightActiveLangBtn() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("lang-btn--active", btn.dataset.lang === currentLang);
  });
}

function applyTranslations() {
  // data-i18n attribútumos elemek
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const [section, key] = el.dataset.i18n.split(".");
    const val = t(section, key);
    if (!val) return;
    el.innerHTML = val.replace(/\n/g, "<br>");
  });

  // Select options a kapcsolat oldalon
  const sel = document.getElementById("projekt");
  if (sel) {
    const optKeys = ["optDef", "opt1", "opt2", "opt3"];
    sel.querySelectorAll("option").forEach((opt, i) => {
      if (optKeys[i]) opt.textContent = t("kapcsolat", optKeys[i]);
    });
  }

  // summaryText visszaállítása ha nincs projekt választva
  const summaryEl = document.getElementById("summaryText");
  if (summaryEl && summaryEl.dataset.empty === "true") {
    summaryEl.textContent = t("kapcsolat", "noProj");
  }
}

function injectLangSwitcher() {
  const ul = document.querySelector(".navbar-nav.menu-elvalaszto");
  if (!ul || ul.querySelector(".lang-switcher")) return;

  // elválasztó
  const sep = document.createElement("li");
  sep.className = "elvalaszto";
  sep.setAttribute("aria-hidden", "true");
  sep.textContent = "|";
  ul.appendChild(sep);

  // gombcsoport
  const li = document.createElement("li");
  li.className = "nav-item lang-switcher d-flex align-items-center gap-1";
  li.innerHTML =
    ['hu','en','de','fr'].map(l =>
      `<button class="lang-btn btn btn-sm px-2 py-0" data-lang="${l}">${l.toUpperCase()}</button>`
    ).join('');
  ul.appendChild(li);

  li.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  injectLangSwitcher();
  applyTranslations();
  highlightActiveLangBtn();
});
