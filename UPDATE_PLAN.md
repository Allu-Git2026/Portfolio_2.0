# Portfolio 2.0 — Update Plan

A phased plan for the next improvements. Tackle in order or pick what matters most.

---

## Phase 1: Quick wins (high impact, low effort)

| # | Task | What to do | Files |
|---|------|------------|--------|
| 1 | **SEO & meta tags** | Add description, Open Graph, and Twitter Card tags so links look good when shared and help search. | `index.html` (head) |
| 2 | **Favicon** | Add a small icon (e.g. "CA" or logo) for the browser tab. | New `favicon.ico` or `.png` + `index.html` |
| 3 | **GitHub link** | Replace footer GitHub `href="#"` with your real profile URL. | `index.html` |
| 4 | **Resume / CV** | Add a "Download resume" or "View resume" button (hero or contact) linking to your PDF. | `index.html` + host PDF or link |

---

## Phase 2: Real project links

| # | Task | What to do | Files |
|---|------|------------|--------|
| 5 | **Project 1 links** | Set GitHub repo and Live Demo URLs for AI-Powered Vulnerability Scanner. | `index.html` |
| 6 | **Project 2 links** | Set GitHub and Live Demo URLs for Personal Portfolio Website. | `index.html` |
| 7 | **Project 3 links** | Set GitHub and Live Demo URLs for Decentralized Student Data Storage. | `index.html` |

Use `target="_blank"` and `rel="noopener noreferrer"` for external links.

---

## Phase 3: Nice-to-have features

| # | Task | What to do | Files |
|---|------|------------|--------|
| 8 | **Back to top** | Add a button that appears on scroll and smooth-scrolls to the top. | `index.html`, `style.css`, `script.js` |
| 9 | **Contact form** | Optional "Send a message" form using Formspree, Netlify Forms, or your backend. | `index.html`, optional backend |
| 10 | **Reduced motion** | Respect `prefers-reduced-motion` (e.g. tone down or disable heavy animations). | `script.js`, `style.css` |

---

## Phase 4: Optional polish

| # | Task | What to do |
|---|------|------------|
| 11 | **Live link in README** | After deploying (e.g. GitHub Pages, Netlify), add the live URL to README.md. | `README.md` |
| 12 | **Analytics** | Add lightweight analytics (e.g. Plausible or Google Analytics) if you want traffic insights. | `index.html` |
| 13 | **Blog / Writing** | If you write, add a "Writing" or "Blog" section with a few posts or links. | New section in `index.html` |

---

## Summary checklist

- [x] Phase 1: SEO, favicon, GitHub link, resume button  
- [ ] Phase 2: Real GitHub/demo links for Projects 1 & 3 (Project 2 done)  
- [x] Phase 3: Back to top, contact form, reduced motion  
- [ ] Phase 4: Live URL in README (add when deployed), analytics (optional), blog (optional)  

**Also done:** Skip link, og:image/twitter:image, theme-color, canonical URL, 404 page, robots.txt, analytics placeholder in HTML.

---

## Next (when you're ready)

- Add your **Formspree form ID** in the contact form `action`.
- Add **Chaitanya_Allu_Resume.pdf** or update resume link to your PDF URL.
- Add **GitHub + Live Demo URLs** for Project 1 and Project 3 in `index.html`.
- **Deploy** to GitHub Pages, then add the live URL to README and update `og:url`/canonical if needed.
- **Analytics:** Uncomment and add Plausible or GA4 script in `index.html` (see comment before `</body>`).

Start with Phase 1; we can implement any item step by step when you’re ready.
