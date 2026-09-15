# Anime-Fan-GitHub-Ready

Mobile-friendly static starter for the Anime Fan website shown in the reference design.

## Files
- `index.html` — Home page
- `anime.html` — Anime details, language selector, seasons, episodes, comments, request form
- `watch.html` — Watch page/player UI, episode list and resume-playback demo
- `admin.html` — Admin dashboard UI with episode/download fields and configurable ad schedule
- `styles.css` — Responsive dark/red anime theme
- `app.js` — Demo catalog, cards, episode rendering, search, My List and localStorage helpers

## Important
This ZIP is a **frontend/GitHub-ready prototype**. It does not contain copyrighted anime videos or a production backend.

For production:
1. Host the static files with GitHub Pages or another static host.
2. Connect Firebase/another backend for database, admin data, comments and requests.
3. Put only content you are authorized to distribute on a suitable video/storage service.
4. Replace the demo player with your authorized HLS/MP4 player.
5. Add real admin authentication before exposing `admin.html`.
6. Configure your ad provider and ad timings from the admin/database layer.

## Mobile workflow
You can edit these files directly in a mobile code editor, upload them to a GitHub repository, and enable GitHub Pages.

## Design
The layout follows the supplied reference: dark background, red/cyan borders, anime cards, sidebar navigation, featured hero, details page, watch page and admin panel. It is responsive for phone and desktop screens.

## No user login
The frontend intentionally has no normal user login. Admin authentication should be added separately when connecting the backend.
