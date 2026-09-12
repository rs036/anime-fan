# Anime Fan — responsive anime streaming UI

A vanilla HTML/CSS/JS starter rebuilt around the requested **Anime Fan** feature set.

## Included
- Dark black/navy + neon purple/blue responsive UI
- Home: trending, popular genres, continue watching, recently added, Hindi Dub, movies, My List, anime request
- Anime details: poster/banner-style hero, description, genres, year, status, rating, episodes, languages and season/language selectors
- Watch page: episode list, language/season selectors, previous/next, like/share/report, comments, download gate UI
- Browser LocalStorage for Continue Watching, My List, comments and requests (same browser/device only)
- Admin page with demo admin login, anime/audio/ad management UI, moderation UI and configurable ad schedule
- No end-user login/signup

## Demo admin
Username: `admin`
Password: `admin123`

This credential is only a frontend demo. Production authentication must be implemented server-side with hashed passwords and sessions.

## Production requirements
Connect a real API/database, authorized/licensed video provider, object storage/CDN, authentication for `/admin`, comment/report moderation, and a server-side ad/download service. Do not use copyrighted anime streams or downloads without permission.
