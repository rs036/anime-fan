const anime=[
 {id:"solo-leveling",name:"Solo Leveling",type:"TV",ep:"24 Eps",img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80"},
 {id:"one-piece",name:"One Piece",type:"TV",ep:"1120+ Eps",img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80"},
 {id:"naruto",name:"Naruto Shippuden",type:"TV",ep:"500+ Eps",img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80"},
 {id:"demon-slayer",name:"Demon Slayer",type:"TV",ep:"55 Eps",img:"https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=300&q=80"},
 {id:"jujutsu-kaisen",name:"Jujutsu Kaisen",type:"TV",ep:"47 Eps",img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80"},
 {id:"attack-on-titan",name:"Attack on Titan",type:"TV",ep:"89 Eps",img:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80"},
 {id:"blue-lock",name:"Blue Lock",type:"TV",ep:"38 Eps",img:"https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&w=300&q=80"},
 {id:"chainsaw-man",name:"Chainsaw Man",type:"TV",ep:"12 Eps",img:"https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=300&q=80"}
];
const movies=anime.slice(1,7).map((a,i)=>({...a,name:["One Piece Film Red","Your Name","Spirited Away","Howl's Moving Castle","Suzume","Jujutsu Kaisen 0"][i]||a.name,type:"Movie"}));
function card(a){return `<div class="card" onclick="location.href='details.html?id=${a.id}'"><img src="${a.img}" alt=""><div class="ct"><b>${a.name}</b><small>${a.type} • ${a.ep}</small></div></div>`}
function fill(id,list){const e=document.getElementById(id);if(e)e.innerHTML=list.map(card).join("")}
fill("trending",anime.slice(0,7)); fill("continue",anime.slice(0,5)); fill("recent",anime.slice(3,8)); fill("movies",movies);
fill("allAnime",anime); fill("movieList",movies);
const top=document.getElementById("top"); if(top)top.innerHTML=anime.slice(0,5).map(a=>`<li><b>${a.name}</b><br><small>${a.type} • ${a.ep}</small></li>`).join("");
const eps=document.getElementById("episodes"); if(eps)eps.innerHTML=Array.from({length:24},(_,i)=>`<button onclick="location.href='watch.html?anime=solo-leveling&episode=${i+1}'">${String(i+1).padStart(2,"0")}</button>`).join("");
const params=new URLSearchParams(location.search), ep=Math.max(1,parseInt(params.get("episode")||"1"));
const we=document.getElementById("watchEpisodes");
if(we){we.innerHTML=Array.from({length:24},(_,i)=>`<button class="${i+1===ep?'active':''}" onclick="location.href='watch.html?anime=solo-leveling&episode=${i+1}'">${String(i+1).padStart(2,"0")}</button>`).join("");document.getElementById("episodeLabel").textContent="Episode "+ep;const prev=document.getElementById("prev"),next=document.getElementById("next");prev.hidden=ep<=1;next.hidden=ep>=24;if(!prev.hidden)prev.onclick=()=>location.href=`watch.html?anime=solo-leveling&episode=${ep-1}`;if(!next.hidden)next.onclick=()=>location.href=`watch.html?anime=solo-leveling&episode=${ep+1}`)}
const search=document.getElementById("search");if(search)search.addEventListener("input",()=>{const q=search.value.toLowerCase();document.querySelectorAll(".card").forEach(c=>c.style.display=c.innerText.toLowerCase().includes(q)?"block":"none")});
