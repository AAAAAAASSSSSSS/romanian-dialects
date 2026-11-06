(() => {
  // js/dialects.js
  var D = (group, ro, en, rules, area, note, extra = {}) => ({ group, ro, en, rules, area, note, ...extra });
  var GROUPS = {
    muntenia: { ro: "Muntenia \u0219i Oltenia (graiul muntean)", en: "Muntenia and Oltenia (Wallachian)" },
    moldova: { ro: "Moldova (Rom\xE2nia)", en: "Moldavia (Romania)" },
    basarabia: { ro: "Basarabia (Republica Moldova)", en: "Bessarabia (Republic of Moldova)" },
    bucovina: { ro: "Bucovina", en: "Bukovina" },
    banat: { ro: "Banat", en: "Banat" },
    crisana: { ro: "Cri\u0219ana", en: "Cri\u0219ana" },
    maramures: { ro: "Maramure\u0219", en: "Maramure\u0219" },
    transilvania: { ro: "Transilvania", en: "Transylvania" },
    timoc: { ro: "Valea Timocului (Serbia)", en: "Timok Valley (Serbia)" },
    joc: { ro: "Joc de cuvinte", en: "Word game" }
  };
  var M_END = ["m_iat", "m_eafin", "m_afin", "m_efin"];
  var BAS = ["m_lex", "m_gio", "bas_ja", "m_dropi", "m_cea", "m_gea", "bas_ea", "m_ea", "m_e", "m_i", "m_re", "m_c", "m_g", "m_p", "m_b", "m_m", "bas_f", "bas_v", ...M_END];
  var RAD = ["rd_lex", "m_c", "m_g", "rd_f", "rd_v", "m_p", "m_b", "m_m", "m_afin", "m_efin"];
  var BAN = ["b_lex", "b_ie", "b_ea", "b_e", "b_i", "b_c", "b_g", "b_t", "b_d", "b_n", "b_l", "b_r"];
  var CRI = ["cr_lex", "cr_sl", "cr_sea", "cr_se", "cr_si", "cr_o", "cr_oa", "mar_labea", "mar_labe", "cr_g", "cr_p", "cr_b", "cr_m", "cr_f", "cr_v", "cr_t", "cr_d", "cr_n"];
  var OLT = ["wl_h", "wl_h2", "ol_sea", "ol_se", "ol_si", "ol_j"];
  var ARD = ["ar_lex", "ar_dorm", "ar_sea", "ar_se", "ar_si", "ar_oa"];
  var DIALECTS = {
    muntenesc: D(
      "muntenia",
      "Muntenesc (centru \u0219i sud)",
      "Muntenian (centre and south)",
      ["wl_h", "wl_h2", "wl_prep", "wl_prep2", "wl_des"],
      { ro: "Muntenia central\u0103 \u0219i sudic\u0103: Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt, Teleorman, Ilfov, Bucure\u0219ti, Prahova.", en: "Central and southern Muntenia: Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt, Teleorman, Ilfov, Bucharest, Prahova." },
      {
        ro: "Rom\xE2na standard are la baz\u0103 acest grai, deci difer\u0103 pu\u021Bin de ea. Aici se schimb\u0103: h- de la \xEEnceput de cuv\xE2nt (hain\u0103\u2192ain\u0103, arip\u0103\u2192harip\u0103), \u201Ede/pe/pentru\u201D devin d\u0103/p\u0103/p\u0103ntru, \u0219i prefixul des- devine d\u0103s-. Nu am g\u0103sit nicio diferen\u021B\u0103 \xEEntre centrul \u0219i sudul Munteniei \xEEn sursele citite, de aceea sunt o singur\u0103 pagin\u0103.",
        en: "Standard Romanian is largely based on this variety, so it differs little from it. What changes here: word-initial h (hain\u0103\u2192ain\u0103, arip\u0103\u2192harip\u0103), \u201Cde/pe/pentru\u201D become d\u0103/p\u0103/p\u0103ntru, and the prefix des- becomes d\u0103s-. I found no difference between central and southern Muntenia in the sources I read, which is why they share one page."
      }
    ),
    muntenesc_ne: D(
      "muntenia",
      "Muntenesc (nord-est \u0219i est)",
      "Muntenian (north-east and east)",
      ["wl_h", "wl_h2", "wl_prep", "wl_prep2", "wl_des", "wl_p", "wl_b", "wl_f", "wl_v", "wl_m"],
      { ro: "Nord-estul \u0219i estul Munteniei (spre Moldova: nordul Buz\u0103ului \u0219i al Br\u0103ilei).", en: "North-eastern and eastern Muntenia (towards Moldavia: northern Buz\u0103u and Br\u0103ila)." },
      { ro: "La fel ca Muntenia central\u0103, plus consoanele p, b, f, v, m urmate de i sunt \u201Emuiate\u201D (piele \u2192 p\u02B0\u02B2iele). Sursa spune c\u0103 aceasta vine din migra\u021Bii recente.", en: "Same as central Muntenia, plus p, b, f, v, m before i are softened (piele \u2192 p\u02B0\u02B2iele). The source says this comes from recent migrations." }
    ),
    oltenesc: D(
      "muntenia",
      "Oltenesc (nord, centru, vest)",
      "Oltenian (north, centre, west)",
      OLT,
      { ro: "Oltenia: Dolj, Gorj (partea estic\u0103), Mehedin\u021Bi (est), Olt, V\xE2lcea. Sursa nu desparte nordul de centru.", en: "Oltenia: Dolj, Gorj (east), Mehedin\u021Bi (east), Olt, V\xE2lcea. The source does not separate north from centre." },
      {
        ro: "Dup\u0103 s, z, \u0219, j, \u021B vocalele se schimb\u0103 (sear\u0103\u2192sar\u0103, singur\u2192s\xEEngur, zer\u2192z\u0103r) \u0219i apare un j \xEEnaintea lui \u201Echi\u201D (ochi\u2192ojchi). Tr\u0103s\u0103turile cele mai cunoscute ale Olteniei (perfectul simplu, plural c\u0103\u0219i) sunt gramaticale \u0219i nu sunt reprezentate aici.",
        en: "After s, z, \u0219, j, \u021B the vowels change (sear\u0103\u2192sar\u0103, singur\u2192s\xEEngur, zer\u2192z\u0103r) and a j appears before \u201Cchi\u201D (ochi\u2192ojchi). Oltenia's best-known traits (the simple perfect, plural c\u0103\u0219i) are grammatical and not represented here."
      }
    ),
    oltenesc_sud: D(
      "muntenia",
      "Oltenesc (sud)",
      "Oltenian (south)",
      [...OLT, "ol_f", "ol_v"],
      { ro: "Sudul Olteniei.", en: "Southern Oltenia." },
      { ro: "Ca Oltenia general\u0103, plus f \u0219i v \xEEnaintea lui i primesc un k/g muiat (fier\u2192fchier, vierme\u2192vghierme).", en: "Like general Oltenia, plus f and v before i get a soft k/g (fier\u2192fchier, vierme\u2192vghierme)." }
    ),
    moldovenesc_nord: D(
      "moldova",
      "Moldovenesc (nord)",
      "Moldavian (north)",
      ["m_lex", "m_dz", "mn_hv", "m_lov", "m_dropi", "m_ea", "m_e", "m_i", "m_cea", "m_gea", "m_c", "m_g", "m_p", "m_b", "mn_f", "mn_v", ...M_END],
      { ro: "Jum\u0103tatea de nord a Moldovei istorice din Rom\xE2nia (Boto\u0219ani, Suceava est, Ia\u0219i nord, Neam\u021B nord).", en: "Northern half of historical Moldavia in Romania (Boto\u0219ani, east Suceava, north Ia\u0219i, north Neam\u021B)." },
      {
        ro: "Tr\u0103s\u0103turile moldovene\u0219ti comune (ce/ci\u2192\u0219e/\u0219i, pi\u2192chi, bi\u2192ghi, e\u2192\u0103 dup\u0103 s/\u0219/z/j/\u021B, -\u0103 final\u2192\xEE), plus \xEEn nord: f\u2192\u0219 (fierbe\u2192\u0219ierbe), v\u2192j (vi\u021Bel\u2192ji\u021Bel) \u0219i v\u2192h \xEEn volbur\u0103/vulpe/vultan. Sursa (Wikipedia, edi\u021Bia actual\u0103) \xEEmparte f/v dup\u0103 nord/sud; la Creang\u0103 (Neam\u021B) \xEEns\u0103 apare f\u2192h, deci grani\u021Ba nu e clar\u0103.",
        en: "The common Moldavian features (ce/ci\u2192\u0219e/\u0219i, pi\u2192chi, bi\u2192ghi, e\u2192\u0103 after s/\u0219/z/j/\u021B, final -\u0103\u2192\xEE), plus in the north: f\u2192\u0219 (fierbe\u2192\u0219ierbe), v\u2192j (vi\u021Bel\u2192ji\u021Bel) and v\u2192h in volbur\u0103/vulpe/vultan. The source (Wikipedia, current revision) splits f/v by north/south; but Creang\u0103 (Neam\u021B) has f\u2192h, so the border is not clean."
      }
    ),
    moldovenesc_sud: D(
      "moldova",
      "Moldovenesc (sud, \u0219i Neam\u021B dup\u0103 Creang\u0103)",
      "Moldavian (south, and Neam\u021B as in Creang\u0103)",
      ["m_lex", "m_dz", "m_lov", "m_dropi", "m_ea", "m_e", "m_i", "m_cea", "m_gea", "m_c", "m_g", "m_p", "m_b", "ms_f", "ms_v", ...M_END],
      { ro: "Jum\u0103tatea de sud a Moldovei din Rom\xE2nia (Bac\u0103u, Vaslui, Gala\u021Bi, Vrancea) \u2014 plus Neam\u021B, unde C\u0103prioar\u0103 (2002) g\u0103se\u0219te f\u2192h la Creang\u0103.", en: "Southern half of Moldavia in Romania (Bac\u0103u, Vaslui, Gala\u021Bi, Vrancea) \u2014 plus Neam\u021B, where C\u0103prioar\u0103 (2002) finds f\u2192h in Creang\u0103." },
      { ro: "Acelea\u0219i tr\u0103s\u0103turi comune, dar f\u2192h (fierbe\u2192hierbe) \u0219i v\u2192\u0125 (un h sonor, vi\u021Bel\u2192\u0125i\u021Bel). Aten\u021Bie: la Creang\u0103 sursa confirm\u0103 doar f\u2192h, nu \u0219i v.", en: "The same common features, but f\u2192h (fierbe\u2192hierbe) and v\u2192\u0125 (a voiced h, vi\u021Bel\u2192\u0125i\u021Bel). Note: for Creang\u0103 the source confirms only f\u2192h, not v." }
    ),
    basarabean_centru: D(
      "basarabia",
      "Basarabean (centru)",
      "Bessarabian (centre)",
      BAS,
      { ro: "Cea mai mare parte a Republicii Moldova \u0219i par\u021Bial Transnistria (grupul \u201Ecentral\u201D al lui Udler, ALM 1968). Sp\xEEnu 2018 a ref\u0103cut ancheta \xEEn 34 de localit\u0103\u021Bi din re\u021Beaua ALM, \xEEn 2015\u20132016.", en: "Most of the Republic of Moldova and part of Transnistria (Udler's \u201Ccentral\u201D group, ALM 1968). Sp\xEEnu 2018 repeated the survey in 34 ALM localities in 2015\u20132016." },
      {
        ro: "Tr\u0103s\u0103turile moldovene\u0219ti comune, plus: a dup\u0103 \u0219/j \u2192 \u0103 (\u0219arpe\u2192\u0219\u0103rpe), ea\u2192a \xEEnaintea unui a/\u0103 (mearg\u0103\u2192marg\u0103), labialele \xEEn stadiul final (fi\u2192\u0219i, vi\u2192ji, mi\u2192ni, pi\u2192chi, bi\u2192ghi) \u0219i j\u2192gios/gioc. Mul\u021Bi tineri folosesc deja forma literar\u0103.",
        en: "The common Moldavian features, plus: a after \u0219/j \u2192 \u0103 (\u0219arpe\u2192\u0219\u0103rpe), ea\u2192a before an a/\u0103 (mearg\u0103\u2192marg\u0103), labials in their final stage (fi\u2192\u0219i, vi\u2192ji, mi\u2192ni, pi\u2192chi, bi\u2192ghi) and jos\u2192gios. Many young speakers already use the standard form."
      }
    ),
    basarabean_nordest: D(
      "basarabia",
      "Basarabean (nord-est: Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari)",
      "Bessarabian (north-east: Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari)",
      ["ne_lex", "m_lex", "m_gio", "bas_ja", "m_dropi", "ne_cea", "ne_gea", "bas_ea", "m_ea", "m_e", "m_i", "m_re", "ne_c", "ne_g", "m_p", "m_b", "m_m", "bas_f", "bas_v", ...M_END],
      { ro: "Nord-estul Republicii Moldova, pe linia Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari, \u0219i raionul Kotovsk (reg. Odesa, Ucraina). Sp\xEEnu 2009.", en: "North-eastern Republic of Moldova, along the Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari line, and Kotovsk district (Odesa region, Ukraine). Sp\xEEnu 2009." },
      {
        ro: "Ca Basarabia central\u0103, dar ce/ci/ge/gi dau o fricativ\u0103 muiat\u0103 (cinci\u2192\u0219\u02B2in\u0219\u02B2), iar c\xE2teva cuvinte au forme proprii: ou\u0103\u2192oau\u0103, guler\u2192guliar, nepot\u2192niapot, s\u0103\u2192s\xEE. Sursa spune c\u0103 aici se \xEEntretaie tr\u0103s\u0103turi moldovene\u0219ti \u0219i maramure\u0219ene.",
        en: "Like central Bessarabia, but ce/ci/ge/gi give a soft fricative (cinci\u2192\u0219\u02B2in\u0219\u02B2), and a few words have their own forms: ou\u0103\u2192oau\u0103, guler\u2192guliar, nepot\u2192niapot, s\u0103\u2192s\xEE. The source says Moldavian and Maramure\u0219 traits cross here."
      }
    ),
    basarabean_nordvest: D(
      "basarabia",
      "Basarabean (nord-vest)",
      "Bessarabian (north-west)",
      ["nv_lex", ...BAS],
      { ro: "Nord-vestul Republicii Moldova, nordul Bucovinei (regiunea Cern\u0103u\u021Bi), \u021Binutul Her\u021Ba, fostul jude\u021B Hotin (grupul \u201Enord-vest\u201D al lui Udler).", en: "North-western Republic of Moldova, northern Bukovina (Chernivtsi region), Her\u021Ba, former Hotin county (Udler's \u201Cnorth-west\u201D group)." },
      { ro: "Ca Basarabia central\u0103, plus o diftongare a lui o \xEEn ou\u0103\u2192oau\u0103, rou\u0103\u2192roau\u0103, nou\u0103\u2192noau\u0103, plou\u0103\u2192ploau\u0103. Singura diferen\u021B\u0103 sursat\u0103 pe care o pot reda.", en: "Like central Bessarabia, plus o diphthongized in ou\u0103\u2192oau\u0103, rou\u0103\u2192roau\u0103, nou\u0103\u2192noau\u0103, plou\u0103\u2192ploau\u0103. The only sourced difference I can render." }
    ),
    basarabean_sudvest: D(
      "basarabia",
      "Basarabean (sud-vest: Cahul\u2013Ismail)",
      "Bessarabian (south-west: Cahul\u2013Ismail)",
      BAS.filter((r) => !["m_cea", "m_gea", "m_c", "m_g"].includes(r)),
      { ro: "Extremitatea sud-vestic\u0103 a Basarabiei, aproximativ de la Cahul la Ismail, Chilia \u0219i V\xE2lcov (grupul \u201Esud-vest\u201D al lui Udler). Co\u0219eriu o vede ca vorbire de tip muntean.", en: "Far south-west of Bessarabia, roughly from Cahul to Ismail, Kilia and Vylkove (Udler's \u201Csouth-west\u201D group). Co\u0219eriu sees it as Muntenian-type speech." },
      {
        ro: "Ca Basarabia central\u0103, dar africatele ce/ci/ge/gi r\u0103m\xE2n africate (ca \xEEn limba standard), f\u0103r\u0103 \u0219e/\u0219i. ATEN\u021AIE: aceasta este o deduc\u021Bie dintr-o singur\u0103 propozi\u021Bie (Sp\xEEnu 2009: \xEEn restul masivului moldovenesc, \u201Ecu excep\u021Bia graiurilor de sud-vest\u201D, se aude \u0219/j). Cartea lui Sp\xEEnu despre sud-vest (2002) nu am putut-o citi.",
        en: "Like central Bessarabia, but ce/ci/ge/gi stay affricates (as in standard Romanian), with no \u0219e/\u0219i. CAUTION: this is inferred from a single sentence (Sp\xEEnu 2009: in the rest of the Moldavian block, \u201Cexcept the south-western speech\u201D, \u0219/j are heard). I could not read Sp\xEEnu's book on the south-west (2002)."
      }
    ),
    bucovinean_campulung: D(
      "bucovina",
      "Bucovinean \u2013 C\xE2mpulung (arhaic)",
      "Bukovinian \u2013 C\xE2mpulung (archaic)",
      ["bc_f", "bc_v", "bc_p", "bc_b", "bc_m"],
      { ro: "C\xE2mpulung Moldovenesc, de-a lungul Moldovei p\xE2n\u0103 l\xE2ng\u0103 Gura Humorului, Moldovi\u021Ba, Sucevi\u021Ba, valea Sucevei (Doroteia, Stulpicani, Ostra). Turcule\u021B 1977\u201378.", en: "C\xE2mpulung Moldovenesc, along the Moldova river to near Gura Humorului, Moldovi\u021Ba, Sucevi\u021Ba and the Suha valley (Doroteia, Stulpicani, Ostra). Turcule\u021B 1977\u201378." },
      {
        ro: "Cel mai arhaic grai din Bucovina. P\u0103streaz\u0103 africatele ce/ci (nu le face \u0219), nu schimb\u0103 e dup\u0103 s/z/\u0219/j (rece, \u0219ed), muiaz\u0103 f \u0219i v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel) \u0219i p\u0103streaz\u0103 labiala \xEEn grupuri vechi (piele\u2192pchiele, bine\u2192bghine, mic\u2192mnic).",
        en: "The most archaic Bukovinian speech. It keeps ce/ci as affricates (not \u0219), leaves e unchanged after s/z/\u0219/j (rece, \u0219ed), softens f and v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel) and keeps the labial in old groups (piele\u2192pchiele, bine\u2192bghine, mic\u2192mnic)."
      }
    ),
    bucovinean_campulung_nv: D(
      "bucovina",
      "Bucovinean \u2013 C\xE2mpulung nord-vest (Pojor\xE2ta, Fundu Moldovei)",
      "Bukovinian \u2013 north-west C\xE2mpulung (Pojor\xE2ta, Fundu Moldovei)",
      ["pal_t", "pal_d", "bc_f", "bc_v", "bc_p", "bc_b", "bc_m", "m_afin", "m_efin"],
      { ro: "Pojor\xE2ta \u0219i Fundu Moldovei (Delu\u021B), cap\u0103tul nord-vestic al zonei C\xE2mpulung; \u0219i Vatra Moldovi\u021Bei pentru \xEEnchiderea vocalelor finale.", en: "Pojor\xE2ta and Fundu Moldovei (Delu\u021B), the north-western end of the C\xE2mpulung area; also Vatra Moldovi\u021Bei for the closing of final vowels." },
      {
        ro: "Ca C\xE2mpulungul, plus influen\u021Be ardelene\u0219ti-maramure\u0219ene mai noi: t, d \xEEnaintea lui e/i sunt u\u0219or muiate (frate\u2192frat\u02B2e). \xCEn acela\u0219i timp, vocalele finale se \xEEnchid tot mai des (mam\u0103\u2192mam\xEE, lapte\u2192lapti). Turcule\u021B noteaz\u0103 c\u0103 muierea dentalelor a sc\u0103zut mult fa\u021B\u0103 de anchetele din anii 1930.",
        en: "Like C\xE2mpulung, plus newer Transylvanian\u2013Maramure\u0219 influences: t, d before e/i are lightly softened (frate\u2192frat\u02B2e). At the same time final vowels close more and more often (mam\u0103\u2192mam\xEE, lapte\u2192lapti). Turcule\u021B notes that dental softening has dropped a lot since the 1930s surveys."
      }
    ),
    bucovinean_dornean: D(
      "bucovina",
      "Bucovinean \u2013 \u021Aara Dornelor",
      "Bukovinian \u2013 \u021Aara Dornelor (Dorna)",
      ["se_ch", "se_gh", "pal_t", "pal_d"],
      { ro: "\u021Aara Dornelor, p\xE2n\u0103 la Cioc\u0103ne\u0219ti, Valea Putnei, Chiril, Cojoci, Crucea, P\u0103ltini\u0219.", en: "\u021Aara Dornelor, as far as Cioc\u0103ne\u0219ti, Valea Putnei, Chiril, Cojoci, Crucea, P\u0103ltini\u0219." },
      {
        ro: "Zon\u0103 de tranzi\u021Bie \xEEntre nord-estul Transilvaniei \u0219i Moldova. Au ajuns aici africatizarea lui chi/ghi (ochi\u2192oci, ghea\u021B\u0103\u2192gea\u021B\u0103) \u0219i muierea dentalelor (frate\u2192frat\u02B2e); frecven\u021Ba lor scade de la nord-vest spre sud-est (la Co\u0219na sunt generale, la Crucea sporadice).",
        en: "A transition zone between north-east Transylvania and Moldavia. Africatization of chi/ghi (ochi\u2192oci, ghea\u021B\u0103\u2192gea\u021B\u0103) and softening of dentals (frate\u2192frat\u02B2e) reached here; their frequency drops from north-west to south-east (general at Co\u0219na, sporadic at Crucea)."
      }
    ),
    bucovinean_cosna: D(
      "bucovina",
      "Bucovinean \u2013 Dorna, Co\u0219na",
      "Bukovinian \u2013 Dorna, Co\u0219na",
      ["dn_a", "se_ch", "se_gh", "pal_t", "pal_d"],
      { ro: "Co\u0219na (Dorna Candrenilor), Poiana Stampei.", en: "Co\u0219na (Dorna Candrenilor), Poiana Stampei." },
      { ro: "Ca Dorna, plus a de dinaintea accentului \u2192 \u0103, ca \xEEn Transilvania (pahar\u2192p\u0103har, capac\u2192c\u0103pac). \xCEn restul Bucovinei se \xEEnt\xE2mpl\u0103 invers: \u0103\u2192a.", en: "Like Dorna, plus a before the stress \u2192 \u0103, as in Transylvania (pahar\u2192p\u0103har, capac\u2192c\u0103pac). In the rest of Bukovina the reverse happens: \u0103\u2192a." }
    ),
    bucovinean_radauti: D(
      "bucovina",
      "Bucovinean \u2013 R\u0103d\u0103u\u021Bean",
      "Bukovinian \u2013 R\u0103d\u0103u\u021Bi area",
      RAD,
      { ro: "Valea Sucevei \u0219i zona R\u0103d\u0103u\u021Bi\u2013Siret\u2013Solca\u2013Suceava (Marginea, Volov\u0103\u021B, Fr\u0103t\u0103u\u021Bii Vechi, Gr\u0103nice\u0219ti, Gr\u0103me\u0219ti, Gemenea, Doroteia).", en: "Suceava valley and the R\u0103d\u0103u\u021Bi\u2013Siret\u2013Solca\u2013Suceava zone (Marginea, Volov\u0103\u021B, Fr\u0103t\u0103u\u021Bii Vechi, Gr\u0103nice\u0219ti, Gr\u0103me\u0219ti, Gemenea, Doroteia)." },
      {
        ro: "Grai moldovenesc cu tr\u0103s\u0103turi arhaice \u0219i straturi ardelene\u0219ti. Ca \xEEn Moldova: ce/ci\u2192\u0219e/\u0219i, f\u2192\u0219, v\u2192j, -\u0103\u2192\xEE, -e\u2192i; labiala din pchi/bghi/mni s-a pierdut (piele\u2192chiele, bine\u2192ghine, mic\u2192nic) \u2014 recent \u0219i variabil. Cuvinte proprii: dup\u0103\u2192dipi, viespe\u2192zespe.",
        en: "A Moldavian speech with archaic traits and Transylvanian layers. As in Moldavia: ce/ci\u2192\u0219e/\u0219i, f\u2192\u0219, v\u2192j, -\u0103\u2192\xEE, -e\u2192i; the labial in pchi/bghi/mni is lost (piele\u2192chiele, bine\u2192ghine, mic\u2192nic) \u2014 recent and variable. Own words: dup\u0103\u2192dipi, viespe\u2192zespe."
      }
    ),
    bucovinean_sucevei: D(
      "bucovina",
      "Bucovinean \u2013 valea superioar\u0103 a Sucevei",
      "Bukovinian \u2013 upper Suceava valley",
      [...RAD, "se_ch", "se_gh"],
      { ro: "Straja, Vicovu de Sus, Vicovu de Jos, G\u0103l\u0103ne\u0219ti, Bilca, Fr\u0103t\u0103u\u021Bii Noi (nord-estul Bucovinei).", en: "Straja, Vicovu de Sus, Vicovu de Jos, G\u0103l\u0103ne\u0219ti, Bilca, Fr\u0103t\u0103u\u021Bii Noi (north-east Bukovina)." },
      { ro: "Ca R\u0103d\u0103u\u021Beanul, plus africatizarea lui chi/ghi (ochi\u2192oci, ghia\u021B\u0103\u2192gea\u021B\u0103), adus\u0103 de ardeleni stabili\u021Bi aici \xEEn secolul al XVIII-lea.", en: "Like the R\u0103d\u0103u\u021Bi area, plus africatization of chi/ghi (ochi\u2192oci, ghia\u021B\u0103\u2192gea\u021B\u0103), brought by Transylvanians who settled here in the 18th century." }
    ),
    bucovinean_sudest: D(
      "bucovina",
      "Bucovinean \u2013 sud-est (\u201Eafricatizant\u201D)",
      "Bukovinian \u2013 south-east (\u201Cafricatizing\u201D)",
      ["m_c", "m_g", "se_ch", "se_gh", "se_t", "se_d"],
      { ro: "Gura Humorului\u2013M\u0103n\u0103stirea Humorului\u2013P\u0103ltinoasa\u2013Dr\u0103goie\u0219ti\u2013\u0218cheia\u2013Ili\u0219e\u0219ti\u2013Boto\u0219ana, apoi spre sud (Boroaia, Liteni, Preute\u0219ti, Dolhe\u0219ti) p\xE2n\u0103 la T\u0103t\u0103ru\u0219i (Ia\u0219i). Satele sunt un mozaic: unele vecine vorbesc diferit.", en: "Gura Humorului\u2013M\u0103n\u0103stirea Humorului\u2013P\u0103ltinoasa\u2013Dr\u0103goie\u0219ti\u2013\u0218cheia\u2013Ili\u0219e\u0219ti\u2013Boto\u0219ana, then south (Boroaia, Liteni, Preute\u0219ti, Dolhe\u0219ti) to T\u0103t\u0103ru\u0219i (Ia\u0219i). The villages form a mosaic: neighbours may speak differently." },
      { ro: "Nord-vestul Transilvaniei a venit aici \xEEn sec. XVIII. ce/ci\u2192\u0219e/\u0219i, dar chi/ghi \u2192 ci/gi \u0219i t, d \xEEnaintea lui e/i \u2192 c, g (frunte\u2192frunce, dinte\u2192gince). \u201EAfricatizant\u201D = vechile consoane muiate redevin africate.", en: "North-west Transylvanian settlers arrived here in the 18th century. ce/ci\u2192\u0219e/\u0219i, but chi/ghi \u2192 ci/gi and t, d before e/i \u2192 c, g (frunte\u2192frunce, dinte\u2192gince). \u201CAfricatizing\u201D = the old softened consonants become affricates again." }
    ),
    bucovinean_insule: D(
      "bucovina",
      "Bucovinean \u2013 insule vechi (Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na, Zvori\u0219tea)",
      "Bukovinian \u2013 old islands (Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na, Zvori\u0219tea)",
      ["bc_f", "bc_v"],
      { ro: "Sate din jurul Sucevei care au p\u0103strat tipul vechi, c\xE2mpulungean. Zvori\u0219tea e \xEEn Moldova (jud. Suceava).", en: "Villages around Suceava that kept the old C\xE2mpulung type. Zvori\u0219tea is just across the line in Moldavia (Suceava county)." },
      {
        ro: "P\u0103streaz\u0103 africatele ce/ci (nu \u0219) \u0219i muiaz\u0103 f, v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel). Sunt \u201Emartori de eroziune\u201D ai unei arii vechi comune cu C\xE2mpulungul (Turcule\u021B). Sursa spune c\u0103 fricativele \u0219, z apar totu\u0219i sporadic, sub influen\u021Ba vecinilor.",
        en: "They keep ce/ci as affricates (not \u0219) and soften f, v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel). They are \u201Cerosion witnesses\u201D of an old area shared with C\xE2mpulung (Turcule\u021B). The source says the fricatives \u0219, z still appear sporadically, under neighbour influence."
      }
    ),
    banatean: D(
      "banat",
      "B\u0103n\u0103\u021Bean",
      "Banat",
      BAN,
      { ro: "Cara\u0219-Severin, Timi\u0219, sudul Aradului \u0219i al Hunedoarei, Banatul s\xE2rbesc. Zon\u0103 de tranzi\u021Bie spre graiul muntean \xEEn nord-vestul Olteniei (Gorj, Mehedin\u021Bi).", en: "Cara\u0219-Severin, Timi\u0219, southern Arad and Hunedoara, Serbian Banat. A transition zone towards Wallachian in north-west Oltenia (Gorj, Mehedin\u021Bi)." },
      {
        ro: "Cel mai \u201Edeparte\u201D de rom\xE2n\u0103 dintre graiuri, ca sunet: t, d, n, l, r se muiaz\u0103 \xEEnaintea lui e/i (frunte\u2192frun\u0107e, vine\u2192vi\u0144e), ce/ci devin \u0219\u02B2e/\u0219\u02B2i, ie dup\u0103 labial\u0103 devine e (fier\u2192fer), iar e/i/ea dup\u0103 s/z/\u0219/j/\u021B devin \u0103/\xEE/a (singur\u2192s\xEEngur). \xCEn c\xE2teva cuvinte se p\u0103streaz\u0103 dz (zece\u2192dz\u0103\u0219\u02B2e).",
        en: "The sound system furthest from standard Romanian: t, d, n, l, r soften before e/i (frunte\u2192frun\u0107e, vine\u2192vi\u0144e), ce/ci become \u0219\u02B2e/\u0219\u02B2i, ie after a labial becomes e (fier\u2192fer), and e/i/ea after s/z/\u0219/j/\u021B become \u0103/\xEE/a (singur\u2192s\xEEngur). A few words keep dz (zece\u2192dz\u0103\u0219\u02B2e)."
      }
    ),
    banatean_sudvest: D(
      "banat",
      "B\u0103n\u0103\u021Bean \u2013 sud-vest",
      "Banat \u2013 south-west",
      ["b_sw", ...BAN],
      { ro: "Sud-vestul Banatului (studiul diacronia A12911; nota lui Petrovici despre luvat).", en: "South-west Banat (diacronia A12911 study; Petrovici's note on luvat)." },
      { ro: "Ca Banatul, plus c\xE2teva forme proprii: luat\u2192luvat, caut\u2192capt. Sursele mai noteaz\u0103 aici prefixe de aspect verbal (a dog\u0103ta, a z\u0103uita), neredate \xEEn aceast\u0103 aplica\u021Bie.", en: "Like Banat, plus a few own forms: luat\u2192luvat, caut\u2192capt. The sources also note verbal-aspect prefixes here (a dog\u0103ta, a z\u0103uita), not rendered in this app." }
    ),
    crisean: D(
      "crisana",
      "Cri\u0219ean",
      "Cri\u0219ana",
      CRI,
      { ro: "Bihor, S\u0103laj, Satu Mare, nord-vestul Albei, vestul Clujului, nordul Aradului, nordul Hunedoarei, sud-vestul Maramure\u0219ului.", en: "Bihor, S\u0103laj, Satu Mare, north-west Alba, west Cluj, north Arad, north Hunedoara, south-west Maramure\u0219." },
      {
        ro: "Ce/ci r\u0103m\xE2n africate, dar ge/gi\u2192je/ji; oa\u2192o (poate\u2192pote); dup\u0103 s/z/\u021B e/i/ea se schimb\u0103; labialele \u0219i dentalele se muiaz\u0103 \xEEnaintea lui i/e (piele\u2192ptiele, frate\u2192frat\u02B2e). Multe sunt variabile \u0219i mai puternice \xEEn nord. O singur\u0103 surs\u0103 detaliat\u0103 (Wikipedia + Sp\xEEnu 2015, prin ea).",
        en: "Ce/ci stay affricates, but ge/gi\u2192je/ji; oa\u2192o (poate\u2192pote); e/i/ea change after s/z/\u021B; labials and dentals soften before i/e (piele\u2192ptiele, frate\u2192frat\u02B2e). Many features are variable and stronger in the north. One detailed source only (Wikipedia + Sp\xEEnu 2015, through it)."
      }
    ),
    crisean_moti: D(
      "crisana",
      "Cri\u0219ean \u2013 \u021Aara Mo\u021Bilor",
      "Cri\u0219ana \u2013 \u021Aara Mo\u021Bilor",
      ["cr_moti", ...CRI],
      { ro: "\u021Aara Mo\u021Bilor (Mun\u021Bii Apuseni). Nu e inclus\u0103 \xEEn Atlasul Cri\u0219anei.", en: "\u021Aara Mo\u021Bilor (Apuseni Mountains). Not included in the Cri\u0219ana atlas." },
      { ro: "Ca Cri\u0219ana, plus n \xEEntre vocale devine r \xEEn cuvinte vechi (oameni\u2192wamiri, lumin\u0103\u2192lumnir\u0103).", en: "Like Cri\u0219ana, plus intervocalic n becomes r in old words (oameni\u2192wamiri, lumin\u0103\u2192lumnir\u0103)." }
    ),
    crisean_oas: D(
      "crisana",
      "Cri\u0219ean \u2013 \u021Aara Oa\u0219ului",
      "Cri\u0219ana \u2013 \u021Aara Oa\u0219ului",
      [...CRI, "cr_oas"],
      { ro: "\u021Aara Oa\u0219ului (Satu Mare). Uri\u0163escu o consider\u0103 foarte bine caracterizat\u0103; analiza statistic\u0103 o integreaz\u0103 totu\u0219i \xEEn Cri\u0219ana.", en: "\u021Aara Oa\u0219ului (Satu Mare). Uri\u0163escu considers it very well characterized; his statistical analysis nonetheless integrates it into Cri\u0219ana." },
      { ro: "Ca Cri\u0219ana, plus l \xEEnaintea unei consoane se \u201E\xEEngroa\u0219\u0103\u201D (alb\u2192a\u0142b). Oa\u0219ul difer\u0103 mai mult (r cu vibra\u021Bii multiple etc.) dar restul nu poate fi redat \xEEn scris.", en: "Like Cri\u0219ana, plus l before a consonant becomes \u201Cdark\u201D (alb\u2192a\u0142b). Oa\u0219 differs more (multiply-trilled r etc.) but the rest cannot be rendered in writing." }
    ),
    maramuresean: D(
      "maramures",
      "Maramure\u0219ean",
      "Maramure\u0219",
      ["mar_lex", "mar_sea", "mar_se", "mar_si", "mar_eafin", "mar_labea", "mar_labe", "mar_f", "mar_v", "mar_p", "mar_b", "mar_m", "mar_oa", "mar_n", "mar_l"],
      { ro: "Maramure\u0219ul istoric. Sursa \xEEl \xEEmparte \xEEn trei: partea central\u0103 (cea mai reprezentativ\u0103), nord-vestul (influen\u021Be din Oa\u0219) \u0219i sud-estul \u2014 dar dup\u0103 tr\u0103s\u0103turi mai ales lexicale, deci nu am pagini separate.", en: "Historical Maramure\u0219. The source divides it in three: the wide central part (most representative), the north-west (Oa\u0219 influence) and the south-east \u2014 but by mostly lexical features, so I have no separate pages." },
      { ro: "Pu\u021Bine tr\u0103s\u0103turi proprii; multe sunt comune cu Cri\u0219ana. f, v \xEEnaintea lui i \u2192 s, z (fie\u2192sie); p, b, m \u2192 pt, bd, mn; zi\u2192dz\xEE, zic\u2192dz\xEEc; dup\u0103 s/z/\u0219/j/\u021B vocalele se schimb\u0103; oa\u2192o; -ea final\u2192\xE9.", en: "Few features of its own; many shared with Cri\u0219ana. f, v before i \u2192 s, z (fie\u2192sie); p, b, m \u2192 pt, bd, mn; zi\u2192dz\xEE, zic\u2192dz\xEEc; vowels change after s/z/\u0219/j/\u021B; oa\u2192o; final -ea\u2192\xE9." }
    ),
    ardelenesc: D(
      "transilvania",
      "Ardelenesc (tr\u0103s\u0103turi comune)",
      "Transylvanian (shared features)",
      ARD,
      { ro: "Transilvania \xEEn ansamblu: un mozaic de graiuri de tranzi\u021Bie (Weigand 1908). Sursele mai deosebesc o zon\u0103 nord-estic\u0103 \u0219i una central-sudic\u0103, dar pentru zona central-sudic\u0103 nu am g\u0103sit tr\u0103s\u0103turi proprii.", en: "Transylvania as a whole: a mosaic of transition varieties (Weigand 1908). Sources also distinguish a north-eastern and a central-southern area, but I found no own features for the central-southern one." },
      {
        ro: "Tr\u0103s\u0103turile pe care sursa le d\u0103 tuturor graiurilor transilv\u0103nene: c\xE2ine/m\xE2ine/p\xE2ine \u2192 c\xEEne/m\xEEne/p\xEEne, a durmi cu u (dorm\u2192durm), dup\u0103 s/z/\u021B e/i/ea se schimb\u0103, oa\u2192o (coad\u0103\u2192cod\u0103). Accentul (vocale mai lungi, \u201Ec\xE2ntat\u201D) nu poate fi redat.",
        en: "Features the source gives to all Transylvanian varieties: c\xE2ine/m\xE2ine/p\xE2ine \u2192 c\xEEne/m\xEEne/p\xEEne, a durmi with u (dorm\u2192durm), e/i/ea change after s/z/\u021B, oa\u2192o (coad\u0103\u2192cod\u0103). The stress pattern (longer vowels, \u201Csinging\u201D rhythm) cannot be rendered."
      }
    ),
    ardelenesc_ne: D(
      "transilvania",
      "Ardelenesc \u2013 nord-est (Bistri\u021Ba-N\u0103s\u0103ud, B\xE2rg\u0103u)",
      "Transylvanian \u2013 north-east (Bistri\u021Ba-N\u0103s\u0103ud, B\xE2rg\u0103u)",
      [...ARD, "ar_p", "ar_b", "ar_m", "ar_f", "ar_v"],
      { ro: "Nord-estul Transilvaniei, descris pe baza zonei B\xE2rg\u0103u (Bistri\u021Ba-N\u0103s\u0103ud), din literatura de specialitate (Rusu 1984, Guia 2014), prin Rus 2020.", en: "North-eastern Transylvania, described for the B\xE2rg\u0103u area (Bistri\u021Ba-N\u0103s\u0103ud) from the literature (Rusu 1984, Guia 2014), via Rus 2020." },
      { ro: "Tr\u0103s\u0103turile ardelene\u0219ti comune, plus labialele: p\u2192pt, b\u2192bd, m\u2192m\u0144, f\u2192\u0219, v\u2192z \xEEnaintea lui i (piept\u2192ptiept, fin\u2192\u0219in, vin\u2192zin). Sursa noteaz\u0103 mai multe stadii (pt', pk', p\u0109\u2026); aplica\u021Bia folose\u0219te doar unul.", en: "The shared Transylvanian features, plus labials: p\u2192pt, b\u2192bd, m\u2192m\u0144, f\u2192\u0219, v\u2192z before i (piept\u2192ptiept, fin\u2192\u0219in, vin\u2192zin). The source records several stages (pt', pk', p\u0109\u2026); the app uses only one." }
    ),
    timocean_ungureni: D(
      "timoc",
      "Timocean \u2013 ungureni",
      "Timok \u2013 Ungureni",
      ["tm_c", "tm_t", "tm_de", "tm_di"],
      { ro: "Vestul V\u0103ii Timocului (Serbia), la vest de Morava\u2013Crna Reka\u2013Dun\u0103re. Veni\u021Bi din Banat \xEEn sec. XVIII\u2013XIX.", en: "Western Timok Valley (Serbia), west of the Morava\u2013Crna Reka\u2013Danube line. Settled from Banat in the 18th\u201319th c." },
      { ro: "Apropiat de b\u0103n\u0103\u021Bean: ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i, te/ti \u2192 ce/ci (frunte\u2192frunce), de \u2192 ge (unde\u2192unge), di \u2192 ghi (dinte\u2192ghince). Datele sunt sub\u021Biri: din fragmente de text, nu dintr-o descriere complet\u0103.", en: "Close to Banat: ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i, te/ti \u2192 ce/ci (frunte\u2192frunce), de \u2192 ge (unde\u2192unge), di \u2192 ghi (dinte\u2192ghince). The data are thin: from text fragments, not a full description." }
    ),
    timocean_tarani: D(
      "timoc",
      "Timocean \u2013 \u021B\u0103rani",
      "Timok \u2013 \u021A\u0103rani",
      ["ol_sea", "ol_se", "ol_si", "ol_j"],
      { ro: "Estul V\u0103ii Timocului (Klju\u010D, Krajina Negotinului).", en: "Eastern Timok Valley (Klju\u010D, Negotin Krajina)." },
      { ro: "Sursa spune doar c\u0103 vorbesc ca \xEEn vestul Olteniei; aplica\u021Bia folose\u0219te regulile oltene\u0219ti. Nu am g\u0103sit date proprii Timocului pentru ei.", en: "The source only says they speak like western Oltenia; the app uses the Oltenian rules. I found no Timok-specific data for them." }
    ),
    totoiana: D(
      "joc",
      "Totoiana (limb\u0103 inversat\u0103)",
      "Totoiana (inverted speech)",
      [],
      { ro: "Totoi (Alba).", en: "Totoi (Alba)." },
      { ro: "Nu e un grai: un joc \xEEn care cuv\xE2ntul se spune de la mijloc spre sf\xE2r\u0219it, apoi \xEEnceputul (pahar\u2192harupa).", en: "Not a dialect: a game where a word is said from the middle to the end, then the beginning (pahar\u2192harupa)." },
      { special: "totoiana" }
    )
  };

  // js/rules.js
  var B0 = String.raw`(?<!\p{L})`;
  var B1 = String.raw`(?!\p{L})`;
  var C = "bcdfghjklmnprstvz\u0219\u021B";
  var V = "aeiou\u0103\xE2\xEEy";
  var NV = `[^${V}]`;
  var SIB = "(?:st|[sz\u0219j\u021B])";
  var SIBR = "[sz\u0219j\u021B]";
  var R = (id, ro, en, from, to, ex, status, src, extra = {}) => ({ id, ro, en, from, to, ex, status, src: [].concat(src), ...extra });
  var L = (id, ro, en, words, map, ex, status, src, extra = {}) => ({ id, ro, en, from: `${B0}(?:${words})${B1}`, map, protect: true, ex, status, src: [].concat(src), ...extra });
  var list = [];
  var add = (...r) => list.push(...r);
  add(
    L(
      "wl_h",
      "h- de la \xEEnceput slab sau c\u0103zut, \u0219i h- ad\u0103ugat din hipercorectare: hain\u0103\u2192ain\u0103, ho\u021B\u2192o\u021B, arip\u0103\u2192harip\u0103, alea\u2192halea, albii\u2192halbii",
      "word-initial h weak or dropped, and a wrong h added (hypercorrection): hain\u0103\u2192ain\u0103, ho\u021B\u2192o\u021B, arip\u0103\u2192harip\u0103, alea\u2192halea, albii\u2192halbii",
      "hain\u0103|ho\u021B|arip\u0103|alea|albii",
      { "hain\u0103": "ain\u0103", "ho\u021B": "o\u021B", "arip\u0103": "harip\u0103", alea: "halea", albii: "halbii" },
      "arip\u0103\u2192harip\u0103, alea\u2192halea",
      "sourced",
      "enwal",
      { note: { ro: "Sursa spune \u201Euneori\u201D: e o tendin\u021B\u0103, nu o regul\u0103 fix\u0103.", en: "The source says \u201Csometimes\u201D: a tendency, not a fixed rule." } }
    ),
    L(
      "wl_h2",
      "Acelea\u0219i cuvinte la alte forme (haine, ho\u021Bi, aripi, aripile\u2026), dup\u0103 acela\u0219i tipar",
      "The same words in other forms (haine, ho\u021Bi, aripi, aripile\u2026), following the same pattern",
      "haina|haine|hainele|hainei|ho\u021Bi|ho\u021Bii|ho\u021Bia|aripi|aripa|aripile|aripii|albie|albiei|albiile",
      { haina: "aina", haine: "aine", hainele: "ainele", hainei: "ainei", "ho\u021Bi": "o\u021Bi", "ho\u021Bii": "o\u021Bii", "ho\u021Bia": "o\u021Bia", aripi: "haripi", aripa: "haripa", aripile: "haripile", aripii: "haripii", albie: "halbie", albiei: "halbiei", albiile: "halbiile" },
      "aripi\u2192haripi",
      "extended",
      "enwal",
      { note: { ro: "Sursa d\u0103 doar hain\u0103, ho\u021B, arip\u0103, alea, albii; formele de plural/articulate sunt extinse prin analogie.", en: "The source lists only hain\u0103, ho\u021B, arip\u0103, alea, albii; plural/definite forms are extended by analogy." } }
    ),
    L(
      "wl_prep",
      "Muntenia: dup\u0103 d, p, \xEEn prepozi\u021Bii: e\u2192\u0103, i\u2192\xEE (de\u2192d\u0103, dec\xE2t\u2192d\u0103c\xE2t, dintre\u2192d\xEEntre, pe\u2192p\u0103)",
      "Muntenia: after d, p in prepositions: e\u2192\u0103, i\u2192\xEE (de\u2192d\u0103, dec\xE2t\u2192d\u0103c\xE2t, dintre\u2192d\xEEntre, pe\u2192p\u0103)",
      "de|dec\xE2t|dec\xEEt|dintre|pe",
      { de: "d\u0103", "dec\xE2t": "d\u0103c\xE2t", "dec\xEEt": "d\u0103c\xEEt", dintre: "d\xEEntre", pe: "p\u0103" },
      "de\u2192d\u0103, pe\u2192p\u0103",
      "sourced",
      "enwal"
    ),
    L(
      "wl_prep2",
      "Acela\u0219i tipar la alte prepozi\u021Bii: pentru\u2192p\u0103ntru, peste\u2192p\u0103ste, din\u2192d\xEEn, dintr-\u2192d\xEEntr-, dinspre\u2192d\xEEnspre\u2026",
      "Same pattern for other prepositions: pentru\u2192p\u0103ntru, peste\u2192p\u0103ste, din\u2192d\xEEn, dintr-\u2192d\xEEntr-, dinspre\u2192d\xEEnspre\u2026",
      "pentru|peste|din|dintr|dinspre|dinaintea|dinainte|dinapoi|dinapoia|dinafar\u0103",
      { pentru: "p\u0103ntru", peste: "p\u0103ste", din: "d\xEEn", dintr: "d\xEEntr", dinspre: "d\xEEnspre", dinaintea: "d\xEEnaintea", dinainte: "d\xEEnainte", dinapoi: "d\xEEnapoi", dinapoia: "d\xEEnapoia", "dinafar\u0103": "d\xEEnafar\u0103" },
      "pentru\u2192p\u0103ntru",
      "extended",
      "enwal",
      { note: { ro: "Sursa nume\u0219te regula (prepozi\u021Bii \u0219i prefixe dup\u0103 d, p) dar d\u0103 doar de, dec\xE2t, dintre, pe \u0219i des-. Celelalte prepozi\u021Bii sunt extinse prin analogie; \u201Ep\u0103ntru\u201D nu l-am g\u0103sit explicit \xEEn sursele citite.", en: "The source names the rule (prepositions and prefixes after d, p) but lists only de, dec\xE2t, dintre, pe and des-. The other prepositions are extended by analogy; I did not find \u201Cp\u0103ntru\u201D spelled out in the sources I read." } }
    ),
    R(
      "wl_des",
      "Muntenia: prefixul des- \u2192 d\u0103s- (despart\u2192d\u0103spart, deschid\u2192d\u0103schid, destupat\u2192d\u0103stupat). Cuvintele care nu au prefix (desen, destin, desemna) sunt excluse",
      "Muntenia: prefix des- \u2192 d\u0103s- (despart\u2192d\u0103spart, deschid\u2192d\u0103schid, destupat\u2192d\u0103stupat). Words without the prefix (desen, destin, desemna) are excluded",
      `${B0}des(?!en|emn|ert|tin)(?=[${C}])`,
      "d\u0103s",
      "deschid\u2192d\u0103schid",
      "sourced",
      "enwal"
    ),
    R("wl_p", "NE \u0219i E Muntenia: p \xEEnaintea lui i e \u201Easpirat \u0219i muiat\u201D (piele\u2192p\u02B0\u02B2iele)", "NE and E Muntenia: p before i is aspirated and softened (piele\u2192p\u02B0\u02B2iele)", "p(?=i)", "p\u02B0\u02B2", "piele\u2192p\u02B0\u02B2iele", "sourced", "enwal"),
    R("wl_b", "NE \u0219i E Muntenia: bine\u2192b\u02B0\u02B2ine", "NE and E Muntenia: bine\u2192b\u02B0\u02B2ine", "b(?=i)", "b\u02B0\u02B2", "bine\u2192b\u02B0\u02B2ine", "sourced", "enwal"),
    R("wl_f", "NE \u0219i E Muntenia: fier\u2192f\u02B0\u02B2ier", "NE and E Muntenia: fier\u2192f\u02B0\u02B2ier", "f(?=i)", "f\u02B0\u02B2", "fier\u2192f\u02B0\u02B2ier", "sourced", "enwal"),
    R("wl_v", "NE \u0219i E Muntenia: vin\u2192v\u02B0\u02B2in", "NE and E Muntenia: vin\u2192v\u02B0\u02B2in", "v(?=i)", "v\u02B0\u02B2", "vin\u2192v\u02B0\u02B2in", "sourced", "enwal"),
    R("wl_m", "NE \u0219i E Muntenia: miere\u2192m\u02B2iere", "NE and E Muntenia: miere\u2192m\u02B2iere", String.raw`(?<![\p{L}])m(?=i[\p{L}])`, "m\u02B2", "miere\u2192m\u02B2iere", "sourced", "enwal"),
    R("ol_sea", "Oltenia: dup\u0103 s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103\u2192\u021Bap\u0103)", "Oltenia: after s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103\u2192\u021Bap\u0103)", `(${SIBR})ea`, "$1a", "sear\u0103\u2192sar\u0103", "sourced", "enwal"),
    R("ol_se", "Oltenia: dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103 (secure\u2192s\u0103cure, zer\u2192z\u0103r)", "Oltenia: after s, z, \u0219, j, \u021B: e\u2192\u0103 (secure\u2192s\u0103cure, zer\u2192z\u0103r)", `(${SIBR})e`, "$1\u0103", "secure\u2192s\u0103cure", "sourced", "enwal"),
    R("ol_si", "Oltenia: dup\u0103 s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zic\u2192z\xEEc, jir\u2192j\xEEr, \u021Bin\u2192\u021B\xEEn)", "Oltenia: after s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zic\u2192z\xEEc, jir\u2192j\xEEr, \u021Bin\u2192\u021B\xEEn)", `(${SIBR})i`, "$1\xEE", "singur\u2192s\xEEngur", "sourced", "enwal"),
    R("ol_j", "Oltenia: se intercaleaz\u0103 j \xEEnaintea lui k muiat (ochi\u2192ojchi, rachiu\u2192rajchiu, strachin\u0103\u2192strajchin\u0103)", "Oltenia: j is inserted before a soft k (ochi\u2192ojchi, rachiu\u2192rajchiu, strachin\u0103\u2192strajchin\u0103)", `([aeiou\u0103\xE2\xEE])ch(?=[ei])`, "$1jch", "ochi\u2192ojchi", "sourced", "enwal"),
    R("ol_f", "Sudul Olteniei: fier\u2192fchier (variant\u0103 schier)", "Southern Oltenia: fier\u2192fchier (variant schier)", "f(?=i)", "fch", "fier\u2192fchier", "sourced", "enwal"),
    R("ol_v", "Sudul Olteniei: vierme\u2192vghierme (variant\u0103 zghierme)", "Southern Oltenia: vierme\u2192vghierme (variant zghierme)", "v(?=i)", "vgh", "vierme\u2192vghierme", "sourced", "enwal")
  );
  add(
    R("tm_c", "Timoc (ungureni): ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i (cinci\u2192\u0219\u02B2in\u0219\u02B2i)", "Timok (Ungureni): ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i (cinci\u2192\u0219\u02B2in\u0219\u02B2i)", "c(?=[ei])", "\u0219\u02B2", "cinci\u2192\u0219\u02B2in\u0219\u02B2i", "approx", ["roban", "oeaw"]),
    R("tm_t", "Timoc (ungureni): te/ti \u2192 ce/ci (frunte\u2192frunce)", "Timok (Ungureni): te/ti \u2192 ce/ci (frunte\u2192frunce)", "t(?=[ei])", "c", "frunte\u2192frunce", "approx", ["roban", "oeaw"]),
    R("tm_de", "Timoc (ungureni): d din interiorul cuv\xE2ntului + e \u2192 ge (unde\u2192unge)", "Timok (Ungureni): word-internal d + e \u2192 ge (unde\u2192unge)", String.raw`(?<=\p{L})d(?=e)`, "g", "unde\u2192unge", "approx", "roban"),
    R("tm_di", "Timoc (ungureni): di \u2192 ghi (dinte\u2192ghince)", "Timok (Ungureni): di \u2192 ghi (dinte\u2192ghince)", "d(?=i)", "gh", "dinte\u2192ghince", "approx", "roban")
  );
  add(
    L(
      "b_lex",
      "Africata dz se p\u0103streaz\u0103 \xEEn c\xE2teva cuvinte: zece\u2192dz\u0103\u0219\u02B2e, auzi\u2192audz, frunz\u0103\u2192frundz\u0103, br\xE2nz\u0103\u2192br\xE2ndz\u0103, buz\u0103\u2192budz\u0103, grumaz\u2192grumadz, m\xE2nz\u2192m\xE2ndz",
      "Affricate dz kept in some words: zece\u2192dz\u0103\u0219\u02B2e, auzi\u2192audz, frunz\u0103\u2192frundz\u0103, br\xE2nz\u0103\u2192br\xE2ndz\u0103, buz\u0103\u2192budz\u0103, grumaz\u2192grumadz, m\xE2nz\u2192m\xE2ndz",
      "zece|auzi|frunz[\u0103a]|br[\xE2\xEE]nz[\u0103a]|buz[\u0103a]|grumaz|m[\xE2\xEE]nz",
      { zece: "dz\u0103\u0219\u02B2e", auzi: "audz", "frunz\u0103": "frundz\u0103", frunza: "frundza", "br\xE2nz\u0103": "br\xE2ndz\u0103", "br\xEEnz\u0103": "br\xE2ndz\u0103", "br\xE2nza": "br\xE2ndza", "br\xEEnza": "br\xE2ndza", "buz\u0103": "budz\u0103", buza: "budza", grumaz: "grumadz", "m\xE2nz": "m\xE2ndz", "m\xEEnz": "m\xE2ndz" },
      "zece\u2192dz\u0103\u0219\u02B2e",
      "sourced",
      "enban"
    ),
    R("b_ie", "Dup\u0103 labial\u0103, ie \u2192 e: fier\u2192fer, piele\u2192pele, piept\u2192pept, miercuri\u2192mercuri", `After a labial, ie \u2192 e: fier\u2192fer, piele\u2192pele, piept\u2192pept, miercuri\u2192mercuri`, `([pbfvm])ie(?=[${C}])`, "$1e", "fier\u2192fer", "sourced", "enban"),
    R("b_ea", "Dup\u0103 s, z, \u0219, j, \u021B, st: ea\u2192a (sear\u0103\u2192sar\u0103, steag\u2192stag)", "After s, z, \u0219, j, \u021B, st: ea\u2192a (sear\u0103\u2192sar\u0103, steag\u2192stag)", `(${SIB})ea`, "$1a", "sear\u0103\u2192sar\u0103", "sourced", "enban"),
    R("b_e", "Dup\u0103 s, z, \u0219, j, \u021B, st: e\u2192\u0103 (semn\u2192s\u0103mn)", "After s, z, \u0219, j, \u021B, st: e\u2192\u0103 (semn\u2192s\u0103mn)", `(${SIB})e`, "$1\u0103", "semn\u2192s\u0103mn", "sourced", "enban"),
    R("b_i", "Dup\u0103 s, z, \u0219, j, \u021B, st: i\u2192\xEE (singur\u2192s\xEEngur, \u0219i\u2192\u0219\xEE)", "After s, z, \u0219, j, \u021B, st: i\u2192\xEE (singur\u2192s\xEEngur, \u0219i\u2192\u0219\xEE)", `(${SIB})i`, "$1\xEE", "singur\u2192s\xEEngur", "sourced", "enban"),
    R("b_c", "ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i: africata devine fricativ\u0103 \u201Emuiat\u0103\u201D (ceas\u2192\u0219\u02B2as, cinci\u2192\u0219\u02B2in\u0219\u02B2)", "ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i: the affricate becomes a soft fricative (ceas\u2192\u0219\u02B2as, cinci\u2192\u0219\u02B2in\u0219\u02B2)", "c(?=[ei])", "\u0219\u02B2", "ceas\u2192\u0219\u02B2as", "sourced", "enban"),
    R("b_g", "ge/gi \u2192 j\u02B2e/j\u02B2i (fuge\u2192fuj\u02B2e, ginere\u2192j\u02B2inere)", "ge/gi \u2192 j\u02B2e/j\u02B2i (fuge\u2192fuj\u02B2e, ginere\u2192j\u02B2inere)", "g(?=[ei])", "j\u02B2", "fuge\u2192fuj\u02B2e", "sourced", "enban"),
    R("b_t", "t \xEEnaintea lui e/i \u2192 \u0107 (ca \u201Eci\u201D muiat): frunte\u2192frun\u0107e", "t before e/i \u2192 \u0107 (a soft \u201Cci\u201D sound): frunte\u2192frun\u0107e", "t(?=[ei])", "\u0107", "frunte\u2192frun\u0107e", "sourced", ["enban", "diaban"]),
    R("b_d", "d \xEEnaintea lui e/i \u2192 \u0111 (ca \u201Egi\u201D muiat): bade\u2192ba\u0111e, diminea\u021B\u0103\u2192\u0111iminea\u021B\u0103", "d before e/i \u2192 \u0111 (a soft \u201Cgi\u201D sound): bade\u2192ba\u0111e, diminea\u021B\u0103\u2192\u0111iminea\u021B\u0103", "d(?=[ei])", "\u0111", "bade\u2192ba\u0111e", "sourced", ["enban", "diaban"]),
    R("b_n", "n \xEEnaintea lui e/i \u2192 \u0144 (vine\u2192vi\u0144e)", "n before e/i \u2192 \u0144 (vine\u2192vi\u0144e)", "n(?=[ei])", "\u0144", "vine\u2192vi\u0144e", "sourced", "enban"),
    R("b_l", "l \xEEnaintea lui e/i \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", "l before e/i \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", "l(?=[ei])", "\u013A", "lemne\u2192\u013Aem\u0144e", "sourced", "enban"),
    R("b_r", "r \xEEnaintea lui e/i \u2192 \u0155 (mare\u2192ma\u0155e)", "r before e/i \u2192 \u0155 (mare\u2192ma\u0155e)", "r(?=[ei])", "\u0155", "mare\u2192ma\u0155e", "sourced", "enban"),
    L("b_sw", "Sud-vestul Banatului: luat\u2192luvat, caut\u2192capt", "South-west Banat: luat\u2192luvat, caut\u2192capt", "luat|caut", { luat: "luvat", caut: "capt" }, "luat\u2192luvat", "sourced", ["petrovici", "diaban"])
  );
  add(
    L("m_lex", "Forme vechi: fecior\u2192ficior, femeie\u2192fimeie, to\u021Bi\u2192t\u0103\u021B", "Old forms: fecior\u2192ficior, femeie\u2192fimeie, to\u021Bi\u2192t\u0103\u021B", "fecior|femeie|to\u021Bi", { fecior: "ficior", femeie: "fimeie", "to\u021Bi": "t\u0103\u021B" }, "fecior\u2192ficior", "sourced", ["spinu18", "enmol"]),
    L("m_dz", "zic\u2192dz\xEEc (dz p\u0103strat) \u2014 doar \xEEn Moldova din Rom\xE2nia; Sp\xEEnu 2018 spune c\u0103 NU se p\u0103streaz\u0103 \xEEn Republica Moldova", "zic\u2192dz\xEEc (dz kept) \u2014 Romanian Moldavia only; Sp\xEEnu 2018 says it is NOT kept in the Republic of Moldova", "zic", { zic: "dz\xEEc" }, "zic\u2192dz\xEEc", "sourced", "enmol"),
    R("m_dropi", "Dup\u0103 s, z, \u0219, j, \u021B: -i final (plural / persoana a 2-a) dispare (vezi\u2192vez, p\u0103rin\u021Bi\u2192p\u0103rin\u021B)", "After s, z, \u0219, j, \u021B: final plural / 2nd-person -i disappears (vezi\u2192vez, p\u0103rin\u021Bi\u2192p\u0103rin\u021B)", String.raw`(?<=\p{L})([szșjț])i(?![\p{L}])`, "$1", "p\u0103rin\u021Bi\u2192p\u0103rin\u021B", "sourced", "enmol"),
    R("m_cea", "cea\u2192\u0219a, gea\u2192ja (ceap\u0103\u2192\u0219ap\u0103)", "cea\u2192\u0219a (ceap\u0103\u2192\u0219ap\u0103)", "cea", "\u0219a", "ceap\u0103\u2192\u0219ap\u0103", "sourced", "enmol"),
    R("m_gea", "gea\u2192ja", "gea\u2192ja", "gea", "ja", "gean\u0103\u2192jan\u01CE", "sourced", "enmol"),
    R("m_ea", "Dup\u0103 s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", "After s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", `(${SIBR})ea`, "$1a", "sear\u0103\u2192sar\u0103", "sourced", "enmol"),
    R("m_e", "Dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103 (semn\u2192s\u0103mn)", "After s, z, \u0219, j, \u021B: e\u2192\u0103 (semn\u2192s\u0103mn)", `(${SIBR})e`, "$1\u0103", "semn\u2192s\u0103mn", "sourced", "enmol"),
    R("m_i", "Dup\u0103 s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zid\u2192z\xEEd)", "After s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zid\u2192z\xEEd)", `(${SIBR})i`, "$1\xEE", "zid\u2192z\xEEd", "sourced", "enmol"),
    R("m_c", "ce/ci \u2192 \u0219e/\u0219i: africata devine fricativ\u0103 (cin\u0103\u2192\u0219in\u0103). Se aplic\u0103 dup\u0103 schimbarea vocalelor, de aceea cin\u0103\u2192\u0219in\u0103, nu \u0219\xEEn\u0103", "ce/ci \u2192 \u0219e/\u0219i: the affricate becomes a fricative (cin\u0103\u2192\u0219in\u0103). Runs after the vowel change, hence cin\u0103\u2192\u0219in\u0103, not \u0219\xEEn\u0103", "c(?=[ei])", "\u0219", "cin\u0103\u2192\u0219in\u0103", "sourced", "enmol"),
    R("m_g", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xE2nji)", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xE2nji)", "g(?=[ei])", "j", "gene\u2192jene", "sourced", "enmol"),
    R("m_p", "pi \u2192 chi (piatr\u0103\u2192chiatr\u0103, copil\u2192cochil)", "pi \u2192 chi (piatr\u0103\u2192chiatr\u0103, copil\u2192cochil)", "p(?=i)", "ch", "piatr\u0103\u2192chiatr\u0103", "sourced", ["enmol", "capr02"]),
    R("m_b", "bi \u2192 ghi (bine\u2192ghine)", "bi \u2192 ghi (bine\u2192ghine)", "b(?=i)", "gh", "bine\u2192ghine", "sourced", ["enmol", "capr02"]),
    R("m_iat", "-iat \u2192 -iet (b\u0103iat\u2192b\u0103iet)", "-iat \u2192 -iet (b\u0103iat\u2192b\u0103iet)", `iat${B1}`, "iet", "b\u0103iat\u2192b\u0103iet", "sourced", ["enmol", "capr02"]),
    R("m_eafin", "-ea final \u2192 -\xE9 (avea\u2192av\xE9, spunea\u2192spun\xE9)", "final -ea \u2192 -\xE9 (avea\u2192av\xE9, spunea\u2192spun\xE9)", String.raw`(?<=\p{L})ea(?![\p{L}])`, "\xE9", "avea\u2192av\xE9", "sourced", ["enmol", "capr02"]),
    R("m_afin", "-\u0103 final (cuvinte de 3+ litere) \u2192 -\xEE (mam\u0103\u2192mam\xEE, cas\u0103\u2192cas\xEE)", "final -\u0103 (words of 3+ letters) \u2192 -\xEE (mam\u0103\u2192mam\xEE, cas\u0103\u2192cas\xEE)", String.raw`(?<=\p{L}{2})ă(?![\p{L}])`, "\xEE", "mam\u0103\u2192mam\xEE", "sourced", ["enmol", "spinu09"]),
    R("m_efin", "-e final neaccentuat \u2192 -i (lapte\u2192lapti, vreme\u2192vremi)", "unstressed final -e \u2192 -i (lapte\u2192lapti, vreme\u2192vremi)", String.raw`(?<=[bcdfghjklmnprstvxzșțć])e(?![\p{L}])`, "i", "lapte\u2192lapti", "approx", ["enmol", "spinu09"], { note: { ro: "Sursa cere \u201Eneaccentuat\u201D; programul nu vede accentul \u0219i o aplic\u0103 la toate -e finale.", en: "The source says \u201Cunstressed\u201D; the program cannot see stress and applies it to every final -e." } }),
    R("m_re", "e\u2192\u0103 dup\u0103 r, m la \xEEnceput de cuv\xE2nt (repede\u2192r\u0103pidi, merg\u2192m\u0103rg)", "e\u2192\u0103 after word-initial r, m (repede\u2192r\u0103pidi, merg\u2192m\u0103rg)", String.raw`(?<![\p{L}])([rm])e(?![^aeiouăâîy]+e)(?=[${C}])`, "$1\u0103", "merg\u2192m\u0103rg", "approx", "spinu18", { note: { ro: "Sursa d\u0103 doar r\u0103pidi \u0219i m\u0103rg; regula e limitat\u0103 la cuvinte cu un singur e.", en: "The source gives only r\u0103pidi and m\u0103rg; the rule is limited to words with a single e." } }),
    L("m_lov", "lovesc\u2192lov\u0103sc, love\u0219te\u2192lov\u0103\u0219te, s\u0103 loveasc\u0103\u2192s\u0103 lovasc\u0103 (e/ea\u2192\u0103/a dup\u0103 v)", "lovesc\u2192lov\u0103sc, love\u0219te\u2192lov\u0103\u0219te, s\u0103 loveasc\u0103\u2192s\u0103 lovasc\u0103 (e/ea\u2192\u0103/a after v)", "lovesc|love\u0219te|loveasc\u0103", { lovesc: "lov\u0103sc", "love\u0219te": "lov\u0103\u0219te", "loveasc\u0103": "lovasc\u0103" }, "lovesc\u2192lov\u0103sc", "sourced", "enmol", { note: { ro: "Regula general\u0103 (dup\u0103 v) nu e aplicat\u0103 la orice cuv\xE2nt, ca s\u0103 nu strice vezi, vechi etc.; doar cuvintele din surs\u0103.", en: "The general rule (after v) is not applied to every word, so as not to break vezi, vechi, etc.; only the source's words." } }),
    // Moldovenesc nord vs sud (Romania)
    R("mn_f", "Nordul Moldovei: fi \u2192 \u0219i (fierbe\u2192\u0219ierbe)", "Northern Moldavia: fi \u2192 \u0219i (fierbe\u2192\u0219ierbe)", "f(?=i)", "\u0219", "fierbe\u2192\u0219ierbe", "sourced", "enmol"),
    R("mn_v", "Nordul Moldovei: vi \u2192 ji (vi\u021Bel\u2192ji\u021Bel)", "Northern Moldavia: vi \u2192 ji (vi\u021Bel\u2192ji\u021Bel)", "v(?=i)", "j", "vi\u021Bel\u2192ji\u021Bel", "sourced", "enmol"),
    L("mn_hv", "Nordul Moldovei: v \u2192 h \xEEnaintea lui o/u \xEEn volbur\u0103\u2192holbur\u0103, vulpe\u2192hulpe, vultan\u2192hultan", "Northern Moldavia: v \u2192 h before o/u in volbur\u0103\u2192holbur\u0103, vulpe\u2192hulpe, vultan\u2192hultan", "volbur\u0103|vulpe|vulpi|vultan", { "volbur\u0103": "holbur\u0103", vulpe: "hulpe", vulpi: "hulpi", vultan: "hultan" }, "vulpe\u2192hulpe", "sourced", "enmol"),
    R("ms_f", "Sudul Moldovei (\u0219i Neam\u021B, la Creang\u0103): fi \u2192 hi (fierbe\u2192hierbe)", "Southern Moldavia (and Neam\u021B, in Creang\u0103): fi \u2192 hi (fierbe\u2192hierbe)", "f(?=i)", "h", "fierbe\u2192hierbe", "sourced", ["enmol", "capr02"]),
    R("ms_v", "Sudul Moldovei: vi \u2192 \u0125i, un h sonor (vi\u021Bel\u2192\u0125i\u021Bel)", "Southern Moldavia: vi \u2192 \u0125i, a voiced h (vi\u021Bel\u2192\u0125i\u021Bel)", "v(?=i)", "\u0125", "vi\u021Bel\u2192\u0125i\u021Bel", "sourced", "enmol")
  );
  add(
    R("bas_ja", "Dup\u0103 \u0219, j: a accentuat \u2192 \u0103 (\u0219arpe\u2192\u0219\u0103rpe, \u0219apte\u2192\u0219\u0103pte, jale\u2192j\u0103le)", "After \u0219, j: stressed a \u2192 \u0103 (\u0219arpe\u2192\u0219\u0103rpe, \u0219apte\u2192\u0219\u0103pte, jale\u2192j\u0103le)", String.raw`(?<![\p{L}])([șj])a(?=[^aeiouăâîy]+(?:[aeiouăâîy]+[^aeiouăâîy]*)?(?![\p{L}]))`, "$1\u0103", "\u0219apte\u2192\u0219\u0103pte", "approx", "spinu18", { note: { ro: "Sursa cere a accentuat; programul nu vede accentul, a\u0219a c\u0103 se aplic\u0103 doar la \xEEnceput de cuv\xE2nt, \xEEn cuvinte de cel mult dou\u0103 silabe (unde accentul cade de obicei pe prima).", en: "The source needs stressed a; the program cannot see stress, so it applies only at word start, in words of at most two syllables (where stress usually falls on the first)." } }),
    R("bas_ea", "ea\u2192a c\xE2nd silaba urm\u0103toare are a/\u0103 (mearg\u0103\u2192marg\u0103, sear\u0103\u2192sar\u0103, \u021Beap\u0103n\u2192\u021Bap\u0103n)", "ea\u2192a when the next syllable has a/\u0103 (mearg\u0103\u2192marg\u0103, sear\u0103\u2192sar\u0103, \u021Beap\u0103n\u2192\u021Bap\u0103n)", `ea(?=[${C}]{1,2}[a\u0103])`, "a", "mearg\u0103\u2192marg\u0103", "sourced", "spinu18"),
    R("bas_f", "Palatalizarea labialelor \xEEn stadiul final: fi \u2192 \u0219i (fin\u2192\u0219in)", "Labial palatalization in its final stage: fi \u2192 \u0219i (fin\u2192\u0219in)", "f(?=i)", "\u0219", "fin\u2192\u0219in", "sourced", ["spinu18", "spinu09"]),
    R("bas_v", "vi \u2192 ji (vierme\u2192jierme)", "vi \u2192 ji (vierme\u2192jierme)", "v(?=i)", "j", "vierme\u2192jierme", "sourced", ["spinu18", "spinu09"]),
    R("m_m", "mi \u2192 ni la \xEEnceput de cuv\xE2nt (mire\u2192nire). Contestat \xEEn Moldova (Creang\u0103: m nu se muiaz\u0103), atestat \xEEn Basarabia \u0219i \xEEn zona R\u0103d\u0103u\u021Bi", "mi \u2192 ni (mire\u2192nire). Disputed in Moldavia (Creang\u0103: m is not softened), attested in Bessarabia and the R\u0103d\u0103u\u021Bi area", String.raw`(?<![\p{L}])m(?=i[\p{L}])`, "n", "mire\u2192nire", "sourced", ["spinu18", "enmol", "turc77"]),
    L("m_gio", "j- p\u0103strat ca africat\u0103: jos\u2192gios, joc\u2192gioc, jur\u2192giur, jug\u2192giug (mai ales v\xE2rstnici)", "old affricate kept: jos\u2192gios, joc\u2192gioc, jur\u2192giur, jug\u2192giug (mostly elderly)", "jos|joc|jur|jura|jug", { jos: "gios", joc: "gioc", jur: "giur", jura: "giura", jug: "giug" }, "jos\u2192gios", "sourced", "spinu18"),
    // north-east of the Republic
    R("ne_cea", "NE (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari): cea \u2192 \u0219\u02B2a, gea \u2192 j\u02B2a", "NE (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari): cea \u2192 \u0219\u02B2a, gea \u2192 j\u02B2a", "cea", "\u0219\u02B2a", "ceap\u0103\u2192\u0219\u02B2ap\u0103", "sourced", "spinu09"),
    R("ne_gea", "NE: gea \u2192 j\u02B2a", "NE: gea \u2192 j\u02B2a", "gea", "j\u02B2a", "gean\u0103\u2192j\u02B2an\u0103", "sourced", "spinu09"),
    R("ne_c", "NE: ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i, fricativ\u0103 muiat\u0103 (cinci\u2192\u0219\u02B2in\u0219\u02B2, cruce\u2192cru\u0219\u02B2e)", "NE: ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i, a soft fricative (cinci\u2192\u0219\u02B2in\u0219\u02B2, cruce\u2192cru\u0219\u02B2e)", "c(?=[ei])", "\u0219\u02B2", "cinci\u2192\u0219\u02B2in\u0219\u02B2", "sourced", "spinu09"),
    R("ne_g", "NE: ge/gi \u2192 j\u02B2e/j\u02B2i (argint\u2192arj\u02B2int)", "NE: ge/gi \u2192 j\u02B2e/j\u02B2i (argint\u2192arj\u02B2int)", "g(?=[ei])", "j\u02B2", "argint\u2192arj\u02B2int", "sourced", "spinu09"),
    L(
      "ne_lex",
      "NE \u0219i NV: ou\u0103\u2192oau\u0103, rou\u0103\u2192roau\u0103, nou\u0103\u2192noau\u0103, plou\u0103\u2192ploau\u0103 (o urmat de a); NE: guler\u2192guliar, nepot\u2192niapot, nevast\u0103\u2192niavast\u0103, necaz\u2192nacaz, s\u0103\u2192s\xEE",
      "NE and NW: ou\u0103\u2192oau\u0103, rou\u0103\u2192roau\u0103, nou\u0103\u2192noau\u0103, plou\u0103\u2192ploau\u0103 (o becomes oa); NE: guler\u2192guliar, nepot\u2192niapot, nevast\u0103\u2192niavast\u0103, necaz\u2192nacaz, s\u0103\u2192s\xEE",
      "ou\u0103|rou\u0103|nou\u0103|plou\u0103|guler|nepot|nevast\u0103|necaz|s\u0103",
      { "ou\u0103": "oau\u0103", "rou\u0103": "roau\u0103", "nou\u0103": "noau\u0103", "plou\u0103": "ploau\u0103", guler: "guliar", nepot: "niapot", "nevast\u0103": "niavast\u0103", necaz: "nacaz", "s\u0103": "s\xEE" },
      "ou\u0103\u2192oau\u0103",
      "approx",
      "spinu09",
      { note: { ro: "Transcrierea din surs\u0103 folose\u0219te simboluri greu de citit \xEEn PDF; respelling-ul e o apropiere.", en: "The source's transcription uses symbols that are hard to read in the PDF; the respelling is an approximation." } }
    ),
    L("nv_lex", "NV (nord-vestul Republicii Moldova, Cern\u0103u\u021Bi, Her\u021Ba, Hotin): ou\u0103\u2192oau\u0103, rou\u0103\u2192roau\u0103, nou\u0103\u2192noau\u0103, plou\u0103\u2192ploau\u0103", "NW (north-west Rep. Moldova, Chernivtsi, Her\u021Ba, Hotin): ou\u0103\u2192oau\u0103, rou\u0103\u2192roau\u0103, nou\u0103\u2192noau\u0103, plou\u0103\u2192ploau\u0103", "ou\u0103|rou\u0103|nou\u0103|plou\u0103", { "ou\u0103": "oau\u0103", "rou\u0103": "roau\u0103", "nou\u0103": "noau\u0103", "plou\u0103": "ploau\u0103" }, "ou\u0103\u2192oau\u0103", "approx", ["spinu09", "spinu18"])
  );
  add(
    R("bc_f", "C\xE2mpulung \u0219i insulele vechi: fi \u2192 hi (fierbe\u2192hierbe)", "C\xE2mpulung and old islands: fi \u2192 hi (fierbe\u2192hierbe)", "f(?=i)", "h", "fierbe\u2192hierbe", "sourced", "turc77"),
    R("bc_v", "C\xE2mpulung \u0219i insulele vechi: vi \u2192 \u0125i, o fricativ\u0103 muiat\u0103 sonor\u0103 (vi\u021Bel\u2192\u0125i\u021Bel)", "C\xE2mpulung and old islands: vi \u2192 \u0125i, a voiced soft fricative (vi\u021Bel\u2192\u0125i\u021Bel)", "v(?=i)", "\u0125", "vi\u021Bel\u2192\u0125i\u021Bel", "sourced", "turc77"),
    R("bc_p", "C\xE2mpulung: p\u0103streaz\u0103 grupul vechi pchi (piele\u2192pchiele)", "C\xE2mpulung: keeps the old group pchi (piele\u2192pchiele)", "p(?=i)", "pch", "piele\u2192pchiele", "sourced", "turc77"),
    R("bc_b", "C\xE2mpulung: bi \u2192 bghi (bine\u2192bghine)", "C\xE2mpulung: bi \u2192 bghi (bine\u2192bghine)", "b(?=i)", "bgh", "bine\u2192bghine", "sourced", "turc77"),
    R("bc_m", "C\xE2mpulung: mi \u2192 mni (mic\u2192mnic)", "C\xE2mpulung: mi \u2192 mni (mic\u2192mnic)", String.raw`(?<![\p{L}])m(?=i[\p{L}])`, "mn", "mic\u2192mnic", "sourced", "turc77"),
    R("pal_t", "t \xEEnaintea lui e/i \u2192 t\u02B2, dental\u0103 u\u0219or muiat\u0103 (frate\u2192frat\u02B2e)", "t before e/i \u2192 t\u02B2, a lightly softened dental (frate\u2192frat\u02B2e)", "t(?=[ei])", "t\u02B2", "frate\u2192frat\u02B2e", "sourced", ["turc77"]),
    R("pal_d", "d \xEEnaintea lui e/i \u2192 d\u02B2 (bade\u2192bad\u02B2e)", "d before e/i \u2192 d\u02B2 (bade\u2192bad\u02B2e)", "d(?=[ei])", "d\u02B2", "bade\u2192bad\u02B2e", "sourced", ["turc77"]),
    L("rd_lex", "R\u0103d\u0103u\u021Bean: dup\u0103\u2192dipi, viespe\u2192zespe", "R\u0103d\u0103u\u021Bi area: dup\u0103\u2192dipi, viespe\u2192zespe", "dup\u0103|viespe", { "dup\u0103": "dipi", viespe: "zespe" }, "dup\u0103\u2192dipi", "sourced", "turc77"),
    R("rd_f", "R\u0103d\u0103u\u021Bean: f \u2192 \u0219 \xEEnaintea lui i (fin\u2192\u0219in)", "R\u0103d\u0103u\u021Bi area: f \u2192 \u0219 before i (fin\u2192\u0219in)", "f(?=i)", "\u0219", "fin\u2192\u0219in", "sourced", "turc77"),
    R("rd_v", "R\u0103d\u0103u\u021Bean: v \u2192 j \xEEnaintea lui i (vin\u2192jin); excep\u021Bie: viespe\u2192zespe", "R\u0103d\u0103u\u021Bi area: v \u2192 j before i (vin\u2192jin); exception: viespe\u2192zespe", "v(?=i)", "j", "vin\u2192jin", "sourced", "turc77"),
    R("se_ch", "chi/che \u2192 ci/ce (palatala africatizat\u0103: ochi\u2192oci, chiar\u2192ciar)", "chi/che \u2192 ci/ce (affricated palatal: ochi\u2192oci, chiar\u2192ciar)", "ch(?=[ei])", "c", "ochi\u2192oci", "sourced", "turc77"),
    R("se_gh", "ghi/ghe \u2192 gi/ge (ghia\u021B\u0103\u2192gea\u021B\u0103)", "ghi/ghe \u2192 gi/ge (ghia\u021B\u0103\u2192gea\u021B\u0103)", "gh(?=[ei])", "g", "ghia\u021B\u0103\u2192gea\u021B\u0103", "sourced", "turc77"),
    R("se_t", "t \xEEnaintea lui e/i \u2192 c (dentala muiat\u0103 se africatizeaz\u0103: frunte\u2192frunce)", "t before e/i \u2192 c (softened dental becomes an affricate: frunte\u2192frunce)", "t(?=[ei])", "c", "frunte\u2192frunce", "sourced", "turc77"),
    R("se_d", "d \xEEnaintea lui e/i \u2192 g (dinte\u2192gince)", "d before e/i \u2192 g (dinte\u2192gince)", "d(?=[ei])", "g", "dinte\u2192gince", "sourced", "turc77"),
    L("dn_a", "Doar Co\u0219na (Dorna): a dinaintea accentului \u2192 \u0103 (pahar\u2192p\u0103har, capac\u2192c\u0103pac, tabac\u2192t\u0103bac)", "Co\u0219na only (Dorna): a before the stress \u2192 \u0103 (pahar\u2192p\u0103har, capac\u2192c\u0103pac, tabac\u2192t\u0103bac)", "pahar|capac|tabac", { pahar: "p\u0103har", capac: "c\u0103pac", tabac: "t\u0103bac" }, "pahar\u2192p\u0103har", "sourced", "turc77")
  );
  add(
    L(
      "cr_lex",
      "c\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEE\u0144e/m\xEE\u0144e/p\xEE\u0144e, b\u0103iat\u2192b\u0103iet, t\u0103m\xE2iat\u2192t\u0103m\xEEiet",
      "c\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEE\u0144e/m\xEE\u0144e/p\xEE\u0144e, b\u0103iat\u2192b\u0103iet, t\u0103m\xE2iat\u2192t\u0103m\xEEiet",
      "c[\xE2\xEE]ine|m[\xE2\xEE]ine|p[\xE2\xEE]ine|b\u0103iat|t\u0103m[\xE2\xEE]iat",
      { "c\xE2ine": "c\xEE\u0144e", "c\xEEine": "c\xEE\u0144e", "m\xE2ine": "m\xEE\u0144e", "m\xEEine": "m\xEE\u0144e", "p\xE2ine": "p\xEE\u0144e", "p\xEEine": "p\xEE\u0144e", "b\u0103iat": "b\u0103iet", "t\u0103m\xE2iat": "t\u0103m\xEEiet", "t\u0103m\xEEiat": "t\u0103m\xEEiet" },
      "c\xE2ine\u2192c\xEE\u0144e",
      "sourced",
      "encri"
    ),
    R("cr_sl", "sl\u2192skl (slab\u2192sklab, sl\u0103nin\u0103\u2192skl\u0103nin\u0103)", "sl\u2192skl (slab\u2192sklab, sl\u0103nin\u0103\u2192skl\u0103nin\u0103)", "sl", "skl", "slab\u2192sklab", "sourced", "encri"),
    R("cr_sea", "Dup\u0103 s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", "After s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", "([sz\u021B])ea", "$1a", "sear\u0103\u2192sar\u0103", "sourced", "encri"),
    R("cr_se", "Dup\u0103 s, z, \u021B: e\u2192\u0103", "After s, z, \u021B: e\u2192\u0103", "([sz\u021B])e", "$1\u0103", "semn\u2192s\u0103mn", "sourced", "encri"),
    R("cr_si", "Dup\u0103 s, z, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn)", "After s, z, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn)", "([sz\u021B])i", "$1\xEE", "singur\u2192s\xEEngur", "sourced", "encri"),
    R("cr_o", "o- la \xEEnceput de cuv\xE2nt \u2192 w\u0103- (oi\u2192w\u0103i, orb\u2192w\u0103rb). Sursa: doar c\xE2nd e accentuat; aici: cuvinte de \u22642 silabe", "word-initial o \u2192 w\u0103- (oi\u2192w\u0103i, orb\u2192w\u0103rb). Source: stressed only; here: words of \u22642 syllables", `${B0}o(?=(?:[^${V}]+|i)(?:[${V}]+[^${V}]*)?${B1})`, "w\u0103", "orb\u2192w\u0103rb", "approx", "encri"),
    R("cr_oa", "oa\u2192o (poate\u2192pote, coaj\u0103\u2192coj\u0103)", "oa\u2192o (poate\u2192pote, coaj\u0103\u2192coj\u0103)", "oa", "o", "poate\u2192pote", "sourced", "encri"),
    R("mar_labea", "Dup\u0103 labial\u0103: ea\u2192a (mearg\u0103\u2192marg\u0103)", "After a labial: ea\u2192a (mearg\u0103\u2192marg\u0103)", "([pbmfv])ea", "$1a", "mearg\u0103\u2192marg\u0103", "sourced", ["encri", "enmar"]),
    R("mar_labe", "Dup\u0103 labial\u0103 de la \xEEnceputul cuv\xE2ntului: e\u2192\u0103 (merg\u2192m\u0103rg); doar dac\u0103 nu mai urmeaz\u0103 alt e", "After a word-initial labial: e\u2192\u0103 (merg\u2192m\u0103rg); only if no later e follows", String.raw`(?<![\p{L}])([pbmfv])e(?![^aeiouăâîy]+e)(?=[${C}])`, "$1\u0103", "merg\u2192m\u0103rg", "approx", ["encri", "enmar"]),
    R("cr_g", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xEEnje, fuge\u2192fuje); ce/ci r\u0103m\xE2n africate", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xEEnje, fuge\u2192fuje); ce/ci stay affricates", "g(?=[ei])", "j", "fuge\u2192fuje", "sourced", "encri"),
    R("cr_p", "p \xEEnaintea lui i \u2192 pt (piele\u2192ptiele)", "p before i \u2192 pt (piele\u2192ptiele)", "p(?=i)", "pt", "piele\u2192ptiele", "sourced", "encri"),
    R("cr_b", "b \xEEnaintea lui i \u2192 bd (bine\u2192bdine)", "b before i \u2192 bd (bine\u2192bdine)", "b(?=i)", "bd", "bine\u2192bdine", "sourced", "encri"),
    R("cr_m", "m \xEEnaintea lui i \u2192 mn (mic\u2192mnic)", "m before i \u2192 mn (mic\u2192mnic)", String.raw`(?<![\p{L}])m(?=i[\p{L}])`, "mn", "mic\u2192mnic", "sourced", "encri"),
    R("cr_f", "f \xEEnaintea lui i \u2192 h (variant\u0103: \u0219), mai des \xEEn nord (s\u0103 fie\u2192s\u0103 hie)", "f before i \u2192 h (variant: \u0219), commoner in the north (s\u0103 fie\u2192s\u0103 hie)", "f(?=i)", "h", "fie\u2192hie", "sourced", "encri"),
    R("cr_v", "v \xEEnaintea lui i \u2192 d (variant\u0103 \u0266\u02B2); neregulat (vi\u021Bel\u2192di\u021Bel)", "v before i \u2192 d (variant \u0266\u02B2); irregular (vi\u021Bel\u2192di\u021Bel)", "v(?=i)", "d", "vi\u021Bel\u2192di\u021Bel", "sourced", "encri"),
    R("cr_t", "t \xEEnaintea lui e/i \u2192 t\u02B2 (frate\u2192frat\u02B2e)", "t before e/i \u2192 t\u02B2 (frate\u2192frat\u02B2e)", "t(?=[ei])", "t\u02B2", "frate\u2192frat\u02B2e", "sourced", "encri"),
    R("cr_d", "d \xEEnaintea lui e/i \u2192 d\u02B2 (bade\u2192bad\u02B2e)", "d before e/i \u2192 d\u02B2 (bade\u2192bad\u02B2e)", "d(?=[ei])", "d\u02B2", "bade\u2192bad\u02B2e", "sourced", "encri"),
    R("cr_n", "n \xEEnaintea lui e/i \u2192 \u0144 (mine\u2192mi\u0144e)", "n before e/i \u2192 \u0144 (mine\u2192mi\u0144e)", "n(?=[ei])", "\u0144", "mine\u2192mi\u0144e", "sourced", "encri"),
    L("cr_moti", "\u021Aara Mo\u021Bilor: n \xEEntre vocale \u2192 r \xEEn cuvinte vechi: oameni\u2192wamiri, lumin\u0103\u2192lumnir\u0103", "\u021Aara Mo\u021Bilor: intervocalic n \u2192 r in old words: oameni\u2192wamiri, lumin\u0103\u2192lumnir\u0103", "oameni|lumin\u0103", { oameni: "wamiri", "lumin\u0103": "lumnir\u0103" }, "oameni\u2192wamiri", "sourced", "encri", { note: { ro: "Sursa d\u0103 doar aceste dou\u0103 cuvinte.", en: "The source gives only these two words." } }),
    R("cr_oas", "\u021Aara Oa\u0219ului: l \xEEnaintea unei consoane se velarizeaz\u0103, ca un l \u201Egros\u201D sau w (alb\u2192a\u0142b)", "\u021Aara Oa\u0219ului: l before a consonant is velarized, a \u201Cdark\u201D l or w (alb\u2192a\u0142b)", `l(?=[${C}])`, "\u0142", "alb\u2192a\u0142b", "sourced", ["encri", "uritescu"]),
    L(
      "mar_lex",
      "c\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEE\u0144e/m\xEE\u0144e/p\xEE\u0144e, b\u0103iat\u2192b\u0103iet, zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios, joc\u2192gioc, de\u2192di, pe\u2192p\u0103",
      "c\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEE\u0144e/m\xEE\u0144e/p\xEE\u0144e, b\u0103iat\u2192b\u0103iet, zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios, joc\u2192gioc, de\u2192di, pe\u2192p\u0103",
      "c[\xE2\xEE]ine|m[\xE2\xEE]ine|p[\xE2\xEE]ine|b\u0103iat|muiat|zi|zic|jos|joc|de|pe",
      { "c\xE2ine": "c\xEE\u0144e", "c\xEEine": "c\xEE\u0144e", "m\xE2ine": "m\xEE\u0144e", "m\xEEine": "m\xEE\u0144e", "p\xE2ine": "p\xEE\u0144e", "p\xEEine": "p\xEE\u0144e", "b\u0103iat": "b\u0103iet", muiat: "muiet", zi: "dz\xEE", zic: "dz\xEEc", jos: "gios", joc: "gioc", de: "di", pe: "p\u0103" },
      "zic\u2192dz\xEEc",
      "sourced",
      "enmar"
    ),
    R("mar_f", "f \xEEnaintea lui i \u2192 s (s\u0103 fie\u2192s\u0103 sie; Weigand: sier = fier)", "f before i \u2192 s (s\u0103 fie\u2192s\u0103 sie; Weigand: sier = fier)", "f(?=i)", "s", "fie\u2192sie", "sourced", ["enmar", "felecan"]),
    R("mar_v", "v \xEEnaintea lui i \u2192 z (vierme\u2192zierme; Weigand: zin = vin)", "v before i \u2192 z (vierme\u2192zierme; Weigand: zin = vin)", "v(?=i)", "z", "vierme\u2192zierme", "sourced", ["enmar", "felecan"]),
    R("mar_p", "p \xEEnaintea lui i \u2192 pt (piele\u2192ptiele)", "p before i \u2192 pt (piele\u2192ptiele)", "p(?=i)", "pt", "piele\u2192ptiele", "sourced", "enmar"),
    R("mar_b", "b \xEEnaintea lui i \u2192 bd (bine\u2192bdine)", "b before i \u2192 bd (bine\u2192bdine)", "b(?=i)", "bd", "bine\u2192bdine", "sourced", "enmar"),
    R("mar_m", "m \xEEnaintea lui i \u2192 mn (mic\u2192mnic)", "m before i \u2192 mn (mic\u2192mnic)", String.raw`(?<![\p{L}])m(?=i[\p{L}])`, "mn", "mic\u2192mnic", "sourced", "enmar"),
    R("mar_sea", "Dup\u0103 s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103)", "After s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103)", `(${SIBR})ea`, "$1a", "sear\u0103\u2192sar\u0103", "sourced", "enmar"),
    R("mar_se", "Dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103", "After s, z, \u0219, j, \u021B: e\u2192\u0103", `(${SIBR})e`, "$1\u0103", "semn\u2192s\u0103mn", "sourced", "enmar"),
    R("mar_si", "Dup\u0103 s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn)", "After s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn)", `(${SIBR})i`, "$1\xEE", "singur\u2192s\xEEngur", "sourced", "enmar"),
    R("mar_oa", "oa\u2192o (u\u0219oar\u0103\u2192u\u0219or\u0103, noapte\u2192nopte)", "oa\u2192o (u\u0219oar\u0103\u2192u\u0219or\u0103, noapte\u2192nopte)", "oa", "o", "noapte\u2192nopte", "sourced", "enmar"),
    R("mar_eafin", "-ea final \u2192 -\xE9 (avea\u2192av\xE9, mea\u2192m\xE9, vrea\u2192vr\xE9)", "final -ea \u2192 -\xE9 (avea\u2192av\xE9, mea\u2192m\xE9, vrea\u2192vr\xE9)", String.raw`(?<=\p{L})ea(?![\p{L}])`, "\xE9", "avea\u2192av\xE9", "approx", "enmar", { note: { ro: "Sursa spune \u201Eaccentuat\u201D.", en: "The source says \u201Cstressed\u201D." } }),
    R("mar_n", "n \xEEnaintea lui e/i \u2192 \u0144 (vine\u2192vi\u0144e)", "n before e/i \u2192 \u0144 (vine\u2192vi\u0144e)", "n(?=[ei])", "\u0144", "vine\u2192vi\u0144e", "sourced", "enmar"),
    R("mar_l", "l \xEEnaintea lui e/i \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", "l before e/i \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", "l(?=[ei])", "\u013A", "lemne\u2192\u013Aem\u0144e", "sourced", "enmar"),
    L("ar_lex", "c\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEEne/m\xEEne/p\xEEne (f\u0103r\u0103 -i-)", "c\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEEne/m\xEEne/p\xEEne (no glide)", "c[\xE2\xEE]ine|m[\xE2\xEE]ine|p[\xE2\xEE]ine", { "c\xE2ine": "c\xEEne", "c\xEEine": "c\xEEne", "m\xE2ine": "m\xEEne", "m\xEEine": "m\xEEne", "p\xE2ine": "p\xEEne", "p\xEEine": "p\xEEne" }, "p\xE2ine\u2192p\xEEne", "sourced", "entra"),
    R("ar_dorm", "a durmi cu u \xEEn tot paradigma (dorm\u2192durm, adormi\u2192adurmi)", "a durmi with u throughout (dorm\u2192durm, adormi\u2192adurmi)", `${B0}(a?)dorm(?=(?:i|e|im|i\u021Bi|ea|ind|ire|it)?${B1})`, "$1durm", "dorm\u2192durm", "sourced", "entra"),
    R("ar_sea", "Dup\u0103 s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103)", "After s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103)", "([sz\u021B])ea", "$1a", "sear\u0103\u2192sar\u0103", "sourced", "entra"),
    R("ar_se", "Dup\u0103 s, z, \u021B: e\u2192\u0103", "After s, z, \u021B: e\u2192\u0103", "([sz\u021B])e", "$1\u0103", "semn\u2192s\u0103mn", "sourced", "entra"),
    R("ar_si", "Dup\u0103 s, z, \u021B: i\u2192\xEE", "After s, z, \u021B: i\u2192\xEE", "([sz\u021B])i", "$1\xEE", "singur\u2192s\xEEngur", "sourced", "entra"),
    R("ar_oa", "oa\u2192o (coad\u0103\u2192cod\u0103, groap\u0103\u2192grop\u0103, aproape\u2192aprope)", "oa\u2192o (coad\u0103\u2192cod\u0103, groap\u0103\u2192grop\u0103, aproape\u2192aprope)", "oa", "o", "coad\u0103\u2192cod\u0103", "sourced", ["entra", "netra"]),
    R("ar_p", "NE Transilvania: p \u2192 pt \xEEnaintea lui i (un stadiu; exist\u0103 \u0219i altele)", "NE Transylvania: p \u2192 pt before i (one stage; others exist)", "p(?=i)", "pt", "piept\u2192ptiept", "sourced", "netra"),
    R("ar_b", "NE Transilvania: b \u2192 bd (bine\u2192bdine)", "NE Transylvania: b \u2192 bd (bine\u2192bdine)", "b(?=i)", "bd", "bine\u2192bdine", "sourced", "netra"),
    R("ar_m", "NE Transilvania: m \u2192 m\u0144 (nimic\u2192nim\u0144ic)", "NE Transylvania: m \u2192 m\u0144 (nimic\u2192nim\u0144ic)", String.raw`m(?=i[\p{L}])`, "m\u0144", "nimic\u2192nim\u0144ic", "sourced", "netra"),
    R("ar_f", "NE Transilvania: f \u2192 \u0219 \xEEnaintea lui i (fin\u2192\u0219in, fierbinte\u2192\u0219ierbinte)", "NE Transylvania: f \u2192 \u0219 before i (fin\u2192\u0219in, fierbinte\u2192\u0219ierbinte)", "f(?=i)", "\u0219", "fin\u2192\u0219in", "sourced", "netra"),
    R("ar_v", "NE Transilvania: v \u2192 z \xEEnaintea lui i (vin\u2192zin)", "NE Transylvania: v \u2192 z before i (vin\u2192zin)", "v(?=i)", "z", "vin\u2192zin", "sourced", "netra")
  );
  var RULES = Object.fromEntries(list.map((r) => [r.id, r]));

  // js/engine.js
  var cap = (src, out) => src[0] !== src[0].toLowerCase() ? out[0].toUpperCase() + out.slice(1) : out;
  var norm = (t) => t.normalize("NFC").replace(/ş/g, "\u0219").replace(/Ş/g, "\u0218").replace(/ţ/g, "\u021B").replace(/Ţ/g, "\u021A");
  var cache = {};
  function compile(R2) {
    if (cache[R2.id]) return cache[R2.id];
    let first = true;
    const src = R2.from.replace(/\\b/g, () => {
      const r = first ? "(?<![\\p{L}])" : "(?![\\p{L}])";
      first = false;
      return r;
    });
    return cache[R2.id] = new RegExp(src, "giu");
  }
  function toDialect(text, id) {
    const d = DIALECTS[id];
    text = norm(text);
    if (d.special === "totoiana") return text.replace(/\p{L}+/gu, totoi);
    let out = text;
    for (const rid of d.rules) {
      const R2 = RULES[rid];
      if (!R2) throw new Error("missing rule " + rid);
      let re;
      try {
        re = compile(R2);
      } catch (err) {
        continue;
      }
      const sub = (...a) => {
        const m = a[0];
        if (R2.map) {
          const k = m.toLowerCase();
          const v = R2.map[k];
          return v === void 0 ? m : cap(m, v);
        }
        return cap(m, R2.to.replace(/\$(\d)/g, (_, i) => {
          var _a;
          return (_a = a[+i]) != null ? _a : "";
        }));
      };
      out = out.split(/(\uE000[^\uE001]*\uE001)/).map((seg) => seg[0] === "\uE000" ? seg : seg.replace(re, (...a) => R2.protect ? "\uE000" + sub(...a) + "\uE001" : sub(...a))).join("");
    }
    return out.replace(/[\uE000\uE001]/g, "");
  }
  var V2 = "aeiou\u0103\xE2\xEEy";
  var syl = (w) => w.match(new RegExp(`[^${V2}]*[${V2}]+(?:[^${V2}]+$)?`, "giu")) || [w];
  function totoi(w) {
    const s = syl(w);
    if (s.length < 2) return w;
    const k = s.length === 2 ? 1 : Math.floor(s.length / 2);
    const a = s.slice(k).join(""), b = s.slice(0, k).join("");
    return cap(w, (a + (new RegExp(`[${V2}]$`, "iu").test(a) ? "" : "u") + b).toLowerCase());
  }
  var IPA = { "\u0219\u02B2": "\u0283\u02B2", "j\u02B2": "\u0292\u02B2", "\u0107": "t\u0283\u02B2", "\u0111": "d\u0292\u02B2", "\u0144": "n\u02B2", "\u013A": "l\u02B2", "\u0155": "r\u02B2", "\u0125": "\u0266\u02B2", "\u0142": "\u026B", "\xE9": "\u025B", ch: "k", gh: "g", c: "t\u0283", g: "d\u0292", \u021B: "ts", \u0219: "\u0283", j: "\u0292", \u0103: "\u0259", \u00EE: "\u0268", \u00E2: "\u0268", x: "ks", ea: "e\u032Fa", oa: "o\u032Fa", y: "j", h: "h" };
  var RE = /șʲ|jʲ|[ćđńĺŕĥłé]|(ch|gh|h|j|n)i(?=[aeo])|ch(?=[ei])|gh(?=[ei])|(c)(?=[ei])|g(?=[ei])|ea|oa|[țșjăîâxy]|c/giu;
  function toIPA(t) {
    const o = t.toLowerCase().replace(RE, (m, p, q) => {
      var _a;
      return p ? (p === "ch" ? "k" : p === "gh" ? "g" : p) + "\u02B2" : q ? "t\u0283" : m === "c" ? "k" : (_a = IPA[m]) != null ? _a : m;
    });
    return "/" + o + "/";
  }

  // js/sources.js
  var S = (label, cite, url, read, covers, area, caveat) => ({ label, cite, url, read, covers, area, caveat });
  var SOURCES = {
    capr02: S(
      "C\u0103prioar\u0103 2002",
      "Cosmin C\u0103prioar\u0103, \u201ETr\u0103s\u0103turi dialectale \xEEn opera lui Ion Creang\u0103\u201D, Analele Universit\u0103\u021Bii \u201EOvidius\u201D Constan\u021Ba, seria Filologie, XIII, 2002.",
      "https://www.diacronia.ro/indexing/details/A3599",
      "earlier",
      { ro: "Tr\u0103s\u0103turi moldovene\u0219ti din scrierile lui Creang\u0103: ia>ie, -ea>-\xE9, ea>a dup\u0103 consoan\u0103 dur\u0103, palatalizarea labialelor (chilos, chiu\u0103, hi, ghilit), a invariabil, o auxiliar. Spune c\u0103 muierea dentalelor lipse\u0219te \xEEn moldoveneasca propriu-zis\u0103 \u0219i c\u0103 m nu se muiaz\u0103.", en: "Moldavian traits in Creang\u0103's writing: ia>ie, -ea>-\xE9, ea>a after a hard consonant, labial palatalization (chilos, chiu\u0103, hi, ghilit), invariable a, auxiliary o. Says dental softening is absent in Moldavian proper and that m is not softened." },
      { ro: "Nordul Moldovei, zona Neam\u021B (Humule\u0219ti). Aten\u021Bie: e limba unui scriitor, nu o anchet\u0103 pe teren.", en: "Northern Moldavia, Neam\u021B area (Humule\u0219ti). Note: a writer's language, not a field survey." },
      { ro: "Autorul \u0219i Iordan avertizeaz\u0103 c\u0103 Creang\u0103 e scriitor literar, nu transcriitor regional.", en: "The author and Iordan warn that Creang\u0103 is a literary writer, not a regional transcriber." }
    ),
    diaban: S(
      "Studiu Banat sud-vest (diacronia A12911)",
      "Studiu despre vorbirea din sud-vestul Banatului, diacronia.ro, indexarea A12911 (autor/titlu exact ne\xEEnregistrat \xEEn notele mele).",
      "https://www.diacronia.ro/indexing/details/A12911",
      "earlier",
      { ro: "Confirm\u0103 muierea dentalelor \xEEn nota\u021Bia \u0107\xEDn\u0103r, l\xE1p\u0107\u011B, fr\xE1\u0107\u011B, fr\xFAn\u0107\u011B, vi\u0111\xA2m, pr\xEDn\u0111e \u0219i alte tr\u0103s\u0103turi locale (sinerez\u0103, caut\u2192capt).", en: "Confirms dental softening in the notation \u0107\xEDn\u0103r, l\xE1p\u0107\u011B, fr\xE1\u0107\u011B, fr\xFAn\u0107\u011B, vi\u0111\xA2m, pr\xEDn\u0111e and other local traits (synaeresis, caut\u2192capt)." },
      { ro: "Sud-vestul Banatului.", en: "South-west Banat." },
      { ro: "Notele mele nu p\u0103streaz\u0103 autorul/titlul; textul nu a fost recitit \xEEn aceast\u0103 verificare. Studiul spune c\u0103 unele tr\u0103s\u0103turi nu apar la nord de Bega sau doar sporadic \u2014 aplica\u021Bia aplic\u0103 un profil unic.", en: "My notes do not keep author/title; text not re-read in this verification. The study says some features do not occur north of the Bega or only sporadically \u2014 the app applies one profile." }
    ),
    enban: S(
      "Wikipedia EN \u2013 Banat Romanian dialect",
      "\u201EBanat Romanian dialect\u201D, en.wikipedia.org (citeaz\u0103 Ursan 2008, B\u0103descu, Caragiu Mario\u021Beanu 1975 p. 172, Micle 2018, Chivu).",
      "https://en.wikipedia.org/wiki/Banat_Romanian_dialect",
      "full",
      { ro: "Tr\u0103s\u0103turi fonetice, morfologice \u0219i lexicale ale Banatului, cu transcriere IPA \u0219i un text de prob\u0103.", en: "Banat phonetic, morphological and lexical features, with IPA and a sample text." },
      { ro: "Banatul rom\xE2nesc \u0219i s\xE2rbesc, par\u021Bial Valea Timocului.", en: "Romanian and Serbian Banat, partly the Timok Valley." },
      { ro: "Wikipedia, nu surs\u0103 primar\u0103. Lista subvariet\u0103\u021Bilor (sud-vest, est, nord/Lugoj, nord-est/Ha\u021Beg) a fost trunchiat\u0103 la citirea de acum; tr\u0103s\u0103turile lor le-am luat din lectura anterioar\u0103 \u0219i din Petrovici/diaban.", en: "Wikipedia, not a primary source. The sub-variety list (south-west, east, north/Lugoj, north-east/Ha\u021Beg) was truncated in today's read; I took its features from the earlier read and from Petrovici/diaban." }
    ),
    encri: S(
      "Wikipedia EN \u2013 Cri\u0219ana dialect",
      "\u201ECri\u0219ana dialect\u201D, en.wikipedia.org (marcat \u201Eneeds citations\u201D; citeaz\u0103 Sp\xEEnu 2015, Caragiu Mario\u021Beanu 1975 p. 159, B\u0103descu, Ursan 2008).",
      "https://en.wikipedia.org/wiki/Cri%C8%99ana_dialect",
      "earlier",
      { ro: "Tr\u0103s\u0103turi cri\u0219ene, subvariet\u0103\u021Bi (Bihor, \u021Aara Mo\u021Bilor, valea Some\u0219ului, \u021Aara Oa\u0219ului), text de prob\u0103 IPA.", en: "Cri\u0219ana features, sub-varieties (Bihor, \u021Aara Mo\u021Bilor, Some\u0219 valley, \u021Aara Oa\u0219ului), IPA sample text." },
      { ro: "Bihor, S\u0103laj, Satu Mare, NV Alba, V Cluj, N Arad, N Hunedoara, SV Maramure\u0219.", en: "Bihor, S\u0103laj, Satu Mare, NW Alba, W Cluj, N Arad, N Hunedoara, SW Maramure\u0219." },
      { ro: "Singura descriere detaliat\u0103; tr\u0103s\u0103turile \u021Aara Mo\u021Bilor \u0219i Oa\u0219ului confirmate pe fragmentele recitite acum.", en: "The only detailed description; \u021Aara Mo\u021Bilor and Oa\u0219 traits re-confirmed on excerpts re-read now." }
    ),
    enmar: S(
      "Wikipedia EN \u2013 Maramure\u0219 dialect",
      "\u201EMaramure\u0219 dialect\u201D, en.wikipedia.org (citeaz\u0103 Caragiu Mario\u021Beanu 1975 pp. 159, 171; B\u0103descu; Ursan 2008).",
      "https://en.wikipedia.org/wiki/Maramure%C8%99_dialect",
      "earlier",
      { ro: "Tr\u0103s\u0103turi maramure\u0219ene; \xEEmp\u0103r\u021Bire \xEEn trei ramuri (centru, NV cu influen\u021B\u0103 Oa\u0219, SE) dup\u0103 tr\u0103s\u0103turi mai ales lexicale; text de prob\u0103 IPA.", en: "Maramure\u0219 features; three branches (centre, NW with Oa\u0219 influence, SE) by mostly lexical traits; IPA sample text." },
      { ro: "Maramure\u0219ul istoric.", en: "Historical Maramure\u0219." },
      { ro: "Wikipedia; pu\u021Bine tr\u0103s\u0103turi proprii.", en: "Wikipedia; few distinctive features." }
    ),
    enmol: S(
      "Wikipedia EN \u2013 Moldavian dialect",
      "\u201EMoldavian dialect\u201D, en.wikipedia.org, edi\u021Bia actual\u0103 (citeaz\u0103 Tratat de dialectologie rom\xE2neasc\u0103 1984, ALR 1938\u201342, Caragiu Mario\u021Beanu 1975 p. 90, Weigand, Antofi 2003).",
      "https://en.wikipedia.org/wiki/Moldavian_dialect",
      "full",
      { ro: "Tr\u0103s\u0103turi moldovene\u0219ti: africate, e\u2192\u0103 dup\u0103 sibilante, labiale, f/v nord vs. sud, v\u2192h \xEEn nord, ia>ie, -ea>\xE9, vocale finale, morfologie, lexic.", en: "Moldavian features: affricates, e\u2192\u0103 after sibilants, labials, f/v north vs. south, v\u2192h in the north, ia>ie, -ea>\xE9, final vowels, morphology, lexis." },
      { ro: "Moldova istoric\u0103: Rom\xE2nia, Republica Moldova, p\u0103r\u021Bi din Ucraina; izoglose \xEEn NE Munteniei, N Dobrogei, NE Transilvaniei.", en: "Historical Moldavia: Romania, Republic of Moldova, parts of Ukraine; isoglosses in NE Muntenia, N Dobruja, NE Transylvania." },
      { ro: "Corecteaz\u0103 o neclaritate veche: aceasta e edi\u021Bia actual\u0103, nu oglinda din 2016. Spune c\u0103 grani\u021Ba RO/MD nu e grani\u021Ba unui dialect, iar diferen\u021Be mai mari sunt \xEEntre nordul \u0219i sudul Republicii Moldova.", en: "Fixes an old caveat: this is the current revision, not the 2016 mirror. It says the RO/MD border is not a dialect border, and bigger differences lie between north and south of the Republic of Moldova." }
    ),
    entra: S(
      "Wikipedia EN \u2013 Transylvanian varieties",
      "\u201ETransylvanian varieties of Romanian\u201D, en.wikipedia.org (citeaz\u0103 Weigand 1908, Petrovici 1941, Ursan 2008, B\u0103descu).",
      "https://en.wikipedia.org/wiki/Transylvanian_varieties_of_Romanian",
      "earlier",
      { ro: "Tr\u0103s\u0103turi comune ale graiurilor transilv\u0103nene (\u0268j>\u0268, vocale accentuate mai lungi, a protonic>\u0103, durm, oa>o) \u0219i structura de mozaic.", en: "Shared Transylvanian traits (\u0268j>\u0268, longer stressed vowels, protonic a>\u0103, durm, oa>o) and the mosaic structure." },
      { ro: "Transilvania, \xEEn ansamblu.", en: "Transylvania as a whole." },
      { ro: "Wikipedia.", en: "Wikipedia." }
    ),
    enwal: S(
      "Wikipedia EN \u2013 Wallachian dialect",
      "\u201EWallachian dialect\u201D, en.wikipedia.org (marcat \u201Eneeds citations\u201D; citeaz\u0103 Avram & Sala 2000, Caragiu Mario\u021Beanu 1975 p. 173, Ursan 2008, B\u0103descu).",
      "https://en.wikipedia.org/wiki/Wallachian_dialect",
      "full",
      { ro: "Fonetica munteneasc\u0103 \u0219i oltean\u0103: h-, de\u2192d\u0103, labiale \xEEn NE/E Muntenia, Oltenia (e/i/ea, j \xEEnainte de k), sudul Olteniei (fk\u02B2, vg\u02B2); morfologie; text de prob\u0103 IPA.", en: "Muntenian and Oltenian phonetics: h-, de\u2192d\u0103, labials in NE/E Muntenia, Oltenia (e/i/ea, j before k), southern Oltenia (fk\u02B2, vg\u02B2); morphology; IPA sample text." },
      { ro: "Muntenia, Oltenia, N Dobrogea, S Transilvaniei (Bra\u0219ov, S Sibiu), parte din Valea Timocului.", en: "Muntenia, Oltenia, N Dobruja, S Transylvania (Bra\u0219ov, S Sibiu), part of the Timok Valley." },
      { ro: "Spune c\u0103 \xEEmp\u0103r\u021Birea \xEEn variet\u0103\u021Bi mai fine nu se sprijin\u0103 pe tr\u0103s\u0103turi fonetice sistematice (deci nu exist\u0103 pagini fonetice pentru Muntenia central\u0103 vs. sudic\u0103, Dobrogea etc.). Formuleaz\u0103 h- drept \u201Euneori\u201D.", en: "Says finer divisions do not rest on systematic phonetic features (so no phonetic pages for central vs. southern Muntenia, Dobruja, etc.). Words the h- feature as \u201Csometimes\u201D." }
    ),
    petrovici: S(
      "Petrovici \u2013 not\u0103 despre luvat (Dacoromania)",
      "E. Petrovici, not\u0103 \xEEn Dacoromania, apud diacronia.ro A14833 (titlu exact ne\xEEnregistrat).",
      "https://www.diacronia.ro/indexing/details/A14833/pdf",
      "partial",
      { ro: "Formele luvat, nuv\u0103r, capt (\xEEn loc de luat, nour, caut) \xEEn sud-vestul Banatului, explicate ca \u201Efalse regresii\u201D pentru a evita hiatul.", en: "The forms luvat, nuv\u0103r, capt (instead of luat, nour, caut) in south-west Banat, explained as \u201Cfalse regressions\u201D to avoid hiatus." },
      { ro: "Sud-vestul Banatului.", en: "South-west Banat." },
      { ro: "Doar un fragment citit din c\u0103utare.", en: "Only a search excerpt was read." }
    ),
    roban: S(
      "Wikipedia RO \u2013 Graiul b\u0103n\u0103\u021Bean (fragment)",
      "\u201EGraiul b\u0103n\u0103\u021Bean\u201D, ro.wikipedia.org \u2014 doar fragment din rezultatele c\u0103ut\u0103rii.",
      "https://ro.wikipedia.org/wiki/Graiul_b%C4%83n%C4%83%C8%9Bean",
      "partial",
      { ro: "Forme ungurene: cinci\u2192\u0219\u02B2in\u0219\u02B2, frunte\u2192frun\u010De, unde\u2192unge, dinte\u2192ghince.", en: "Ungureni forms: cinci\u2192\u0219\u02B2in\u0219\u02B2, frunte\u2192frun\u010De, unde\u2192unge, dinte\u2192ghince." },
      { ro: "Banat; folosit pentru ungurenii din Valea Timocului.", en: "Banat; used here for the Ungureni of the Timok Valley." },
      { ro: "Neverificat \xEEn \xEEntregime \u2014 trateaz\u0103-l ca slab.", en: "Not verified in full \u2014 treat as weak." }
    ),
    felecan: S(
      "Felecan \u2013 Maramure\u0219",
      "Nicolae Felecan, studiu despre graiul maramure\u0219ean, diacronia.ro V704; \u0219i \u201EIon Coteanu \u0219i graiul maramure\u0219ean\u201D, diacronia V136.",
      "https://www.diacronia.ro/indexing/details/V704",
      "earlier",
      { ro: "Weigand 1908: sier = fier, zin = vin; Tratat: tinerii spun sin, b\u0103tr\xE2nii fin; Coteanu: Maramure\u0219ul = grai al unei zone de tranzi\u021Bie; \u011B ca \xEEn Cri\u0219ana (m\u011B, vr\u011B).", en: "Weigand 1908: sier = fier, zin = vin; Tratat: young say sin, old say fin; Coteanu: Maramure\u0219 = a speech of a transition zone; \u011B as in Cri\u0219ana (m\u011B, vr\u011B)." },
      { ro: "Maramure\u0219.", en: "Maramure\u0219." },
      { ro: "Nu a fost recitit acum.", en: "Not re-read now." }
    ),
    netra: S(
      "Rus 2020 \u2013 B\xE2rg\u0103u",
      "Maria Cornelia Rus, \u201EMethodological aspects used to realize a dialectal survey in B\xE2rg\u0103u area, Bistri\u021Ba-N\u0103s\u0103ud\u201D, Paths of Communication in Postmodernity, 2020 (diacronia A32442).",
      "https://www.diacronia.ro/indexing/details/A32442",
      "earlier",
      { ro: "Rezumat al tr\u0103s\u0103turilor din nord-estul Transilvaniei dup\u0103 Rusu (Tratat 1984) \u0219i Guia (2014): labiale (pt, bd, m\u0144, \u0219, z), oa>o, stadii multiple.", en: "Summary of north-east Transylvanian features after Rusu (Tratat 1984) and Guia (2014): labials (pt, bd, m\u0144, \u0219, z), oa>o, multiple stages." },
      { ro: "Valea B\xE2rg\u0103ului (Bistri\u021Ba-N\u0103s\u0103ud); anchet\u0103 planificat\u0103, 55 de vorbitori.", en: "B\xE2rg\u0103u valley (Bistri\u021Ba-N\u0103s\u0103ud); planned survey, 55 speakers." },
      { ro: "Articol de metodologie: tr\u0103s\u0103turile sunt a doua m\xE2n\u0103, nu rezultate noi.", en: "A methodology paper: the features are second-hand, not new results." }
    ),
    oeaw: S(
      "Sorescu-Marinkovi\u0107 \u2013 Timok (OEAW)",
      "Annemarie Sorescu-Marinkovi\u0107, \u201ETimok Romanian (Vlach)\u201D, Austrian Academy of Sciences, oeaw.ac.at/vlach.",
      "https://www.oeaw.ac.at/vlach",
      "earlier",
      { ro: "Dou\u0103 grupuri: ungureni (vest, ca b\u0103n\u0103\u021Benii) \u0219i \u021B\u0103rani (est, ca vestul Olteniei); diferen\u021Ba principal\u0103: t, d + e, i \u0219i africatele \u010D, \u01E7.", en: "Two groups: Ungureni (west, Banat-like) and \u021A\u0103rani (east, western-Oltenian-like); main difference: t, d + e, i and the affricates \u010D, \u01E7." },
      { ro: "~170 de localit\u0103\u021Bi din estul Serbiei (\u0219i NV Bulgariei).", en: "~170 settlements in eastern Serbia (and NW Bulgaria)." },
      { ro: "Nu d\u0103 descriere fonetic\u0103 complet\u0103.", en: "No full phonetic description." }
    ),
    spinu09: S(
      "Sp\xEEnu 2009 \u2013 NE Rep. Moldova",
      "Stela Sp\xEEnu, \u201EGraiurile moldovene\u0219ti din nord-estul Republicii Moldova \xEEn cadrul dialectului dacorom\xE2n\u201D, Revist\u0103 de lingvistic\u0103 \u0219i \u0219tiin\u021B\u0103 literar\u0103 3\u20134/2009, pp. 116\u2013120 (diacronia A25956).",
      "https://www.diacronia.ro/indexing/details/A25956",
      "full",
      { ro: "Clasificarea lui Udler (centru, NV, NE, SV, bucovinean); tr\u0103s\u0103turi din NE (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari, Kotovsk): ou\u0103>oau\u0103, guler>guliar, necaz>nacaz, f,v>\u0219,j, ce/ci>\u0219\u02B2, s\u0103>s\xEE; pasajul cu SV: \u0219, j \xEEn restul masivului \u201Ecu excep\u021Bia graiurilor de sud-vest\u201D.", en: "Udler's classification (centre, NW, NE, SW, Bukovinian); NE traits (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari, Kotovsk): ou\u0103>oau\u0103, guler>guliar, necaz>nacaz, f,v>\u0219,j, ce/ci>\u0219\u02B2, s\u0103>s\xEE; the passage on the SW: \u0219, j in the rest of the block \u201Cexcept the south-western speech\u201D." },
      { ro: "Nord-estul Republicii Moldova (pe baza ALM \u0219i a unor anchete proprii).", en: "North-eastern Republic of Moldova (based on ALM and own surveys)." },
      { ro: "Transcrierea fonetic\u0103 din PDF e greu de citit (simboluri deteriorate); unele valori sunt apropieri.", en: "The phonetic transcription in the PDF is hard to read (damaged symbols); some values are approximations." }
    ),
    spinu18: S(
      "Sp\xEEnu 2018 \u2013 Rep. Moldova",
      "Stela Sp\xEEnu, \u201ETendin\u021Be fonetice \u0219i lexicale \xEEn graiurile rom\xE2ne\u0219ti din Republica Moldova\u201D, Fonetic\u0103 \u0219i dialectologie XXXVII, 2018, pp. 133\u2013140 (diacronia A29393).",
      "https://www.diacronia.ro/indexing/details/A29393",
      "full",
      { ro: "Compar\u0103 ALM (1957\u201365) cu anchete din 2015\u201316: a dup\u0103 \u0219/j\u2192\u0103, ea>a, e>\u0103 dup\u0103 sibilante, labiale \xEEn stadiul final, \u0219/j, \u011Dos, jur/jug, fecior/femeie, to\u021Bi>t\u0103\u021B, lexic.", en: "Compares ALM (1957\u201365) with 2015\u201316 surveys: a after \u0219/j\u2192\u0103, ea>a, e>\u0103 after sibilants, labials in final stage, \u0219/j, \u011Dos, jur/jug, fecior/femeie, to\u021Bi>t\u0103\u021B, lexis." },
      { ro: "34 de localit\u0103\u021Bi din re\u021Beaua ALM din Republica Moldova (rezumatul englez spune 40), 3 informatori pe localitate, v\xE2rste diferite; iunie\u2013august 2015 \u0219i iunie\u2013iulie 2016.", en: "34 localities of the ALM network in the Republic of Moldova (the English abstract says 40), 3 informants per locality of different ages; June\u2013August 2015 and June\u2013July 2016." },
      { ro: "Nu spune care localit\u0103\u021Bi sunt nordice sau sudice, deci regulile nu se pot atribui mai fin dec\xE2t \u201EBasarabia\u201D. Subliniaz\u0103 c\u0103 tinerii folosesc forma literar\u0103.", en: "Does not say which localities are northern or southern, so the rules cannot be assigned finer than \u201CBessarabia\u201D. Stresses that young speakers use the standard form." }
    ),
    turc77: S(
      "Turcule\u021B 1977\u201378 \u2013 Bucovina",
      "Adrian Turcule\u021B, \u201EStructura dialectal\u0103 a graiurilor rom\xE2ne\u0219ti din Bucovina\u201D, Anuar de lingvistic\u0103 \u0219i istorie literar\u0103 26 (1977\u201378), pp. 97\u2013120 (diacronia A1448).",
      "https://www.diacronia.ro/indexing/details/A1448",
      "full",
      { ro: "Patru arii (dornean, c\xE2mpulungean, r\u0103d\u0103u\u021Bean, sud-est africatizant), cu sate, tr\u0103s\u0103turi \u0219i istoria migra\u021Biilor ardelene\u0219ti; lista punctelor anchetate (NALR Moldova \u0219i Bucovina).", en: "Four areas (Dorna, C\xE2mpulung, R\u0103d\u0103u\u021Bi, south-east africatizing), with villages, features and the history of Transylvanian migrations; the list of surveyed points (NALR Moldova and Bukovina)." },
      { ro: "Bucovina \u0219i vecin\u0103tatea (puncte NALR 461\u2013565: Poiana Stampei, Co\u0219na, C\xE2rlibaba, Straja, C\xE2mpulung, Pojor\xE2ta, R\u0103d\u0103u\u021Bi, Gura Humorului, Suceava, T\u0103t\u0103ru\u0219i etc.).", en: "Bukovina and surroundings (NALR points 461\u2013565: Poiana Stampei, Co\u0219na, C\xE2rlibaba, Straja, C\xE2mpulung, Pojor\xE2ta, R\u0103d\u0103u\u021Bi, Gura Humorului, Suceava, T\u0103t\u0103ru\u0219i, etc.)." },
      { ro: "Recitit integral acum; corecteaz\u0103 nota mea veche: \u201Eafricatizant\u201D se refer\u0103 la chi/ghi \u0219i t/d muiat \u2192 c/g, iar c/g primare (ce/ci) devin \u0219/j. PDF-ul are erori OCR.", en: "Re-read in full now; corrects my old note: \u201Cafricatizing\u201D refers to chi/ghi and softened t/d \u2192 c/g, while primary c/g (ce/ci) become \u0219/j. The PDF has OCR errors." }
    ),
    uritescu: S(
      "Uri\u0163escu \u2013 \u021Aara Oa\u0219ului",
      "Dorin Uri\u0163escu, \u201EGraiul din \u021Aara Oa\u0219ului \xEEn perspectiv\u0103 informatic\u0103\u201D, diacronia.ro V158 (cu Embleton & Wheeler).",
      "https://www.diacronia.ro/indexing/details/V158",
      "partial",
      { ro: "Oa\u0219ul e distinct la toate nivelurile lingvistice cu excep\u021Bia morfologiei, dar analiza statistic\u0103 \xEEl integreaz\u0103 \xEEn subdialectul cri\u0219ean; grupuri Oa\u0219-centru \u0219i Oa\u0219-nord.", en: "Oa\u0219 is distinct at all linguistic levels except morphology, but statistical analysis integrates it into the Cri\u0219ana subdialect; Oa\u0219-centre and Oa\u0219-north groups." },
      { ro: "Atlasul Cri\u0219anei (NALR-Cri\u0219ana) \u0219i \u021Aara Oa\u0219ului.", en: "The Cri\u0219ana atlas (NALR-Cri\u0219ana) and \u021Aara Oa\u0219ului." },
      { ro: "Doar fragmente citite.", en: "Only excerpts read." }
    ),
    entot: S(
      "Wikipedia EN \u2013 Totoiana",
      "\u201ETotoiana\u201D, en.wikipedia.org.",
      "https://en.wikipedia.org/wiki/Totoiana",
      "earlier",
      { ro: "Joc de inversare a cuvintelor din Totoi (Alba): pahar\u2192harupa, mas\u0103\u2192s\u0103ma; \u201Enu e un dialect\u201D.", en: "A word-inversion game from Totoi (Alba): pahar\u2192harupa, mas\u0103\u2192s\u0103ma; \u201Cnot a dialect\u201D." },
      { ro: "Totoi, jud. Alba.", en: "Totoi, Alba county." },
      { ro: "Regula de \xEEmp\u0103r\u021Bire \xEEn silabe e o aproximare a mea.", en: "The syllable splitting is my approximation." }
    ),
    enbuk: S(
      "Wikipedia EN \u2013 Bukovinian Romanian dialect",
      "\u201EBukovinian Romanian dialect\u201D, en.wikipedia.org.",
      "https://en.wikipedia.org/wiki/Bukovinian_Romanian_dialect",
      "partial",
      { ro: "F\u0103r\u0103 sec\u021Biune fonetic\u0103; cinci subdialecte (dornean, c\xE2mpulungean, r\u0103d\u0103u\u021Bean, sud-est \u201Eafricatizant\u201D, estic), tempo rapid, silabe neaccentuate c\u0103zute. De aceea fonetica vine din Turcule\u021B.", en: "No phonetic section; five sub-dialects (Dorna, C\xE2mpulung, R\u0103d\u0103u\u021Bi, south-east \u201Cafricatizing\u201D, eastern), fast tempo, dropped unstressed syllables. That is why the phonetics come from Turcule\u021B." },
      { ro: "Bucovina.", en: "Bukovina." },
      { ro: "\u201EEstic\u201D nu are tr\u0103s\u0103turi descrise \xEEn nicio surs\u0103 citit\u0103, deci nu are pagin\u0103.", en: "\u201CEastern\u201D has no described features in any source I read, so it has no page." }
    )
  };
  var READ_LABEL = { full: { ro: "citit integral acum (1 nov. 2026)", en: "read in full now (1 Nov 2026)" }, earlier: { ro: "citit \xEEntr-o sesiune anterioar\u0103, nerecitit acum", en: "read in an earlier session, not re-read now" }, partial: { ro: "citit doar par\u021Bial (fragment)", en: "only partly read (excerpt)" } };

  // js/examples.js
  var TYPES = {
    transcription: { ro: "Transcrieri de teren (cu text standard)", en: "Field transcriptions (with standard text)" },
    literature: { ro: "Literatur\u0103 \xEEn grai", en: "Literature in dialect" },
    collections: { ro: "Culegeri de texte dialectale \u0219i atlase", en: "Dialect text collections and atlases" },
    scholarship: { ro: "Studii despre aceste texte", en: "Scholarship on these texts" },
    lexis: { ro: "Cuvinte \u0219i expresii notate (lexic)", en: "Words and expressions recorded (lexis)" }
  };
  var E = (type, ro, en, cite, extra = {}) => ({ type, ro, en, cite, ...extra });
  var EXAMPLES = {
    muntenia: [
      E("transcription", "Transcriere IPA a unei scene la moa\u0219\u0103 (Se duc p\u0103rin\u021Bii copilului la moa\u0219\u0103\u2026); pe pagina Wikipedia e marcat\u0103 \u201Ecitation needed\u201D.", "IPA transcription of a midwife scene (Se duc p\u0103rin\u021Bii copilului la moa\u0219\u0103\u2026); marked \u201Ccitation needed\u201D on Wikipedia.", "en.wikipedia.org \u201EWallachian dialect\u201D (CC BY-SA)", { try: "Se duc p\u0103rin\u021Bii copilului la moa\u0219\u0103 cu copilul. Duc plocon p\xE2ine, vin, carne, \u021Buic\u0103. \u0218i moa\u0219a \xEEi pune un covrig \xEEn cap \u0219i-l salt\u0103-n sus, \xEEl d\u0103 de grinda casei \u0219i zice: S\u0103 tr\u0103iasc\u0103 nepotul \u0219i p\u0103rin\u021Bii!" }),
      E("collections", "Texte dialectale. Muntenia I (Ghiculete, L\u0103z\u0103rescu, Marin, Marinescu, Pan\u0103, Vulpe; ed. B. Cazacu), Bucure\u0219ti, 1973 (e\u0219antion: Nuc\u0219oara) \u0219i Muntenia III (Bratu \u0219.a., 1987; e\u0219antion: R\u0103sc\u0103ie\u021Bi).", "Texte dialectale. Muntenia I (Ghiculete, L\u0103z\u0103rescu, Marin, Marinescu, Pan\u0103, Vulpe; ed. B. Cazacu), Bucharest, 1973 (sample: Nuc\u0219oara) and Muntenia III (Bratu et al., 1987; sample: R\u0103sc\u0103ie\u021Bi).", "lingv.ro, \u201EHarta sonor\u0103 a graiurilor\u201D (2014)"),
      E("collections", "Texte dialectale \u0219i glosar. Dobrogea (L\u0103z\u0103rescu \u0219.a., 1987); Neagoe & M\u0103rg\u0103rit, Graiuri dacorom\xE2ne din nordul Bulgariei. Texte dialectale (2006).", "Texte dialectale \u0219i glosar. Dobrogea (L\u0103z\u0103rescu et al., 1987); Neagoe & M\u0103rg\u0103rit, Graiuri dacorom\xE2ne din nordul Bulgariei. Texte dialectale (2006).", "lingv.ro, \u201EHarta sonor\u0103 a graiurilor\u201D (2014)"),
      E("literature", "Marin Sorescu, \u201ELa Lilieci\u201D (ciclu poetic, ~400 p.): un studiu diacronia (V1891) num\u0103r\u0103 61,35% componente dialectale oltene\u0219ti \xEEntr-un e\u0219antion de 10%; \xEEl compar\u0103 cu \u201EAmintiri din copil\u0103rie\u201D.", "Marin Sorescu, \u201CLa Lilieci\u201D (poetry cycle, ~400 pp.): a diacronia study (V1891) counts 61.35% Oltenian dialect components in a 10% sample; compares it with \u201CAmintiri din copil\u0103rie\u201D.", "diacronia.ro V1891", { only: ["oltenesc", "oltenesc_sud"] }),
      E("collections", "Texte dialectale. Oltenia (Cohu\u021B, Ghiculete, M\u0103rd\u0103rescu, \u0218uteu, Vulpe; ed. B. Cazacu), Bucure\u0219ti, 1967 (e\u0219antion: Verbi\u021Ba); Glosar dialectal. Oltenia (Cazacu \u0219.a., 1967); Dorina B\u0103rbu\u021B, Dic\u021Bionar de grai oltenesc, Craiova, 1980.", "Texte dialectale. Oltenia (Cohu\u021B, Ghiculete, M\u0103rd\u0103rescu, \u0218uteu, Vulpe; ed. B. Cazacu), Bucharest, 1967 (sample: Verbi\u021Ba); Glosar dialectal. Oltenia (Cazacu et al., 1967); Dorina B\u0103rbu\u021B, Dic\u021Bionar de grai oltenesc, Craiova, 1980.", "lingv.ro (2014) + cataloage", { only: ["oltenesc", "oltenesc_sud"] }),
      E("lexis", "drug\u0103 (\u0219tiulete), clups\u0103 (curs\u0103 de \u0219oareci), tron (sicriu), sacsie (ghiveci), dul (umfl\u0103tur\u0103); pepene (Muntenia) vs. lubeni\u021B\u0103 (Oltenia, Banat).", "drug\u0103 (corn cob), clups\u0103 (mousetrap), tron (coffin), sacsie (flower pot), dul (swelling); pepene (Muntenia) vs. lubeni\u021B\u0103 (Oltenia, Banat).", "en.wikipedia.org \u201EWallachian dialect\u201D; arXiv 2309.03378 (RoDia)")
    ],
    moldova: [
      E("transcription", "Transcriere IPA a povestirii cu cele dou\u0103 vaci (Ea avea dou\u0103 vaci\u2026).", "IPA transcription of the two-cows story (Ea avea dou\u0103 vaci\u2026).", "en.wikipedia.org \u201EMoldavian dialect\u201D (edi\u021Bia actual\u0103, CC BY-SA)", { try: "Ea avea dou\u0103 vaci \u0219i se mirau oamenii de vacile ei c\u0103 d\u0103deau un ciub\u0103ra\u0219 de lapte. \u0218i a\u0219a de la o vreme st\xE2rpiser\u0103 vacile, nu mai d\u0103deau lapte." }),
      E("literature", "Ion Creang\u0103, \u201EAmintiri din copil\u0103rie\u201D (zona Neam\u021B). Forme dialectale documentate de C\u0103prioar\u0103: chilos, chilit, chiu\u0103, s\u0103 chiroteasc\u0103, pochii, hi (f\u2192h), givorni\u021B\u0103, ghiavole, ghib\u0103cia, m\u0103 spariu, o m\xE2niet, \xEEnfuriet, ved\xE9, vr\xE9. Aten\u021Bie: e limb\u0103 literar\u0103, nu transcriere de teren.", "Ion Creang\u0103, \u201CAmintiri din copil\u0103rie\u201D (Neam\u021B area). Dialect forms documented by C\u0103prioar\u0103: chilos, chilit, chiu\u0103, s\u0103 chiroteasc\u0103, pochii, hi (f\u2192h), givorni\u021B\u0103, ghiavole, ghib\u0103cia, m\u0103 spariu, o m\xE2niet, \xEEnfuriet, ved\xE9, vr\xE9. Note: literary language, not a field transcription.", "C\u0103prioar\u0103 2002 (diacronia A3599); Iordan, prefa\u021B\u0103 la Creang\u0103, Opere, Minerva, 1970", { only: ["moldovenesc_sud"] }),
      E("scholarship", "Alte studii despre limba lui Creang\u0103: diacronia A29172 (varia\u021Bie lexical\u0103), A10184 (rusisme), V1891 (compara\u021Bie cu Sorescu, \u201ELa Lilieci\u201D).", "More studies on Creang\u0103's language: diacronia A29172 (lexical variation), A10184 (Russian loans), V1891 (comparison with Sorescu, \u201CLa Lilieci\u201D).", "diacronia.ro"),
      E("lexis", "om\u0103t (z\u0103pad\u0103), agud\u0103 (dud\u0103), poame (struguri), perje (prune), ciubot\u0103 (cizm\u0103), cori (pojar); expresii alese de etnograful Dan Ravaru (stuchit la furc\u0103 etc.).", "om\u0103t (snow), agud\u0103 (mulberry), poame (grapes), perje (plums), ciubot\u0103 (boot), cori (measles); expressions chosen by ethnographer Dan Ravaru (stuchit la furc\u0103 etc.).", "en.wikipedia.org \u201EMoldavian dialect\u201D; Adev\u0103rul.ro")
    ],
    basarabia: [
      E("collections", "\u201EGraiurile rom\xE2ne\u0219ti de la est de Nistru \xEEn procesul de consolidare a statului Republica Moldova (Texte dialectale, glosar, studii)\u201D, Institutul de Filologie Rom\xE2n\u0103 \u201EB. P. Hasdeu\u201D, Chi\u0219in\u0103u.", "\u201CGraiurile rom\xE2ne\u0219ti de la est de Nistru \xEEn procesul de consolidare a statului Republica Moldova (Texte dialectale, glosar, studii)\u201D, Institutul de Filologie Rom\xE2n\u0103 \u201CB. P. Hasdeu\u201D, Chi\u0219in\u0103u.", "ieg.asm.md"),
      E("collections", "Atlasul lingvistic moldovenesc, vol. I\u2013II (1968\u201373); ALRR Basarabia, Nordul Bucovinei, Transnistria (Pavel \u0219.a., 1993\u20132003) cu texte dialectale; Petrovici, \u201ETexte dialectale\u201D (supliment la ALR II, 1943).", "Atlasul lingvistic moldovenesc, vols. I\u2013II (1968\u201373); ALRR Basarabia, northern Bukovina, Transnistria (Pavel et al., 1993\u20132003) with dialect texts; Petrovici, \u201CTexte dialectale\u201D (supplement to ALR II, 1943).", "Sp\xEEnu 2018; Turcule\u021B 1977\u201378"),
      E("collections", "Sp\xEEnu, \u201EGraiurile rom\xE2ne\u0219ti din nord-estul Republicii Moldova\u201D (2011) \u0219i \u201EGraiurile rom\xE2ne\u0219ti din sud-vestul Basarabiei\u201D (2002).", "Sp\xEEnu, \u201CGraiurile rom\xE2ne\u0219ti din nord-estul Republicii Moldova\u201D (2011) and \u201CGraiurile rom\xE2ne\u0219ti din sud-vestul Basarabiei\u201D (2002).", "Sp\xEEnu 2009; list\u0103 ASM"),
      E("lexis", "ciolan (os), om\u0103t (z\u0103pad\u0103), hulub (porumbel), p\xE2ntece (burt\u0103), p\u0103pu\u0219oi (porumb), mo\u0219 (unchi), v\u0103dan\u0103 (v\u0103duv\u0103), ogheal (plapum\u0103), \u021B\xE2ntirim (cimitir), harbuz (pepene), bumb (nasture), baistruc, glod, r\u0103cituri (piftie), curechi (varz\u0103; \xEEn SV: varz\u0103), m\xE2\u021B\u0103 (pisic\u0103), tescovin\u0103 (SV: pr\u0103\u0219tin\u0103). NE: belozor, \u0219liap\u0103, boz, camforc\u0103, mohorici, cr\xE2\u0219\u0103, lijac etc.", "ciolan (bone), om\u0103t (snow), hulub (pigeon), p\xE2ntece (belly), p\u0103pu\u0219oi (maize), mo\u0219 (uncle), v\u0103dan\u0103 (widow), ogheal (blanket), \u021B\xE2ntirim (cemetery), harbuz (watermelon), bumb (button), baistruc, glod, r\u0103cituri (aspic), curechi (cabbage; in the SW: varz\u0103), m\xE2\u021B\u0103 (cat), tescovin\u0103 (SW: pr\u0103\u0219tin\u0103). NE: belozor, \u0219liap\u0103, boz, camforc\u0103, mohorici, cr\xE2\u0219\u0103, lijac etc.", "Sp\xEEnu 2018; Sp\xEEnu 2009")
    ],
    bucovina: [
      E("collections", "Turcule\u021B 2002, monografie despre zona C\xE2mpulung (cu mostre scrise de vorbitori locali, dup\u0103 recenzia diacronia R36).", "Turcule\u021B 2002, monograph on the C\xE2mpulung area (with written samples by local speakers, per the diacronia review R36).", "diacronia.ro R36"),
      E("collections", "Noul Atlas lingvistic rom\xE2n pe regiuni. Moldova \u0219i Bucovina I (Arvinte, Dumistr\u0103cel, Florea, Nu\u021B\u0103, Turcule\u021B), Editura Academiei, 1987; Weigand, Linguistischer Atlas (1909).", "Noul Atlas lingvistic rom\xE2n pe regiuni. Moldova \u0219i Bucovina I (Arvinte, Dumistr\u0103cel, Florea, Nu\u021B\u0103, Turcule\u021B), Editura Academiei, 1987; Weigand, Linguistischer Atlas (1909).", "Turcule\u021B 1977\u201378; diacronia V719"),
      E("lexis", "Curast\u0103/corast\u0103 (curast\u0103), r\u0103di\u021B\u0103, s\u0103rin/perin\u0103 (Dorna \u0219i C\xE2mpulung), ropoi, r\u0103t\u0103; R\u0103d\u0103u\u021Bi: dipi (dup\u0103), zespe (viespe), a\u0219 (chiar, tocmai), capuli (genitiv-dativ), vocative scurte: tat!, m\u0103j!", "curast\u0103/corast\u0103, r\u0103di\u021B\u0103, s\u0103rin/perin\u0103 (Dorna and C\xE2mpulung), ropoi, r\u0103t\u0103; R\u0103d\u0103u\u021Bi: dipi (dup\u0103), zespe (viespe), a\u0219 (\u201Cexactly\u201D), capuli (genitive-dative), short vocatives: tat!, m\u0103j!", "Turcule\u021B 1977\u201378")
    ],
    banat: [
      E("transcription", "Transcriere IPA a unei \xEEnt\xE2mpl\u0103ri (\xCEnt\xE2mplarea a fost a\u0219a: l-am luat de lan\u021B\u2026).", "IPA transcription of a story (\xCEnt\xE2mplarea a fost a\u0219a: l-am luat de lan\u021B\u2026).", "en.wikipedia.org \u201EBanat Romanian dialect\u201D (CC BY-SA)", { try: "\xCEnt\xE2mplarea a fost a\u0219a: l-am luat de lan\u021B. El mi-a pus capu-n spinare \u0219i-a plecat cu mine din perete \xEEn perete. I-am pus m\xE2na \xEEntr-un corn \u0219i cealalt\u0103 \xEEntr-alt corn \u0219i m-a tr\xE2ntit jos." }),
      E("literature", "Victor Vlad Delamarina: poezie \xEEn grai b\u0103n\u0103\u021Bean; poezia dialectal\u0103 cult\u0103 \xEEncepe cu el (prima publicare 13 martie 1903). Citat pentru zona Lugoj de At. M. Marienescu, \u201EDialectul rom\xE2n b\u0103n\u0103\u021Bean\u201D, Lugoj, 1902.", "Victor Vlad Delamarina: poetry in Banat speech; cultured dialect poetry is said to begin with him (first published 13 March 1903). Cited for the Lugoj area by At. M. Marienescu, \u201CDialectul rom\xE2n b\u0103n\u0103\u021Bean\u201D, Lugoj, 1902.", "M. M. Deleanu, \u201EUn secol de poezie dialectal\u0103 cult\u0103 \xEEn Banat\u201D, Dacoromania s.n. III\u2013IV, 1998\u201399, pp. 27\u201332 (diacronia A1874)"),
      E("literature", "Continuatori: George G\xE2rda, Marius Munteanu, Ion Viorel Boldureanu (personajul radiofonic Cola lu Tutub\u0103, Radio Timi\u0219oara), Ionel Iacob Bencei, Virgil \u0218chiopescu, P\u0103tru Chira, Ion Curea, Vasile Simulescu (Seceani), Nichifor Mihu\u021Ba (Caransebe\u0219).", "Continuers: George G\xE2rda, Marius Munteanu, Ion Viorel Boldureanu (radio character Cola lu Tutub\u0103, Radio Timi\u0219oara), Ionel Iacob Bencei, Virgil \u0218chiopescu, P\u0103tru Chira, Ion Curea, Vasile Simulescu (Seceani), Nichifor Mihu\u021Ba (Caransebe\u0219).", "diacronia A1874, V1882; codanec.eu \u201ELiterature in the language of Banat grai\u201D"),
      E("literature", "Antologii \u0219i festivaluri: Aurel Turcu\u0219 (ed.), \u201EPoezie \xEEn grai b\u0103n\u0103\u021Bean\u201D, vol. I, Orizonturi Universitare, Timi\u0219oara, 2009 (ISBN 978-973-638-414-1); colec\u021Bia \u201EGrai b\u0103n\u0103\u021Ban\u201D, Dacia Europa Nova, Lugoj, din 1998; festivalul \u201ETata Oancea\u201D, Boc\u0219a; \u201EAntologia literaturii dialectale b\u0103n\u0103\u021Bene 1881\u20132011\u201D (inclusiv o pies\u0103 de Todor Cre\u021Bu-To\u0219a din Uzdin).", "Anthologies and festivals: Aurel Turcu\u0219 (ed.), \u201CPoezie \xEEn grai b\u0103n\u0103\u021Bean\u201D, vol. I, Orizonturi Universitare, Timi\u0219oara, 2009 (ISBN 978-973-638-414-1); the \u201CGrai b\u0103n\u0103\u021Ban\u201D series, Dacia Europa Nova, Lugoj, since 1998; the \u201CTata Oancea\u201D festival, Boc\u0219a; \u201CAntologia literaturii dialectale b\u0103n\u0103\u021Bene 1881\u20132011\u201D (including a play by Todor Cre\u021Bu-To\u0219a from Uzdin).", "en.wikipedia.org \u201EVictor Vlad Delamarina\u201D; M\u0103rg\u0103rit 2021 (diacronia A32495)"),
      E("scholarship", "Gabriel \u021Aepelea, \u201ELiteratura \xEEn grai b\u0103n\u0103\u021Bean\u201D (tez\u0103) \u0219i \u201EPlugarii condeieri din Banat\u201D, Marineasa, Timi\u0219oara, 2005; Cristina Sicoe, \u201E\xCEmprumuturi de origine s\xE2rb\u0103 \xEEn literatura dialectal\u0103 b\u0103n\u0103\u021Bean\u0103\u201D, 2015.", "Gabriel \u021Aepelea, \u201CLiteratura \xEEn grai b\u0103n\u0103\u021Bean\u201D (thesis) and \u201CPlugarii condeieri din Banat\u201D, Marineasa, Timi\u0219oara, 2005; Cristina Sicoe, \u201C\xCEmprumuturi de origine s\xE2rb\u0103 \xEEn literatura dialectal\u0103 b\u0103n\u0103\u021Bean\u0103\u201D, 2015.", "catalog"),
      E("lexis", "\u0219c\u0103tul\u0103 (cutie), \u0219naid\u0103r (croitor), ai (usturoi), farb\u0103 (vopsea), golumb (porumbel), cozeci (pojar), alt\u0103\u0219\u02B2e (altceva), tot natul (fiecare); verbe: rup\u0219\u0103i, frip\u0219\u0103i, z\xEE\u0219\u0103i (perfect simplu), o m\u0103rs/or m\u0103rs.", "\u0219c\u0103tul\u0103 (box), \u0219naid\u0103r (tailor), ai (garlic), farb\u0103 (dye), golumb (pigeon), cozeci (measles), alt\u0103\u0219\u02B2e (something else), tot natul (everyone); verbs: rup\u0219\u0103i, frip\u0219\u0103i, z\xEE\u0219\u0103i (simple perfect), o m\u0103rs/or m\u0103rs.", "en.wikipedia.org \u201EBanat Romanian dialect\u201D; ro.wikipedia (fragment)")
    ],
    crisana: [
      E("transcription", "Transcriere IPA a unei povestiri cu c\xE2inele \u0219i oaia (Atunci iar a ie\u0219it \u0219i s-a uitat\u2026).", "IPA transcription of a dog-and-sheep story (Atunci iar a ie\u0219it \u0219i s-a uitat\u2026).", "en.wikipedia.org \u201ECri\u0219ana dialect\u201D"),
      E("collections", "NALR\u2013Cri\u0219ana I\u2013III (Stan & Uri\u0163escu, 1996, 2003, 2011), online \xEEn RODA; Petrovici, \u201EGraiul rom\xE2nesc de pe Cri\u0219uri \u0219i Some\u0219\u201D, Transilvania 72 (1941); Teaha, \u201EGraiul din Valea Cri\u0219ului Negru\u201D, 1961.", "NALR\u2013Cri\u0219ana I\u2013III (Stan & Uri\u0163escu, 1996, 2003, 2011), online in RODA; Petrovici, \u201CGraiul rom\xE2nesc de pe Cri\u0219uri \u0219i Some\u0219\u201D, Transilvania 72 (1941); Teaha, \u201CGraiul din Valea Cri\u0219ului Negru\u201D, 1961.", "diacronia; atilf.fr (CILPR 2013)"),
      E("lexis", "oarecine, oarece, arin\u0103 (nisip), br\xE2nc\u0103 (m\xE2n\u0103), cot\u0103toare (oglind\u0103), \u0219tergur\u0103 (prosop), v\u0103! (du-te), tulai! (vai), no.", "oarecine, oarece, arin\u0103 (sand), br\xE2nc\u0103 (hand), cot\u0103toare (mirror), \u0219tergur\u0103 (towel), v\u0103! (go away), tulai! (oh dear), no.", "en.wikipedia.org \u201ECri\u0219ana dialect\u201D")
    ],
    maramures: [
      E("transcription", "Transcriere IPA (Se roag\u0103 lui Dumnezeu\u2026).", "IPA transcription (Se roag\u0103 lui Dumnezeu\u2026).", "en.wikipedia.org \u201EMaramure\u0219 dialect\u201D"),
      E("collections", "Tache Papahagi, \u201EGraiul \u0219i folklorul Maramure\u0219ului\u201D, Academia Rom\xE2n\u0103, Bucure\u0219ti, 1925 (texte \u0219i glosar; recenzie de N. Dr\u0103ganu); \u201EBalade, colinde \u0219i bocete din Maramure\u0219\u201D \u0219i \u201EC\xE2ntece poporane din Maramure\u0219\u201D, 1924.", "Tache Papahagi, \u201CGraiul \u0219i folklorul Maramure\u0219ului\u201D, Romanian Academy, Bucharest, 1925 (texts and glossary; review by N. Dr\u0103ganu); \u201CBalade, colinde \u0219i bocete din Maramure\u0219\u201D and \u201CC\xE2ntece poporane din Maramure\u0219\u201D, 1924.", "dspace.bcucluj.ro"),
      E("lexis", "a cu\u0219\u0103i (a gusta), cocon (copil), pup (boboc), potic\u0103 (farmacie), zierme (\u0219arpe), aista, aiasta.", "a cu\u0219\u0103i (to taste), cocon (child), pup (bud), potic\u0103 (pharmacy), zierme (snake), aista, aiasta.", "en.wikipedia.org \u201EMaramure\u0219 dialect\u201D")
    ],
    transilvania: [
      E("collections", "Guia, \u201EDialectologie rom\xE2n\u0103. Studii \u0219i corpus de texte\u201D, Ia\u0219i, Vasiliana '98, 2014; Rus, \xEEnregistr\u0103ri \xEEn Valea B\xE2rg\u0103ului (55 de vorbitori; nepublicate la data articolului).", "Guia, \u201CDialectologie rom\xE2n\u0103. Studii \u0219i corpus de texte\u201D, Ia\u0219i, Vasiliana '98, 2014; Rus, recordings in the B\xE2rg\u0103u valley (55 speakers; unpublished at the time of the article).", "Rus 2020"),
      E("lexis", "Maghiare: darab(\u0103), gazd\u0103, papric\u0103; germane: fain(\u0103), maist\u0103r, \u0219u\u0219t\u0103r, ti\u0219l\u0103r.", "Hungarian: darab(\u0103), gazd\u0103, papric\u0103; German: fain(\u0103), maist\u0103r, \u0219u\u0219t\u0103r, ti\u0219l\u0103r.", "Rus 2020")
    ],
    timoc: [
      E("collections", "Atlas lingvistic al Regiunii Valea Timocului (Neiescu, Beltechi, Mocanu), Re\u0219i\u021Ba, 2006.", "Atlas lingvistic al Regiunii Valea Timocului (Neiescu, Beltechi, Mocanu), Re\u0219i\u021Ba, 2006.", "OEAW"),
      E("literature", "Evanghelie, antologii de basme, versuri pentru copii (anii 2000\u20132010), manualul \u201EVuorba \u0219i kultura Vlaha\u201D (2013), Paun Es Durli\u0107, \u201ELanguage of the Vlach Bread\u201D (2011). Nu e literatur\u0103 dialectal\u0103 \u201Ecult\u0103\u201D, ca \xEEn Banat.", "A Gospel translation, anthologies of fairy tales, children's rhymes (2000s\u20132010s), the textbook \u201CVuorba \u0219i kultura Vlaha\u201D (2013), Paun Es Durli\u0107, \u201CLanguage of the Vlach Bread\u201D (2011). Not \u201Ccultured\u201D dialect literature as in Banat.", "OEAW"),
      E("collections", "Colec\u021Bie audio/video cu vorbire timocean\u0103 (bocete, tradi\u021Bii orale, biografii de sat), g\u0103zduit\u0103 de OEAW.", "Audio/video collection of Timok speech (laments, oral traditions, village biographies), hosted by OEAW.", "oeaw.ac.at/vlach")
    ],
    joc: [E("scholarship", "Totoiana: pahar\u2192harupa, mas\u0103\u2192s\u0103ma, vaca\u2192cava; \u201Enu e un dialect\u201D.", "Totoiana: pahar\u2192harupa, mas\u0103\u2192s\u0103ma, vaca\u2192cava; \u201Cnot a dialect\u201D.", "en.wikipedia.org \u201ETotoiana\u201D")]
  };

  // js/research.js
  var f = (ro, en) => ({ ro, en });
  var RESEARCH = {
    muntenia: { title: f("Muntenia \u0219i Oltenia", "Muntenia and Oltenia"), sections: [
      { h: f("Zon\u0103", "Area"), i: [f("Muntenia, Oltenia, N Dobrogea, S Transilvaniei (Bra\u0219ov, sudul Sibiului); tr\u0103s\u0103turile cele mai tipice sunt \xEEn Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt, Teleorman. [Wikipedia EN \u2013 Wallachian]", "Muntenia, Oltenia, N Dobruja, S Transylvania (Bra\u0219ov, south Sibiu); the most typical features are in Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt, Teleorman. [Wikipedia EN \u2013 Wallachian]")] },
      { h: f("Ce e implementat \u2714", "Implemented \u2714"), i: [
        f("\u2714 h- slab sau c\u0103zut + h- ad\u0103ugat (hain\u0103\u2192ain\u0103, arip\u0103\u2192harip\u0103, alea\u2192halea, albii\u2192halbii). Sursa: \u201Euneori\u201D.", "\u2714 weak/lost h- + added h- (hain\u0103\u2192ain\u0103, arip\u0103\u2192harip\u0103, alea\u2192halea, albii\u2192halbii). Source: \u201Csometimes\u201D."),
        f("\u2714 Muntenia: dup\u0103 d, p, \xEEn prepozi\u021Bii \u0219i prefixe e\u2192\u0103, i\u2192\xEE: de\u2192d\u0103, dec\xE2t\u2192d\u0103c\xE2t, dintre\u2192d\xEEntre, pe\u2192p\u0103, destupat\u2192d\u0103stupat, despart\u2192d\u0103spart, deschid\u2192d\u0103schid. Regula e \u201E\xEEn prepozi\u021Bii \u0219i prefixe\u201D: de aceea am extins-o (marcat \u201Eextins\u201D) la pentru, peste, din, dinspre\u2026 Cuvintele f\u0103r\u0103 prefix (desen, destin, desemna) sunt excluse.", "\u2714 Muntenia: after d, p in prepositions and prefixes e\u2192\u0103, i\u2192\xEE: de\u2192d\u0103, dec\xE2t\u2192d\u0103c\xE2t, dintre\u2192d\xEEntre, pe\u2192p\u0103, destupat\u2192d\u0103stupat, despart\u2192d\u0103spart, deschid\u2192d\u0103schid. The rule is \u201Cin prepositions and prefixes\u201D, so I extended it (marked \u201Cextended\u201D) to pentru, peste, din, dinspre\u2026 Words without the prefix (desen, destin, desemna) are excluded."),
        f("\u2714 NE \u0219i E Muntenia: labiale muiate \xEEnaintea lui i (piele\u2192p\u02B0\u02B2iele, bine\u2192b\u02B0\u02B2ine, fier\u2192f\u02B0\u02B2ier, vin\u2192v\u02B0\u02B2in, miere\u2192m\u02B2iere); sursa le leag\u0103 de migra\u021Bii recente.", "\u2714 NE and E Muntenia: softened labials before i (piele\u2192p\u02B0\u02B2iele, bine\u2192b\u02B0\u02B2ine, fier\u2192f\u02B0\u02B2ier, vin\u2192v\u02B0\u02B2in, miere\u2192m\u02B2iere); the source ties them to recent migrations."),
        f("\u2714 Oltenia: dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a (sear\u0103\u2192sar\u0103, secure\u2192s\u0103cure, singur\u2192s\xEEngur, zic\u2192z\xEEc, zer\u2192z\u0103r, jir\u2192j\xEEr, \u021Bin\u2192\u021B\xEEn); j \xEEnaintea lui k muiat (ochi\u2192ojchi, rachiu\u2192rajchiu).", "\u2714 Oltenia: after s, z, \u0219, j, \u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a (sear\u0103\u2192sar\u0103, secure\u2192s\u0103cure, singur\u2192s\xEEngur, zic\u2192z\xEEc, zer\u2192z\u0103r, jir\u2192j\xEEr, \u021Bin\u2192\u021B\xEEn); j before a soft k (ochi\u2192ojchi, rachiu\u2192rajchiu)."),
        f("\u2714 Sudul Olteniei: fier\u2192fchier (var. schier), vierme\u2192vghierme (var. zghierme).", "\u2714 Southern Oltenia: fier\u2192fchier (var. schier), vierme\u2192vghierme (var. zghierme).")
      ] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 u final surd (om\u02B7, pom\u02B7); e\u032Fa>e \xEEn unele contexte (identic cu standardul).", "\u2718 devoiced final u (om\u02B7, pom\u02B7); e\u032Fa>e in some contexts (same as standard).")] },
      { h: f("De ce nu sunt pagini separate", "Why there are no separate pages"), i: [
        f("Muntenia central\u0103 vs. sudic\u0103: sursa nu d\u0103 nicio diferen\u021B\u0103 fonetic\u0103 \xEEntre ele; spune c\u0103 \xEEmp\u0103r\u021Birile mai fine nu se sprijin\u0103 pe tr\u0103s\u0103turi fonetice sistematice.", "Central vs. southern Muntenia: the source gives no phonetic difference between them; it says finer divisions do not rest on systematic phonetic features."),
        f("Dobrogea: considerat\u0103 o varietate de tranzi\u021Bie \xEEntre muntean \u0219i moldovean, \u201E\u0219i mai pu\u021Bin distinct\u0103\u201D dec\xE2t Oltenia; f\u0103r\u0103 tr\u0103s\u0103turi fonetice listate.", "Dobruja: considered a transition variety between Wallachian and Moldavian, \u201Ceven less distinct\u201D than Oltenia; no phonetic features listed."),
        f("Influen\u021Be de margine (NE: moldoveneasc\u0103; N: Transilvania central\u0103/sudic\u0103; NV: Banat \u0219i Ha\u021Beg): numite, dar f\u0103r\u0103 tr\u0103s\u0103turi.", "Edge influences (NE: Moldavian; N: central/southern Transylvania; NW: Banat and Ha\u021Beg): named, but no features given.")
      ] },
      { h: f("Morfologie \u0219i lexic (doar notate)", "Morphology and lexis (recorded only)"), i: [
        f("Articol posesiv variabil al, a, ai, ale; subjunctive s\u0103 stea, s\u0103 dea, s\u0103 bea; imperative adu, vino; vocativ \xEEn -o (Leano); imperfect pl. -a \xEEn Muntenia (ei lucra) vs. -au \xEEn Oltenia; pluperfect f\u0103r\u0103 -r\u0103- (ei c\xE2ntase); -\u0103r\u0103 pe perfectul compus \xEEn Muntenia (am c\xE2ntat\u0103r\u0103); forme iotacizate (eu cei, eu viu, ceind).", "Variable possessive article al, a, ai, ale; subjunctives s\u0103 stea, s\u0103 dea, s\u0103 bea; imperatives adu, vino; vocative in -o (Leano); imperfect pl. -a in Muntenia (ei lucra) vs. -au in Oltenia; pluperfect without -r\u0103- (ei c\xE2ntase); -\u0103r\u0103 on the compound perfect in Muntenia (am c\xE2ntat\u0103r\u0103); iotacized forms (eu cei, eu viu, ceind)."),
        f("Oltenia: perfectul simplu \xEEn toate persoanele (tr\u0103s\u0103tura cea mai cunoscut\u0103), plural feminin \xEEn -i (cas\u0103\u2013c\u0103\u0219i), \u0103\u0219tea invariabil, f\u0103r\u0103 -esc- la conj. IV (amoarte), dec\xE2t f\u0103r\u0103 nega\u021Bie, sufixul -ete (brabete, dovlete), pronume tale/t\u0103lic\u0103, -\u0219a (aici\u0219a).", "Oltenia: simple perfect in all persons (the best-known trait), feminine plural in -i (cas\u0103\u2013c\u0103\u0219i), invariable \u0103\u0219tea, no -esc- in conj. IV (amoarte), dec\xE2t without negation, suffix -ete (brabete, dovlete), pronoun tale/t\u0103lic\u0103, -\u0219a (aici\u0219a).")
      ] }
    ] },
    moldova: { title: f("Moldova (Rom\xE2nia)", "Moldavia (Romania)"), sections: [
      { h: f("Zon\u0103", "Area"), i: [f("Bac\u0103u, Boto\u0219ani, Gala\u021Bi, Ia\u0219i, Neam\u021B, Suceava, Vaslui, Vrancea; izoglose \xEEn nordul Buz\u0103ului, Br\u0103ilei, Tulcei \u0219i \xEEn NE Transilvaniei. Grani\u021Ba Rom\xE2nia/Republica Moldova nu e o grani\u021B\u0103 dialectal\u0103. [Wikipedia EN \u2013 Moldavian, edi\u021Bia actual\u0103]", "Bac\u0103u, Boto\u0219ani, Gala\u021Bi, Ia\u0219i, Neam\u021B, Suceava, Vaslui, Vrancea; isoglosses in northern Buz\u0103u, Br\u0103ila, Tulcea and NE Transylvania. The Romania/Moldova border is not a dialect border. [Wikipedia EN \u2013 Moldavian, current revision]")] },
      { h: f("Implementat \u2714", "Implemented \u2714"), i: [
        f("\u2714 ce/ci/ge/gi\u2192\u0219/j (nu sistematic; \xEEn p\u0103r\u021Bi din SV \u0219i NE se p\u0103streaz\u0103 distinc\u021Bia); vocalele se schimb\u0103 \xCENAINTE de africate (cin\u0103\u2192\u0219in\u0103, nu \u0219\xEEn\u0103).", "\u2714 ce/ci/ge/gi\u2192\u0219/j (not systematic; the distinction survives in parts of the SW and NE); vowels shift BEFORE the affricate change (cin\u0103\u2192\u0219in\u0103, not \u0219\xEEn\u0103)."),
        f("\u2714 Dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a; -i final dispare (p\u0103rin\u021Bi\u2192p\u0103rin\u021B, vezi\u2192vez).", "\u2714 After s, z, \u0219, j, \u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a; final -i disappears (p\u0103rin\u021Bi\u2192p\u0103rin\u021B, vezi\u2192vez)."),
        f("\u2714 pi\u2192chi, bi\u2192ghi; NORD f\u2192\u0219, v\u2192j; SUD f\u2192h, v\u2192\u0125 (Wikipedia, edi\u021Bia actual\u0103). v\u2192h \xEEnaintea lui o/u doar \xEEn volbur\u0103, vulpe, vultan (nord).", "\u2714 pi\u2192chi, bi\u2192ghi; NORTH f\u2192\u0219, v\u2192j; SOUTH f\u2192h, v\u2192\u0125 (Wikipedia, current revision). v\u2192h before o/u only in volbur\u0103, vulpe, vultan (north)."),
        f("\u2714 ia\u2192ie (b\u0103iat\u2192b\u0103iet); -ea final\u2192\xE9; -\u0103 final\u2192\xEE; -e final\u2192i; zic\u2192dz\xEEc; lovesc\u2192lov\u0103sc (e\u2192\u0103 dup\u0103 v, doar cuvintele din surs\u0103).", "\u2714 ia\u2192ie (b\u0103iat\u2192b\u0103iet); final -ea\u2192\xE9; final -\u0103\u2192\xEE; final -e\u2192i; zic\u2192dz\xEEc; lovesc\u2192lov\u0103sc (e\u2192\u0103 after v, only the source's words).")
      ] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 o\u2192u neaccentuat; \u0103\u2192a \xEEnaintea accentului \xEEn nord (m\u0103gar\u2192magar, p\u0103dure\u2192padure); labializare \xEEnaintea lui o (bwoli); sincop\u0103; i/u asilabice finale; \u0268 p\u0103strat \xEEn c\xE2ine/m\xE2ine/p\xE2ine (e \u0219i \xEEn aplica\u021Bie p\u0103strat).", "\u2718 unstressed o\u2192u; \u0103\u2192a before the stress in the north (m\u0103gar\u2192magar, p\u0103dure\u2192padure); labialization before o (bwoli); syncope; asyllabic final i/u; \u0268 kept in c\xE2ine/m\xE2ine/p\xE2ine (also kept in the app).")] },
      { h: f("Conflicte \xEEntre surse", "Conflicts between sources"), i: [
        f("f: Wikipedia spune h \xEEn sud, \u0219 \xEEn nord, dar Creang\u0103 (Neam\u021B, nordul?) are hi (C\u0103prioar\u0103 2002). De aceea Neam\u021B e pus la \u201Esud\u201D, cu avertisment.", "f: Wikipedia says h in the south, \u0219 in the north, but Creang\u0103 (Neam\u021B, the north?) has hi (C\u0103prioar\u0103 2002). Hence Neam\u021B is placed with \u201Csouth\u201D, with a warning."),
        f("dz: Wikipedia \xEEl d\u0103 pentru moldoveneasc\u0103 (dz\xEEc), dar Sp\xEEnu 2018 spune c\u0103 NU se p\u0103streaz\u0103 \xEEn Republica Moldova. Aplicat doar pe paginile din Rom\xE2nia.", "dz: Wikipedia gives it for Moldavian (dz\xEEc), but Sp\xEEnu 2018 says it is NOT kept in the Republic of Moldova. Applied only on the Romanian pages."),
        f("m\u2192n: Wikipedia \xEEl d\u0103 (miel\u2192niel); C\u0103prioar\u0103 spune c\u0103 la Creang\u0103 m nu se muiaz\u0103. Folosit doar \xEEn Basarabia \u0219i R\u0103d\u0103u\u021Bi (surse locale).", "m\u2192n: Wikipedia gives it (miel\u2192niel); C\u0103prioar\u0103 says m is not softened in Creang\u0103. Used only in Bessarabia and R\u0103d\u0103u\u021Bi (local sources).")
      ] },
      { h: f("Morfologie \u0219i lexic (notate)", "Morphology and lexis (recorded)"), i: [f("a meu invariabil; tatul; o fost (el/ei); m-am fost dus \xEEn nord; s\u0103 deie/steie/beie; \xE1d\u0103, vin\u0103; genitiv-dativ analitic (d\u0103 m\xE2ncare la pisic\u0103); d\xE2nsul/d\xE2nsa; aista, ajasta, a\u0219ela; om\u0103t, agud\u0103, poame, perje, ciubot\u0103, cori.", "invariable a meu; tatul; o fost (he/they); m-am fost dus in the north; s\u0103 deie/steie/beie; \xE1d\u0103, vin\u0103; analytic genitive-dative (d\u0103 m\xE2ncare la pisic\u0103); d\xE2nsul/d\xE2nsa; aista, ajasta, a\u0219ela; om\u0103t, agud\u0103, poame, perje, ciubot\u0103, cori.")] }
    ] },
    basarabia: { title: f("Basarabia", "Bessarabia"), sections: [
      { h: f("Cum am \xEEmp\u0103r\u021Bit-o", "How I split it"), i: [
        f("Sp\xEEnu 2009 reia clasificarea lui Udler (ALM 1968): grupul central (cea mai mare parte), nord-vest (inclusiv N Bucovinei, Her\u021Ba, Hotin), nord-est (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari + Kotovsk), sud-vest (Cahul\u2013Ismail\u2013Chilia\u2013V\xE2lcov) \u0219i bucovinean. \u201ECea mai v\u0103dit\u0103 e opozi\u021Bia dintre centru \u0219i sud-vest.\u201D Co\u0219eriu: nordul \u0219i centrul \u021Bin de moldovenesc, sudul de muntean.", "Sp\xEEnu 2009 reuses Udler's classification (ALM 1968): central group (most of the territory), north-west (incl. N Bukovina, Her\u021Ba, Hotin), north-east (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari + Kotovsk), south-west (Cahul\u2013Ismail\u2013Kilia\u2013Vylkove) and Bukovinian. \u201CThe clearest opposition is between the central and south-western groups.\u201D Co\u0219eriu: the north and centre belong to Moldavian, the south to Wallachian."),
        f("Fiecare grup din care am g\u0103sit cel pu\u021Bin o diferen\u021B\u0103 redabil\u0103 are pagin\u0103; \u201Ebucovinean\u201D e tratat la Bucovina.", "Every group with at least one renderable difference has a page; \u201CBukovinian\u201D is treated under Bukovina.")
      ] },
      { h: f("Centru \u2714", "Centre \u2714"), i: [
        f("\u2714 a accentuat dup\u0103 \u0219/j\u2192\u0103 (\u0219\u0103rpi, \u0219\u0103pti, j\u0103li): ap\u0103rut \xEEn sud, extins spre nord; azi la v\xE2rstnici. Aplica\u021Bie: doar la \xEEnceput de cuv\xE2nt, cuvinte de \u22642 silabe (accentul nu se vede).", "\u2714 stressed a after \u0219/j\u2192\u0103 (\u0219\u0103rpi, \u0219\u0103pti, j\u0103li): started in the south, spread north; today in older speakers. App: word-initial only, words of \u22642 syllables (stress is invisible)."),
        f("\u2714 e\u2192\u0103 dup\u0103 \u0219, s, z, \u021B, j (s\u0103mn, s\u0103ti, \u0219\u0103d, \u021B\u0103l, z\u0103stri); apoi \u0219i r, m (r\u0103pidi, m\u0103rg) \u2014 \u201Egeneral la a 2-a \u0219i a 3-a v\xE2rst\u0103, sporadic la tineri\u201D.", "\u2714 e\u2192\u0103 after \u0219, s, z, \u021B, j (s\u0103mn, s\u0103ti, \u0219\u0103d, \u021B\u0103l, z\u0103stri); later also r, m (r\u0103pidi, m\u0103rg) \u2014 \u201Cgeneral among 2nd/3rd age, sporadic among the young\u201D."),
        f("\u2714 ea\u2192a \xEEnaintea lui a/\u0103 (alba\u021B\u0103, marg\u0103, sar\u0103, zam\u0103, \u021Bap\u0103n) \u2014 tip nordic; sudul muntenesc p\u0103streaz\u0103 ea.", "\u2714 ea\u2192a before a/\u0103 (alba\u021B\u0103, marg\u0103, sar\u0103, zam\u0103, \u021Bap\u0103n) \u2014 northern type; the Wallachian south keeps ea."),
        f("\u2714 Labiale \xEEn stadiul final: b\u2192ghi, p\u2192chi, m\u2192ni, f\u2192\u0219, v\u2192j; tinerii spun deja bumbi, piele, mire, fin, vierme.", "\u2714 Labials in the final stage: b\u2192ghi, p\u2192chi, m\u2192ni, f\u2192\u0219, v\u2192j; the young already say bumbi, piele, mire, fin, vierme."),
        f("\u2714 \u0219/j (nu africate): \u0219inj, arjint, \u0219olan; \u011Dos/\u011Doc \u2192 gios, gioc; jur, jug \u2192 giur, giug; fecior\u2192ficior, femeie\u2192fimeie (alt: fumeie, puntru \u2014 v\xE2rstnici); to\u021Bi\u2192t\u0103\u021B.", "\u2714 \u0219/j (not affricates): \u0219inj, arjint, \u0219olan; \u011Dos/\u011Doc \u2192 gios, gioc; jur, jug \u2192 giur, giug; fecior\u2192ficior, femeie\u2192fimeie (also fumeie, puntru \u2014 elderly); to\u021Bi\u2192t\u0103\u021B.")
      ] },
      { h: f("Nord-est (Sp\xEEnu 2009) \u2714", "North-east (Sp\xEEnu 2009) \u2714"), i: [
        f("\u2714 ce/ci/ge/gi\u2192\u0219\u0301/j\u0301 (fricative muiate): \u0219\u02B2in\u0219\u02B2, cru\u0219\u02B2e, \u0219\u02B2olan, j\u02B2inj\u02B2i, arj\u02B2in.", "\u2714 ce/ci/ge/gi\u2192\u0219\u0301/j\u0301 (soft fricatives): \u0219\u02B2in\u0219\u02B2, cru\u0219\u02B2e, \u0219\u02B2olan, j\u02B2inj\u02B2i, arj\u02B2in."),
        f("\u2714 ou\u0103/rou\u0103/nou\u0103/plou\u0103 cu o diftongat; guler\u2192guliar, nepot\u2192niapot, nevast\u0103\u2192niavast\u0103; necaz\u2192nacaz (a p\u0103strat); s\u0103\u2192s\xEE (\u0219i s\xEE fie). Notate \u0219i \xEEn SV Ucrainei \u0219i SE Maramure\u0219ului.", "\u2714 ou\u0103/rou\u0103/nou\u0103/plou\u0103 with diphthongized o; guler\u2192guliar, nepot\u2192niapot, nevast\u0103\u2192niavast\u0103; necaz\u2192nacaz (a kept); s\u0103\u2192s\xEE (and s\xEE fie). Also noted in SW Ukraine and SE Maramure\u0219."),
        f("\u2718 b, p \xEEn stadii intermediare (ghe, che\u2026): simbolurile din PDF sunt ilizibile, nu le-am implementat. \u2718 \u0103 final\u2192\xEE (urz\xEDc\xEE) e inclus.", "\u2718 b, p in intermediate stages (ghe, che\u2026): the PDF symbols are unreadable, so not implemented. (Final \u0103\u2192\xEE, urz\xEDc\xEE, is included.)")
      ] },
      { h: f("Nord-vest \u2714", "North-west \u2714"), i: [f("\u2714 Doar diftongarea lui o (ou\u0103\u2192oau\u0103\u2026) e redabil\u0103; \u201Earii laterale NE \u0219i NV\u201D.", "\u2714 Only the diphthongization of o (ou\u0103\u2192oau\u0103\u2026) is renderable; \u201Clateral areas NE and NW\u201D.")] },
      { h: f("Sud-vest \u2714 (inferen\u021B\u0103)", "South-west \u2714 (inference)"), i: [
        f("\u2714 Africate \u0109, \u01E7 p\u0103strate (ari\u0109, \u0109ernal\u0103, \u0109olan, fa\u0109e) \u2014 \xEEn restul masivului \u0219/j. Dedus dintr-o singur\u0103 propozi\u021Bie a lui Sp\xEEnu 2009; recite\u0219te-l \xEEnainte s\u0103 te bazezi.", "\u2714 Affricates \u0109, \u01E7 kept (ari\u0109, \u0109ernal\u0103, \u0109olan, fa\u0109e) \u2014 the rest of the block has \u0219/j. Inferred from a single sentence of Sp\xEEnu 2009; re-read it before relying on this."),
        f("Lexic: varz\u0103 (nu curechi), pr\u0103\u0219tin\u0103 (nu tescovin\u0103); a\u0219(a) r\u0103m\xE2ne dominant (nu a\u0219\u0103).", "Lexis: varz\u0103 (not curechi), pr\u0103\u0219tin\u0103 (not tescovin\u0103); a\u0219(a) stays dominant (not a\u0219\u0103).")
      ] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 \u0103\u2192a \xEEnainte de accent la nord (barbat, magar, padure; v\xE2rstnici); e medial neaccentuat\u2192a (sacar\u0103, spari\xF3s, c\u0103rpan, galban); u\u2192o (poronc\u0103, sapon, fodul); o diftongat \xEEn NE/NV; fasuli, cuco\u0219, tucma, bubuc; intra\u2192\xEEntra; pom\xE2nt; dz nu se p\u0103streaz\u0103 aici.", "\u2718 \u0103\u2192a before the stress in the north (barbat, magar, padure; elderly); unstressed medial e\u2192a (sacar\u0103, spari\xF3s, c\u0103rpan, galban); u\u2192o (poronc\u0103, sapon, fodul); diphthongized o in NE/NW; fasuli, cuco\u0219, tucma, bubuc; intra\u2192\xEEntra; pom\xE2nt; dz is not kept here.")] },
      { h: f("Lexic (notat)", "Lexis (recorded)"), i: [f("ciolan, om\u0103t, hulub, p\xE2ntece, a pi\u0219ca, p\u0103pu\u0219oi, mo\u0219 (unchi), v\u0103dan\u0103, ogheal, \u021B\xE2ntirim, harbuz, ciubot\u0103, bumb, baistruc, glod, r\u0103cituri, curechi, tescovin\u0103, m\xE2\u021B\u0103 \u2014 vezi Exemple.", "ciolan, om\u0103t, hulub, p\xE2ntece, a pi\u0219ca, p\u0103pu\u0219oi, mo\u0219 (uncle), v\u0103dan\u0103, ogheal, \u021B\xE2ntirim, harbuz, ciubot\u0103, bumb, baistruc, glod, r\u0103cituri, curechi, tescovin\u0103, m\xE2\u021B\u0103 \u2014 see Examples.")] }
    ] },
    bucovina: { title: f("Bucovina", "Bukovina"), sections: [
      { h: f("Ce spune Turcule\u021B (recitit integral)", "What Turcule\u021B says (re-read in full)"), i: [
        f("Patru arii: 1) dornean (tranzi\u021Bie \xEEntre NE Transilvaniei \u0219i Moldova, format sec. XVII\u2013XVIII); 2) c\xE2mpulungean (cel mai arhaic); 3) r\u0103d\u0103u\u021Bean (moldovenesc cu tr\u0103s\u0103turi arhaice \u0219i straturi ardelene\u0219ti; pe valea superioar\u0103 a Sucevei o arie mic\u0103 aparte); 4) sud-est \u201Eafricatizant\u201D (ardeleni din sec. XVIII peste o baz\u0103 c\xE2mpulungean\u0103).", "Four areas: 1) Dorna (transition between NE Transylvania and Moldavia, formed 17th\u201318th c.); 2) C\xE2mpulung (the most archaic); 3) R\u0103d\u0103u\u021Bi (Moldavian with archaic traits and Transylvanian layers; a small separate area on the upper Suceava valley); 4) south-east \u201Cafricatizing\u201D (18th-c. Transylvanians over a C\xE2mpulung-type base)."),
        f("COREC\u021AIE: \u201Eafricatizant\u201D = chi/ghi (k', g') \u2192 ci/gi \u0219i t', d' (muiate) \u2192 c, g (frunce, gince); ce/ci primare devin \u0219/j. \xCEn notele mele vechi scrisesem \u201Ec, g \u2192 s, z\u201D: era o citire gre\u0219it\u0103 a OCR-ului pentru \u0219, j.", "CORRECTION: \u201Cafricatizing\u201D = chi/ghi (k', g') \u2192 ci/gi and softened t', d' \u2192 c, g (frunce, gince); primary ce/ci become \u0219/j. My old notes said \u201Cc, g \u2192 s, z\u201D: that was a misreading of OCR for \u0219, j.")
      ] },
      { h: f("Implementat \u2714", "Implemented \u2714"), i: [
        f("\u2714 C\xE2mpulung: p\u0103streaz\u0103 ce/ci; f\u2192h', v\u2192\u0125; labiala p\u0103strat\u0103 (pchi, bghi, mni); e dup\u0103 s/z/\u0219/j r\u0103m\xE2ne (rece, \u0219ed).", "\u2714 C\xE2mpulung: keeps ce/ci; f\u2192h', v\u2192\u0125; labial kept (pchi, bghi, mni); e after s/z/\u0219/j stays (rece, \u0219ed)."),
        f("\u2714 Pojor\xE2ta\u2013Fundu Moldovei: dentale muiate (influen\u021B\u0103 ardelean\u0103-maramure\u0219ean\u0103), \xEEn sc\u0103dere; vocale finale tot mai \xEEnchise (moldovenizare).", "\u2714 Pojor\xE2ta\u2013Fundu Moldovei: softened dentals (Transylvanian\u2013Maramure\u0219 influence), declining; final vowels increasingly closed (Moldavianization)."),
        f("\u2714 Dorna: chi/ghi africatizate, dentale muiate; frecven\u021Ba scade NV\u2192SE (Co\u0219na: generale; Crucea: sporadice); \xEEnchiderea lui -\u0103/-e cre\u0219te spre SE. Co\u0219na: a protonic\u2192\u0103 (p\u0103har, c\u0103pac, t\u0103bac), ps\u2192pt (cap\u021B\u0103), oa\u2192o.", "\u2714 Dorna: chi/ghi africatized, softened dentals; frequency drops NW\u2192SE (Co\u0219na: general; Crucea: sporadic); closing of -\u0103/-e grows towards SE. Co\u0219na: protonic a\u2192\u0103 (p\u0103har, c\u0103pac, t\u0103bac), ps\u2192pt (cap\u021B\u0103), oa\u2192o."),
        f("\u2714 R\u0103d\u0103u\u021B: c,g\u2192\u0219,j; f,v\u2192\u0219,j (zespe = excep\u021Bie); labiala se pierde (chi, ghi, ni: recent); -\u0103/-e finale se \xEEnchid (consecvent \xEEn est); dipi (dup\u0103).", "\u2714 R\u0103d\u0103u\u021Bi: c,g\u2192\u0219,j; f,v\u2192\u0219,j (zespe = exception); labial lost (chi, ghi, ni: recent); final -\u0103/-e closed (consistent in the east); dipi (dup\u0103)."),
        f("\u2714 Valea superioar\u0103 a Sucevei: ca R\u0103d\u0103u\u021B + chi/ghi africatizate.", "\u2714 Upper Suceava valley: like R\u0103d\u0103u\u021Bi + chi/ghi africatized."),
        f("\u2714 Sud-est: \u0219/j + chi/ghi\u2192ci/gi + t,d\u2192c,g. Mozaic: sate vecine pot diferi; cele care nu au africatizare (Slatina, Horodniceni, Baia\u2026) nu sunt incluse.", "\u2714 South-east: \u0219/j + chi/ghi\u2192ci/gi + t,d\u2192c,g. A mosaic: neighbouring villages may differ; villages without africatization (Slatina, Horodniceni, Baia\u2026) are not covered."),
        f("\u2714 Insule vechi (Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na, Zvori\u0219tea): \u0109, \u01E7 p\u0103strate + f,v\u2192h',\u0125.", "\u2714 Old islands (Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na, Zvori\u0219tea): \u0109, \u01E7 kept + f,v\u2192h',\u0125.")
      ] },
      { h: f("Nu are pagin\u0103", "Has no page"), i: [
        f("C\xE2rlibaba: insul\u0103 ardeleneasc\u0103 (vest-maramure\u0219ean\u0103); \u0109,\u01E7 \u201Edure\u201D, palatale confundate cu dentale, labiodentale \xEEn h', d'/\u011D\u2026: simbolurile sunt prea deteriorate \xEEn PDF.", "C\xE2rlibaba: a Transylvanian (west-Maramure\u0219) island; \u201Chard\u201D \u0109,\u01E7, palatals confused with dentals, labiodentals in h', d'/\u011D\u2026: the symbols are too damaged in the PDF."),
        f("Cioc\u0103ne\u0219ti: amestec dintre tipul c\xE2mpulungean vechi \u0219i cel dornean (\u0109,\u01E7 primare coexist\u0103 cu \u0219/j \u0219i cu \u0109,\u01E7 secundare).", "Cioc\u0103ne\u0219ti: a mix of the old C\xE2mpulung type and the Dorna type (primary \u0109,\u01E7 coexist with \u0219/j and secondary \u0109,\u01E7)."),
        f("Estic (Wikipedia EN): f\u0103r\u0103 tr\u0103s\u0103turi descrise.", "Eastern (Wikipedia EN): no features described.")
      ] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 tempo rapid, c\u0103dere de silabe finale (urchi\u021B\u0103, de\u0219e), vocative scurte (tat!, m\u0103j!), imperative apocopate (gr\u0103j), genitiv-dativ -li (capuli), adverbul a\u0219, ropoi, rotacism rezidual (p\xEEr\u0103, p\xEErei).", "\u2718 fast tempo, dropped final syllables, short vocatives (tat!, m\u0103j!), apocopated imperatives (gr\u0103j), genitive-dative -li (capuli), adverb a\u0219, ropoi, residual rhotacism (p\xEEr\u0103, p\xEErei).")] }
    ] },
    banat: { title: f("Banat", "Banat"), sections: [
      { h: f("Zon\u0103", "Area"), i: [f("Cara\u0219-Severin, Timi\u0219, sud Arad, sud Hunedoara, Banatul s\xE2rbesc, parte din Valea Timocului. Tranzi\u021Bie spre muntean \xEEn NV Olteniei; amestec cu Transilvania \xEEn NE (Ha\u021Beg) \u0219i spre sudul Cri\u0219anei. [Wikipedia EN \u2013 Banat, recitit]", "Cara\u0219-Severin, Timi\u0219, south Arad, south Hunedoara, Serbian Banat, part of the Timok Valley. Transition to Wallachian in NW Oltenia; mixing with Transylvania in the NE (Ha\u021Beg) and towards southern Cri\u0219ana. [Wikipedia EN \u2013 Banat, re-read]")] },
      { h: f("Implementat \u2714 (toate verificate pe textul recitit)", "Implemented \u2714 (all checked against the re-read text)"), i: [
        f("\u2714 t,d\u2192\u0107,\u0111; n,l,r muiate \xEEnaintea lui e,i,ea (diminea\u021B\u0103\u2192\u0111imi\u0144ea\u021B\u0103, frunte\u2192frun\u0107e, vine\u2192vi\u0144e, lemne\u2192\u013Aem\u0144e, mare\u2192ma\u0155e).", "\u2714 t,d\u2192\u0107,\u0111; n,l,r softened before e,i,ea (diminea\u021B\u0103\u2192\u0111imi\u0144ea\u021B\u0103, frunte\u2192frun\u0107e, vine\u2192vi\u0144e, lemne\u2192\u013Aem\u0144e, mare\u2192ma\u0155e)."),
        f("\u2714 ce/ci/ge/gi\u2192\u0219\u02B2/j\u02B2 (ceas, cin\u0103, cinci, fuge, ginere, s\xE2nge); dup\u0103 s,z,\u0219,j,\u021B \u0219i st: e\u2192\u0103, i\u2192\xEE, ea\u2192a (sear\u0103, semn, singur, zer, zid, p\u0103\u0219im, \u0219ed, jir, \u0219i, steag, poveste\u2192povest\u0103).", "\u2714 ce/ci/ge/gi\u2192\u0219\u02B2/j\u02B2 (ceas, cin\u0103, cinci, fuge, ginere, s\xE2nge); after s,z,\u0219,j,\u021B and st: e\u2192\u0103, i\u2192\xEE, ea\u2192a (sear\u0103, semn, singur, zer, zid, p\u0103\u0219im, \u0219ed, jir, \u0219i, steag, poveste\u2192povest\u0103)."),
        f("\u2714 ie dup\u0103 labial\u0103\u2192e (fier\u2192fer, piele\u2192pe\u013Ae, piept\u2192pept, miercuri\u2192mercu\u0155i, vierme\u2192verme); alte labiale r\u0103m\xE2n (bivol).", "\u2714 ie after a labial\u2192e (fier\u2192fer, piele\u2192pe\u013Ae, piept\u2192pept, miercuri\u2192mercu\u0155i, vierme\u2192verme); other labials stay (bivol)."),
        f("\u2714 dz p\u0103strat: br\xE2nz\u0103, buz\u0103, grumaz, m\xE2nz (substrat); zece, auzi, frunz\u0103 (latin: d + e/i lung).", "\u2714 dz kept: br\xE2nz\u0103, buz\u0103, grumaz, m\xE2nz (substrate); zece, auzi, frunz\u0103 (Latin: d + long e/i)."),
        f("\u2714 Sud-vest: luat\u2192luvat, caut\u2192capt (Petrovici; DIA-BAN).", "\u2714 South-west: luat\u2192luvat, caut\u2192capt (Petrovici; DIA-BAN).")
      ] },
      { h: f("Neimplementat \u2718 (cere accent sau alegere regional\u0103)", "Not implemented \u2718 (needs stress or a regional choice)"), i: [f("\u2718 e,\u0103,o neaccentuate\u2192i,\xEE,u \u0219i a\u2192\u0103 (papuc\u2192p\u0103puc, plecat\u2192plicat, \xEEngropat\u2192\xEEngrupat); e accentuat\u2192je (muiere, fete\u2192fjete, poveste, verde, pe\u0219te); oa\u2192wa sau \u0254 (soare\u2192swarje; coaj\u0103\u2192c\u0254j\u0103) dup\u0103 zon\u0103; n\u02B2 etimologic (cui, c\u0103lc\xE2i, r\u0103m\xE2i, claie, sicriu); \u0268 vechi \xEEn c\xE2ine/m\xE2ine/p\xE2ine cu n\u02B2 (k\u0268n\u02B2e).", "\u2718 unstressed e,\u0103,o\u2192i,\xEE,u and a\u2192\u0103 (papuc\u2192p\u0103puc, plecat\u2192plicat, \xEEngropat\u2192\xEEngrupat); stressed e\u2192je (muiere, fete\u2192fjete, poveste, verde, pe\u0219te); oa\u2192wa or \u0254 by area (soare\u2192swarje; coaj\u0103\u2192c\u0254j\u0103); etymological n\u02B2 (cui, c\u0103lc\xE2i, r\u0103m\xE2i, claie, sicriu); old \u0268 in c\xE2ine/m\xE2ine/p\xE2ine with n\u02B2 (k\u0268n\u02B2e).")] },
      { h: f("Subvariet\u0103\u021Bi numite de surs\u0103", "Sub-varieties named by the source"), i: [
        f("Sud-vest (are pagin\u0103), est, nord (\u0268 mai anterior spre i, \xEEn jurul Lugojului: r\u0268d), nord-est (Ha\u021Beg). Pentru est, nord \u0219i NE nu am tr\u0103s\u0103turi redabile \xEEn scris (nuan\u021B\u0103 vocalic\u0103), deci nu au pagini.", "South-west (has a page), east, north (\u0268 more fronted towards i, around Lugoj: r\u0268d), north-east (Ha\u021Beg). For east, north and NE I have no renderable features (a vowel shade), so no pages."),
        f("DIA-BAN: unele tr\u0103s\u0103turi nu apar la nord de Bega sau doar sporadic.", "DIA-BAN: some features do not occur north of the Bega or only sporadically.")
      ] },
      { h: f("Morfologie \u0219i lexic (notate)", "Morphology and lexis (recorded)"), i: [f("cas\u0103\u2013c\u0103\u0219i; genitiv-dativ analitic (piciorul de la scaun); a meu invariabil; perfect simplu activ; o m\u0103rs/or m\u0103rs; lucr\u0103, \xEEnfloare (f\u0103r\u0103 -ez/-esc); eu cobor, ei cobor; am fost avut, m-am fost dus; nu fugire\u021B, nu m\xE2ncare\u021B; vrea\u0219 face; dog\u0103ta, z\u0103uita (prefixe de aspect, s\xE2rbism); \u0103l, a, \u0103i, ale; alt\u0103\u0219\u02B2e, tot natul; s\u0268m \u201Esunt\u201D.", "cas\u0103\u2013c\u0103\u0219i; analytic genitive-dative (piciorul de la scaun); invariable a meu; active simple perfect; o m\u0103rs/or m\u0103rs; lucr\u0103, \xEEnfloare (no -ez/-esc); eu cobor, ei cobor; am fost avut, m-am fost dus; nu fugire\u021B, nu m\xE2ncare\u021B; vrea\u0219 face; dog\u0103ta, z\u0103uita (aspect prefixes, Serbian influence); \u0103l, a, \u0103i, ale; alt\u0103\u0219\u02B2e, tot natul; s\u0268m \u201CI am\u201D.")] }
    ] },
    crisana: { title: f("Cri\u0219ana", "Cri\u0219ana"), sections: [
      { h: f("Zon\u0103 \u0219i subvariet\u0103\u021Bi", "Area and sub-varieties"), i: [
        f("Bihor, S\u0103laj, Satu Mare, NV Alba, V Cluj, N Arad, N Hunedoara, SV Maramure\u0219. Subvariet\u0103\u021Bi: Bihor, \u021Aara Mo\u021Bilor, valea Some\u0219ului, \u021Aara Oa\u0219ului; sud-estul = tranzi\u021Bie spre Banat (Uri\u0163escu). Neindividualizat de Weigand, Philippide, Iordan, Vasiliu; separat la Todoran, Petrovici, Coteanu.", "Bihor, S\u0103laj, Satu Mare, NW Alba, W Cluj, N Arad, N Hunedoara, SW Maramure\u0219. Sub-varieties: Bihor, \u021Aara Mo\u021Bilor, Some\u0219 valley, \u021Aara Oa\u0219ului; the south-east = transition to Banat (Uri\u0163escu). Not individualized by Weigand, Philippide, Iordan, Vasiliu; separate for Todoran, Petrovici, Coteanu.")
      ] },
      { h: f("Au pagini", "Have pages"), i: [
        f("Cri\u0219ana general\u0103; \u021Aara Mo\u021Bilor (n\u2192r \xEEntre vocale \xEEn cuvinte vechi: oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0259); \u021Aara Oa\u0219ului (l+consoan\u0103\u2192\u026B/w: alb\u2192a\u026Bb; r cu vibra\u021Bii multiple \u2014 neredat). Uri\u0163escu: Oa\u0219ul e distinct la toate nivelurile \xEEn afar\u0103 de morfologie (grupuri Oa\u0219-centru, Oa\u0219-nord).", "General Cri\u0219ana; \u021Aara Mo\u021Bilor (intervocalic n\u2192r in old words: oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0259); \u021Aara Oa\u0219ului (l+consonant\u2192\u026B/w: alb\u2192a\u026Bb; multiply-trilled r \u2014 not rendered). Uri\u0163escu: Oa\u0219 is distinct at all levels except morphology (Oa\u0219-centre, Oa\u0219-north groups).")
      ] },
      { h: f("Nu au pagini (nicio diferen\u021B\u0103 redabil\u0103 \xEEn surse)", "No pages (no renderable difference in the sources)"), i: [f("Bihor, valea Some\u0219ului, sud-estul de tranzi\u021Bie: numite, f\u0103r\u0103 tr\u0103s\u0103turi fonetice listate.", "Bihor, Some\u0219 valley, the transition south-east: named, no phonetic features listed.")] },
      { h: f("Implementat \u2714 (o singur\u0103 surs\u0103 detaliat\u0103)", "Implemented \u2714 (one detailed source)"), i: [f("\u2714 oa\u2192o; dup\u0103 labial\u0103 e\u2192\u0103, ea\u2192a (merg\u2192m\u0103rg); dup\u0103 s,z,\u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a; o- ini\u021Bial\u2192w\u0103- (accentuat); c\xE2ine\u2192c\xEE\u0144e, b\u0103iat\u2192b\u0103iet; ge/gi\u2192je/ji (ce/ci r\u0103m\xE2n africate); pi\u2192pti, bi\u2192bdi, mi\u2192mni, f\u2192h/\u0219, v\u2192d/\u0266\u02B2 (variabil, mai des \xEEn nord); t,d\u2192t\u02B2,d\u02B2; sl\u2192skl.", "\u2714 oa\u2192o; after a labial e\u2192\u0103, ea\u2192a (merg\u2192m\u0103rg); after s,z,\u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a; initial o-\u2192w\u0103- (stressed); c\xE2ine\u2192c\xEE\u0144e, b\u0103iat\u2192b\u0103iet; ge/gi\u2192je/ji (ce/ci stay affricates); pi\u2192pti, bi\u2192bdi, mi\u2192mni, f\u2192h/\u0219, v\u2192d/\u0266\u02B2 (variable, commoner in the north); t,d\u2192t\u02B2,d\u02B2; sl\u2192skl.")] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 \xEEnchiderea vocalelor neaccentuate; \u0219,j fie declan\u0219eaz\u0103 vocale centrale, fie se muiaz\u0103 (u\u0219\u0103\u2192u\u0283\u02B2e); \u02B2/\u02B7 final asilabic; SV: dz\u2192z. Conflict cu EN-TRA (\u0219,j,r \xEEn unele graiuri): s-au implementat doar s,z,\u021B.", "\u2718 closing of unstressed vowels; \u0219,j either trigger central vowels or soften (u\u0219\u0103\u2192u\u0283\u02B2e); asyllabic final \u02B2/\u02B7. Conflict with EN-TRA (\u0219,j,r in some varieties): only s,z,\u021B implemented.")] },
      { h: f("Morfologie \u0219i lexic", "Morphology and lexis"), i: [f("a meu invariabil; lucr\u0103, str\u0103luce; \xEEmp\u0103r\u021B\u0103sc, sim\u021B\u0103sc; o zis/or zis; \u0219i fac\u0103 (conj. \u0219i \xEEn loc de s\u0103); s\u0103 deie/steie/beie/vreie; o vu c\xE2nta; c\u0103t\u0103 (c\u0103tre); nu plecare\u021Bi; spuj, viw.", "invariable a meu; lucr\u0103, str\u0103luce; \xEEmp\u0103r\u021B\u0103sc, sim\u021B\u0103sc; o zis/or zis; \u0219i fac\u0103 (conjunction \u0219i instead of s\u0103); s\u0103 deie/steie/beie/vreie; o vu c\xE2nta; c\u0103t\u0103 (towards); nu plecare\u021Bi; spuj, viw.")] }
    ] },
    maramures: { title: f("Maramure\u0219", "Maramure\u0219"), sections: [
      { h: f("Zon\u0103 \u0219i ramuri", "Area and branches"), i: [f("Trei ramuri, dup\u0103 tr\u0103s\u0103turi mai ales lexicale: centrul larg (cel mai reprezentativ), NV (influen\u021B\u0103 Oa\u0219), SE. Din cauza asta nu am pagini separate. Sud de Tisa: f,v\u2192\u015B,\u017A (Sp\xEEnu 2009), \u011D\u2192j \xEEn unele sate (Farca\u0219, lingv.ro 2023 \u2014 v\u0103zut, nefolosit).", "Three branches, by mostly lexical features, hence no separate pages. South of the Tisa: f,v\u2192\u015B,\u017A (Sp\xEEnu 2009), \u011D\u2192j in some villages (Farca\u0219, lingv.ro 2023 \u2014 seen, not used).")] },
      { h: f("Implementat \u2714", "Implemented \u2714"), i: [f("\u2714 f\u2192s, v\u2192z \xEEnaintea lui i (Weigand: sier, zin; azi tinerii: sin); p,b,m\u2192pt,bd,mn; l,n muiate; dup\u0103 s,z,\u0219,j,\u021B vocalele se schimb\u0103; dup\u0103 labial\u0103 ini\u021Bial\u0103 e\u2192\u0103; oa\u2192o; -ea\u2192\xE9; ia\u2192ie; de\u2192di; zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios.", "\u2714 f\u2192s, v\u2192z before i (Weigand: sier, zin; today the young say sin); p,b,m\u2192pt,bd,mn; l,n softened; vowels change after s,z,\u0219,j,\u021B; after an initial labial e\u2192\u0103; oa\u2192o; -ea\u2192\xE9; ia\u2192ie; de\u2192di; zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios.")] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 vocale mediane \xEEnchise spre i, \u0268, u; e\u2192\u025B c\xE2nd urmeaz\u0103 alt e (fete); i/u final surd (p\u0103curar); \u0268 p\u0103strat \xEEn \xEEmblu, \xEEmflu, \xEEntru; c,g mai pu\u021Bin palatale.", "\u2718 mid vowels closing towards i, \u0268, u; e\u2192\u025B when another e follows (fete); devoiced final i/u (p\u0103curar); \u0268 kept in \xEEmblu, \xEEmflu, \xEEntru; less palatal c,g.")] }
    ] },
    transilvania: { title: f("Transilvania", "Transylvania"), sections: [
      { h: f("Structur\u0103", "Structure"), i: [f("Mozaic de variet\u0103\u021Bi de tranzi\u021Bie (Weigand 1908; Petrovici: cu c\xE2t e mai vechi a\u0219ezarea, cu at\xE2t mai mult\u0103 f\u0103r\xE2mi\u021Bare). Cele mai distincte: Cri\u0219ana, Maramure\u0219; mai slabe: o zon\u0103 nord-estic\u0103 \u0219i una central-sudic\u0103 (Iv\u0103nescu: NE, centru \u0219i sud ca graiuri separate). Pentru centru-sud nu am g\u0103sit tr\u0103s\u0103turi proprii, deci nu are pagin\u0103.", "A mosaic of transition varieties (Weigand 1908; Petrovici: the older the settlement, the more fragmentation). Most distinct: Cri\u0219ana, Maramure\u0219; weaker: a north-eastern and a central-southern area (Iv\u0103nescu: NE, centre and south as separate speeches). I found no own features for central-south, so it has no page.")] },
      { h: f("Implementat \u2714", "Implemented \u2714"), i: [f("\u2714 \u0268j\u2192\u0268 (c\xEEne, m\xEEne, p\xEEne); dorm\u2192durm \xEEn toat\u0103 paradigma; dup\u0103 s,z,\u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a; oa\u2192o. NE: p\u2192pt, b\u2192bd, m\u2192m\u0144, f\u2192\u0219, v\u2192z (nu toate stadiile).", "\u2714 \u0268j\u2192\u0268 (c\xEEne, m\xEEne, p\xEEne); dorm\u2192durm throughout; after s,z,\u021B: e\u2192\u0103, i\u2192\xEE, ea\u2192a; oa\u2192o. NE: p\u2192pt, b\u2192bd, m\u2192m\u0144, f\u2192\u0219, v\u2192z (not all stages).")] },
      { h: f("Neimplementat \u2718", "Not implemented \u2718"), i: [f("\u2718 e,\u0103,o accentuate se deschid (\u025B,\u025C,\u0254); vocale accentuate mai lungi (\u201Ec\xE2ntat\u201D); a protonic\u2192\u0103 (pahar\u2192p\u0103har); accent pe prima silab\u0103 \xEEn centru/vest (s\xFAspin, \xC9mil); accent mutat pe r\u0103d\u0103cin\u0103 (bl\xE1st\u0103m, \xEEnf\u0103\u0219ur).", "\u2718 stressed e,\u0103,o open (\u025B,\u025C,\u0254); longer stressed vowels (\u201Csinging\u201D); protonic a\u2192\u0103 (pahar\u2192p\u0103har); first-syllable stress in centre/west (s\xFAspin, \xC9mil); stress moved to the root (bl\xE1st\u0103m, \xEEnf\u0103\u0219ur).")] }
    ] },
    timoc: { title: f("Valea Timocului", "Timok Valley"), sections: [
      { h: f("Grupuri", "Groups"), i: [f("~170 de localit\u0103\u021Bi din estul Serbiei (+ NV Bulgariei). Ungureni (vest, de la Banat, sec. XVIII\u2013XIX) \u0219i \u021B\u0103rani (est, ca vestul Olteniei); alte dou\u0103 grupuri \u0219i vorbire mixt\u0103 (Hutanu & Sorescu-Marinkovi\u0107 2015).", "~170 settlements in eastern Serbia (+ NW Bulgaria). Ungureni (west, from Banat, 18th\u201319th c.) and \u021A\u0103rani (east, like western Oltenia); two more groups and mixed speech (Hutanu & Sorescu-Marinkovi\u0107 2015).")] },
      { h: f("Date slabe", "Weak data"), i: [f("Ungureni: reguli luate dintr-un fragment ro.wikipedia + afirma\u021Bia OEAW; \u021B\u0103rani: reguli oltene\u0219ti prin analogie. Nu am g\u0103sit descriere fonetic\u0103 complet\u0103. Neimplementat: dies>dz\xEE, n\u02B2, \u0283/\u0292 vs. alveolo-palatale, sufixul -e\u0161\u0107e, \xEEmprumuturi s\xE2rbe, ortografii (Cyrillic + Latin, 2012). Atlasul Neiescu\u2013Beltechi\u2013Mocanu (2006) noteaz\u0103 labiale muiate \xEEn anumite contexte.", "Ungureni: rules taken from a ro.wikipedia excerpt + the OEAW statement; \u021A\u0103rani: Oltenian rules by analogy. I found no full phonetic description. Not implemented: dies>dz\xEE, n\u02B2, \u0283/\u0292 vs. alveolo-palatals, suffix -e\u0161\u0107e, Serbian loans, orthographies (Cyrillic + Latin, 2012). The Neiescu\u2013Beltechi\u2013Mocanu atlas (2006) records softened labials in some contexts.")] }
    ] }
  };
  var FAMILY = { muntenia: "muntenia", moldova: "moldova", basarabia: "basarabia", bucovina: "bucovina", banat: "banat", crisana: "crisana", maramures: "maramures", transilvania: "transilvania", timoc: "timoc", joc: "muntenia" };
  var LOG = [
    { h: f("Ce am verificat \xEEn aceast\u0103 trecere (1 nov. 2026)", "What this pass checked (1 Nov 2026)"), i: [
      f("Am recitit integral: Wikipedia EN (Wallachian, Moldavian \u2014 edi\u021Bia actual\u0103, Banat), Sp\xEEnu 2009, Sp\xEEnu 2018, Turcule\u021B 1977\u201378. Fragmente: Cri\u0219ana, Maramure\u0219, Transilvania, Bucovina, Petrovici. Nu am putut citi ro.wikipedia integral, c\u0103r\u021Bile Sp\xEEnu 2002/2011 \u0219i cele din Atlas.", "Re-read in full: Wikipedia EN (Wallachian, Moldavian \u2014 current revision, Banat), Sp\xEEnu 2009, Sp\xEEnu 2018, Turcule\u021B 1977\u201378. Excerpts: Cri\u0219ana, Maramure\u0219, Transylvania, Bukovina, Petrovici. I could not read ro.wikipedia in full, Sp\xEEnu's 2002/2011 books or the atlases."),
      f("Am scris teste automate (tests/run.mjs) cu exemple din surse; toate trec. Ele verific\u0103 forma generat\u0103, nu corectitudinea lingvistic\u0103 a sursei.", "I wrote automated tests (tests/run.mjs) with examples from the sources; all pass. They check the output, not the linguistic correctness of the source.")
    ] },
    { h: f("Erori g\u0103site \u0219i reparate", "Errors found and fixed"), i: [
      f("BUG GRAV: \\b din JavaScript nu recunoa\u0219te \u0103, \xE2, \xEE, \u0219, \u021B ca litere. Orice regul\u0103 cu cuvinte terminate \xEEn diacritice nu se aplica niciodat\u0103: arip\u0103\u2192harip\u0103, frunz\u0103, br\xE2nz\u0103, buz\u0103, hain\u0103, ho\u021B (\xEEn toate graiurile cu liste de cuvinte). Reparat cu delimitatori Unicode. \u201Earipi arip\u0103 aici alea\u201D \u2192 \u201Eharipi harip\u0103 aici halea\u201D.", "SERIOUS BUG: JavaScript's \\b does not treat \u0103, \xE2, \xEE, \u0219, \u021B as letters. Any rule whose words end in a diacritic never fired: arip\u0103\u2192harip\u0103, frunz\u0103, br\xE2nz\u0103, buz\u0103, hain\u0103, ho\u021B (in every dialect with word lists). Fixed with Unicode boundaries. \u201Caripi arip\u0103 aici alea\u201D \u2192 \u201Charipi harip\u0103 aici halea\u201D."),
      f("Prepozi\u021Bii/prefixe (Muntenia): regula era o list\u0103 \xEEnchis\u0103 de 4 cuvinte plus des-. Acum: lista din surs\u0103 (sourced) + extindere pe acela\u0219i tipar (extended: pentru\u2192p\u0103ntru, peste, din\u2026). \u201Ep\u0103ntru\u201D nu l-am g\u0103sit scris \xEEn nicio surs\u0103 citit\u0103; e marcat \u201Eextins\u201D.", "Prepositions/prefixes (Muntenia): the rule was a closed list of 4 words plus des-. Now: the source's list (sourced) + an extension by the same pattern (extended: pentru\u2192p\u0103ntru, peste, din\u2026). I did not find \u201Cp\u0103ntru\u201D written in any source I read; it is marked \u201Cextended\u201D."),
      f("des- se aplica la orice cuv\xE2nt care \xEEncepe cu des (desen\u2192d\u0103sen). Acum sunt excluse desen, desemna, de\u0219ert, destin.", "des- applied to any word starting with des (desen\u2192d\u0103sen). Now desen, desemna, destin are excluded."),
      f("m\u2192n/mn se aplica \u0219i \xEEn mijlocul cuv\xE2ntului (diminea\u021B\u0103\u2192dinina\u021B\u0103). Acum doar la \xEEnceput de cuv\xE2nt (mire, mic); doar \u201Enimic\u2192nim\u0144ic\u201D (NE Transilvania) r\u0103m\xE2ne \u0219i \xEEn interior, cum d\u0103 sursa.", "m\u2192n/mn also applied mid-word (diminea\u021B\u0103\u2192dinina\u021B\u0103). Now word-initial only (mire, mic); only \u201Cnimic\u2192nim\u0144ic\u201D (NE Transylvania) stays internal, as the source gives."),
      f("Basarabean: cea\u2192\u0219a se aplica DUP\u0102 ea\u2192a, deci cear\u0103\u2192car\u0103. Reordonat. a dup\u0103 \u0219/j\u2192\u0103 se aplica la orice a; sursa cere a accentuat \u2192 acum euristic\u0103 (\xEEnceput de cuv\xE2nt, \u22642 silabe), marcat \u201Eaproximare\u201D.", "Bessarabian: cea\u2192\u0219a ran AFTER ea\u2192a, so cear\u0103\u2192car\u0103. Reordered. a after \u0219/j\u2192\u0103 applied to every a; the source needs stressed a \u2192 now a heuristic (word-initial, \u22642 syllables), marked \u201Capproximation\u201D."),
      f("Cri\u0219ean: o ini\u021Bial\u2192w\u0103 se aplica \u0219i la oa\u2192o (oameni\u2192w\u0103meni). Reordonat \u0219i limitat la cuvinte scurte.", "Cri\u0219ana: initial o\u2192w\u0103 also hit oa\u2192o (oameni\u2192w\u0103meni). Reordered and limited to short words."),
      f("Moldovenesc: regula f\u2192h vs. f\u2192\u0219 era ambigu\u0103. Wikipedia (edi\u021Bia actual\u0103) o d\u0103 pe nord/sud \u2192 pagini separate; ad\u0103ugate v (ji\u021Bel/\u0125i\u021Bel), volbur\u0103\u2192holbur\u0103, lovesc\u2192lov\u0103sc, e\u2192\u0103 dup\u0103 r/m (SPI-18). j\u2192gios scos din Moldova Rom\xE2niei (doar \xEEn Basarabia, unde e atestat).", "Moldavian: f\u2192h vs. f\u2192\u0219 was ambiguous. Wikipedia (current revision) gives it by north/south \u2192 separate pages; added v (ji\u021Bel/\u0125i\u021Bel), volbur\u0103\u2192holbur\u0103, lovesc\u2192lov\u0103sc, e\u2192\u0103 after r/m (SPI-18). jos\u2192gios removed from Romanian Moldavia (kept in Bessarabia, where it is attested)."),
      f("Bucovina: am corectat citirea \u201Eafricatizant\u201D (vezi Cercetare); am ad\u0103ugat v\u2192\u0125 la C\xE2mpulung, f/v\u2192\u0219/j la R\u0103d\u0103u\u021B (lipseau), \u0219i pagini noi pentru Pojor\xE2ta\u2013Fundu Moldovei, Dorna, Co\u0219na, valea Sucevei, insule vechi.", "Bukovina: corrected the \u201Cafricatizing\u201D reading (see Research); added v\u2192\u0125 at C\xE2mpulung, f/v\u2192\u0219/j at R\u0103d\u0103u\u021Bi (were missing), and new pages for Pojor\xE2ta\u2013Fundu Moldovei, Dorna, Co\u0219na, upper Suceava, old islands."),
      f("Pagini noi din subdiviziuni sursate: Basarabia (centru, NE, NV, SV), Moldova (nord, sud), B\u0103n\u0103\u021Bean sud-vest, Cri\u0219ean Mo\u021Bi \u0219i Oa\u0219, Ardelenesc NE separat de comun.", "New pages from sourced sub-divisions: Bessarabia (centre, NE, NW, SW), Moldavia (north, south), Banat south-west, Cri\u0219ana Mo\u021Bi and Oa\u0219, Transylvanian NE separated from the shared set."),
      f("Interfa\u021Ba: textele de explica\u021Bie (inclusiv notele) erau doar \xEEn englez\u0103; acum toate sunt bilingve. Sursele afi\u0219eaz\u0103 nume, citare complet\u0103, zona studiat\u0103 \u0219i link.", "UI: the explanation texts (including the notes) were English-only; now all are bilingual. Sources show a name, full citation, the area studied and a link.")
    ] },
    { h: f("Limite r\u0103mase (spune-mi dac\u0103 vrei s\u0103 le atac)", "Remaining limits (tell me if you want me to tackle them)"), i: [
      f("Programul nu vede accentul: regulile care cer accent sunt aproxim\u0103ri sau lipsesc.", "The program cannot see stress: rules that need stress are approximations or missing."),
      f("Regulile sunt aplicate mecanic pe litere; cuvintele noi, neologismele \u0219i numele proprii pot fi redate gre\u0219it.", "Rules are applied mechanically on letters; new words, neologisms and proper names may come out wrong."),
      f("Sud-vestul Basarabiei se bazeaz\u0103 pe o singur\u0103 propozi\u021Bie; Timocul pe fragmente; Cri\u0219ana pe o singur\u0103 surs\u0103.", "The south-west of Bessarabia rests on a single sentence; Timok on excerpts; Cri\u0219ana on one source."),
      f("Pentru a avea Muntenia central\u0103 vs. sudic\u0103, Oltenia nord vs. vest, Maramure\u0219 pe ramuri, Bihor, Some\u0219, Banat est/nord etc., trebuie atlase (NALR) care nu sunt online \xEEn text.", "To have central vs. southern Muntenia, Oltenia north vs. west, Maramure\u0219 branches, Bihor, Some\u0219, Banat east/north etc., atlases (NALR) are needed that are not available online as text.")
    ] }
  ];

  // js/app.js
  var $ = (id) => document.getElementById(id);
  var store = { get: (k) => {
    try {
      return localStorage.getItem(k);
    } catch (e) {
      return null;
    }
  }, set: (k, v) => {
    try {
      localStorage.setItem(k, v);
    } catch (e) {
    }
  } };
  var esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  var SAMPLES = ["Diminea\u021Ba, b\u0103iatul a venit cu p\xE2ine \u0219i br\xE2nz\u0103, apoi a fiert cinci ou\u0103 pentru cin\u0103.", "M\xE2ine merg la pia\u021B\u0103 s\u0103 cump\u0103r pe\u0219te, vin \u0219i pu\u021Bin\u0103 br\xE2nz\u0103, dar nu \u0219tiu c\xE2nd m\u0103 \xEEntorc.", "Fratele meu a luat p\xE2inea \u0219i a mers cu c\xE2inele dup\u0103 lemne, dar s-a \xEEntors seara.", "Seara, fetele mele vin acas\u0103, m\u0103n\xE2nc\u0103 p\xE2ine cu miere \u0219i se uit\u0103 la televizor."];
  var T = {
    ro: {
      title: "Graiuri rom\xE2ne\u0219ti",
      sub: "Scrie un text \xEEn rom\xE2n\u0103 standard \u0219i vezi cum ar suna \xEEntr-un grai. Pentru fiecare regul\u0103 po\u021Bi vedea sursa, zona studiat\u0103 \u0219i c\xE2t de sigur\u0103 e.",
      std: "Text \xEEn rom\xE2n\u0103 standard",
      dia: "Grai",
      w: "Cum sun\u0103 (transcriere simplificat\u0103)",
      wh: "literele speciale: vezi legenda",
      p: "IPA (aproximativ)",
      ph: "Scrie un text\u2026",
      sample: "\u21BB Alt exemplu",
      legend: "Cum cite\u0219ti literele speciale",
      changes: "Ce se schimb\u0103 \xEEn acest grai",
      none: "Nu sunt reguli redabile \xEEn scris pentru acest grai.",
      area: "Zona",
      diff: "Ce \xEEl deosebe\u0219te",
      ex: "Exemple",
      so: "Surse",
      status: { sourced: "din surs\u0103", extended: "extins", approx: "aproximare" },
      statusTip: { sourced: "Schimbarea \u0219i exemplele sunt \xEEn surs\u0103.", extended: "Acela\u0219i tipar ca \xEEntr-o regul\u0103 din surs\u0103, aplicat la forme pe care sursa nu le d\u0103.", approx: "Sursa cere informa\u021Bie (de ex. accentul) pe care programul nu o vede; regula e o euristic\u0103." },
      tabs: { src: "Surse (A\u2013Z)", res: "Cercetare", log: "Verificare" },
      resFor: "Cercetare pentru:",
      lastRead: "Cum am citit-o",
      cite: "Citare",
      covers: "Ce con\u021Bine",
      areaS: "Unde s-a cules",
      caveat: "Rezerve",
      open: "Deschide sursa",
      usedBy: "Folosit\u0103 \xEEn reguli:",
      exFor: "Exemple pentru:",
      tryIt: "Pune textul \xEEn c\xE2mp",
      none2: "Nu am exemple pentru acest grai.",
      noteRule: "Not\u0103:",
      ruleCount: (n) => n + " reguli",
      intro: "Exemple reale, g\u0103site (nu inventate de aplica\u021Bie). Se schimb\u0103 odat\u0103 cu graiul ales."
    },
    en: {
      title: "Romanian dialects",
      sub: "Type standard Romanian and see how it might sound in a dialect. For every rule you can see the source, the area studied and how certain it is.",
      std: "Standard Romanian text",
      dia: "Dialect",
      w: "How it sounds (simplified respelling)",
      wh: "special letters: see the legend",
      p: "IPA (approximate)",
      ph: "Type some text\u2026",
      sample: "\u21BB Another example",
      legend: "How to read the special letters",
      changes: "What changes in this dialect",
      none: "No rules that can be shown in writing for this dialect.",
      area: "Area",
      diff: "What sets it apart",
      ex: "Examples",
      so: "Sources",
      status: { sourced: "sourced", extended: "extended", approx: "approximation" },
      statusTip: { sourced: "The change and its examples are in the source.", extended: "The same pattern as a sourced rule, applied to forms the source does not list.", approx: "The source needs information (e.g. stress) the program cannot see; the rule is a heuristic." },
      tabs: { src: "Sources (A\u2013Z)", res: "Research", log: "Verification" },
      resFor: "Research for:",
      lastRead: "How I read it",
      cite: "Citation",
      covers: "What it covers",
      areaS: "Where it was collected",
      caveat: "Caveats",
      open: "Open the source",
      usedBy: "Used by rules:",
      exFor: "Examples for:",
      tryIt: "Put this text in the box",
      none2: "I have no examples for this dialect.",
      noteRule: "Note:",
      ruleCount: (n) => n + " rules",
      intro: "Real examples, found (not made up by the app). They change with the chosen dialect."
    }
  };
  var LEG = [["\u0107 \u0111", "t\u0283\u02B2 d\u0292\u02B2", "ro: \u201Eci\u201D, \u201Egi\u201D moi (Banat)", "soft \u201Cci\u201D, \u201Cgi\u201D (Banat)"], ["\u0144 \u013A \u0155", "n\u02B2 l\u02B2 r\u02B2", "n, l, r muiate", "softened n, l, r"], ["\u02B2", "", "dup\u0103 liter\u0103: pronun\u021Bie \u201Emuiat\u0103\u201D, cu un i foarte scurt", "after a letter: \u201Csoftened\u201D, with a very short i"], ["\u02B0", "", "o suflare de aer (aspirat): p\u02B0", "a puff of air (aspirated): p\u02B0"], ["\u0125", "\u0266\u02B2", "un h sonor, muiat", "a voiced, softened h"], ["\u0142", "\u026B", "l \u201Egros\u201D (Oa\u0219)", "\u201Cdark\u201D l (Oa\u0219)"], ["\xE9", "\u025B", "e deschis (avea\u2192av\xE9)", "open e (avea\u2192av\xE9)"], ["\xEE, \xE2", "\u0268", "ca \xEEn \u201Ec\xEEnd\u201D", "as in Romanian \u201Cc\xEEnd\u201D"], ["\u0219, \u021B, \u0103", "\u0283 ts \u0259", "ca \xEEn rom\xE2n\u0103", "as in Romanian"]];
  var lang = (() => {
    const s = store.get("lang");
    if (s) return s;
    const l = (navigator.languages || [navigator.language || ""]).some((x) => /^ro/i.test(x));
    const tz = (() => {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (e) {
        return "";
      }
    })() || "";
    return l || /Bucharest|Chisinau/.test(tz) ? "ro" : "en";
  })();
  var sampleI = 0;
  var panel = null;
  var tab = "src";
  var pending = null;
  var L2 = (o) => o[lang];
  function fillSelect() {
    const sel = $("dia"), cur = store.get("dia") || sel.value || "muntenesc";
    sel.innerHTML = Object.entries(GROUPS).map(([g, gd]) => `<optgroup label="${esc(L2(gd))}">` + Object.entries(DIALECTS).filter(([, d]) => d.group === g).map(([k, d]) => `<option value="${k}">${esc(L2(d))}</option>`).join("") + "</optgroup>").join("");
    sel.value = DIALECTS[cur] ? cur : "muntenesc";
  }
  function chips(keys) {
    return keys.map((k) => `<button class="chip" data-src="${k}">${esc(SOURCES[k].label)}</button>`).join("");
  }
  function render() {
    const t = T[lang];
    document.documentElement.lang = lang;
    $("title").textContent = t.title;
    $("sub").textContent = t.sub;
    $("l-std").textContent = t.std;
    $("l-dia").textContent = t.dia;
    $("l-w").textContent = t.w;
    $("h-w").textContent = t.wh;
    $("l-p").textContent = t.p;
    $("in").placeholder = t.ph;
    $("sample").textContent = t.sample;
    $("l-leg").textContent = t.legend;
    $("l-c").textContent = t.changes;
    $("lang").textContent = lang === "ro" ? "EN" : "RO";
    $("b-ex").textContent = "\u{1F4D6} " + t.ex;
    $("b-so").textContent = "\u{1F4DA} " + t.so;
    $("legend-body").innerHTML = "<table>" + LEG.map((r) => `<tr><td><b>${r[0]}</b></td><td>${r[1]}</td><td>${lang === "ro" ? r[2] : r[3]}</td></tr>`).join("") + "</table>";
    fillSelect();
    update();
    if (panel) drawPanel();
  }
  function update() {
    const t = T[lang], id = $("dia").value, d = DIALECTS[id], src = $("in").value;
    store.set("dia", id);
    $("w").textContent = toDialect(src, id);
    $("p").textContent = src ? toIPA(toDialect(src, id)) : "";
    $("info").innerHTML = `<h3>${esc(t.area)}</h3><p>${esc(L2(d.area))}</p><h3>${esc(t.diff)}</h3><p>${esc(L2(d.note))}</p>`;
    $("c").innerHTML = d.rules.length ? `<ul class="rules">` + d.rules.map((r) => {
      const R2 = RULES[r];
      return `<li><span class="badge b-${R2.status}" title="${esc(t.statusTip[R2.status])}">${esc(t.status[R2.status])}</span>${esc(L2(R2))} <span class="ex">(${esc(R2.ex)})</span>${R2.note ? `<div class="rnote">${esc(t.noteRule)} ${esc(L2(R2.note))}</div>` : ""}<div>${chips(R2.src)}</div></li>`;
    }).join("") + "</ul>" : `<p class="muted">${esc(d.special ? L2(d.note) : t.none)}</p>`;
    if (panel) drawPanel();
  }
  function open(p, anchor) {
    panel = p;
    pending = anchor || null;
    $("panel").hidden = false;
    $("scrim").hidden = false;
    document.body.style.overflow = "hidden";
    drawPanel();
    $("p-close").focus();
  }
  function close() {
    panel = null;
    $("panel").hidden = true;
    $("scrim").hidden = true;
    document.body.style.overflow = "";
  }
  function drawPanel() {
    var _a;
    const t = T[lang], id = $("dia").value, d = DIALECTS[id];
    $("p-title").textContent = panel === "examples" ? t.ex : t.so;
    const tabs = $("p-tabs");
    if (panel === "sources") {
      tabs.hidden = false;
      tabs.innerHTML = ["src", "res", "log"].map((k) => `<button role="tab" data-tab="${k}" aria-selected="${tab === k}">${esc(t.tabs[k])}</button>`).join("");
    } else tabs.hidden = true;
    const b = $("p-body");
    b.innerHTML = panel === "examples" ? examplesHTML(id, d, t) : tab === "src" ? sourcesHTML(t) : tab === "res" ? researchHTML(d, t) : logHTML();
    if (pending) {
      const el = b.querySelector(`[data-id="${pending}"]`);
      if (el) {
        (_a = el.scrollIntoView) == null ? void 0 : _a.call(el, { block: "start" });
        el.classList.add("flash");
      }
      pending = null;
    }
  }
  function dialectSwitch(id) {
    return `<label for="p-dia">${esc(T[lang].exFor)}</label><select id="p-dia">${Object.entries(GROUPS).map(([g, gd]) => `<optgroup label="${esc(L2(gd))}">` + Object.entries(DIALECTS).filter(([, x]) => x.group === g).map(([k, x]) => `<option value="${k}"${k === id ? " selected" : ""}>${esc(L2(x))}</option>`).join("") + "</optgroup>").join("")}</select>`;
  }
  function examplesHTML(id, d, t) {
    const list2 = (EXAMPLES[d.group] || []).filter((e) => !e.only || e.only.includes(id));
    let h = `<p class="muted">${esc(t.intro)}</p>` + dialectSwitch(id);
    if (!list2.length) return h + `<p>${esc(t.none2)}</p>`;
    for (const [ty, td] of Object.entries(TYPES)) {
      const items = list2.filter((e) => e.type === ty);
      if (!items.length) continue;
      h += `<h3>${esc(L2(td))}</h3>` + items.map((e) => `<div class="item"><div>${esc(L2(e))}</div><div class="meta">${esc(e.cite)}</div>${e.try ? `<button class="try small" data-try="${esc(e.try)}">${esc(t.tryIt)}</button>` : ""}</div>`).join("");
    }
    return h;
  }
  function sourcesHTML(t) {
    const used = {};
    for (const R2 of Object.values(RULES)) for (const k of R2.src) (used[k] = used[k] || /* @__PURE__ */ new Set()).add(R2.id);
    const keys = Object.keys(SOURCES).sort((a, b) => SOURCES[a].label.localeCompare(SOURCES[b].label, lang));
    return keys.map((k) => {
      const s = SOURCES[k];
      return `<div class="item" data-id="${k}"><b>${esc(s.label)}</b>
  <div class="meta"><b>${esc(t.cite)}:</b> ${esc(s.cite)}</div>
  <div class="meta"><b>${esc(t.covers)}:</b> ${esc(L2(s.covers))}</div>
  <div class="meta"><b>${esc(t.areaS)}:</b> ${esc(L2(s.area))}</div>
  <div class="meta"><b>${esc(t.caveat)}:</b> ${esc(L2(s.caveat))}</div>
  <div class="meta"><b>${esc(t.lastRead)}:</b> ${esc(L2(READ_LABEL[s.read]))}${used[k] ? ` \xB7 ${esc(T[lang].ruleCount(used[k].size))}` : ""}</div>
  <div class="meta"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(t.open)} \u2197</a></div></div>`;
    }).join("");
  }
  function sect(sections) {
    return sections.map((s) => `<h3>${esc(L2(s.h))}</h3><ul>${s.i.map((i) => `<li>${esc(L2(i))}</li>`).join("")}</ul>`).join("");
  }
  function researchHTML(d, t) {
    const r = RESEARCH[FAMILY[d.group]];
    return `<p class="muted">${esc(t.resFor)} <b>${esc(L2(r.title))}</b></p>` + sect(r.sections);
  }
  function logHTML() {
    return sect(LOG);
  }
  $("in").value = SAMPLES[0];
  $("in").oninput = update;
  $("dia").onchange = update;
  $("sample").onclick = () => {
    sampleI = (sampleI + 1) % SAMPLES.length;
    $("in").value = SAMPLES[sampleI];
    update();
  };
  $("lang").onclick = () => {
    lang = lang === "ro" ? "en" : "ro";
    store.set("lang", lang);
    render();
  };
  $("b-ex").onclick = () => open("examples");
  $("b-so").onclick = () => open("sources");
  $("p-close").onclick = close;
  $("scrim").onclick = close;
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel) close();
  });
  $("c").addEventListener("click", (e) => {
    const b = e.target.closest("[data-src]");
    if (b) {
      tab = "src";
      open("sources", b.dataset.src);
    }
  });
  $("p-tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (b) {
      tab = b.dataset.tab;
      drawPanel();
    }
  });
  $("p-body").addEventListener("click", (e) => {
    const b = e.target.closest("[data-try]");
    if (b) {
      $("in").value = b.dataset.try;
      update();
      close();
    }
  });
  $("p-body").addEventListener("change", (e) => {
    if (e.target.id === "p-dia") {
      $("dia").value = e.target.value;
      update();
    }
  });
  render();
})();
