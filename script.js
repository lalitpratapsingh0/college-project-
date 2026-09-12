const ICONS={
  home:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"/></svg>',
  scan:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3H5a2 2 0 0 0-2 2v2M17 3h2a2 2 0 0 1 2 2v2M7 21H5a2 2 0 0 1-2-2v-2M17 21h2a2 2 0 0 0 2-2v-2"/><path d="M8 8h8v8H8z"/></svg>',
  result:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 15v-3M12 15V9M16 15v-5"/></svg>',
  doctor:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3v5M6 5h4M6 10a6 6 0 0 0 12 0V8"/><path d="M18 15v6M15 18h6"/></svg>',
  dashboard:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
  history:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  info:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4.2 1.8c-1.1.9-1.7 1.4-1.7 2.7M12 17h.01"/></svg>',
  moon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  play:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 5 11 7-11 7V5Z"/></svg>',
  upload:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4M7 9l5-5 5 5M5 20h14"/></svg>',
  camera:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h4l2-2h4l2 2h4a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  check:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></svg>',
  menu:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  spark:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/></svg>'
};
const I=k=>`<span class="icon-svg">${ICONS[k]||''}</span>`;
const HEADER=`<header class="topbar"><div class="container nav"><a class="brand" href="index.html" aria-label="BuccalCare AI Home"><span class="logo">${ICONS.scan}</span><span class="brand-copy"><strong>BuccalCare <em>AI</em></strong><small>Early Buccal Cancer<br>Detection System</small></span></a><nav class="navlinks" id="navlinks" aria-label="Primary navigation"><a data-nav="home" href="index.html">${I('home')}<span>Home</span></a><a data-nav="screening" href="screening.html">${I('scan')}<span>AI Screening</span></a><a data-nav="results" href="results.html">${I('result')}<span>Results</span></a><a data-nav="doctor" href="doctor-demo.html">${I('doctor')}<span>Doctor Demo</span></a><a data-nav="dashboard" href="dashboard.html">${I('dashboard')}<span>Dashboard</span></a><a data-nav="history" href="history.html">${I('history')}<span>History</span></a><a data-nav="how" href="how-it-works.html">${I('info')}<span>How It Works</span></a><a data-nav="about" href="about.html">${I('info')}<span>About</span></a></nav><div class="nav-actions"><button class="dark-toggle" id="themeBtn" type="button">${ICONS.moon}<span>Dark</span></button><a class="btn primary nav-cta" href="screening.html">${ICONS.play}<span>Start Screening</span></a><button class="mobile-menu" id="mobileBtn" type="button" aria-label="Open navigation" aria-expanded="false">${ICONS.menu}</button></div></div></header>`;
const FOOTER=`<footer class="footer"><div class="container footer-inner"><div><b>BuccalCare AI</b> · Academic healthcare AI prototype</div><div>Demo AI Mode · Not a medical diagnosis · <a href="about.html">Project Information</a></div></div></footer>`;
document.getElementById("site-header").innerHTML=HEADER; document.getElementById("site-footer").innerHTML=FOOTER;
const page=document.body.dataset.page; document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===page)a.classList.add("active")});
const savedTheme=localStorage.getItem("bc-theme"); if(savedTheme==="dark")document.body.classList.add("dark");
const themeBtn=document.getElementById("themeBtn");
function updateThemeButton(){
  if(!themeBtn) return;
  const dark=document.body.classList.contains("dark");
  themeBtn.classList.toggle("is-dark",dark);
  themeBtn.innerHTML=dark
    ? '<span class="theme-icon" aria-hidden="true">☾</span><span class="theme-label">Dark</span>'
    : '<span class="theme-icon" aria-hidden="true">☀</span><span class="theme-label">Light</span>';
  themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
  themeBtn.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
}
if(themeBtn){
  updateThemeButton();
  themeBtn.onclick=()=>{
    document.body.classList.toggle("dark");
    localStorage.setItem("bc-theme",document.body.classList.contains("dark")?"dark":"light");
    updateThemeButton();
  };
}
const mobileBtn=document.getElementById("mobileBtn"); if(mobileBtn){mobileBtn.onclick=()=>{const n=document.getElementById("navlinks");const open=n.classList.toggle("mobile-open");mobileBtn.setAttribute("aria-expanded",open);mobileBtn.setAttribute("aria-label",open?"Close navigation":"Open navigation");mobileBtn.innerHTML=open?ICONS.close:ICONS.menu}}
function toast(msg){const old=document.querySelector('.toast');if(old)old.remove();const t=document.createElement("div");t.className="toast";t.innerHTML=`${ICONS.check}<span>${msg}</span>`;document.body.appendChild(t);setTimeout(()=>t.remove(),2800)}
function getHistory(){try{return JSON.parse(localStorage.getItem("bc-history")||"[]")}catch{return[]}}
function saveHistory(record){const h=getHistory();h.unshift(record);localStorage.setItem("bc-history",JSON.stringify(h.slice(0,50)))}
function formatDate(d){return new Date(d).toLocaleString([], {dateStyle:"medium",timeStyle:"short"})}
document.querySelectorAll("[data-demo]").forEach(btn=>btn.addEventListener("click",()=>{localStorage.setItem("bc-demo-case",btn.dataset.demo);window.location.href="screening.html?demo="+btn.dataset.demo}));
