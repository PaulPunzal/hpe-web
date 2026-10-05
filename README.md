# HPE Private Lounge Q4 2024

Landing page for the HPE Private Lounge promotion (fuel and wish vouchers, plus a prize draw).
Plain HTML, CSS and JavaScript. Bootstrap 5.3 is used for its CSS only. There is no build step.

The page is available in English and German and has a light and a dark theme.

## Running it

You can search it with url: `https://hpe-web.netlify.app/`

or

Open `index.html` in a browser. Bootstrap and the fonts are included, so it works offline.

To test on a phone on the same Wi-Fi, start a local server instead:

```bash
cd hpe-private-lounge
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

```
hpe-private-lounge/
├─ index.html
├─ css/
│  ├─ fonts.css       font files (Inter, Lora, Anton)
│  ├─ tokens.css      colours, sizes, perforation patterns, dark theme
│  ├─ base.css        page defaults, shared helpers, buttons
│  ├─ hero.css        hero, top bar, headline, zoom rules for big screens
│  ├─ tickets.css     nav strip, compact bar, register and contact tickets
│  └─ offers.css      intro, voucher cards, prize section
├─ js/
│  ├─ theme.js        light / dark toggle
│  ├─ i18n.js         EN / DE switch
│  ├─ navigation.js   compact ticket bar and current-section highlight
│  ├─ hero.js         slow scroll drift of the big word
│  └─ brand.js        tap to open the full logo on small screens
├─ assets/
│  ├─ images/
│  └─ fonts/
└─ vendor/bootstrap/
```

## Bootstrap

Only a small part is used: the grid (`row`, `col-*`, `g-*`), `.btn` as a base for the custom buttons, a few flex
utilities, and the `data-bs-theme` attribute for dark mode. Bootstrap's JavaScript is not loaded.

## Notes on how it works

- **Hero:** the photo, the big word and a transparent cut-out of the hiker are stacked with `z-index`, which puts
  the word behind the hiker. The photo and the cut-out need the same `object-fit` and `object-position`, or they
  drift apart.
- **Tickets:** the notches and perforation are CSS masks, built from the `--slit-v` and `--slit-h` patterns in
  `tokens.css`.
- **Voucher cards:** each card is a top and a bottom piece joined by a perforation. On hover the top piece tilts
  and the bottom one moves down slightly.
- **Big screens:** from 1200px up, `hero.css` scales the page with `zoom` so it looks the same on large monitors.
  Set `--ui-zoom` to `1` to turn this off.
- **Full-width bands:** the incentive and closing bands use a pseudo-element that stretches past both screen edges.

## Still to check

- Replace the preview images in `assets/images` with the full-resolution licensed files.
- Swap in the official HPE logo file.
- The register link contains `hpe-2021-q4`. Confirm it is the right one for Q4 2024.
- The product buttons open ALSO shop searches taken from the briefing.

## Browser support

Needs a current Chrome, Edge, Safari or Firefox (it uses `mask-composite`, `color-mix()` and `zoom`).