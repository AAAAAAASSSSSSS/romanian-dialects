import {DIALECTS, RULES} from "./rules.js";
const cap=(src,out)=>src[0]!==src[0].toLowerCase()?out[0].toUpperCase()+out.slice(1):out;
const norm=t=>t.normalize("NFC").replace(/ş/g,"ș").replace(/Ş/g,"Ș").replace(/ţ/g,"ț").replace(/Ţ/g,"Ț");
export function toDialect(text,id){
  const d=DIALECTS[id]; text=norm(text);
  if(d.special==="totoiana") return text.replace(/\p{L}+/gu,totoi);
  let out=text;
  for(const r of d.rules){const R=RULES[r], re=new RegExp(R.from,"giu");
    const sub=(...a)=>{const m=a[0];
      if(R.map) return cap(m,R.map[m.toLowerCase()]??R.map[m[0].toLowerCase()]??m);
      return cap(m,R.to.replace(/\$(\d)/g,(_,i)=>a[+i]??""));};
    // protected lexeme outputs (between U+E000 and U+E001) are never re-read by later rules
    out=out.split(/(\uE000[^\uE001]*\uE001)/).map(seg=>seg[0]==="\uE000"?seg:seg.replace(re,(...a)=>R.protect?"\uE000"+sub(...a)+"\uE001":sub(...a))).join("");}
  return out.replace(/[\uE000\uE001]/g,"");
}
const V="aeiouăâîy";
const syl=w=>w.match(new RegExp(`[^${V}]*[${V}]+(?:[^${V}]+$)?`,"giu"))||[w];
function totoi(w){ // en.wikipedia Totoiana: from the middle to the end, then the beginning; 'u' added when hard to pronounce (pahar→harupa)
  const s=syl(w); if(s.length<2) return w;
  const k=s.length===2?1:Math.floor(s.length/2);
  const a=s.slice(k).join(""), b=s.slice(0,k).join("");
  return cap(w,(a+(new RegExp(`[${V}]$`,"iu").test(a)?"":"u")+b).toLowerCase());
}
// single pass, so one rule's output is never re-read by another
const IPA={"șʲ":"ʃʲ","jʲ":"ʒʲ","ć":"tʃʲ","đ":"dʒʲ","ń":"nʲ","ĺ":"lʲ","ŕ":"rʲ","é":"ɛ",ch:"k",gh:"g",c:"tʃ",g:"dʒ",ț:"ts",ș:"ʃ",j:"ʒ",ă:"ə",î:"ɨ",â:"ɨ",x:"ks",ea:"e̯a",oa:"o̯a",y:"j"};
const RE=/șʲ|jʲ|[ćđńĺŕé]|(ch|gh|h|j|n)i(?=[aeo])|ch(?=[ei])|gh(?=[ei])|(c)(?=[ei])|g(?=[ei])|ea|oa|[țșjăîâxy]|c/giu;
export function toIPA(t){
  const o=t.toLowerCase().replace(RE,(m,p,q)=>p?(p==="ch"?"k":p==="gh"?"g":p)+"ʲ":q?"tʃ":m==="c"?"k":(IPA[m]??m));
  return "/"+o+"/";}
