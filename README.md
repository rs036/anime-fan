# Anime Fan — v6 GitHub Pages Fix

This version fixes the blank artwork problem by bundling the design-preview artwork locally in `assets/`.

## Upload to GitHub Pages
Upload **all files and the `assets` folder** to the same branch/root:
- index.html
- anime.html
- watch.html
- admin.html
- styles.css
- app.js
- assets/

Do not delete the `assets` folder. GitHub Pages serves the images with relative paths such as `assets/hero.jpg`.

### Important
The bundled artwork is cropped from the design reference supplied for this project and is intended as a visual prototype. Before public launch, replace it with artwork you have permission to use.

Firebase, real authentication, the video provider, downloads, comments, requests, and admin persistence are intentionally not connected yet. Those can be added after the frontend is confirmed working.
