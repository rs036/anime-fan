/* =========================================================
   ANIME FAN — APP.JS
   Frontend V2
========================================================= */

const animeData = {

  trending: [
    {
      id: "one-piece",
      title: "One Piece",
      year: "1999",
      type: "TV",
      rating: "9.2",
      quality: "HD",
      episodes: 1000,
      status: "Ongoing",
      genres: ["Action", "Adventure", "Fantasy"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Follow Monkey D. Luffy and his crew on their legendary journey across the Grand Line in search of the greatest treasure.",
      image: "assets/one-piece.jpg"
    },

    {
      id: "solo-leveling",
      title: "Solo Leveling",
      year: "2024",
      type: "TV",
      rating: "8.9",
      quality: "HD",
      episodes: 24,
      status: "Completed",
      genres: ["Action", "Adventure", "Fantasy"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Awakening as the weakest hunter, Sung Jin-Woo begins a journey to become one of the strongest hunters.",
      image: "assets/solo-leveling.jpg"
    },

    {
      id: "demon-slayer",
      title: "Demon Slayer",
      year: "2019",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      episodes: 26,
      status: "Completed",
      genres: ["Action", "Adventure", "Fantasy"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Tanjiro Kamado begins a dangerous journey after his family is attacked and his sister is turned into a demon.",
      image: "assets/demon-slayer.jpg"
    },

    {
      id: "naruto",
      title: "Naruto",
      year: "2002",
      type: "TV",
      rating: "8.4",
      quality: "HD",
      episodes: 220,
      status: "Completed",
      genres: ["Action", "Adventure"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Naruto Uzumaki dreams of becoming Hokage while growing stronger alongside his friends and rivals.",
      image: "assets/naruto.jpg"
    },

    {
      id: "black-clover",
      title: "Black Clover",
      year: "2017",
      type: "TV",
      rating: "8.2",
      quality: "HD",
      episodes: 170,
      status: "Completed",
      genres: ["Action", "Fantasy", "Adventure"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Asta, a boy born without magic, aims to become the Wizard King through determination and hard work.",
      image: "assets/black-clover.jpg"
    },

    {
      id: "jujutsu-kaisen",
      title: "Jujutsu Kaisen",
      year: "2020",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      episodes: 47,
      status: "Ongoing",
      genres: ["Action", "Supernatural", "Fantasy"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Yuji Itadori enters the world of cursed spirits after becoming involved with a dangerous cursed object.",
      image: "assets/jujutsu-kaisen.jpg"
    },

    {
      id: "attack-on-titan",
      title: "Attack on Titan",
      year: "2013",
      type: "TV",
      rating: "9.1",
      quality: "HD",
      episodes: 89,
      status: "Completed",
      genres: ["Action", "Drama", "Fantasy"],
      languages: ["Hindi Dub", "English Dub", "Japanese"],
      description: "Humanity fights for survival behind enormous walls while terrifying Titans threaten their existence.",
      image: "assets/attack-on-titan.jpg"
    }
  ],

  continueWatching: [
    {
      id: "one-piece",
      title: "One Piece",
      year: "1999",
      type: "EP 19",
      rating: "9.2",
      quality: "HD",
      progress: 65,
      image: "assets/one-piece.jpg"
    },

    {
      id: "demon-slayer",
      title: "Demon Slayer",
      year: "2019",
      type: "EP 12",
      rating: "8.6",
      quality: "HD",
      progress: 38,
      image: "assets/demon-slayer.jpg"
    },

    {
      id: "solo-leveling",
      title: "Solo Leveling",
      year: "2024",
      type: "EP 7",
      rating: "8.9",
      quality: "HD",
      progress: 72,
      image: "assets/solo-leveling.jpg"
    }
  ],

  recentlyAdded: [
    {
      id: "kaiju-no-8",
      title: "Kaiju No. 8",
      year: "2024",
      type: "TV",
      rating: "8.3",
      quality: "NEW",
      episodes: 12,
      image: "assets/kaiju-no-8.jpg"
    },

    {
      id: "blue-lock",
      title: "Blue Lock",
      year: "2022",
      type: "TV",
      rating: "8.1",
      quality: "HD",
      episodes: 24,
      image: "assets/blue-lock.jpg"
    },

    {
      id: "chainsaw-man",
      title: "Chainsaw Man",
      year: "2022",
      type: "TV",
      rating: "8.4",
      quality: "HD",
      episodes: 12,
      image: "assets/chainsaw-man.jpg"
    },

    {
      id: "my-hero-academia",
      title: "My Hero Academia",
      year: "2016",
      type: "TV",
      rating: "8.0",
      quality: "HD",
      episodes: 159,
      image: "assets/my-hero-academia.jpg"
    },

    {
      id: "wind-breaker",
      title: "Wind Breaker",
      year: "2024",
      type: "TV",
      rating: "8.2",
      quality: "NEW",
      episodes: 25,
      image: "assets/wind-breaker.jpg"
    },

    {
      id: "tbate",
      title: "The Beginning After The End",
      year: "2025",
      type: "TV",
      rating: "8.5",
      quality: "NEW",
      episodes: 12,
      image: "assets/tbate.jpg"
    },

    {
      id: "fire-force",
      title: "Fire Force",
      year: "2019",
      type: "TV",
      rating: "7.8",
      quality: "HD",
      episodes: 48,
      image: "assets/fire-force.jpg"
    }
  ],

  movies: [
    {
      id: "your-name",
      title: "Your Name",
      year: "2016",
      type: "Movie",
      rating: "8.8",
      quality: "HD",
      image: "assets/your-name.jpg"
    },

    {
      id: "a-silent-voice",
      title: "A Silent Voice",
      year: "2016",
      type: "Movie",
      rating: "8.9",
      quality: "HD",
      image: "assets/a-silent-voice.jpg"
    },

    {
      id: "suzume",
      title: "Suzume",
      year: "2022",
      type: "Movie",
      rating: "8.1",
      quality: "HD",
      image: "assets/suzume.jpg"
    },

    {
      id: "weathering-with-you",
      title: "Weathering With You",
      year: "2019",
      type: "Movie",
      rating: "8.2",
      quality: "HD",
      image: "assets/weathering-with-you.jpg"
    },

    {
      id: "jjk-0",
      title: "Jujutsu Kaisen 0",
      year: "2021",
      type: "Movie",
      rating: "8.6",
      quality: "HD",
      image: "assets/jjk-0.jpg"
    },

    {
      id: "mugen-train",
      title: "Demon Slayer: Mugen Train",
      year: "2020",
      type: "Movie",
      rating: "8.2",
      quality: "HD",
      image: "assets/mugen-train.jpg"
    },

    {
      id: "dbs-broly",
      title: "Dragon Ball Super: Broly",
      year: "2018",
      type: "Movie",
      rating: "7.7",
      quality: "HD",
      image: "assets/dbs-broly.jpg"
    }
  ],

  hindi: [
    {
      id: "demon-slayer",
      title: "Demon Slayer",
      year: "2019",
      type: "Hindi Dub",
      rating: "8.6",
      quality: "HD",
      image: "assets/demon-slayer.jpg"
    },

    {
      id: "naruto",
      title: "Naruto",
      year: "2002",
      type: "Hindi Dub",
      rating: "8.4",
      quality: "HD",
      image: "assets/naruto.jpg"
    },

    {
      id: "one-piece",
      title: "One Piece",
      year: "1999",
      type: "Hindi Dub",
      rating: "9.2",
      quality: "HD",
      image: "assets/one-piece.jpg"
    },

    {
      id: "jujutsu-kaisen",
      title: "Jujutsu Kaisen",
      year: "2020",
      type: "Hindi Dub",
      rating: "8.6",
      quality: "HD",
      image: "assets/jujutsu-kaisen.jpg"
    },

    {
      id: "black-clover",
      title: "Black Clover",
      year: "2017",
      type: "Hindi Dub",
      rating: "8.2",
      quality: "HD",
      image: "assets/black-clover.jpg"
    }
  ],

  upcoming: [
    { id: "tbate", title: "The Beginning After The End", year: "2025", type: "Coming Soon", rating: "8.5", quality: "NEW", image: "assets/tbate.jpg" },
    { id: "wind-breaker", title: "Wind Breaker", year: "2024", type: "Coming Soon", rating: "8.2", quality: "NEW", image: "assets/wind-breaker.jpg" },
    { id: "fire-force", title: "Fire Force", year: "2019", type: "Coming Soon", rating: "7.8", quality: "NEW", image: "assets/fire-force.jpg" }
  ],

  webseries: [
    { id: "solo-leveling", title: "Solo Leveling", year: "2024", type: "WebSeries", rating: "8.9", quality: "HD", image: "assets/solo-leveling.jpg" },
    { id: "jujutsu-kaisen", title: "Jujutsu Kaisen", year: "2020", type: "WebSeries", rating: "8.6", quality: "HD", image: "assets/jujutsu-kaisen.jpg" },
    { id: "chainsaw-man", title: "Chainsaw Man", year: "2022", type: "WebSeries", rating: "8.4", quality: "HD", image: "assets/chainsaw-man.jpg" }
  ],

  fanDub: [
    { id: "one-piece", title: "One Piece", year: "1999", type: "Fan Dub", rating: "9.2", quality: "HD", image: "assets/one-piece.jpg" },
    { id: "naruto", title: "Naruto", year: "2002", type: "Fan Dub", rating: "8.4", quality: "HD", image: "assets/naruto.jpg" },
    { id: "black-clover", title: "Black Clover", year: "2017", type: "Fan Dub", rating: "8.2", quality: "HD", image: "assets/black-clover.jpg" }
  ],

  completed: [
    { id: "demon-slayer", title: "Demon Slayer", year: "2019", type: "Completed", rating: "8.6", quality: "HD", image: "assets/demon-slayer.jpg" },
    { id: "naruto", title: "Naruto", year: "2002", type: "Completed", rating: "8.4", quality: "HD", image: "assets/naruto.jpg" },
    { id: "attack-on-titan", title: "Attack on Titan", year: "2013", type: "Completed", rating: "9.1", quality: "HD", image: "assets/attack-on-titan.jpg" },
    { id: "death-note", title: "Death Note", year: "2006", type: "Completed", rating: "8.9", quality: "HD", image: "assets/death-note.jpg" }
  ],

  top: [
    {
      id: "attack-on-titan",
      title: "Attack on Titan",
      year: "2013",
      type: "TV",
      rating: "9.1",
      quality: "HD",
      image: "assets/attack-on-titan.jpg"
    },

    {
      id: "one-piece",
      title: "One Piece",
      year: "1999",
      type: "TV",
      rating: "9.2",
      quality: "HD",
      image: "assets/one-piece.jpg"
    },

    {
      id: "death-note",
      title: "Death Note",
      year: "2006",
      type: "TV",
      rating: "8.9",
      quality: "HD",
      image: "assets/death-note.jpg"
    },

    {
      id: "fullmetal-alchemist",
      title: "Fullmetal Alchemist",
      year: "2009",
      type: "TV",
      rating: "9.1",
      quality: "HD",
      image: "assets/fullmetal-alchemist.jpg"
    },

    {
      id: "hunter-x-hunter",
      title: "Hunter x Hunter",
      year: "2011",
      type: "TV",
      rating: "9.0",
      quality: "HD",
      image: "assets/hunter-x-hunter.jpg"
    },

    {
      id: "demon-slayer",
      title: "Demon Slayer",
      year: "2019",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      image: "assets/demon-slayer.jpg"
    },

    {
      id: "jujutsu-kaisen",
      title: "Jujutsu Kaisen",
      year: "2020",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      image: "assets/jujutsu-kaisen.jpg"
    }
  ]
};


/* =========================================================
   GET ALL ANIME
========================================================= */

function getAllAnime() {

  const all = [
    ...animeData.trending,
    ...animeData.recentlyAdded
  ];

  const unique = [];

  all.forEach(item => {

    if (!unique.some(x => x.id === item.id)) {
      unique.push(item);
    }

  });

  return unique;
}


/* =========================================================
   FIND ANIME
========================================================= */

function findAnime(idOrTitle) {

  const all = getAllAnime();

  const value = String(idOrTitle || "").toLowerCase();

  return all.find(anime =>
    anime.id.toLowerCase() === value ||
    anime.title.toLowerCase() === value
  ) || null;
}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function imageFallback(img) {

  img.onerror = null;

  img.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg"
           width="600"
           height="900"
           viewBox="0 0 600 900">
        <rect width="600" height="900" fill="#161616"/>
        <text x="300"
              y="430"
              text-anchor="middle"
              fill="#ff2b2b"
              font-size="42"
              font-family="Arial">
          ANIME FAN
        </text>
        <text x="300"
              y="485"
              text-anchor="middle"
              fill="#999"
              font-size="22"
              font-family="Arial">
          Image unavailable
        </text>
      </svg>
    `);
}


/* =========================================================
   CREATE CARD
========================================================= */

function createAnimeCard(anime) {

  const card = document.createElement("article");

  card.className = "anime-card";

  card.innerHTML = `
    <a href="details.html?anime=${encodeURIComponent(anime.id)}">

      <div class="anime-poster">

        <img
          src="${anime.image || ""}"
          alt="${anime.title}"
          loading="lazy"
          decoding="async"
          onerror="imageFallback(this)"
        >

        <span class="card-rating">
          ⭐ ${anime.rating || "N/A"}
        </span>

        <span class="card-quality">
          ${anime.quality || "HD"}
        </span>

      </div>

      <div class="anime-info">

        <h3 class="anime-title">
          ${anime.title}
        </h3>

        <div class="anime-meta">
          <span>${anime.year || ""}</span>
          <span class="dot">•</span>
          <span>${anime.type || "TV"}</span>
        </div>

        ${
          anime.progress
            ? `
              <div class="progress-wrap">
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    style="width:${anime.progress}%">
                  </div>
                </div>
              </div>
            `
            : ""
        }

      </div>

    </a>
  `;

  return card;
}



/* =========================================================
   HERO CAROUSEL — 10 SLIDES / EXACTLY 5 DOTS
========================================================= */

const heroSlides = [
  ...animeData.trending,
  ...animeData.recentlyAdded
].filter((anime, index, list) =>
  list.findIndex(item => item.id === anime.id) === index
).slice(0, 10);

let heroIndex = 0;
let heroDotStart = 0;
const HERO_VISIBLE_DOTS = 5;

function updateHero() {
  const hero = document.getElementById("heroSection");
  const dots = document.getElementById("heroDots");
  if (!hero || !dots || !heroSlides.length) return;

  const anime = heroSlides[heroIndex];
  const total = heroSlides.length;
  const visibleDots = Math.min(HERO_VISIBLE_DOTS, total);
  const maxStart = Math.max(0, total - visibleDots);

  heroDotStart = Math.max(0, Math.min(heroDotStart, maxStart));

  const badge = hero.querySelector(".hero-badge");
  const title = hero.querySelector("h1");
  const meta = hero.querySelector(".hero-meta");
  const description = hero.querySelector(".hero-description");

  if (badge) badge.textContent = `🔥 #${heroIndex + 1} TRENDING`;
  if (title) title.textContent = anime.title;
  if (meta) meta.innerHTML = `⭐ ${anime.rating} &nbsp; • &nbsp; ${anime.year} &nbsp; • &nbsp; ${anime.type} &nbsp; • &nbsp; ${anime.episodes ? anime.episodes + (anime.episodes >= 100 ? "+ Episodes" : " Episodes") : "Movie"}`;
  if (description) description.textContent = anime.description || `Watch ${anime.title} on Anime Fan.`;

  hero.style.setProperty("--hero-image", `url("${anime.image}")`);

  const watch = document.getElementById("heroWatchBtn");
  if (watch) watch.href = `details.html?anime=${encodeURIComponent(anime.id)}`;

  // IMPORTANT: render ONLY 5 dots. Never render all 10.
  dots.innerHTML = "";
  for (let i = 0; i < visibleDots; i++) {
    const slideIndex = heroDotStart + i;
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot" + (slideIndex === heroIndex ? " active" : "");
    dot.setAttribute("aria-label", `Go to anime ${slideIndex + 1}`);
    dot.setAttribute("aria-current", slideIndex === heroIndex ? "true" : "false");

    dot.addEventListener("click", () => {
      heroIndex = slideIndex;
      // Clicking a dot keeps the active slide inside the visible 5-dot window.
      if (heroIndex < heroDotStart) heroDotStart = heroIndex;
      if (heroIndex >= heroDotStart + visibleDots) {
        heroDotStart = Math.min(heroIndex - visibleDots + 1, maxStart);
      }
      updateHero();
    });

    dots.appendChild(dot);
  }
}

function moveHero(direction) {
  if (!heroSlides.length) return;

  const nextIndex = heroIndex + direction;
  if (nextIndex < 0 || nextIndex >= heroSlides.length) return;

  heroIndex = nextIndex;
  const visibleDots = Math.min(HERO_VISIBLE_DOTS, heroSlides.length);
  const maxStart = Math.max(0, heroSlides.length - visibleDots);

  // Forward: only slide the 5-dot window when the active dot moves past
  // the 5th visible dot.
  if (direction > 0 && heroIndex > heroDotStart + visibleDots - 1) {
    heroDotStart = Math.min(heroDotStart + 1, maxStart);
  }

  // Backward: do NOT move the window until the active slide goes before
  // the 1st visible dot.
  if (direction < 0 && heroIndex < heroDotStart) {
    heroDotStart = Math.max(heroDotStart - 1, 0);
  }

  updateHero();
}

function initHeroCarousel() {
  const hero = document.getElementById("heroSection");
  if (!hero || !heroSlides.length) return;

  updateHero();

  let touchStartX = 0;
  let touchStartY = 0;

  hero.addEventListener("touchstart", event => {
    const touch = event.changedTouches[0];
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
  }, { passive: true });

  hero.addEventListener("touchend", event => {
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    moveHero(dx < 0 ? 1 : -1);
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", initHeroCarousel);

/* =========================================================
   RENDER LIST
========================================================= */

function renderAnimeList(elementId, list) {

  const container = document.getElementById(elementId);

  if (!container) return;

  container.innerHTML = "";

  if (!list || list.length === 0) {

    container.innerHTML = `
      <div class="empty-message">
        No anime found.
      </div>
    `;

    return;
  }

  list.forEach(anime => {

    container.appendChild(
      createAnimeCard(anime)
    );

  });
}


/* =========================================================
   HOME PAGE
========================================================= */

function loadHomePage() {

  renderAnimeList(
    "trendingGrid",
    animeData.trending
  );

  renderAnimeList(
  "continueGrid",
  animeData.continueWatching
);


/* ONGOING ANIME */
const ongoingAnime = [
  ...animeData.trending
].filter(anime => anime.status === "Ongoing");

renderAnimeList(
  "ongoingGrid",
  ongoingAnime
);


/* LATEST EPISODE */
const latestEpisode = [
  ...animeData.continueWatching
];

renderAnimeList(
  "latestEpisodeGrid",
  latestEpisode
);


/* RECENTLY ADDED */
renderAnimeList(
  "recentGrid",
  animeData.recentlyAdded
);

  renderAnimeList(
    "moviesGrid",
    animeData.movies
  );

  renderAnimeList(
    "hindiGrid",
    animeData.hindi
  );

  renderAnimeList(
    "topGrid",
    animeData.top
  );

  renderAnimeList("upcomingGrid", animeData.upcoming);
  renderAnimeList("webseriesGrid", animeData.webseries);
  renderAnimeList("fanDubGrid", animeData.fanDub);
  renderAnimeList("completedGrid", animeData.completed);
}


/* =========================================================
   ANIME PAGE
========================================================= */

function loadAnimePage() {

  const container =
    document.getElementById("allAnime");

  if (!container) return;

  const params =
    new URLSearchParams(window.location.search);

  const query =
    (params.get("search") || "").trim().toLowerCase();

  let list = getAllAnime();

  if (query) {

    list = list.filter(anime =>
      anime.title.toLowerCase().includes(query)
    );

  }

  renderAnimeList(
    "allAnime",
    list
  );

  const heading =
    document.querySelector(".section-head h1");

  if (heading && query) {

    heading.textContent =
      `Search Results: ${params.get("search")}`;

  }

}


/* =========================================================
   MOVIES PAGE
========================================================= */

function loadMoviesPage() {

  const container =
    document.getElementById("movieList");

  if (!container) return;

  renderAnimeList(
    "movieList",
    animeData.movies
  );
}


/* =========================================================
   DETAILS PAGE
========================================================= */

function loadDetailsPage() {

  const titleElement =
    document.getElementById("title");

  if (!titleElement) return;

  const params =
    new URLSearchParams(window.location.search);

  const animeId =
    params.get("anime");

  const anime =
    findAnime(animeId);

  if (!anime) {

    document.title =
      "Anime Not Found - Anime Fan";

    document.querySelector(".details").innerHTML = `
      <div class="empty-message">
        <h1>Anime Not Found</h1>
        <p>This anime is not available.</p>
        <a href="anime.html">← Back to Anime</a>
      </div>
    `;

    return;
  }

  document.title =
    `${anime.title} - Anime Fan`;

  titleElement.textContent =
    anime.title;

  const banner =
    document.querySelector(".detail-banner");

  if (banner) {

    banner.style.backgroundImage =
      `linear-gradient(to bottom, rgba(0,0,0,.15), rgba(0,0,0,.95)),
       url("${anime.image}")`;

    banner.style.backgroundSize =
      "cover";

    banner.style.backgroundPosition =
      "center";
  }

  const poster =
    document.querySelector(".poster");

  if (poster) {

    poster.innerHTML = `
      <img
        src="${anime.image}"
        alt="${anime.title}"
        loading="eager"
        onerror="imageFallback(this)"
      >
    `;
  }

  const info =
    document.querySelector(".detail-info > div:last-child");

  if (info) {

    info.innerHTML = `

      <h1 id="title">
        ${anime.title}
      </h1>

      <div class="stars">
        ⭐ ${anime.rating || "N/A"}/10
        &nbsp; • &nbsp;
        ${anime.type || "TV"}
        &nbsp; • &nbsp;
        ${anime.year || ""}
        &nbsp; • &nbsp;
        ${anime.status || "Ongoing"}
      </div>

      <p>
        ${anime.description || "Anime details coming soon."}
      </p>

      <p>
        <b>Genres:</b>
        ${(anime.genres || []).join(", ")}
      </p>

      <p>
        <b>Episodes:</b>
        ${anime.episodes || "TBA"}
        &nbsp;
        <b>Languages:</b>
        ${(anime.languages || ["Japanese"]).join(", ")}
      </p>

      <div class="detail-buttons">

        <a
          class="primary"
          href="watch.html?anime=${encodeURIComponent(anime.id)}&episode=1">
          ▶ Watch Now
        </a>

        <button
          class="secondary"
          id="myListBtn"
          type="button">
          ＋ Add to My List
        </button>

      </div>
    `;
  }

  createEpisodeList(
    "episodes",
    anime
  );

  setupMyList(
    anime
  );
}


/* =========================================================
   EPISODE LIST
========================================================= */

function createEpisodeList(
  elementId,
  anime
) {

  const container =
    document.getElementById(elementId);

  if (!container) return;

  const total =
    Number(anime.episodes) || 0;

  if (!total) {

    container.innerHTML = `
      <div class="empty-message">
        Episodes will be added soon.
      </div>
    `;

    return;
  }

  const maxForDemo =
    Math.min(total, 1000);

  container.innerHTML = "";

  for (let i = 1; i <= maxForDemo; i++) {

    const link =
      document.createElement("a");

    link.href =
      `watch.html?anime=${encodeURIComponent(anime.id)}&episode=${i}`;

    link.textContent =
      `Episode ${i}`;

    link.className =
      "episode-item";

    container.appendChild(link);
  }
}


/* =========================================================
   MY LIST
========================================================= */

function getMyList() {

  try {

    return JSON.parse(
      localStorage.getItem("animeFanMyList") || "[]"
    );

  } catch {

    return [];

  }
}


function saveMyList(list) {

  localStorage.setItem(
    "animeFanMyList",
    JSON.stringify(list)
  );
}


function setupMyList(anime) {

  const button =
    document.getElementById("myListBtn");

  if (!button) return;

  let list =
    getMyList();

  const exists =
    list.some(item => item.id === anime.id);

  button.textContent =
    exists
      ? "✓ In My List"
      : "＋ Add to My List";

  button.addEventListener("click", () => {

    list =
      getMyList();

    const index =
      list.findIndex(
        item => item.id === anime.id
      );

    if (index >= 0) {

      list.splice(index, 1);

      button.textContent =
        "＋ Add to My List";

    } else {

      list.push({
        id: anime.id,
        title: anime.title,
        image: anime.image
      });

      button.textContent =
        "✓ In My List";
    }

    saveMyList(list);
  });
}


/* =========================================================
   WATCH PAGE
========================================================= */

function loadWatchPage() {

  const label =
    document.getElementById("episodeLabel");

  if (!label) return;

  const params =
    new URLSearchParams(window.location.search);

  const animeId =
    params.get("anime");

  const requestedEpisode =
    Number(params.get("episode")) || 1;

  const anime =
    findAnime(animeId);

  if (!anime) {

    label.textContent =
      "Anime not found";

    return;
  }

  const totalEpisodes =
    Number(anime.episodes) || 1;

  let episode =
    Math.max(
      1,
      Math.min(
        requestedEpisode,
        totalEpisodes
      )
    );

  document.title =
    `${anime.title} - Episode ${episode} - Anime Fan`;

  label.textContent =
    `${anime.title} — Episode ${episode}`;

  const player =
    document.querySelector(".video");

  if (player) {

    player.innerHTML = `
      <div class="video-placeholder">

        <div class="play-icon">
          ▶
        </div>

        <h2>
          ${anime.title}
        </h2>

        <p>
          Episode ${episode}
        </p>

        <small>
          Video player will use the authorized Byse embed URL later.
        </small>

      </div>
    `;
  }

  const prev =
    document.getElementById("prev");

  const next =
    document.getElementById("next");

  /* PREVIOUS */

  if (prev) {

    if (episode > 1) {

      prev.style.display =
        "inline-flex";

      prev.textContent =
        "◀ Previous";

      prev.onclick = () => {

        window.location.href =
          `watch.html?anime=${encodeURIComponent(anime.id)}&episode=${episode - 1}`;

      };

    } else {

      prev.style.display =
        "none";

    }
  }

  /* NEXT */

  if (next) {

    if (episode < totalEpisodes) {

      next.style.display =
        "inline-flex";

      next.textContent =
        "Next ▶";

      next.onclick = () => {

        window.location.href =
          `watch.html?anime=${encodeURIComponent(anime.id)}&episode=${episode + 1}`;

      };

    } else {

      /* LAST EPISODE — NO NEXT BUTTON */

      next.style.display =
        "none";
    }
  }

  createWatchEpisodeList(
    anime,
    episode
  );

  const languageSelect =
    document.getElementById("languageSelect");

  if (languageSelect) {

    languageSelect.innerHTML = "";

    (anime.languages || ["Japanese"])
      .forEach(language => {

        const option =
          document.createElement("option");

        option.value =
          language;

        option.textContent =
          language === "Hindi Dub"
            ? "🇮🇳 Hindi Dub"
            : language === "English Dub"
              ? "🇬🇧 English Dub"
              : "🇯🇵 Original Audio";

        languageSelect.appendChild(option);
      });
  }

  const seasonSelect =
    document.getElementById("seasonSelect");

  if (seasonSelect) {

    seasonSelect.innerHTML =
      `<option value="1">Season 01</option>`;
  }
}


/* =========================================================
   WATCH EPISODES
========================================================= */

function createWatchEpisodeList(
  anime,
  currentEpisode
) {

  const container =
    document.getElementById("watchEpisodes");

  if (!container) return;

  const total =
    Number(anime.episodes) || 0;

  container.innerHTML = "";

  const max =
    Math.min(total, 1000);

  for (let i = 1; i <= max; i++) {

    const link =
      document.createElement("a");

    link.href =
      `watch.html?anime=${encodeURIComponent(anime.id)}&episode=${i}`;

    link.textContent =
      `EP ${i}`;

    link.className =
      "episode-item";

    if (i === currentEpisode) {

      link.classList.add("active");

    }

    container.appendChild(link);
  }
}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  const menuBtn =
    document.getElementById("menuBtn");

  const closeMenu =
    document.getElementById("closeMenu");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const overlay =
    document.getElementById("menuOverlay");

  function openMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.add("open");
    overlay?.classList.add("open");

    document.body.style.overflow =
      "hidden";
  }

  function closeMenuFn() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove("open");
    overlay?.classList.remove("open");

    document.body.style.overflow =
      "";
  }

  menuBtn?.addEventListener(
    "click",
    openMenu
  );

  closeMenu?.addEventListener(
    "click",
    closeMenuFn
  );

  overlay?.addEventListener(
    "click",
    closeMenuFn
  );
}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  const searchBtn =
    document.getElementById("searchBtn");

  const mobileSearch =
    document.getElementById("mobileSearch");

  const searchInput =
    document.getElementById("searchInput");

  const searchSubmit =
    document.getElementById("searchSubmit");

  searchBtn?.addEventListener(
    "click",
    () => {

      mobileSearch?.classList.toggle(
        "open"
      );

      if (
        mobileSearch?.classList.contains("open")
      ) {

        setTimeout(
          () => searchInput?.focus(),
          100
        );

      }

    }
  );

  function performSearch() {

    const query =
      searchInput?.value.trim();

    if (!query) {

      window.location.href =
        "anime.html";

      return;
    }

    window.location.href =
      "anime.html?search=" +
      encodeURIComponent(query);
  }

  searchSubmit?.addEventListener(
    "click",
    performSearch
  );

  searchInput?.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        performSearch();

      }

    }
  );
}


/* =========================================================
   OLD SEARCH INPUTS — ANIME/MOVIES PAGE
========================================================= */

function setupPageSearch() {

  const input =
    document.getElementById("search");

  if (!input) return;

  input.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {

        const query =
          input.value.trim();

        if (
          window.location.pathname.endsWith(
            "movies.html"
          )
        ) {

          return;

        }

        window.location.href =
          "anime.html?search=" +
          encodeURIComponent(query);
      }

    }
  );
}


/* =========================================================
   THEME
========================================================= */

function setupTheme() {

  const themeBtn =
    document.getElementById("themeBtn");

  if (!themeBtn) return;

  themeBtn.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "light-theme"
      );

      const light =
        document.body.classList.contains(
          "light-theme"
        );

      localStorage.setItem(
        "animeFanTheme",
        light ? "light" : "dark"
      );

      themeBtn.textContent =
        light ? "☀" : "☾";
    }
  );

  const saved =
    localStorage.getItem(
      "animeFanTheme"
    );

  if (saved === "light") {

    document.body.classList.add(
      "light-theme"
    );

    themeBtn.textContent =
      "☀";
  }
}


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    loadHomePage();

    loadAnimePage();

    loadMoviesPage();

    loadDetailsPage();

    loadWatchPage();

    setupMobileMenu();

    setupSearch();

    setupPageSearch();

    setupTheme();

  }
);

/* =========================================================
   HERO CAROUSEL — INFINITE LOOP
   10 SLIDES
   10 -> 1
   1 -> 10
========================================================= */

(function initHeroCarousel() {

  const hero = document.getElementById("heroSection");
  const dotsBox = document.getElementById("heroDots");

  if (!hero || !dotsBox || typeof animeData === "undefined") {
    return;
  }

  /* 10 unique anime */
  const heroSlides = [
    ...(animeData.trending || []),
    ...(animeData.recentlyAdded || [])
  ]
    .filter((anime, index, arr) =>
      arr.findIndex(x => x.id === anime.id) === index
    )
    .slice(0, 10);

  if (!heroSlides.length) return;

  let heroIndex = 0;
  let heroDotStart = 0;

  const heroBadge = hero.querySelector(".hero-badge");
  const heroTitle = hero.querySelector("h1");
  const heroMeta = hero.querySelector(".hero-meta");
  const heroDescription = hero.querySelector(".hero-description");
  const heroWatchBtn = document.getElementById("heroWatchBtn");

  /* ---------------------------------------------------------
     DOT WINDOW
  --------------------------------------------------------- */

  function updateDotWindow() {

    const total = heroSlides.length;

    if (total <= 5) {
      heroDotStart = 0;
      return;
    }

    if (heroIndex > heroDotStart + 4) {
      heroDotStart = heroIndex - 4;
    }

    if (heroIndex < heroDotStart) {
      heroDotStart = heroIndex;
    }

    if (heroDotStart > total - 5) {
      heroDotStart = total - 5;
    }

    if (heroDotStart < 0) {
      heroDotStart = 0;
    }
  }


  /* ---------------------------------------------------------
     RENDER DOTS
  --------------------------------------------------------- */

  function renderDots() {

    updateDotWindow();

    dotsBox.innerHTML = "";

    const total = heroSlides.length;

    for (let i = 0; i < Math.min(5, total); i++) {

      const actualIndex =
        (heroDotStart + i) % total;

      const dot = document.createElement("button");

      dot.type = "button";
      dot.className = "hero-dot";

      dot.setAttribute(
        "aria-label",
        `Go to anime ${actualIndex + 1}`
      );

      if (actualIndex === heroIndex) {
        dot.classList.add("active");
        dot.setAttribute("aria-current", "true");
      }

      dot.addEventListener("click", () => {

        heroIndex = actualIndex;

        renderHero();

      });

      dotsBox.appendChild(dot);
    }
  }


  /* ---------------------------------------------------------
     RENDER HERO
  --------------------------------------------------------- */

  function renderHero() {

    const anime = heroSlides[heroIndex];

    if (!anime) return;

    hero.style.setProperty(
      "--hero-image",
      `url("${anime.image}")`
    );

    if (heroTitle) {
      heroTitle.textContent = anime.title;
    }

    if (heroMeta) {
      heroMeta.innerHTML =
        `⭐ ${anime.rating || ""} &nbsp; • &nbsp; ` +
        `${anime.year || ""} &nbsp; • &nbsp; ` +
        `${anime.type || "TV"} &nbsp; • &nbsp; ` +
        `${anime.episodes ? anime.episodes + " Episodes" : ""}`;
    }

    if (heroDescription) {
      heroDescription.textContent =
        anime.description || "";
    }

    if (heroBadge) {
      heroBadge.textContent =
        `🔥 #${heroIndex + 1} TRENDING`;
    }

    if (heroWatchBtn && anime.id) {
      heroWatchBtn.href =
        `anime-detail.html?anime=${encodeURIComponent(anime.id)}`;
    }

    renderDots();
  }


  /* NEXT — 10 ke baad 1 */
window.nextHero = function () {

  heroIndex = (heroIndex + 1) % heroSlides.length;

  renderHero();
};


/* PREVIOUS — 1 se pehle 10 */
window.prevHero = function () {

  heroIndex =
    (heroIndex - 1 + heroSlides.length) %
    heroSlides.length;

  renderHero();
};


  /* ---------------------------------------------------------
     SWIPE
  --------------------------------------------------------- */

  let touchStartX = 0;
  let touchEndX = 0;

  hero.addEventListener(
    "touchstart",
    function (e) {

      touchStartX =
        e.changedTouches[0].screenX;

    },
    { passive: true }
  );


  hero.addEventListener(
    "touchend",
    function (e) {

      touchEndX =
        e.changedTouches[0].screenX;

      const distance =
        touchStartX - touchEndX;

      if (Math.abs(distance) < 45) return;

      if (distance > 0) {
        nextHero();
      } else {
        prevHero();
      }

    },
    { passive: true }
  );


  /* ---------------------------------------------------------
     AUTO SLIDE
  --------------------------------------------------------- */

  let heroTimer =
    setInterval(nextHero, 5000);


  hero.addEventListener("mouseenter", () => {
    clearInterval(heroTimer);
  });


  hero.addEventListener("mouseleave", () => {
    heroTimer =
      setInterval(nextHero, 5000);
  });


  /* FIRST LOAD */

  renderHero();

})();

/* =========================================================
   NOTIFICATIONS
========================================================= */

function setupNotifications() {

  const button =
    document.getElementById("notificationBtn");

  if (!button) return;


  /* Create panel only once */

  let panel =
    document.getElementById("notificationPanel");


  if (!panel) {

    panel =
      document.createElement("div");

    panel.id =
      "notificationPanel";

    panel.className =
      "notification-panel";


    panel.innerHTML = `

      <div class="notification-head">

        <h3>
          Notifications
        </h3>

        <button
          type="button"
          id="clearNotifications">
          Clear
        </button>

      </div>


      <div id="notificationList">

        <div class="notification-item">

          <div class="notification-icon">
            🔥
          </div>

          <div class="notification-content">

            <strong>
              New Anime Added
            </strong>

            <p>
              New anime has been added to Anime Fan.
            </p>

            <span class="notification-time">
              Just now
            </span>

          </div>

        </div>


        <div class="notification-item">

          <div class="notification-icon">
            ▶
          </div>

          <div class="notification-content">

            <strong>
              Latest Episode
            </strong>

            <p>
              A new episode is available to watch.
            </p>

            <span class="notification-time">
              1 hour ago
            </span>

          </div>

        </div>


        <div class="notification-item">

          <div class="notification-icon">
            📩
          </div>

          <div class="notification-content">

            <strong>
              Request Anime
            </strong>

            <p>
              You can request your favorite anime.
            </p>

            <span class="notification-time">
              Today
            </span>

          </div>

        </div>

      </div>
    `;


    document.body.appendChild(panel);

  }


  function closeNotification() {

    panel.classList.remove("open");

  }


  button.addEventListener(
    "click",
    function(event) {

      event.stopPropagation();

      panel.classList.toggle("open");

    }
  );


  panel.addEventListener(
    "click",
    function(event) {

      event.stopPropagation();

    }
  );


  document.addEventListener(
    "click",
    closeNotification
  );


  const clearBtn =
    document.getElementById(
      "clearNotifications"
    );


  clearBtn?.addEventListener(
    "click",
    function() {

      const list =
        document.getElementById(
          "notificationList"
        );

      if (!list) return;

      list.innerHTML = `

        <div class="notification-empty">

          ✓ You're all caught up

        </div>

      `;

    }
  );

}


/* =========================================================
   INIT NOTIFICATIONS
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setupNotifications();

  }
);
