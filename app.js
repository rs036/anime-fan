/* =========================================================
   ANIME FAN - APP.JS
   Watch Page + Details + Anime + Movies
   ========================================================= */

const animeData = {

  "one-piece": {
    id: "one-piece",
    title: "One Piece",
    poster: "assets/one-piece.jpg",
    banner: "assets/hero.jpg",
    description: "Monkey D. Luffy and his crew travel across the Grand Line in search of the legendary One Piece.",
    genres: "Action, Adventure, Fantasy",
    year: "1999",
    status: "Ongoing",
    rating: "9.0/10",
    episodes: 10,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "solo-leveling": {
    id: "solo-leveling",
    title: "Solo Leveling",
    poster: "assets/solo-leveling.jpg",
    banner: "assets/solo-leveling.jpg",
    description: "Sung Jin-Woo begins his journey from the weakest hunter to one of the strongest beings.",
    genres: "Action, Adventure, Fantasy",
    year: "2024",
    status: "Completed",
    rating: "9.2/10",
    episodes: 24,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "demon-slayer": {
    id: "demon-slayer",
    title: "Demon Slayer",
    poster: "assets/demon-slayer.jpg",
    banner: "assets/demon-slayer.jpg",
    description: "Tanjiro Kamado joins the Demon Slayer Corps after tragedy strikes his family.",
    genres: "Action, Adventure, Fantasy",
    year: "2019",
    status: "Completed",
    rating: "9.0/10",
    episodes: 26,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "naruto": {
    id: "naruto",
    title: "Naruto",
    poster: "assets/naruto.jpg",
    banner: "assets/naruto.jpg",
    description: "Naruto Uzumaki dreams of becoming the strongest ninja and earning the respect of his village.",
    genres: "Action, Adventure, Ninja",
    year: "2002",
    status: "Completed",
    rating: "8.4/10",
    episodes: 220,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "black-clover": {
    id: "black-clover",
    title: "Black Clover",
    poster: "assets/black-clover.jpg",
    banner: "assets/black-clover.jpg",
    description: "Asta, a boy without magic, dreams of becoming the Wizard King.",
    genres: "Action, Adventure, Fantasy",
    year: "2017",
    status: "Completed",
    rating: "8.3/10",
    episodes: 170,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "jujutsu-kaisen": {
    id: "jujutsu-kaisen",
    title: "Jujutsu Kaisen",
    poster: "assets/jujutsu-kaisen.jpg",
    banner: "assets/jujutsu-kaisen.jpg",
    description: "Yuji Itadori enters the world of cursed spirits and jujutsu sorcerers.",
    genres: "Action, Supernatural, Fantasy",
    year: "2020",
    status: "Ongoing",
    rating: "8.8/10",
    episodes: 24,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "attack-on-titan": {
    id: "attack-on-titan",
    title: "Attack on Titan",
    poster: "assets/attack-on-titan.jpg",
    banner: "assets/attack-on-titan.jpg",
    description: "Humanity fights for survival against terrifying Titans beyond the walls.",
    genres: "Action, Drama, Fantasy",
    year: "2013",
    status: "Completed",
    rating: "9.1/10",
    episodes: 25,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "kaiju-no-8": {
    id: "kaiju-no-8",
    title: "Kaiju No. 8",
    poster: "assets/kaiju-no-8.jpg",
    banner: "assets/kaiju-no-8.jpg",
    description: "Kafka Hibino gets a second chance to achieve his dream of joining the defense force.",
    genres: "Action, Sci-Fi, Adventure",
    year: "2024",
    status: "Ongoing",
    rating: "8.5/10",
    episodes: 12,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "blue-lock": {
    id: "blue-lock",
    title: "Blue Lock",
    poster: "assets/blue-lock.jpg",
    banner: "assets/blue-lock.jpg",
    description: "Young football players compete in a brutal project designed to create the world's greatest striker.",
    genres: "Sports, Action, Drama",
    year: "2022",
    status: "Ongoing",
    rating: "8.2/10",
    episodes: 24,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "chainsaw-man": {
    id: "chainsaw-man",
    title: "Chainsaw Man",
    poster: "assets/chainsaw-man.jpg",
    banner: "assets/chainsaw-man.jpg",
    description: "Denji becomes Chainsaw Man after merging with his devil companion Pochita.",
    genres: "Action, Horror, Supernatural",
    year: "2022",
    status: "Ongoing",
    rating: "8.6/10",
    episodes: 12,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "my-hero-academia": {
    id: "my-hero-academia",
    title: "My Hero Academia",
    poster: "assets/my-hero-academia.jpg",
    banner: "assets/my-hero-academia.jpg",
    description: "Izuku Midoriya dreams of becoming a hero in a world where superpowers are common.",
    genres: "Action, Superhero, Fantasy",
    year: "2016",
    status: "Completed",
    rating: "8.3/10",
    episodes: 13,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "wind-breaker": {
    id: "wind-breaker",
    title: "Wind Breaker",
    poster: "assets/wind-breaker.jpg",
    banner: "assets/wind-breaker.jpg",
    description: "Haruka Sakura enters a school known for its powerful fighters.",
    genres: "Action, School, Drama",
    year: "2024",
    status: "Ongoing",
    rating: "8.2/10",
    episodes: 13,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "tbate": {
    id: "tbate",
    title: "The Beginning After the End",
    poster: "assets/tbate.jpg",
    banner: "assets/tbate.jpg",
    description: "A powerful king is reincarnated into a magical world and begins a new life.",
    genres: "Action, Adventure, Fantasy",
    year: "2025",
    status: "Ongoing",
    rating: "8.4/10",
    episodes: 12,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "fire-force": {
    id: "fire-force",
    title: "Fire Force",
    poster: "assets/fire-force.jpg",
    banner: "assets/fire-force.jpg",
    description: "Special fire soldiers fight mysterious infernals and uncover the truth behind spontaneous combustion.",
    genres: "Action, Supernatural, Fantasy",
    year: "2019",
    status: "Completed",
    rating: "8.5/10",
    episodes: 24,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "your-name": {
    id: "your-name",
    title: "Your Name",
    poster: "assets/your-name.jpg",
    banner: "assets/your-name.jpg",
    description: "Two teenagers mysteriously begin switching bodies and discover a connection across time.",
    genres: "Romance, Drama, Fantasy",
    year: "2016",
    status: "Movie",
    rating: "8.8/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "a-silent-voice": {
    id: "a-silent-voice",
    title: "A Silent Voice",
    poster: "assets/a-silent-voice.jpg",
    banner: "assets/a-silent-voice.jpg",
    description: "A former bully tries to reconnect with a deaf girl he once hurt.",
    genres: "Drama, Romance, School",
    year: "2016",
    status: "Movie",
    rating: "8.9/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "suzume": {
    id: "suzume",
    title: "Suzume",
    poster: "assets/suzume.jpg",
    banner: "assets/suzume.jpg",
    description: "Suzume encounters a mysterious young man and becomes involved in a journey across Japan.",
    genres: "Adventure, Fantasy, Romance",
    year: "2022",
    status: "Movie",
    rating: "8.4/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "weathering-with-you": {
    id: "weathering-with-you",
    title: "Weathering With You",
    poster: "assets/weathering-with-you.jpg",
    banner: "assets/weathering-with-you.jpg",
    description: "A runaway boy meets a girl who appears to have the power to control the weather.",
    genres: "Romance, Fantasy, Drama",
    year: "2019",
    status: "Movie",
    rating: "8.2/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "jjk-0": {
    id: "jjk-0",
    title: "Jujutsu Kaisen 0",
    poster: "assets/jjk-0.jpg",
    banner: "assets/jjk-0.jpg",
    description: "Yuta Okkotsu enters Jujutsu High while haunted by the spirit of his childhood friend.",
    genres: "Action, Fantasy, Supernatural",
    year: "2021",
    status: "Movie",
    rating: "8.7/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "mugen-train": {
    id: "mugen-train",
    title: "Demon Slayer: Mugen Train",
    poster: "assets/mugen-train.jpg",
    banner: "assets/mugen-train.jpg",
    description: "Tanjiro and his friends join Flame Hashira Kyojuro Rengoku aboard the Mugen Train.",
    genres: "Action, Fantasy, Adventure",
    year: "2020",
    status: "Movie",
    rating: "8.6/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "dbs-broly": {
    id: "dbs-broly",
    title: "Dragon Ball Super: Broly",
    poster: "assets/dbs-broly.jpg",
    banner: "assets/dbs-broly.jpg",
    description: "Goku and Vegeta face the legendary Saiyan Broly.",
    genres: "Action, Adventure, Fantasy",
    year: "2018",
    status: "Movie",
    rating: "8.0/10",
    episodes: 1,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "death-note": {
    id: "death-note",
    title: "Death Note",
    poster: "assets/death-note.jpg",
    banner: "assets/death-note.jpg",
    description: "A mysterious notebook gives Light Yagami the power to kill anyone whose name he writes inside it.",
    genres: "Mystery, Psychological, Supernatural",
    year: "2006",
    status: "Completed",
    rating: "9.0/10",
    episodes: 37,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "fullmetal-alchemist": {
    id: "fullmetal-alchemist",
    title: "Fullmetal Alchemist",
    poster: "assets/fullmetal-alchemist.jpg",
    banner: "assets/fullmetal-alchemist.jpg",
    description: "Two brothers search for the Philosopher's Stone after a failed attempt at human transmutation.",
    genres: "Action, Adventure, Fantasy",
    year: "2003",
    status: "Completed",
    rating: "8.9/10",
    episodes: 51,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  },

  "hunter-x-hunter": {
    id: "hunter-x-hunter",
    title: "Hunter x Hunter",
    poster: "assets/hunter-x-hunter.jpg",
    banner: "assets/hunter-x-hunter.jpg",
    description: "Gon Freecss sets out to become a Hunter and find his father.",
    genres: "Action, Adventure, Fantasy",
    year: "2011",
    status: "Completed",
    rating: "9.0/10",
    episodes: 148,
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    byse: {}
  }

};


/* =========================================================
   ALL ANIME
   ========================================================= */

function getAllAnime() {
  return Object.values(animeData);
}

function findAnime(id) {
  return animeData[id] || null;
}


/* =========================================================
   IMAGE FALLBACK
   ========================================================= */

function imageFallback(img) {
  if (!img) return;

  img.onerror = function () {
    this.onerror = null;
    this.src =
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg"
             width="400"
             height="600"
             viewBox="0 0 400 600">
          <rect width="400" height="600" fill="#111"/>
          <text x="200"
                y="290"
                fill="#aaa"
                font-size="24"
                text-anchor="middle">
            Anime Fan
          </text>
        </svg>
      `);
  };
}


/* =========================================================
   ANIME CARD
   ========================================================= */

function createAnimeCard(anime) {
  return `
    <a class="card" href="details.html?anime=${encodeURIComponent(anime.id)}">

      <div class="card-image">
        <img
          src="${anime.poster}"
          alt="${anime.title}"
          loading="lazy"
          onerror="imageFallback(this)"
        >
      </div>

      <div class="card-body">
        <h3>${anime.title}</h3>
        <p>${anime.year} • ${anime.rating}</p>
      </div>

    </a>
  `;
}


/* =========================================================
   HOME PAGE
   ========================================================= */

function loadHomePage() {

  const trending = document.getElementById("trendingGrid");
  const continueGrid = document.getElementById("continueGrid");
  const recent = document.getElementById("recentGrid");
  const movies = document.getElementById("moviesGrid");
  const hindi = document.getElementById("hindiGrid");
  const top = document.getElementById("topGrid");

  const list = getAllAnime();

  if (trending) {
    trending.innerHTML = list.slice(0, 8)
      .map(createAnimeCard)
      .join("");
  }

  if (continueGrid) {
    continueGrid.innerHTML = list.slice(1, 5)
      .map(createAnimeCard)
      .join("");
  }

  if (recent) {
    recent.innerHTML = list.slice(8, 16)
      .map(createAnimeCard)
      .join("");
  }

  if (movies) {
    movies.innerHTML = list
      .filter(a => a.status === "Movie")
      .slice(0, 8)
      .map(createAnimeCard)
      .join("");
  }

  if (hindi) {
    hindi.innerHTML = list
      .filter(a => a.languages.includes("Hindi Dub"))
      .slice(0, 8)
      .map(createAnimeCard)
      .join("");
  }

  if (top) {
    top.innerHTML = [...list]
      .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
      .slice(0, 8)
      .map(createAnimeCard)
      .join("");
  }
}


/* =========================================================
   ANIME PAGE
   ========================================================= */

function loadAnimePage() {

  const container = document.getElementById("allAnime");

  if (!container) return;

  container.innerHTML = getAllAnime()
    .filter(a => a.status !== "Movie")
    .map(createAnimeCard)
    .join("");
}


/* =========================================================
   MOVIES PAGE
   ========================================================= */

function loadMoviesPage() {

  const container = document.getElementById("movieList");

  if (!container) return;

  container.innerHTML = getAllAnime()
    .filter(a => a.status === "Movie")
    .map(createAnimeCard)
    .join("");
}


/* =========================================================
   DETAILS PAGE
   ========================================================= */

function loadDetailsPage() {

  if (!document.body.classList.contains("details") &&
      !document.querySelector(".details")) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = params.get("anime");

  const anime = findAnime(id);

  const title = document.getElementById("title");
  const episodeContainer = document.getElementById("episodes");

  if (!anime) {

    if (title) {
      title.textContent = "Anime Not Found";
    }

    if (episodeContainer) {
      episodeContainer.innerHTML =
        `<p>Anime information could not be found.</p>`;
    }

    return;
  }


  document.title = `${anime.title} - Anime Fan`;


  if (title) {
    title.textContent = anime.title;
  }


  const banner = document.querySelector(".detail-banner");

  if (banner) {
    banner.style.backgroundImage =
      `url("${anime.banner || anime.poster}")`;
  }


  const poster = document.querySelector(".poster");

  if (poster) {

    poster.innerHTML = `
      <img
        src="${anime.poster}"
        alt="${anime.title}"
        onerror="imageFallback(this)"
      >
    `;

  }


  const info = document.querySelector(".detail-info");

  if (info) {

    const content = info.querySelector("div:last-child");

    if (content) {

      const meta = content.querySelector(".stars");

      if (meta) {
        meta.textContent =
          `★ ${anime.rating}  •  ${anime.year}  •  ${anime.status}`;
      }

      const paragraphs = content.querySelectorAll("p");

      if (paragraphs[0]) {
        paragraphs[0].textContent = anime.description;
      }

      if (paragraphs[1]) {
        paragraphs[1].innerHTML =
          `<b>Genres:</b> ${anime.genres}`;
      }

      if (paragraphs[2]) {
        paragraphs[2].innerHTML =
          `<b>Episodes:</b> ${anime.episodes}
           &nbsp; <b>Languages:</b>
           ${anime.languages.join(", ")}`;
      }

      const watchButton =
        content.querySelector(".primary");

      if (watchButton) {
        watchButton.href =
          `watch.html?anime=${anime.id}&episode=1`;
      }

    }

  }


  if (episodeContainer) {

    let html = "";

    for (let i = 1; i <= anime.episodes; i++) {

      html += `
        <a
          class="episode"
          href="watch.html?anime=${encodeURIComponent(anime.id)}&episode=${i}"
        >
          Episode ${i}
        </a>
      `;

    }

    episodeContainer.innerHTML = html;
  }


  setupMyListButton(anime);

}


/* =========================================================
   MY LIST
   ========================================================= */

function setupMyListButton(anime) {

  const button = document.getElementById("myListBtn");

  if (!button) return;

  const key = "animeFanMyList";

  let saved = JSON.parse(
    localStorage.getItem(key) || "[]"
  );

  const isSaved = saved.includes(anime.id);

  button.textContent =
    isSaved ? "✓ Added to My List" : "＋ Add to My List";


  button.onclick = function () {

    saved = JSON.parse(
      localStorage.getItem(key) || "[]"
    );

    if (saved.includes(anime.id)) {

      saved = saved.filter(id => id !== anime.id);

      button.textContent = "＋ Add to My List";

    } else {

      saved.push(anime.id);

      button.textContent = "✓ Added to My List";
    }

    localStorage.setItem(
      key,
      JSON.stringify(saved)
    );

  };

}


/* =========================================================
   WATCH PAGE
   ========================================================= */

function loadWatchPage() {

  const player = document.getElementById("videoPlayer");

  if (!player) return;


  const params = new URLSearchParams(
    window.location.search
  );

  const animeId = params.get("anime");

  let episode =
    parseInt(params.get("episode") || "1", 10);


  const anime = findAnime(animeId);


  if (!anime) {

    player.innerHTML = `
      <div class="watch-error">
        <h2>Anime Not Found</h2>
        <p>The requested anime could not be found.</p>
        <a href="index.html">← Back to Home</a>
      </div>
    `;

    return;
  }


  /* Safety */

  if (episode < 1) {
    episode = 1;
  }

  if (episode > anime.episodes) {
    episode = anime.episodes;
  }


  document.title =
    `${anime.title} Episode ${episode} - Anime Fan`;


  const title =
    document.getElementById("watchTitle");

  const label =
    document.getElementById("episodeLabel");


  if (title) {
    title.textContent = anime.title;
  }

  if (label) {
    label.textContent =
      `Episode ${episode}`;
  }


  /* Language */

  const languageSelect =
    document.getElementById("languageSelect");


  if (languageSelect) {

    languageSelect.innerHTML =
      anime.languages
        .map((language, index) => {

          const flag =
            language === "Hindi Dub"
              ? "🇮🇳"
              : language === "English Dub"
              ? "🇬🇧"
              : "🇯🇵";

          return `
            <option value="${language}" ${index === 0 ? "selected" : ""}>
              ${flag} ${language}
            </option>
          `;

        })
        .join("");

  }


  /* Season */

  const seasonSelect =
    document.getElementById("seasonSelect");


  if (seasonSelect) {

    seasonSelect.innerHTML = `
      <option value="1">Season 01</option>
    `;

  }


  /* Player */

  renderVideoPlayer(
    player,
    anime,
    episode
  );


  /* Previous */

  const prev =
    document.getElementById("prev");


  if (prev) {

    if (episode <= 1) {

      prev.style.display = "none";

    } else {

      prev.style.display = "";

      prev.onclick = function () {

        goToEpisode(
          anime.id,
          episode - 1
        );

      };

    }

  }


  /* Next */

  const next =
    document.getElementById("next");


  if (next) {

    if (episode >= anime.episodes) {

      next.style.display = "none";

    } else {

      next.style.display = "";

      next.onclick = function () {

        goToEpisode(
          anime.id,
          episode + 1
        );

      };

    }

  }


  /* Episode count */

  const episodeCount =
    document.getElementById("episodeCount");

  if (episodeCount) {
    episodeCount.textContent =
      `${anime.episodes} Episodes`;
  }


  /* Episode list */

  createWatchEpisodeList(
    anime,
    episode
  );


  /* Language change */

  if (languageSelect) {

    languageSelect.onchange = function () {

      renderVideoPlayer(
        player,
        anime,
        episode,
        this.value
      );

    };

  }


  /* Season change */

  if (seasonSelect) {

    seasonSelect.onchange = function () {

      const selectedSeason =
        this.value;

      window.location.href =
        `watch.html?anime=${encodeURIComponent(anime.id)}&episode=1&season=${encodeURIComponent(selectedSeason)}`;

    };

  }

}


/* =========================================================
   VIDEO PLAYER
   ========================================================= */

function renderVideoPlayer(
  player,
  anime,
  episode,
  language
) {

  const selectedLanguage =
    language || anime.languages[0];


  /*
    BYSE EMBED SUPPORT

    Add your authorized Byse embed URL like this:

    byse: {
      "1": "YOUR-BYSE-EMBED-URL"
    }

    Or per language:

    byse: {
      "Hindi Dub": {
        "1": "YOUR-BYSE-EMBED-URL"
      }
    }

    Until a URL is added, the player will show
    "Video not available yet".
  */


  let embedUrl = "";


  if (anime.byse) {

    if (
      anime.byse[selectedLanguage] &&
      anime.byse[selectedLanguage][episode]
    ) {

      embedUrl =
        anime.byse[selectedLanguage][episode];

    } else if (
      anime.byse[episode]
    ) {

      embedUrl =
        anime.byse[episode];

    }

  }


  if (embedUrl) {

    player.innerHTML = `
      <iframe
        src="${escapeHtml(embedUrl)}"
        title="${escapeHtml(anime.title)} Episode ${episode}"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer"
      ></iframe>
    `;

  } else {

    player.innerHTML = `
      <div class="player-message">
        <div class="play-icon">▶</div>
        <h2>${escapeHtml(anime.title)}</h2>
        <p>
          Episode ${episode} • ${escapeHtml(selectedLanguage)}
        </p>
        <p style="margin-top:10px;">
          Video is not available yet.
        </p>
      </div>
    `;

  }

}


/* =========================================================
   EPISODE LIST
   ========================================================= */

function createWatchEpisodeList(
  anime,
  currentEpisode
) {

  const container =
    document.getElementById("watchEpisodes");

  if (!container) return;


  let html = "";


  for (
    let i = 1;
    i <= anime.episodes;
    i++
  ) {

    html += `
      <a
        class="watch-episode ${i === currentEpisode ? "active" : ""}"
        href="watch.html?anime=${encodeURIComponent(anime.id)}&episode=${i}"
      >
        ${i}
      </a>
    `;

  }


  container.innerHTML = html;

}


/* =========================================================
   GO TO EPISODE
   ========================================================= */

function goToEpisode(
  animeId,
  episode
) {

  window.location.href =
    `watch.html?anime=${encodeURIComponent(animeId)}&episode=${episode}`;

}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {

  const inputs =
    document.querySelectorAll(
      "#search, #mobileSearch"
    );


  inputs.forEach(input => {

    input.addEventListener(
      "keydown",
      function (event) {

        if (event.key !== "Enter") {
          return;
        }

        const query =
          this.value.trim();

        if (!query) {
          return;
        }

        window.location.href =
          `anime.html?search=${encodeURIComponent(query)}`;

      }
    );

  });

}


/* =========================================================
   ANIME PAGE SEARCH
   ========================================================= */

function setupAnimeSearch() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const query =
    params.get("search");


  if (!query) return;


  const container =
    document.getElementById("allAnime");

  if (!container) return;


  const q =
    query.toLowerCase();


  const results =
    getAllAnime().filter(anime =>
      anime.title
        .toLowerCase()
        .includes(q)
    );


  if (!results.length) {

    container.innerHTML = `
      <div style="grid-column:1/-1;text-align:center;padding:40px 10px;">
        <h2>No Anime Found</h2>
        <p>Try another search.</p>
      </div>
    `;

    return;
  }


  container.innerHTML =
    results.map(createAnimeCard).join("");

}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

  const menuButton =
    document.getElementById("menuBtn");

  const menu =
    document.getElementById("mobileMenu");


  if (!menuButton || !menu) {
    return;
  }


  menuButton.addEventListener(
    "click",
    function () {

      menu.classList.toggle("open");

    }
  );

}


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

  const button =
    document.getElementById("themeBtn");

  if (!button) return;


  button.addEventListener(
    "click",
    function () {

      document.body.classList.toggle(
        "light-theme"
      );

    }
  );

}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    loadHomePage();

    loadAnimePage();

    loadMoviesPage();

    loadDetailsPage();

    loadWatchPage();

    setupSearch();

    setupAnimeSearch();

    setupMobileMenu();

    setupTheme();

  }
);
