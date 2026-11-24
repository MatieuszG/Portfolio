const translations = {
  pl: {
    "meta.title": "Jan Kowalski – Full-stack developer",
    "meta.description": "Portfolio Jana Kowalskiego, full-stack developera. Projekty, umiejętności i kontakt.",
    "skip": "Przejdź do treści",
    "nav.label": "Menu główne",
    "lang.label": "Język",
    "nav.about": "O mnie",
    "nav.projects": "Projekty",
    "nav.skills": "Umiejętności",
    "nav.contact": "Kontakt",
    "hero.role": "Full-stack developer",
    "hero.lead": "Buduję aplikacje webowe od bazy danych po interfejs. Lubię czysty kod, szybkie strony i rozwiązywanie realnych problemów.",
    "hero.cta1": "Zobacz projekty",
    "hero.cta2": "Napisz do mnie",
    "about.title": "O mnie",
    "about.p1": "Zacząłem programować, bo chciałem sam zbudować narzędzie, którego nie mogłem znaleźć. Od tamtej pory pracuję nad projektami webowymi: od małych aplikacji po większe systemy z własnym backendem.",
    "about.p2": "Poza kodem czytam o architekturze oprogramowania, a w wolnych chwilach rozwijam własne projekty open source.",
    "about.f1.l": "Lokalizacja",
    "about.f1.v": "Poznań, Polska",
    "about.f2.l": "Skupiam się na",
    "about.f2.v": "Aplikacjach webowych i API",
    "about.f3.l": "Uczę się",
    "about.f3.v": "Rust i systemów rozproszonych",
    "projects.title": "Projekty",
    "link.code": "Kod",
    "link.demo": "Demo",
    "p1.title": "Menedżer zadań",
    "p1.desc": "Aplikacja do zarządzania zadaniami z tablicą kanban, logowaniem i synchronizacją w czasie rzeczywistym.",
    "p2.title": "Monitor cen",
    "p2.desc": "Skrypt, który śledzi ceny wybranych produktów i wysyła powiadomienie, gdy cena spadnie poniżej ustalonego progu.",
    "p3.title": "Skracacz linków",
    "p3.desc": "Prosty serwis do skracania adresów URL ze statystykami kliknięć i własnym REST API.",
    "skills.title": "Umiejętności",
    "skills.lang": "Języki",
    "skills.front": "Frontend",
    "skills.back": "Backend",
    "skills.tools": "Narzędzia",
    "contact.title": "Kontakt",
    "contact.lead": "Szukasz developera do projektu albo chcesz po prostu porozmawiać o kodzie? Napisz.",
    "footer.text": "Zaprojektowane i napisane ręcznie."
  },
  en: {
    "meta.title": "Jan Kowalski – Full-stack developer",
    "meta.description": "Portfolio of Jan Kowalski, a full-stack developer. Projects, skills and contact.",
    "skip": "Skip to content",
    "nav.label": "Main menu",
    "lang.label": "Language",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "hero.role": "Full-stack developer",
    "hero.lead": "I build web applications from the database to the interface. I care about clean code, fast pages and solving real problems.",
    "hero.cta1": "View projects",
    "hero.cta2": "Get in touch",
    "about.title": "About",
    "about.p1": "I started programming because I wanted to build a tool I couldn't find. Since then I've worked on web projects ranging from small apps to larger systems with their own backend.",
    "about.p2": "Outside of code I read about software architecture and, in my free time, work on my own open source projects.",
    "about.f1.l": "Location",
    "about.f1.v": "Poznań, Poland",
    "about.f2.l": "Focus",
    "about.f2.v": "Web applications and APIs",
    "about.f3.l": "Learning",
    "about.f3.v": "Rust and distributed systems",
    "projects.title": "Projects",
    "link.code": "Code",
    "link.demo": "Demo",
    "p1.title": "Task manager",
    "p1.desc": "A task management app with a kanban board, authentication and real-time sync.",
    "p2.title": "Price monitor",
    "p2.desc": "A script that tracks prices of selected products and sends a notification when a price drops below a set threshold.",
    "p3.title": "Link shortener",
    "p3.desc": "A simple URL shortening service with click statistics and its own REST API.",
    "skills.title": "Skills",
    "skills.lang": "Languages",
    "skills.front": "Frontend",
    "skills.back": "Backend",
    "skills.tools": "Tools",
    "contact.title": "Contact",
    "contact.lead": "Looking for a developer for a project, or just want to talk about code? Send a message.",
    "footer.text": "Designed and written by hand."
  }
};

const buttons = document.querySelectorAll(".lang button");

function setLang(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang = lang;
  document.title = dict["meta.title"];

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", dict["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  buttons.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    /* localStorage może być niedostępne – ignorujemy */
  }
}

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved && translations[saved]) return saved;
  } catch (e) {}
  return (navigator.language || "pl").toLowerCase().startsWith("pl") ? "pl" : "en";
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

document.getElementById("year").textContent = new Date().getFullYear();
setLang(initialLang());
