import {DIALECTS,GROUPS} from "./dialects.js"; import {RULES} from "./rules.js"; import {toDialect,toIPA} from "./engine.js";
import {SOURCES} from "./sources.js"; import {EXAMPLES,TYPES} from "./examples.js"; import {RESEARCH,ALTELE,FAMILY} from "./research.js";
const $=id=>document.getElementById(id);
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const SAMPLES=["Seara, băiatul a venit cu pâine și brânză, apoi a fiert cinci ouă pentru cină.","Mâine merg la piață să cumpăr pește, vin și puțină brânză, dar nu știu când mă întorc.","Fratele meu a luat pâinea și a mers cu câinele după lemne, dar s-a întors seara.","Seara, fetele mele vin acasă, mănâncă pâine cu miere și se uită la televizor."];
const T={
 ro:{title:"Graiuri românești",sub:"Scrie un text în română standard și vezi cum ar suna într-un grai. Pentru fiecare regulă poți vedea sursa și zona în care a fost studiată.",std:"Text în română standard",dia:"Grai",
  w:"Cum sună (transcriere simplificată)",wh:"literele speciale: vezi legenda",p:"IPA (aproximativ)",ph:"Scrie un text…",sample:"↻ Alt exemplu",legend:"Cum citești literele speciale",
  changes:"Ce se schimbă în acest grai",none:"Nu sunt reguli redabile în scris pentru acest grai.",area:"Zona",diff:"Ce îl deosebește",ex:"Exemple",so:"Surse",
  tabs:{src:"Surse (A–Z)",res:"Cercetare"},resFor:"Cercetare pentru:",cite:"Citare",covers:"Ce conține",areaS:"Unde s-a cules",caveat:"Rezerve",open:"Deschide sursa",
  exFor:"Exemple pentru:",tryIt:"Pune textul în câmp",none2:"Nu sunt exemple pentru acest grai.",noteRule:"Notă:",rules:"Reguli",
  intro:"Exemple reale."},
 en:{title:"Romanian dialects",sub:"Type standard Romanian and see how it might sound in a dialect. For every rule you can see the source, and the area where it was studied.",std:"Standard Romanian text",dia:"Dialect",
  w:"How it sounds (simplified respelling)",wh:"special letters: see the legend",p:"IPA (approximate)",ph:"Type some text…",sample:"↻ Another example",legend:"How to read the special letters",
  changes:"What changes in this dialect",none:"No rules that can be shown in writing for this dialect.",area:"Area",diff:"What sets it apart",ex:"Examples",so:"Sources",
  tabs:{src:"Sources (A–Z)",res:"Research"},resFor:"Research for:",cite:"Citation",covers:"What it covers",areaS:"Where it was collected",caveat:"Caveats",open:"Open the source",
  exFor:"Examples for:",tryIt:"Put this text in the box",none2:"There are no examples for this dialect.",noteRule:"Note:",rules:"Rules",
  intro:"Real examples."}
};
const LEG=[["ć đ","tʃʲ dʒʲ","ro: „ci”, „gi” moi (Banat)","soft “ci”, “gi” (Banat)"],["ń ĺ ŕ","nʲ lʲ rʲ","n, l, r muiate","softened n, l, r"],["ʲ","","după literă: pronunție „muiată”, cu un i foarte scurt","after a letter: “softened”, with a very short i"],["ʰ","","o suflare de aer (aspirat): pʰ","a puff of air (aspirated): pʰ"],["ĥ","ɦʲ","un h sonor, muiat","a voiced, softened h"],["ł","ɫ","l „gros” (Oaș)","“dark” l (Oaș)"],["é, jé","ɛ","e deschis (avea→avé, fete→féte)","open e (avea→avé, fete→féte)"],["ĕ","ə","e central după c, g (cer→cĕr): c, g rămân ca în „ce”","central e after c, g (cer→cĕr): c, g stay as in “ce”"],["șʲ jʲ","ʃʲ ʒʲ","ș, j muiate","softened ș, j"],["î, â","ɨ","ca în „când”","as in Romanian “când”"],["ș, ț, ă","ʃ ts ə","ca în română","as in Romanian"]];
let lang=(()=>{const s=store.get("lang");if(s)return s;const l=(navigator.languages||[navigator.language||""]).some(x=>/^ro/i.test(x));const tz=(()=>{try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(e){return""}})()||"";return(l||/Bucharest|Chisinau/.test(tz))?"ro":"en";})();
let sampleI=0, panel=null, tab="src", pending=null;
const L=o=>o[lang];
const groupsSorted=()=>Object.entries(GROUPS).sort((x,y)=>L(x[1]).localeCompare(L(y[1]),lang));
function fillSelect(){const sel=$("dia"),cur=sel.value||"muntenesc";
 sel.innerHTML=groupsSorted().map(([g,gd])=>`<optgroup label="${esc(L(gd))}">`+Object.entries(DIALECTS).filter(([,d])=>d.group===g).map(([k,d])=>`<option value="${k}">${esc(L(d))}</option>`).join("")+"</optgroup>").join("");
 sel.value=DIALECTS[cur]?cur:"muntenesc";}
function chips(keys){return keys.map(k=>`<button class="chip" data-src="${k}">${esc(SOURCES[k].label)}</button>`).join("");}
function render(){const t=T[lang];document.documentElement.lang=lang;
 $("title").textContent=t.title;$("sub").textContent=t.sub;$("l-std").textContent=t.std;$("l-dia").textContent=t.dia;$("l-w").textContent=t.w;$("h-w").textContent=t.wh;$("l-p").textContent=t.p;
 $("in").placeholder=t.ph;$("sample").textContent=t.sample;$("l-leg").textContent=t.legend;$("l-c").textContent=t.changes;$("lang").textContent=lang==="ro"?"EN":"RO";
 $("b-ex").textContent="📖 "+t.ex;$("b-so").textContent="📚 "+t.so;
 $("legend-body").innerHTML="<table>"+LEG.map(r=>`<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${lang==="ro"?r[2]:r[3]}</td></tr>`).join("")+"</table>";
 fillSelect();update();if(panel)drawPanel();}
function update(){const t=T[lang],id=$("dia").value,d=DIALECTS[id],src=$("in").value;
 $("w").textContent=toDialect(src,id);$("p").textContent=src?toIPA(toDialect(src,id)):"";
 $("info").innerHTML=`<h3>${esc(t.area)}</h3><p>${esc(L(d.area))}</p><h3>${esc(t.diff)}</h3><p>${esc(L(d.note))}</p>`;
 $("c").innerHTML=d.rules.length?`<ul class="rules">`+[...new Set(d.rules)].map(r=>{const R=RULES[r];
  return `<li>${esc(L(R))} <span class="ex">(${esc(R.ex)})</span>${R.note?`<div class="rnote">${esc(t.noteRule)} ${esc(L(R.note))}</div>`:""}<div>${chips(R.src)}</div></li>`}).join("")+"</ul>":`<p class="muted">${esc(d.special?L(d.note):t.none)}</p>`;
 if(panel)drawPanel();}
// ---------- panels
function open(p,anchor){panel=p;pending=anchor||null;$("panel").hidden=false;$("scrim").hidden=false;document.body.style.overflow="hidden";drawPanel();$("p-close").focus();}
function close(){panel=null;$("panel").hidden=true;$("scrim").hidden=true;document.body.style.overflow="";}
function drawPanel(){const t=T[lang],id=$("dia").value,d=DIALECTS[id];
 $("p-title").textContent=panel==="examples"?t.ex:t.so;
 const tabs=$("p-tabs");
 if(panel==="sources"){tabs.hidden=false;tabs.innerHTML=["src","res"].map(k=>`<button role="tab" data-tab="${k}" aria-selected="${tab===k}">${esc(t.tabs[k])}</button>`).join("");}else tabs.hidden=true;
 const b=$("p-body");
 b.innerHTML=panel==="examples"?examplesHTML(id,d,t):tab==="src"?sourcesHTML(t):researchHTML(d,t);
 if(pending){const el=b.querySelector(`[data-id="${pending}"]`);if(el){el.scrollIntoView?.({block:"start"});el.classList.add("flash");}pending=null;}}
function dialectSwitch(id){return `<label for="p-dia">${esc(T[lang].exFor)}</label><select id="p-dia">${groupsSorted().map(([g,gd])=>`<optgroup label="${esc(L(gd))}">`+Object.entries(DIALECTS).filter(([,x])=>x.group===g).map(([k,x])=>`<option value="${k}"${k===id?" selected":""}>${esc(L(x))}</option>`).join("")+"</optgroup>").join("")}</select>`;}
function examplesHTML(id,d,t){const list=(EXAMPLES[d.group]||[]).filter(e=>!e.only||e.only.includes(id));
 let h=`<p class="muted">${esc(t.intro)}</p>`+dialectSwitch(id);
 if(!list.length)return h+`<p>${esc(t.none2)}</p>`;
 for(const [ty,td] of Object.entries(TYPES)){const items=list.filter(e=>e.type===ty);if(!items.length)continue;
  h+=`<h3>${esc(L(td))}</h3>`+items.map(e=>`<div class="item"><div>${esc(L(e))}</div><div class="meta">${esc(e.cite)}</div>${e.try?`<button class="try small" data-try="${esc(e.try)}">${esc(t.tryIt)}</button>`:""}</div>`).join("");}
 return h;}
function sourcesHTML(t){const used={};for(const R of Object.values(RULES))for(const k of R.src)(used[k]=used[k]||new Set()).add(R.id);
 const keys=Object.keys(SOURCES).sort((a,b)=>SOURCES[a].label.localeCompare(SOURCES[b].label,lang));
 return keys.map(k=>{const s=SOURCES[k];return `<div class="item" data-id="${k}"><b>${esc(s.label)}</b>
  <div class="meta"><b>${esc(t.cite)}:</b> ${esc(s.cite)}</div>
  <div class="meta"><b>${esc(t.covers)}:</b> ${esc(L(s.covers))}</div>
  <div class="meta"><b>${esc(t.areaS)}:</b> ${esc(L(s.area))}</div>
  <div class="meta"><b>${esc(t.caveat)}:</b> ${esc(L(s.caveat))}</div>
  <div class="meta"><b>${esc(t.rules)}:</b> ${used[k]?used[k].size:0}</div>
  <div class="meta"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(t.open)} ↗</a></div></div>`}).join("");}
function sect(sections){return sections.map(s=>`<h3>${esc(L(s.h))}</h3><ul>${s.i.map(i=>`<li>${esc(L(i))}</li>`).join("")}</ul>`).join("");}
function researchHTML(d,t){const r=RESEARCH[FAMILY[d.group]];return `<p class="muted">${esc(t.resFor)} <b>${esc(L(r.title))}</b></p>`+sect(r.sections)+`<h3 style="margin-top:1.4rem">${esc(L(ALTELE.title))}</h3>`+sect(ALTELE.sections).replace(/<h3>/g,"<h3 class=\"sub\">");}
// ---------- events
$("in").value=SAMPLES[0];$("in").oninput=update;$("dia").onchange=update;
$("sample").onclick=()=>{sampleI=(sampleI+1)%SAMPLES.length;$("in").value=SAMPLES[sampleI];update();};
$("lang").onclick=()=>{lang=lang==="ro"?"en":"ro";store.set("lang",lang);render();};
$("b-ex").onclick=()=>open("examples");$("b-so").onclick=()=>open("sources");
$("p-close").onclick=close;$("scrim").onclick=close;
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&panel)close();});
$("c").addEventListener("click",e=>{const b=e.target.closest("[data-src]");if(b){tab="src";open("sources",b.dataset.src);}});
$("p-tabs").addEventListener("click",e=>{const b=e.target.closest("[data-tab]");if(b){tab=b.dataset.tab;drawPanel();}});
$("p-body").addEventListener("click",e=>{const b=e.target.closest("[data-try]");if(b){$("in").value=b.dataset.try;update();close();}});
$("p-body").addEventListener("change",e=>{if(e.target.id==="p-dia"){$("dia").value=e.target.value;update();}});
render();
