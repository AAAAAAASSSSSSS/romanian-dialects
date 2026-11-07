import {toDialect} from "../js/engine.js"; import {DIALECTS,GROUPS} from "../js/dialects.js"; import {RULES} from "../js/rules.js";
let fail=0;
const t=(d,i,o)=>{const r=toDialect(i,d); if(r!==o){fail++;console.log("FAIL",d,JSON.stringify(i),"→",r,"| expected",o);}};
for(const [k,d] of Object.entries(DIALECTS)){ if(!GROUPS[d.group]){fail++;console.log("bad group",k)} for(const r of d.rules) if(!RULES[r]){fail++;console.log("missing",k,r)}}
// every rule's own example must work when its rule runs alone-ish (check the "x→y" example inside its dialect)
// user-reported case
t("muntenesc","aripi aripă aici alea","aripi haripă aici halea");
t("muntenesc","haină hoț albii","aină woț halbii");
t("muntenesc","pentru de pe peste din dintre dintr-un","păntru dă pă păste dîn dîntre dîntr-un");
t("muntenesc","deschid despart destupat desen","dăschid dăspart dăstupat desen");
t("muntenesc_ne","piele bine fier un vin miere","pʰʲiele bʰʲine fʰʲier un vʰʲin mʲiere");
t("oltenesc","ochi seară singur zic","ojchi sară sîngur zîc");
t("oltenesc_sud","fier vierme","fkʲer vgʲerme");
// Moldavia
t("moldovenesc_nord","ceapă cină sânge","șapî șinî sânji");
t("moldovenesc_nord","fierbe vițel vulpe","șierbi jițăl hulpe");
t("moldovenesc_sud","fierbe vițel","hierbi ĥițăl");
t("moldovenesc_nord","părinți vezi băiat avea","părinț vez băiet avé");
t("moldovenesc_nord","copil piatră bine miel","copchil chiatrî ghini niel");
t("moldovenesc_nord","mamă casă lapte","mamî casî lapti");
t("moldovenesc_nord","semn singur zeamă seară","sămn sîngur zamî sarî");
t("moldovenesc_nord","toți zic","tăț dzîc");
t("moldovenesc_neamt","fiert piept pietre pilit a fi dibăcia","fert pept petre chilit a hi ghibăcia");
// Bessarabia
t("basarabean_centru","fin șarpe meargă jos","șin șărpi margî gios");
t("basarabean_nordest","ouă să cinci","oauî sî șʲinșʲ");
t("basarabean_sudvest","cinci","cinci");
// Bukovina
t("bucovinean_campulung","fierbe piele bine mic","hierbe pchiele bghine mnic");
t("bucovinean_sudest","frunte dinte ochi","frunce gince oci");
t("bucovinean_radauti_vest","după viespe","dipi zespe");
t("bucovinean_dornean_cosna","pahar capac","păhar căpac");
// Banat
t("banatean","frunză brânză zece auzi","frundză brândză dzășʲe audz");
t("banatean","fier piele piept","fer peĺe pept");
t("banatean","seară semn singur steag","sară sămn sîngur stag");
t("banatean","frunte bade vine mare","frunće bađe vińe maŕe");
t("banatean","fete verde pește poveste","fjéće vjérđe pjéșće povjéstă");
t("banatean","ceas cină fuge","șʲas șʲină fujʲe");
t("banatean_almaj","luat caut","luvat capt");
// Crișana / Maramureș / Transylvania
t("crisean_moti","oameni lumină","wamirʲ lumnʲiră");
t("crisean_oas","alb schimb","ałb știmb");
t("crisean","orb poate","wărb potʲe");
t("maramuresean","zic jos pe","dzîc gios pă");
t("maramuresean","fete cer","fétʲe cĕr");
t("ardelenesc","pâine dorm coadă","pîne durm codă");
t("ardelenesc_ne","fin vin roșu","șin zin roșu");
// vin: verb and Friday stay, wine is softened
t("moldovenesc_nord","fetele vin la mine vineri","feteli vin la nini vineri");
t("moldovenesc_nord","eu vin și ei vin, el vine","eu vin șî ei vin, el vini");
t("moldovenesc_nord","bea vin roșu și un vin bun","bé jin roșu șî un jin bun");
t("moldovenesc_nord","vinul și vițelul","jinul șî jițălul");
t("banatean","grumaz poveste","grumadz povjéstă");
t("banatean","geană ginere","jʲeană jʲińeŕe");
console.log(fail?fail+" FAILURES":"all tests passed");
const S="Dimineața, băiatul a venit cu pâine și brânză, apoi a fiert cinci ouă pentru cină.";
if(process.argv[2]) for(const k of Object.keys(DIALECTS)) console.log(k.padEnd(28),toDialect(S,k));
