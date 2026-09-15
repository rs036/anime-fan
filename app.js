const catalog=[
 {title:"Solo Leveling",tag:"S2 • 24 Eps",score:"9.2",kind:"TV"},
 {title:"One Piece",tag:"TV • 1120+ Eps",score:"9.1",kind:"TV"},
 {title:"Naruto Shippuden",tag:"TV • 500+ Eps",score:"8.9",kind:"TV"},
 {title:"Demon Slayer",tag:"TV • 55 Eps",score:"9.0",kind:"TV"},
 {title:"Jujutsu Kaisen",tag:"TV • 47 Eps",score:"8.8",kind:"TV"},
 {title:"Attack on Titan",tag:"TV • 88 Eps",score:"9.0",kind:"TV"},
 {title:"Blue Lock",tag:"TV • 38 Eps",score:"8.3",kind:"TV"},
 {title:"Chainsaw Man",tag:"TV • 12 Eps",score:"8.5",kind:"TV"},
 {title:"Spy x Family",tag:"TV • 25 Eps",score:"8.6",kind:"TV"}
];
function card(a,i=0){return `<article class="card" onclick="location.href='anime.html'"><div class="poster" style="background:linear-gradient(${120+i*12}deg,hsl(${210+i*20} 55% 24%),hsl(${350-i*8} 75% 25%),hsl(${25+i*10} 75% 42%))"></div><div class="card-body"><h3>${a.title}</h3><p>${a.tag} • ⭐ ${a.score}</p></div></article>`}
function renderCards(id,arr){const el=document.getElementById(id);if(el)el.innerHTML=arr.map((x,i)=>card(x,i)).join("")}
function renderHome(){renderCards("trending",catalog.slice(0,7));renderCards("continueCards",catalog.slice(0,6));renderCards("recent",catalog.slice(4).concat(catalog.slice(0,2)));renderCards("movies",catalog.slice(1,7).map(x=>({...x,kind:"Movie",tag:"Movie • 1h 55m"})));document.querySelectorAll("[data-list]").forEach(b=>b.onclick=()=>{localStorage.setItem("animeList",b.dataset.list);b.textContent="✓ Added to My List"});setupSearch()}
function renderAnime(){const e=document.getElementById("episodeGrid");if(e)e.innerHTML=Array.from({length:24},(_,i)=>`<button class="${i===11?"current":""}" onclick="location.href='watch.html?ep=${i+1}'">${String(i+1).padStart(2,"0")}</button>`).join("");renderCards("related",catalog.slice(1,6));document.querySelectorAll("[data-list]").forEach(b=>b.onclick=()=>{b.textContent="✓ Added"});setupSearch()}
function renderWatch(){const e=document.getElementById("watchEpisodes");if(e)e.innerHTML=Array.from({length:24},(_,i)=>`<button class="${i===11?"current":""}">${String(i+1).padStart(2,"0")}</button>`).join("");setupSearch();let saved=localStorage.getItem("resumeTime")||"12:34";document.getElementById("timeText").textContent=saved+" / 24:16"}
function setupSearch(){const s=document.getElementById("globalSearch");if(s)s.addEventListener("keydown",e=>{if(e.key==="Enter"&&s.value.trim())location.href="anime.html?q="+encodeURIComponent(s.value.trim())})}
function addAdTime(){const input=document.getElementById("newAdTime"),v=input?.value.trim();if(!v)return;const wrap=document.getElementById("adTimes");const span=document.createElement("span");span.textContent=v+" ✕";wrap.appendChild(span);input.value=""}
window.addEventListener("beforeunload",()=>localStorage.setItem("resumeTime","12:34"));