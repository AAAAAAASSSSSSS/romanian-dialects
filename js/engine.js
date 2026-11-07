// Engine: applies a dialect's ordered rule list to standard Romanian text.
// Rules use Unicode-aware boundaries (B0/B1 in rules.js) because JavaScript's \b does not know ă â î ș ț.
import {RULES} from "./rules.js"; import {DIALECTS} from "./dialects.js";
const cap=(src,out)=>src[0]!==src[0].toLowerCase()?out[0].toUpperCase()+out.slice(1):out;
const norm=t=>t.normalize("NFC").replace(/ş/g,"ș").replace(/Ş/g,"Ș").replace(/ţ/g,"ț").replace(/Ţ/g,"Ț");
const cache={};
function compile(R){return cache[R.id]||(cache[R.id]=new RegExp(R.from,"giu"));}
export function toDialect(text,id){
  const d=DIALECTS[id]; let out=norm(text);
  for(const rid of d.rules){
    const R=RULES[rid]; if(!R) throw new Error("missing rule "+rid);
    let re; try{re=compile(R);}catch(err){continue;} // browsers without regex lookbehind skip the rule instead of crashing
    const sub=(...a)=>{const m=a[0];
      if(R.map){const v=R.map[m.toLowerCase()]; return v===undefined?m:cap(m,v);}
      return cap(m,R.to.replace(/\$(\d)/g,(_,i)=>a[+i]??""));};
    // protected word-list outputs (between U+E000 and U+E001) are never re-read by later rules
    out=out.split(/(\uE000[^\uE001]*\uE001)/).map(seg=>seg[0]==="\uE000"?seg:seg.replace(re,(...a)=>R.protect?"\uE000"+sub(...a)+"\uE001":sub(...a))).join("");
  }
  return out.replace(/[\uE000\uE001]/g,"");
}
// ---- approximate IPA from the respelling (single pass)
const IPA={"șʲ":"ʃʲ","jʲ":"ʒʲ","ć":"tʃʲ","đ":"dʒʲ","ń":"nʲ","ĺ":"lʲ","ŕ":"rʲ","ĥ":"ɦʲ","ł":"ɫ","é":"ɛ","ĕ":"ə",ch:"k",gh:"g",c:"tʃ",g:"dʒ",ț:"ts",ș:"ʃ",j:"ʒ",ă:"ə",î:"ɨ",â:"ɨ",x:"ks",ea:"e̯a",oa:"o̯a",y:"j",h:"h"};
const RE=/șʲ|jʲ|[ćđńĺŕĥłéĕ]|(ch|gh|h|j|n)i(?=[aeo])|ch(?=[ei])|gh(?=[ei])|(c)(?=[eiĕ])|g(?=[eiĕ])|ea|oa|[țșjăîâxy]|c/giu;
export function toIPA(t){
  const o=t.toLowerCase().replace(RE,(m,p,q)=>p?(p==="ch"?"k":p==="gh"?"g":p)+"ʲ":q?"tʃ":m==="c"?"k":(IPA[m]??m));
  return "/"+o+"/";
}
