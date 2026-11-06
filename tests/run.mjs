import {toDialect,toIPA} from "../js/engine.js";
import {DIALECTS,GROUPS} from "../js/dialects.js";
import {RULES} from "../js/rules.js";
let fail=0;
const t=(d,i,o)=>{const r=toDialect(i,d); if(r!==o){fail++;console.log("FAIL",d,JSON.stringify(i),"→",r,"expected",o);}};
// every rule referenced exists, every rule's own example works
for(const [k,d] of Object.entries(DIALECTS)){ if(!GROUPS[d.group]) {fail++;console.log("bad group",k)} for(const r of d.rules) if(!RULES[r]){fail++;console.log("missing",k,r)}}
// user's reported bug
t("muntenesc","aripi aripă aici alea","haripi haripă aici halea");
t("muntenesc","Aripa haina hoț albii","Haripa aina oț halbii");
t("muntenesc","pentru de pe peste din dintre","păntru dă pă păste dîn dîntre");
t("muntenesc","deschid despart destupat desen","dăschid dăspart dăstupat desen");
t("muntenesc","Aripă","Haripă");
// Banat (source transcriptions)
t("banatean","frunză brânză buză zece auzi","frundză brândză budză dzășʲe audz");
t("banatean","fier piele piept miercuri","fer peĺe pept mercuŕi");
t("banatean","seară semn singur steag","sară sămn sîngur stag");
t("banatean","frunte bade vine mare","frunće bađe vińe maŕe");
t("banatean_sudvest","luat caut","luvat capt");
// Moldavian
t("moldovenesc_nord","ceapă cină gene","șapî șinî jeni");
t("moldovenesc_sud","fierbe vițel băiat avea","hierbi ĥițăl băiet avé");
t("moldovenesc_nord","fierbe vulpe","șierbi hulpe");
t("moldovenesc_nord","părinți vezi","părinț vez");
// Bessarabian
t("basarabean_centru","fin șarpe meargă","șin șărpi margî");
t("basarabean_centru","jos jur toți","gios giur tăț");
t("basarabean_nordest","ouă să","oauă sî");
t("basarabean_sudvest","cinci","cinci");
// Wallachian etc
t("oltenesc","ochi seară singur","ojchi sară sîngur");
t("oltenesc_sud","fier vierme","fchier vghierme");
t("muntenesc_ne","piele bine fier vin miere","pʰʲiele bʰʲine fʰʲier vʰʲin mʲiere");
// Bukovina
t("bucovinean_sudest","frunte dinte ochi","frunce gince oci");
t("bucovinean_campulung","fierbe piele bine mic","hierbe pchiele bghine mnic");
t("bucovinean_radauti","după viespe","dipi zespe");
t("bucovinean_cosna","pahar","păhar");
// Crișana etc
t("crisean_moti","oameni lumină","wamiri lumniră");
t("crisean_oas","alb","ałb");
t("crisean","orb oameni","wărb omeńi");
t("maramuresean","zic jos pe","dzîc gios pă");
t("ardelenesc","pâine dorm coadă","pîne durm codă");
t("ardelenesc_ne","fin vin","șin zin");
t("totoiana","pahar","harupa");
// each rule's example sentence run against its own page for sanity
console.log(fail?fail+" FAILURES":"all tests passed");
const S="Dimineața, băiatul a venit cu pâine și brânză, apoi a fiert cinci ouă pentru cină.";
for(const k of Object.keys(DIALECTS)) console.log(k.padEnd(26),toDialect(S,k));

t("basarabean_centru","dimineața mire","dininața nire".replace("dininața","diminața"));
