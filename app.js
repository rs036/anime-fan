const qs=s=>document.querySelector(s);

// Reliable artwork loader: Jikan/MAL image CDN, with local CSS fallbacks.
const animeImages={
  "One Piece":"https://api.jikan.moe/v4/anime?q=One%20Piece&limit=1",
  "Solo Leveling":"https://api.jikan.moe/v4/anime?q=Solo%20Leveling&limit=1",
  "Jujutsu Kaisen":"https://api.jikan.moe/v4/anime?q=Jujutsu%20Kaisen&limit=1",
  "Demon Slayer":"https://api.jikan.moe/v4/anime?q=Demon%20Slayer&limit=1",
  "Attack on Titan":"https://api.jikan.moe/v4/anime?q=Attack%20on%20Titan&limit=1",
  "Blue Lock":"https://api.jikan.moe/v4/anime?q=Blue%20Lock&limit=1",
  "Black Clover":"https://api.jikan.moe/v4/anime?q=Black%20Clover&limit=1",
  "Spy x Family":"https://api.jikan.moe/v4/anime?q=Spy%20x%20Family&limit=1",
  "Naruto Shippuden":"https://api.jikan.moe/v4/anime?q=Naruto%20Shippuden&limit=1"
};

const cache={};
async function getImage(title){
  if(cache[title]) return cache[title];
  try{
    const r=await fetch(animeImages[title],{cache:'force-cache'});
    if(!r.ok) throw new Error('image api');
    const j=await r.json();
    const url=j?.data?.[0]?.images?.webp?.large_image_url || j?.data?.[0]?.images?.jpg?.large_image_url;
    if(url) cache[title]=url;
    return url;
  }catch(e){ return ''; }
}

function setBg(el,url){
  if(!el||!url)return;
  el.style.backgroundImage=`linear-gradient(180deg,rgba(0,0,0,.03),rgba(0,0,0,.18)),url("${url}")`;
  el.classList.add('art-loaded');
}

async function loadArtwork(){
  const nodes=[...document.querySelectorAll('[data-anime]')];
  const titles=[...new Set(nodes.map(n=>n.dataset.anime).filter(Boolean))];
  await Promise.all(titles.map(async title=>{
    const url=await getImage(title);
    nodes.filter(n=>n.dataset.anime===title).forEach(n=>setBg(n,url));
  }));
}

const menu=qs('#mobileMenu');
if(menu)menu.onclick=()=>document.body.classList.toggle('menu-open');
const cards=document.querySelectorAll('.card');
cards.forEach(c=>c.addEventListener('click',()=>{const t=c.querySelector('b')?.textContent;if(t)location.href='anime.html'}));
loadArtwork();
