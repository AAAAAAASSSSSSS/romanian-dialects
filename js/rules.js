// RULES: every sound change or word list, exactly as stated in a source (see js/sources.js).
// "L" rules are word lists (only the words the source names). Other rules are patterns the source states generally.
// B0/B1 are Unicode-aware word boundaries (JavaScript's \b does not know ă â î ș ț).
const B0=String.raw`(?<!\p{L})`, B1=String.raw`(?!\p{L})`;
const C="bcdfghjklmnprstvzșț", V="aeiouăâî", FV="[ei]";
const SIB="(?:st|[szșjț])", S5="[szșjț]";
const R=(id,ro,en,from,to,ex,src,note)=>({id,ro,en,from,to,ex,src:[].concat(src),...(note?{note}:{})});
const L=(id,ro,en,words,map,ex,src,note)=>({id,ro,en,from:`${B0}(?:${words})${B1}`,map,protect:true,ex,src:[].concat(src),...(note?{note}:{})});
// "vin": the verb (eu vin, ei vin, vine, vii, vină) and Friday (vineri) are NOT softened; "vin" (wine) is, when a noun cue is next to it.
const VCUE="(?:un|niște|de|cu|fără|din|în|la|pe|al|ai|ale|bun|alb|roșu|vechi|nou|dulce|acru|sec|bea|beau|bem|beți|bei|beam|beai|bău|cumpăr|cumpără|cumpărăm|cumpărat|toarnă|turnat|vinde|vând)";
const VAFTER="(?:roșu|alb|roz|vechi|bun|dulce|acru|sec)";
const VPAT=`(?:v(?=i)(?!in(?:e|eri|erea|ă)?${B1}|ii${B1})|(?<=${B0}${VCUE}\\s)v(?=in${B1})|v(?=in\\s${VAFTER}${B1}))`;
const N=(ro,en)=>({ro,en});
const list=[];const add=(...r)=>list.push(...r);

/* ===== Muntenia / Oltenia ===== */
add(
L("wl_h","h- de la început slab sau căzut, și h- pus în plus (hipercorectare): haină→aină, hoț→woț, aripă→haripă, alea→halea, albii→halbii","word-initial h weak or lost, and a wrong h added (hypercorrection): haină→aină, hoț→woț, aripă→haripă, alea→halea, albii→halbii",
 "haină|hoț|aripă|alea|albii",{"haină":"aină","hoț":"woț","aripă":"haripă",alea:"halea",albii:"halbii"},"aripă→haripă, alea→halea","enwal",N("Sursa spune „uneori”. Doar cuvintele din sursă (nu și aripi, haine etc.).","The source says “sometimes”. Only the source's words (not aripi, haine, etc.).")),
L("wl_prep","Muntenia: după d, p, în prepoziții și prefixe: e→ă, i→î. Aplicat la toate prepozițiile care încep cu de-, di-, pe- (de, pe, peste, pentru, din, dintre, dintr-, dinspre, dinaintea, dinapoia, dinafara) și la exemplele cu prefix (decât, destupat, despart, deschid)","Muntenia: after d, p, in prepositions and prefixes: e→ă, i→î. Applied to every preposition starting with de-, di-, pe- (de, pe, peste, pentru, din, dintre, dintr-, dinspre, dinaintea, dinapoia, dinafara) and to the source's prefix examples (decât, destupat, despart, deschid)",
 "de|pe|peste|pentru|din|dintre|dintr|dinspre|dinaintea|dinapoia|dinafara|decât|destupat|despart|deschid",
 {de:"dă",pe:"pă",peste:"păste",pentru:"păntru",din:"dîn",dintre:"dîntre",dintr:"dîntr",dinspre:"dînspre",dinaintea:"dînaintea",dinapoia:"dînapoia",dinafara:"dînafara","decât":"dăcât",destupat:"dăstupat",despart:"dăspart",deschid:"dăschid"},
 "de→dă, pe→pă, pentru→păntru","enwal",N("Sursa dă regula pentru „prepoziții și prefixe”, cu exemplele de, decât, destupat, despart, deschid, dintre, pe. Prefixele din alte cuvinte nu sunt numite, deci nu sunt incluse.","The source states the rule for “prepositions and prefixes”, with the examples de, decât, destupat, despart, deschid, dintre, pe. Prefixes in other words are not named, so they are not included.")),
R("wl_p","NE și E Muntenia: p înaintea unei vocale din față e „aspirat și muiat” (piele→pʰʲiele)","NE and E Muntenia: p before a front vowel is aspirated and softened (piele→pʰʲiele)",`p(?=i)`,"pʰʲ","piele→pʰʲiele","enwal"),
R("wl_b","NE și E Muntenia: bine→bʰʲine","NE and E Muntenia: bine→bʰʲine",`b(?=i)`,"bʰʲ","bine→bʰʲine","enwal"),
R("wl_f","NE și E Muntenia: fier→fʰʲier","NE and E Muntenia: fier→fʰʲier",`f(?=i)`,"fʰʲ","fier→fʰʲier","enwal"),
R("wl_v","NE și E Muntenia: vin→vʰʲin","NE and E Muntenia: vin→vʰʲin",VPAT,"vʰʲ","un vin→un vʰʲin","enwal"),
R("wl_m","NE și E Muntenia: miere→mʲiere","NE and E Muntenia: miere→mʲiere",`m(?=i)`,"mʲ","miere→mʲiere","enwal"),
R("ol_sea","Oltenia: după s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapă→țapă)","Oltenia: after s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapă→țapă)",`(${S5})ea`,"$1a","seară→sară","enwal"),
R("ol_se","Oltenia: după s, z, ș, j, ț: e→ă (secure→săcure, zer→zăr, țepușă→țăpușă)","Oltenia: after s, z, ș, j, ț: e→ă (secure→săcure, zer→zăr, țepușă→țăpușă)",`(${S5})e`,"$1ă","secure→săcure","enwal"),
R("ol_si","Oltenia: după s, z, ș, j, ț: i→î (singur→sîngur, zic→zîc, jir→jîr, țin→țîn)","Oltenia: after s, z, ș, j, ț: i→î (singur→sîngur, zic→zîc, jir→jîr, țin→țîn)",`(${S5})i`,"$1î","singur→sîngur","enwal"),
R("ol_j","Oltenia: se adaugă j înaintea unui k muiat (ochi→ojchi, rachiu→rajchiu, strachină→strajchină)","Oltenia: a j is added before a softened k (ochi→ojchi, rachiu→rajchiu, strachină→strajchină)",`([${V}])ch(?=${FV})`,"$1jch","ochi→ojchi","enwal"),
R("ol_f1","Sudul Olteniei: f înaintea unei vocale din față → fkʲ (fier→fkʲer)","Southern Oltenia: f before a front vowel → fkʲ (fier→fkʲer)","fi(?=e)","fkʲ","fier→fkʲer","enwal"),
R("ol_f2","Sudul Olteniei: fi→fkʲi","Southern Oltenia: fi→fkʲi",`f(?=i)`,"fkʲ","fin→fkʲin","enwal"),
R("ol_v1","Sudul Olteniei: v înaintea unei vocale din față → vgʲ (vierme→vgʲerme)","Southern Oltenia: v before a front vowel → vgʲ (vierme→vgʲerme)","vi(?=e)","vgʲ","vierme→vgʲerme","enwal"),
R("ol_v2","Sudul Olteniei: vi→vgʲi","Southern Oltenia: vi→vgʲi",VPAT,"vgʲ","un vin→un vgʲin","enwal"),
);

/* ===== Moldavian core (Wikipedia “Moldavian dialect”, Spînu 2009/2018, Guia 2020) ===== */
add(
L("m_old","Forme vechi: fecior→ficior, femeie→fimeie (e neaccentuat → i)","Old forms: fecior→ficior, femeie→fimeie (unstressed e → i)","fecior|femeie",{fecior:"ficior",femeie:"fimeie"},"fecior→ficior",["spinu09","spinu18"]),
L("m_etym","î etimologic păstrat: umblu→îmblu, umblă→îmblă, umple→împle, umplu→împlu, umflu→îmflu, umflă→îmflă, intru→întru; forme vechi nor→nour, drept→dirept","etymological î kept: umblu→îmblu, umblă→îmblă, umple→împle, umplu→împlu, umflu→îmflu, umflă→îmflă, intru→întru; old forms nor→nour, drept→dirept",
 "umblu|umblă|umple|umplu|umflu|umflă|intru|nor|drept",{umblu:"îmblu","umblă":"îmblă",umple:"împle",umplu:"împlu",umflu:"îmflu","umflă":"îmflă",intru:"întru",nor:"nour",drept:"dirept"},"umblu→îmblu","spinu09"),
L("m_soft","e→ă / i→î după r, m în câteva cuvinte: repede→răpidi, reci→răși, merg→mărg; ridică→rîdică","e→ă / i→î after r, m in a few words: repede→răpidi, reci→răși, merg→mărg; ridică→rîdică","repede|reci|merg|ridică",{repede:"răpidi",reci:"răși",merg:"mărg","ridică":"rîdică"},"merg→mărg",["spinu09","spinu18","enmol"]),
L("m_lov","după v: e→ă, ea→a în lovesc→lovăsc, să lovească→să lovască","after v: e→ă, ea→a in lovesc→lovăsc, să lovească→să lovască","lovesc|lovește|lovească",{lovesc:"lovăsc","lovește":"lovăște","lovească":"lovască"},"lovesc→lovăsc","enmol",N("Pe aceeași pagină sursa dă și vezi→vjez, deci regula nu e generală; doar cuvintele din sursă.","The same page also gives vezi→vjez, so the rule is not general; only the source's words.")),
L("m_zic","dz păstrat: zic→dzîc (nu în Republica Moldova, după Spînu 2018)","dz kept: zic→dzîc (not in the Republic of Moldova, per Spînu 2018)","zic",{zic:"dzîc"},"zic→dzîc","enmol"),
L("m_hv","Nordul Moldovei: v→h în volbură→holbură, vulpe→hulpe, vultan→hultan","Northern Moldavia: v→h in volbură→holbură, vulpe→hulpe, vultan→hultan","volbură|vulpe|vulpi|vultan",{"volbură":"holbură",vulpe:"hulpe",vulpi:"hulpi",vultan:"hultan"},"vulpe→hulpe","enmol"),
L("m_ao_w","Nordul Moldovei: ă înaintea accentului → a: măgar→magar, bătrân→batrîn, tăcut→tacut, pădure→paduri","Northern Moldavia: ă before the stress → a: măgar→magar, bătrân→batrîn, tăcut→tacut, pădure→paduri","măgar|bătrân|tăcut|pădure",{"măgar":"magar","bătrân":"batrîn","tăcut":"tacut","pădure":"paduri"},"măgar→magar","enmol"),
L("m_ao_s","Nord (Republica Moldova): ă→a: bărbat→barbat, măgar→magar, pădure→padure, bătea→batea (la vârstnici)","North (Republic of Moldova): ă→a: bărbat→barbat, măgar→magar, pădure→padure, bătea→batea (older speakers)","bărbat|măgar|pădure|bătea",{"bărbat":"barbat","măgar":"magar","pădure":"padure","bătea":"batea"},"bărbat→barbat","spinu18"),
L("m_toti","toți→tăț (în Moldova din România)","toți→tăț (in Romanian Moldavia)","toți",{"toți":"tăț"},"toți→tăț","spinu18"),
R("m_ea","După s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapăn→țapăn)","After s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapăn→țapăn)",`(${S5})ea`,"$1a","seară→sară",["enmol","spinu18"]),
R("m_e","După s, z, ș, j, ț: e→ă (semn→sămn, șed→șăd, vițel→vițăl)","After s, z, ș, j, ț: e→ă (semn→sămn, șed→șăd, vițel→vițăl)",`(${S5})e`,"$1ă","semn→sămn",["enmol","spinu09","spinu18"]),
R("m_i","După s, z, ș, j, ț: i→î (singur→sîngur, zid→zîd, cuțit→cuțît)","After s, z, ș, j, ț: i→î (singur→sîngur, zid→zîd, cuțit→cuțît)",`(${S5})i`,"$1î","singur→sîngur",["enmol","spinu09"]),
R("m_cea","cea→șa, gea→ja (ceapă→șapă)","cea→șa, gea→ja (ceapă→șapă)","c(e)a","șa","ceapă→șapă","enmol"),
R("m_c","ce/ci → șe/și, africata devine fricativă (cină→șină, cinci→șinș). Vocalele se schimbă înainte (cină, nu șînă)","ce/ci → șe/și, the affricate becomes a fricative (cină→șină, cinci→șinș). Vowels change first (cină, not șînă)",`c(?=${FV})`,"ș","cină→șină",["enmol","spinu18"]),
R("m_g","ge/gi → je/ji (sânge→sânje, ginere→jinere)","ge/gi → je/ji (sânge→sânje, ginere→jinere)",`g(?=${FV})`,"j","sânge→sânje",["enmol","spinu18"]),
R("m_dropi","După s, z, ș, j, ț: -i final (plural, persoana a 2-a) nu se mai aude (părinți→părinț, vezi→vez, cinci→șinș)","After s, z, ș, j, ț: final -i (plural, 2nd person) is no longer heard (părinți→părinț, vezi→vez, cinci→șinș)",String.raw`(?<=\p{L})([szșjț]ʲ?)i(?!\p{L})`,"$1","părinți→părinț",["enmol","spinu09"]),
R("m_pv","p după vocală înaintea lui i se păstrează: copil→copchil, lupi→lupchi","p after a vowel before i is kept: copil→copchil, lupi→lupchi",`(?<=[${V}])p(?=i)`,"pch","copil→copchil","guia20",),
R("m_p","p înaintea unei vocale din față → chi/che (piatră→chiatră, Petre→Chetre, piept→chiept)","p before a front vowel → chi/che (piatră→chiatră, Petre→Chetre, piept→chiept)",`p(?=i)`,"ch","piatră→chiatră",["enmol","guia20"]),
R("m_b","b înaintea unei vocale din față → ghi/ghe (bine→ghine, albină→alghină)","b before a front vowel → ghi/ghe (bine→ghine, albină→alghină)",`b(?=i)`,"gh","bine→ghine",["enmol","guia20"]),
R("m_m","m înaintea unei vocale din față → ni/ne (miel→niel, mire→nire)","m before a front vowel → ni/ne (miel→niel, mire→nire)",`m(?=i)`,"n","miel→niel",["enmol","guia20","spinu18"]),
R("mn_f","Nordul Moldovei (la nord de linia Bacău–Vaslui–Huși): f → ș (fierbe→șierbe)","Northern Moldavia (north of the Bacău–Vaslui–Huși line): f → ș (fierbe→șierbe)",`f(?=i)`,"ș","fierbe→șierbe",["enmol","guia20"]),
R("mn_v","Nordul Moldovei: v → j (vițel→jițăl)","Northern Moldavia: v → j (vițel→jițăl)",VPAT,"j","vițel→jițel",["enmol","guia20"]),
R("ms_f","Sudul Moldovei (la sud de linia Bacău–Vaslui–Huși): f → h (fierbe→hierbi)","Southern Moldavia (south of the Bacău–Vaslui–Huși line): f → h (fierbe→hierbi)",`f(?=i)`,"h","fierbe→hierbe",["enmol","guia20"]),
R("ms_v","Sudul Moldovei: v → ĥ, un h sonor muiat (vițel→ĥițăl)","Southern Moldavia: v → ĥ, a voiced softened h (vițel→ĥițăl)",VPAT,"ĥ","vițel→ĥițel",["enmol","guia20"]),
R("m_ia1","ia→ie la început de cuvânt (iarbă→ierbă)","ia→ie at the start of a word (iarbă→ierbă)",`${B0}ia`,"ie","iarbă→ierbă","spinu09"),
R("m_ia2","ia→ie după vocală (băiat→băiet, încuiat→încuiet)","ia→ie after a vowel (băiat→băiet, încuiat→încuiet)",`(?<=[${V}])ia`,"ie","băiat→băiet",["enmol","spinu09"]),
R("m_eafin","-ea final → -é (avea→avé, spunea→spuné)","final -ea → -é (avea→avé, spunea→spuné)",String.raw`(?<=\p{L})ea(?!\p{L})`,"é","avea→avé","enmol"),
R("m_oa","oa → wa (soare→swari, boală→bwală)","oa → wa (soare→swari, boală→bwală)","oa","wa","boală→bwală","enmol",N("Sursa spune „adesea”.","The source says “often”.")),
R("m_afin","-ă final → -î (mamă→mamî, casă→casî)","final -ă → -î (mamă→mamî, casă→casî)",String.raw`(?<=\p{L})ă(?!\p{L})`,"î","mamă→mamî",["enmol","spinu09"]),
R("m_efin","-e final neaccentuat → -i (lapte→lapti, frate→frați)","unstressed final -e → -i (lapte→lapti, frate→frați)",String.raw`(?<=[${V}][^${V}\s]*[^${V}y\s])e(?!\p{L})`,"i","lapte→lapti",["enmol","spinu09"],N("Programul nu vede accentul; se aplică la orice -e final după consoană, în cuvinte cu mai mult de o silabă (-e final e aproape întotdeauna neaccentuat).","The program cannot see stress; it is applied to every final -e after a consonant in words of more than one syllable (a final -e is almost always unstressed).")),
);

/* ===== Bessarabia ===== */
add(
L("bas_ja","după ș, j: a accentuat → ă: șarpe→șărpi, șapte→șăpti, jale→jăli","after ș, j: stressed a → ă: șarpe→șărpi, șapte→șăpti, jale→jăli","șarpe|șapte|jale",{"șarpe":"șărpi","șapte":"șăpti","jale":"jăli"},"șapte→șăpti","spinu18"),
R("bas_ea","ea→a când în silaba următoare e un a/ă (meargă→margă, seară→sară, zeamă→zamă, țeapăn→țapăn)","ea→a when the next syllable has a/ă (meargă→margă, seară→sară, zeamă→zamă, țeapăn→țapăn)",`ea(?=[${C}]{1,2}[aă])`,"a","meargă→margă",["spinu09","spinu18"]),
L("bas_gio","africata veche păstrată (mai ales la vârstnici): jos→gios, joc→gioc","old affricate kept (mostly older speakers): jos→gios, joc→gioc","jos|joc",{jos:"gios",joc:"gioc"},"jos→gios","spinu18"),
L("bas_u","u etimologic → o: săpun→sapon, fudul→fodul","etymological u → o: săpun→sapon, fudul→fodul","săpun|fudul",{"săpun":"sapon",fudul:"fodul"},"săpun→sapon","spinu09"),
R("bas_f","f înaintea unei vocale din față → ș (fin→șin)","f before a front vowel → ș (fin→șin)",`f(?=i)`,"ș","fin→șin",["spinu18","spinu09"]),
R("bas_v","v înaintea unei vocale din față → j (vierme→jierme)","v before a front vowel → j (vierme→jierme)",VPAT,"j","vierme→jierme",["spinu18"]),
L("bas_old","vorbirea vârstnicilor: fasole→fasuli, cocoș→cucoș","older speakers: fasole→fasuli, cocoș→cucoș","fasole|cocoș",{fasole:"fasuli","cocoș":"cucoș"},"fasole→fasuli","spinu18"),
// north-east
R("ne_cea","NE: cea → șʲa","NE: cea → șʲa","cea","șʲa","ceapă→șʲapă","spinu09"),
R("ne_c","NE: ce/ci → șʲe/șʲi, fricativă muiată (cinci→șʲinșʲ, cruce→crușʲe)","NE: ce/ci → șʲe/șʲi, soft fricative (cinci→șʲinșʲ, cruce→crușʲe)",`c(?=${FV})`,"șʲ","cruce→crușʲe","spinu09"),
R("ne_g","NE: ge/gi → jʲe/jʲi (argint→arjʲint)","NE: ge/gi → jʲe/jʲi (argint→arjʲint)",`g(?=${FV})`,"jʲ","argint→arjʲint","spinu09"),
R("ne_f1","NE: fier→șʲer","NE: fier→șʲer","fi(?=e)","șʲ","fier→șʲer","spinu09"),
R("ne_f2","NE: f înaintea lui i → șʲ (fin→șʲin)","NE: f before i → șʲ (fin→șʲin)",`f(?=i)`,"șʲ","fin→șʲin","spinu09"),
R("ne_v","NE: v înaintea lui i → jʲ (vin→jʲin, vis→jʲis)","NE: v before i → jʲ (vin→jʲin, vis→jʲis)",VPAT,"jʲ","un vin→un jʲin","spinu09"),
R("ne_p1","NE: p înaintea lui ie → c (piept→cept, piele→cele)","NE: p before ie → c (piept→cept, piele→cele)","pi(?=e)","c","piele→cele","spinu09"),
R("ne_p2","NE: p înaintea lui i → ci (lupi→luci)","NE: p before i → ci (lupi→luci)",`p(?=i)`,"c","lupi→luci","spinu09"),
R("ne_b","NE: b înaintea lui i/e → g (bine→gine, albină→algină, bețu→getu)","NE: b before i/e → g (bine→gine, albină→algină, bețu→getu)",`b(?=i)`,"g","bine→gine","spinu09"),
R("ne_m","NE: m înaintea lui i → ń (mic→ńic, mire→ńire)","NE: m before i → ń (mic→ńic, mire→ńire)","m(?=i)","ń","mic→ńic","spinu09"),
R("ne_ch","NE: chi/che → ci/ce (ochelari→ocelari, chem→cem, urechi→ureci)","NE: chi/che → ci/ce (ochelari→ocelari, chem→cem, urechi→ureci)",`ch(?=${FV})`,"c","ochelari→ocelari","spinu09"),
R("ne_gh","NE: ghi/ghe → gi/ge (ghindă→gindă, unghi→ungi, înghit→îngit)","NE: ghi/ghe → gi/ge (ghindă→gindă, unghi→ungi, înghit→îngit)",`gh(?=${FV})`,"g","ghindă→gindă","spinu09"),
L("ne_lex","NE: copil→copcil, cuptor→cupcior; ouă→oauî, rouă→roauî, nouă→noauî, plouă→ploauă; guler→guliar, nepot→niapot, nevastă→niavastî; necaz→nacaz; măsea→măsa, curea→cură, rea→ră; să→sî, să fie→sî șʲibî",
 "NE: copil→copcil, cuptor→cupcior; ouă→oauî, rouă→roauî, nouă→noauî, plouă→ploauă; guler→guliar, nepot→niapot, nevastă→niavastî; necaz→nacaz; măsea→măsa, curea→cură, rea→ră; să→sî, să fie→sî șʲibî",
 "copil|cuptor|ouă|rouă|nouă|plouă|guler|nepot|nevastă|necaz|măsea|curea|rea|să fie|să",
 {copil:"copcil",cuptor:"cupcior","ouă":"oauî","rouă":"roauî","nouă":"noauî","plouă":"ploauă",guler:"guliar",nepot:"niapot","nevastă":"niavastî",necaz:"nacaz","măsea":"măsa",curea:"cură",rea:"ră","să fie":"sî șʲibî","să":"sî"},"ouă→oauî","spinu09",N("Transcrierea din PDF e greu de citit; copcil, cupcior și oauî sunt citiri apropiate ale simbolurilor.","The PDF transcription is hard to read; copcil, cupcior and oauî are close readings of the symbols.")),
L("nv_lex","NV: ouă→oauî, rouă→roauî, nouă→noauî, plouă→ploauă","NW: ouă→oauî, rouă→roauî, nouă→noauî, plouă→ploauă","ouă|rouă|nouă|plouă",{"ouă":"oauî","rouă":"roauî","nouă":"noauî","plouă":"ploauă"},"ouă→oauî",["spinu09","spinu18"]),
);

/* ===== Neamț (Creangă; Căprioară 2002) ===== */
add(
L("nt_lex","Creangă: diavole→ghiavole, dibăcia→ghibăcia, să dibăcești→să ghibăcești; viforniță→givorniță; mă sperii→mă spariu; bălan→balan, jăratic→jaratic, măcar→macar","Creangă: diavole→ghiavole, dibăcia→ghibăcia, să dibăcești→să ghibăcești; viforniță→givorniță; mă sperii→mă spariu; bălan→balan, jăratic→jaratic, măcar→macar",
 "diavole|diavoli|dibăcia|dibăcești|viforniță|sperii|bălan|jăratic|măcar|a ghili",{diavole:"ghiavole",diavoli:"ghiavoli","dibăcia":"ghibăcia","dibăcești":"ghibăcești","viforniță":"givorniță",sperii:"spariu","bălan":"balan","jăratic":"jaratic","măcar":"macar"},"dibăcia→ghibăcia","capr02"),
R("nt_depal","ie→e după labială (fiert→fert, miercuri→mercuri, pietre→petre, piept→pept, pierd→perd)","ie→e after a labial (fiert→fert, miercuri→mercuri, pietre→petre, piept→pept, pierd→perd)",`([pbfvm])ie(?=[${C}])`,"$1e","fiert→fert","capr02"),
R("nt_p","p înaintea lui i → chi (pilos→chilos, pilit→chilit, piuă→chiuă)","p before i → chi (pilos→chilos, pilit→chilit, piuă→chiuă)","p(?=i)","ch","piuă→chiuă","capr02"),
R("nt_f","f înaintea lui i → hi (a fi→a hi)","f before i → hi (a fi→a hi)","f(?=i)","h","fi→hi","capr02"),
R("nt_ia","-iat → -iet (înfuriat→înfuriet, mâniat→mâniet, băiat→băiet)","-iat → -iet (înfuriat→înfuriet, mâniat→mâniet, băiat→băiet)",`iat${B1}`,"iet","mâniat→mâniet","capr02"),
R("nt_ea","-ea final → -é (vedea→vedé, vrea→vré)","final -ea → -é (vedea→vedé, vrea→vré)",String.raw`(?<=\p{L})ea(?!\p{L})`,"é","vedea→vedé","capr02"),
R("nt_sea","ea→a după consoană dură (seară→sară, bușească→bușască)","ea→a after a hard consonant (seară→sară, bușească→bușască)",`(${S5})ea`,"$1a","seară→sară","capr02"),
);

/* ===== Bukovina (Turculeț 1977–78, Guia 2015/2020) ===== */
add(
R("bk_f","f înaintea unei vocale din față → h (fierbe→hierbe)","f before a front vowel → h (fierbe→hierbe)",`f(?=i)`,"h","fierbe→hierbe","turc77"),
R("bk_v","v înaintea unei vocale din față → ĥ, fricativă palatală sonoră (vițel→ĥițel)","v before a front vowel → ĥ, a voiced palatal fricative (vițel→ĥițel)",VPAT,"ĥ","vițel→ĥițel","turc77"),
R("bk_p","labiala se păstrează în grupul vechi: p→pchi (piele→pchiele)","the labial is kept in the old group: p→pchi (piele→pchiele)",`p(?=i)`,"pch","piele→pchiele","turc77"),
R("bk_b","b→bghi (bine→bghine)","b→bghi (bine→bghine)",`b(?=i)`,"bgh","bine→bghine","turc77"),
R("bk_m","m→mni (mic→mnic)","m→mni (mic→mnic)",`m(?=i)`,"mn","mic→mnic","turc77"),
R("bk_p2","labiala se pierde (recent): p→chi (piele→chiele)","the labial is lost (recent): p→chi (piele→chiele)",`p(?=i)`,"ch","piele→chiele","turc77"),
R("bk_b2","b→ghi (bine→ghine)","b→ghi (bine→ghine)",`b(?=i)`,"gh","bine→ghine","turc77"),
R("bk_m2","m→ni (mic→nic)","m→ni (mic→nic)",`m(?=i)`,"n","mic→nic","turc77"),
R("bk_p3","africatizat: p→pci (piele→pciele)","africatized: p→pci (piele→pciele)",`p(?=i)`,"pc","piele→pciele","guia20"),
R("bk_b3","africatizat: b→bgi (bine→bgine)","africatized: b→bgi (bine→bgine)",`b(?=i)`,"bg","bine→bgine","guia20"),
R("bk_m3","m→mni (mic→mnic)","m→mni (mic→mnic)",`m(?=i)`,"mn","mic→mnic","guia20"),
R("bk_ch","chi/che → ci/ce: k' africatizat (ochi→oci, chiar→ciar)","chi/che → ci/ce: k' africatized (ochi→oci, chiar→ciar)",`ch(?=${FV})`,"c","ochi→oci","turc77"),
R("bk_gh","ghi/ghe → gi/ge (ghiață→geață)","ghi/ghe → gi/ge (ghiață→geață)",`gh(?=${FV})`,"g","ghiață→giață","turc77"),
R("bk_t","t înaintea lui e/i → c, dentala muiată se africatizează (frunte→frunce)","t before e/i → c, the softened dental is africatized (frunte→frunce)",`t(?=${FV})`,"c","frunte→frunce","turc77"),
R("bk_d","d înaintea lui e/i → g (dinte→gince)","d before e/i → g (dinte→gince)",`d(?=${FV})`,"g","dinte→ginte","turc77"),
R("bk_tl","t înaintea lui e/i → tʲ, dentală ușor muiată (frate→fratʲe)","t before e/i → tʲ, a lightly softened dental (frate→fratʲe)",`t(?=${FV})`,"tʲ","frate→fratʲe","turc77"),
R("bk_dl","d înaintea lui e/i → dʲ (dinte→dʲinte)","d before e/i → dʲ (dinte→dʲinte)",`d(?=${FV})`,"dʲ","dinte→dʲinte","turc77"),
R("bk_c","ce/ci → șe/și (fricativizare; Rădăuț, sud-est, Valea Putnei)","ce/ci → șe/și (fricativization; Rădăuți, south-east, Valea Putnei)",`c(?=${FV})`,"ș","cinci→șinși","turc77"),
R("bk_g","ge/gi → je/ji","ge/gi → je/ji",`g(?=${FV})`,"j","ginere→jinere","turc77"),
R("bk_f2","f înaintea unei vocale din față → ș (fin→șin)","f before a front vowel → ș (fin→șin)",`f(?=i)`,"ș","fin→șin","turc77"),
R("bk_v2","v înaintea unei vocale din față → j (vin→jin)","v before a front vowel → j (vin→jin)",VPAT,"j","un vin→un jin","turc77"),
R("bk_vel","e→ă după s, z, ț, ș, j, r când e e în poziție „moale” (urmat de o silabă cu vocală palatală) sau final (reci→răci, șed→șăd)","e→ă after s, z, ț, ș, j, r when e is in a “soft” position (followed by a syllable with a palatal vowel) or final (reci→răci, șed→șăd)",`([szțșjr])e(?=[${C}]*(?:[ei]|(?!\\p{L})))`,"$1ă","șed→șăd","turc77",N("Sursa spune că velarizarea e „curentă” în Dorna și în sud-estul „africatizant”.","The source says velarization is “current” in Dorna and the “africatizing” south-east.")),
R("bk_afin","-ă final → -î (mamă→mamî)","final -ă → -î (mamă→mamî)",String.raw`(?<=\p{L})ă(?!\p{L})`,"î","mamă→mamî","turc77"),
R("bk_efin","-e final → -i (lapte→lapti)","final -e → -i (lapte→lapti)",String.raw`(?<=[${V}][^${V}\s]*[^${V}y\s])e(?!\p{L})`,"i","lapte→lapti","turc77",N("Programul nu vede accentul (vezi nota de la Moldova).","The program cannot see stress (see the note under Moldavia).")),
L("rd_lex","Rădăuț: după→dipi, viespe→zespe, acolo→aclo","Rădăuți area: după→dipi, viespe→zespe, acolo→aclo","după|viespe|acolo",{"după":"dipi",viespe:"zespe",acolo:"aclo"},"după→dipi","turc77"),
L("cs_lex","Coșna: a înaintea accentului → ă (pahar→păhar, capac→căpac, tabac→tăbac); ps→pț (coapsă→coapță)","Coșna: a before the stress → ă (pahar→păhar, capac→căpac, tabac→tăbac); ps→pț (coapsă→coapță)","pahar|capac|tabac|coapsă",{pahar:"păhar",capac:"căpac",tabac:"tăbac","coapsă":"coapță"},"pahar→păhar","turc77"),
);

/* ===== Banat ===== */
add(
L("b_lex","dz păstrat: zece→dzășʲe, auzi→audz, frunză→frundză, brânză→brândză, buză→budză, grumaz→grumadz, mânz→mândz; zer→dzăr, zid→dzîd","dz kept: zece→dzășʲe, auzi→audz, frunză→frundză, brânză→brândză, buză→budză, grumaz→grumadz, mânz→mândz; zer→dzăr, zid→dzîd",
 "zece|auzi|frunză|brânză|buză|grumaz|mânz|zer|zid",{zece:"dzășʲe",auzi:"audz","frunză":"frundză","brânză":"brândză","buză":"budză",grumaz:"grumadz","mânz":"mândz",zer:"dzăr",zid:"dzîd"},"zece→dzășʲe","enban"),
L("b_n","n muiat păstrat: cui→cuń, călcâi→călcîń, căpătâi→căpătîń, rămâi→rămîń, claie→clańe, sicriu→săcriń; câine→cîńe, mâine→mîńe, pâine→pîńe","etymological n kept soft: cui→cuń, călcâi→călcîń, căpătâi→căpătîń, rămâi→rămîń, claie→clańe, sicriu→săcriń; câine→cîńe, mâine→mîńe, pâine→pîńe",
 "cui|călcâi|căpătâi|rămâi|claie|sicriu|câine|mâine|pâine",{cui:"cuń","călcâi":"călcîń","căpătâi":"căpătîń","rămâi":"rămîń",claie:"clańe",sicriu:"săcriń","câine":"cîńe","mâine":"mîńe","pâine":"pîńe"},"câine→cîńe","enban"),
L("b_je","e accentuat → jé (e deschis) când urmează alt e în silaba următoare, exact cuvintele din sursă: muiere→mujéŕe, fete→fjéće, poveste→povjéstă, verde→vjérđe, pește→pjéșće","stressed e → jé (open e) when another e follows in the next syllable, exactly the source's words: muiere→mujéŕe, fete→fjéće, poveste→povjéstă, verde→vjérđe, pește→pjéșće","muiere|fete|poveste|verde|pește",{muiere:"mujéŕe",fete:"fjéće",poveste:"povjéstă",verde:"vjérđe","pește":"pjéșće"},"fete→fjéće","enban",N("Accentul nu se vede, așa că regula e dată doar pentru cuvintele-exemplu (ginere, cu accent pe prima silabă, nu intră aici). Formele sunt cele din sursă: poveste are grupul st, deci e→ă și t nu se mai muiază; la pește grupul e șt, deci t se muiază.","Stress is not visible, so the rule is given only for the example words (ginere, stressed on the first syllable, is not covered). The forms are the source's: poveste has the group st, so e→ă and t does not soften; in pește the group is șt, so t softens.")),
R("b_ie","după labială, ie→e (fier→fer, piele→pele, piept→pept, miercuri→mercuri, vierme→verme)","after a labial, ie→e (fier→fer, piele→pele, piept→pept, miercuri→mercuri, vierme→verme)",`([pbfvm])ie(?=[${C}])`,"$1e","fier→fer","enban"),
R("b_ea","după s, z, ș, j, ț și st: ea→a (seară→sară, steag→stag)","after s, z, ș, j, ț and st: ea→a (seară→sară, steag→stag)",`(${SIB})ea`,"$1a","seară→sară","enban"),
R("b_e","după s, z, ș, j, ț și st: e→ă (semn→sămn, poveste→povestă)","after s, z, ș, j, ț and st: e→ă (semn→sămn, poveste→povestă)",`(${SIB})e`,"$1ă","semn→sămn","enban",N("După st, e→ă, deci t nu mai e urmat de e: poveste→povjéstă, ca în sursă ([povjɛstə]). La pește grupul e șt, nu st, de aceea t se muiază: pjéșće.","After st, e→ă, so t is no longer followed by e: poveste→povjéstă, as in the source ([povjɛstə]). In pește the group is șt, not st, which is why t softens: pjéșće.")),
R("b_i","după s, z, ș, j, ț și st: i→î (singur→sîngur, și→șî)","after s, z, ș, j, ț and st: i→î (singur→sîngur, și→șî)",`(${SIB})i`,"$1î","singur→sîngur","enban"),
R("b_cea","cea→șʲa, gea→jʲa (ceas→șʲas)","cea→șʲa, gea→jʲa (ceas→șʲas)","c(e)a","șʲa","ceas→șʲas","enban"),
R("b_c","ce/ci → șʲe/șʲi (cină→șʲină, cinci→șʲinșʲ)","ce/ci → șʲe/șʲi (cină→șʲină, cinci→șʲinșʲ)",`c(?=${FV})`,"șʲ","cină→șʲină","enban"),
R("b_g","ge/gi → jʲe/jʲi (fuge→fujʲe, ginere→jʲinere, sânge→sîn jʲe)","ge/gi → jʲe/jʲi (fuge→fujʲe, ginere→jʲinere)",`g(?=${FV})`,"jʲ","fuge→fujʲe","enban"),
R("b_t","t înaintea lui e/i/ea → ć (frunte→frunće)","t before e/i/ea → ć (frunte→frunće)",`t(?=${FV})`,"ć","frunte→frunće",["enban","danciu09","guia15"]),
R("b_d","d înaintea lui e/i/ea → đ (bade→bađe, dimineață→đimineață)","d before e/i/ea → đ (bade→bađe, dimineață→đimineață)",`d(?=${FV})`,"đ","bade→bađe",["enban","danciu09","guia15"]),
R("b_nn","n înaintea lui e/i/ea → ń (vine→vińe)","n before e/i/ea → ń (vine→vińe)",`n(?=${FV})`,"ń","vine→vińe","enban"),
R("b_l","l înaintea lui e/i/ea → ĺ (lemne→ĺemńe)","l before e/i/ea → ĺ (lemne→ĺemńe)",`l(?=${FV})`,"ĺ","lemne→ĺemne","enban"),
R("b_r","r înaintea lui e/i/ea → ŕ (mare→maŕe)","r before e/i/ea → ŕ (mare→maŕe)",`r(?=${FV})`,"ŕ","mare→maŕe","enban"),
L("b_dan","SV de Timișoara: caut→capt, viespe→văspar, scaun→scamn; prânz→prîndz, rânză→rîndză, măzăre→mădzare; dormim→durmim, dormiți→durmiț, dormit→durmit, dormind→durmind; umblu→îmblu, umplu→împlu, umflu→îmflu, intru→întru","SW of Timișoara: caut→capt, viespe→văspar, scaun→scamn; prânz→prîndz, rânză→rîndză, măzăre→mădzare; dormim→durmim, dormiți→durmiț, dormit→durmit, dormind→durmind; umblu→îmblu, umplu→împlu, umflu→îmflu, intru→întru",
 "caut|viespe|scaun|prânz|rânză|măzăre|dormim|dormiți|dormit|dormind|umblu|umplu|umflu|intru",
 {caut:"capt",viespe:"văspar",scaun:"scamn","prânz":"prîndz","rânză":"rîndză","măzăre":"mădzare",dormim:"durmim","dormiți":"durmiț",dormit:"durmit",dormind:"durmind",umblu:"îmblu",umplu:"împlu",umflu:"îmflu",intru:"întru"},"caut→capt","danciu09"),
L("b_alm","SV Banat (Almăj, Carașova): luat→luvat, nour→nuvăr, laudă→lăvdă, caut→capt","SW Banat (Almăj, Carașova): luat→luvat, nour→nuvăr, laudă→lăvdă, caut→capt","luat|nour|laudă|caut",{luat:"luvat",nour:"nuvăr","laudă":"lăvdă",caut:"capt"},"luat→luvat","petrovici35"),
);

/* ===== Crișana ===== */
add(
L("cr_lex","câine→cîńe, mâine→mîńe, pâine→pîńe; băiat→băiet, tămâiat→tămîiet","câine→cîńe, mâine→mîńe, pâine→pîńe; băiat→băiet, tămâiat→tămîiet","câine|mâine|pâine|băiat|tămâiat",{"câine":"cîńe","mâine":"mîńe","pâine":"pîńe","băiat":"băiet","tămâiat":"tămîiet"},"câine→cîńe","encri"),
R("cr_sl","sl→skl (slab→sklab, slănină→sklănină)","sl→skl (slab→sklab, slănină→sklănină)","sl","skl","slab→sklab","encri"),
R("cr_sea","după s, z, ț: ea→a (seară→sară, zeamă→zamă)","after s, z, ț: ea→a (seară→sară, zeamă→zamă)","([szț])ea","$1a","seară→sară","encri"),
R("cr_se","după s, z, ț: e→ă","after s, z, ț: e→ă","([szț])e","$1ă","semn→sămn","encri"),
R("cr_si","după s, z, ț: i→î (singur→sîngur, țin→țîn)","after s, z, ț: i→î (singur→sîngur, țin→țîn)","([szț])i","$1î","singur→sîngur","encri"),
R("cr_o","o la început de cuvânt → wă (oi→wăi, orb→wărb)","word-initial o → wă (oi→wăi, orb→wărb)",`${B0}o(?=[${C}i])`,"wă","orb→wărb","encri"),
R("cr_oa","oa→o (poate→pote, coajă→cojă)","oa→o (poate→pote, coajă→cojă)","oa","o","poate→pote","encri"),
R("cr_lea","după labială: ea→a (meargă→margă)","after a labial: ea→a (meargă→margă)","([pbmfv])ea","$1a","meargă→margă","encri"),
R("cr_le","după labială: e→ă (merg→mărg)","after a labial: e→ă (merg→mărg)","([pbmfv])e","$1ă","merg→mărg","encri"),
R("cr_g","ge/gi → je/ji (sânge→sînje, fuge→fuje); ce/ci rămân africate","ge/gi → je/ji (sânge→sînje, fuge→fuje); ce/ci stay affricates",`g(?=${FV})`,"j","fuge→fuje","encri"),
R("cr_ch","chi/che → tʲi/tʲe (chem→tʲem, cheag→tʲag): k' se confundă cu t muiat","chi/che → tʲi/tʲe (chem→tʲem, cheag→tʲag): k' is confused with a softened t",`ch(?=${FV})`,"tʲ","chem→tʲem","guia15"),
R("cr_gh","ghi/ghe → dʲi/dʲe (gheață→dʲeață, unghie→undʲie): g' se confundă cu d muiat","ghi/ghe → dʲi/dʲe (gheață→dʲeață, unghie→undʲie): g' is confused with a softened d",`gh(?=${FV})`,"dʲ","gheață→dʲeață","guia15"),
R("cr_t","t înaintea lui e/i/ea → tʲ (frate→fratʲe)","t before e/i/ea → tʲ (frate→fratʲe)",`t(?=${FV})`,"tʲ","frate→fratʲe",["encri","guia15"]),
R("cr_d","d înaintea lui e/i/ea → dʲ (bade→badʲe)","d before e/i/ea → dʲ (bade→badʲe)",`d(?=${FV})`,"dʲ","bade→badʲe",["encri","guia15"]),
R("cr_n","n înaintea lui e/i/ea → ń (mine→mińe)","n before e/i/ea → ń (mine→mińe)",`n(?=${FV})`,"ń","mine→mińe","guia15"),
R("cr_p0","nordul Crișanei: pi înaintea lui a/e → ptʲ (piele→ptʲele, piatră→ptʲatră)","northern Crișana: pi before a/e → ptʲ (piele→ptʲele, piatră→ptʲatră)","pi(?=[ae])","ptʲ","piele→ptʲele",["encri","guia20"]),
R("mar_p0","p+ie/ia → ptʲ (piele→ptʲele)","pi before a/e → ptʲ (piele→ptʲele)","pi(?=[ae])","ptʲ","piele→ptʲele","enmar"),
R("ar_p0","NE: pi înaintea lui a/e → pc (piele→pcele, piatră→pcatră)","NE: pi before a/e → pc (piele→pcele, piatră→pcatră)","pi(?=[ae])","pc","piatră→pcatră","rus20"),
R("cr_p","nordul Crișanei: p înaintea lui i → ptʲ (piele→ptʲele)","northern Crișana: p before i → ptʲ (piele→ptʲele)",`p(?=i)`,"ptʲ","pitic→ptʲitic",["encri","guia20"]),
R("cr_b","nordul Crișanei: b → bdʲ (bine→bdʲine)","northern Crișana: b → bdʲ (bine→bdʲine)",`b(?=i)`,"bdʲ","bine→bdʲine",["encri","guia20"]),
R("cr_m","nordul Crișanei: m → mnʲ (mic→mnʲic)","northern Crișana: m → mnʲ (mic→mnʲic)",`m(?=i)`,"mnʲ","mic→mnʲic",["encri","guia20"]),
R("cr_f","nordul Crișanei: f → hʲ (fierbe→hʲierbe)","northern Crișana: f → hʲ (fierbe→hʲierbe)",`f(?=i)`,"hʲ","fierbe→hʲierbe",["encri","guia20"]),
R("cr_v","nordul Crișanei: v → ĥ (vițel→ĥițel)","northern Crișana: v → ĥ (vițel→ĥițel)",VPAT,"ĥ","vițel→ĥițel",["encri","guia20"]),
L("cr_moti","Țara Moților: n între vocale → r în cuvinte vechi: oameni→wamirʲ, lumină→lumnʲiră","Țara Moților: intervocalic n → r in old words: oameni→wamirʲ, lumină→lumnʲiră","oameni|lumină",{oameni:"wamirʲ","lumină":"lumnʲiră"},"oameni→wamirʲ","encri"),
R("cr_mt","Munții Apuseni: t înaintea lui e/i → c, dentala se africatizează (știu→șciu, vorbește→vorbeșce)","Apuseni Mountains: t before e/i → c, the dental is africatized (știu→șciu, vorbește→vorbeșce)",`t(?=${FV})`,"c","știu→șciu","guia15"),
R("cr_mv","Țara Moților și valea Crișului Negru: v → ĥ (vis→ĥis, vierme→ĥierme)","Țara Moților and Crișul Negru valley: v → ĥ (vis→ĥis, vierme→ĥierme)",VPAT,"ĥ","vis→ĥis","guia20"),
R("cr_oas","Țara Oașului: l înaintea unei consoane se velarizează (alb→ałb)","Țara Oașului: l before a consonant is velarized (alb→ałb)",`l(?=[${C}])`,"ł","alb→ałb","encri"),
L("cr_oas2","Țara Oașului: schimb→știmb, șchiop→știop (grupul șt' se depalatalizează)","Țara Oașului: schimb→știmb, șchiop→știop (the group șt' is depalatalized)","schimb|șchiop",{schimb:"știmb","șchiop":"știop"},"schimb→știmb","guia15"),
);

/* ===== Maramureș ===== */
add(
L("mar_lex","de→di; câine→cîńe, mâine→mîńe, pâine→pîńe; băiat→băiet, muiat→muiet; zi→dzî, zic→dzîc, jos→gios, joc→gioc; umblu→îmblu, umflu→îmflu, intru→întru","de→di; câine→cîńe, mâine→mîńe, pâine→pîńe; băiat→băiet, muiat→muiet; zi→dzî, zic→dzîc, jos→gios, joc→gioc; umblu→îmblu, umflu→îmflu, intru→întru",
 "de|câine|mâine|pâine|băiat|muiat|zi|zic|jos|joc|umblu|umflu|intru",{de:"di","câine":"cîńe","mâine":"mîńe","pâine":"pîńe","băiat":"băiet",muiat:"muiet",zi:"dzî",zic:"dzîc",jos:"gios",joc:"gioc",umblu:"îmblu",umflu:"îmflu",intru:"întru"},"zic→dzîc","enmar"),
R("mar_eafin","-ea final → -é (avea→avé, vrea→vré)","final -ea → -é (avea→avé, vrea→vré)",String.raw`(?<=\p{L})ea(?!\p{L})`,"é","avea→avé","enmar",N("Sursa spune „accentuat”.","The source says “stressed”.")),
R("mar_ee","când e apare în două silabe consecutive, primul e se deschide: fete→féte","when e appears in two consecutive syllables, the first e opens: fete→féte",`e(?=[${C}]{1,2}e)`,"é","fete→féte","enmar"),
R("mar_sea","după s, z, ș, j, ț, r: ea→a (seară→sară, zeamă→zamă)","after s, z, ș, j, ț, r: ea→a (seară→sară, zeamă→zamă)",`([szșjțr])ea`,"$1a","seară→sară","enmar"),
R("mar_se","după s, z, ș, j, ț, r: e→ă","after s, z, ș, j, ț, r: e→ă",`([szșjțr])e`,"$1ă","zer→zăr","enmar"),
R("mar_si","după s, z, ș, j, ț, r: i→î (singur→sîngur, țin→țîn, jir→jîr)","after s, z, ș, j, ț, r: i→î (singur→sîngur, țin→țîn, jir→jîr)",`([szșjțr])i`,"$1î","singur→sîngur","enmar"),
R("mar_ce","c, g înaintea lui e: e→ĕ, central (cer→cĕr, ger→gĕr); c/g rămân africate","c, g before e: e→ĕ, central (cer→cĕr, ger→gĕr); c/g stay affricates","([cg])e(?!a)","$1ĕ","cer→cĕr","enmar"),
R("mar_la","după labială: ea→a (meargă→margă)","after a labial: ea→a (meargă→margă)","([pbmfv])ea","$1a","meargă→margă","enmar"),
R("mar_le","după labială: e→ă (merg→mărg, pe→pă)","after a labial: e→ă (merg→mărg, pe→pă)","([pbmfv])e","$1ă","pe→pă","enmar"),
R("mar_oa","oa→o (ușoară→ușoră, noapte→nopte)","oa→o (ușoară→ușoră, noapte→nopte)","oa","o","noapte→nopte","enmar"),
R("mar_l","l înaintea lui e/i → ĺ (lemne→ĺemńe)","l before e/i → ĺ (lemne→ĺemńe)",`l(?=${FV})`,"ĺ","lemne→ĺemne","enmar"),
R("mar_n","n înaintea lui e/i → ń (vine→vińe)","n before e/i → ń (vine→vińe)",`n(?=${FV})`,"ń","vine→vińe","enmar"),
R("mar_t","t, d înaintea lui e/i/ea → tʲ, dʲ (frate→fratʲe, bade→badʲe)","t, d before e/i/ea → tʲ, dʲ (frate→fratʲe, bade→badʲe)",`([td])(?=${FV})`,"$1ʲ","frate→fratʲe","guia15"),
R("mar_ch","chi/che → tʲi/tʲe, ghi/ghe → dʲi/dʲe (k', g' confundate cu dentalele muiate)","chi/che → tʲi/tʲe, ghi/ghe → dʲi/dʲe (k', g' confused with softened dentals)",`ch(?=${FV})`,"tʲ","chem→tʲem","guia15"),
R("mar_gh","ghi/ghe → dʲi/dʲe","ghi/ghe → dʲi/dʲe",`gh(?=${FV})`,"dʲ","gheață→dʲeață","guia15"),
R("mar_p","p înaintea lui i → ptʲ (piele→ptʲele)","p before i → ptʲ (piele→ptʲele)",`p(?=i)`,"ptʲ","pitic→ptʲitic","enmar"),
R("mar_b","b → bdʲ (bine→bdʲine)","b → bdʲ (bine→bdʲine)",`b(?=i)`,"bdʲ","bine→bdʲine","enmar"),
R("mar_m","m → mnʲ (mic→mnʲic)","m → mnʲ (mic→mnʲic)",`m(?=i)`,"mnʲ","mic→mnʲic","enmar"),
R("mar_f","f înaintea lui i → s (să fie→să sie)","f before i → s (să fie→să sie)",`f(?=i)`,"s","fie→sie","enmar"),
R("mar_v","v înaintea lui i → z (vierme→zierme)","v before i → z (vierme→zierme)",VPAT,"z","vierme→zierme","enmar"),
);

/* ===== Transylvania ===== */
add(
L("ar_lex","câine→cîne, mâine→mîne, pâine→pîne","câine→cîne, mâine→mîne, pâine→pîne","câine|mâine|pâine",{"câine":"cîne","mâine":"mîne","pâine":"pîne"},"pâine→pîne","entra"),
R("ar_dorm","a durmi: u în tot paradigma (dorm→durm, adormi→adurmi)","a durmi: u throughout the paradigm (dorm→durm, adormi→adurmi)",`${B0}(a?)dorm(?=(?:i|e|im|iți|ea|ind|ire|it)?${B1})`,"$1durm","dorm→durm","entra"),
R("ar_sea","după s, z, ț: ea→a (seară→sară)","after s, z, ț: ea→a (seară→sară)","([szț])ea","$1a","seară→sară","entra"),
R("ar_se","după s, z, ț: e→ă","after s, z, ț: e→ă","([szț])e","$1ă","semn→sămn","entra"),
R("ar_si","după s, z, ț: i→î","after s, z, ț: i→î","([szț])i","$1î","singur→sîngur","entra"),
R("ar_oa","oa→o în tot graiul ardelenesc (boală→bolă, coadă→codă, groapă→gropă, aproape→aprope)","oa→o across Transylvanian speech (boală→bolă, coadă→codă, groapă→gropă, aproape→aprope)","oa","o","coadă→codă","rus20"),
R("ar_ch","NE: chi/che → ci/ce, ghi/ghe → gi/ge (curechi→curec, piper→cipér): k', g' africatizate","NE: chi/che → ci/ce, ghi/ghe → gi/ge (curechi→curec): k', g' africatized",`ch(?=${FV})`,"c","ochi→oci","guia15"),
R("ar_gh","NE: ghi/ghe → gi/ge","NE: ghi/ghe → gi/ge",`gh(?=${FV})`,"g","ghiață→giață","guia15"),
R("ar_td","NE: t, d înaintea lui e/i/ea sunt muiate (tʲ, dʲ)","NE: t, d before e/i/ea are softened (tʲ, dʲ)",`([td])(?=${FV})`,"$1ʲ","frate→fratʲe","guia15"),
R("ar_n","NE: n înaintea lui e/i/ea → ń (vine→vińe)","NE: n before e/i/ea → ń (vine→vińe)",`n(?=${FV})`,"ń","vine→vińe","guia15"),
R("ar_p","NE: p→pc (piele→pcele)","NE: p→pc (piele→pcele)",`p(?=i)`,"pc","pitic→pcitic","rus20"),
R("ar_b","NE: b→bg (albină→albgină)","NE: b→bg (albină→albgină)",`b(?=i)`,"bg","albină→albgină","rus20"),
R("ar_m","NE: m→mń (mic→mńic, nimic→nimńic)","NE: m→mń (mic→mńic, nimic→nimńic)",`m(?=i)`,"mń","lumină→lumńină","rus20"),
R("ar_f","NE: f→ș înaintea lui i (fin→șin)","NE: f→ș before i (fin→șin)",`f(?=i)`,"ș","fin→șin","rus20"),
R("ar_v","NE: v→z înaintea lui i (vin→zin, vițel→zițăl)","NE: v→z before i (vin→zin, vițel→zițăl)",VPAT,"z","un vin→un zin","rus20"),
);
export const RULES=Object.fromEntries(list.map(r=>[r.id,r]));
