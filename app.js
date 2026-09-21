const anime=[
["Demon Slayer","S3 · 11 Episodes","9.3","https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=400&q=80"],
["One Piece","S1 · 1120 Episodes","9.2","https://images.unsplash.com/photo-1541560052-5e137f229371?auto=format&fit=crop&w=400&q=80"],
["Jujutsu Kaisen","S2 · 24 Episodes","9.1","https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80"],
["Attack on Titan","S4 · 94 Episodes","9.0","https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80"],
["Solo Leveling","S1 · 24 Episodes","9.4","https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=400&q=80"],
["Blue Lock","S2 · 24 Episodes","8.7","https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80"],
["Naruto Shippuden","S6 · 500 Episodes","8.6","https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80"],
["My Hero Academia","S6 · 25 Episodes","8.5","https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=400&q=80"]
];
const cats=["Action","Adventure","Fantasy","Romance","Comedy","Mystery"];
function card(a,i){return `<article class="anime-card" onclick="openPlayer('${a[0]}',${i+1})"><div class="poster" style="background-image:linear-gradient(0deg,#020711 0%,transparent 45%),url('${a[3]}')"><span class="rank">${i+1}</span><span class="hd">HD</span></div><div class="anime-info"><b>${a[0]}</b><small>${a[1]}</small><div class="rating">★ ${a[2]}</div></div></article>`}
document.getElementById('trendingRow').innerHTML=anime.map(card).join('');
document.getElementById('topList').innerHTML=anime.slice(0,5).map((a,i)=>`<div class="top-item"><span class="num">${i+1}</span><img src="${a[3]}"><span>${a[0]}<small>9.${4-i}</small></span><strong>↑</strong></div>`).join('');
document.getElementById('categories').innerHTML=cats.map((c,i)=>`<button class="category" style="background-image:linear-gradient(0deg,#07101dcc,transparent),url('${anime[i][3]}')" onclick="setPage('genres')">${c}</button>`).join('');
const cont=[["Solo Leveling","S1 · E12","50%",anime[4][3]],["One Piece","S1 · E1089","72%",anime[1][3]],["Demon Slayer","S3 · E8","43%",anime[0][3]],["Jujutsu Kaisen","S2 · E15","68%",anime[2][3]]];
document.getElementById('continueRow').innerHTML=cont.map(x=>`<div class="continue-card" onclick="openPlayer('${x[0]}',12)"><img src="${x[3]}"><div><b>${x[0]}</b><small>${x[1]}　24m left</small><div class="progress"><i style="width:${x[2]}"></i></div></div><span>▶</span></div>`).join('');
document.querySelectorAll('.nav-item').forEach(b=>b.onclick=()=>setPage(b.dataset.page));
function setPage(page){document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===page)); window.scrollTo({top:0,behavior:'smooth'}); if(page!=='home') alert(page[0].toUpperCase()+page.slice(1)+' page is ready for your next content/API connection.');}
function openPlayer(title,ep){document.getElementById('playerTitle').textContent=title;document.getElementById('episodeLabel').textContent='Episode '+ep;document.getElementById('playerModal').classList.add('open')}
function closePlayer(){document.getElementById('playerModal').classList.remove('open')}
function toggleList(name){let key='anime-list';let list=JSON.parse(localStorage.getItem(key)||'[]');if(!list.includes(name))list.push(name);localStorage.setItem(key,JSON.stringify(list));alert(name+' added to My List');}
document.getElementById('search').addEventListener('keydown',e=>{if(e.key==='Enter'){const q=e.target.value.trim().toLowerCase();if(!q)return;const found=anime.filter(a=>a[0].toLowerCase().includes(q));document.getElementById('trendingRow').innerHTML=found.length?found.map(card).join(''):'<p style="color:#8ba0ba">No demo result found. Connect your anime API for live search.</p>';document.getElementById('trendingRow').scrollIntoView({behavior:'smooth'});}});
document.getElementById('playerModal').addEventListener('click',e=>{if(e.target.id==='playerModal')closePlayer()});
