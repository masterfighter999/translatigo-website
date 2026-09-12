# Translatigo — Static Site (GitHub → Hostinger)

Pure HTML/CSS/JS. No PHP, no WordPress, no build step, no database.

## Structure

```
index.html              → homepage (unchanged from your original design)
blog/index.html         → FAQ Hub landing page (list of post cards)
blog/posts/sample-post.html → template for one FAQ post — duplicate this per entry
```

## Adding a new FAQ post

1. Copy `blog/posts/sample-post.html` → `blog/posts/your-slug.html`
2. Edit the marked `<!-- CHANGE: ... -->` spots: title, date, and content inside the `tg-content` card
3. Open `blog/index.html` and duplicate one `<article class="card-brutal ...">` block inside `#post-list`, updating its title, date, excerpt, and the two links to point to your new file

No CMS, no admin panel — it's just files. Since everything is static, adding a post is a normal git commit + push; there's no server-side moving part to break.

## Deploying

1. Push this repo to GitHub
2. Enable **GitHub Pages** (Settings → Pages) if you want a github.io mirror
3. In Hostinger's hPanel, connect the site to this GitHub repo (Git deployment) — check under your website's Advanced/Git settings whether this is available on your plan
4. Every push to the connected branch should redeploy automatically once that's wired up

## Notes

- All internal links use root-relative paths (`/`, `/blog/`, `/blog/posts/...`), so this works identically whether it's served from Hostinger's domain root or a matching path on GitHub Pages
- Tailwind is loaded via CDN (`cdn.tailwindcss.com`) — no build step required
- Fonts (Space Grotesk, JetBrains Mono) load from Google Fonts CDN
- If you later want a real CMS-backed blog instead of hand-duplicated HTML files, that's what the earlier WordPress option was for — this static version trades that convenience for zero backend dependency
