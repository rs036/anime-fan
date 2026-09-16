/* =========================================================
   ANIME FAN — APP.JS
========================================================= */

const animeData = {

  trending: [
    {
      title: "One Piece",
      year: "1999",
      type: "TV",
      rating: "9.2",
      quality: "HD",
      image: "assets/one-piece.jpg"
    },
    {
      title: "Solo Leveling",
      year: "2024",
      type: "TV",
      rating: "8.9",
      quality: "HD",
      image: "assets/solo-leveling.jpg"
    },
    {
      title: "Demon Slayer",
      year: "2019",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      image: "assets/demon-slayer.jpg"
    },
    {
      title: "Naruto",
      year: "2002",
      type: "TV",
      rating: "8.4",
      quality: "HD",
      image: "assets/naruto.jpg"
    },
    {
      title: "Black Clover",
      year: "2017",
      type: "TV",
      rating: "8.2",
      quality: "HD",
      image: "assets/black-clover.jpg"
    },
    {
      title: "Jujutsu Kaisen",
      year: "2020",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      image: "assets/jujutsu-kaisen.jpg"
    },
    {
      title: "Attack on Titan",
      year: "2013",
      type: "TV",
      rating: "9.1",
      quality: "HD",
      image: "assets/attack-on-titan.jpg"
    }
  ],

  continueWatching: [
    {
      title: "One Piece",
      year: "1999",
      type: "EP 19",
      rating: "9.2",
      quality: "HD",
      progress: 65,
      image: "assets/one-piece.jpg"
    },
    {
      title: "Demon Slayer",
      year: "2019",
      type: "EP 12",
      rating: "8.6",
      quality: "HD",
      progress: 38,
      image: "assets/demon-slayer.jpg"
    },
    {
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
      title: "Kaiju No. 8",
      year: "2024",
      type: "TV",
      rating: "8.3",
      quality: "NEW",
      image: "assets/kaiju-no-8.jpg"
    },
    {
      title: "Blue Lock",
      year: "2022",
      type: "TV",
      rating: "8.1",
      quality: "HD",
      image: "assets/blue-lock.jpg"
    },
    {
      title: "Chainsaw Man",
      year: "2022",
      type: "TV",
      rating: "8.4",
      quality: "HD",
      image: "assets/chainsaw-man.jpg"
    },
    {
      title: "My Hero Academia",
      year: "2016",
      type: "TV",
      rating: "8.0",
      quality: "HD",
      image: "assets/my-hero-academia.jpg"
    },
    {
      title: "Wind Breaker",
      year: "2024",
      type: "TV",
      rating: "8.2",
      quality: "NEW",
      image: "assets/wind-breaker.jpg"
    },
    {
      title: "The Beginning After The End",
      year: "2025",
      type: "TV",
      rating: "8.5",
      quality: "NEW",
      image: "assets/tbate.jpg"
    },
    {
      title: "Fire Force",
      year: "2019",
      type: "TV",
      rating: "7.8",
      quality: "HD",
      image: "assets/fire-force.jpg"
    }
  ],

  movies: [
    {
      title: "Your Name",
      year: "2016",
      type: "Movie",
      rating: "8.8",
      quality: "HD",
      image: "assets/your-name.jpg"
    },
    {
      title: "A Silent Voice",
      year: "2016",
      type: "Movie",
      rating: "8.9",
      quality: "HD",
      image: "assets/a-silent-voice.jpg"
    },
    {
      title: "Suzume",
      year: "2022",
      type: "Movie",
      rating: "8.1",
      quality: "HD",
      image: "assets/suzume.jpg"
    },
    {
      title: "Weathering With You",
      year: "2019",
      type: "Movie",
      rating: "8.2",
      quality: "HD",
      image: "assets/weathering-with-you.jpg"
    },
    {
      title: "Jujutsu Kaisen 0",
      year: "2021",
      type: "Movie",
      rating: "8.6",
      quality: "HD",
      image: "assets/jjk-0.jpg"
    },
    {
      title: "Demon Slayer: Mugen Train",
      year: "2020",
      type: "Movie",
      rating: "8.2",
      quality: "HD",
      image: "assets/mugen-train.jpg"
    },
    {
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
      title: "Demon Slayer",
      year: "2019",
      type: "Hindi Dub",
      rating: "8.6",
      quality: "HD",
      image: "assets/demon-slayer.jpg"
    },
    {
      title: "Naruto",
      year: "2002",
      type: "Hindi Dub",
      rating: "8.4",
      quality: "HD",
      image: "assets/naruto.jpg"
    },
    {
      title: "One Piece",
      year: "1999",
      type: "Hindi Dub",
      rating: "9.2",
      quality: "HD",
      image: "assets/one-piece.jpg"
    },
    {
      title: "Jujutsu Kaisen",
      year: "2020",
      type: "Hindi Dub",
      rating: "8.6",
      quality: "HD",
      image: "assets/jujutsu-kaisen.jpg"
    },
    {
      title: "Black Clover",
      year: "2017",
      type: "Hindi Dub",
      rating: "8.2",
      quality: "HD",
      image: "assets/black-clover.jpg"
    }
  ],

  top: [
    {
      title: "Attack on Titan",
      year: "2013",
      type: "TV",
      rating: "9.1",
      quality: "HD",
      image: "assets/attack-on-titan.jpg"
    },
    {
      title: "One Piece",
      year: "1999",
      type: "TV",
      rating: "9.2",
      quality: "HD",
      image: "assets/one-piece.jpg"
    },
    {
      title: "Death Note",
      year: "2006",
      type: "TV",
      rating: "8.9",
      quality: "HD",
      image: "assets/death-note.jpg"
    },
    {
      title: "Fullmetal Alchemist",
      year: "2009",
      type: "TV",
      rating: "9.1",
      quality: "HD",
      image: "assets/fullmetal-alchemist.jpg"
    },
    {
      title: "Hunter x Hunter",
      year: "2011",
      type: "TV",
      rating: "9.0",
      quality: "HD",
      image: "assets/hunter-x-hunter.jpg"
    },
    {
      title: "Demon Slayer",
      year: "2019",
      type: "TV",
      rating: "8.6",
      quality: "HD",
      image: "assets/demon-slayer.jpg"
    },
    {
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
   CREATE ANIME CARD
========================================================= */

function createAnimeCard(anime) {

  const card = document.createElement("article");

  card.className = "anime-card";

  card.innerHTML = `
    <a href="details.html?anime=${encodeURIComponent(anime.title)}">

      <div class="anime-poster">

        <img
          src="${anime.image}"
          alt="${anime.title}"
          loading="lazy"
          onerror="this.style.display='none'"
        >

        <span class="card-rating">
          ⭐ ${anime.rating}
        </span>

        <span class="card-quality">
          ${anime.quality}
        </span>

      </div>

      <div class="anime-info">

        <h3 class="anime-title">
          ${anime.title}
        </h3>

        <div class="anime-meta">
          <span>${anime.year}</span>
          <span class="dot">•</span>
          <span>${anime.type}</span>
        </div>

        ${
          anime.progress
            ? `
              <div class="progress-wrap">
                <div class="progress-bar">
                  <div
                    class="progress-fill"
                    style="width:${anime.progress}%"
                  ></div>
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
   RENDER SECTION
========================================================= */

function renderAnimeList(elementId, list) {

  const container = document.getElementById(elementId);

  if (!container) return;

  container.innerHTML = "";

  list.forEach(anime => {
    container.appendChild(createAnimeCard(anime));
  });
}


/* =========================================================
   LOAD HOME PAGE
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

}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.getElementById("menuOverlay");

function openMobileMenu() {

  if (!mobileMenu) return;

  mobileMenu.classList.add("open");
  menuOverlay?.classList.add("open");

  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {

  if (!mobileMenu) return;

  mobileMenu.classList.remove("open");
  menuOverlay?.classList.remove("open");

  document.body.style.overflow = "";
}

menuBtn?.addEventListener("click", openMobileMenu);

closeMenu?.addEventListener("click", closeMobileMenu);

menuOverlay?.addEventListener("click", closeMobileMenu);


/* =========================================================
   SEARCH
========================================================= */

const searchBtn = document.getElementById("searchBtn");
const mobileSearch = document.getElementById("mobileSearch");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");

searchBtn?.addEventListener("click", () => {

  mobileSearch?.classList.toggle("open");

  if (mobileSearch?.classList.contains("open")) {
    setTimeout(() => {
      searchInput?.focus();
    }, 100);
  }

});


function performSearch() {

  const query = searchInput?.value.trim();

  if (!query) return;

  window.location.href =
    "anime.html?search=" +
    encodeURIComponent(query);
}

searchSubmit?.addEventListener("click", performSearch);

searchInput?.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    performSearch();
  }

});


/* =========================================================
   THEME
========================================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn?.addEventListener("click", () => {

  document.body.classList.toggle("light-theme");

  const isLight =
    document.body.classList.contains("light-theme");

  localStorage.setItem(
    "animeFanTheme",
    isLight ? "light" : "dark"
  );

  themeBtn.textContent =
    isLight ? "☀" : "☾";

});


function loadTheme() {

  const savedTheme =
    localStorage.getItem("animeFanTheme");

  if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    if (themeBtn) {
      themeBtn.textContent = "☀";
    }

  }

}


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  loadHomePage();

  loadTheme();

});
