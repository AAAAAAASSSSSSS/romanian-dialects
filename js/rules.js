// RULES: one object per sound change / word list. Dialect pages (js/dialects.js) list rule ids in the order they run.
// status: "sourced"  = the change (and its examples) is stated in a source I read (keys: js/sources.js)
//         "extended" = same pattern as a sourced rule, applied to forms the source does not list (e.g. inflected forms, pentru→păntru)
//         "approx"   = sourced, but the source needs stress/context that the program cannot see, so it is applied by a heuristic
// Boundaries: JS \b only knows ASCII, so B0/B1 are Unicode-aware "start / end of word".
const B0=String.raw`(?<!\p{L})`, B1=String.raw`(?!\p{L})`;
const C="bcdfghjklmnprstvzșț", V="aeiouăâîy", NV=`[^${V}]`;
const SIB="(?:st|[szșjț])", SIBR="[szșjț]";
const R=(id,ro,en,from,to,ex,status,src,extra={})=>({id,ro,en,from,to,ex,status,src:[].concat(src),...extra});
const L=(id,ro,en,words,map,ex,status,src,extra={})=>({id,ro,en,from:`${B0}(?:${words})${B1}`,map,protect:true,ex,status,src:[].concat(src),...extra});
const list=[];
const add=(...r)=>list.push(...r);

/* ================= WALLACHIAN: Muntenia / Oltenia ================= */
add(
L("wl_h","h- de la început slab sau căzut, și h- adăugat din hipercorectare: haină→aină, hoț→oț, aripă→haripă, alea→halea, albii→halbii","word-initial h weak or dropped, and a wrong h added (hypercorrection): haină→aină, hoț→oț, aripă→haripă, alea→halea, albii→halbii",
 "haină|hoț|aripă|alea|albii",{"haină":"aină","hoț":"oț","aripă":"haripă",alea:"halea",albii:"halbii"},"aripă→haripă, alea→halea","sourced","enwal",{note:{ro:"Sursa spune „uneori”: e o tendință, nu o regulă fixă.",en:"The source says “sometimes”: a tendency, not a fixed rule."}}),
L("wl_h2","Aceleași cuvinte la alte forme (haine, hoți, aripi, aripile…), după același tipar","The same words in other forms (haine, hoți, aripi, aripile…), following the same pattern",
 "haina|haine|hainele|hainei|hoți|hoții|hoția|aripi|aripa|aripile|aripii|albie|albiei|albiile",
 {haina:"aina",haine:"aine",hainele:"ainele",hainei:"ainei","hoți":"oți","hoții":"oții","hoția":"oția",aripi:"haripi",aripa:"haripa",aripile:"haripile",aripii:"haripii",albie:"halbie",albiei:"halbiei",albiile:"halbiile"},
 "aripi→haripi","extended","enwal",{note:{ro:"Sursa dă doar haină, hoț, aripă, alea, albii; formele de plural/articulate sunt extinse prin analogie.",en:"The source lists only haină, hoț, aripă, alea, albii; plural/definite forms are extended by analogy."}}),
L("wl_prep","Muntenia: după d, p, în prepoziții: e→ă, i→î (de→dă, decât→dăcât, dintre→dîntre, pe→pă)","Muntenia: after d, p in prepositions: e→ă, i→î (de→dă, decât→dăcât, dintre→dîntre, pe→pă)",
 "de|decât|decît|dintre|pe",{de:"dă","decât":"dăcât","decît":"dăcît",dintre:"dîntre",pe:"pă"},"de→dă, pe→pă","sourced","enwal"),
L("wl_prep2","Același tipar la alte prepoziții: pentru→păntru, peste→păste, din→dîn, dintr-→dîntr-, dinspre→dînspre…","Same pattern for other prepositions: pentru→păntru, peste→păste, din→dîn, dintr-→dîntr-, dinspre→dînspre…",
 "pentru|peste|din|dintr|dinspre|dinaintea|dinainte|dinapoi|dinapoia|dinafară",
 {pentru:"păntru",peste:"păste",din:"dîn",dintr:"dîntr",dinspre:"dînspre",dinaintea:"dînaintea",dinainte:"dînainte",dinapoi:"dînapoi",dinapoia:"dînapoia","dinafară":"dînafară"},
 "pentru→păntru","extended","enwal",{note:{ro:"Sursa numește regula (prepoziții și prefixe după d, p) dar dă doar de, decât, dintre, pe și des-. Celelalte prepoziții sunt extinse prin analogie; „păntru” nu l-am găsit explicit în sursele citite.",en:"The source names the rule (prepositions and prefixes after d, p) but lists only de, decât, dintre, pe and des-. The other prepositions are extended by analogy; I did not find “păntru” spelled out in the sources I read."}}),
R("wl_des","Muntenia: prefixul des- → dăs- (despart→dăspart, deschid→dăschid, destupat→dăstupat). Cuvintele care nu au prefix (desen, destin, desemna) sunt excluse","Muntenia: prefix des- → dăs- (despart→dăspart, deschid→dăschid, destupat→dăstupat). Words without the prefix (desen, destin, desemna) are excluded",
 `${B0}des(?!en|emn|ert|tin)(?=[${C}])`,"dăs","deschid→dăschid","sourced","enwal"),
R("wl_p","NE și E Muntenia: p înaintea lui i e „aspirat și muiat” (piele→pʰʲiele)","NE and E Muntenia: p before i is aspirated and softened (piele→pʰʲiele)","p(?=i)","pʰʲ","piele→pʰʲiele","sourced","enwal"),
R("wl_b","NE și E Muntenia: bine→bʰʲine","NE and E Muntenia: bine→bʰʲine","b(?=i)","bʰʲ","bine→bʰʲine","sourced","enwal"),
R("wl_f","NE și E Muntenia: fier→fʰʲier","NE and E Muntenia: fier→fʰʲier","f(?=i)","fʰʲ","fier→fʰʲier","sourced","enwal"),
R("wl_v","NE și E Muntenia: vin→vʰʲin","NE and E Muntenia: vin→vʰʲin","v(?=i)","vʰʲ","vin→vʰʲin","sourced","enwal"),
R("wl_m","NE și E Muntenia: miere→mʲiere","NE and E Muntenia: miere→mʲiere",String.raw`(?<![\p{L}])m(?=i[\p{L}])`,"mʲ","miere→mʲiere","sourced","enwal"),
R("ol_sea","Oltenia: după s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapă→țapă)","Oltenia: after s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapă→țapă)",`(${SIBR})ea`,"$1a","seară→sară","sourced","enwal"),
R("ol_se","Oltenia: după s, z, ș, j, ț: e→ă (secure→săcure, zer→zăr)","Oltenia: after s, z, ș, j, ț: e→ă (secure→săcure, zer→zăr)",`(${SIBR})e`,"$1ă","secure→săcure","sourced","enwal"),
R("ol_si","Oltenia: după s, z, ș, j, ț: i→î (singur→sîngur, zic→zîc, jir→jîr, țin→țîn)","Oltenia: after s, z, ș, j, ț: i→î (singur→sîngur, zic→zîc, jir→jîr, țin→țîn)",`(${SIBR})i`,"$1î","singur→sîngur","sourced","enwal"),
R("ol_j","Oltenia: se intercalează j înaintea lui k muiat (ochi→ojchi, rachiu→rajchiu, strachină→strajchină)","Oltenia: j is inserted before a soft k (ochi→ojchi, rachiu→rajchiu, strachină→strajchină)",`([aeiouăâî])ch(?=[ei])`,"$1jch","ochi→ojchi","sourced","enwal"),
R("ol_f","Sudul Olteniei: fier→fchier (variantă schier)","Southern Oltenia: fier→fchier (variant schier)","f(?=i)","fch","fier→fchier","sourced","enwal"),
R("ol_v","Sudul Olteniei: vierme→vghierme (variantă zghierme)","Southern Oltenia: vierme→vghierme (variant zghierme)","v(?=i)","vgh","vierme→vghierme","sourced","enwal"),
);

/* ================= TIMOK ================= */
add(
R("tm_c","Timoc (ungureni): ce/ci → șʲe/șʲi (cinci→șʲinșʲi)","Timok (Ungureni): ce/ci → șʲe/șʲi (cinci→șʲinșʲi)","c(?=[ei])","șʲ","cinci→șʲinșʲi","approx",["roban","oeaw"]),
R("tm_t","Timoc (ungureni): te/ti → ce/ci (frunte→frunce)","Timok (Ungureni): te/ti → ce/ci (frunte→frunce)","t(?=[ei])","c","frunte→frunce","approx",["roban","oeaw"]),
R("tm_de","Timoc (ungureni): d din interiorul cuvântului + e → ge (unde→unge)","Timok (Ungureni): word-internal d + e → ge (unde→unge)",String.raw`(?<=\p{L})d(?=e)`,"g","unde→unge","approx","roban"),
R("tm_di","Timoc (ungureni): di → ghi (dinte→ghince)","Timok (Ungureni): di → ghi (dinte→ghince)","d(?=i)","gh","dinte→ghince","approx","roban"),
);

/* ================= BANAT ================= */
add(
L("b_lex","Africata dz se păstrează în câteva cuvinte: zece→dzășʲe, auzi→audz, frunză→frundză, brânză→brândză, buză→budză, grumaz→grumadz, mânz→mândz","Affricate dz kept in some words: zece→dzășʲe, auzi→audz, frunză→frundză, brânză→brândză, buză→budză, grumaz→grumadz, mânz→mândz",
 "zece|auzi|frunz[ăa]|br[âî]nz[ăa]|buz[ăa]|grumaz|m[âî]nz",{zece:"dzășʲe",auzi:"audz","frunză":"frundză",frunza:"frundza","brânză":"brândză","brînză":"brândză","brânza":"brândza","brînza":"brândza","buză":"budză",buza:"budza",grumaz:"grumadz","mânz":"mândz","mînz":"mândz"},"zece→dzășʲe","sourced","enban"),
R("b_ie","După labială, ie → e: fier→fer, piele→pele, piept→pept, miercuri→mercuri",`After a labial, ie → e: fier→fer, piele→pele, piept→pept, miercuri→mercuri`,`([pbfvm])ie(?=[${C}])`,"$1e","fier→fer","sourced","enban"),
R("b_ea","După s, z, ș, j, ț, st: ea→a (seară→sară, steag→stag)","After s, z, ș, j, ț, st: ea→a (seară→sară, steag→stag)",`(${SIB})ea`,"$1a","seară→sară","sourced","enban"),
R("b_e","După s, z, ș, j, ț, st: e→ă (semn→sămn)","After s, z, ș, j, ț, st: e→ă (semn→sămn)",`(${SIB})e`,"$1ă","semn→sămn","sourced","enban"),
R("b_i","După s, z, ș, j, ț, st: i→î (singur→sîngur, și→șî)","After s, z, ș, j, ț, st: i→î (singur→sîngur, și→șî)",`(${SIB})i`,"$1î","singur→sîngur","sourced","enban"),
R("b_c","ce/ci → șʲe/șʲi: africata devine fricativă „muiată” (ceas→șʲas, cinci→șʲinșʲ)","ce/ci → șʲe/șʲi: the affricate becomes a soft fricative (ceas→șʲas, cinci→șʲinșʲ)","c(?=[ei])","șʲ","ceas→șʲas","sourced","enban"),
R("b_g","ge/gi → jʲe/jʲi (fuge→fujʲe, ginere→jʲinere)","ge/gi → jʲe/jʲi (fuge→fujʲe, ginere→jʲinere)","g(?=[ei])","jʲ","fuge→fujʲe","sourced","enban"),
R("b_t","t înaintea lui e/i → ć (ca „ci” muiat): frunte→frunće","t before e/i → ć (a soft “ci” sound): frunte→frunće","t(?=[ei])","ć","frunte→frunće","sourced",["enban","diaban"]),
R("b_d","d înaintea lui e/i → đ (ca „gi” muiat): bade→bađe, dimineață→đimineață","d before e/i → đ (a soft “gi” sound): bade→bađe, dimineață→đimineață","d(?=[ei])","đ","bade→bađe","sourced",["enban","diaban"]),
R("b_n","n înaintea lui e/i → ń (vine→vińe)","n before e/i → ń (vine→vińe)","n(?=[ei])","ń","vine→vińe","sourced","enban"),
R("b_l","l înaintea lui e/i → ĺ (lemne→ĺemńe)","l before e/i → ĺ (lemne→ĺemńe)","l(?=[ei])","ĺ","lemne→ĺemńe","sourced","enban"),
R("b_r","r înaintea lui e/i → ŕ (mare→maŕe)","r before e/i → ŕ (mare→maŕe)","r(?=[ei])","ŕ","mare→maŕe","sourced","enban"),
L("b_sw","Sud-vestul Banatului: luat→luvat, caut→capt","South-west Banat: luat→luvat, caut→capt","luat|caut",{luat:"luvat",caut:"capt"},"luat→luvat","sourced",["petrovici","diaban"]),
);

/* ================= MOLDAVIAN core ================= */
add(
L("m_lex","Forme vechi: fecior→ficior, femeie→fimeie, toți→tăț","Old forms: fecior→ficior, femeie→fimeie, toți→tăț","fecior|femeie|toți",{fecior:"ficior",femeie:"fimeie","toți":"tăț"},"fecior→ficior","sourced",["spinu18","enmol"]),
L("m_dz","zic→dzîc (dz păstrat) — doar în Moldova din România; Spînu 2018 spune că NU se păstrează în Republica Moldova","zic→dzîc (dz kept) — Romanian Moldavia only; Spînu 2018 says it is NOT kept in the Republic of Moldova","zic",{zic:"dzîc"},"zic→dzîc","sourced","enmol"),
R("m_dropi","După s, z, ș, j, ț: -i final (plural / persoana a 2-a) dispare (vezi→vez, părinți→părinț)","After s, z, ș, j, ț: final plural / 2nd-person -i disappears (vezi→vez, părinți→părinț)",String.raw`(?<=\p{L})([szșjț])i(?![\p{L}])`,"$1","părinți→părinț","sourced","enmol"),
R("m_cea","cea→șa, gea→ja (ceapă→șapă)","cea→șa (ceapă→șapă)","cea","șa","ceapă→șapă","sourced","enmol"),
R("m_gea","gea→ja","gea→ja","gea","ja","geană→janǎ","sourced","enmol"),
R("m_ea","După s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă)","After s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă)",`(${SIBR})ea`,"$1a","seară→sară","sourced","enmol"),
R("m_e","După s, z, ș, j, ț: e→ă (semn→sămn)","After s, z, ș, j, ț: e→ă (semn→sămn)",`(${SIBR})e`,"$1ă","semn→sămn","sourced","enmol"),
R("m_i","După s, z, ș, j, ț: i→î (singur→sîngur, zid→zîd)","After s, z, ș, j, ț: i→î (singur→sîngur, zid→zîd)",`(${SIBR})i`,"$1î","zid→zîd","sourced","enmol"),
R("m_c","ce/ci → șe/și: africata devine fricativă (cină→șină). Se aplică după schimbarea vocalelor, de aceea cină→șină, nu șînă","ce/ci → șe/și: the affricate becomes a fricative (cină→șină). Runs after the vowel change, hence cină→șină, not șînă","c(?=[ei])","ș","cină→șină","sourced","enmol"),
R("m_g","ge/gi → je/ji (sânge→sânji)","ge/gi → je/ji (sânge→sânji)","g(?=[ei])","j","gene→jene","sourced","enmol"),
R("m_p","pi → chi (piatră→chiatră, copil→cochil)","pi → chi (piatră→chiatră, copil→cochil)","p(?=i)","ch","piatră→chiatră","sourced",["enmol","capr02"]),
R("m_b","bi → ghi (bine→ghine)","bi → ghi (bine→ghine)","b(?=i)","gh","bine→ghine","sourced",["enmol","capr02"]),
R("m_iat","-iat → -iet (băiat→băiet)","-iat → -iet (băiat→băiet)",`iat${B1}`,"iet","băiat→băiet","sourced",["enmol","capr02"]),
R("m_eafin","-ea final → -é (avea→avé, spunea→spuné)","final -ea → -é (avea→avé, spunea→spuné)",String.raw`(?<=\p{L})ea(?![\p{L}])`,"é","avea→avé","sourced",["enmol","capr02"]),
R("m_afin","-ă final (cuvinte de 3+ litere) → -î (mamă→mamî, casă→casî)","final -ă (words of 3+ letters) → -î (mamă→mamî, casă→casî)",String.raw`(?<=\p{L}{2})ă(?![\p{L}])`,"î","mamă→mamî","sourced",["enmol","spinu09"]),
R("m_efin","-e final neaccentuat → -i (lapte→lapti, vreme→vremi)","unstressed final -e → -i (lapte→lapti, vreme→vremi)",String.raw`(?<=[bcdfghjklmnprstvxzșțć])e(?![\p{L}])`,"i","lapte→lapti","approx",["enmol","spinu09"],{note:{ro:"Sursa cere „neaccentuat”; programul nu vede accentul și o aplică la toate -e finale.",en:"The source says “unstressed”; the program cannot see stress and applies it to every final -e."}}),
R("m_re","e→ă după r, m la început de cuvânt (repede→răpidi, merg→mărg)","e→ă after word-initial r, m (repede→răpidi, merg→mărg)",String.raw`(?<![\p{L}])([rm])e(?![^aeiouăâîy]+e)(?=[${C}])`,"$1ă","merg→mărg","approx","spinu18",{note:{ro:"Sursa dă doar răpidi și mărg; regula e limitată la cuvinte cu un singur e.",en:"The source gives only răpidi and mărg; the rule is limited to words with a single e."}}),
L("m_lov","lovesc→lovăsc, lovește→lovăște, să lovească→să lovască (e/ea→ă/a după v)","lovesc→lovăsc, lovește→lovăște, să lovească→să lovască (e/ea→ă/a after v)","lovesc|lovește|lovească",{lovesc:"lovăsc","lovește":"lovăște","lovească":"lovască"},"lovesc→lovăsc","sourced","enmol",{note:{ro:"Regula generală (după v) nu e aplicată la orice cuvânt, ca să nu strice vezi, vechi etc.; doar cuvintele din sursă.",en:"The general rule (after v) is not applied to every word, so as not to break vezi, vechi, etc.; only the source's words."}}),
// Moldovenesc nord vs sud (Romania)
R("mn_f","Nordul Moldovei: fi → și (fierbe→șierbe)","Northern Moldavia: fi → și (fierbe→șierbe)","f(?=i)","ș","fierbe→șierbe","sourced","enmol"),
R("mn_v","Nordul Moldovei: vi → ji (vițel→jițel)","Northern Moldavia: vi → ji (vițel→jițel)","v(?=i)","j","vițel→jițel","sourced","enmol"),
L("mn_hv","Nordul Moldovei: v → h înaintea lui o/u în volbură→holbură, vulpe→hulpe, vultan→hultan","Northern Moldavia: v → h before o/u in volbură→holbură, vulpe→hulpe, vultan→hultan","volbură|vulpe|vulpi|vultan",{"volbură":"holbură",vulpe:"hulpe",vulpi:"hulpi",vultan:"hultan"},"vulpe→hulpe","sourced","enmol"),
R("ms_f","Sudul Moldovei (și Neamț, la Creangă): fi → hi (fierbe→hierbe)","Southern Moldavia (and Neamț, in Creangă): fi → hi (fierbe→hierbe)","f(?=i)","h","fierbe→hierbe","sourced",["enmol","capr02"]),
R("ms_v","Sudul Moldovei: vi → ĥi, un h sonor (vițel→ĥițel)","Southern Moldavia: vi → ĥi, a voiced h (vițel→ĥițel)","v(?=i)","ĥ","vițel→ĥițel","sourced","enmol"),
);

/* ================= BESSARABIAN (Republic of Moldova) ================= */
add(
R("bas_ja","După ș, j: a accentuat → ă (șarpe→șărpe, șapte→șăpte, jale→jăle)","After ș, j: stressed a → ă (șarpe→șărpe, șapte→șăpte, jale→jăle)",String.raw`(?<![\p{L}])([șj])a(?=[^aeiouăâîy]+(?:[aeiouăâîy]+[^aeiouăâîy]*)?(?![\p{L}]))`,"$1ă","șapte→șăpte","approx","spinu18",{note:{ro:"Sursa cere a accentuat; programul nu vede accentul, așa că se aplică doar la început de cuvânt, în cuvinte de cel mult două silabe (unde accentul cade de obicei pe prima).",en:"The source needs stressed a; the program cannot see stress, so it applies only at word start, in words of at most two syllables (where stress usually falls on the first)."}}),
R("bas_ea","ea→a când silaba următoare are a/ă (meargă→margă, seară→sară, țeapăn→țapăn)","ea→a when the next syllable has a/ă (meargă→margă, seară→sară, țeapăn→țapăn)",`ea(?=[${C}]{1,2}[aă])`,"a","meargă→margă","sourced","spinu18"),
R("bas_f","Palatalizarea labialelor în stadiul final: fi → și (fin→șin)","Labial palatalization in its final stage: fi → și (fin→șin)","f(?=i)","ș","fin→șin","sourced",["spinu18","spinu09"]),
R("bas_v","vi → ji (vierme→jierme)","vi → ji (vierme→jierme)","v(?=i)","j","vierme→jierme","sourced",["spinu18","spinu09"]),
R("m_m","mi → ni la început de cuvânt (mire→nire). Contestat în Moldova (Creangă: m nu se muiază), atestat în Basarabia și în zona Rădăuți","mi → ni (mire→nire). Disputed in Moldavia (Creangă: m is not softened), attested in Bessarabia and the Rădăuți area",String.raw`(?<![\p{L}])m(?=i[\p{L}])`,"n","mire→nire","sourced",["spinu18","enmol","turc77"]),
L("m_gio","j- păstrat ca africată: jos→gios, joc→gioc, jur→giur, jug→giug (mai ales vârstnici)","old affricate kept: jos→gios, joc→gioc, jur→giur, jug→giug (mostly elderly)","jos|joc|jur|jura|jug",{jos:"gios",joc:"gioc",jur:"giur",jura:"giura",jug:"giug"},"jos→gios","sourced","spinu18"),
// north-east of the Republic
R("ne_cea","NE (Camenca–Rîbnița–Dubăsari): cea → șʲa, gea → jʲa","NE (Camenca–Rîbnița–Dubăsari): cea → șʲa, gea → jʲa","cea","șʲa","ceapă→șʲapă","sourced","spinu09"),
R("ne_gea","NE: gea → jʲa","NE: gea → jʲa","gea","jʲa","geană→jʲană","sourced","spinu09"),
R("ne_c","NE: ce/ci → șʲe/șʲi, fricativă muiată (cinci→șʲinșʲ, cruce→crușʲe)","NE: ce/ci → șʲe/șʲi, a soft fricative (cinci→șʲinșʲ, cruce→crușʲe)","c(?=[ei])","șʲ","cinci→șʲinșʲ","sourced","spinu09"),
R("ne_g","NE: ge/gi → jʲe/jʲi (argint→arjʲint)","NE: ge/gi → jʲe/jʲi (argint→arjʲint)","g(?=[ei])","jʲ","argint→arjʲint","sourced","spinu09"),
L("ne_lex","NE și NV: ouă→oauă, rouă→roauă, nouă→noauă, plouă→ploauă (o urmat de a); NE: guler→guliar, nepot→niapot, nevastă→niavastă, necaz→nacaz, să→sî","NE and NW: ouă→oauă, rouă→roauă, nouă→noauă, plouă→ploauă (o becomes oa); NE: guler→guliar, nepot→niapot, nevastă→niavastă, necaz→nacaz, să→sî",
 "ouă|rouă|nouă|plouă|guler|nepot|nevastă|necaz|să",{"ouă":"oauă","rouă":"roauă","nouă":"noauă","plouă":"ploauă",guler:"guliar",nepot:"niapot","nevastă":"niavastă",necaz:"nacaz","să":"sî"},"ouă→oauă","approx","spinu09",{note:{ro:"Transcrierea din sursă folosește simboluri greu de citit în PDF; respelling-ul e o apropiere.",en:"The source's transcription uses symbols that are hard to read in the PDF; the respelling is an approximation."}}),
L("nv_lex","NV (nord-vestul Republicii Moldova, Cernăuți, Herța, Hotin): ouă→oauă, rouă→roauă, nouă→noauă, plouă→ploauă","NW (north-west Rep. Moldova, Chernivtsi, Herța, Hotin): ouă→oauă, rouă→roauă, nouă→noauă, plouă→ploauă","ouă|rouă|nouă|plouă",{"ouă":"oauă","rouă":"roauă","nouă":"noauă","plouă":"ploauă"},"ouă→oauă","approx",["spinu09","spinu18"]),
);

/* ================= BUKOVINA ================= */
add(
R("bc_f","Câmpulung și insulele vechi: fi → hi (fierbe→hierbe)","Câmpulung and old islands: fi → hi (fierbe→hierbe)","f(?=i)","h","fierbe→hierbe","sourced","turc77"),
R("bc_v","Câmpulung și insulele vechi: vi → ĥi, o fricativă muiată sonoră (vițel→ĥițel)","Câmpulung and old islands: vi → ĥi, a voiced soft fricative (vițel→ĥițel)","v(?=i)","ĥ","vițel→ĥițel","sourced","turc77"),
R("bc_p","Câmpulung: păstrează grupul vechi pchi (piele→pchiele)","Câmpulung: keeps the old group pchi (piele→pchiele)","p(?=i)","pch","piele→pchiele","sourced","turc77"),
R("bc_b","Câmpulung: bi → bghi (bine→bghine)","Câmpulung: bi → bghi (bine→bghine)","b(?=i)","bgh","bine→bghine","sourced","turc77"),
R("bc_m","Câmpulung: mi → mni (mic→mnic)","Câmpulung: mi → mni (mic→mnic)",String.raw`(?<![\p{L}])m(?=i[\p{L}])`,"mn","mic→mnic","sourced","turc77"),
R("pal_t","t înaintea lui e/i → tʲ, dentală ușor muiată (frate→fratʲe)","t before e/i → tʲ, a lightly softened dental (frate→fratʲe)","t(?=[ei])","tʲ","frate→fratʲe","sourced",["turc77"]),
R("pal_d","d înaintea lui e/i → dʲ (bade→badʲe)","d before e/i → dʲ (bade→badʲe)","d(?=[ei])","dʲ","bade→badʲe","sourced",["turc77"]),
L("rd_lex","Rădăuțean: după→dipi, viespe→zespe","Rădăuți area: după→dipi, viespe→zespe","după|viespe",{"după":"dipi",viespe:"zespe"},"după→dipi","sourced","turc77"),
R("rd_f","Rădăuțean: f → ș înaintea lui i (fin→șin)","Rădăuți area: f → ș before i (fin→șin)","f(?=i)","ș","fin→șin","sourced","turc77"),
R("rd_v","Rădăuțean: v → j înaintea lui i (vin→jin); excepție: viespe→zespe","Rădăuți area: v → j before i (vin→jin); exception: viespe→zespe","v(?=i)","j","vin→jin","sourced","turc77"),
R("se_ch","chi/che → ci/ce (palatala africatizată: ochi→oci, chiar→ciar)","chi/che → ci/ce (affricated palatal: ochi→oci, chiar→ciar)","ch(?=[ei])","c","ochi→oci","sourced","turc77"),
R("se_gh","ghi/ghe → gi/ge (ghiață→geață)","ghi/ghe → gi/ge (ghiață→geață)","gh(?=[ei])","g","ghiață→geață","sourced","turc77"),
R("se_t","t înaintea lui e/i → c (dentala muiată se africatizează: frunte→frunce)","t before e/i → c (softened dental becomes an affricate: frunte→frunce)","t(?=[ei])","c","frunte→frunce","sourced","turc77"),
R("se_d","d înaintea lui e/i → g (dinte→gince)","d before e/i → g (dinte→gince)","d(?=[ei])","g","dinte→gince","sourced","turc77"),
L("dn_a","Doar Coșna (Dorna): a dinaintea accentului → ă (pahar→păhar, capac→căpac, tabac→tăbac)","Coșna only (Dorna): a before the stress → ă (pahar→păhar, capac→căpac, tabac→tăbac)","pahar|capac|tabac",{pahar:"păhar",capac:"căpac",tabac:"tăbac"},"pahar→păhar","sourced","turc77"),
);

/* ================= CRIȘANA / MARAMUREȘ / TRANSYLVANIA ================= */
add(
L("cr_lex","câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, tămâiat→tămîiet","câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, tămâiat→tămîiet","c[âî]ine|m[âî]ine|p[âî]ine|băiat|tăm[âî]iat",
 {"câine":"cîńe","cîine":"cîńe","mâine":"mîńe","mîine":"mîńe","pâine":"pîńe","pîine":"pîńe","băiat":"băiet","tămâiat":"tămîiet","tămîiat":"tămîiet"},"câine→cîńe","sourced","encri"),
R("cr_sl","sl→skl (slab→sklab, slănină→sklănină)","sl→skl (slab→sklab, slănină→sklănină)","sl","skl","slab→sklab","sourced","encri"),
R("cr_sea","După s, z, ț: ea→a (seară→sară, zeamă→zamă)","After s, z, ț: ea→a (seară→sară, zeamă→zamă)","([szț])ea","$1a","seară→sară","sourced","encri"),
R("cr_se","După s, z, ț: e→ă","After s, z, ț: e→ă","([szț])e","$1ă","semn→sămn","sourced","encri"),
R("cr_si","După s, z, ț: i→î (singur→sîngur, țin→țîn)","After s, z, ț: i→î (singur→sîngur, țin→țîn)","([szț])i","$1î","singur→sîngur","sourced","encri"),
R("cr_o","o- la început de cuvânt → wă- (oi→wăi, orb→wărb). Sursa: doar când e accentuat; aici: cuvinte de ≤2 silabe","word-initial o → wă- (oi→wăi, orb→wărb). Source: stressed only; here: words of ≤2 syllables",`${B0}o(?=(?:[^${V}]+|i)(?:[${V}]+[^${V}]*)?${B1})`,"wă","orb→wărb","approx","encri"),
R("cr_oa","oa→o (poate→pote, coajă→cojă)","oa→o (poate→pote, coajă→cojă)","oa","o","poate→pote","sourced","encri"),
R("mar_labea","După labială: ea→a (meargă→margă)","After a labial: ea→a (meargă→margă)","([pbmfv])ea","$1a","meargă→margă","sourced",["encri","enmar"]),
R("mar_labe","După labială de la începutul cuvântului: e→ă (merg→mărg); doar dacă nu mai urmează alt e","After a word-initial labial: e→ă (merg→mărg); only if no later e follows",String.raw`(?<![\p{L}])([pbmfv])e(?![^aeiouăâîy]+e)(?=[${C}])`,"$1ă","merg→mărg","approx",["encri","enmar"]),
R("cr_g","ge/gi → je/ji (sânge→sînje, fuge→fuje); ce/ci rămân africate","ge/gi → je/ji (sânge→sînje, fuge→fuje); ce/ci stay affricates","g(?=[ei])","j","fuge→fuje","sourced","encri"),
R("cr_p","p înaintea lui i → pt (piele→ptiele)","p before i → pt (piele→ptiele)","p(?=i)","pt","piele→ptiele","sourced","encri"),
R("cr_b","b înaintea lui i → bd (bine→bdine)","b before i → bd (bine→bdine)","b(?=i)","bd","bine→bdine","sourced","encri"),
R("cr_m","m înaintea lui i → mn (mic→mnic)","m before i → mn (mic→mnic)",String.raw`(?<![\p{L}])m(?=i[\p{L}])`,"mn","mic→mnic","sourced","encri"),
R("cr_f","f înaintea lui i → h (variantă: ș), mai des în nord (să fie→să hie)","f before i → h (variant: ș), commoner in the north (să fie→să hie)","f(?=i)","h","fie→hie","sourced","encri"),
R("cr_v","v înaintea lui i → d (variantă ɦʲ); neregulat (vițel→dițel)","v before i → d (variant ɦʲ); irregular (vițel→dițel)","v(?=i)","d","vițel→dițel","sourced","encri"),
R("cr_t","t înaintea lui e/i → tʲ (frate→fratʲe)","t before e/i → tʲ (frate→fratʲe)","t(?=[ei])","tʲ","frate→fratʲe","sourced","encri"),
R("cr_d","d înaintea lui e/i → dʲ (bade→badʲe)","d before e/i → dʲ (bade→badʲe)","d(?=[ei])","dʲ","bade→badʲe","sourced","encri"),
R("cr_n","n înaintea lui e/i → ń (mine→mińe)","n before e/i → ń (mine→mińe)","n(?=[ei])","ń","mine→mińe","sourced","encri"),
L("cr_moti","Țara Moților: n între vocale → r în cuvinte vechi: oameni→wamiri, lumină→lumniră","Țara Moților: intervocalic n → r in old words: oameni→wamiri, lumină→lumniră","oameni|lumină",{oameni:"wamiri","lumină":"lumniră"},"oameni→wamiri","sourced","encri",{note:{ro:"Sursa dă doar aceste două cuvinte.",en:"The source gives only these two words."}}),
R("cr_oas","Țara Oașului: l înaintea unei consoane se velarizează, ca un l „gros” sau w (alb→ałb)","Țara Oașului: l before a consonant is velarized, a “dark” l or w (alb→ałb)",`l(?=[${C}])`,"ł","alb→ałb","sourced",["encri","uritescu"]),
L("mar_lex","câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, zi→dzî, zic→dzîc, jos→gios, joc→gioc, de→di, pe→pă","câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, zi→dzî, zic→dzîc, jos→gios, joc→gioc, de→di, pe→pă",
 "c[âî]ine|m[âî]ine|p[âî]ine|băiat|muiat|zi|zic|jos|joc|de|pe",
 {"câine":"cîńe","cîine":"cîńe","mâine":"mîńe","mîine":"mîńe","pâine":"pîńe","pîine":"pîńe","băiat":"băiet",muiat:"muiet",zi:"dzî",zic:"dzîc",jos:"gios",joc:"gioc",de:"di",pe:"pă"},"zic→dzîc","sourced","enmar"),
R("mar_f","f înaintea lui i → s (să fie→să sie; Weigand: sier = fier)","f before i → s (să fie→să sie; Weigand: sier = fier)","f(?=i)","s","fie→sie","sourced",["enmar","felecan"]),
R("mar_v","v înaintea lui i → z (vierme→zierme; Weigand: zin = vin)","v before i → z (vierme→zierme; Weigand: zin = vin)","v(?=i)","z","vierme→zierme","sourced",["enmar","felecan"]),
R("mar_p","p înaintea lui i → pt (piele→ptiele)","p before i → pt (piele→ptiele)","p(?=i)","pt","piele→ptiele","sourced","enmar"),
R("mar_b","b înaintea lui i → bd (bine→bdine)","b before i → bd (bine→bdine)","b(?=i)","bd","bine→bdine","sourced","enmar"),
R("mar_m","m înaintea lui i → mn (mic→mnic)","m before i → mn (mic→mnic)",String.raw`(?<![\p{L}])m(?=i[\p{L}])`,"mn","mic→mnic","sourced","enmar"),
R("mar_sea","După s, z, ș, j, ț: ea→a (seară→sară)","After s, z, ș, j, ț: ea→a (seară→sară)",`(${SIBR})ea`,"$1a","seară→sară","sourced","enmar"),
R("mar_se","După s, z, ș, j, ț: e→ă","After s, z, ș, j, ț: e→ă",`(${SIBR})e`,"$1ă","semn→sămn","sourced","enmar"),
R("mar_si","După s, z, ș, j, ț: i→î (singur→sîngur, țin→țîn)","After s, z, ș, j, ț: i→î (singur→sîngur, țin→țîn)",`(${SIBR})i`,"$1î","singur→sîngur","sourced","enmar"),
R("mar_oa","oa→o (ușoară→ușoră, noapte→nopte)","oa→o (ușoară→ușoră, noapte→nopte)","oa","o","noapte→nopte","sourced","enmar"),
R("mar_eafin","-ea final → -é (avea→avé, mea→mé, vrea→vré)","final -ea → -é (avea→avé, mea→mé, vrea→vré)",String.raw`(?<=\p{L})ea(?![\p{L}])`,"é","avea→avé","approx","enmar",{note:{ro:"Sursa spune „accentuat”.",en:"The source says “stressed”."}}),
R("mar_n","n înaintea lui e/i → ń (vine→vińe)","n before e/i → ń (vine→vińe)","n(?=[ei])","ń","vine→vińe","sourced","enmar"),
R("mar_l","l înaintea lui e/i → ĺ (lemne→ĺemńe)","l before e/i → ĺ (lemne→ĺemńe)","l(?=[ei])","ĺ","lemne→ĺemńe","sourced","enmar"),
L("ar_lex","câine/mâine/pâine→cîne/mîne/pîne (fără -i-)","câine/mâine/pâine→cîne/mîne/pîne (no glide)","c[âî]ine|m[âî]ine|p[âî]ine",{"câine":"cîne","cîine":"cîne","mâine":"mîne","mîine":"mîne","pâine":"pîne","pîine":"pîne"},"pâine→pîne","sourced","entra"),
R("ar_dorm","a durmi cu u în tot paradigma (dorm→durm, adormi→adurmi)","a durmi with u throughout (dorm→durm, adormi→adurmi)",`${B0}(a?)dorm(?=(?:i|e|im|iți|ea|ind|ire|it)?${B1})`,"$1durm","dorm→durm","sourced","entra"),
R("ar_sea","După s, z, ț: ea→a (seară→sară)","After s, z, ț: ea→a (seară→sară)","([szț])ea","$1a","seară→sară","sourced","entra"),
R("ar_se","După s, z, ț: e→ă","After s, z, ț: e→ă","([szț])e","$1ă","semn→sămn","sourced","entra"),
R("ar_si","După s, z, ț: i→î","After s, z, ț: i→î","([szț])i","$1î","singur→sîngur","sourced","entra"),
R("ar_oa","oa→o (coadă→codă, groapă→gropă, aproape→aprope)","oa→o (coadă→codă, groapă→gropă, aproape→aprope)","oa","o","coadă→codă","sourced",["entra","netra"]),
R("ar_p","NE Transilvania: p → pt înaintea lui i (un stadiu; există și altele)","NE Transylvania: p → pt before i (one stage; others exist)","p(?=i)","pt","piept→ptiept","sourced","netra"),
R("ar_b","NE Transilvania: b → bd (bine→bdine)","NE Transylvania: b → bd (bine→bdine)","b(?=i)","bd","bine→bdine","sourced","netra"),
R("ar_m","NE Transilvania: m → mń (nimic→nimńic)","NE Transylvania: m → mń (nimic→nimńic)",String.raw`m(?=i[\p{L}])`,"mń","nimic→nimńic","sourced","netra"),
R("ar_f","NE Transilvania: f → ș înaintea lui i (fin→șin, fierbinte→șierbinte)","NE Transylvania: f → ș before i (fin→șin, fierbinte→șierbinte)","f(?=i)","ș","fin→șin","sourced","netra"),
R("ar_v","NE Transilvania: v → z înaintea lui i (vin→zin)","NE Transylvania: v → z before i (vin→zin)","v(?=i)","z","vin→zin","sourced","netra"),
);
export const RULES=Object.fromEntries(list.map(r=>[r.id,r]));
