# HPE Private Lounge – Q4 2024 landing page

Responsive landing page built with plain HTML, CSS and JavaScript on top of Bootstrap 5.3 (CSS only).
No build step and no page builder.

## How to run

1. Unzip the project.
2. Double-click `index.html`. It opens in your browser and works offline, because Bootstrap and the fonts are included.

Optional, with a local server (for example to test on your phone on the same Wi-Fi):

```bash
cd hpe-private-lounge
python -m http.server 8000      # then open http://localhost:8000
```

## Project structure

```
hpe-private-lounge/
├─ index.html              page markup (Bootstrap grid + semantic sections)
├─ css/
│  ├─ fonts.css            @font-face for Inter, Lora, Anton (self-hosted)
│  ├─ tokens.css           colours, type, layout values, perforation pattern, dark theme
│  ├─ base.css             resets, helpers, button variants
│  ├─ hero.css             hero layers, top bar, headline
│  ├─ tickets.css          ticket nav strip, compact bar, register ticket, contact ticket, page end
│  └─ offers.css           intro, incentive band, voucher cards, prize section
├─ js/
│  ├─ theme.js             light / dark toggle (Bootstrap data-bs-theme)
│  ├─ i18n.js              EN / DE switch (German text from the briefing)
│  ├─ navigation.js        compact ticket bar + highlight of the current section
│  └─ hero.js              scroll drift of the giant word
├─ assets/
│  ├─ images/              hero photo, hiker cut-out (PNG), prize photo, 4 product images
│  └─ fonts/               woff2 files
└─ vendor/bootstrap/       Bootstrap 5.3.3 CSS + licence
```

## Where Bootstrap is used

Grid (`container`-style wrappers with `row` / `col-*` / `g-*`), `.btn` as base for the buttons, flex utilities
(`d-flex`, `align-items-center`, `gap-2`) and `data-bs-theme` for dark mode. Bootstrap's JavaScript is not needed.

## How the main effects work

- **Hero:** photo, giant word and a transparent cut-out of the hiker are stacked with `z-index`, so the word
  appears *behind* the hiker. Photo and cut-out use the same `object-fit` / `object-position` to stay aligned.
- **Tickets:** notches and perforation slits are CSS masks (`--mask` custom property + `mask-composite`),
  defined once in `tokens.css` (`--slit-v`, `--slit-h`) and reused by every ticket.
- **Voucher cards:** two pieces joined by a perforation. On hover only the coloured panel tilts, so the product
  image stays sharp.
- **Full-width bands:** `left/right: calc(50% - 50vw)` on a pseudo-element.

## Before you hand it in

- Replace the compressed stock-photo previews in `assets/images` with the licensed full-resolution files.
- The logo is a text lock-up; swap in the official HPE logo file.
- The registration link comes from the briefing and contains `hpe-2021-q4`. Please confirm it is the right one for Q4 2024.
- The four product-image links open ALSO shop searches taken from the briefing.

## Browser support

Uses CSS `mask-composite`, `color-mix()` and `inset`, so use a current version of Chrome, Edge, Safari or Firefox.

