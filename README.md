# Portfolio 2.0

A personal portfolio website showcasing my work as a Full Stack Engineer. Built with a modern, space-themed design, 3D background effects, and smooth animations.

**Live preview:** *(add your deployed link here after deploying, e.g. GitHub Pages or Netlify)*

---

## Features

- **3D background** — Interactive Three.js canvas with geometric shapes and starfield
- **Animated hero** — Typing effect, staggered name reveal, and scroll-triggered animations (GSAP)
- **Dark / light theme** — Toggle with persistent preference
- **Responsive layout** — Mobile menu and adaptable sections for all screen sizes
- **Sections:** Home, About, Skills, Projects, Experience, Contact
- **Contact form** — Send a message via Formspree (no backend required)
- **Back to top** — Button appears on scroll
- **Accessibility** — Skip link, reduced motion support, semantic HTML, ARIA labels
- **SEO** — Meta description, Open Graph, and Twitter Card tags for link previews

---

## Tech Stack

- **HTML5** — Structure and semantics  
- **CSS3** — Custom properties, Flexbox/Grid, animations, responsive design  
- **JavaScript** — Vanilla JS for interactions and animations  
- **Three.js** — 3D background scene  
- **GSAP + ScrollTrigger** — Scroll-based and timeline animations  
- **Font Awesome** — Icons  
- **Google Fonts** — Inter, Space Grotesk, Fira Code  

---

## Project Structure

```
Portfolio_2.0/
├── index.html        # Single-page markup
├── 404.html          # Custom 404 page (GitHub Pages)
├── style.css         # Styles and layout
├── script.js         # Logic, Three.js, GSAP, and UI behavior
├── favicon.svg       # Browser tab icon
├── robots.txt        # Search engine crawler rules
├── .gitignore
├── README.md
├── UPDATE_PLAN.md    # Future improvements checklist
└── Chaitanya_Allu_Resume.pdf   # Add your resume PDF here (optional)
```

---

## Setup (one-time)

### 1. Contact form (Formspree)

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy your **form ID** (e.g. `xpwnqkzw`).
3. In `index.html`, find the contact form and replace `YOUR_FORM_ID` in the `action` URL:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```
   → e.g. `action="https://formspree.io/f/xpwnqkzw"`

### 2. Resume PDF

- Add your resume as **`Chaitanya_Allu_Resume.pdf`** in the project root (same folder as `index.html`), **or**
- Change the resume button/link `href` in `index.html` to your PDF URL (e.g. Google Drive link).

### 3. Project links (optional)

- In `index.html`, replace each project’s `href="#"` with your real **GitHub repo** and **Live Demo** URLs.
- Comments in the HTML show where to paste each link.
- Project 2 (this portfolio) already links to this repo; add your Live Demo URL after deploying.

### 4. Link preview image (optional)

- When you deploy, add an image named **`og-image.png`** (1200×630px) in the project root for better link previews on LinkedIn/Twitter.
- In `index.html` head, update `og:image` and `twitter:image` to your full URL, e.g. `https://yoursite.com/og-image.png`.
- Until then, a placeholder image is used.

---

## How to Run

1. **Clone the repo**
   ```bash
   git clone https://github.com/Allu-Git2026/Portfolio_2.0.git
   cd Portfolio_2.0
   ```

2. **Open in browser**  
   - Double-click `index.html`, or  
   - Use a local server (e.g. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code, or `npx serve .`).

3. **Optional: simple local server**
   ```bash
   npx serve .
   ```
   Then open the URL shown in the terminal (e.g. `http://localhost:3000`).

---

## Deploy (e.g. GitHub Pages)

1. Push your repo to GitHub (you already have [Portfolio_2.0](https://github.com/Allu-Git2026/Portfolio_2.0)).
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Branch: **main**, folder: **/ (root)**. Save.
5. After a minute or two, your site will be at:  
   `https://allu-git2026.github.io/Portfolio_2.0/`
6. Update the **Live preview** link at the top of this README with that URL.
7. (Optional) Add **`og-image.png`** and update the `og:image` / `twitter:image` meta tags in `index.html` with the full URL.

---

## License

This project is open source and available for reference. Feel free to use it as inspiration for your own portfolio.

---

## Contact

**Chaitanya Allu**  
- [LinkedIn](https://www.linkedin.com/in/alluchaitanya/)  
- [GitHub](https://github.com/Allu-Git2026)  
- [Email](mailto:chaitanya.allu26@gmail.com)
