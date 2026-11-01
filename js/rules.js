// status: "sourced" = backed by a source actually read (keys in docs/SOURCES.md); "unverified" = not yet checked.
// Rules run in listed order. 'to' may use $1; 'map' = whole-word lexical replacements.
const SIB="(?:st|[szșjț])";
const R=(ro,en,from,to,ex,status,src)=>({ro,en,from,to,ex,status,src});
export const RULES = {
  // ---- Banat (EN-BAN = en.wikipedia Banat dialect, DIA-BAN = diacronia A12911) ----
  b_lex:{protect:true,ro:"Africata d păstrată: zece→dzășʲe, auzi→audz, frunză→frundză, brânză→brândză, buză→budză, grumaz→grumadz, mânz→mândz",
    en:"Affricate dz kept in some words (zece→dzășʲe, auzi→audz, frunză→frundză, brânză→brândză, buză→budză, grumaz→grumadz, mânz→mândz)",
    from:"\\b(zece|auzi|frunz[ăa]|br[âî]nz[ăa]|buz[ăa]|grumaz|m[âî]nz)\\b",
    map:{zece:"dzășʲe",auzi:"audz","frunză":"frundză",frunza:"frundza","brânză":"brândză","brînză":"brândză","buză":"budză",grumaz:"grumadz","mânz":"mândz","mînz":"mândz"},
    ex:"zece→dzășʲe", status:"sourced", src:"EN-BAN"},
  b_ie:R("ie după labială → e: fier→fer, piept→pept","ie after a labial → e: fier→fer, piept→pept","([pbfvm])ie(?=[bcdfghjklmnprstvzșț])","$1e","fier→fer, piele→pele, piept→pept","sourced","EN-BAN"),
  b_ea:R("După s, z, ș, j, ț, st: ea→a (seară→sară, steag→stag)","After s, z, ș, j, ț, st: ea→a (seară→sară, steag→stag)",`(${SIB})ea`,"$1a","seară→sară, steag→stag","sourced","EN-BAN"),
  b_e:R("După s, z, ș, j, ț, st: e→ă (semn→sămn)","After s, z, ș, j, ț, st: e→ă (semn→sămn)",`(${SIB})e`,"$1ă","semn→sămn, zer→zăr","sourced","EN-BAN"),
  b_i:R("După s, z, ș, j, ț, st: i→î (singur→sîngur, și→șî)","After s, z, ș, j, ț, st: i→î (singur→sîngur, și→șî)",`(${SIB})i`,"$1î","singur→sîngur, zid→zîd","sourced","EN-BAN"),
  b_c:R("ce/ci → șʲe/șʲi (africata devine fricativă palatalizată)","ce/ci → șʲe/șʲi (affricate becomes palatalized fricative)","c(?=[ei])","șʲ","cinci→șʲinșʲ, ceas→șʲas","sourced","EN-BAN"),
  b_g:R("ge/gi → jʲe/jʲi","ge/gi → jʲe/jʲi","g(?=[ei])","jʲ","fuge→fujʲe, ginere→jʲinere","sourced","EN-BAN"),
  b_t:R("t înaintea lui e/i → ć (tʃʲ; notație din dialectologie)","t before e/i → ć (tʃʲ; notation used in dialectology)","t(?=[ei])","ć","frunte→frunće, lapte→lapće","sourced","EN-BAN, DIA-BAN"),
  b_d:R("d înaintea lui e/i → đ (dʒʲ)","d before e/i → đ (dʒʲ)","d(?=[ei])","đ","bade→bađe, dimineață→đimineață","sourced","EN-BAN, DIA-BAN"),
  b_n:R("n înaintea lui e/i → ń","n before e/i → ń","n(?=[ei])","ń","vine→vińe","sourced","EN-BAN"),
  b_l:R("l înaintea lui e/i → ĺ","l before e/i → ĺ","l(?=[ei])","ĺ","lemne→ĺemńe","sourced","EN-BAN"),
  b_r:R("r înaintea lui e/i → ŕ","r before e/i → ŕ","r(?=[ei])","ŕ","mare→maŕe","sourced","EN-BAN"),
  // ---- Moldavian (EN-MOL = en.wikipedia Moldavian dialect, 2016 mirror; CAP-02 = Căprioară 2002) ----
  m_dropi:R("După s, z, ș, j, ț: -i final de plural/persoana a 2-a dispare (vezi→vez, părinți→părinț)","After s, z, ș, j, ț: final plural/2nd-person -i is lost (vezi→vez, părinți→părinț)","(?<=\\p{L})([szșjț])i(?![\\p{L}])","$1","părinți→părinț","sourced","EN-MOL"),
  m_ea:R("După s, z, ș, j, ț: ea→a (seară→sară)","After s, z, ș, j, ț: ea→a (seară→sară)","([szșjț])ea","$1a","seară→sară, zeamă→zamă","sourced","EN-MOL"),
  m_e:R("După s, z, ș, j, ț: e→ă (semn→sămn)","After s, z, ș, j, ț: e→ă (semn→sămn)","([szșjț])e","$1ă","semn→sămn","sourced","EN-MOL"),
  m_i:R("După s, z, ș, j, ț: i→î (singur→sîngur, zid→zîd)","After s, z, ș, j, ț: i→î (singur→sîngur, zid→zîd)","([szșjț])i","$1î","zid→zîd","sourced","EN-MOL"),
  m_cea:R("cea→șa, gea→ja (ceapă→șapă)","cea→șa, gea→ja (ceapă→șapă)","cea","șa","ceapă→șapă","sourced","EN-MOL"),
  m_gea:R("gea→ja","gea→ja","gea","ja","gene→jene","sourced","EN-MOL"),
  m_c:R("Africate simplificate: ce/ci→șe/și","Affricates simplified: ce/ci→șe/și","c(?=[ei])","ș","cină→șină","sourced","EN-MOL"),
  m_g:R("Africate simplificate: ge/gi→je/ji (jos, sânge)","Affricates simplified: ge/gi→je/ji","g(?=[ei])","j","gene→jene","sourced","EN-MOL"),
  m_p:R("Labiale palatalizate: pi→chi (copil→cochil; Creangă: chiuă, chilos)","Labials palatalized: pi→chi (Creangă: chiuă, chilos)","p(?=i)","ch","pi→chi","sourced","EN-MOL, CAP-02"),
  m_b:R("bi→ghi (bine→ghine)","bi→ghi (bine→ghine)","b(?=i)","gh","bine→ghine","sourced","EN-MOL, CAP-02"),
  m_f:R("fi→hi (fierbe→hierbe; sudul zonei; Creangă: hi)","fi→hi (fierbe→hierbe; southern half; Creangă: hi)","f(?=i)","h","fierbe→hierbe","sourced","EN-MOL, CAP-02"),
  m_iat:R("-iat final → -iet (băiat→băiet)","final -iat → -iet (băiat→băiet)","iat(?![\\p{L}])","iet","băiat→băiet","sourced","EN-MOL, CAP-02"),
  m_eafin:R("-ea final → -é (avea→avé, spunea→spuné)","final -ea → -é (avea→avé, spunea→spuné)","(?<=\\p{L})ea(?![\\p{L}])","é","avea→avé","sourced","EN-MOL, CAP-02"),
  m_afin:R("-ă final (cuvinte de 3+ litere) → -î (mamă→mamî, casă→casî)","final -ă (words of 3+ letters) → -î (mamă→mamî, casă→casî)","(?<=\\p{L}{2})ă(?![\\p{L}])","î","mamă→mamî","sourced","EN-MOL"),
  m_efin:R("-e final neaccentuat → -i (lapte→lapti, vreme→vremi)","unstressed final -e → -i (lapte→lapti, vreme→vremi)","(?<=[bcdfghjklmnprstvxzșțć])e(?![\\p{L}])","i","lapte→lapti","sourced","EN-MOL"),
};
// Fix typo-proofing for display strings
RULES.m_efin.ro="-e final neaccentuat → -i (lapte→lapti, vreme→vremi)";

// ---- Bessarabian / Moldavian additions (SPI-18 = Spînu 2018, based on ALM) ----
const SIBR="[szșjț]";
Object.assign(RULES,{
  m_lex:{protect:true,ro:"Forme vechi/dialectale: fecior→ficior, femeie→fimeie, toți→tăț",en:"Old/dialectal forms: fecior→ficior, femeie→fimeie, toți→tăț",
    from:"\\b(fecior|femeie|toți)\\b",map:{fecior:"ficior",femeie:"fimeie","toți":"tăț"},ex:"fecior→ficior",status:"sourced",src:"SPI-18"},
  m_gio:{ro:"j- păstrat ca africată în unele cuvinte: jos→gios, joc→gioc, jur→giur, jug→giug (mai ales vârstnici)",en:"Old affricate kept in some words: jos→gios, joc→gioc, jur→giur, jug→giug (mostly elderly speakers)",
    from:"\\bj(?=(?:u[rg]|o[sc]\\b))",to:"gi",ex:"jos→gios",status:"sourced",src:"SPI-18"},
  bas_ja:R("După ș, j dure: a→ă (șarpe→șărpe, jale→jăle)","After hard ș, j: a→ă (șarpe→șărpe, jale→jăle; stressed a in the source)","([șj])a","$1ă","șapte→șăpte","sourced","SPI-18"),
  bas_ea:R("ea→a când silaba următoare are a/ă (meargă→margă, seară→sară, țeapăn→țapăn)","ea→a when the next syllable has a/ă (meargă→margă, țeapăn→țapăn)","ea(?=[bcdfghjklmnprstvzșț]{1,2}[aă])","a","meargă→margă","sourced","SPI-18"),
  bas_f:R("Palatalizarea labialelor în stadiul final: fi→și (fin→șin)","Final-stage labial palatalization: fi→și (fin→șin)","f(?=i)","ș","fin→șin","sourced","SPI-18, EN-MOL"),
  bas_v:R("vi→ji (nordul zonei, EN-MOL)","vi→ji (northern half, EN-MOL)","v(?=i)","j","vițel→jițel","sourced","EN-MOL"),
  m_m:R("mi→ni (miel→niel); contestat pentru Moldova, atestat pentru Basarabia","mi→ni (miel→niel); contested for Moldavia proper, attested for Bessarabia","m(?=i[\\p{L}])","n","mire→nire","sourced","SPI-18, EN-MOL"),
  // ---- Bukovina (TUR-77 = Turculeț 1977-78) ----
  bc_f:R("Câmpulung: fi→hi","Câmpulung: fi→hi","f(?=i)","h","fierbe→hierbe","sourced","TUR-77"),
  bc_p:R("Câmpulung: grup palatalizant păstrat: pi→pchi","Câmpulung: palatalizing group kept: pi→pchi","p(?=i)","pch","piele→pchiele","sourced","TUR-77"),
  bc_b:R("Câmpulung: bi→bghi","Câmpulung: bi→bghi","b(?=i)","bgh","bine→bghine","sourced","TUR-77"),
  bc_m:R("Câmpulung: mi→mni","Câmpulung: mi→mni","m(?=i[\\p{L}])","mn","mic→mnic","sourced","TUR-77"),
  rd_lex:{protect:true,ro:"Rădăuțean: după→dipi, viespe→zespe",en:"Rădăuți area: după→dipi, viespe→zespe",from:"\\b(după|viespe)\\b",map:{"după":"dipi",viespe:"zespe"},ex:"după→dipi",status:"sourced",src:"TUR-77"},
  se_ch:R("Sud-est/Dorna: chi/che → ci/ce (palatalele africatizate)","SE/Dorna: palatal chi/che → ci/ce (affricated)","ch(?=[ei])","c","chiar→ciar","sourced","TUR-77"),
  se_gh:R("Sud-est/Dorna: ghi/ghe → gi/ge","SE/Dorna: ghi/ghe → gi/ge","gh(?=[ei])","g","gheață→geață","sourced","TUR-77"),
  se_t:R("Sud-est/Dorna: t înaintea lui e/i → c (muierea africatizată a dentalelor)","SE/Dorna: t before e/i → c (affricated dentals)","t(?=[ei])","c","frunte→frunce","sourced","TUR-77"),
  se_d:R("Sud-est/Dorna: d înaintea lui e/i → g","SE/Dorna: d before e/i → g","d(?=[ei])","g","dinte→gince","sourced","TUR-77"),
  // ---- Maramureș (EN-MAR = en.wikipedia Maramureș dialect; FEL = Felecan, diacronia V704) ----
  mar_lex:{protect:true,ro:"Cuvinte: pe→pă, câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, zi→dzî, zic→dzîc, jos→gios, joc→gioc, de→di",
    en:"Words: câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, zi→dzî, zic→dzîc, jos→gios, joc→gioc, de→di",
    from:"\\b(c[âî]ine|m[âî]ine|p[âî]ine|băiat|muiat|zi|zic|jos|joc|de|pe)\\b",
    map:{"câine":"cîńe","cîine":"cîńe","mâine":"mîńe","mîine":"mîńe","pâine":"pîńe","pîine":"pîńe","băiat":"băiet",muiat:"muiet",zi:"dzî",zic:"dzîc",jos:"gios",joc:"gioc",de:"di",pe:"pă"},
    ex:"zic→dzîc",status:"sourced",src:"EN-MAR"},
  mar_f:R("f înaintea lui i → s (să fie→să sie)","f before i → s (să fie→să sie)","f(?=i)","s","fie→sie","sourced","EN-MAR, FEL"),
  mar_v:R("v înaintea lui i → z (vierme→zierme)","v before i → z (vierme→zierme)","v(?=i)","z","vierme→zierme","sourced","EN-MAR, FEL"),
  mar_p:R("p înaintea lui i → pt (piele→ptiele)","p before i → pt (piele→ptiele)","p(?=i)","pt","piele→ptiele","sourced","EN-MAR"),
  mar_b:R("b înaintea lui i → bd (bine→bdine)","b before i → bd (bine→bdine)","b(?=i)","bd","bine→bdine","sourced","EN-MAR"),
  mar_m:R("m înaintea lui i → mn (mic→mnic)","m before i → mn (mic→mnic)","m(?=i[\\p{L}])","mn","mic→mnic","sourced","EN-MAR"),
  mar_labea:R("După labiale: ea→a (meargă→margă)","After labials: ea→a (meargă→margă)","([pbmfv])ea","$1a","meargă→margă","sourced","EN-MAR"),
  mar_labe:R("După labială inițială: e→ă (merg→mărg); fete rămâne fete (e→ɛ, neimplementat)","After a word-initial labial: e→ă (merg→mărg); only when no later e follows (fete keeps e)","\\b([pbmfv])e(?![^aeiouăâîy]+e)(?=[bcdfghjklmnprstvzșț])","$1ă","merg→mărg","sourced","EN-MAR"),
  mar_sea:R("După s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă)","After s, z, ș, j, ț: ea→a","([szșjț])ea","$1a","seară→sară","sourced","EN-MAR"),
  mar_se:R("După s, z, ș, j, ț: e→ă","After s, z, ș, j, ț: e→ă","([szșjț])e","$1ă","semn→sămn","sourced","EN-MAR"),
  mar_si:R("După s, z, ș, j, ț: i→î (singur→sîngur, jir→jîr, țin→țîn)","After s, z, ș, j, ț: i→î (singur→sîngur, țin→țîn)","([szșjț])i","$1î","singur→sîngur","sourced","EN-MAR"),
  mar_oa:R("oa→o (ușoară→ușoră, noapte→nopte)","oa→o (ușoară→ușoră, noapte→nopte)","oa","o","noapte→nopte","sourced","EN-MAR"),
  mar_eafin:R("-ea final accentuat → -é (avea→avé, vrea→vré)","stressed final -ea → -é (avea→avé, vrea→vré)","(?<=\\p{L})ea(?![\\p{L}])","é","avea→avé","sourced","EN-MAR"),
  mar_n:R("n înaintea lui e/i → ń","n before e/i → ń","n(?=[ei])","ń","vine→vińe","sourced","EN-MAR"),
  mar_l:R("l înaintea lui e/i → ĺ","l before e/i → ĺ","l(?=[ei])","ĺ","lemne→ĺemńe","sourced","EN-MAR")
});
// ---- Crișana (EN-CRI) and Transylvanian varieties (EN-TRA, NE-TRA = Rus 2020, diacronia A32442) ----
Object.assign(RULES,{
  cr_lex:{protect:true,ro:"Cuvinte: câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, tămâiat→tămîiet",en:"Words: câine/mâine/pâine→cîńe/mîńe/pîńe, băiat→băiet, tămâiat→tămîiet",
    from:"\\b(c[âî]ine|m[âî]ine|p[âî]ine|băiat|tăm[âî]iat)\\b",
    map:{"câine":"cîńe","cîine":"cîńe","mâine":"mîńe","mîine":"mîńe","pâine":"pîńe","pîine":"pîńe","băiat":"băiet","tămâiat":"tămîiet","tămîiat":"tămîiet"},ex:"câine→cîńe",status:"sourced",src:"EN-CRI"},
  cr_sl:R("sl→skl (slab→sklab, slănină→sklănină)","sl→skl (slab→sklab, slănină→sklănină)","sl","skl","slab→sklab","sourced","EN-CRI"),
  cr_sea:R("După s, z, ț: ea→a (seară→sară, zeamă→zamă)","After s, z, ț: ea→a (seară→sară, zeamă→zamă)","([szț])ea","$1a","seară→sară","sourced","EN-CRI"),
  cr_se:R("După s, z, ț: e→ă","After s, z, ț: e→ă","([szț])e","$1ă","semn→sămn","sourced","EN-CRI"),
  cr_si:R("După s, z, ț: i→î (singur→sîngur, țin→țîn)","After s, z, ț: i→î (singur→sîngur, țin→țîn)","([szț])i","$1î","singur→sîngur","sourced","EN-CRI"),
  cr_oa:R("oa→o (poate→pote, coajă→cojă)","oa→o (poate→pote, coajă→cojă)","oa","o","poate→pote","sourced","EN-CRI"),
  cr_o:R("o- inițial → wă- (oi→wăi, orb→wărb; în sursă doar accentuat)","word-initial o → wă- (oi→wăi, orb→wărb; stressed only in the source)","\\bo(?=[ibcdfghjklmnprstvxzșț])","wă","orb→wărb","sourced","EN-CRI"),
  cr_g:R("ge/gi → je/ji (sânge→sînje, fuge→fuje); ce/ci rămân africate","ge/gi → je/ji (sânge→sînje, fuge→fuje); ce/ci stay affricates","g(?=[ei])","j","fuge→fuje","sourced","EN-CRI"),
  cr_p:R("p înaintea lui i/e → pt (piele→ptʲele)","p before front vowel → pt (piele→ptʲele)","p(?=i)","pt","piele→ptiele","sourced","EN-CRI"),
  cr_b:R("b → bd (bine→bdʲine)","b → bd (bine→bdʲine)","b(?=i)","bd","bine→bdine","sourced","EN-CRI"),
  cr_m:R("m → mn (mic→mnʲic)","m → mn (mic→mnʲic)","m(?=i[\\p{L}])","mn","mic→mnic","sourced","EN-CRI"),
  cr_f:R("f → h (variantă: ș); mai frecvent în nord (să fie→să hie)","f → h (variant: ș); more frequent in the north (să fie→să hie)","f(?=i)","h","fie→hie","sourced","EN-CRI"),
  cr_v:R("v → d (variantă: ɦʲ; vițel→dițel); neregulat","v → d (variant: ɦʲ; vițel→dițel); irregular","v(?=i)","d","vițel→dițel","sourced","EN-CRI"),
  cr_t:R("t înaintea lui e/i → tʲ (frate→fratʲe)","t before e/i → tʲ (frate→fratʲe)","t(?=[ei])","tʲ","frate→fratʲe","sourced","EN-CRI"),
  cr_d:R("d înaintea lui e/i → dʲ (bade→badʲe)","d before e/i → dʲ (bade→badʲe)","d(?=[ei])","dʲ","bade→badʲe","sourced","EN-CRI"),
  cr_n:R("n înaintea lui e/i → ń (câine→cîńe, mâine→mîńe)","n before e/i → ń","n(?=[ei])","ń","mine→mińe","sourced","EN-CRI"),
  // Transylvanian group
  ar_lex:{protect:true,ro:"câine/mâine/pâine→cîne/mîne/pîne (ɨj→ɨ)",en:"câine/mâine/pâine→cîne/mîne/pîne (ɨj→ɨ)",from:"\\b(c[âî]ine|m[âî]ine|p[âî]ine)\\b",
    map:{"câine":"cîne","cîine":"cîne","mâine":"mîne","mîine":"mîne","pâine":"pîne","pîine":"pîne"},ex:"pâine→pîne",status:"sourced",src:"EN-TRA"},
  ar_dorm:R("Verbul a durmi cu u în toată paradigma (dorm→durm, adormi→adurmi)","a durmi with u throughout (dorm→durm, adormi→adurmi)","\\b(a?)dorm(?=(?:i|e|im|iți|ea|ind|ire|it|ise)?(?![\\p{L}]))","$1durm","dorm→durm","sourced","EN-TRA"),
  ar_sea:R("După s, z, ț (în unele graiuri și ș, j, r): ea→a","After s, z, ț (in some varieties also ș, j, r): ea→a","([szț])ea","$1a","seară→sară","sourced","EN-TRA"),
  ar_se:R("După s, z, ț: e→ă","After s, z, ț: e→ă","([szț])e","$1ă","semn→sămn","sourced","EN-TRA"),
  ar_si:R("După s, z, ț: i→î","After s, z, ț: i→î","([szț])i","$1î","singur→sîngur","sourced","EN-TRA"),
  ar_oa:R("oa→o (bolă, codă, gropă, aproape→aprope, domnă)","oa→o (bolă, codă, gropă, aprope, domnă)","oa","o","coadă→codă","sourced","EN-TRA, NE-TRA"),
  ar_p:R("NE Transilvania: p → pt (stadiu; există și pk', pĉ)","NE Transylvania: p → pt (one stage; pk', pĉ also occur)","p(?=i)","pt","pieptăn→ptieptăn","sourced","NE-TRA"),
  ar_b:R("NE Transilvania: b → bd (stadii bd, bg', bĝ)","NE Transylvania: b → bd (stages bd, bg', bĝ)","b(?=i)","bd","bine→bdine","sourced","NE-TRA"),
  ar_m:R("NE Transilvania: m → mń (mieu, nimic→nimńic)","NE Transylvania: m → mń (nimic→nimńic)","m(?=i[\\p{L}])","mń","mic→mńic","sourced","NE-TRA"),
  ar_f:R("NE Transilvania: f → ș înaintea lui i (fin→șin)","NE Transylvania: f → ș before i (fin→șin, fierbinte→șierbinte)","f(?=i)","ș","fin→șin","sourced","NE-TRA"),
  ar_v:R("NE Transilvania: v → z înaintea lui i (vin→zin, vițel→zițăl)","NE Transylvania: v → z before i (vin→zin)","v(?=i)","z","vin→zin","sourced","NE-TRA")
});

// ---- Wallachian: Muntenian / Oltenian / Timok (EN-WAL = en.wikipedia Wallachian dialect; OEAW = Univ. of Vienna/OeAW Timok page; RO-BAN = snippet of ro.wikipedia "Graiul bănățean") ----
Object.assign(RULES,{
  wl_h:{protect:true,ro:"h- inițial slab sau pierdut, și hipercorectare: haină→aină, hoț→oț, aripă→haripă, alea→halea, albii→halbii",en:"weak/lost initial h and hypercorrection: haină→aină, hoț→oț, aripă→haripă, alea→halea, albii→halbii",
    from:"\\b(haină|hoț|aripă|alea|albii)\\b",map:{"haină":"aină","hoț":"oț","aripă":"haripă",alea:"halea",albii:"halbii"},ex:"haină→aină",status:"sourced",src:"EN-WAL"},
  wl_de:{protect:true,ro:"Muntenia: după d, p: e→ă în prepoziții/prefixe: de→dă, decât→dăcât, dintre→dîntre, pe→pă",en:"Muntenia: after d, p: e→ă in prepositions/prefixes: de→dă, decât→dăcât, dintre→dîntre, pe→pă",
    from:"\\b(de|decât|decît|dintre|pe)\\b",map:{de:"dă","decât":"dăcât","decît":"dăcît",dintre:"dîntre",pe:"pă"},ex:"de→dă",status:"sourced",src:"EN-WAL"},
  wl_des:R("Muntenia: prefixul des- → dăs- (despart→dăspart, deschid→dăschid, destupat→dăstupat)","Muntenia: prefix des- → dăs- (despart→dăspart, deschid→dăschid, destupat→dăstupat)","\\bdes(?=[bcdfghjklmnprstvzșț])","dăs","deschid→dăschid","sourced","EN-WAL"),
  wl_p:R("NE și E Muntenia: p+i → pʰʲ (piele→pʰʲiele)","NE and E Muntenia: p+i → pʰʲ (piele→pʰʲiele)","p(?=i)","pʰʲ","piele→pʰʲiele","sourced","EN-WAL"),
  wl_b:R("NE și E Muntenia: b+i → bʰʲ (bine→bʰʲine)","NE and E Muntenia: b+i → bʰʲ","b(?=i)","bʰʲ","bine→bʰʲine","sourced","EN-WAL"),
  wl_f:R("NE și E Muntenia: f+i → fʰʲ (fier→fʰʲier)","NE and E Muntenia: f+i → fʰʲ","f(?=i)","fʰʲ","fier→fʰʲier","sourced","EN-WAL"),
  wl_v:R("NE și E Muntenia: v+i → vʰʲ (vin→vʰʲin)","NE and E Muntenia: v+i → vʰʲ","v(?=i)","vʰʲ","vin→vʰʲin","sourced","EN-WAL"),
  wl_m:R("NE și E Muntenia: m+i → mʲ (miere→mʲiere)","NE and E Muntenia: m+i → mʲ","m(?=i[\\p{L}])","mʲ","miere→mʲiere","sourced","EN-WAL"),
  ol_sea:R("Oltenia: după s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapă→țapă)","Oltenia: after s, z, ș, j, ț: ea→a (seară→sară, zeamă→zamă, țeapă→țapă)","([szșjț])ea","$1a","seară→sară","sourced","EN-WAL"),
  ol_se:R("Oltenia: după s, z, ș, j, ț: e→ă (secure→săcure, zer→zăr)","Oltenia: after s, z, ș, j, ț: e→ă (secure→săcure, zer→zăr)","([szșjț])e","$1ă","secure→săcure","sourced","EN-WAL"),
  ol_si:R("Oltenia: după s, z, ș, j, ț: i→î (singur→sîngur, zic→zîc, jir→jîr, țin→țîn)","Oltenia: after s, z, ș, j, ț: i→î (singur→sîngur, zic→zîc, jir→jîr, țin→țîn)","([szșjț])i","$1î","singur→sîngur","sourced","EN-WAL"),
  ol_j:R("Oltenia: j inserat înaintea lui k palatal (ochi→ojchi, rachiu→rajchiu, strachină→strajchină)","Oltenia: j inserted before palatal k (ochi→ojchi, rachiu→rajchiu, strachină→strajchină)","([aeiouăâî])ch(?=[ei])","$1jch","ochi→ojchi","sourced","EN-WAL"),
  ol_f:R("Sudul Olteniei: f+i → fch (fier→fchier; variantă schier)","Southern Oltenia: f+i → fch (fier→fchier; variant schier)","f(?=i)","fch","fier→fchier","sourced","EN-WAL"),
  ol_v:R("Sudul Olteniei: v+i → vgh (vierme→vghierme; variantă zghierme)","Southern Oltenia: v+i → vgh (vierme→vghierme; variant zghierme)","v(?=i)","vgh","vierme→vghierme","sourced","EN-WAL"),
  tm_c:R("Timoc (ungureni): ce/ci → șʲ (cinci→șʲinșʲ)","Timok (Ungureni): ce/ci → șʲ (cinci→șʲinșʲ)","c(?=[ei])","șʲ","cinci→șʲinșʲi","sourced","RO-BAN, OEAW"),
  tm_t:R("Timoc (ungureni): te/ti → ce/ci (frunte→frunce)","Timok (Ungureni): te/ti → ce/ci (frunte→frunce)","t(?=[ei])","c","frunte→frunce","sourced","RO-BAN, OEAW"),
  tm_de:R("Timoc (ungureni): de intern → ge (unde→unge)","Timok (Ungureni): internal de → ge (unde→unge); word-initial de left alone","(?<=\\p{L})d(?=e)","g","unde→unge","sourced","RO-BAN"),
  tm_di:R("Timoc (ungureni): di → ghi (dinte→ghince)","Timok (Ungureni): di → ghi (dinte→ghince)","d(?=i)","gh","dinte→ghince","sourced","RO-BAN")
});

const MOLD_BASE=["m_dropi","m_ea","m_e","m_i","m_cea","m_gea","m_c","m_g","m_gio"];

const L=a=>a;
export const DIALECTS = {
  muntenesc:   {ro:"Muntenesc (centru, sud)",   en:"Muntenian (central, south)", rules:["wl_h","wl_de","wl_des"], note:"Wallachian is the basis of standard pronunciation: most features are identical to it. Central Muntenian labials stay unpalatalized (EN-WAL)."},
  muntenesc_ne:{ro:"Muntenesc (nord-est, est)", en:"Muntenian (north-east, east)", rules:["wl_h","wl_de","wl_des","wl_p","wl_b","wl_f","wl_v","wl_m"], note:"Labial palatalization here is said to come from recent migrations (EN-WAL)."},
  oltenesc:    {ro:"Oltenesc",    en:"Oltenian", rules:["wl_h","ol_sea","ol_se","ol_si","ol_j"], note:"Typical Oltenian traits are morphological (simple perfect everywhere, căși plurals); only phonetic rules are implemented."},
  oltenesc_sud:{ro:"Oltenesc (sud)", en:"Oltenian (south)", rules:["wl_h","ol_sea","ol_se","ol_si","ol_j","ol_f","ol_v"]},
  moldovenesc: {ro:"Moldovenesc", en:"Moldavian", rules:["m_lex","m_dropi","m_ea","m_e","m_i","m_cea","m_gea","m_c","m_g","m_gio","m_p","m_b","m_f","m_iat","m_eafin","m_afin","m_efin"], note:"f→h is the southern-Moldavia type; northern Moldavia and Bessarabia have f→ș (see Bessarabian)."},
  basarabean:  {ro:"Basarabean",  en:"Bessarabian", rules:["bas_ja","m_lex","m_dropi","bas_ea","m_ea","m_e","m_i","m_cea","m_gea","m_c","m_g","m_gio","m_p","m_b","m_m","bas_f","bas_v","m_iat","m_eafin","m_afin","m_efin"], note:"Based on Spînu 2018 (ALM + 2015-16 field surveys), which stresses that many older features are fading among young speakers."},
  banatean:    {ro:"Bănățean",    en:"Banat", rules:["b_lex","b_ie","b_ea","b_e","b_i","b_c","b_g","b_t","b_d","b_n","b_l","b_r"]},
  crisean:     {ro:"Crișean",     en:"Crișana", rules:["cr_lex","cr_sl","cr_sea","cr_se","cr_si","cr_oa","cr_o","mar_labea","mar_labe","cr_g","cr_p","cr_b","cr_m","cr_f","cr_v","cr_t","cr_d","cr_n"], note:"Many features are variable and stronger in the north; Țara Oașului and Țara Moților have extra local features (not implemented). Unstressed vowel closing needs stress and is not implemented."},
  maramuresean:{ro:"Maramureșean",en:"Maramureș", rules:["mar_lex","mar_sea","mar_se","mar_si","mar_eafin","mar_labea","mar_labe","mar_f","mar_v","mar_p","mar_b","mar_m","mar_oa","mar_n","mar_l"], note:"Few distinctive features; Coteanu treats it as a graiul of a transition zone (Felecan)."},
  ardelenesc:  {ro:"Ardelenesc (trăsături transilvănene comune + nord-est)",en:"Transylvanian (shared features + north-east)", rules:["ar_lex","ar_dorm","ar_sea","ar_se","ar_si","ar_oa","ar_p","ar_b","ar_m","ar_f","ar_v"], note:"Transylvanian is a mosaic of transition varieties (Weigand 1908); labial rules follow the north-east (Bistrița-Năsăud) description only."},
  bucovinean_campulung:{ro:"Bucovinean – Câmpulungean (arhaic)",en:"Bukovinian – Câmpulung (archaic)", rules:["bc_f","bc_p","bc_b","bc_m"], note:"Keeps ce/ci as affricates and does not shift e after s, z, ș, j (TUR-77)."},
  bucovinean_radauti:{ro:"Bucovinean – Rădăuțean",en:"Bukovinian – Rădăuți area", rules:["rd_lex","m_c","m_g","m_p","m_b","m_m","m_afin","m_efin"], note:"Moldavian-type with archaic traits; labial loss in pchi/bghi/mni is recent and variable (TUR-77)."},
  bucovinean_sudest:{ro:"Bucovinean – Sud-est/Dorna (africatizant)",en:"Bukovinian – SE / Dorna (affricating)", rules:["m_c","m_g","se_ch","se_gh","se_t","se_d"], note:"Transylvanian-influenced 18th-century layer (TUR-77); Dorna shares these traits with decreasing frequency toward the south-east."},
  timocean_ungureni:{ro:"Timocean – ungureni (apropiat de bănățean)",en:"Timok – Ungureni (Banat-like)", rules:["tm_c","tm_t","tm_de","tm_di"], note:"Only the t,d and c palatalization differences are sourced; more Banat features probably apply (not verified for Timok)."},
  timocean_tarani:{ro:"Timocean – țărani (apropiat de oltenescul vestic)",en:"Timok – Țărani (Western Oltenian-like)", rules:["ol_sea","ol_se","ol_si","ol_j"], note:"Based on the OEAW statement that Țărani speak like western Oltenia; Timok-specific data not yet found."},
  totoiana:    {ro:"Totoiana (limbă inversată)", en:"Totoiana (inverted speech)", special:"totoiana", rules:[], note:"Not a dialect: a word-inversion game from Totoi (Alba)."}
};
