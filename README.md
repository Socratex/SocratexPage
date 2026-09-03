# SocratexPage

Static starter version of the Socratex personal portfolio map.

## Structure

- `index.html` - semantic HTML shell.
- `css/style.css` - visual system, hex tile layout, responsive states, flicker animations.
- `js/app.js` - section data, generated main tiles, hover expansions, mobile flow, content overlay.
- `js/vendor/marked.esm.js` - local Markdown parser, no npm/build step required.
- `content/` - Markdown files rendered inside informational tile panels.
- `assets/logo.png` - Socratex logo used as the central tile.

## Local preview

No build step is required.

Run a tiny static server from this folder:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Panel content is loaded from Markdown files in `content/`. Edit those `.md` files to change the informational tile text.

## Cloudflare Pages

Deploy as a static site.

Use the repository root as the project directory and leave the build command empty.

Recommended Cloudflare Pages settings:

- Build command: empty
- Build output directory: `/`
- Root directory: repository root
