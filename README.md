# Santhosh Kumar — Portfolio (Glassmorphism)

Static HTML/CSS/JS portfolio, glassmorphism style, mobile responsive. No build step.

Structure and page flow mirror the original reference portfolio: single-page nav-toggle
(Home/About/Projects/Achievements/Research/Contact), Projects → category → detail pages,
Achievements → Certificates / Snaps — restyled glass, made responsive.

## Structure

```
Portfolio-Glass/
  index.html                        Home/About/Projects/Achievements/Research/Contact (nav-toggle sections)
  css/style.css
  js/script.js
  projects/
    index.html                      category selector
    iot.html                        project list (5 cards)
    smart-level-crossing.html
    smart-water-tank.html
    smart-shoe-healthcare.html
    smart-attendance-rfid.html
    smart-security-rfid.html
  achievements/
    certificates.html                grid + zoom modal
    snaps.html                       responsive gallery + lightbox
  assets/images/
    profile.png
    projects/*                       project detail images
    certificates/*                   certificate images
    snaps/*                          snap photos
```

## Run locally

Open `index.html` in browser, or serve it:

```
npx serve .
```

## Deploy to GitHub Pages

1. Push this folder as repo root (or a repo).
2. Repo Settings → Pages → Source: `main` branch, `/ (root)`.
3. Site goes live at `https://<username>.github.io/<repo>/`.

## Customize

- Edit content directly in `index.html`.
- Colors/theme: CSS variables at top of `css/style.css` (`--accent`, `--bg`, etc).
- Replace `assets/images/profile.png` with your own photo.
