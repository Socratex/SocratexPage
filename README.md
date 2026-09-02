# SocratexPage

Static starter version of the Socratex personal portfolio map.

## Structure

- `index.html` - semantic HTML shell.
- `css/style.css` - visual system, hex tile layout, responsive states, flicker animations.
- `js/app.js` - section data, generated main tiles, hover expansions, mobile flow, content overlay.
- `assets/logo.png` - Socratex logo used as the central tile.

## Local preview

No build step is required.

Open `index.html` directly in a browser, or run a tiny static server from this folder:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Cloudflare Pages

Deploy as a static site.

Use the repository root as the project directory and leave the build command empty.

Recommended Cloudflare Pages settings:

- Build command: empty
- Build output directory: `/`
- Root directory: repository root
