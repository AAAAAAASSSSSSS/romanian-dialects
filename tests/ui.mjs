// smoke test: every panel renders without throwing, using a minimal DOM stub
import {SOURCES} from "../js/sources.js"; import {EXAMPLES} from "../js/examples.js"; import {RESEARCH,FAMILY} from "../js/research.js"; import {DIALECTS} from "../js/dialects.js"; import {RULES} from "../js/rules.js";
let bad=0;
for(const [k,d] of Object.entries(DIALECTS)){ if(!RESEARCH[FAMILY[d.group]]){bad++;console.log("no research",k)} if(!EXAMPLES[d.group]){bad++;console.log("no examples",k)}
 if(!d.area?.ro||!d.area?.en||!d.note?.ro||!d.note?.en){bad++;console.log("missing bilingual",k)} if(!d.ro||!d.en){bad++;console.log("name",k)}}
for(const R of Object.values(RULES)){ if(!R.ro||!R.en){bad++;console.log("rule text",R.id)} if(R.note&&(!R.note.ro||!R.note.en)){bad++;console.log("note",R.id)} for(const k of R.src) if(!SOURCES[k]){bad++;console.log("src",R.id,k)}}
for(const [k,s] of Object.entries(SOURCES)) for(const f of ["covers","area","caveat"]) if(!s[f].ro||!s[f].en){bad++;console.log("src text",k,f)}
console.log(bad?bad+" problems":"ui data ok");
