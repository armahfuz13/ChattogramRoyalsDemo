# Chattogram Royals — Demo Website (GitHub Pages Ready)

Single-page demo site for the franchise cricket team **Chattogram Royals**.

## Files
- `index.html`
- `styles.css`
- `app.js`
- Images are included in the same folder for easy hosting on GitHub Pages.

## How to run locally
Just open `index.html` in a browser — or use a simple local server:

```bash
# Python 3
python -m http.server 5173
```

Then open: `http://localhost:5173`

## Deploy to GitHub Pages
1. Create a GitHub repo (example: `chattogram-royals-demo`)
2. Upload all files from this folder to the repo root
3. Go to **Settings → Pages**
4. Set:
   - Source: `Deploy from a branch`
   - Branch: `main` (root)
5. Save — GitHub will give you a live URL.

## Customize
- Squad, fixtures, and points table live in `app.js` under `DATA`.
- Colors and styling live in `styles.css` (search for `--y` and `--b`).

> Note: This is a static demo (no backend). For live scores/points, connect an API later.
