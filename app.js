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

const fallbackColors=[
 ["#132e4a","#7a1830"],["#29120e","#b84916"],["#182b47","#8b2a1e"],
 ["#28104c","#c23830"],["#102d4d","#6e155e"],["#182d36","#b64a18"],
 ["#15234c","#70306d"],["#25102f","#a72c43"],["#173b45","#7b5b19"]
];

function card(a,i=0){
  const c=fallbackColors[i%fallbackColors.length];
  return `<article class="card" data-title="${a.title.replace(/"/g,'&quot;')}" onclick="location.href='anime.html'">
    <div class="poster" style="background:linear-gradient(145deg,${c[0]},${c[1]})"></div>
    <div class="card-body"><h3>${a.title}</h3><p>${a.tag} • ⭐ ${a.score}</p></div>
  </article>`;
}

function renderCards(id,arr){
  const el=document.getElementById(id);
  if(el) el.innerHTML=arr.map((x,i)=>card(x,i)).join("");
  loadAniListImages();
}

async function aniListQuery(title){
  const query=`query ($search:String){Media(search:$search,type:ANIME){title{romaji english native} coverImage{large} bannerImage}}`;
  const r=await fetch("https://graphql.anilist.co",{
    method:"POST",headers:{"Content-Type":"application/json"},
    body:JSON.stringify({query,variables:{search:title}})
  });
  if(!r.ok) throw new Error("AniList request failed");
  return (await r.json()).data?.Media || null;
}

async function loadAniListImages(){
  const cards=[...document.querySelectorAll(".card[data-title]")];
  await Promise.all(cards.map(async (el)=>{
    try{
      const title=el.dataset.title;
      const media=await aniListQuery(title);
      if(media?.coverImage?.large){
        el.querySelector(".poster").style.backgroundImage=`url("${media.coverImage.large}")`;
        el.querySelector(".poster").classList.add("has-image");
      }
    }catch(e){/* keep local gradient fallback */ }
  }));
}

async function loadHeroImage(title){
  try{
    const media=await aniListQuery(title);
    if(media?.bannerImage){
      const hero=document.querySelector(".hero-art");
      if(hero) hero.style.backgroundImage=`linear-gradient(90deg,rgba(5,8,13,.05),rgba(5,8,13,.18)),url("${media.bannerImage}")`;
    }
  }catch(e){}
}

async function loadDetailImage(title){
  try{
    const media=await aniListQuery(title);
    const art=document.querySelector(".detail-art");
    if(art && media?.bannerImage) art.style.backgroundImage=`linear-gradient(90deg,rgba(5,8,13,.05),rgba(5,8,13,.22)),url("${media.bannerImage}")`;
    if(art && media?.coverImage?.large) art.style.backgroundImage=`linear-gradient(90deg,rgba(5,8,13,.08),rgba(5,8,13,.22)),url("${media.bannerImage || media.coverImage.large}")`;
  }catch(e){}
}

function renderHome(){
  renderCards("trending",catalog.slice(0,7));
  renderCards("continueCards",catalog.slice(0,6));
  renderCards("recent",catalog.slice(4).concat(catalog.slice(0,2)));
  renderCards("movies",catalog.slice(1,7).map(x=>({...x,kind:"Movie",tag:"Movie • 1h 55m"})));
  loadHeroImage("One Piece");
  document.querySelectorAll("[data-list]").forEach(b=>b.onclick=()=>{
    localStorage.setItem("animeList",b.dataset.list);
    b.textContent="✓ Added to My List";
  });
  setupSearch();
}

function renderAnime(){
  const e=document.getElementById("episodeGrid");
  if(e)e.innerHTML=Array.from({length:24},(_,i)=>`<button class="${i===11?"current":""}" onclick="location.href='watch.html?ep=${i+1}'">${String(i+1).padStart(2,"0")}</button>`).join("");
  renderCards("related",catalog.slice(1,6));
  loadDetailImage("Solo Leveling");
  document.querySelectorAll("[data-list]").forEach(b=>b.onclick=()=>{b.textContent="✓ Added"});
  setupSearch();
}

function renderWatch(){
  const e=document.getElementById("watchEpisodes");
  if(e)e.innerHTML=Array.from({length:24},(_,i)=>`<button class="${i===11?"current":""}" onclick="location.href='watch.html?ep=${i+1}'">${String(i+1).padStart(2,"0")}</button>`).join("");
  setupSearch();
  const saved=localStorage.getItem("resumeTime")||"12:34";
  const t=document.getElementById("timeText");
  if(t)t.textContent=saved+" / 24:16";
}

function setupSearch(){
  const s=document.getElementById("globalSearch");
  if(!s)return;
  s.addEventListener("keydown",e=>{
    if(e.key==="Enter"&&s.value.trim())location.href="anime.html?q="+encodeURIComponent(s.value.trim());
  });
}

function addAdTime(){
  const input=document.getElementById("newAdTime"),v=input?.value.trim();
  if(!v)return;
  const wrap=document.getElementById("adTimes");
  const span=document.createElement("span");
  span.textContent=v+" ✕"; wrap.appendChild(span); input.value="";
}

window.addEventListener("beforeunload",()=>localStorage.setItem("resumeTime","12:34"));
