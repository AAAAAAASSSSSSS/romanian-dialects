import {DIALECTS,RULES} from "./rules.js"; import {toDialect,toIPA} from "./engine.js";
const S="Cine bine fierbe piatra zi de zi.";
const T={ro:{title:"Graiuri românești",sub:"Text în română standard → cum sună într-un grai",std:"Română standard",dia:"Grai",written:"Scris (ortografie)",pron:"Pronunție (IPA aprox.)",changes:"Schimbări aplicate",none:"Nu sunt încă reguli verificate pentru acest grai.",ph:"Scrie un text…",status:{sourced:"cu sursă",unverified:"neverificat"}},
 en:{title:"Romanian Graiuri",sub:"Standard Romanian text → how it sounds in a dialect",std:"Standard Romanian",dia:"Dialect",written:"Written (orthography)",pron:"Pronounced (approx. IPA)",changes:"Changes applied",none:"No verified rules for this dialect yet.",ph:"Type some text…",status:{sourced:"sourced",unverified:"unverified"}}};
const $=id=>document.getElementById(id);
function detect(){const s=localStorage.getItem("lang"); if(s) return s;
 const l=(navigator.languages||[navigator.language||""]).some(x=>/^ro/i.test(x));
 const tz=Intl.DateTimeFormat().resolvedOptions().timeZone||"";
 return (l||/Bucharest|Chisinau/.test(tz))?"ro":"en";}
let lang=detect();
function render(){const t=T[lang]; document.documentElement.lang=lang;
 $("title").textContent=t.title;$("sub").textContent=t.sub;$("l-std").textContent=t.std;$("l-dia").textContent=t.dia;
 $("l-w").textContent=t.written;$("l-p").textContent=t.pron;$("l-c").textContent=t.changes;$("in").placeholder=t.ph;$("lang").textContent=lang==="ro"?"EN":"RO";
 const sel=$("dia"),cur=sel.value; sel.innerHTML=Object.entries(DIALECTS).map(([k,d])=>`<option value="${k}">${d[lang]}</option>`).join(""); if(cur) sel.value=cur;
 update();}
function update(){const t=T[lang],id=$("dia").value,d=DIALECTS[id],src=$("in").value;
 const w=toDialect(src,id); $("w").textContent=w; $("p").textContent=src?toIPA(w):"";
 let h=d.note?`<p>${d.note}</p>`:"";
 h+=d.rules.length?"<ul>"+d.rules.map(r=>{const R=RULES[r];return `<li>${R[lang]} <em>(${R.ex})</em> — ${t.status[R.status]}${R.src?` [${R.src}]`:""}</li>`}).join("")+"</ul>":(d.special?"":`<p>${t.none}</p>`);
 $("c").innerHTML=h;}
$("in").value=S; $("in").oninput=update; $("dia").onchange=update;
$("lang").onclick=()=>{lang=lang==="ro"?"en":"ro";localStorage.setItem("lang",lang);render();};
render();
