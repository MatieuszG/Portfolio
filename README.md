# Portfolio

Strona portfolio w czystym HTML, CSS i JavaScript. Ciemny motyw, dwa języki (PL/EN), bez budowania i bez zależności.

## Struktura

```
index.html   – treść i struktura strony
style.css    – wygląd
script.js    – przełącznik języka PL/EN
```

## Wdrożenie na GitHub Pages

1. Utwórz repozytorium o nazwie `TWOJ-LOGIN.github.io` (adres strony będzie wtedy `https://TWOJ-LOGIN.github.io`).
   Możesz też użyć dowolnej innej nazwy, wtedy adres to `https://TWOJ-LOGIN.github.io/nazwa-repo`.
2. Wrzuć do repozytorium wszystkie pliki z tego folderu.
3. W repozytorium wejdź w **Settings → Pages**.
4. W sekcji **Build and deployment** wybierz **Deploy from a branch**, gałąź `main` i folder `/ (root)`, po czym zapisz.
5. Po minucie lub dwóch strona będzie dostępna pod adresem widocznym w tej samej sekcji.

## Co zmienić przed publikacją

- **Imię i nazwisko**: `index.html` (tytuł, nagłówek `h1`, blok kodu, stopka) oraz `script.js` (`meta.title`, `meta.description`).
- **Teksty PL/EN**: obiekt `translations` na górze `script.js`. Każdy tekst z atrybutem `data-i18n` w HTML-u ma swój klucz w obu językach.
- **Projekty**: trzy wpisy w sekcji `#projects` w `index.html`. Podmień linki `TWOJ-LOGIN/projekt-N`, tagi technologii oraz opisy w `script.js` (klucze `p1.*`, `p2.*`, `p3.*`). Jeśli projekt nie ma dema, usuń link „Demo”.
- **Umiejętności**: sekcja `#skills` w `index.html`.
- **Kontakt**: adres e-mail, linki do GitHuba i LinkedIna w sekcji `#contact`.
- **Kolory**: zmienne na początku `style.css` (`--bg`, `--accent`, `--warm` i pozostałe).

## Podgląd lokalnie

Wystarczy otworzyć `index.html` w przeglądarce. Do pełnego odwzorowania GitHub Pages możesz uruchomić prosty serwer:

```
python -m http.server 8000
```

i wejść na `http://localhost:8000`.
