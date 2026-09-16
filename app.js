/* =========================================================
   ANIME FAN — FRONTEND V1
   Details + Search + Watch + My List
========================================================= */

const animeData = [

  {
    id: "one-piece",
    title: "One Piece",
    year: "1999",
    status: "Ongoing",
    rating: "9.2",
    type: "TV",
    episodes: 1150,
    image: "assets/one-piece.jpg",
    banner: "assets/hero.jpg",
    description: "Monkey D. Luffy and his crew sail across the Grand Line in search of the legendary One Piece treasure.",
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "solo-leveling",
    title: "Solo Leveling",
    year: "2024",
    status: "Completed",
    rating: "8.9",
    type: "TV",
    episodes: 25,
    image: "assets/solo-leveling.jpg",
    banner: "assets/solo-leveling.jpg",
    description: "Sung Jin-Woo starts as the weakest hunter but gains a mysterious system that allows him to level up.",
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "demon-slayer",
    title: "Demon Slayer",
    year: "2019",
    status: "Completed",
    rating: "8.6",
    type: "TV",
    episodes: 63,
    image: "assets/demon-slayer.jpg",
    banner: "assets/demon-slayer.jpg",
    description: "Tanjiro Kamado joins the Demon Slayer Corps after his family is attacked and his sister is turned into a demon.",
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "naruto",
    title: "Naruto",
    year: "2002",
    status: "Completed",
    rating: "8.4",
    type: "TV",
    episodes: 220,
    image: "assets/naruto.jpg",
    banner: "assets/naruto.jpg",
    description: "Naruto Uzumaki dreams of becoming Hokage while growing stronger alongside his friends and rivals.",
    genres: ["Action", "Adventure", "Martial Arts"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "black-clover",
    title: "Black Clover",
    year: "2017",
    status: "Completed",
    rating: "8.2",
    type: "TV",
    episodes: 170,
    image: "assets/black-clover.jpg",
    banner: "assets/black-clover.jpg",
    description: "Asta, a boy born without magic, aims to become the Wizard King through hard work and determination.",
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    year: "2020",
    status: "Ongoing",
    rating: "8.6",
    type: "TV",
    episodes: 47,
    image: "assets/jujutsu-kaisen.jpg",
    banner: "assets/jujutsu-kaisen.jpg",
    description: "Yuji Itadori enters the dangerous world of cursed spirits after swallowing a powerful cursed object.",
    genres: ["Action", "Supernatural", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "attack-on-titan",
    title: "Attack on Titan",
    year: "2013",
    status: "Completed",
    rating: "9.1",
    type: "TV",
    episodes: 89,
    image: "assets/attack-on-titan.jpg",
    banner: "assets/attack-on-titan.jpg",
    description: "Humanity fights for survival against terrifying Titans beyond the walls.",
    genres: ["Action", "Drama", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "kaiju-no-8",
    title: "Kaiju No. 8",
    year: "2024",
    status: "Ongoing",
    rating: "8.3",
    type: "TV",
    episodes: 23,
    image: "assets/kaiju-no-8.jpg",
    banner: "assets/kaiju-no-8.jpg",
    description: "Kafka Hibino gains the ability to transform into a powerful kaiju while trying to join the Defense Force.",
    genres: ["Action", "Sci-Fi", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "blue-lock",
    title: "Blue Lock",
    year: "2022",
    status: "Ongoing",
    rating: "8.1",
    type: "TV",
    episodes: 38,
    image: "assets/blue-lock.jpg",
    banner: "assets/blue-lock.jpg",
    description: "Japan creates a revolutionary football training program to develop the world's greatest striker.",
    genres: ["Sports", "Drama"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    year: "2022",
    status: "Ongoing",
    rating: "8.4",
    type: "TV",
    episodes: 12,
    image: "assets/chainsaw-man.jpg",
    banner: "assets/chainsaw-man.jpg",
    description: "Denji becomes Chainsaw Man after merging with his devil companion Pochita.",
    genres: ["Action", "Horror", "Supernatural"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "my-hero-academia",
    title: "My Hero Academia",
    year: "2016",
    status: "Completed",
    rating: "8.0",
    type: "TV",
    episodes: 170,
    image: "assets/my-hero-academia.jpg",
    banner: "assets/my-hero-academia.jpg",
    description: "Izuku Midoriya dreams of becoming a hero despite being born without a Quirk.",
    genres: ["Action", "Superhero", "Adventure"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "wind-breaker",
    title: "Wind Breaker",
    year: "2024",
    status: "Ongoing",
    rating: "8.2",
    type: "TV",
    episodes: 25,
    image: "assets/wind-breaker.jpg",
    banner: "assets/wind-breaker.jpg",
    description: "Haruka Sakura arrives at Furin High School to prove himself through strength.",
    genres: ["Action", "School", "Drama"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "fire-force",
    title: "Fire Force",
    year: "2019",
    status: "Ongoing",
    rating: "8.4",
    type: "TV",
    episodes: 48,
    image: "assets/fire-force.jpg",
    banner: "assets/fire-force.jpg",
    description: "Special fire soldiers battle mysterious infernals while investigating the truth behind spontaneous human combustion.",
    genres: ["Action", "Fantasy", "Supernatural"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "death-note",
    title: "Death Note",
    year: "2006",
    status: "Completed",
    rating: "8.9",
    type: "TV",
    episodes: 37,
    image: "assets/death-note.jpg",
    banner: "assets/death-note.jpg",
    description: "A mysterious notebook gives Light Yagami the power to kill anyone whose name he writes in it.",
    genres: ["Mystery", "Psychological", "Thriller"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "fullmetal-alchemist",
    title: "Fullmetal Alchemist",
    year: "2003",
    status: "Completed",
    rating: "8.5",
    type: "TV",
    episodes: 51,
    image: "assets/fullmetal-alchemist.jpg",
    banner: "assets/fullmetal-alchemist.jpg",
    description: "Two brothers use alchemy in search of the Philosopher's Stone after a failed attempt to bring their mother back.",
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  },

  {
    id: "hunter-x-hunter",
    title: "Hunter x Hunter",
    year: "2011",
    status: "Completed",
    rating: "9.0",
    type: "TV",
    episodes: 148,
    image: "assets/hunter-x-hunter.jpg",
    banner: "assets/hunter-x-hunter.jpg",
    description: "Gon Freecss becomes a Hunter and begins an adventure to find his mysterious father.",
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["🇮🇳 Hindi Dub", "🇬🇧 English Dub", "🇯🇵 Original Audio"]
  }

];


/* ---------- HELPERS ---------- */

function getAnime(id) {
  return animeData.find(a => a.id === id);
}

function slug(text) {
  return text.toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function fallbackImage(img) {
  return img || "assets/hero.jpg";
}


/* ---------- CARD ---------- */

function createAnimeCard(anime) {
  return `
    <a class="card" href="details.html?anime=${encodeURIComponent(anime.id)}">
      <div class="card-image">
        <img
          src="${fallbackImage(anime.image)}"
          alt="${anime.title}"
          loading="lazy"
          onerror="this.onerror=null;this.src='assets/hero.jpg';"
        >
        <span class="badge">${anime.quality || "HD"}</span>
      </div>

      <div class="card-body">
        <h3>${anime.title}</h3>
        <div class="meta">
          <span>★ ${anime.rating}</span>
          <span>${anime.year}</span>
          <span>${anime.type}</span>
        </div>
      </div>
    </a>
  `;
}


/* ---------- ALL ANIME ---------- */

function renderAllAnime(list = animeData) {
  const box = document.getElementById("allAnime");
  if (!box) return;

  if (!list.length) {
    box.innerHTML = `
      <div class="empty-state">
        <h2>No Anime Found</h2>
        <p>Try another anime name.</p>
      </div>
    `;
    return;
  }

  box.innerHTML = list.map(createAnimeCard).join("");
}


/* ---------- HOME ---------- */

function renderSection(id, filter) {
  const box = document.getElementById(id);
  if (!box) return;

  const list = filter ? animeData.filter(filter) : animeData.slice(0, 7);
  box.innerHTML = list.map(createAnimeCard).join("");
}

function loadHomePage() {
  renderSection("trending", () => true);
  renderSection("recentlyAdded", () => true);
  renderSection("topAnime", () => true);
  renderSection("hindiAnime", a =>
    a.languages.some(l => l.includes("Hindi"))
  );
}


/* ---------- ANIME PAGE SEARCH ---------- */

function loadAnimePage() {
  const box = document.getElementById("allAnime");
  if (!box) return;

  const params = new URLSearchParams(location.search);
  const search = (params.get("search") || "").trim().toLowerCase();

  if (!search) {
    renderAllAnime();
    return;
  }

  const results = animeData.filter(a =>
    a.title.toLowerCase().includes(search) ||
    a.genres.some(g => g.toLowerCase().includes(search))
  );

  renderAllAnime(results);
}


/* ---------- DETAILS PAGE ---------- */

function loadDetailsPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get("anime");
  const anime = getAnime(id);

  if (!anime) {
    document.title = "Anime Not Found - Anime Fan";

    const main = document.querySelector("main");
    if (main) {
      main.innerHTML = `
        <div class="empty-state">
          <h1>Anime Not Found</h1>
          <p>This anime does not exist in the current database.</p>
          <a class="primary" href="anime.html">← Back to Anime</a>
        </div>
      `;
    }
    return;
  }

  document.title = `${anime.title} - Anime Fan`;

  const title = document.getElementById("title");
  const banner = document.querySelector(".detail-banner");
  const poster = document.querySelector(".poster");
  const info = document.querySelector(".detail-info");

  if (title) title.textContent = anime.title;

  if (banner) {
    banner.style.backgroundImage =
      `linear-gradient(to bottom, transparent, rgba(5,5,10,.95)), url("${anime.banner}")`;
  }

  if (poster) {
    poster.innerHTML = `
      <img
        src="${anime.image}"
        alt="${anime.title}"
        onerror="this.onerror=null;this.src='assets/hero.jpg';"
      >
    `;
  }

  if (info) {
    const content = info.querySelector("div:last-child");

    if (content) {
      content.innerHTML = `
        <h1 id="title">${anime.title}</h1>

        <div class="stars">
          ★ ${anime.rating}/10
          &nbsp; ${anime.type}
          &nbsp; ${anime.year}
          &nbsp; ${anime.status}
        </div>

        <p>${anime.description}</p>

        <p>
          <b>Genres:</b>
          ${anime.genres.join(", ")}
        </p>

        <p>
          <b>Episodes:</b> ${anime.episodes}
          &nbsp;
          <b>Languages:</b> ${anime.languages.join(", ")}
        </p>

        <button
          class="primary"
          onclick="location.href='watch.html?anime=${anime.id}&episode=1'"
        >
          ▶ Watch Now
        </button>

        <button
          class="secondary"
          id="myListButton"
          onclick="toggleMyList('${anime.id}')"
        >
          ＋ Add to My List
        </button>
      `;
    }
  }

  createEpisodeList(anime);
  updateMyListButton(anime.id);
}


/* ---------- EPISODES ---------- */

function createEpisodeList(anime) {
  const box = document.getElementById("episodes");
  if (!box) return;

  let html = "";

  for (let i = 1; i <= anime.episodes; i++) {
    html += `
      <a
        class="episode"
        href="watch.html?anime=${anime.id}&episode=${i}"
      >
        EP ${i}
      </a>
    `;
  }

  box.innerHTML = html;
}


/* ---------- WATCH PAGE ---------- */

function loadWatchPage() {
  const params = new URLSearchParams(location.search);
  const id = params.get("anime");
  const anime = getAnime(id);

  if (!anime) {
    document.querySelector("main").innerHTML = `
      <div class="empty-state">
        <h1>Anime Not Found</h1>
        <a class="primary" href="anime.html">← Back</a>
      </div>
    `;
    return;
  }

  let episode = parseInt(params.get("episode"), 10) || 1;

  if (episode < 1) episode = 1;
  if (episode > anime.episodes) episode = anime.episodes;

  document.title = `Watch ${anime.title} EP ${episode} - Anime Fan`;

  const label = document.getElementById("episodeLabel");
  if (label) {
    label.textContent = `${anime.title} • Episode ${episode}`;
  }

  const video = document.querySelector(".video");

  if (video) {
    video.innerHTML = `
      <div class="video-placeholder">
        <div class="play-icon">▶</div>
        <h3>${anime.title}</h3>
        <p>Episode ${episode}</p>
        <small>Byse video URL will be connected here.</small>
      </div>
    `;
  }

  setupWatchButtons(anime, episode);
  createWatchEpisodeList(anime, episode);
  setupWatchSelectors(anime, episode);
}


/* ---------- WATCH BUTTONS ---------- */

function setupWatchButtons(anime, episode) {
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  if (prev) {
    if (episode > 1) {
      prev.style.display = "";
      prev.onclick = () => {
        location.href =
          `watch.html?anime=${anime.id}&episode=${episode - 1}`;
      };
    } else {
      prev.style.display = "none";
    }
  }

  if (next) {
    if (episode < anime.episodes) {
      next.style.display = "";
      next.onclick = () => {
        location.href =
          `watch.html?anime=${anime.id}&episode=${episode + 1}`;
      };
    } else {
      next.style.display = "none";
    }
  }
}


/* ---------- WATCH EPISODE LIST ---------- */

function createWatchEpisodeList(anime, currentEpisode) {
  const box = document.getElementById("watchEpisodes");
  if (!box) return;

  let html = "";

  for (let i = 1; i <= anime.episodes; i++) {
    html += `
      <a
        class="episode ${i === currentEpisode ? "active" : ""}"
        href="watch.html?anime=${anime.id}&episode=${i}"
      >
        EP ${i}
      </a>
    `;
  }

  box.innerHTML = html;
}


/* ---------- LANGUAGE / SEASON ---------- */

function setupWatchSelectors(anime, episode) {
  const selects = document.querySelectorAll(".watch-controls select");

  if (!selects.length) return;

  const languageSelect = selects[0];
  const seasonSelect = selects[1];

  if (languageSelect) {
    languageSelect.innerHTML = anime.languages
      .map(lang => `<option>${lang}</option>`)
      .join("");
  }

  if (seasonSelect) {
    seasonSelect.innerHTML = `<option>Season 01</option>`;
  }
}


/* ---------- MY LIST ---------- */

function getMyList() {
  try {
    return JSON.parse(localStorage.getItem("animeFanMyList")) || [];
  } catch {
    return [];
  }
}

function saveMyList(list) {
  localStorage.setItem("animeFanMyList", JSON.stringify(list));
}

function toggleMyList(id) {
  const list = getMyList();
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);
  } else {
    list.splice(index, 1);
  }

  saveMyList(list);
  updateMyListButton(id);
}

function updateMyListButton(id) {
  const button = document.getElementById("myListButton");
  if (!button) return;

  const list = getMyList();

  if (list.includes(id)) {
    button.textContent = "✓ Added to My List";
  } else {
    button.textContent = "＋ Add to My List";
  }
}


/* ---------- SEARCH HEADER ---------- */

function setupSearch() {
  const search = document.getElementById("search");
  if (!search) return;

  search.addEventListener("keydown", event => {
    if (event.key !== "Enter") return;

    const value = search.value.trim();

    if (!value) {
      location.href = "anime.html";
      return;
    }

    location.href =
      `anime.html?search=${encodeURIComponent(value)}`;
  });
}


/* ---------- MOBILE MENU ---------- */

function setupMobileMenu() {
  const menuButton = document.querySelector(".top-actions");

  if (!menuButton) return;

  menuButton.addEventListener("click", event => {
    if (event.target.tagName === "INPUT") return;

    document.querySelector("nav")?.classList.toggle("show");
  });
}


/* ---------- INIT ---------- */

document.addEventListener("DOMContentLoaded", () => {

  loadHomePage();
  loadAnimePage();

  if (document.querySelector(".detail-banner")) {
    loadDetailsPage();
  }

  if (document.querySelector(".watch")) {
    loadWatchPage();
  }

  setupSearch();
  setupMobileMenu();

});
