# roybouabboud.com

Roy Bouabboud's personal site. Plain static HTML, no build step, hosted on GitHub Pages.

## Edit and deploy
- Pages: `index.html` (landing: Currently, project cards, Previously), `professional.html`, `projects.html`, `hobbies.html`. Shared styles in `style.css`. Edit the HTML directly.
- Project cards link to `projects.html#<id>`; Currently/Previously bullets link to `professional.html#<id>`. Keep ids in sync.
- Media: a `<div class="media stub">` is a stand-in box. To add a photo or video, put the file in `media/` and replace the stub with `<div class="media"><img src="media/x.jpg" alt="..."></div>` (or `<video src=... autoplay muted loop playsinline>`).
- Push to the `main` branch; GitHub Pages republishes within a minute or two.
- `CNAME` holds the custom domain. Add it (one line: `roybouabboud.com`) only once the domain is bought and DNS is set; never delete it after that, or Pages drops the domain.

## Hosting
GitHub Pages: Settings → Pages → Source "Deploy from a branch", branch `main`, folder `/ (root)`. Custom domain `roybouabboud.com`, Enforce HTTPS on.

## DNS (Namecheap → Domain List → Manage → Advanced DNS)
| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | roybouabboud.github.io. |

Delete Namecheap's default parking records (the `@` URL redirect and `www` CNAME to parkingpage) first.
