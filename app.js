/* =========================================================
   ANIME FAN V2.3
   Premium Black + Red Frontend Upgrade
   ========================================================= */

const animeData = {
  "one-piece": {
    title: "One Piece",
    desc: "Follow Monkey D. Luffy and the Straw Hat Pirates as they search for the legendary One Piece and the title of Pirate King.",
    rating: "8.7/10",
    year: "1999",
    status: "Ongoing",
    episodes: 1120,
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    languages: ["Hindi Dub", "English Dub", "Original Audio", "Fan Dub"],
    cls: "one"
  },

  "jujutsu-kaisen": {
    title: "Jujutsu Kaisen",
    desc: "A dark supernatural adventure filled with cursed energy, powerful sorcerers and unforgettable battles.",
    rating: "8.5/10",
    year: "2020",
    status: "Ongoing",
    episodes: 47,
    genres: ["Action", "Drama", "Fantasy"],
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    cls: "jjk"
  },

  "demon-slayer": {
    title: "Demon Slayer",
    desc: "Tanjiro joins the Demon Slayer Corps after tragedy changes his family forever.",
    rating: "8.3/10",
    year: "2019",
    status: "Completed",
    episodes: 63,
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    cls: "demon"
  },

  "attack-on-titan": {
    title: "Attack on Titan",
    desc: "Humanity fights for survival against terrifying Titans beyond the walls.",
    rating: "8.9/10",
    year: "2013",
    status: "Completed",
    episodes: 89,
    genres: ["Action", "Drama", "Fantasy"],
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    cls: "aot"
  },

  "solo-leveling": {
    title: "Solo Leveling",
    desc: "A weak hunter gains a mysterious system that lets him level up beyond every limit.",
    rating: "8.4/10",
    year: "2024",
    status: "Ongoing",
    episodes: 24,
    genres: ["Action", "Fantasy", "Adventure"],
    languages: ["Hindi Dub", "English Dub", "Original Audio"],
    cls: "solo"
  },

  "black-clover": {
    title: "Black Clover",
    desc: "Asta dreams of becoming the Wizard King despite being born without magic.",
    rating: "8.2/10",
    year: "2017",
    status: "Ongoing",
    episodes: 170,
    genres: ["Action", "Adventure", "Fantasy"],
    languages: ["Hindi Dub", "English Dub"],
    cls: "black"
  }
};


/* =========================================================
   GENRES
   ========================================================= */

const genres = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sports"
];

const genreIcons = [
  "✊",
  "◉",
  "●",
  "◆",
  "♞",
  "☠",
  "⌕",
  "♥",
  "◌",
  "⚽"
];


/* =========================================================
   HELPERS
   ========================================================= */

function getJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
  }[char]));
}


/* =========================================================
   ANIME CARD
   ========================================================= */

function card(id) {
  const a = animeData[id];

  if (!a) return "";

  const list = getJSON("animeFanList", []);
  const saved = list.includes(id);

  return `
    <article class="card" data-anime="${id}">
      <a href="anime.html?anime=${id}">
        <div class="poster ${a.cls}">
          <span class="badge">HD</span>
          <button
            class="card-fav ${saved ? "active" : ""}"
            type="button"
            onclick="event.preventDefault(); event.stopPropagation(); toggleList('${id}')"
            aria-label="Add ${escapeHtml(a.title)} to My List"
          >
            ${saved ? "♥" : "♡"}
          </button>
          <b>${escapeHtml(a.title)}</b>
        </div>

        <h3>${escapeHtml(a.title)}</h3>
        <small>TV • ${a.episodes}+ Episodes</small>
      </a>
    </article>
  `;
}


/* =========================================================
   HOME
   ========================================================= */

function renderHome() {
  if (!document.getElementById("trendingCards")) return;

  const ids = Object.keys(animeData);

  const trending = document.getElementById("trendingCards");
  const recent = document.getElementById("recentCards");
  const movies = document.getElementById("movieCards");
  const genreGrid = document.getElementById("genreGrid");
  const hindiList = document.getElementById("hindiList");

  if (trending) {
    trending.innerHTML = ids.map(card).join("");
  }

  if (recent) {
    recent.innerHTML = ids.slice(1, 5).map(card).join("");
  }

  if (movies) {
    movies.innerHTML = ids.slice(2, 5).map(card).join("");
  }

  if (genreGrid) {
    genreGrid.innerHTML = genres.map((genre, index) => `
      <a class="genre" href="#anime" data-genre="${genre}">
        <span class="ico">${genreIcons[index]}</span>
        <small>${genre}</small>
      </a>
    `).join("");
  }

  if (hindiList) {
    hindiList.innerHTML = ids.slice(0, 5).map(id => {
      const a = animeData[id];

      return `
        <a class="list-item" href="anime.html?anime=${id}">
          <div class="thumb ${a.cls}"></div>
          <div>
            <strong>${escapeHtml(a.title)}</strong>
            <small>Hindi Dub • Available</small>
          </div>
        </a>
      `;
    }).join("");
  }

  renderContinue();
  renderMyList();
}


/* =========================================================
   SEARCH
   ========================================================= */

function setupSearch() {
  const search = document.getElementById("search");

  if (!search) return;

  const trending = document.getElementById("trendingCards");

  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();

    if (!trending) return;

    const cards = trending.querySelectorAll(".card");

    cards.forEach(item => {
      const text = item.innerText.toLowerCase();

      item.style.display =
        !query || text.includes(query)
          ? ""
          : "none";
    });
  });

  search.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const query = search.value.trim();

      if (!query) return;

      const match = Object.entries(animeData).find(([id, anime]) =>
        anime.title.toLowerCase().includes(query.toLowerCase())
      );

      if (match) {
        location.href = `anime.html?anime=${match[0]}`;
      } else {
        alert(`No anime found for "${query}"`);
      }
    }
  });
}


/* =========================================================
   MY LIST
   ========================================================= */

function toggleList(id) {
  let list = getJSON("animeFanList", []);

  if (list.includes(id)) {
    list = list.filter(item => item !== id);
    showToast("Removed from My List");
  } else {
    list.push(id);
    showToast("Added to My List");
  }

  saveJSON("animeFanList", list);

  renderMyList();
  refreshFavoriteButtons();
}


function refreshFavoriteButtons() {
  const list = getJSON("animeFanList", []);

  document.querySelectorAll(".card-fav").forEach(button => {
    const cardElement = button.closest(".card");

    if (!cardElement) return;

    const id = cardElement.dataset.anime;

    if (list.includes(id)) {
      button.classList.add("active");
      button.textContent = "♥";
    } else {
      button.classList.remove("active");
      button.textContent = "♡";
    }
  });
}


function renderMyList() {
  const box = document.getElementById("myListBox");

  if (!box) return;

  const ids = getJSON("animeFanList", []);

  if (!ids.length) {
    box.innerHTML = `
      <div class="muted">
        Your My List is empty.
        Add anime from a details page.
      </div>
    `;
    return;
  }

  box.innerHTML = ids
    .filter(id => animeData[id])
    .map(id => {
      const a = animeData[id];

      return `
        <a class="list-item" href="anime.html?anime=${id}">
          <div class="thumb ${a.cls}"></div>

          <div>
            <strong>${escapeHtml(a.title)}</strong>
            <small>
              ${a.episodes}+ Episodes • Saved
            </small>
          </div>

          <button
            type="button"
            class="remove-list"
            onclick="event.preventDefault(); event.stopPropagation(); toggleList('${id}')"
          >
            ✕
          </button>
        </a>
      `;
    })
    .join("");
}


/* =========================================================
   CONTINUE WATCHING
   ========================================================= */

function renderContinue() {
  const box = document.getElementById("continueBox");

  if (!box) return;

  const progress = getJSON("animeFanProgress", null);

  if (!progress || !animeData[progress.anime]) {
    box.innerHTML = `
      <div class="muted">
        No saved progress yet.
        Start an episode and your browser will remember your position.
      </div>
    `;
    return;
  }

  const a = animeData[progress.anime];

  const mins = Math.floor(progress.time / 60);
  const secs = String(Math.floor(progress.time % 60)).padStart(2, "0");

  const percent = Math.min(
    100,
    (progress.time / (progress.duration || 1)) * 100
  );

  box.innerHTML = `
    <a
      class="continue-item"
      href="watch.html?anime=${progress.anime}&episode=${progress.episode}"
    >
      <div class="mini-poster ${a.cls}">
        ▶
      </div>

      <div style="flex:1">
        <strong>
          ${escapeHtml(a.title)} — Episode ${progress.episode}
        </strong>

        <small class="muted">
          Resume at ${mins}:${secs}
        </small>

        <div class="progress">
          <span style="width:${percent}%"></span>
        </div>
      </div>

      <span class="btn primary">
        Resume
      </span>
    </a>
  `;
}


/* =========================================================
   DETAILS PAGE
   ========================================================= */

function renderDetail() {
  const root = document.getElementById("detailApp");

  if (!root) return;

  const params = new URLSearchParams(location.search);

  const id =
    params.get("anime") || "one-piece";

  const a =
    animeData[id] ||
    animeData["one-piece"];

  const list = getJSON("animeFanList", []);
  const saved = list.includes(id);

  root.innerHTML = `
    <section class="container detail-hero">

      <div class="detail-inner">

        <div class="detail-poster ${a.cls}">
          <span class="badge">HD</span>
          ✦
        </div>

        <div class="detail-copy">

          <span class="eyebrow">
            ${escapeHtml(a.status.toUpperCase())}
          </span>

          <h1>
            ${escapeHtml(a.title)}
          </h1>

          <p class="muted">
            ${escapeHtml(a.desc)}
          </p>

          <div class="chips">
            ${a.genres.map(genre => `
              <span class="chip">
                ${escapeHtml(genre)}
              </span>
            `).join("")}
          </div>

          <div class="detail-info">

            <div class="info">
              <small>Rating</small>
              ⭐ ${escapeHtml(a.rating)}
            </div>

            <div class="info">
              <small>Year</small>
              ${escapeHtml(a.year)}
            </div>

            <div class="info">
              <small>Episodes</small>
              ${a.episodes}
            </div>

            <div class="info">
              <small>Languages</small>
              ${a.languages.length}
            </div>

          </div>

          <div class="selects" style="margin-top:18px">

            <select id="detailLang">
              ${a.languages.map(language => `
                <option>
                  ${escapeHtml(language)}
                </option>
              `).join("")}
            </select>

            <select>
              <option>Season 01</option>
              <option>Season 02</option>
            </select>

          </div>

          <div class="hero-actions">

            <a
              class="btn primary"
              href="watch.html?anime=${id}&episode=1"
            >
              ▶ Watch Now
            </a>

            <button
              class="btn ghost"
              onclick="toggleList('${id}')"
              id="detailListBtn"
            >
              ${saved ? "♥ In My List" : "＋ Add to My List"}
            </button>

          </div>

        </div>

      </div>

    </section>


    <section class="container section">

      <div class="section-head">
        <h2>Episodes</h2>
        <span class="muted">
          ${a.episodes} episodes
        </span>
      </div>

      <div class="cards compact">

        ${[1, 2, 3, 4, 5, 6].map(number => `
          <a
            class="card"
            href="watch.html?anime=${id}&episode=${number}"
          >

            <div class="poster ${a.cls}">

              <span class="badge">
                ${number}
              </span>

              <b>
                Episode ${String(number).padStart(2, "0")}
              </b>

            </div>

            <h3>
              ${escapeHtml(a.title)}
            </h3>

            <small>
              23:40 • ${escapeHtml(a.languages[0])}
            </small>

          </a>
        `).join("")}

      </div>

    </section>
  `;

  updateDetailListButton(id);
}


function updateDetailListButton(id) {
  const button = document.getElementById("detailListBtn");

  if (!button) return;

  const list = getJSON("animeFanList", []);

  button.textContent =
    list.includes(id)
      ? "♥ In My List"
      : "＋ Add to My List";
}


/* =========================================================
   WATCH PAGE
   ========================================================= */

function renderWatch() {
  const root = document.getElementById("watchApp");

  if (!root) return;

  const params = new URLSearchParams(location.search);

  const id =
    params.get("anime") || "one-piece";

  const ep =
    Number(params.get("episode") || 1);

  const a =
    animeData[id] ||
    animeData["one-piece"];

  root.innerHTML = `
    <main class="container watch-main">

      <div class="watch-layout">

        <div>

          <div class="player-wrap">

            <div class="player">

              <div class="player-placeholder">

                <span style="font-size:40px">
                  ▶
                </span>

                <b>
                  ${escapeHtml(a.title)}
                  — Episode ${String(ep).padStart(2, "0")}
                </b>

                <span>
                  Connect an authorized video URL
                  in the backend/API.
                </span>

              </div>

            </div>

            <div class="watch-bar">

              <div class="selects">

                <select id="watchLang">
                  ${a.languages.map(language => `
                    <option>
                      ${escapeHtml(language)}
                    </option>
                  `).join("")}
                </select>

                <select>
                  <option>Season 01</option>
                  <option>Season 02</option>
                </select>

              </div>

              <div class="watch-actions">

                <button
                  class="btn ghost"
                  onclick="likeVideo()"
                >
                  ❤️ Like
                </button>

                <button
                  class="btn ghost"
                  onclick="shareVideo()"
                >
                  🔗 Share
                </button>

                <button
                  class="btn ghost"
                  onclick="reportVideo()"
                >
                  ⚠ Report
                </button>

                <button
                  class="btn primary"
                  onclick="downloadGate('episode')"
                >
                  ⬇ Download
                </button>

              </div>

            </div>

          </div>


          <div class="watch-title">

            <h1>
              ${escapeHtml(a.title)}
              — Episode ${String(ep).padStart(2, "0")}
            </h1>

            <p class="muted">
              ${escapeHtml(a.desc)}
            </p>

            <div class="hero-actions">

              <a
                class="btn ${ep >= a.episodes ? "primary" : "ghost"}"
                href="watch.html?anime=${id}&episode=${Math.max(1, ep - 1)}"
              >
                ◀ Previous
              </a>

             ${ep < a.episodes ? `
              <a
                class="btn primary"
                href="watch.html?anime=${id}&episode=${ep + 1}"
              >
                Next Episode ▶
              </a>
            ` : ""}

            </div>

          </div>


          <div class="comment-box">

            <h2>
              💬 Comments
            </h2>

            <form
              id="commentForm"
              class="form"
            >

              <textarea
                id="commentText"
                required
                placeholder="Write a comment..."
              ></textarea>

              <button class="btn primary">
                Post Comment
              </button>

            </form>

            <div id="comments"></div>

          </div>

        </div>


        <aside class="episodes">

          <div class="section-head">

            <h2>
              Episodes
            </h2>

            <span class="muted">
              1–20
            </span>

          </div>

          ${Array.from(
            { length: 20 },
            (_, index) => index + 1
          ).map(number => `
            <a
              class="episode ${number === ep ? "active" : ""}"
              href="watch.html?anime=${id}&episode=${number}"
            >

              <span class="episode-num">
                ${number}
              </span>

              <span style="flex:1">

                Episode
                ${String(number).padStart(2, "0")}

                <small class="muted">
                  23:40 • ${escapeHtml(a.languages[0])}
                </small>

              </span>

              <span>
                ›
              </span>

            </a>
          `).join("")}

        </aside>

      </div>

    </main>
  `;


  const commentForm =
    document.getElementById("commentForm");

  if (commentForm) {

    commentForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const textarea =
          document.getElementById("commentText");

        const text =
          textarea.value.trim();

        if (!text) return;

        const comments =
          getJSON("animeFanComments", []);

        comments.unshift({
          text,
          anime: id,
          episode: ep,
          time: new Date().toLocaleString()
        });

        saveJSON(
          "animeFanComments",
          comments
        );

        textarea.value = "";

        renderComments();

        showToast("Comment posted");
      }
    );
  }


  renderComments();

  saveJSON(
    "animeFanProgress",
    {
      anime: id,
      episode: ep,
      time: 923,
      duration: 1420
    }
  );
}


function renderComments() {

  const box =
    document.getElementById("comments");

  if (!box) return;

  const comments =
    getJSON("animeFanComments", []);

  if (!comments.length) {

    box.innerHTML = `
      <p class="muted">
        Be the first to comment.
      </p>
    `;

    return;
  }

  box.innerHTML =
    comments.slice(0, 30).map(comment => `
      <div class="comment">

        <b>
          Guest Fan
        </b>

        <p>
          ${escapeHtml(comment.text)}
        </p>

        <small class="muted">
          ❤️ 0 • ↩ Reply •
          ${escapeHtml(comment.time)}
        </small>

      </div>
    `).join("");
}


/* =========================================================
   WATCH ACTIONS
   ========================================================= */

function likeVideo() {

  let likes =
    Number(localStorage.getItem("animeFanLikes") || 0);

  likes++;

  localStorage.setItem(
    "animeFanLikes",
    likes
  );

  showToast("❤️ Like saved");
}


function shareVideo() {

  const url = location.href;

  if (navigator.share) {

    navigator.share({
      title: document.title,
      text: "Watch this on Anime Fan",
      url
    }).catch(() => {});

    return;
  }

  if (navigator.clipboard) {

    navigator.clipboard
      .writeText(url)
      .then(() => {
        showToast("🔗 Watch link copied");
      })
      .catch(() => {
        alert(url);
      });

    return;
  }

  alert(url);
}


function reportVideo() {

  const reason = prompt(
    "Report reason:\n\n" +
    "1. Video not working\n" +
    "2. Wrong episode\n" +
    "3. Wrong audio\n" +
    "4. Subtitle issue\n" +
    "5. Other"
  );

  if (!reason) return;

  saveJSON(
    "animeFanReports",
    [
      ...getJSON("animeFanReports", []),
      {
        reason,
        page: location.href,
        time: new Date().toLocaleString()
      }
    ]
  );

  showToast("⚠ Report submitted");
}


function downloadGate(type) {

  const count =
    type === "movie" ? 3 : 2;

  alert(
    `${count} ad(s) are configured before download.\n\n` +
    `Connect your authorized ad provider and download URL in the backend.`
  );
}


/* =========================================================
   REQUEST SYSTEM
   ========================================================= */

function setupRequestForm() {

  const form =
    document.getElementById("requestForm");

  if (!form) return;

  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const name =
        document.getElementById("reqName")?.value.trim();

      const season =
        document.getElementById("reqSeason")?.value.trim();

      const audio =
        document.getElementById("reqAudio")?.value;

      const message =
        document.getElementById("reqMessage")?.value.trim();

      if (!name) {
        showToast("Please enter anime name");
        return;
      }

      const requests =
        getJSON("animeFanRequests", []);

      requests.push({
        name,
        season,
        audio,
        message,
        status: "Pending",
        time: new Date().toLocaleString()
      });

      saveJSON(
        "animeFanRequests",
        requests
      );

      const status =
        document.getElementById("requestStatus");

      if (status) {
        status.textContent =
          "Request submitted • Status: Pending";
      }

      form.reset();

      showToast("📝 Anime request submitted");
    }
  );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function setupMobileMenu() {

  const menuButton =
    document.getElementById("menuBtn");

  if (!menuButton) return;

  menuButton.addEventListener(
    "click",
    () => {

      document.body.classList.toggle("menu-open");

      let menu =
        document.getElementById("mobileMenu");

      if (!menu) {

        menu =
          document.createElement("div");

        menu.id =
          "mobileMenu";

        menu.innerHTML = `
          <div class="mobile-menu-inner">

            <button
              class="mobile-menu-close"
              type="button"
            >
              ✕
            </button>

            <a href="index.html#home">
              🏠 Home
            </a>

            <a href="index.html#anime">
              🎬 Anime
            </a>

            <a href="index.html#trending">
              🔥 Trending
            </a>

            <a href="index.html#genres">
              ✦ Genres
            </a>

            <a href="index.html#movies">
              🎥 Movies
            </a>

            <a href="index.html#mylist">
              ❤️ My List
            </a>

            <a href="admin.html">
              ⚙ Admin
            </a>

          </div>
        `;

        document.body.appendChild(menu);

        menu
          .querySelector(".mobile-menu-close")
          .addEventListener(
            "click",
            closeMobileMenu
          );

        menu
          .querySelectorAll("a")
          .forEach(link => {
            link.addEventListener(
              "click",
              closeMobileMenu
            );
          });
      }

      menu.classList.toggle("show");
    }
  );
}


function closeMobileMenu() {

  const menu =
    document.getElementById("mobileMenu");

  if (menu) {
    menu.classList.remove("show");
  }

  document.body.classList.remove(
    "menu-open"
  );
}


/* =========================================================
   THEME
   ========================================================= */

function setupTheme() {

  const button =
    document.getElementById("themeBtn");

  const saved =
    localStorage.getItem("animeFanTheme");

  if (saved === "light") {
    document.body.classList.add("light");
  }

  if (!button) return;

  button.addEventListener(
    "click",
    () => {

      document.body.classList.toggle("light");

      const isLight =
        document.body.classList.contains("light");

      localStorage.setItem(
        "animeFanTheme",
        isLight ? "light" : "dark"
      );

      showToast(
        isLight
          ? "☀ Light mode"
          : "🌙 Dark mode"
      );
    }
  );
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

  let toast =
    document.getElementById("animeToast");

  if (!toast) {

    toast =
      document.createElement("div");

    toast.id =
      "animeToast";

    document.body.appendChild(toast);
  }

  toast.textContent =
    message;

  toast.classList.add("show");

  clearTimeout(
    window.animeToastTimer
  );

  window.animeToastTimer =
    setTimeout(
      () => {
        toast.classList.remove("show");
      },
      2200
    );
}


/* =========================================================
   ADMIN
   ========================================================= */

function setupAdmin() {

  const login =
    document.getElementById("adminLogin");

  if (!login) return;

  const showDashboard = () => {

    document
      .getElementById("loginPanel")
      ?.classList.add("hidden");

    document
      .getElementById("dashboard")
      ?.classList.remove("hidden");

    renderAdmin();
  };


  if (
    sessionStorage.getItem(
      "animeFanAdmin"
    ) === "1"
  ) {
    showDashboard();
  }


  login.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const username =
        document.getElementById("adminUser")?.value;

      const password =
        document.getElementById("adminPass")?.value;

      if (
        username === "admin" &&
        password === "admin123"
      ) {

        sessionStorage.setItem(
          "animeFanAdmin",
          "1"
        );

        showDashboard();

      } else {

        const message =
          document.getElementById("loginMsg");

        if (message) {
          message.textContent =
            "Demo login: admin / admin123";
        }
      }
    }
  );


  document
    .getElementById("logout")
    ?.addEventListener(
      "click",
      () => {

        sessionStorage.removeItem(
          "animeFanAdmin"
        );

        location.reload();
      }
    );
}


/* =========================================================
   ADMIN ADS
   ========================================================= */

function renderAdmin() {

  const list =
    document.getElementById("adList");

  if (!list) return;

  let ads =
    getJSON(
      "animeFanAds",
      [
        "05:00",
        "18:00",
        "30:00",
        "50:00",
        "70:00",
        "90:00",
        "110:00",
        "130:00",
        "150:00"
      ]
    );


  const draw = () => {

    list.innerHTML =
      ads.map(
        (time, index) => `
          <input
            data-i="${index}"
            value="${escapeHtml(time)}"
          >
        `
      ).join("");
  };


  draw();


  document
    .getElementById("addAd")
    ?.addEventListener(
      "click",
      () => {

        ads.push("00:00");

        draw();
      }
    );


  document
    .getElementById("saveAds")
    ?.addEventListener(
      "click",
      () => {

        ads =
          [...list.querySelectorAll("input")]
            .map(input => input.value);

        saveJSON(
          "animeFanAds",
          ads
        );

        showToast(
          "Ad schedule saved locally"
        );
      }
    );


  const requests =
    getJSON(
      "animeFanRequests",
      []
    );

  const requestCount =
    document.getElementById(
      "requestCount"
    );

  if (requestCount) {
    requestCount.textContent =
      requests.length;
  }
}


/* =========================================================
   STARTUP
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderHome();
    renderDetail();
    renderWatch();

    setupSearch();
    setupRequestForm();
    setupMobileMenu();
    setupTheme();
    setupAdmin();

    refreshFavoriteButtons();
  }
);

/* =========================================================
   ANIME FAN V2.6 — STABLE POSTERS
   Direct images for problematic anime
   ========================================================= */

const animePosterIds = {
  "one-piece": 21,
  "jujutsu-kaisen": 40748,
  "demon-slayer": 38000,
  "attack-on-titan": 16498,
  "solo-leveling": 52299,
  "black-clover": 34572
};


/* Direct poster images */

const directAnimePosters = {

  "demon-slayer":
    "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",

  "solo-leveling":
    "https://cdn.myanimelist.net/images/anime/1801/142390l.jpg",

  "black-clover":
    "https://api-cdn.myanimelist.net/images/anime/2/88336.jpg"

};


function setAnimePoster(cardElement, image) {

  const poster =
    cardElement.querySelector(".poster");

  if (!poster || !image) return;

  poster.style.backgroundImage =
    `linear-gradient(
      180deg,
      rgba(0,0,0,0.02) 25%,
      rgba(0,0,0,0.80) 100%
    ),
    url("${image}")`;

  poster.style.backgroundSize = "cover";

  poster.style.backgroundPosition = "center";

  poster.classList.add("real-poster");
}


async function loadAnimePosters() {

  const cards =
    [...document.querySelectorAll(".card[data-anime]")];

  if (!cards.length) return;


  for (const cardElement of cards) {

    const id =
      cardElement.dataset.anime;


    /* Direct image first */

    if (directAnimePosters[id]) {

      setAnimePoster(
        cardElement,
        directAnimePosters[id]
      );

      continue;
    }


    /* API fallback for remaining anime */

    const malId =
      animePosterIds[id];

    if (!malId) continue;


    try {

      const response =
        await fetch(
          `https://api.jikan.moe/v4/anime/${malId}/full`
        );


      if (response.status === 429) {

        await new Promise(
          resolve => setTimeout(resolve, 1800)
        );

        continue;
      }


      if (!response.ok) continue;


      const data =
        await response.json();


      const image =
        data?.data?.images?.webp?.large_image_url ||
        data?.data?.images?.jpg?.large_image_url;


      if (image) {

        setAnimePoster(
          cardElement,
          image
        );

      }


      await new Promise(
        resolve => setTimeout(resolve, 900)
      );


    } catch (error) {

      /* Keep gradient fallback */

    }

  }

}


/* Start after homepage cards render */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    setTimeout(
      loadAnimePosters,
      700
    );

  }
);
