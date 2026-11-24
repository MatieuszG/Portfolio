# Portfolio

Strona portfolio w czystym HTML, CSS i JavaScript. Ciemny motyw, treść po polsku, bez budowania i bez zależności.

## Struktura

```
index.html                  – strona główna
projects/cat-guardian.html  – podstrona projektu
projects/lume-rush.html     – podstrona projektu
projects/ultrajump.html     – podstrona projektu
style.css                   – wygląd całej strony
script.js                   – drobny skrypt (rok w stopce)
media/                      – tu wrzucaj obrazki, GIF-y i klipy (folder utworzysz sam)
```

Proponowany układ folderu `media/`: osobny podfolder dla każdego projektu, np. `media/cat-guardian/`, `media/lume-rush/`, `media/ultrajump/`.

## Wdrożenie na GitHub Pages

1. Wrzuć do repozytorium wszystkie pliki z tego folderu (z zachowaniem folderu `projects/`).
2. W repozytorium wejdź w **Settings → Pages**.
3. W sekcji **Build and deployment** wybierz **Deploy from a branch**, gałąź `main` i folder `/ (root)`, po czym zapisz.
4. Po minucie lub dwóch strona będzie dostępna pod adresem widocznym w tej samej sekcji.

## Jak uzupełnić podstronę projektu

Otwórz plik z folderu `projects/`. W każdym znajdziesz dwie sekcje:

- **O projekcie**: zastąp zdanie „Szczegółowy opis projektu pojawi się wkrótce.” własnymi akapitami (`<p>...</p>`). Możesz dodawać kolejne sekcje, kopiując cały blok `<section class="block">...</section>` i zmieniając nagłówek `<h2>`.
- **Media**: w komentarzu `<!-- ... -->` są gotowe wzory do wklejenia (obrazek/GIF, klip, film z YouTube, dwa obrazki obok siebie). Skopiuj wybrany wzór poza komentarz i podmień ścieżkę oraz opis. Zdanie „Materiały z gry pojawią się wkrótce.” usuń.

Dodając obrazek, zawsze wypełnij `alt` krótkim opisem tego, co na nim widać.

## Filmy: YouTube czy pliki w repozytorium?

- **Dłuższe nagrania z rozgrywki (powyżej kilkunastu sekund)**: wrzuć na YouTube i osadź wzorem nr 3. Nie obciąża to repozytorium, a odtwarzacz sam dobiera jakość do łącza. Film może być „niepubliczny”, wtedy widzi go tylko ten, kto ma link.
- **Krótkie pętle pokazujące jedną mechanikę (kilka sekund)**: najlepiej plik `.mp4` w repozytorium (wzór nr 2). Jest wielokrotnie lżejszy niż GIF o tej samej jakości. Dobrze, żeby ważył kilka MB.
- **GIF-y**: działają, ale szybko robią się ciężkie. Jeśli GIF ma więcej niż kilka MB, zamień go na `.mp4`.
- **Limity GitHuba**: pojedynczy plik powyżej 100 MB zostanie odrzucony, a całe repozytorium powinno mieć najlepiej poniżej 1 GB. Wrzucanie długich filmów bezpośrednio do repozytorium szybko do tego prowadzi.

## Co zmienić przed publikacją

- Sekcja **O mnie** w `index.html` (oraz „Lokalizacja” w bloku kodu u góry) to jeszcze tekst przykładowy.
- Szukaj komentarzy `TODO` oraz zdań „pojawi się wkrótce” na podstronach projektów.
- **Kolory**: zmienne na początku `style.css` (`--bg`, `--accent`, `--warm` i pozostałe).

## Podgląd lokalnie

Wystarczy otworzyć `index.html` w przeglądarce. Do pełnego odwzorowania GitHub Pages możesz uruchomić prosty serwer:

```
python -m http.server 8000
```

i wejść na `http://localhost:8000`.
