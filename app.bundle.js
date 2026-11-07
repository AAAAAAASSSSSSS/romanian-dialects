(() => {
  // js/dialects.js
  var D = (group, ro, en, rules, area, note) => ({ group, ro, en, rules, area, note });
  var GROUPS = {
    muntenia: { ro: "Muntenia \u0219i Oltenia", en: "Muntenia and Oltenia" },
    moldova: { ro: "Moldova (Rom\xE2nia)", en: "Moldavia (Romania)" },
    basarabia: { ro: "Basarabia (Republica Moldova)", en: "Bessarabia (Republic of Moldova)" },
    bucovina: { ro: "Bucovina", en: "Bukovina" },
    banat: { ro: "Banat", en: "Banat" },
    crisana: { ro: "Cri\u0219ana", en: "Cri\u0219ana" },
    maramures: { ro: "Maramure\u0219", en: "Maramure\u0219" },
    transilvania: { ro: "Transilvania", en: "Transylvania" }
  };
  var FIN = ["m_dropi", "m_afin", "m_efin"];
  var MC1 = ["m_cea", "m_gea", "m_c", "m_g"];
  var MLAB = ["m_pv", "m_p", "m_b", "m_m"];
  var MIA = ["m_ia1", "m_ia2", "m_oa"];
  var MOLD_N = ["m_old", "m_etym", "m_soft", "m_lov", "m_zic", "m_hv", "m_ao_w", "m_toti", "m_eafin", "m_dropi", "m_ea", "m_e", "m_i", ...MC1, ...MLAB, "mn_f", "mn_v", ...MIA, ...FIN];
  var MOLD_S = ["m_old", "m_etym", "m_soft", "m_lov", "m_zic", "m_toti", "m_eafin", "m_dropi", "m_ea", "m_e", "m_i", ...MC1, ...MLAB, "ms_f", "ms_v", ...MIA, ...FIN];
  var BAS = ["m_old", "m_etym", "m_soft", "bas_ja", "bas_gio", "bas_old", "m_eafin", "m_dropi", "m_cea", "m_gea", "bas_ea", "m_ea", "m_e", "m_i", "m_c", "m_g", ...MLAB, "bas_f", "bas_v", ...MIA, ...FIN];
  var BAS_NORTH = BAS.slice();
  BAS_NORTH.splice(BAS_NORTH.indexOf("bas_old") + 1, 0, "m_ao_s");
  var BAN = ["b_lex", "b_n", "b_je", "b_ie", "b_ea", "b_e", "b_i", "b_cea", "b_gea", "b_c", "b_g", "b_t", "b_d", "b_nn", "b_l", "b_r"];
  var CRI = ["cr_lex", "cr_sl", "cr_sea", "cr_se", "cr_si", "cr_o", "cr_oa", "cr_lea", "cr_le", "cr_g", "cr_ch", "cr_gh"];
  var CR_DENT = ["cr_t", "cr_d", "cr_n"];
  var CR_LAB = ["cr_p", "cr_b", "cr_m", "cr_f", "cr_v"];
  var ARD = ["ar_lex", "ar_dorm", "ar_sea", "ar_se", "ar_si", "ar_oa"];
  var PRIM = ["bk_cea", "bk_gea", "bk_c", "bk_g", "bk_f2", "bk_v2"];
  var DIALECTS = {
    /* ---- Muntenia and Oltenia ---- */
    muntenesc: D(
      "muntenia",
      "Muntenesc (centru \u0219i sud)",
      "Muntenian (centre and south)",
      ["wl_h", "wl_prep"],
      { ro: "Muntenia: cele mai tipice tr\u0103s\u0103turi sunt \xEEn Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt \u0219i Teleorman; mai sunt Ilfov, Bucure\u0219ti, Prahova \u0219i, cu influen\u021B\u0103 moldoveneasc\u0103 la margine, Buz\u0103u \u0219i Br\u0103ila (Wikipedia EN).", en: "Muntenia: the most typical features are in Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt and Teleorman; also Ilfov, Bucharest, Prahova and, with Moldavian influence at the edge, Buz\u0103u and Br\u0103ila (Wikipedia EN)." },
      { ro: "Rom\xE2na standard are la baz\u0103 acest grai, deci difer\u0103 pu\u021Bin de ea. Aici se schimb\u0103 h- de la \xEEnceput (hain\u0103\u2192ain\u0103, arip\u0103\u2192harip\u0103, alea\u2192halea) \u0219i e/i dup\u0103 d, p \xEEn prepozi\u021Bii (de\u2192d\u0103, pe\u2192p\u0103, pentru\u2192p\u0103ntru, din\u2192d\xEEn). Sursa nu d\u0103 nicio deosebire fonetic\u0103 \xEEntre centrul \u0219i sudul Munteniei, de aceea nu am pagini separate.", en: "Standard Romanian is largely based on this variety, so it differs little. What changes here: word-initial h (hain\u0103\u2192ain\u0103, arip\u0103\u2192harip\u0103, alea\u2192halea) and e/i after d, p in prepositions (de\u2192d\u0103, pe\u2192p\u0103, pentru\u2192p\u0103ntru, din\u2192d\xEEn). The source gives no phonetic difference between central and southern Muntenia, so there are no separate pages." }
    ),
    muntenesc_ne: D(
      "muntenia",
      "Muntenesc (nord-est \u0219i est)",
      "Muntenian (north-east and east)",
      ["wl_h", "wl_prep", "wl_p", "wl_b", "wl_f", "wl_v", "wl_m"],
      { ro: "Nord-estul \u0219i estul Munteniei (spre Moldova).", en: "North-eastern and eastern Muntenia (towards Moldavia)." },
      { ro: "Ca Muntenia central\u0103, plus labialele p, b, f, v, m \xEEnaintea unei vocale din fa\u021B\u0103 sunt aspirate \u0219i muiate (piele\u2192p\u02B0\u02B2iele, miere\u2192m\u02B2iere). Sursa le leag\u0103 de migra\u021Bii recente.", en: "Like central Muntenia, plus the labials p, b, f, v, m before a front vowel are aspirated and softened (piele\u2192p\u02B0\u02B2iele, miere\u2192m\u02B2iere). The source ties this to recent migrations." }
    ),
    oltenesc: D(
      "muntenia",
      "Oltenesc (general)",
      "Oltenian (general)",
      ["wl_h", "ol_sea", "ol_se", "ol_si", "ol_j"],
      { ro: "Oltenia: Dolj, Gorj (est), Mehedin\u021Bi (mai ales est), Olt, V\xE2lcea. Sursa nu desparte nordul de centru \u0219i de vest.", en: "Oltenia: Dolj, Gorj (east), Mehedin\u021Bi (mostly east), Olt, V\xE2lcea. The source does not separate north from centre and west." },
      { ro: "Dup\u0103 s, z, \u0219, j, \u021B vocalele se schimb\u0103 (sear\u0103\u2192sar\u0103, secure\u2192s\u0103cure, singur\u2192s\xEEngur) \u0219i se adaug\u0103 un j \xEEnaintea lui k muiat (ochi\u2192ojchi). Sursa spune c\u0103 Oltenia are foarte pu\u021Bine tr\u0103s\u0103turi proprii; cele mai cunoscute (perfectul simplu, plural c\u0103\u0219i) sunt gramaticale.", en: "After s, z, \u0219, j, \u021B vowels change (sear\u0103\u2192sar\u0103, secure\u2192s\u0103cure, singur\u2192s\xEEngur) and a j is added before a softened k (ochi\u2192ojchi). The source says Oltenia has very few features of its own; the best-known ones (simple perfect, plural c\u0103\u0219i) are grammatical." }
    ),
    oltenesc_sud: D(
      "muntenia",
      "Oltenesc (sud)",
      "Oltenian (south)",
      ["wl_h", "ol_sea", "ol_se", "ol_si", "ol_j", "ol_f1", "ol_f2", "ol_v1", "ol_v2"],
      { ro: "Sudul Olteniei.", en: "Southern Oltenia." },
      { ro: "Ca Oltenia general\u0103, plus f \u0219i v \xEEnaintea unei vocale din fa\u021B\u0103 devin fk\u02B2 \u0219i vg\u02B2 (fier\u2192fk\u02B2er, vierme\u2192vg\u02B2erme). Sursa d\u0103 \u0219i variantele sk\u02B2/zg\u02B2.", en: "Like general Oltenia, plus f and v before a front vowel become fk\u02B2 and vg\u02B2 (fier\u2192fk\u02B2er, vierme\u2192vg\u02B2erme). The source also gives the variants sk\u02B2/zg\u02B2." }
    ),
    /* ---- Moldavia (Romania) ---- */
    moldovenesc_nord: D(
      "moldova",
      "Moldovenesc (nord)",
      "Moldavian (north)",
      MOLD_N,
      { ro: "Moldova din Rom\xE2nia la nord de linia Bac\u0103u\u2013Vaslui\u2013Hu\u0219i: Boto\u0219ani, Suceava, Ia\u0219i, Neam\u021B \u0219i p\u0103r\u021Bi din Bac\u0103u. Bucovina are pagini separate.", en: "Romanian Moldavia north of the Bac\u0103u\u2013Vaslui\u2013Hu\u0219i line: Boto\u0219ani, Suceava, Ia\u0219i, Neam\u021B and parts of Bac\u0103u. Bukovina has separate pages." },
      { ro: "Tr\u0103s\u0103turile moldovene\u0219ti comune (ce/ci\u2192\u0219e/\u0219i, e/i/ea dup\u0103 s/z/\u0219/j/\u021B, p/b/m\u2192chi/ghi/ni, -\u0103\u2192\xEE, -e\u2192i, ia\u2192ie) plus, \xEEn nord: f\u2192\u0219, v\u2192j (fierbe\u2192\u0219ierbe), v\u2192h \xEEn volbur\u0103/vulpe/vultan, \u0103\u2192a \xEEn c\xE2teva cuvinte (m\u0103gar\u2192magar).", en: "The common Moldavian features (ce/ci\u2192\u0219e/\u0219i, e/i/ea after s/z/\u0219/j/\u021B, p/b/m\u2192chi/ghi/ni, -\u0103\u2192\xEE, -e\u2192i, ia\u2192ie) plus, in the north: f\u2192\u0219, v\u2192j (fierbe\u2192\u0219ierbe), v\u2192h in volbur\u0103/vulpe/vultan, \u0103\u2192a in a few words (m\u0103gar\u2192magar)." }
    ),
    moldovenesc_sud: D(
      "moldova",
      "Moldovenesc (sud)",
      "Moldavian (south)",
      MOLD_S,
      { ro: "Moldova din Rom\xE2nia la sud de linia Bac\u0103u\u2013Vaslui\u2013Hu\u0219i: Vaslui, Gala\u021Bi, Vrancea, sudul Bac\u0103ului.", en: "Romanian Moldavia south of the Bac\u0103u\u2013Vaslui\u2013Hu\u0219i line: Vaslui, Gala\u021Bi, Vrancea, southern Bac\u0103u." },
      { ro: "Acelea\u0219i tr\u0103s\u0103turi comune, dar f\u2192h (fierbe\u2192hierbi) \u0219i v\u2192\u0125, un h sonor muiat (vi\u021Bel\u2192\u0125i\u021B\u0103l) \u2014 stadiile mai vechi ale palataliz\u0103rii.", en: "The same common features, but f\u2192h (fierbe\u2192hierbi) and v\u2192\u0125, a voiced softened h (vi\u021Bel\u2192\u0125i\u021B\u0103l) \u2014 the older stages of the palatalization." }
    ),
    moldovenesc_neamt: D(
      "moldova",
      "Moldovenesc \u2013 Neam\u021B (Humule\u0219ti, dup\u0103 Creang\u0103)",
      "Moldavian \u2013 Neam\u021B (Humule\u0219ti, after Creang\u0103)",
      ["nt_lex", "nt_depal", "nt_sea", "nt_p", "nt_f", "nt_ia", "nt_ea"],
      { ro: "Humule\u0219ti, zona Neam\u021B, nordul graiurilor de tip moldovenesc. Aten\u021Bie: sursa (C\u0103prioar\u0103 2002) analizeaz\u0103 limba scris\u0103 a lui Creang\u0103, nu o anchet\u0103 pe teren.", en: "Humule\u0219ti, Neam\u021B area, northern Moldavian-type speech. Note: the source (C\u0103prioar\u0103 2002) analyzes Creang\u0103's written language, not a field survey." },
      { ro: "Din scrierile lui Creang\u0103: p\u2192chi (pilit\u2192chilit), f\u2192h \xEEnaintea lui i (a hi), v \u0219i m nepalataliza\u021Bi, ie\u2192e dup\u0103 labial\u0103 (fiert\u2192fert, piept\u2192pept), ia\u2192ie, -ea\u2192\xE9, ea\u2192a dup\u0103 consoan\u0103 dur\u0103, plus d muiat \xEEn c\xE2teva cuvinte (dib\u0103cia\u2192ghib\u0103cia).", en: "From Creang\u0103's writings: p\u2192chi (pilit\u2192chilit), f\u2192h before i (a hi), v and m not palatalized, ie\u2192e after a labial (fiert\u2192fert, piept\u2192pept), ia\u2192ie, -ea\u2192\xE9, ea\u2192a after a hard consonant, plus softened d in a few words (dib\u0103cia\u2192ghib\u0103cia)." }
    ),
    /* ---- Bessarabia ---- */
    basarabean_centru: D(
      "basarabia",
      "Basarabean (centru)",
      "Bessarabian (centre)",
      BAS,
      { ro: "Cea mai mare parte a teritoriului Basarabiei \u0219i par\u021Bial Transnistria (grupul \u201Ecentral\u201D al lui Udler). Sp\xEEnu 2018 a ref\u0103cut ancheta \xEEn 34 de localit\u0103\u021Bi din re\u021Beaua Atlasului lingvistic moldovenesc.", en: "Most of Bessarabia and part of Transnistria (Udler's \u201Ccentral\u201D group). Sp\xEEnu 2018 repeated the survey in 34 localities of the Moldavian Linguistic Atlas network." },
      { ro: "Tr\u0103s\u0103turile moldovene\u0219ti comune, plus: ea\u2192a \xEEnaintea unui a/\u0103 (mearg\u0103\u2192marg\u0103), a dup\u0103 \u0219/j \u2192 \u0103 (\u0219arpe\u2192\u0219\u0103rpi), f\u2192\u0219 \u0219i v\u2192j, \u011D p\u0103strat (jos\u2192gios) \u0219i c\xE2teva forme la v\xE2rstnici (fasole\u2192fasuli). Tinerii folosesc tot mai mult forma literar\u0103.", en: "The common Moldavian features, plus: ea\u2192a before an a/\u0103 (mearg\u0103\u2192marg\u0103), a after \u0219/j \u2192 \u0103 (\u0219arpe\u2192\u0219\u0103rpi), f\u2192\u0219 and v\u2192j, \u011D kept (jos\u2192gios) and a few forms among the elderly (fasole\u2192fasuli). Young speakers increasingly use the standard form." }
    ),
    basarabean_nordest: D(
      "basarabia",
      "Basarabean (nord-est: Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari)",
      "Bessarabian (north-east: Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari)",
      ["ne_lex", "m_old", "m_etym", "m_soft", "bas_ja", "bas_gio", "bas_u", "bas_old", "m_ao_s", "m_ia1", "m_ia2", "m_dropi", "ne_cea", "ne_gea", "bas_ea", "m_ea", "m_e", "m_i", "ne_c", "ne_g", "ne_f1", "ne_f2", "ne_v", "ne_p1", "ne_p2", "ne_b", "ne_m", "ne_ch", "ne_gh", ...FIN],
      { ro: "Nord-estul Republicii Moldova, pe linia Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari, \u0219i raionul Kotovsk (regiunea Odesa) \u2014 Sp\xEEnu 2009, pe baza Atlasului lingvistic moldovenesc \u0219i a anchetelor proprii.", en: "North-eastern Republic of Moldova, along the Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari line, and Kotovsk district (Odesa region) \u2014 Sp\xEEnu 2009, based on the Moldavian Linguistic Atlas and her own surveys." },
      { ro: "Aici se \xEEntretaie tr\u0103s\u0103turi moldovene\u0219ti \u0219i maramure\u0219ene (sursa: nu e o arie unitar\u0103). Fa\u021B\u0103 de centru: ce/ci/ge/gi, f, v dau fricative muiate (cinci\u2192\u0219\u02B2in\u0219\u02B2, vin\u2192j\u02B2in), p\u2192c, b\u2192g, ch\u2192c, gh\u2192g, m\u2192\u0144, \u0219i forme proprii (ou\u0103\u2192oau\xEE, guler\u2192guliar, nepot\u2192niapot, necaz\u2192nacaz, s\u0103\u2192s\xEE).", en: "Moldavian and Maramure\u0219 traits cross here (the source: not a unitary area). Compared with the centre: ce/ci/ge/gi, f, v give softened fricatives (cinci\u2192\u0219\u02B2in\u0219\u02B2, vin\u2192j\u02B2in), p\u2192c, b\u2192g, ch\u2192c, gh\u2192g, m\u2192\u0144, and own forms (ou\u0103\u2192oau\xEE, guler\u2192guliar, nepot\u2192niapot, necaz\u2192nacaz, s\u0103\u2192s\xEE)." }
    ),
    basarabean_nordvest: D(
      "basarabia",
      "Basarabean (nord-vest)",
      "Bessarabian (north-west)",
      ["nv_lex", ...BAS_NORTH],
      { ro: "Nord-vestul Republicii Moldova, nordul Bucovinei (regiunea Cern\u0103u\u021Bi), \u021Binutul Her\u021Ba, fostul jude\u021B Hotin (grupul \u201Enord-vest\u201D al lui Udler).", en: "North-western Republic of Moldova, northern Bukovina (Chernivtsi region), Her\u021Ba, former Hotin county (Udler's \u201Cnorth-west\u201D group)." },
      { ro: "Ca centrul, plus \u0103\u2192a \xEEn c\xE2teva cuvinte (m\u0103gar\u2192magar) \u0219i o diftongat \xEEn ou\u0103\u2192oau\xEE, rou\u0103\u2192roau\xEE, nou\u0103\u2192noau\xEE, plou\u0103\u2192ploau\u0103 (arii laterale NE \u0219i NV).", en: "Like the centre, plus \u0103\u2192a in a few words (m\u0103gar\u2192magar) and diphthongized o in ou\u0103\u2192oau\xEE, rou\u0103\u2192roau\xEE, nou\u0103\u2192noau\xEE, plou\u0103\u2192ploau\u0103 (lateral NE and NW areas)." }
    ),
    basarabean_sudvest: D(
      "basarabia",
      "Basarabean (sud-vest: Cahul\u2013Ismail)",
      "Bessarabian (south-west: Cahul\u2013Ismail)",
      BAS.filter((r) => !["m_cea", "m_gea", "m_c", "m_g"].includes(r)),
      { ro: "Extremitatea sud-vestic\u0103 a Basarabiei, de la Cahul la Ismail, Chilia \u0219i V\xE2lcov (grupul \u201Esud-vest\u201D al lui Udler; Co\u0219eriu o consider\u0103 de tip muntean).", en: "Far south-western Bessarabia, from Cahul to Ismail, Kilia and Vylkove (Udler's \u201Csouth-west\u201D group; Co\u0219eriu considers it Wallachian-type)." },
      { ro: "Ca centrul, dar f\u0103r\u0103 \u0219/j din ce/ci/ge/gi: sursa (Sp\xEEnu 2009) spune c\u0103 \xEEn restul masivului moldovenesc se aude \u0219, j, \u201Ecu excep\u021Bia graiurilor de sud-vest\u201D, deci aici africatele r\u0103m\xE2n (cinci r\u0103m\xE2ne cinci). Sp\xEEnu 2009 e singura surs\u0103 citit\u0103; monografia lui Sp\xEEnu despre sud-vest (2002) nu am g\u0103sit-o online.", en: "Like the centre, but without \u0219/j from ce/ci/ge/gi: the source (Sp\xEEnu 2009) says that in the rest of the Moldavian block \u0219, j are heard, \u201Cexcept the south-western speech\u201D, so the affricates stay here (cinci stays cinci). Sp\xEEnu 2009 is the only source I read; Sp\xEEnu's monograph on the south-west (2002) was not available online." }
    ),
    /* ---- Bukovina ---- */
    bucovinean_campulung: D(
      "bucovina",
      "Bucovinean \u2013 C\xE2mpulung",
      "Bukovinian \u2013 C\xE2mpulung",
      ["bk_f", "bk_v", "bk_p", "bk_b", "bk_m"],
      { ro: "C\xE2mpulung Moldovenesc, valea Moldovei de la Fundu Moldovei aproape de Gura Humorului, valea Moldovi\u021Bei (Frumosu, Vatra Moldovi\u021Bei), Sucevi\u021Ba, valea Sucevei (Doroteia, Stulpicani, Ostra). Turcule\u021B 1977\u201378.", en: "C\xE2mpulung Moldovenesc, the Moldova valley from Fundu Moldovei almost to Gura Humorului, the Moldovi\u021Ba valley (Frumosu, Vatra Moldovi\u021Bei), Sucevi\u021Ba, the Suha valley (Doroteia, Stulpicani, Ostra). Turcule\u021B 1977\u201378." },
      { ro: "Cel mai arhaic grai bucovinean. P\u0103streaz\u0103 africatele c, g (nu devin \u0219, j), nu schimb\u0103 e/i dup\u0103 s, z, \u0219, j (a\u0219, co\u0219, reci, \u0219ed), muiaz\u0103 f, v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel) \u0219i p\u0103streaz\u0103 labiala \xEEn grupurile vechi (piele\u2192pchiele, bine\u2192bghine, mic\u2192mnic).", en: "The most archaic Bukovinian speech. It keeps the affricates c, g (they do not become \u0219, j), does not change e/i after s, z, \u0219, j (a\u0219, co\u0219, reci, \u0219ed), softens f, v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel) and keeps the labial in the old groups (piele\u2192pchiele, bine\u2192bghine, mic\u2192mnic)." }
    ),
    bucovinean_campulung_nv: D(
      "bucovina",
      "Bucovinean \u2013 C\xE2mpulung nord-vest (Pojor\xE2ta, Fundu Moldovei)",
      "Bukovinian \u2013 north-west C\xE2mpulung (Pojor\xE2ta, Fundu Moldovei)",
      ["bk_tl", "bk_dl", "bk_f", "bk_v", "bk_p", "bk_b", "bk_m", "bk_afin", "bk_efin"],
      { ro: "Pojor\xE2ta \u0219i Fundu Moldovei; pentru \xEEnchiderea vocalelor finale \u0219i Vatra Moldovi\u021Bei.", en: "Pojor\xE2ta and Fundu Moldovei; for the closing of final vowels also Vatra Moldovi\u021Bei." },
      { ro: "Ca C\xE2mpulungul, plus dentale muiate sub influen\u021B\u0103 transilv\u0103nean\u0103 (frate\u2192frat\u02B2e) \u0219i vocale finale tot mai \xEEnchise (mam\u0103\u2192mam\xEE, lapte\u2192lapti). Turcule\u021B: muierea dentalelor e mult mai slab\u0103 dec\xE2t \xEEn anchetele vechi. Tinerii de la Fundu Moldovei \xEEnlocuiesc h' cu \u0219 \u2014 formele vechi sunt cele redate aici.", en: "Like C\xE2mpulung, plus softened dentals under Transylvanian influence (frate\u2192frat\u02B2e) and increasingly closed final vowels (mam\u0103\u2192mam\xEE, lapte\u2192lapti). Turcule\u021B: dental softening is much weaker than in the old surveys. Young speakers at Fundu Moldovei replace h' with \u0219 \u2014 the older forms are the ones shown here." }
    ),
    bucovinean_dornean: D(
      "bucovina",
      "Bucovinean \u2013 \u021Aara Dornelor",
      "Bukovinian \u2013 \u021Aara Dornelor (Dorna)",
      ["bk_ch", "bk_gh", "bk_vel"],
      { ro: "\u021Aara Dornelor, spre nord p\xE2n\u0103 la Cioc\u0103ne\u0219ti, peste Mestec\u0103ni\u0219 la Valea Putnei, spre est la Chiril, Cojoci, Crucea, spre sud p\xE2n\u0103 la P\u0103ltini\u0219.", en: "\u021Aara Dornelor, north to Cioc\u0103ne\u0219ti, over Mestec\u0103ni\u0219 to Valea Putnei, east to Chiril, Cojoci, Crucea, south to P\u0103ltini\u0219." },
      { ro: "Tranzi\u021Bie \xEEntre nord-estul Transilvaniei \u0219i Moldova. Au ajuns aici africatizarea lui chi/ghi (ochi\u2192oci, ghia\u021B\u0103\u2192gea\u021B\u0103) \u2014 tot mai rar\u0103 spre sud-est (la Crucea doar sporadic) \u2014 \u0219i e\u2192\u0103 dup\u0103 s/z/\u021B/\u0219/j/r \xEEn pozi\u021Bie moale sau final\u0103 (reci\u2192r\u0103ci, \u0219ed\u2192\u0219\u0103d), care e \u201Ecurent\u0103\u201D \xEEn Dorna.", en: "A transition between north-east Transylvania and Moldavia. Africatization of chi/ghi (ochi\u2192oci, ghia\u021B\u0103\u2192gea\u021B\u0103) reached here \u2014 rarer towards the south-east (only sporadic at Crucea) \u2014 and e\u2192\u0103 after s/z/\u021B/\u0219/j/r in a soft or final position (reci\u2192r\u0103ci, \u0219ed\u2192\u0219\u0103d), which is \u201Ccurrent\u201D in Dorna." }
    ),
    bucovinean_dornean_poiana: D(
      "bucovina",
      "Bucovinean \u2013 Dorna, Poiana Stampei",
      "Bukovinian \u2013 Dorna, Poiana Stampei",
      ["bk_ch", "bk_gh", "bk_tl", "bk_dl", "bk_vel"],
      { ro: "Poiana Stampei (Plugani) \xEEn nord-vestul Dornei.", en: "Poiana Stampei (Plugani) in north-western Dorna." },
      { ro: "Ca Dorna, plus muierea dentalelor este frecvent\u0103 (frate\u2192frat\u02B2e, dinte\u2192d\u02B2inte). \xCEn Argestru, Iacobeni, Cioc\u0103ne\u0219ti, Valea Putnei e doar inconsecvent\u0103 \u0219i u\u0219oar\u0103, iar la Crucea, \u0218aru Dornei \u0219i P\u0103ltini\u0219 sporadic\u0103.", en: "Like Dorna, plus softening of dentals is frequent (frate\u2192frat\u02B2e, dinte\u2192d\u02B2inte). In Argestru, Iacobeni, Cioc\u0103ne\u0219ti, Valea Putnei it is only inconsistent and light, and at Crucea, \u0218aru Dornei and P\u0103ltini\u0219 sporadic." }
    ),
    bucovinean_dornean_cosna: D(
      "bucovina",
      "Bucovinean \u2013 Dorna, Co\u0219na",
      "Bukovinian \u2013 Dorna, Co\u0219na",
      ["cs_lex", "bk_ch", "bk_gh", "bk_tl", "bk_dl", "bk_vel"],
      { ro: "Co\u0219na (Dorna Candrenilor).", en: "Co\u0219na (Dorna Candrenilor)." },
      { ro: "Ca Dorna, cu muierea dentalelor general\u0103 \u0219i, doar aici: a \xEEnaintea accentului \u2192 \u0103 ca \xEEn Transilvania (pahar\u2192p\u0103har, capac\u2192c\u0103pac, tabac\u2192t\u0103bac) \u0219i ps\u2192p\u021B (coaps\u0103\u2192coap\u021B\u0103). \xCEn restul Bucovinei se \xEEnt\xE2mpl\u0103 invers: \u0103\u2192a.", en: "Like Dorna, with general softening of dentals and, only here: a before the stress \u2192 \u0103 as in Transylvania (pahar\u2192p\u0103har, capac\u2192c\u0103pac, tabac\u2192t\u0103bac) and ps\u2192p\u021B (coaps\u0103\u2192coap\u021B\u0103). In the rest of Bukovina the reverse happens: \u0103\u2192a." }
    ),
    bucovinean_dornean_putna: D(
      "bucovina",
      "Bucovinean \u2013 Dorna, Valea Putnei",
      "Bukovinian \u2013 Dorna, Valea Putnei",
      [...PRIM, "bk_ch", "bk_gh", "bk_vel"],
      { ro: "Valea Putnei, cu familii venite dup\u0103 Primul R\u0103zboi Mondial de la Mestec\u0103ni\u0219 \u0219i Iacobeni.", en: "Valea Putnei, with families who came after World War I from Mestec\u0103ni\u0219 and Iacobeni." },
      { ro: "Azi, la majoritatea vorbitorilor, africatele primare c, g au fost \xEEnlocuite de fricativele \u0219, j (la care au ajuns \u0219i f, v: fin\u2192\u0219in, vin\u2192jin), iar chi/ghi au devenit africate (ochi\u2192oci, ghia\u021B\u0103\u2192gea\u021B\u0103).", en: "Today, for most speakers, the primary affricates c, g have been replaced by the fricatives \u0219, j (which f, v also reached: fin\u2192\u0219in, vin\u2192jin), while chi/ghi became affricates (ochi\u2192oci, ghia\u021B\u0103\u2192gea\u021B\u0103)." }
    ),
    bucovinean_radauti_vest: D(
      "bucovina",
      "Bucovinean \u2013 R\u0103d\u0103u\u021B vest (Marginea, Sucevi\u021Ba)",
      "Bukovinian \u2013 R\u0103d\u0103u\u021Bi west (Marginea, Sucevi\u021Ba)",
      ["rd_lex", ...PRIM, "bk_p", "bk_b", "bk_m"],
      { ro: "Partea de vest a zonei R\u0103d\u0103u\u021Bi: Marginea \u0219i Sucevi\u021Ba (Turcule\u021B 1977\u201378).", en: "The western part of the R\u0103d\u0103u\u021Bi zone: Marginea and Sucevi\u021Ba (Turcule\u021B 1977\u201378)." },
      { ro: "Grai moldovenesc cu tr\u0103s\u0103turi arhaice \u0219i straturi ardelene\u0219ti: ce/ci\u2192\u0219e/\u0219i, f\u2192\u0219, v\u2192j; labiala \xEEnc\u0103 p\u0103strat\u0103 \xEEn grupurile vechi (piele\u2192pchiele, bine\u2192bghine, mic\u2192mnic); \xEEnchiderea lui -\u0103/-e nu e generalizat\u0103. Cuvinte proprii: dup\u0103\u2192dipi, viespe\u2192zespe, acolo\u2192aclo.", en: "A Moldavian speech with archaic traits and Transylvanian layers: ce/ci\u2192\u0219e/\u0219i, f\u2192\u0219, v\u2192j; the labial still kept in the old groups (piele\u2192pchiele, bine\u2192bghine, mic\u2192mnic); closing of -\u0103/-e is not generalized. Own words: dup\u0103\u2192dipi, viespe\u2192zespe, acolo\u2192aclo." }
    ),
    bucovinean_radauti_est: D(
      "bucovina",
      "Bucovinean \u2013 R\u0103d\u0103u\u021B est (Fr\u0103t\u0103u\u021Bii Vechi, Volov\u0103\u021B, Gr\u0103nice\u0219ti)",
      "Bukovinian \u2013 R\u0103d\u0103u\u021Bi east (Fr\u0103t\u0103u\u021Bii Vechi, Volov\u0103\u021B, Gr\u0103nice\u0219ti)",
      ["rd_lex", ...PRIM, "bk_p2", "bk_b2", "bk_m2", "bk_afin", "bk_efin"],
      { ro: "Estul zonei R\u0103d\u0103u\u021Bi: Fr\u0103t\u0103u\u021Bii Vechi, Volov\u0103\u021B, Gr\u0103nice\u0219ti (\u0219i Solca, C\u0103jvana pentru pierderea labialei).", en: "The east of the R\u0103d\u0103u\u021Bi zone: Fr\u0103t\u0103u\u021Bii Vechi, Volov\u0103\u021B, Gr\u0103nice\u0219ti (and Solca, C\u0103jvana for the loss of the labial)." },
      { ro: "Ca R\u0103d\u0103u\u021Bul de vest, dar labiala s-a pierdut (recent): piele\u2192chiele, bine\u2192ghine, mic\u2192nic; -\u0103/-e finale se \xEEnchid consecvent (mam\u0103\u2192mam\xEE, lapte\u2192lapti).", en: "Like western R\u0103d\u0103u\u021Bi, but the labial has been lost (recently): piele\u2192chiele, bine\u2192ghine, mic\u2192nic; final -\u0103/-e close consistently (mam\u0103\u2192mam\xEE, lapte\u2192lapti)." }
    ),
    bucovinean_sucevei: D(
      "bucovina",
      "Bucovinean \u2013 valea superioar\u0103 a Sucevei (Straja, Vicovu)",
      "Bukovinian \u2013 upper Suceava valley (Straja, Vicovu)",
      ["rd_lex", ...PRIM, "bk_ch", "bk_gh", "bk_p3", "bk_b3", "bk_m3"],
      { ro: "Straja, Vicovu de Sus, Vicovu de Jos, G\u0103l\u0103ne\u0219ti, Bilca, Fr\u0103t\u0103u\u021Bii Noi (nord-estul Bucovinei).", en: "Straja, Vicovu de Sus, Vicovu de Jos, G\u0103l\u0103ne\u0219ti, Bilca, Fr\u0103t\u0103u\u021Bii Noi (north-east Bukovina)." },
      { ro: "Ca R\u0103d\u0103u\u021Bul, plus africatizarea lui chi/ghi (ochi\u2192oci) \u2014 adus\u0103 de ardelenii stabili\u021Bi \xEEn secolul al XVIII-lea \u2014 \u0219i labiale africatizate (piele\u2192pciele, bine\u2192bgine, mic\u2192mnic; Guia 2020). Guia 2015 noteaz\u0103 \u0219i t, d africatizate la Straja (t doar la Vicovu de Jos); nu sunt incluse aici.", en: "Like R\u0103d\u0103u\u021Bi, plus africatization of chi/ghi (ochi\u2192oci) \u2014 brought by Transylvanians who settled in the 18th century \u2014 and africatized labials (piele\u2192pciele, bine\u2192bgine, mic\u2192mnic; Guia 2020). Guia 2015 also records africatized t, d at Straja (t only at Vicovu de Jos); they are not included here." }
    ),
    bucovinean_sudest: D(
      "bucovina",
      "Bucovinean \u2013 sud-est (\u201Eafricatizant\u201D)",
      "Bukovinian \u2013 south-east (\u201Cafricatizing\u201D)",
      ["bk_vel", ...PRIM, "bk_ch", "bk_gh", "bk_t", "bk_d", "bk_p3", "bk_b3", "bk_m3"],
      { ro: "M\u0103n\u0103stirea Humorului, P\u0103ltinoasa, Dr\u0103goie\u0219ti, Moara, Ude\u0219ti, \u0218cheia, Ili\u0219e\u0219ti, Todire\u0219ti, Boto\u0219ana, Poieni (Solca); spre sud Boroaia, Liteni, Preute\u0219ti, Dolhe\u0219ti p\xE2n\u0103 la T\u0103t\u0103ru\u0219i (Ia\u0219i). Mozaic: sate vecine pot diferi; Slatina, Horodniceni, Baia, P\xE2rte\u0219ti, Leucu\u0219e\u0219ti nu africatizeaz\u0103.", en: "M\u0103n\u0103stirea Humorului, P\u0103ltinoasa, Dr\u0103goie\u0219ti, Moara, Ude\u0219ti, \u0218cheia, Ili\u0219e\u0219ti, Todire\u0219ti, Boto\u0219ana, Poieni (Solca); south to Boroaia, Liteni, Preute\u0219ti, Dolhe\u0219ti as far as T\u0103t\u0103ru\u0219i (Ia\u0219i). A mosaic: neighbouring villages may differ; Slatina, Horodniceni, Baia, P\xE2rte\u0219ti, Leucu\u0219e\u0219ti do not africatize." },
      { ro: "Ardeleni din secolul al XVIII-lea peste o baz\u0103 c\xE2mpulungean\u0103. Africatele primare ce/ci\u2192\u0219/j, dar chi/ghi\u2192ci/gi \u0219i t, d \xEEnaintea lui e/i\u2192c, g (frunte\u2192frunce, dinte\u2192gince): vechile consoane muiate redevin africate. Plus e\u2192\u0103 dup\u0103 s/z/\u021B/\u0219/j/r \xEEn pozi\u021Bie moale sau final\u0103.", en: "18th-century Transylvanians over a C\xE2mpulung-type base. Primary ce/ci\u2192\u0219/j, but chi/ghi\u2192ci/gi and t, d before e/i\u2192c, g (frunte\u2192frunce, dinte\u2192gince): the old softened consonants become affricates again. Plus e\u2192\u0103 after s/z/\u021B/\u0219/j/r in a soft or final position." }
    ),
    bucovinean_sudest_cajvana: D(
      "bucovina",
      "Bucovinean \u2013 sud-est, C\u0103jvana",
      "Bukovinian \u2013 south-east, C\u0103jvana",
      ["bk_vel", "bk_cea", "bk_gea", "bk_c", "bk_g", "bk_ch", "bk_gh", "bk_tl", "bk_dl"],
      { ro: "C\u0103jvana, care p\u0103streaz\u0103 cele mai multe tr\u0103s\u0103turi transilv\u0103nene.", en: "C\u0103jvana, which keeps most Transylvanian features." },
      { ro: "Ca sud-estul, dar dentalele t, d sunt doar muiate, nu africatizate (frate\u2192frat\u02B2e, dinte\u2192d\u02B2inte).", en: "Like the south-east, but the dentals t, d are only softened, not africatized (frate\u2192frat\u02B2e, dinte\u2192d\u02B2inte)." }
    ),
    bucovinean_insule: D(
      "bucovina",
      "Bucovinean \u2013 insule vechi (Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na, Zvori\u0219tea)",
      "Bukovinian \u2013 old islands (Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na, Zvori\u0219tea)",
      ["bk_f", "bk_v"],
      { ro: "Sate din jurul Sucevei (Zvori\u0219tea e \xEEn Moldova, jud. Suceava). Wikipedia EN le nume\u0219te \u201Esubdialectul estic\u201D.", en: "Villages around Suceava (Zvori\u0219tea is in Moldavia, Suceava county). Wikipedia EN calls them the \u201CEastern subdialect\u201D." },
      { ro: "P\u0103streaz\u0103 africatele c, g \u0219i muiaz\u0103 f, v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel) \u2014 martori ai unei arii vechi comune cu C\xE2mpulungul. Fricativele \u0219, z apar sporadic.", en: "They keep the affricates c, g and soften f, v (fierbe\u2192hierbe, vi\u021Bel\u2192\u0125i\u021Bel) \u2014 witnesses of an old area shared with C\xE2mpulung. The fricatives \u0219, z appear sporadically." }
    ),
    /* ---- Banat ---- */
    banatean: D(
      "banat",
      "B\u0103n\u0103\u021Bean (general)",
      "Banat (general)",
      BAN,
      { ro: "Cara\u0219-Severin, Timi\u0219, sudul Aradului \u0219i al Hunedoarei, Banatul s\xE2rbesc; tranzi\u021Bie spre muntean \xEEn nord-vestul Olteniei (Gorj, Mehedin\u021Bi). Wikipedia EN.", en: "Cara\u0219-Severin, Timi\u0219, southern Arad and Hunedoara, Serbian Banat; transition to Wallachian in north-west Oltenia (Gorj, Mehedin\u021Bi). Wikipedia EN." },
      { ro: "Dentalele \u0219i n, l, r se muiaz\u0103 \xEEnaintea lui e/i (frunte\u2192frun\u0107e, vine\u2192vi\u0144e, lemne\u2192\u013Aem\u0144e), ce/ci/ge/gi devin \u0219\u02B2/j\u02B2 (ceas\u2192\u0219\u02B2as), ie dup\u0103 labial\u0103 devine e (fier\u2192fer), e/i/ea dup\u0103 s/z/\u0219/j/\u021B \u0219i st devin \u0103/\xEE/a (singur\u2192s\xEEngur, poveste\u2192povest\u0103), e accentuat\u2192je \xEEnaintea altui e (verde\u2192vjer\u0111e), \u0219i dz se p\u0103streaz\u0103 \xEEn c\xE2teva cuvinte (zece\u2192dz\u0103\u0219\u02B2e, br\xE2nz\u0103\u2192br\xE2ndz\u0103).", en: "Dentals and n, l, r soften before e/i (frunte\u2192frun\u0107e, vine\u2192vi\u0144e, lemne\u2192\u013Aem\u0144e), ce/ci/ge/gi become \u0219\u02B2/j\u02B2 (ceas\u2192\u0219\u02B2as), ie after a labial becomes e (fier\u2192fer), e/i/ea after s/z/\u0219/j/\u021B and st become \u0103/\xEE/a (singur\u2192s\xEEngur, poveste\u2192povest\u0103), stressed e\u2192j\xE9 before another e (verde\u2192vj\xE9r\u0111e), and dz is kept in a few words (zece\u2192dz\u0103\u0219\u02B2e, br\xE2nz\u0103\u2192br\xE2ndz\u0103)." }
    ),
    banatean_sv_timisoara: D(
      "banat",
      "B\u0103n\u0103\u021Bean \u2013 sud-vest de Timi\u0219oara",
      "Banat \u2013 south-west of Timi\u0219oara",
      ["b_dan", ...BAN],
      { ro: "Satele de la sud-vest de Timi\u0219oara, la sud de Bega (de ex. Denta) \u2014 Danciu 2009; zona dintre Timi\u0219 \u0219i B\xE2rzava pentru caut\u2192capt.", en: "Villages south-west of Timi\u0219oara, south of the Bega (e.g. Denta) \u2014 Danciu 2009; the area between the Timi\u0219 and the B\xE2rzava for caut\u2192capt." },
      { ro: "Ca Banatul, plus forme proprii: caut\u2192capt, viespe\u2192v\u0103spar, scaun\u2192scamn, dz \xEEn pr\xE2nz/r\xE2nz\u0103/m\u0103z\u0103re (pr\xEEndz, r\xEEndz\u0103, m\u0103dzare), durmim/durmit, \xEEmblu/\xEEmplu/\xEEnflu/\xEEntru.", en: "Like Banat, plus own forms: caut\u2192capt, viespe\u2192v\u0103spar, scaun\u2192scamn, dz in pr\xE2nz/r\xE2nz\u0103/m\u0103z\u0103re (pr\xEEndz, r\xEEndz\u0103, m\u0103dzare), durmim/durmit, \xEEmblu/\xEEmplu/\xEEnflu/\xEEntru." }
    ),
    banatean_almaj: D(
      "banat",
      "B\u0103n\u0103\u021Bean \u2013 sud-vest (Alm\u0103j, Cara\u0219ova)",
      "Banat \u2013 south-west (Alm\u0103j, Cara\u0219ova)",
      ["b_alm", ...BAN],
      { ro: "Sud-vestul Banatului: valea Alm\u0103jului \u0219i Cara\u0219ova (Petrovici, Dacoromania, 1934\u201335).", en: "South-west Banat: the Alm\u0103j valley and Cara\u0219ova (Petrovici, Dacoromania, 1934\u201335)." },
      { ro: "Ca Banatul, plus luat\u2192luvat, nour\u2192nuv\u0103r, laud\u0103\u2192l\u0103vd\u0103, caut\u2192capt \u2014 \u201Efalse regresii\u201D explicate de Petrovici prin pronun\u021Bia bilabial\u0103 a lui v a slavilor romaniza\u021Bi.", en: "Like Banat, plus luat\u2192luvat, nour\u2192nuv\u0103r, laud\u0103\u2192l\u0103vd\u0103, caut\u2192capt \u2014 \u201Cfalse regressions\u201D that Petrovici explains by the bilabial v of the Romanized Slavs." }
    ),
    /* ---- Crișana ---- */
    crisean: D(
      "crisana",
      "Cri\u0219ean (general \u0219i sud)",
      "Cri\u0219ana (general and south)",
      [...CRI, ...CR_DENT],
      { ro: "Bihor, S\u0103laj, Satu Mare, nord-vestul Albei, vestul Clujului, nordul Aradului, nordul Hunedoarei, sud-vestul Maramure\u0219ului (Wikipedia EN). \xCEn jum\u0103tatea de sud, labialele r\u0103m\xE2n nealterate (Guia 2020).", en: "Bihor, S\u0103laj, Satu Mare, north-west Alba, west Cluj, north Arad, north Hunedoara, south-west Maramure\u0219 (Wikipedia EN). In the southern half the labials stay unaltered (Guia 2020)." },
      { ro: "oa\u2192o (poate\u2192pote), ge/gi\u2192je/ji (ce/ci r\u0103m\xE2n africate), dup\u0103 s/z/\u021B \u0219i dup\u0103 labial\u0103 vocalele se schimb\u0103 (sear\u0103\u2192sar\u0103, merg\u2192m\u0103rg), o- ini\u021Bial\u2192w\u0103- (orb\u2192w\u0103rb), sl\u2192skl, t, d, n muiate \xEEnaintea lui e/i (frate\u2192frat\u02B2e, mine\u2192mi\u0144e), chi/ghi confundate cu ti/di muiat (chem\u2192t\u02B2em). Sursa spune c\u0103 \u0219i t, d, n sunt muiate \xEEn tot Cri\u0219ana, \xEEn afar\u0103 de Oa\u0219.", en: "oa\u2192o (poate\u2192pote), ge/gi\u2192je/ji (ce/ci stay affricates), vowels change after s/z/\u021B and after a labial (sear\u0103\u2192sar\u0103, merg\u2192m\u0103rg), initial o-\u2192w\u0103- (orb\u2192w\u0103rb), sl\u2192skl, t, d, n softened before e/i (frate\u2192frat\u02B2e, mine\u2192mi\u0144e), chi/ghi confused with softened ti/di (chem\u2192t\u02B2em). The source says t, d, n are softened throughout Cri\u0219ana, except in Oa\u0219." }
    ),
    crisean_nord: D(
      "crisana",
      "Cri\u0219ean \u2013 nord",
      "Cri\u0219ana \u2013 north",
      [...CRI, ...CR_DENT, ...CR_LAB],
      { ro: "Jum\u0103tatea de nord a Cri\u0219anei (Guia 2020 noteaz\u0103 c\u0103 aici labialele se palatalizeaz\u0103).", en: "The northern half of Cri\u0219ana (Guia 2020 notes that labials are palatalized here)." },
      { ro: "Ca Cri\u0219ana, plus labialele muiate \xEEnaintea unei vocale din fa\u021B\u0103: p\u2192pt\u02B2, b\u2192bd\u02B2, m\u2192mn\u02B2, f\u2192h\u02B2, v\u2192\u0125 (piele\u2192pt\u02B2ele, bine\u2192bd\u02B2ine, mic\u2192mn\u02B2ic, fierbe\u2192h\u02B2ierbe). Fenomenul nu e generalizat: formele cu labiala nealterat\u0103 sunt mai numeroase.", en: "Like Cri\u0219ana, plus softened labials before a front vowel: p\u2192pt\u02B2, b\u2192bd\u02B2, m\u2192mn\u02B2, f\u2192h\u02B2, v\u2192\u0125 (piele\u2192pt\u02B2ele, bine\u2192bd\u02B2ine, mic\u2192mn\u02B2ic, fierbe\u2192h\u02B2ierbe). The phenomenon is not generalized: forms with the unaltered labial are more numerous." }
    ),
    crisean_moti: D(
      "crisana",
      "Cri\u0219ean \u2013 \u021Aara Mo\u021Bilor (Apuseni)",
      "Cri\u0219ana \u2013 \u021Aara Mo\u021Bilor (Apuseni)",
      ["cr_moti", "cr_lex", "cr_sl", "cr_sea", "cr_se", "cr_si", "cr_o", "cr_oa", "cr_lea", "cr_le", "cr_g", "cr_ch", "cr_gh", "cr_mt", "cr_d", "cr_n", "cr_mv"],
      { ro: "\u021Aara Mo\u021Bilor, Mun\u021Bii Apuseni (Wikipedia EN; anchete la G\xE2rda de Sus \u0219i Sc\u0103ri\u0219oara \u2014 Guia 2015, 2020).", en: "\u021Aara Mo\u021Bilor, Apuseni Mountains (Wikipedia EN; surveys at G\xE2rda de Sus and Sc\u0103ri\u0219oara \u2014 Guia 2015, 2020)." },
      { ro: "Ca Cri\u0219ana, dar t \xEEnaintea lui e/i se africatizeaz\u0103 (\u0219tiu\u2192\u0219ciu, vorbe\u0219te\u2192vorbe\u0219ce), v\u2192\u0125 (vis\u2192\u0125is) \u0219i, \xEEn cuvinte vechi, n \xEEntre vocale devine r (oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0103). Labialele sunt mai des nealterate.", en: "Like Cri\u0219ana, but t before e/i is africatized (\u0219tiu\u2192\u0219ciu, vorbe\u0219te\u2192vorbe\u0219ce), v\u2192\u0125 (vis\u2192\u0125is) and, in old words, intervocalic n becomes r (oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0103). Labials are more often unaltered." }
    ),
    crisean_oas: D(
      "crisana",
      "Cri\u0219ean \u2013 \u021Aara Oa\u0219ului",
      "Cri\u0219ana \u2013 \u021Aara Oa\u0219ului",
      ["cr_oas2", "cr_lex", "cr_sl", "cr_sea", "cr_se", "cr_si", "cr_o", "cr_oa", "cr_lea", "cr_le", "cr_g", "cr_ch", "cr_gh", "cr_p0", "cr_p", "cr_b", "cr_m", "cr_oas"],
      { ro: "\u021Aara Oa\u0219ului, Satu Mare (Wikipedia EN; anchet\u0103 la Odoreu \u2014 Guia 2015, 2020).", en: "\u021Aara Oa\u0219ului, Satu Mare (Wikipedia EN; survey at Odoreu \u2014 Guia 2015, 2020)." },
      { ro: "Singura regiune care nu muiaz\u0103 dentalele t, d; \xEEn schimb k', g' devin \u021Bi/di muiat (m\u0103 tem, dar t\u02B2em \u201Echem\u201D), iar \u0219t' se depalatalizeaz\u0103 (schimb\u2192\u0219timb, \u0219chiop\u2192\u0219tiop). Plus l \xEEnaintea unei consoane se velarizeaz\u0103 (alb\u2192a\u0142b) \u0219i labialele p, b, m dau pt\u02B2, bd\u02B2, mn\u02B2 (mai ales aici).", en: "The only region that does not soften the dentals t, d; instead k', g' become softened ti/di (m\u0103 tem, but t\u02B2em \u201Cchem\u201D), and \u0219t' is depalatalized (schimb\u2192\u0219timb, \u0219chiop\u2192\u0219tiop). Plus l before a consonant is velarized (alb\u2192a\u0142b) and the labials p, b, m give pt\u02B2, bd\u02B2, mn\u02B2 (mostly here)." }
    ),
    /* ---- Maramureș ---- */
    maramuresean: D(
      "maramures",
      "Maramure\u0219ean",
      "Maramure\u0219",
      ["mar_lex", "mar_eafin", "mar_ee", "mar_ce", "mar_sea", "mar_se", "mar_si", "mar_la", "mar_le", "mar_oa", "mar_l", "mar_n", "mar_ch", "mar_gh", "mar_t", "mar_p0", "mar_p", "mar_b", "mar_m", "mar_f", "mar_v"],
      { ro: "Nord-estul jude\u021Bului Maramure\u0219, pe v\u0103ile Tisei, Vi\u0219eului, Marei \u0219i Cos\u0103ului (Sighetu Marma\u021Biei, Vi\u0219eu, Bor\u0219a). Sursa \xEEl \xEEmparte \xEEn trei ramuri (centrul larg, nord-vestul cu influen\u021B\u0103 din Oa\u0219, sud-estul) dup\u0103 tr\u0103s\u0103turi mai ales lexicale \u2014 deci nu am pagini fonetice separate.", en: "North-eastern Maramure\u0219 county, along the Tisza, Vi\u0219eu, Mara and Cos\u0103u valleys (Sighetu Marma\u021Biei, Vi\u0219eu, Bor\u0219a). The source divides it into three branches (wide centre, north-west with Oa\u0219 influence, south-east) by mostly lexical features \u2014 so there are no separate phonetic pages." },
      { ro: "Pu\u021Bine tr\u0103s\u0103turi proprii, multe comune cu Cri\u0219ana: f\u2192s, v\u2192z (fie\u2192sie), p/b/m\u2192pt\u02B2/bd\u02B2/mn\u02B2, zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios, de\u2192di, c/g + e \u2192 \u0115 central (cer\u2192c\u0115r), dup\u0103 s/z/\u0219/j/\u021B/r vocalele se schimb\u0103, oa\u2192o, -ea\u2192\xE9, e deschis \xEEnainte de alt e (fete\u2192f\xE9te).", en: "Few features of its own, many shared with Cri\u0219ana: f\u2192s, v\u2192z (fie\u2192sie), p/b/m\u2192pt\u02B2/bd\u02B2/mn\u02B2, zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios, de\u2192di, c/g + e \u2192 central \u0115 (cer\u2192c\u0115r), vowels change after s/z/\u0219/j/\u021B/r, oa\u2192o, -ea\u2192\xE9, open e before another e (fete\u2192f\xE9te)." }
    ),
    /* ---- Transylvania ---- */
    ardelenesc: D(
      "transilvania",
      "Ardelenesc (tr\u0103s\u0103turi comune)",
      "Transylvanian (shared features)",
      ARD,
      { ro: "Transilvania \xEEn ansamblu \u2014 mozaic de graiuri de tranzi\u021Bie (Weigand 1908). Sursele deosebesc o zon\u0103 nord-estic\u0103 \u0219i una central-sudic\u0103; pentru cea central-sudic\u0103 nu am g\u0103sit tr\u0103s\u0103turi proprii.", en: "Transylvania as a whole \u2014 a mosaic of transition varieties (Weigand 1908). Sources distinguish a north-eastern and a central-southern area; I found no features of its own for the central-southern one." },
      { ro: "C\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEEne/m\xEEne/p\xEEne, a durmi cu u \xEEn tot paradigma (dorm\u2192durm), dup\u0103 s/z/\u021B e/i/ea se schimb\u0103, oa\u2192o \xEEn tot graiul ardelenesc (coad\u0103\u2192cod\u0103). Accentul (vocale mai lungi, \u201Ec\xE2ntat\u201D) nu poate fi redat.", en: "C\xE2ine/m\xE2ine/p\xE2ine\u2192c\xEEne/m\xEEne/p\xEEne, a durmi with u throughout (dorm\u2192durm), e/i/ea change after s/z/\u021B, oa\u2192o throughout Transylvanian speech (coad\u0103\u2192cod\u0103). The stress pattern (longer vowels, \u201Csinging\u201D) cannot be rendered." }
    ),
    ardelenesc_ne: D(
      "transilvania",
      "Ardelenesc \u2013 nord-est (Bistri\u021Ba-N\u0103s\u0103ud, B\xE2rg\u0103u)",
      "Transylvanian \u2013 north-east (Bistri\u021Ba-N\u0103s\u0103ud, B\xE2rg\u0103u)",
      [...ARD, "ar_ch", "ar_gh", "ar_td", "ar_n", "ar_p0", "ar_p", "ar_b", "ar_m", "ar_f", "ar_v"],
      { ro: "Nord-estul Transilvaniei: Bistri\u021Ba-N\u0103s\u0103ud \u2014 Valea B\xE2rg\u0103ului (17 puncte, 55 de vorbitori, Rus 2020) \u0219i Ilva Mare (Guia 2015, 2020). Limitele dup\u0103 Rus: la vest de linia Turda\u2013Cluj\u2013Dej, la est de creasta Carpa\u021Bilor Orientali.", en: "North-eastern Transylvania: Bistri\u021Ba-N\u0103s\u0103ud \u2014 the B\xE2rg\u0103u valley (17 points, 55 speakers, Rus 2020) and Ilva Mare (Guia 2015, 2020). Limits per Rus: west of the Turda\u2013Cluj\u2013Dej line, east of the crest of the Eastern Carpathians." },
      { ro: "Tr\u0103s\u0103turile ardelene\u0219ti comune, plus chi/ghi africatizate (curechi\u2192curec), t, d, n muiate \xEEnaintea lui e/i, labiale \xEEn stadii intermediare (p\u2192pc, b\u2192bg, m\u2192m\u0144: piatr\u0103\u2192pcatr\u0103, lumin\u0103\u2192lum\u0144in\u0103) \u0219i f\u2192\u0219, v\u2192z (fin\u2192\u0219in, vin\u2192zin).", en: "The shared Transylvanian features, plus africatized chi/ghi (curechi\u2192curec), t, d, n softened before e/i, labials in intermediate stages (p\u2192pc, b\u2192bg, m\u2192m\u0144: piatr\u0103\u2192pcatr\u0103, lumin\u0103\u2192lum\u0144in\u0103) and f\u2192\u0219, v\u2192z (fin\u2192\u0219in, vin\u2192zin)." }
    )
  };

  // js/rules.js
  var B0 = String.raw`(?<!\p{L})`;
  var B1 = String.raw`(?!\p{L})`;
  var C = "bcdfghjklmnprstvz\u0219\u021B";
  var V = "aeiou\u0103\xE2\xEE";
  var FV = "[ei]";
  var SIB = "(?:st|[sz\u0219j\u021B])";
  var S5 = "[sz\u0219j\u021B]";
  var R = (id, ro, en, from, to, ex, src, note) => ({ id, ro, en, from, to, ex, src: [].concat(src), ...note ? { note } : {} });
  var L = (id, ro, en, words, map, ex, src, note) => ({ id, ro, en, from: `${B0}(?:${words})${B1}`, map, protect: true, ex, src: [].concat(src), ...note ? { note } : {} });
  var N = (ro, en) => ({ ro, en });
  var list = [];
  var add = (...r) => list.push(...r);
  add(
    L(
      "wl_h",
      "h- de la \xEEnceput slab sau c\u0103zut, \u0219i h- pus \xEEn plus (hipercorectare): hain\u0103\u2192ain\u0103, ho\u021B\u2192wo\u021B, arip\u0103\u2192harip\u0103, alea\u2192halea, albii\u2192halbii",
      "word-initial h weak or lost, and a wrong h added (hypercorrection): hain\u0103\u2192ain\u0103, ho\u021B\u2192wo\u021B, arip\u0103\u2192harip\u0103, alea\u2192halea, albii\u2192halbii",
      "hain\u0103|ho\u021B|arip\u0103|alea|albii",
      { "hain\u0103": "ain\u0103", "ho\u021B": "wo\u021B", "arip\u0103": "harip\u0103", alea: "halea", albii: "halbii" },
      "arip\u0103\u2192harip\u0103, alea\u2192halea",
      "enwal",
      N("Sursa spune \u201Euneori\u201D. Doar cuvintele din surs\u0103 (nu \u0219i aripi, haine etc.).", "The source says \u201Csometimes\u201D. Only the source's words (not aripi, haine, etc.).")
    ),
    L(
      "wl_prep",
      "Muntenia: dup\u0103 d, p, \xEEn prepozi\u021Bii \u0219i prefixe: e\u2192\u0103, i\u2192\xEE. Aplicat la toate prepozi\u021Biile care \xEEncep cu de-, di-, pe- (de, pe, peste, pentru, din, dintre, dintr-, dinspre, dinaintea, dinapoia, dinafara) \u0219i la exemplele cu prefix (dec\xE2t, destupat, despart, deschid)",
      "Muntenia: after d, p, in prepositions and prefixes: e\u2192\u0103, i\u2192\xEE. Applied to every preposition starting with de-, di-, pe- (de, pe, peste, pentru, din, dintre, dintr-, dinspre, dinaintea, dinapoia, dinafara) and to the source's prefix examples (dec\xE2t, destupat, despart, deschid)",
      "de|pe|peste|pentru|din|dintre|dintr|dinspre|dinaintea|dinapoia|dinafara|dec\xE2t|destupat|despart|deschid",
      { de: "d\u0103", pe: "p\u0103", peste: "p\u0103ste", pentru: "p\u0103ntru", din: "d\xEEn", dintre: "d\xEEntre", dintr: "d\xEEntr", dinspre: "d\xEEnspre", dinaintea: "d\xEEnaintea", dinapoia: "d\xEEnapoia", dinafara: "d\xEEnafara", "dec\xE2t": "d\u0103c\xE2t", destupat: "d\u0103stupat", despart: "d\u0103spart", deschid: "d\u0103schid" },
      "de\u2192d\u0103, pe\u2192p\u0103, pentru\u2192p\u0103ntru",
      "enwal",
      N("Sursa d\u0103 regula pentru \u201Eprepozi\u021Bii \u0219i prefixe\u201D, cu exemplele de, dec\xE2t, destupat, despart, deschid, dintre, pe. Prefixele din alte cuvinte nu sunt numite, deci nu sunt incluse.", "The source states the rule for \u201Cprepositions and prefixes\u201D, with the examples de, dec\xE2t, destupat, despart, deschid, dintre, pe. Prefixes in other words are not named, so they are not included.")
    ),
    R("wl_p", "NE \u0219i E Muntenia: p \xEEnaintea unei vocale din fa\u021B\u0103 e \u201Easpirat \u0219i muiat\u201D (piele\u2192p\u02B0\u02B2iele)", "NE and E Muntenia: p before a front vowel is aspirated and softened (piele\u2192p\u02B0\u02B2iele)", `p(?=i)`, "p\u02B0\u02B2", "piele\u2192p\u02B0\u02B2iele", "enwal"),
    R("wl_b", "NE \u0219i E Muntenia: bine\u2192b\u02B0\u02B2ine", "NE and E Muntenia: bine\u2192b\u02B0\u02B2ine", `b(?=i)`, "b\u02B0\u02B2", "bine\u2192b\u02B0\u02B2ine", "enwal"),
    R("wl_f", "NE \u0219i E Muntenia: fier\u2192f\u02B0\u02B2ier", "NE and E Muntenia: fier\u2192f\u02B0\u02B2ier", `f(?=i)`, "f\u02B0\u02B2", "fier\u2192f\u02B0\u02B2ier", "enwal"),
    R("wl_v", "NE \u0219i E Muntenia: vin\u2192v\u02B0\u02B2in", "NE and E Muntenia: vin\u2192v\u02B0\u02B2in", `v(?=i)`, "v\u02B0\u02B2", "vin\u2192v\u02B0\u02B2in", "enwal"),
    R("wl_m", "NE \u0219i E Muntenia: miere\u2192m\u02B2iere", "NE and E Muntenia: miere\u2192m\u02B2iere", `m(?=i)`, "m\u02B2", "miere\u2192m\u02B2iere", "enwal"),
    R("ol_sea", "Oltenia: dup\u0103 s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103\u2192\u021Bap\u0103)", "Oltenia: after s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103\u2192\u021Bap\u0103)", `(${S5})ea`, "$1a", "sear\u0103\u2192sar\u0103", "enwal"),
    R("ol_se", "Oltenia: dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103 (secure\u2192s\u0103cure, zer\u2192z\u0103r, \u021Bepu\u0219\u0103\u2192\u021B\u0103pu\u0219\u0103)", "Oltenia: after s, z, \u0219, j, \u021B: e\u2192\u0103 (secure\u2192s\u0103cure, zer\u2192z\u0103r, \u021Bepu\u0219\u0103\u2192\u021B\u0103pu\u0219\u0103)", `(${S5})e`, "$1\u0103", "secure\u2192s\u0103cure", "enwal"),
    R("ol_si", "Oltenia: dup\u0103 s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zic\u2192z\xEEc, jir\u2192j\xEEr, \u021Bin\u2192\u021B\xEEn)", "Oltenia: after s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zic\u2192z\xEEc, jir\u2192j\xEEr, \u021Bin\u2192\u021B\xEEn)", `(${S5})i`, "$1\xEE", "singur\u2192s\xEEngur", "enwal"),
    R("ol_j", "Oltenia: se adaug\u0103 j \xEEnaintea unui k muiat (ochi\u2192ojchi, rachiu\u2192rajchiu, strachin\u0103\u2192strajchin\u0103)", "Oltenia: a j is added before a softened k (ochi\u2192ojchi, rachiu\u2192rajchiu, strachin\u0103\u2192strajchin\u0103)", `([${V}])ch(?=${FV})`, "$1jch", "ochi\u2192ojchi", "enwal"),
    R("ol_f1", "Sudul Olteniei: f \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 fk\u02B2 (fier\u2192fk\u02B2er)", "Southern Oltenia: f before a front vowel \u2192 fk\u02B2 (fier\u2192fk\u02B2er)", "fi(?=e)", "fk\u02B2", "fier\u2192fk\u02B2er", "enwal"),
    R("ol_f2", "Sudul Olteniei: fi\u2192fk\u02B2i", "Southern Oltenia: fi\u2192fk\u02B2i", `f(?=i)`, "fk\u02B2", "fin\u2192fk\u02B2in", "enwal"),
    R("ol_v1", "Sudul Olteniei: v \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 vg\u02B2 (vierme\u2192vg\u02B2erme)", "Southern Oltenia: v before a front vowel \u2192 vg\u02B2 (vierme\u2192vg\u02B2erme)", "vi(?=e)", "vg\u02B2", "vierme\u2192vg\u02B2erme", "enwal"),
    R("ol_v2", "Sudul Olteniei: vi\u2192vg\u02B2i", "Southern Oltenia: vi\u2192vg\u02B2i", `v(?=i)`, "vg\u02B2", "vin\u2192vg\u02B2in", "enwal")
  );
  add(
    L("m_old", "Forme vechi: fecior\u2192ficior, femeie\u2192fimeie (e neaccentuat \u2192 i)", "Old forms: fecior\u2192ficior, femeie\u2192fimeie (unstressed e \u2192 i)", "fecior|femeie", { fecior: "ficior", femeie: "fimeie" }, "fecior\u2192ficior", ["spinu09", "spinu18"]),
    L(
      "m_etym",
      "\xEE etimologic p\u0103strat: umblu\u2192\xEEmblu, umbl\u0103\u2192\xEEmbl\u0103, umple\u2192\xEEmple, umplu\u2192\xEEmplu, umflu\u2192\xEEmflu, umfl\u0103\u2192\xEEmfl\u0103, intru\u2192\xEEntru; forme vechi nor\u2192nour, drept\u2192dirept",
      "etymological \xEE kept: umblu\u2192\xEEmblu, umbl\u0103\u2192\xEEmbl\u0103, umple\u2192\xEEmple, umplu\u2192\xEEmplu, umflu\u2192\xEEmflu, umfl\u0103\u2192\xEEmfl\u0103, intru\u2192\xEEntru; old forms nor\u2192nour, drept\u2192dirept",
      "umblu|umbl\u0103|umple|umplu|umflu|umfl\u0103|intru|nor|drept",
      { umblu: "\xEEmblu", "umbl\u0103": "\xEEmbl\u0103", umple: "\xEEmple", umplu: "\xEEmplu", umflu: "\xEEmflu", "umfl\u0103": "\xEEmfl\u0103", intru: "\xEEntru", nor: "nour", drept: "dirept" },
      "umblu\u2192\xEEmblu",
      "spinu09"
    ),
    L("m_soft", "e\u2192\u0103 / i\u2192\xEE dup\u0103 r, m \xEEn c\xE2teva cuvinte: repede\u2192r\u0103pidi, reci\u2192r\u0103\u0219i, merg\u2192m\u0103rg; ridic\u0103\u2192r\xEEdic\u0103", "e\u2192\u0103 / i\u2192\xEE after r, m in a few words: repede\u2192r\u0103pidi, reci\u2192r\u0103\u0219i, merg\u2192m\u0103rg; ridic\u0103\u2192r\xEEdic\u0103", "repede|reci|merg|ridic\u0103", { repede: "r\u0103pidi", reci: "r\u0103\u0219i", merg: "m\u0103rg", "ridic\u0103": "r\xEEdic\u0103" }, "merg\u2192m\u0103rg", ["spinu09", "spinu18", "enmol"]),
    L("m_lov", "dup\u0103 v: e\u2192\u0103, ea\u2192a \xEEn lovesc\u2192lov\u0103sc, s\u0103 loveasc\u0103\u2192s\u0103 lovasc\u0103", "after v: e\u2192\u0103, ea\u2192a in lovesc\u2192lov\u0103sc, s\u0103 loveasc\u0103\u2192s\u0103 lovasc\u0103", "lovesc|love\u0219te|loveasc\u0103", { lovesc: "lov\u0103sc", "love\u0219te": "lov\u0103\u0219te", "loveasc\u0103": "lovasc\u0103" }, "lovesc\u2192lov\u0103sc", "enmol", N("Pe aceea\u0219i pagin\u0103 sursa d\u0103 \u0219i vezi\u2192vjez, deci regula nu e general\u0103; doar cuvintele din surs\u0103.", "The same page also gives vezi\u2192vjez, so the rule is not general; only the source's words.")),
    L("m_zic", "dz p\u0103strat: zic\u2192dz\xEEc (nu \xEEn Republica Moldova, dup\u0103 Sp\xEEnu 2018)", "dz kept: zic\u2192dz\xEEc (not in the Republic of Moldova, per Sp\xEEnu 2018)", "zic", { zic: "dz\xEEc" }, "zic\u2192dz\xEEc", "enmol"),
    L("m_hv", "Nordul Moldovei: v\u2192h \xEEn volbur\u0103\u2192holbur\u0103, vulpe\u2192hulpe, vultan\u2192hultan", "Northern Moldavia: v\u2192h in volbur\u0103\u2192holbur\u0103, vulpe\u2192hulpe, vultan\u2192hultan", "volbur\u0103|vulpe|vulpi|vultan", { "volbur\u0103": "holbur\u0103", vulpe: "hulpe", vulpi: "hulpi", vultan: "hultan" }, "vulpe\u2192hulpe", "enmol"),
    L("m_ao_w", "Nordul Moldovei: \u0103 \xEEnaintea accentului \u2192 a: m\u0103gar\u2192magar, b\u0103tr\xE2n\u2192batr\xEEn, t\u0103cut\u2192tacut, p\u0103dure\u2192paduri", "Northern Moldavia: \u0103 before the stress \u2192 a: m\u0103gar\u2192magar, b\u0103tr\xE2n\u2192batr\xEEn, t\u0103cut\u2192tacut, p\u0103dure\u2192paduri", "m\u0103gar|b\u0103tr\xE2n|t\u0103cut|p\u0103dure", { "m\u0103gar": "magar", "b\u0103tr\xE2n": "batr\xEEn", "t\u0103cut": "tacut", "p\u0103dure": "paduri" }, "m\u0103gar\u2192magar", "enmol"),
    L("m_ao_s", "Nord (Republica Moldova): \u0103\u2192a: b\u0103rbat\u2192barbat, m\u0103gar\u2192magar, p\u0103dure\u2192padure, b\u0103tea\u2192batea (la v\xE2rstnici)", "North (Republic of Moldova): \u0103\u2192a: b\u0103rbat\u2192barbat, m\u0103gar\u2192magar, p\u0103dure\u2192padure, b\u0103tea\u2192batea (older speakers)", "b\u0103rbat|m\u0103gar|p\u0103dure|b\u0103tea", { "b\u0103rbat": "barbat", "m\u0103gar": "magar", "p\u0103dure": "padure", "b\u0103tea": "batea" }, "b\u0103rbat\u2192barbat", "spinu18"),
    L("m_toti", "to\u021Bi\u2192t\u0103\u021B (\xEEn Moldova din Rom\xE2nia)", "to\u021Bi\u2192t\u0103\u021B (in Romanian Moldavia)", "to\u021Bi", { "to\u021Bi": "t\u0103\u021B" }, "to\u021Bi\u2192t\u0103\u021B", "spinu18"),
    R("m_ea", "Dup\u0103 s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103n\u2192\u021Bap\u0103n)", "After s, z, \u0219, j, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103n\u2192\u021Bap\u0103n)", `(${S5})ea`, "$1a", "sear\u0103\u2192sar\u0103", ["enmol", "spinu18"]),
    R("m_e", "Dup\u0103 s, z, \u0219, j, \u021B: e\u2192\u0103 (semn\u2192s\u0103mn, \u0219ed\u2192\u0219\u0103d, vi\u021Bel\u2192vi\u021B\u0103l)", "After s, z, \u0219, j, \u021B: e\u2192\u0103 (semn\u2192s\u0103mn, \u0219ed\u2192\u0219\u0103d, vi\u021Bel\u2192vi\u021B\u0103l)", `(${S5})e`, "$1\u0103", "semn\u2192s\u0103mn", ["enmol", "spinu09", "spinu18"]),
    R("m_i", "Dup\u0103 s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zid\u2192z\xEEd, cu\u021Bit\u2192cu\u021B\xEEt)", "After s, z, \u0219, j, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, zid\u2192z\xEEd, cu\u021Bit\u2192cu\u021B\xEEt)", `(${S5})i`, "$1\xEE", "singur\u2192s\xEEngur", ["enmol", "spinu09"]),
    R("m_cea", "cea\u2192\u0219a, gea\u2192ja (ceap\u0103\u2192\u0219ap\u0103)", "cea\u2192\u0219a, gea\u2192ja (ceap\u0103\u2192\u0219ap\u0103)", "c(e)a", "\u0219a", "ceap\u0103\u2192\u0219ap\u0103", "enmol"),
    R("m_gea", "gea\u2192ja", "gea\u2192ja", "gea", "ja", "gean\u0103\u2192jan\u0103", "enmol"),
    R("m_c", "ce/ci \u2192 \u0219e/\u0219i, africata devine fricativ\u0103 (cin\u0103\u2192\u0219in\u0103, cinci\u2192\u0219in\u0219). Vocalele se schimb\u0103 \xEEnainte (cin\u0103, nu \u0219\xEEn\u0103)", "ce/ci \u2192 \u0219e/\u0219i, the affricate becomes a fricative (cin\u0103\u2192\u0219in\u0103, cinci\u2192\u0219in\u0219). Vowels change first (cin\u0103, not \u0219\xEEn\u0103)", `c(?=${FV})`, "\u0219", "cin\u0103\u2192\u0219in\u0103", ["enmol", "spinu18"]),
    R("m_g", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xE2nje, ginere\u2192jinere)", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xE2nje, ginere\u2192jinere)", `g(?=${FV})`, "j", "s\xE2nge\u2192s\xE2nje", ["enmol", "spinu18"]),
    R("m_dropi", "Dup\u0103 s, z, \u0219, j, \u021B: -i final (plural, persoana a 2-a) nu se mai aude (p\u0103rin\u021Bi\u2192p\u0103rin\u021B, vezi\u2192vez, cinci\u2192\u0219in\u0219)", "After s, z, \u0219, j, \u021B: final -i (plural, 2nd person) is no longer heard (p\u0103rin\u021Bi\u2192p\u0103rin\u021B, vezi\u2192vez, cinci\u2192\u0219in\u0219)", String.raw`(?<=\p{L})([szșjț]ʲ?)i(?!\p{L})`, "$1", "p\u0103rin\u021Bi\u2192p\u0103rin\u021B", ["enmol", "spinu09"]),
    R("m_pv", "p dup\u0103 vocal\u0103 \xEEnaintea lui i se p\u0103streaz\u0103: copil\u2192copchil, lupi\u2192lupchi", "p after a vowel before i is kept: copil\u2192copchil, lupi\u2192lupchi", `(?<=[${V}])p(?=i)`, "pch", "copil\u2192copchil", "guia20"),
    R("m_p", "p \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 chi/che (piatr\u0103\u2192chiatr\u0103, Petre\u2192Chetre, piept\u2192chiept)", "p before a front vowel \u2192 chi/che (piatr\u0103\u2192chiatr\u0103, Petre\u2192Chetre, piept\u2192chiept)", `p(?=i)`, "ch", "piatr\u0103\u2192chiatr\u0103", ["enmol", "guia20"]),
    R("m_b", "b \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 ghi/ghe (bine\u2192ghine, albin\u0103\u2192alghin\u0103)", "b before a front vowel \u2192 ghi/ghe (bine\u2192ghine, albin\u0103\u2192alghin\u0103)", `b(?=i)`, "gh", "bine\u2192ghine", ["enmol", "guia20"]),
    R("m_m", "m \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 ni/ne (miel\u2192niel, mire\u2192nire)", "m before a front vowel \u2192 ni/ne (miel\u2192niel, mire\u2192nire)", `m(?=i)`, "n", "miel\u2192niel", ["enmol", "guia20", "spinu18"]),
    R("mn_f", "Nordul Moldovei (la nord de linia Bac\u0103u\u2013Vaslui\u2013Hu\u0219i): f \u2192 \u0219 (fierbe\u2192\u0219ierbe)", "Northern Moldavia (north of the Bac\u0103u\u2013Vaslui\u2013Hu\u0219i line): f \u2192 \u0219 (fierbe\u2192\u0219ierbe)", `f(?=i)`, "\u0219", "fierbe\u2192\u0219ierbe", ["enmol", "guia20"]),
    R("mn_v", "Nordul Moldovei: v \u2192 j (vi\u021Bel\u2192ji\u021B\u0103l)", "Northern Moldavia: v \u2192 j (vi\u021Bel\u2192ji\u021B\u0103l)", `v(?=i)`, "j", "vi\u021Bel\u2192ji\u021Bel", ["enmol", "guia20"]),
    R("ms_f", "Sudul Moldovei (la sud de linia Bac\u0103u\u2013Vaslui\u2013Hu\u0219i): f \u2192 h (fierbe\u2192hierbi)", "Southern Moldavia (south of the Bac\u0103u\u2013Vaslui\u2013Hu\u0219i line): f \u2192 h (fierbe\u2192hierbi)", `f(?=i)`, "h", "fierbe\u2192hierbe", ["enmol", "guia20"]),
    R("ms_v", "Sudul Moldovei: v \u2192 \u0125, un h sonor muiat (vi\u021Bel\u2192\u0125i\u021B\u0103l)", "Southern Moldavia: v \u2192 \u0125, a voiced softened h (vi\u021Bel\u2192\u0125i\u021B\u0103l)", `v(?=i)`, "\u0125", "vi\u021Bel\u2192\u0125i\u021Bel", ["enmol", "guia20"]),
    R("m_ia1", "ia\u2192ie la \xEEnceput de cuv\xE2nt (iarb\u0103\u2192ierb\u0103)", "ia\u2192ie at the start of a word (iarb\u0103\u2192ierb\u0103)", `${B0}ia`, "ie", "iarb\u0103\u2192ierb\u0103", "spinu09"),
    R("m_ia2", "ia\u2192ie dup\u0103 vocal\u0103 (b\u0103iat\u2192b\u0103iet, \xEEncuiat\u2192\xEEncuiet)", "ia\u2192ie after a vowel (b\u0103iat\u2192b\u0103iet, \xEEncuiat\u2192\xEEncuiet)", `(?<=[${V}])ia`, "ie", "b\u0103iat\u2192b\u0103iet", ["enmol", "spinu09"]),
    R("m_eafin", "-ea final \u2192 -\xE9 (avea\u2192av\xE9, spunea\u2192spun\xE9)", "final -ea \u2192 -\xE9 (avea\u2192av\xE9, spunea\u2192spun\xE9)", String.raw`(?<=\p{L})ea(?!\p{L})`, "\xE9", "avea\u2192av\xE9", "enmol"),
    R("m_oa", "oa \u2192 wa (soare\u2192swari, boal\u0103\u2192bwal\u0103)", "oa \u2192 wa (soare\u2192swari, boal\u0103\u2192bwal\u0103)", "oa", "wa", "boal\u0103\u2192bwal\u0103", "enmol", N("Sursa spune \u201Eadesea\u201D.", "The source says \u201Coften\u201D.")),
    R("m_afin", "-\u0103 final \u2192 -\xEE (mam\u0103\u2192mam\xEE, cas\u0103\u2192cas\xEE)", "final -\u0103 \u2192 -\xEE (mam\u0103\u2192mam\xEE, cas\u0103\u2192cas\xEE)", String.raw`(?<=\p{L})ă(?!\p{L})`, "\xEE", "mam\u0103\u2192mam\xEE", ["enmol", "spinu09"]),
    R("m_efin", "-e final neaccentuat \u2192 -i (lapte\u2192lapti, frate\u2192fra\u021Bi)", "unstressed final -e \u2192 -i (lapte\u2192lapti, frate\u2192fra\u021Bi)", String.raw`(?<=[${V}][^${V}\s]*[^${V}y\s])e(?!\p{L})`, "i", "lapte\u2192lapti", ["enmol", "spinu09"], N("Programul nu vede accentul; se aplic\u0103 la orice -e final dup\u0103 consoan\u0103, \xEEn cuvinte cu mai mult de o silab\u0103 (-e final e aproape \xEEntotdeauna neaccentuat).", "The program cannot see stress; it is applied to every final -e after a consonant in words of more than one syllable (a final -e is almost always unstressed)."))
  );
  add(
    L("bas_ja", "dup\u0103 \u0219, j: a accentuat \u2192 \u0103: \u0219arpe\u2192\u0219\u0103rpi, \u0219apte\u2192\u0219\u0103pti, jale\u2192j\u0103li", "after \u0219, j: stressed a \u2192 \u0103: \u0219arpe\u2192\u0219\u0103rpi, \u0219apte\u2192\u0219\u0103pti, jale\u2192j\u0103li", "\u0219arpe|\u0219apte|jale", { "\u0219arpe": "\u0219\u0103rpi", "\u0219apte": "\u0219\u0103pti", "jale": "j\u0103li" }, "\u0219apte\u2192\u0219\u0103pti", "spinu18"),
    R("bas_ea", "ea\u2192a c\xE2nd \xEEn silaba urm\u0103toare e un a/\u0103 (mearg\u0103\u2192marg\u0103, sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103n\u2192\u021Bap\u0103n)", "ea\u2192a when the next syllable has a/\u0103 (mearg\u0103\u2192marg\u0103, sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103, \u021Beap\u0103n\u2192\u021Bap\u0103n)", `ea(?=[${C}]{1,2}[a\u0103])`, "a", "mearg\u0103\u2192marg\u0103", ["spinu09", "spinu18"]),
    L("bas_gio", "africata veche p\u0103strat\u0103 (mai ales la v\xE2rstnici): jos\u2192gios, joc\u2192gioc", "old affricate kept (mostly older speakers): jos\u2192gios, joc\u2192gioc", "jos|joc", { jos: "gios", joc: "gioc" }, "jos\u2192gios", "spinu18"),
    L("bas_u", "u etimologic \u2192 o: s\u0103pun\u2192sapon, fudul\u2192fodul", "etymological u \u2192 o: s\u0103pun\u2192sapon, fudul\u2192fodul", "s\u0103pun|fudul", { "s\u0103pun": "sapon", fudul: "fodul" }, "s\u0103pun\u2192sapon", "spinu09"),
    R("bas_f", "f \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 \u0219 (fin\u2192\u0219in)", "f before a front vowel \u2192 \u0219 (fin\u2192\u0219in)", `f(?=i)`, "\u0219", "fin\u2192\u0219in", ["spinu18", "spinu09"]),
    R("bas_v", "v \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 j (vierme\u2192jierme)", "v before a front vowel \u2192 j (vierme\u2192jierme)", `v(?=i)`, "j", "vierme\u2192jierme", ["spinu18"]),
    L("bas_old", "vorbirea v\xE2rstnicilor: fasole\u2192fasuli, coco\u0219\u2192cuco\u0219", "older speakers: fasole\u2192fasuli, coco\u0219\u2192cuco\u0219", "fasole|coco\u0219", { fasole: "fasuli", "coco\u0219": "cuco\u0219" }, "fasole\u2192fasuli", "spinu18"),
    // north-east
    R("ne_cea", "NE: cea \u2192 \u0219\u02B2a", "NE: cea \u2192 \u0219\u02B2a", "cea", "\u0219\u02B2a", "ceap\u0103\u2192\u0219\u02B2ap\u0103", "spinu09"),
    R("ne_gea", "NE: gea \u2192 j\u02B2a", "NE: gea \u2192 j\u02B2a", "gea", "j\u02B2a", "gean\u0103\u2192j\u02B2an\u0103", "spinu09"),
    R("ne_c", "NE: ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i, fricativ\u0103 muiat\u0103 (cinci\u2192\u0219\u02B2in\u0219\u02B2, cruce\u2192cru\u0219\u02B2e)", "NE: ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i, soft fricative (cinci\u2192\u0219\u02B2in\u0219\u02B2, cruce\u2192cru\u0219\u02B2e)", `c(?=${FV})`, "\u0219\u02B2", "cruce\u2192cru\u0219\u02B2e", "spinu09"),
    R("ne_g", "NE: ge/gi \u2192 j\u02B2e/j\u02B2i (argint\u2192arj\u02B2int)", "NE: ge/gi \u2192 j\u02B2e/j\u02B2i (argint\u2192arj\u02B2int)", `g(?=${FV})`, "j\u02B2", "argint\u2192arj\u02B2int", "spinu09"),
    R("ne_f1", "NE: fier\u2192\u0219\u02B2er", "NE: fier\u2192\u0219\u02B2er", "fi(?=e)", "\u0219\u02B2", "fier\u2192\u0219\u02B2er", "spinu09"),
    R("ne_f2", "NE: f \xEEnaintea lui i \u2192 \u0219\u02B2 (fin\u2192\u0219\u02B2in)", "NE: f before i \u2192 \u0219\u02B2 (fin\u2192\u0219\u02B2in)", `f(?=i)`, "\u0219\u02B2", "fin\u2192\u0219\u02B2in", "spinu09"),
    R("ne_v", "NE: v \xEEnaintea lui i \u2192 j\u02B2 (vin\u2192j\u02B2in, vis\u2192j\u02B2is)", "NE: v before i \u2192 j\u02B2 (vin\u2192j\u02B2in, vis\u2192j\u02B2is)", `v(?=i)`, "j\u02B2", "vin\u2192j\u02B2in", "spinu09"),
    R("ne_p1", "NE: p \xEEnaintea lui ie \u2192 c (piept\u2192cept, piele\u2192cele)", "NE: p before ie \u2192 c (piept\u2192cept, piele\u2192cele)", "pi(?=e)", "c", "piele\u2192cele", "spinu09"),
    R("ne_p2", "NE: p \xEEnaintea lui i \u2192 ci (lupi\u2192luci)", "NE: p before i \u2192 ci (lupi\u2192luci)", `p(?=i)`, "c", "lupi\u2192luci", "spinu09"),
    R("ne_b", "NE: b \xEEnaintea lui i/e \u2192 g (bine\u2192gine, albin\u0103\u2192algin\u0103, be\u021Bu\u2192getu)", "NE: b before i/e \u2192 g (bine\u2192gine, albin\u0103\u2192algin\u0103, be\u021Bu\u2192getu)", `b(?=i)`, "g", "bine\u2192gine", "spinu09"),
    R("ne_m", "NE: m \xEEnaintea lui i \u2192 \u0144 (mic\u2192\u0144ic, mire\u2192\u0144ire)", "NE: m before i \u2192 \u0144 (mic\u2192\u0144ic, mire\u2192\u0144ire)", "m(?=i)", "\u0144", "mic\u2192\u0144ic", "spinu09"),
    R("ne_ch", "NE: chi/che \u2192 ci/ce (ochelari\u2192ocelari, chem\u2192cem, urechi\u2192ureci)", "NE: chi/che \u2192 ci/ce (ochelari\u2192ocelari, chem\u2192cem, urechi\u2192ureci)", `ch(?=${FV})`, "c", "ochelari\u2192ocelari", "spinu09"),
    R("ne_gh", "NE: ghi/ghe \u2192 gi/ge (ghind\u0103\u2192gind\u0103, unghi\u2192ungi, \xEEnghit\u2192\xEEngit)", "NE: ghi/ghe \u2192 gi/ge (ghind\u0103\u2192gind\u0103, unghi\u2192ungi, \xEEnghit\u2192\xEEngit)", `gh(?=${FV})`, "g", "ghind\u0103\u2192gind\u0103", "spinu09"),
    L(
      "ne_lex",
      "NE: copil\u2192copcil, cuptor\u2192cupcior; ou\u0103\u2192oau\xEE, rou\u0103\u2192roau\xEE, nou\u0103\u2192noau\xEE, plou\u0103\u2192ploau\u0103; guler\u2192guliar, nepot\u2192niapot, nevast\u0103\u2192niavast\xEE; necaz\u2192nacaz; m\u0103sea\u2192m\u0103sa, curea\u2192cur\u0103, rea\u2192r\u0103; s\u0103\u2192s\xEE, s\u0103 fie\u2192s\xEE \u0219\u02B2ib\xEE",
      "NE: copil\u2192copcil, cuptor\u2192cupcior; ou\u0103\u2192oau\xEE, rou\u0103\u2192roau\xEE, nou\u0103\u2192noau\xEE, plou\u0103\u2192ploau\u0103; guler\u2192guliar, nepot\u2192niapot, nevast\u0103\u2192niavast\xEE; necaz\u2192nacaz; m\u0103sea\u2192m\u0103sa, curea\u2192cur\u0103, rea\u2192r\u0103; s\u0103\u2192s\xEE, s\u0103 fie\u2192s\xEE \u0219\u02B2ib\xEE",
      "copil|cuptor|ou\u0103|rou\u0103|nou\u0103|plou\u0103|guler|nepot|nevast\u0103|necaz|m\u0103sea|curea|rea|s\u0103 fie|s\u0103",
      { copil: "copcil", cuptor: "cupcior", "ou\u0103": "oau\xEE", "rou\u0103": "roau\xEE", "nou\u0103": "noau\xEE", "plou\u0103": "ploau\u0103", guler: "guliar", nepot: "niapot", "nevast\u0103": "niavast\xEE", necaz: "nacaz", "m\u0103sea": "m\u0103sa", curea: "cur\u0103", rea: "r\u0103", "s\u0103 fie": "s\xEE \u0219\u02B2ib\xEE", "s\u0103": "s\xEE" },
      "ou\u0103\u2192oau\xEE",
      "spinu09",
      N("Transcrierea din PDF e greu de citit; copcil, cupcior \u0219i oau\xEE sunt citiri apropiate ale simbolurilor.", "The PDF transcription is hard to read; copcil, cupcior and oau\xEE are close readings of the symbols.")
    ),
    L("nv_lex", "NV: ou\u0103\u2192oau\xEE, rou\u0103\u2192roau\xEE, nou\u0103\u2192noau\xEE, plou\u0103\u2192ploau\u0103", "NW: ou\u0103\u2192oau\xEE, rou\u0103\u2192roau\xEE, nou\u0103\u2192noau\xEE, plou\u0103\u2192ploau\u0103", "ou\u0103|rou\u0103|nou\u0103|plou\u0103", { "ou\u0103": "oau\xEE", "rou\u0103": "roau\xEE", "nou\u0103": "noau\xEE", "plou\u0103": "ploau\u0103" }, "ou\u0103\u2192oau\xEE", ["spinu09", "spinu18"])
  );
  add(
    L(
      "nt_lex",
      "Creang\u0103: diavole\u2192ghiavole, dib\u0103cia\u2192ghib\u0103cia, s\u0103 dib\u0103ce\u0219ti\u2192s\u0103 ghib\u0103ce\u0219ti; viforni\u021B\u0103\u2192givorni\u021B\u0103; m\u0103 sperii\u2192m\u0103 spariu; b\u0103lan\u2192balan, j\u0103ratic\u2192jaratic, m\u0103car\u2192macar",
      "Creang\u0103: diavole\u2192ghiavole, dib\u0103cia\u2192ghib\u0103cia, s\u0103 dib\u0103ce\u0219ti\u2192s\u0103 ghib\u0103ce\u0219ti; viforni\u021B\u0103\u2192givorni\u021B\u0103; m\u0103 sperii\u2192m\u0103 spariu; b\u0103lan\u2192balan, j\u0103ratic\u2192jaratic, m\u0103car\u2192macar",
      "diavole|diavoli|dib\u0103cia|dib\u0103ce\u0219ti|viforni\u021B\u0103|sperii|b\u0103lan|j\u0103ratic|m\u0103car|a ghili",
      { diavole: "ghiavole", diavoli: "ghiavoli", "dib\u0103cia": "ghib\u0103cia", "dib\u0103ce\u0219ti": "ghib\u0103ce\u0219ti", "viforni\u021B\u0103": "givorni\u021B\u0103", sperii: "spariu", "b\u0103lan": "balan", "j\u0103ratic": "jaratic", "m\u0103car": "macar" },
      "dib\u0103cia\u2192ghib\u0103cia",
      "capr02"
    ),
    R("nt_depal", "ie\u2192e dup\u0103 labial\u0103 (fiert\u2192fert, miercuri\u2192mercuri, pietre\u2192petre, piept\u2192pept, pierd\u2192perd)", "ie\u2192e after a labial (fiert\u2192fert, miercuri\u2192mercuri, pietre\u2192petre, piept\u2192pept, pierd\u2192perd)", `([pbfvm])ie(?=[${C}])`, "$1e", "fiert\u2192fert", "capr02"),
    R("nt_p", "p \xEEnaintea lui i \u2192 chi (pilos\u2192chilos, pilit\u2192chilit, piu\u0103\u2192chiu\u0103)", "p before i \u2192 chi (pilos\u2192chilos, pilit\u2192chilit, piu\u0103\u2192chiu\u0103)", "p(?=i)", "ch", "piu\u0103\u2192chiu\u0103", "capr02"),
    R("nt_f", "f \xEEnaintea lui i \u2192 hi (a fi\u2192a hi)", "f before i \u2192 hi (a fi\u2192a hi)", "f(?=i)", "h", "fi\u2192hi", "capr02"),
    R("nt_ia", "-iat \u2192 -iet (\xEEnfuriat\u2192\xEEnfuriet, m\xE2niat\u2192m\xE2niet, b\u0103iat\u2192b\u0103iet)", "-iat \u2192 -iet (\xEEnfuriat\u2192\xEEnfuriet, m\xE2niat\u2192m\xE2niet, b\u0103iat\u2192b\u0103iet)", `iat${B1}`, "iet", "m\xE2niat\u2192m\xE2niet", "capr02"),
    R("nt_ea", "-ea final \u2192 -\xE9 (vedea\u2192ved\xE9, vrea\u2192vr\xE9)", "final -ea \u2192 -\xE9 (vedea\u2192ved\xE9, vrea\u2192vr\xE9)", String.raw`(?<=\p{L})ea(?!\p{L})`, "\xE9", "vedea\u2192ved\xE9", "capr02"),
    R("nt_sea", "ea\u2192a dup\u0103 consoan\u0103 dur\u0103 (sear\u0103\u2192sar\u0103, bu\u0219easc\u0103\u2192bu\u0219asc\u0103)", "ea\u2192a after a hard consonant (sear\u0103\u2192sar\u0103, bu\u0219easc\u0103\u2192bu\u0219asc\u0103)", `(${S5})ea`, "$1a", "sear\u0103\u2192sar\u0103", "capr02")
  );
  add(
    R("bk_f", "f \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 h (fierbe\u2192hierbe)", "f before a front vowel \u2192 h (fierbe\u2192hierbe)", `f(?=i)`, "h", "fierbe\u2192hierbe", "turc77"),
    R("bk_v", "v \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 \u0125, fricativ\u0103 palatal\u0103 sonor\u0103 (vi\u021Bel\u2192\u0125i\u021Bel)", "v before a front vowel \u2192 \u0125, a voiced palatal fricative (vi\u021Bel\u2192\u0125i\u021Bel)", `v(?=i)`, "\u0125", "vi\u021Bel\u2192\u0125i\u021Bel", "turc77"),
    R("bk_p", "labiala se p\u0103streaz\u0103 \xEEn grupul vechi: p\u2192pchi (piele\u2192pchiele)", "the labial is kept in the old group: p\u2192pchi (piele\u2192pchiele)", `p(?=i)`, "pch", "piele\u2192pchiele", "turc77"),
    R("bk_b", "b\u2192bghi (bine\u2192bghine)", "b\u2192bghi (bine\u2192bghine)", `b(?=i)`, "bgh", "bine\u2192bghine", "turc77"),
    R("bk_m", "m\u2192mni (mic\u2192mnic)", "m\u2192mni (mic\u2192mnic)", `m(?=i)`, "mn", "mic\u2192mnic", "turc77"),
    R("bk_p2", "labiala se pierde (recent): p\u2192chi (piele\u2192chiele)", "the labial is lost (recent): p\u2192chi (piele\u2192chiele)", `p(?=i)`, "ch", "piele\u2192chiele", "turc77"),
    R("bk_b2", "b\u2192ghi (bine\u2192ghine)", "b\u2192ghi (bine\u2192ghine)", `b(?=i)`, "gh", "bine\u2192ghine", "turc77"),
    R("bk_m2", "m\u2192ni (mic\u2192nic)", "m\u2192ni (mic\u2192nic)", `m(?=i)`, "n", "mic\u2192nic", "turc77"),
    R("bk_p3", "africatizat: p\u2192pci (piele\u2192pciele)", "africatized: p\u2192pci (piele\u2192pciele)", `p(?=i)`, "pc", "piele\u2192pciele", "guia20"),
    R("bk_b3", "africatizat: b\u2192bgi (bine\u2192bgine)", "africatized: b\u2192bgi (bine\u2192bgine)", `b(?=i)`, "bg", "bine\u2192bgine", "guia20"),
    R("bk_m3", "m\u2192mni (mic\u2192mnic)", "m\u2192mni (mic\u2192mnic)", `m(?=i)`, "mn", "mic\u2192mnic", "guia20"),
    R("bk_ch", "chi/che \u2192 ci/ce: k' africatizat (ochi\u2192oci, chiar\u2192ciar)", "chi/che \u2192 ci/ce: k' africatized (ochi\u2192oci, chiar\u2192ciar)", `ch(?=${FV})`, "c", "ochi\u2192oci", "turc77"),
    R("bk_gh", "ghi/ghe \u2192 gi/ge (ghia\u021B\u0103\u2192gea\u021B\u0103)", "ghi/ghe \u2192 gi/ge (ghia\u021B\u0103\u2192gea\u021B\u0103)", `gh(?=${FV})`, "g", "ghia\u021B\u0103\u2192gia\u021B\u0103", "turc77"),
    R("bk_t", "t \xEEnaintea lui e/i \u2192 c, dentala muiat\u0103 se africatizeaz\u0103 (frunte\u2192frunce)", "t before e/i \u2192 c, the softened dental is africatized (frunte\u2192frunce)", `t(?=${FV})`, "c", "frunte\u2192frunce", "turc77"),
    R("bk_d", "d \xEEnaintea lui e/i \u2192 g (dinte\u2192gince)", "d before e/i \u2192 g (dinte\u2192gince)", `d(?=${FV})`, "g", "dinte\u2192ginte", "turc77"),
    R("bk_tl", "t \xEEnaintea lui e/i \u2192 t\u02B2, dental\u0103 u\u0219or muiat\u0103 (frate\u2192frat\u02B2e)", "t before e/i \u2192 t\u02B2, a lightly softened dental (frate\u2192frat\u02B2e)", `t(?=${FV})`, "t\u02B2", "frate\u2192frat\u02B2e", "turc77"),
    R("bk_dl", "d \xEEnaintea lui e/i \u2192 d\u02B2 (dinte\u2192d\u02B2inte)", "d before e/i \u2192 d\u02B2 (dinte\u2192d\u02B2inte)", `d(?=${FV})`, "d\u02B2", "dinte\u2192d\u02B2inte", "turc77"),
    R("bk_c", "ce/ci \u2192 \u0219e/\u0219i (fricativizare; R\u0103d\u0103u\u021B, sud-est, Valea Putnei)", "ce/ci \u2192 \u0219e/\u0219i (fricativization; R\u0103d\u0103u\u021Bi, south-east, Valea Putnei)", `c(?=${FV})`, "\u0219", "cinci\u2192\u0219in\u0219i", "turc77"),
    R("bk_cea", "cea\u2192\u0219a", "cea\u2192\u0219a", "c(e)a", "\u0219a", "ceap\u0103\u2192\u0219ap\u0103", "turc77"),
    R("bk_g", "ge/gi \u2192 je/ji", "ge/gi \u2192 je/ji", `g(?=${FV})`, "j", "ginere\u2192jinere", "turc77"),
    R("bk_gea", "gea\u2192ja", "gea\u2192ja", "gea", "ja", "gean\u0103\u2192jan\u0103", "turc77"),
    R("bk_f2", "f \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 \u0219 (fin\u2192\u0219in)", "f before a front vowel \u2192 \u0219 (fin\u2192\u0219in)", `f(?=i)`, "\u0219", "fin\u2192\u0219in", "turc77"),
    R("bk_v2", "v \xEEnaintea unei vocale din fa\u021B\u0103 \u2192 j (vin\u2192jin)", "v before a front vowel \u2192 j (vin\u2192jin)", `v(?=i)`, "j", "vin\u2192jin", "turc77"),
    R("bk_vel", "e\u2192\u0103 dup\u0103 s, z, \u021B, \u0219, j, r c\xE2nd e e \xEEn pozi\u021Bie \u201Emoale\u201D (urmat de o silab\u0103 cu vocal\u0103 palatal\u0103) sau final (reci\u2192r\u0103ci, \u0219ed\u2192\u0219\u0103d)", "e\u2192\u0103 after s, z, \u021B, \u0219, j, r when e is in a \u201Csoft\u201D position (followed by a syllable with a palatal vowel) or final (reci\u2192r\u0103ci, \u0219ed\u2192\u0219\u0103d)", `([sz\u021B\u0219jr])e(?=[${C}]*(?:[ei]|(?!\\p{L})))`, "$1\u0103", "\u0219ed\u2192\u0219\u0103d", "turc77", N("Sursa spune c\u0103 velarizarea e \u201Ecurent\u0103\u201D \xEEn Dorna \u0219i \xEEn sud-estul \u201Eafricatizant\u201D.", "The source says velarization is \u201Ccurrent\u201D in Dorna and the \u201Cafricatizing\u201D south-east.")),
    R("bk_afin", "-\u0103 final \u2192 -\xEE (mam\u0103\u2192mam\xEE)", "final -\u0103 \u2192 -\xEE (mam\u0103\u2192mam\xEE)", String.raw`(?<=\p{L})ă(?!\p{L})`, "\xEE", "mam\u0103\u2192mam\xEE", "turc77"),
    R("bk_efin", "-e final \u2192 -i (lapte\u2192lapti)", "final -e \u2192 -i (lapte\u2192lapti)", String.raw`(?<=[${V}][^${V}\s]*[^${V}y\s])e(?!\p{L})`, "i", "lapte\u2192lapti", "turc77", N("Programul nu vede accentul (vezi nota de la Moldova).", "The program cannot see stress (see the note under Moldavia).")),
    L("rd_lex", "R\u0103d\u0103u\u021B: dup\u0103\u2192dipi, viespe\u2192zespe, acolo\u2192aclo", "R\u0103d\u0103u\u021Bi area: dup\u0103\u2192dipi, viespe\u2192zespe, acolo\u2192aclo", "dup\u0103|viespe|acolo", { "dup\u0103": "dipi", viespe: "zespe", acolo: "aclo" }, "dup\u0103\u2192dipi", "turc77"),
    L("cs_lex", "Co\u0219na: a \xEEnaintea accentului \u2192 \u0103 (pahar\u2192p\u0103har, capac\u2192c\u0103pac, tabac\u2192t\u0103bac); ps\u2192p\u021B (coaps\u0103\u2192coap\u021B\u0103)", "Co\u0219na: a before the stress \u2192 \u0103 (pahar\u2192p\u0103har, capac\u2192c\u0103pac, tabac\u2192t\u0103bac); ps\u2192p\u021B (coaps\u0103\u2192coap\u021B\u0103)", "pahar|capac|tabac|coaps\u0103", { pahar: "p\u0103har", capac: "c\u0103pac", tabac: "t\u0103bac", "coaps\u0103": "coap\u021B\u0103" }, "pahar\u2192p\u0103har", "turc77")
  );
  add(
    L(
      "b_lex",
      "dz p\u0103strat: zece\u2192dz\u0103\u0219\u02B2e, auzi\u2192audz, frunz\u0103\u2192frundz\u0103, br\xE2nz\u0103\u2192br\xE2ndz\u0103, buz\u0103\u2192budz\u0103, grumaz\u2192grumadz\u0103, m\xE2nz\u2192m\xE2ndz; zer\u2192dz\u0103r, zid\u2192dz\xEEd",
      "dz kept: zece\u2192dz\u0103\u0219\u02B2e, auzi\u2192audz, frunz\u0103\u2192frundz\u0103, br\xE2nz\u0103\u2192br\xE2ndz\u0103, buz\u0103\u2192budz\u0103, grumaz\u2192grumadz\u0103, m\xE2nz\u2192m\xE2ndz; zer\u2192dz\u0103r, zid\u2192dz\xEEd",
      "zece|auzi|frunz\u0103|br\xE2nz\u0103|buz\u0103|grumaz|m\xE2nz|zer|zid",
      { zece: "dz\u0103\u0219\u02B2e", auzi: "audz", "frunz\u0103": "frundz\u0103", "br\xE2nz\u0103": "br\xE2ndz\u0103", "buz\u0103": "budz\u0103", grumaz: "grumadz\u0103", "m\xE2nz": "m\xE2ndz", zer: "dz\u0103r", zid: "dz\xEEd" },
      "zece\u2192dz\u0103\u0219\u02B2e",
      "enban"
    ),
    L(
      "b_n",
      "n muiat p\u0103strat: cui\u2192cu\u0144, c\u0103lc\xE2i\u2192c\u0103lc\xEE\u0144, c\u0103p\u0103t\xE2i\u2192c\u0103p\u0103t\xEE\u0144, r\u0103m\xE2i\u2192r\u0103m\xEE\u0144, claie\u2192cla\u0144e, sicriu\u2192s\u0103cri\u0144; c\xE2ine\u2192c\xEE\u0144e, m\xE2ine\u2192m\xEE\u0144e, p\xE2ine\u2192p\xEE\u0144e",
      "etymological n kept soft: cui\u2192cu\u0144, c\u0103lc\xE2i\u2192c\u0103lc\xEE\u0144, c\u0103p\u0103t\xE2i\u2192c\u0103p\u0103t\xEE\u0144, r\u0103m\xE2i\u2192r\u0103m\xEE\u0144, claie\u2192cla\u0144e, sicriu\u2192s\u0103cri\u0144; c\xE2ine\u2192c\xEE\u0144e, m\xE2ine\u2192m\xEE\u0144e, p\xE2ine\u2192p\xEE\u0144e",
      "cui|c\u0103lc\xE2i|c\u0103p\u0103t\xE2i|r\u0103m\xE2i|claie|sicriu|c\xE2ine|m\xE2ine|p\xE2ine",
      { cui: "cu\u0144", "c\u0103lc\xE2i": "c\u0103lc\xEE\u0144", "c\u0103p\u0103t\xE2i": "c\u0103p\u0103t\xEE\u0144", "r\u0103m\xE2i": "r\u0103m\xEE\u0144", claie: "cla\u0144e", sicriu: "s\u0103cri\u0144", "c\xE2ine": "c\xEE\u0144e", "m\xE2ine": "m\xEE\u0144e", "p\xE2ine": "p\xEE\u0144e" },
      "c\xE2ine\u2192c\xEE\u0144e",
      "enban"
    ),
    R("b_je", "e accentuat \u2192 je c\xE2nd urmeaz\u0103 alt e \xEEn silaba urm\u0103toare (fete\u2192fj\xE9\u0107e, verde\u2192vj\xE9r\u0111e, pe\u0219te\u2192pj\xE9\u0219\u0107e, poveste\u2192povj\xE9st\u0103)", "stressed e \u2192 j\xE9 (open e) when another e follows in the next syllable (fete\u2192fj\xE9\u0107e, verde\u2192vj\xE9r\u0111e, pe\u0219te\u2192pj\xE9\u0219\u0107e, poveste\u2192povj\xE9st\u0103)", `(?<!i)e(?=[${C}]{1,3}e${B1})`, "j\xE9", "verde\u2192vj\xE9rde", "enban", N("Programul nu vede accentul; se aplic\u0103 la e din penultima silab\u0103 a cuvintelor terminate \xEEn -e.", "The program cannot see stress; it applies to the e in the second-to-last syllable of words ending in -e.")),
    R("b_ie", "dup\u0103 labial\u0103, ie\u2192e (fier\u2192fer, piele\u2192pele, piept\u2192pept, miercuri\u2192mercuri, vierme\u2192verme)", "after a labial, ie\u2192e (fier\u2192fer, piele\u2192pele, piept\u2192pept, miercuri\u2192mercuri, vierme\u2192verme)", `([pbfvm])ie(?=[${C}])`, "$1e", "fier\u2192fer", "enban"),
    R("b_ea", "dup\u0103 s, z, \u0219, j, \u021B \u0219i st: ea\u2192a (sear\u0103\u2192sar\u0103, steag\u2192stag)", "after s, z, \u0219, j, \u021B and st: ea\u2192a (sear\u0103\u2192sar\u0103, steag\u2192stag)", `(${SIB})ea`, "$1a", "sear\u0103\u2192sar\u0103", "enban"),
    R("b_e", "dup\u0103 s, z, \u0219, j, \u021B \u0219i st: e\u2192\u0103 (semn\u2192s\u0103mn, poveste\u2192povest\u0103)", "after s, z, \u0219, j, \u021B and st: e\u2192\u0103 (semn\u2192s\u0103mn, poveste\u2192povest\u0103)", `(${SIB})e`, "$1\u0103", "semn\u2192s\u0103mn", "enban"),
    R("b_i", "dup\u0103 s, z, \u0219, j, \u021B \u0219i st: i\u2192\xEE (singur\u2192s\xEEngur, \u0219i\u2192\u0219\xEE)", "after s, z, \u0219, j, \u021B and st: i\u2192\xEE (singur\u2192s\xEEngur, \u0219i\u2192\u0219\xEE)", `(${SIB})i`, "$1\xEE", "singur\u2192s\xEEngur", "enban"),
    R("b_cea", "cea\u2192\u0219\u02B2a, gea\u2192j\u02B2a (ceas\u2192\u0219\u02B2as)", "cea\u2192\u0219\u02B2a, gea\u2192j\u02B2a (ceas\u2192\u0219\u02B2as)", "c(e)a", "\u0219\u02B2a", "ceas\u2192\u0219\u02B2as", "enban"),
    R("b_gea", "gea\u2192j\u02B2a", "gea\u2192j\u02B2a", "gea", "j\u02B2a", "gean\u0103\u2192j\u02B2an\u0103", "enban"),
    R("b_c", "ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i (cin\u0103\u2192\u0219\u02B2in\u0103, cinci\u2192\u0219\u02B2in\u0219\u02B2)", "ce/ci \u2192 \u0219\u02B2e/\u0219\u02B2i (cin\u0103\u2192\u0219\u02B2in\u0103, cinci\u2192\u0219\u02B2in\u0219\u02B2)", `c(?=${FV})`, "\u0219\u02B2", "cin\u0103\u2192\u0219\u02B2in\u0103", "enban"),
    R("b_g", "ge/gi \u2192 j\u02B2e/j\u02B2i (fuge\u2192fuj\u02B2e, ginere\u2192j\u02B2inere, s\xE2nge\u2192s\xEEn j\u02B2e)", "ge/gi \u2192 j\u02B2e/j\u02B2i (fuge\u2192fuj\u02B2e, ginere\u2192j\u02B2inere)", `g(?=${FV})`, "j\u02B2", "fuge\u2192fuj\u02B2e", "enban"),
    R("b_t", "t \xEEnaintea lui e/i/ea \u2192 \u0107 (frunte\u2192frun\u0107e)", "t before e/i/ea \u2192 \u0107 (frunte\u2192frun\u0107e)", `t(?=${FV})`, "\u0107", "frunte\u2192frun\u0107e", ["enban", "danciu09", "guia15"]),
    R("b_d", "d \xEEnaintea lui e/i/ea \u2192 \u0111 (bade\u2192ba\u0111e, diminea\u021B\u0103\u2192\u0111iminea\u021B\u0103)", "d before e/i/ea \u2192 \u0111 (bade\u2192ba\u0111e, diminea\u021B\u0103\u2192\u0111iminea\u021B\u0103)", `d(?=${FV})`, "\u0111", "bade\u2192ba\u0111e", ["enban", "danciu09", "guia15"]),
    R("b_nn", "n \xEEnaintea lui e/i/ea \u2192 \u0144 (vine\u2192vi\u0144e)", "n before e/i/ea \u2192 \u0144 (vine\u2192vi\u0144e)", `n(?=${FV})`, "\u0144", "vine\u2192vi\u0144e", "enban"),
    R("b_l", "l \xEEnaintea lui e/i/ea \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", "l before e/i/ea \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", `l(?=${FV})`, "\u013A", "lemne\u2192\u013Aemne", "enban"),
    R("b_r", "r \xEEnaintea lui e/i/ea \u2192 \u0155 (mare\u2192ma\u0155e)", "r before e/i/ea \u2192 \u0155 (mare\u2192ma\u0155e)", `r(?=${FV})`, "\u0155", "mare\u2192ma\u0155e", "enban"),
    L(
      "b_dan",
      "SV de Timi\u0219oara: caut\u2192capt, viespe\u2192v\u0103spar, scaun\u2192scamn; pr\xE2nz\u2192pr\xEEndz, r\xE2nz\u0103\u2192r\xEEndz\u0103, m\u0103z\u0103re\u2192m\u0103dzare; dormim\u2192durmim, dormi\u021Bi\u2192durmi\u021B, dormit\u2192durmit, dormind\u2192durmind; umblu\u2192\xEEmblu, umplu\u2192\xEEmplu, umflu\u2192\xEEmflu, intru\u2192\xEEntru",
      "SW of Timi\u0219oara: caut\u2192capt, viespe\u2192v\u0103spar, scaun\u2192scamn; pr\xE2nz\u2192pr\xEEndz, r\xE2nz\u0103\u2192r\xEEndz\u0103, m\u0103z\u0103re\u2192m\u0103dzare; dormim\u2192durmim, dormi\u021Bi\u2192durmi\u021B, dormit\u2192durmit, dormind\u2192durmind; umblu\u2192\xEEmblu, umplu\u2192\xEEmplu, umflu\u2192\xEEmflu, intru\u2192\xEEntru",
      "caut|viespe|scaun|pr\xE2nz|r\xE2nz\u0103|m\u0103z\u0103re|dormim|dormi\u021Bi|dormit|dormind|umblu|umplu|umflu|intru",
      { caut: "capt", viespe: "v\u0103spar", scaun: "scamn", "pr\xE2nz": "pr\xEEndz", "r\xE2nz\u0103": "r\xEEndz\u0103", "m\u0103z\u0103re": "m\u0103dzare", dormim: "durmim", "dormi\u021Bi": "durmi\u021B", dormit: "durmit", dormind: "durmind", umblu: "\xEEmblu", umplu: "\xEEmplu", umflu: "\xEEmflu", intru: "\xEEntru" },
      "caut\u2192capt",
      "danciu09"
    ),
    L("b_alm", "SV Banat (Alm\u0103j, Cara\u0219ova): luat\u2192luvat, nour\u2192nuv\u0103r, laud\u0103\u2192l\u0103vd\u0103, caut\u2192capt", "SW Banat (Alm\u0103j, Cara\u0219ova): luat\u2192luvat, nour\u2192nuv\u0103r, laud\u0103\u2192l\u0103vd\u0103, caut\u2192capt", "luat|nour|laud\u0103|caut", { luat: "luvat", nour: "nuv\u0103r", "laud\u0103": "l\u0103vd\u0103", caut: "capt" }, "luat\u2192luvat", "petrovici35")
  );
  add(
    L("cr_lex", "c\xE2ine\u2192c\xEE\u0144e, m\xE2ine\u2192m\xEE\u0144e, p\xE2ine\u2192p\xEE\u0144e; b\u0103iat\u2192b\u0103iet, t\u0103m\xE2iat\u2192t\u0103m\xEEiet", "c\xE2ine\u2192c\xEE\u0144e, m\xE2ine\u2192m\xEE\u0144e, p\xE2ine\u2192p\xEE\u0144e; b\u0103iat\u2192b\u0103iet, t\u0103m\xE2iat\u2192t\u0103m\xEEiet", "c\xE2ine|m\xE2ine|p\xE2ine|b\u0103iat|t\u0103m\xE2iat", { "c\xE2ine": "c\xEE\u0144e", "m\xE2ine": "m\xEE\u0144e", "p\xE2ine": "p\xEE\u0144e", "b\u0103iat": "b\u0103iet", "t\u0103m\xE2iat": "t\u0103m\xEEiet" }, "c\xE2ine\u2192c\xEE\u0144e", "encri"),
    R("cr_sl", "sl\u2192skl (slab\u2192sklab, sl\u0103nin\u0103\u2192skl\u0103nin\u0103)", "sl\u2192skl (slab\u2192sklab, sl\u0103nin\u0103\u2192skl\u0103nin\u0103)", "sl", "skl", "slab\u2192sklab", "encri"),
    R("cr_sea", "dup\u0103 s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", "after s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", "([sz\u021B])ea", "$1a", "sear\u0103\u2192sar\u0103", "encri"),
    R("cr_se", "dup\u0103 s, z, \u021B: e\u2192\u0103", "after s, z, \u021B: e\u2192\u0103", "([sz\u021B])e", "$1\u0103", "semn\u2192s\u0103mn", "encri"),
    R("cr_si", "dup\u0103 s, z, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn)", "after s, z, \u021B: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn)", "([sz\u021B])i", "$1\xEE", "singur\u2192s\xEEngur", "encri"),
    R("cr_o", "o la \xEEnceput de cuv\xE2nt \u2192 w\u0103 (oi\u2192w\u0103i, orb\u2192w\u0103rb)", "word-initial o \u2192 w\u0103 (oi\u2192w\u0103i, orb\u2192w\u0103rb)", `${B0}o(?=[${C}i])`, "w\u0103", "orb\u2192w\u0103rb", "encri"),
    R("cr_oa", "oa\u2192o (poate\u2192pote, coaj\u0103\u2192coj\u0103)", "oa\u2192o (poate\u2192pote, coaj\u0103\u2192coj\u0103)", "oa", "o", "poate\u2192pote", "encri"),
    R("cr_lea", "dup\u0103 labial\u0103: ea\u2192a (mearg\u0103\u2192marg\u0103)", "after a labial: ea\u2192a (mearg\u0103\u2192marg\u0103)", "([pbmfv])ea", "$1a", "mearg\u0103\u2192marg\u0103", "encri"),
    R("cr_le", "dup\u0103 labial\u0103: e\u2192\u0103 (merg\u2192m\u0103rg)", "after a labial: e\u2192\u0103 (merg\u2192m\u0103rg)", "([pbmfv])e", "$1\u0103", "merg\u2192m\u0103rg", "encri"),
    R("cr_g", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xEEnje, fuge\u2192fuje); ce/ci r\u0103m\xE2n africate", "ge/gi \u2192 je/ji (s\xE2nge\u2192s\xEEnje, fuge\u2192fuje); ce/ci stay affricates", `g(?=${FV})`, "j", "fuge\u2192fuje", "encri"),
    R("cr_ch", "chi/che \u2192 t\u02B2i/t\u02B2e (chem\u2192t\u02B2em, cheag\u2192t\u02B2ag): k' se confund\u0103 cu t muiat", "chi/che \u2192 t\u02B2i/t\u02B2e (chem\u2192t\u02B2em, cheag\u2192t\u02B2ag): k' is confused with a softened t", `ch(?=${FV})`, "t\u02B2", "chem\u2192t\u02B2em", "guia15"),
    R("cr_gh", "ghi/ghe \u2192 d\u02B2i/d\u02B2e (ghea\u021B\u0103\u2192d\u02B2ea\u021B\u0103, unghie\u2192und\u02B2ie): g' se confund\u0103 cu d muiat", "ghi/ghe \u2192 d\u02B2i/d\u02B2e (ghea\u021B\u0103\u2192d\u02B2ea\u021B\u0103, unghie\u2192und\u02B2ie): g' is confused with a softened d", `gh(?=${FV})`, "d\u02B2", "ghea\u021B\u0103\u2192d\u02B2ea\u021B\u0103", "guia15"),
    R("cr_t", "t \xEEnaintea lui e/i/ea \u2192 t\u02B2 (frate\u2192frat\u02B2e)", "t before e/i/ea \u2192 t\u02B2 (frate\u2192frat\u02B2e)", `t(?=${FV})`, "t\u02B2", "frate\u2192frat\u02B2e", ["encri", "guia15"]),
    R("cr_d", "d \xEEnaintea lui e/i/ea \u2192 d\u02B2 (bade\u2192bad\u02B2e)", "d before e/i/ea \u2192 d\u02B2 (bade\u2192bad\u02B2e)", `d(?=${FV})`, "d\u02B2", "bade\u2192bad\u02B2e", ["encri", "guia15"]),
    R("cr_n", "n \xEEnaintea lui e/i/ea \u2192 \u0144 (mine\u2192mi\u0144e)", "n before e/i/ea \u2192 \u0144 (mine\u2192mi\u0144e)", `n(?=${FV})`, "\u0144", "mine\u2192mi\u0144e", "guia15"),
    R("cr_p0", "nordul Cri\u0219anei: pi \xEEnaintea lui a/e \u2192 pt\u02B2 (piele\u2192pt\u02B2ele, piatr\u0103\u2192pt\u02B2atr\u0103)", "northern Cri\u0219ana: pi before a/e \u2192 pt\u02B2 (piele\u2192pt\u02B2ele, piatr\u0103\u2192pt\u02B2atr\u0103)", "pi(?=[ae])", "pt\u02B2", "piele\u2192pt\u02B2ele", ["encri", "guia20"]),
    R("mar_p0", "p+ie/ia \u2192 pt\u02B2 (piele\u2192pt\u02B2ele)", "pi before a/e \u2192 pt\u02B2 (piele\u2192pt\u02B2ele)", "pi(?=[ae])", "pt\u02B2", "piele\u2192pt\u02B2ele", "enmar"),
    R("ar_p0", "NE: pi \xEEnaintea lui a/e \u2192 pc (piele\u2192pcele, piatr\u0103\u2192pcatr\u0103)", "NE: pi before a/e \u2192 pc (piele\u2192pcele, piatr\u0103\u2192pcatr\u0103)", "pi(?=[ae])", "pc", "piatr\u0103\u2192pcatr\u0103", "rus20"),
    R("cr_p", "nordul Cri\u0219anei: p \xEEnaintea lui i \u2192 pt\u02B2 (piele\u2192pt\u02B2ele)", "northern Cri\u0219ana: p before i \u2192 pt\u02B2 (piele\u2192pt\u02B2ele)", `p(?=i)`, "pt\u02B2", "pitic\u2192pt\u02B2itic", ["encri", "guia20"]),
    R("cr_b", "nordul Cri\u0219anei: b \u2192 bd\u02B2 (bine\u2192bd\u02B2ine)", "northern Cri\u0219ana: b \u2192 bd\u02B2 (bine\u2192bd\u02B2ine)", `b(?=i)`, "bd\u02B2", "bine\u2192bd\u02B2ine", ["encri", "guia20"]),
    R("cr_m", "nordul Cri\u0219anei: m \u2192 mn\u02B2 (mic\u2192mn\u02B2ic)", "northern Cri\u0219ana: m \u2192 mn\u02B2 (mic\u2192mn\u02B2ic)", `m(?=i)`, "mn\u02B2", "mic\u2192mn\u02B2ic", ["encri", "guia20"]),
    R("cr_f", "nordul Cri\u0219anei: f \u2192 h\u02B2 (fierbe\u2192h\u02B2ierbe)", "northern Cri\u0219ana: f \u2192 h\u02B2 (fierbe\u2192h\u02B2ierbe)", `f(?=i)`, "h\u02B2", "fierbe\u2192h\u02B2ierbe", ["encri", "guia20"]),
    R("cr_v", "nordul Cri\u0219anei: v \u2192 \u0125 (vi\u021Bel\u2192\u0125i\u021Bel)", "northern Cri\u0219ana: v \u2192 \u0125 (vi\u021Bel\u2192\u0125i\u021Bel)", `v(?=i)`, "\u0125", "vi\u021Bel\u2192\u0125i\u021Bel", ["encri", "guia20"]),
    L("cr_moti", "\u021Aara Mo\u021Bilor: n \xEEntre vocale \u2192 r \xEEn cuvinte vechi: oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0103", "\u021Aara Mo\u021Bilor: intervocalic n \u2192 r in old words: oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0103", "oameni|lumin\u0103", { oameni: "wamir\u02B2", "lumin\u0103": "lumn\u02B2ir\u0103" }, "oameni\u2192wamir\u02B2", "encri"),
    R("cr_mt", "Mun\u021Bii Apuseni: t \xEEnaintea lui e/i \u2192 c, dentala se africatizeaz\u0103 (\u0219tiu\u2192\u0219ciu, vorbe\u0219te\u2192vorbe\u0219ce)", "Apuseni Mountains: t before e/i \u2192 c, the dental is africatized (\u0219tiu\u2192\u0219ciu, vorbe\u0219te\u2192vorbe\u0219ce)", `t(?=${FV})`, "c", "\u0219tiu\u2192\u0219ciu", "guia15"),
    R("cr_mv", "\u021Aara Mo\u021Bilor \u0219i valea Cri\u0219ului Negru: v \u2192 \u0125 (vis\u2192\u0125is, vierme\u2192\u0125ierme)", "\u021Aara Mo\u021Bilor and Cri\u0219ul Negru valley: v \u2192 \u0125 (vis\u2192\u0125is, vierme\u2192\u0125ierme)", `v(?=${FV})`, "\u0125", "vis\u2192\u0125is", "guia20"),
    R("cr_oas", "\u021Aara Oa\u0219ului: l \xEEnaintea unei consoane se velarizeaz\u0103 (alb\u2192a\u0142b)", "\u021Aara Oa\u0219ului: l before a consonant is velarized (alb\u2192a\u0142b)", `l(?=[${C}])`, "\u0142", "alb\u2192a\u0142b", "encri"),
    L("cr_oas2", "\u021Aara Oa\u0219ului: schimb\u2192\u0219timb, \u0219chiop\u2192\u0219tiop (grupul \u0219t' se depalatalizeaz\u0103)", "\u021Aara Oa\u0219ului: schimb\u2192\u0219timb, \u0219chiop\u2192\u0219tiop (the group \u0219t' is depalatalized)", "schimb|\u0219chiop", { schimb: "\u0219timb", "\u0219chiop": "\u0219tiop" }, "schimb\u2192\u0219timb", "guia15")
  );
  add(
    L(
      "mar_lex",
      "de\u2192di; c\xE2ine\u2192c\xEE\u0144e, m\xE2ine\u2192m\xEE\u0144e, p\xE2ine\u2192p\xEE\u0144e; b\u0103iat\u2192b\u0103iet, muiat\u2192muiet; zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios, joc\u2192gioc; umblu\u2192\xEEmblu, umflu\u2192\xEEmflu, intru\u2192\xEEntru",
      "de\u2192di; c\xE2ine\u2192c\xEE\u0144e, m\xE2ine\u2192m\xEE\u0144e, p\xE2ine\u2192p\xEE\u0144e; b\u0103iat\u2192b\u0103iet, muiat\u2192muiet; zi\u2192dz\xEE, zic\u2192dz\xEEc, jos\u2192gios, joc\u2192gioc; umblu\u2192\xEEmblu, umflu\u2192\xEEmflu, intru\u2192\xEEntru",
      "de|c\xE2ine|m\xE2ine|p\xE2ine|b\u0103iat|muiat|zi|zic|jos|joc|umblu|umflu|intru",
      { de: "di", "c\xE2ine": "c\xEE\u0144e", "m\xE2ine": "m\xEE\u0144e", "p\xE2ine": "p\xEE\u0144e", "b\u0103iat": "b\u0103iet", muiat: "muiet", zi: "dz\xEE", zic: "dz\xEEc", jos: "gios", joc: "gioc", umblu: "\xEEmblu", umflu: "\xEEmflu", intru: "\xEEntru" },
      "zic\u2192dz\xEEc",
      "enmar"
    ),
    R("mar_eafin", "-ea final \u2192 -\xE9 (avea\u2192av\xE9, vrea\u2192vr\xE9)", "final -ea \u2192 -\xE9 (avea\u2192av\xE9, vrea\u2192vr\xE9)", String.raw`(?<=\p{L})ea(?!\p{L})`, "\xE9", "avea\u2192av\xE9", "enmar", N("Sursa spune \u201Eaccentuat\u201D.", "The source says \u201Cstressed\u201D.")),
    R("mar_ee", "c\xE2nd e apare \xEEn dou\u0103 silabe consecutive, primul e se deschide: fete\u2192f\xE9te", "when e appears in two consecutive syllables, the first e opens: fete\u2192f\xE9te", `e(?=[${C}]{1,2}e)`, "\xE9", "fete\u2192f\xE9te", "enmar"),
    R("mar_sea", "dup\u0103 s, z, \u0219, j, \u021B, r: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", "after s, z, \u0219, j, \u021B, r: ea\u2192a (sear\u0103\u2192sar\u0103, zeam\u0103\u2192zam\u0103)", `([sz\u0219j\u021Br])ea`, "$1a", "sear\u0103\u2192sar\u0103", "enmar"),
    R("mar_se", "dup\u0103 s, z, \u0219, j, \u021B, r: e\u2192\u0103", "after s, z, \u0219, j, \u021B, r: e\u2192\u0103", `([sz\u0219j\u021Br])e`, "$1\u0103", "zer\u2192z\u0103r", "enmar"),
    R("mar_si", "dup\u0103 s, z, \u0219, j, \u021B, r: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn, jir\u2192j\xEEr)", "after s, z, \u0219, j, \u021B, r: i\u2192\xEE (singur\u2192s\xEEngur, \u021Bin\u2192\u021B\xEEn, jir\u2192j\xEEr)", `([sz\u0219j\u021Br])i`, "$1\xEE", "singur\u2192s\xEEngur", "enmar"),
    R("mar_ce", "c, g \xEEnaintea lui e: e\u2192\u0115, central (cer\u2192c\u0115r, ger\u2192g\u0115r); c/g r\u0103m\xE2n africate", "c, g before e: e\u2192\u0115, central (cer\u2192c\u0115r, ger\u2192g\u0115r); c/g stay affricates", "([cg])e(?!a)", "$1\u0115", "cer\u2192c\u0115r", "enmar"),
    R("mar_la", "dup\u0103 labial\u0103: ea\u2192a (mearg\u0103\u2192marg\u0103)", "after a labial: ea\u2192a (mearg\u0103\u2192marg\u0103)", "([pbmfv])ea", "$1a", "mearg\u0103\u2192marg\u0103", "enmar"),
    R("mar_le", "dup\u0103 labial\u0103: e\u2192\u0103 (merg\u2192m\u0103rg, pe\u2192p\u0103)", "after a labial: e\u2192\u0103 (merg\u2192m\u0103rg, pe\u2192p\u0103)", "([pbmfv])e", "$1\u0103", "pe\u2192p\u0103", "enmar"),
    R("mar_oa", "oa\u2192o (u\u0219oar\u0103\u2192u\u0219or\u0103, noapte\u2192nopte)", "oa\u2192o (u\u0219oar\u0103\u2192u\u0219or\u0103, noapte\u2192nopte)", "oa", "o", "noapte\u2192nopte", "enmar"),
    R("mar_l", "l \xEEnaintea lui e/i \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", "l before e/i \u2192 \u013A (lemne\u2192\u013Aem\u0144e)", `l(?=${FV})`, "\u013A", "lemne\u2192\u013Aemne", "enmar"),
    R("mar_n", "n \xEEnaintea lui e/i \u2192 \u0144 (vine\u2192vi\u0144e)", "n before e/i \u2192 \u0144 (vine\u2192vi\u0144e)", `n(?=${FV})`, "\u0144", "vine\u2192vi\u0144e", "enmar"),
    R("mar_t", "t, d \xEEnaintea lui e/i/ea \u2192 t\u02B2, d\u02B2 (frate\u2192frat\u02B2e, bade\u2192bad\u02B2e)", "t, d before e/i/ea \u2192 t\u02B2, d\u02B2 (frate\u2192frat\u02B2e, bade\u2192bad\u02B2e)", `([td])(?=${FV})`, "$1\u02B2", "frate\u2192frat\u02B2e", "guia15"),
    R("mar_ch", "chi/che \u2192 t\u02B2i/t\u02B2e, ghi/ghe \u2192 d\u02B2i/d\u02B2e (k', g' confundate cu dentalele muiate)", "chi/che \u2192 t\u02B2i/t\u02B2e, ghi/ghe \u2192 d\u02B2i/d\u02B2e (k', g' confused with softened dentals)", `ch(?=${FV})`, "t\u02B2", "chem\u2192t\u02B2em", "guia15"),
    R("mar_gh", "ghi/ghe \u2192 d\u02B2i/d\u02B2e", "ghi/ghe \u2192 d\u02B2i/d\u02B2e", `gh(?=${FV})`, "d\u02B2", "ghea\u021B\u0103\u2192d\u02B2ea\u021B\u0103", "guia15"),
    R("mar_p", "p \xEEnaintea lui i \u2192 pt\u02B2 (piele\u2192pt\u02B2ele)", "p before i \u2192 pt\u02B2 (piele\u2192pt\u02B2ele)", `p(?=i)`, "pt\u02B2", "pitic\u2192pt\u02B2itic", "enmar"),
    R("mar_b", "b \u2192 bd\u02B2 (bine\u2192bd\u02B2ine)", "b \u2192 bd\u02B2 (bine\u2192bd\u02B2ine)", `b(?=i)`, "bd\u02B2", "bine\u2192bd\u02B2ine", "enmar"),
    R("mar_m", "m \u2192 mn\u02B2 (mic\u2192mn\u02B2ic)", "m \u2192 mn\u02B2 (mic\u2192mn\u02B2ic)", `m(?=i)`, "mn\u02B2", "mic\u2192mn\u02B2ic", "enmar"),
    R("mar_f", "f \xEEnaintea lui i \u2192 s (s\u0103 fie\u2192s\u0103 sie)", "f before i \u2192 s (s\u0103 fie\u2192s\u0103 sie)", `f(?=i)`, "s", "fie\u2192sie", "enmar"),
    R("mar_v", "v \xEEnaintea lui i \u2192 z (vierme\u2192zierme)", "v before i \u2192 z (vierme\u2192zierme)", `v(?=i)`, "z", "vierme\u2192zierme", "enmar")
  );
  add(
    L("ar_lex", "c\xE2ine\u2192c\xEEne, m\xE2ine\u2192m\xEEne, p\xE2ine\u2192p\xEEne", "c\xE2ine\u2192c\xEEne, m\xE2ine\u2192m\xEEne, p\xE2ine\u2192p\xEEne", "c\xE2ine|m\xE2ine|p\xE2ine", { "c\xE2ine": "c\xEEne", "m\xE2ine": "m\xEEne", "p\xE2ine": "p\xEEne" }, "p\xE2ine\u2192p\xEEne", "entra"),
    R("ar_dorm", "a durmi: u \xEEn tot paradigma (dorm\u2192durm, adormi\u2192adurmi)", "a durmi: u throughout the paradigm (dorm\u2192durm, adormi\u2192adurmi)", `${B0}(a?)dorm(?=(?:i|e|im|i\u021Bi|ea|ind|ire|it)?${B1})`, "$1durm", "dorm\u2192durm", "entra"),
    R("ar_sea", "dup\u0103 s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103)", "after s, z, \u021B: ea\u2192a (sear\u0103\u2192sar\u0103)", "([sz\u021B])ea", "$1a", "sear\u0103\u2192sar\u0103", "entra"),
    R("ar_se", "dup\u0103 s, z, \u021B: e\u2192\u0103", "after s, z, \u021B: e\u2192\u0103", "([sz\u021B])e", "$1\u0103", "semn\u2192s\u0103mn", "entra"),
    R("ar_si", "dup\u0103 s, z, \u021B: i\u2192\xEE", "after s, z, \u021B: i\u2192\xEE", "([sz\u021B])i", "$1\xEE", "singur\u2192s\xEEngur", "entra"),
    R("ar_oa", "oa\u2192o \xEEn tot graiul ardelenesc (boal\u0103\u2192bol\u0103, coad\u0103\u2192cod\u0103, groap\u0103\u2192grop\u0103, aproape\u2192aprope)", "oa\u2192o across Transylvanian speech (boal\u0103\u2192bol\u0103, coad\u0103\u2192cod\u0103, groap\u0103\u2192grop\u0103, aproape\u2192aprope)", "oa", "o", "coad\u0103\u2192cod\u0103", "rus20"),
    R("ar_ch", "NE: chi/che \u2192 ci/ce, ghi/ghe \u2192 gi/ge (curechi\u2192curec, piper\u2192cip\xE9r): k', g' africatizate", "NE: chi/che \u2192 ci/ce, ghi/ghe \u2192 gi/ge (curechi\u2192curec): k', g' africatized", `ch(?=${FV})`, "c", "ochi\u2192oci", "guia15"),
    R("ar_gh", "NE: ghi/ghe \u2192 gi/ge", "NE: ghi/ghe \u2192 gi/ge", `gh(?=${FV})`, "g", "ghia\u021B\u0103\u2192gia\u021B\u0103", "guia15"),
    R("ar_td", "NE: t, d \xEEnaintea lui e/i/ea sunt muiate (t\u02B2, d\u02B2)", "NE: t, d before e/i/ea are softened (t\u02B2, d\u02B2)", `([td])(?=${FV})`, "$1\u02B2", "frate\u2192frat\u02B2e", "guia15"),
    R("ar_n", "NE: n \xEEnaintea lui e/i/ea \u2192 \u0144 (vine\u2192vi\u0144e)", "NE: n before e/i/ea \u2192 \u0144 (vine\u2192vi\u0144e)", `n(?=${FV})`, "\u0144", "vine\u2192vi\u0144e", "guia15"),
    R("ar_p", "NE: p\u2192pc (piele\u2192pcele)", "NE: p\u2192pc (piele\u2192pcele)", `p(?=i)`, "pc", "pitic\u2192pcitic", "rus20"),
    R("ar_b", "NE: b\u2192bg (albin\u0103\u2192albgin\u0103)", "NE: b\u2192bg (albin\u0103\u2192albgin\u0103)", `b(?=i)`, "bg", "albin\u0103\u2192albgin\u0103", "rus20"),
    R("ar_m", "NE: m\u2192m\u0144 (mic\u2192m\u0144ic, nimic\u2192nim\u0144ic)", "NE: m\u2192m\u0144 (mic\u2192m\u0144ic, nimic\u2192nim\u0144ic)", `m(?=i)`, "m\u0144", "lumin\u0103\u2192lum\u0144in\u0103", "rus20"),
    R("ar_f", "NE: f\u2192\u0219 \xEEnaintea lui i (fin\u2192\u0219in)", "NE: f\u2192\u0219 before i (fin\u2192\u0219in)", `f(?=i)`, "\u0219", "fin\u2192\u0219in", "rus20"),
    R("ar_v", "NE: v\u2192z \xEEnaintea lui i (vin\u2192zin, vi\u021Bel\u2192zi\u021B\u0103l)", "NE: v\u2192z before i (vin\u2192zin, vi\u021Bel\u2192zi\u021B\u0103l)", `v(?=i)`, "z", "vin\u2192zin", "rus20")
  );
  var RULES = Object.fromEntries(list.map((r) => [r.id, r]));

  // js/engine.js
  var cap = (src, out) => src[0] !== src[0].toLowerCase() ? out[0].toUpperCase() + out.slice(1) : out;
  var norm = (t) => t.normalize("NFC").replace(/ş/g, "\u0219").replace(/Ş/g, "\u0218").replace(/ţ/g, "\u021B").replace(/Ţ/g, "\u021A");
  var cache = {};
  function compile(R2) {
    return cache[R2.id] || (cache[R2.id] = new RegExp(R2.from, "giu"));
  }
  function toDialect(text, id) {
    const d = DIALECTS[id];
    let out = norm(text);
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
          const v = R2.map[m.toLowerCase()];
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
  var IPA = { "\u0219\u02B2": "\u0283\u02B2", "j\u02B2": "\u0292\u02B2", "\u0107": "t\u0283\u02B2", "\u0111": "d\u0292\u02B2", "\u0144": "n\u02B2", "\u013A": "l\u02B2", "\u0155": "r\u02B2", "\u0125": "\u0266\u02B2", "\u0142": "\u026B", "\xE9": "\u025B", "\u0115": "\u0259", ch: "k", gh: "g", c: "t\u0283", g: "d\u0292", \u021B: "ts", \u0219: "\u0283", j: "\u0292", \u0103: "\u0259", \u00EE: "\u0268", \u00E2: "\u0268", x: "ks", ea: "e\u032Fa", oa: "o\u032Fa", y: "j", h: "h" };
  var RE = /șʲ|jʲ|[ćđńĺŕĥłéĕ]|(ch|gh|h|j|n)i(?=[aeo])|ch(?=[ei])|gh(?=[ei])|(c)(?=[eiĕ])|g(?=[eiĕ])|ea|oa|[țșjăîâxy]|c/giu;
  function toIPA(t) {
    const o = t.toLowerCase().replace(RE, (m, p, q) => {
      var _a;
      return p ? (p === "ch" ? "k" : p === "gh" ? "g" : p) + "\u02B2" : q ? "t\u0283" : m === "c" ? "k" : (_a = IPA[m]) != null ? _a : m;
    });
    return "/" + o + "/";
  }

  // js/sources.js
  var S = (label, cite, url, covers, area, caveat) => ({ label, cite, url, covers, area, caveat });
  var WP = (t) => `\u201E${t}\u201D, Wikipedia (EN), 6.11.2026.`;
  var SOURCES = {
    capr02: S(
      "C\u0103prioar\u0103 2002",
      "Cosmin C\u0103prioar\u0103, \u201ETr\u0103s\u0103turi dialectale \xEEn opera lui Ion Creang\u0103\u201D, Analele Universit\u0103\u021Bii \u201EOvidius\u201D Constan\u021Ba, seria Filologie, XIII, 2002, pp. 51\u201355.",
      "https://www.diacronia.ro/indexing/details/A3599",
      { ro: "Tr\u0103s\u0103turi moldovene\u0219ti din scrierile lui Creang\u0103: ia>ie, -ea>-\xE9, ea>a dup\u0103 consoan\u0103 dur\u0103, palatalizarea labialelor \xEEnaintea lui i (p, uneori b, f\u2192h), lipsa palataliz\u0103rii lui v \u0219i m, ie>e dup\u0103 labial\u0103 (depalatalizare), d muiat \xEEn c\xE2teva cuvinte.", en: "Moldavian traits in Creang\u0103's writing: ia>ie, -ea>-\xE9, ea>a after a hard consonant, palatalization of labials before i (p, sometimes b, f\u2192h), no palatalization of v and m, ie>e after a labial (depalatalization), softened d in a few words." },
      { ro: "Humule\u0219ti, zona Neam\u021B (nordul graiurilor de tip moldovenesc), prin limba scris\u0103 a unui scriitor, pe baza edi\u021Biei Creang\u0103, Opere I\u2013II, Minerva, 1970.", en: "Humule\u0219ti, Neam\u021B area (northern Moldavian-type speech), through a writer's written language, based on the edition Creang\u0103, Opere I\u2013II, Minerva, 1970." },
      { ro: "Nu e o anchet\u0103 pe teren: autorul spune c\u0103 Creang\u0103 folose\u0219te formele regionale pentru culoare local\u0103, nu ca transcriitor.", en: "Not a field survey: the author says Creang\u0103 uses regional forms for local colour, not as a transcriber." }
    ),
    danciu09: S(
      "Danciu 2009 \u2013 sud-vest de Timi\u0219oara",
      "Mirela Zamilia Danciu, \u201EGraiurile rom\xE2ne\u0219ti de la sud-vest de Timi\u0219oara \u2013 privire general\u0103\u201D, Mirton / Amphora, 2009, pp. 20\u201331.",
      "https://www.diacronia.ro/indexing/details/A12911",
      { ro: "Fonetica, morfologia \u0219i lexicul graiurilor de la sud-vest de Timi\u0219oara: dentale africatizate (\u0107\xEDn\u0103r, l\xE1p\u0107e, ver\u0111e), dz (m\xE2nz, pr\xE2nz, buz\u0103, r\xE2nz\u0103, m\u0103z\u0103re), \u0144 etimologic, \xEEmblu/\xEEmplu/\xEEnflu/\xEEntru, durm, capt, v\u0103spar, scamn, prefixe de aspect (dog\u0103ta, z\u0103uita).", en: "Phonetics, morphology and lexis of the speech south-west of Timi\u0219oara: africatized dentals (\u0107\xEDn\u0103r, l\xE1p\u0107e, ver\u0111e), dz (m\xE2nz, pr\xE2nz, buz\u0103, r\xE2nz\u0103, m\u0103z\u0103re), etymological \u0144, \xEEmblu/\xEEmplu/\xEEnflu/\xEEntru, durm, capt, v\u0103spar, scamn, aspect prefixes (dog\u0103ta, z\u0103uita)." },
      { ro: "Satele de la sud-vest de Timi\u0219oara, la sud de Bega (graiuri nord-vest-b\u0103n\u0103\u021Bene); caut\u2192capt e notat ca specific zonei dintre Timi\u0219 \u0219i B\xE2rzava.", en: "Villages south-west of Timi\u0219oara, south of the Bega (north-west Banat speech); caut\u2192capt is noted as specific to the area between the Timi\u0219 and the B\xE2rzava." },
      { ro: "Autoarea noteaz\u0103 c\u0103 unele tr\u0103s\u0103turi nu apar la nord de Bega sau apar doar sporadic.", en: "The author notes that some features do not occur north of the Bega or only sporadically." }
    ),
    enban: S(
      "Wikipedia \u2013 Banat Romanian dialect",
      WP("Banat Romanian dialect"),
      "https://en.wikipedia.org/wiki/Banat_Romanian_dialect",
      { ro: "Tr\u0103s\u0103turi fonetice, morfologice \u0219i lexicale ale Banatului, cu transcriere IPA \u0219i un text de prob\u0103; citeaz\u0103 Ursan 2008, Caragiu Mario\u021Beanu 1975 (p. 172), Micle 2018, Chivu, B\u0103descu.", en: "Phonetic, morphological and lexical features of Banat, with IPA and a sample text; cites Ursan 2008, Caragiu Mario\u021Beanu 1975 (p. 172), Micle 2018, Chivu, B\u0103descu." },
      { ro: "Banatul rom\xE2nesc \u0219i s\xE2rbesc, sud-vestul Transilvaniei, Valea Timocului (par\u021Bial).", en: "Romanian and Serbian Banat, south-western Transylvania, the Timok Valley (partly)." },
      { ro: "Wikipedia, nu surs\u0103 primar\u0103. Pagina nume\u0219te subvariet\u0103\u021Bi (sud-vest, est, nord, nord-est), dar lista tr\u0103s\u0103turilor lor nu apare \xEEn text.", en: "Wikipedia, not a primary source. The page names sub-varieties (south-west, east, north, north-east), but the list of their features does not appear in the text." }
    ),
    encri: S(
      "Wikipedia \u2013 Cri\u0219ana dialect",
      WP("Cri\u0219ana dialect"),
      "https://en.wikipedia.org/wiki/Cri%C8%99ana_dialect",
      { ro: "Tr\u0103s\u0103turi cri\u0219ene: oa>o, vocale dup\u0103 labiale \u0219i dup\u0103 s/z/\u021B, o- ini\u021Bial, sl>skl, g>j, palatalizarea labialelor \u0219i dentalelor, \u021Aara Mo\u021Bilor, \u021Aara Oa\u0219ului; citeaz\u0103 Sp\xEEnu 2015, Caragiu Mario\u021Beanu 1975 (p. 159).", en: "Cri\u0219ana features: oa>o, vowels after labials and after s/z/\u021B, initial o-, sl>skl, g>j, palatalization of labials and dentals, \u021Aara Mo\u021Bilor, \u021Aara Oa\u0219ului; cites Sp\xEEnu 2015, Caragiu Mario\u021Beanu 1975 (p. 159)." },
      { ro: "Bihor, S\u0103laj, Satu Mare, NV Alba, V Cluj, N Arad, N Hunedoara, SV Maramure\u0219; subvariet\u0103\u021Bi: Bihor, \u021Aara Mo\u021Bilor, valea Some\u0219ului, \u021Aara Oa\u0219ului.", en: "Bihor, S\u0103laj, Satu Mare, NW Alba, W Cluj, N Arad, N Hunedoara, SW Maramure\u0219; sub-varieties: Bihor, \u021Aara Mo\u021Bilor, Some\u0219 valley, \u021Aara Oa\u0219ului." },
      { ro: "Pagina e marcat\u0103 \u201Eneeds additional citations\u201D. Spune c\u0103 palatalizarea labialelor nu e generalizat\u0103.", en: "The page is marked \u201Cneeds additional citations\u201D. It says the palatalization of labials is not generalized." }
    ),
    enbuk: S(
      "Wikipedia \u2013 Bukovinian Romanian dialect",
      WP("Bukovinian Romanian dialect"),
      "https://en.wikipedia.org/wiki/Bukovinian_Romanian_dialect",
      { ro: "F\u0103r\u0103 sec\u021Biune fonetic\u0103; descrie cinci subdialecte (dornean, c\xE2mpulungean, r\u0103d\u0103u\u021Bean, sud-est \u201Eafricatizant\u201D, estic), dup\u0103 Turcule\u021B 1977\u201378, cu satele fiec\u0103ruia.", en: "No phonetic section; describes five subdialects (Dorna, C\xE2mpulung, R\u0103d\u0103u\u021Bi, south-east \u201Cafricatizing\u201D, eastern), after Turcule\u021B 1977\u201378, with the villages of each." },
      { ro: "Bucovina istoric\u0103.", en: "Historical Bukovina." },
      { ro: "Tr\u0103s\u0103turile fonetice provin din Turcule\u021B, nu din aceast\u0103 pagin\u0103.", en: "The phonetic features come from Turcule\u021B, not from this page." }
    ),
    enmar: S(
      "Wikipedia \u2013 Maramure\u0219 dialect",
      WP("Maramure\u0219 dialect"),
      "https://en.wikipedia.org/wiki/Maramure%C8%99_dialect",
      { ro: "Tr\u0103s\u0103turi maramure\u0219ene (vocale, oa>o, ea final, labiale f>s, v>z, dz p\u0103strat), trei ramuri dup\u0103 tr\u0103s\u0103turi mai ales lexicale; citeaz\u0103 Caragiu Mario\u021Beanu 1975 (pp. 159, 171), Analele Univ. Timi\u0219oara 1969 (p. 274).", en: "Maramure\u0219 features (vowels, oa>o, final ea, labials f>s, v>z, dz kept), three branches by mostly lexical traits; cites Caragiu Mario\u021Beanu 1975 (pp. 159, 171), Analele Univ. Timi\u0219oara 1969 (p. 274)." },
      { ro: "NE Maramure\u0219, pe v\u0103ile Tisei, Vi\u0219eului, Marei, Cos\u0103ului; nord-vestul Zakarpatiei.", en: "NE Maramure\u0219, along the Tisza, Vi\u0219eu, Mara, Cos\u0103u valleys; north-west Zakarpattia." },
      { ro: "Spune c\u0103 distinctivitatea graiului e discutabil\u0103: pu\u021Bine tr\u0103s\u0103turi fonetice proprii.", en: "Says the distinctiveness of the speech is doubtful: few phonetic features of its own." }
    ),
    enmol: S(
      "Wikipedia \u2013 Moldavian dialect",
      WP("Moldavian dialect"),
      "https://en.wikipedia.org/wiki/Moldavian_dialect",
      { ro: "Tr\u0103s\u0103turi moldovene\u0219ti: africate, vocale dup\u0103 sibilante, labiale, f/v nord vs. sud, v>h \xEEn nord, ia>ie, -ea>\xE9, -\u0103>\xEE, -e>i; citeaz\u0103 Tratat de dialectologie rom\xE2neasc\u0103 1984, ALR 1938\u201342, Caragiu Mario\u021Beanu 1975 (p. 90), Pavel 2008, Antofi 2003.", en: "Moldavian features: affricates, vowels after sibilants, labials, f/v north vs. south, v>h in the north, ia>ie, -ea>\xE9, -\u0103>\xEE, -e>i; cites Tratat de dialectologie rom\xE2neasc\u0103 1984, ALR 1938\u201342, Caragiu Mario\u021Beanu 1975 (p. 90), Pavel 2008, Antofi 2003." },
      { ro: "Moldova istoric\u0103: Rom\xE2nia, Republica Moldova, Transnistria, p\u0103r\u021Bi din Ucraina; izoglose \xEEn NE Munteniei, N Dobrogei, NE Transilvaniei.", en: "Historical Moldavia: Romania, the Republic of Moldova, Transnistria, parts of Ukraine; isoglosses in NE Muntenia, N Dobruja, NE Transylvania." },
      { ro: "Spune c\u0103 grani\u021Ba Rom\xE2nia/Republica Moldova nu e grani\u021B\u0103 dialectal\u0103. Acela\u0219i text d\u0103 vezi\u2192vjez \u0219i lovesc\u2192lov\u0103sc.", en: "Says the Romania/Moldova border is not a dialect border. The same text gives vezi\u2192vjez and lovesc\u2192lov\u0103sc." }
    ),
    entra: S(
      "Wikipedia \u2013 Transylvanian varieties of Romanian",
      WP("Transylvanian varieties of Romanian"),
      "https://en.wikipedia.org/wiki/Transylvanian_varieties_of_Romanian",
      { ro: "\u0218apte tr\u0103s\u0103turi comune ale graiurilor transilv\u0103nene (vocale accentuate deschise, e/i/ea dup\u0103 s/z/\u021B, c\xE2ne/m\xE2ne/p\xE2ne, accent, a durmi) \u0219i structura de mozaic; citeaz\u0103 Weigand 1908, Petrovici 1941, Ursan 2008.", en: "Seven shared traits of Transylvanian speech (open stressed vowels, e/i/ea after s/z/\u021B, c\xE2ne/m\xE2ne/p\xE2ne, stress, a durmi) and the mosaic structure; cites Weigand 1908, Petrovici 1941, Ursan 2008." },
      { ro: "Transilvania istoric\u0103, cu excep\u021Bia marilor arii de margine.", en: "Historical Transylvania, except large edge areas." },
      { ro: "Nu listeaz\u0103 oa>o; aceasta vine din Rus 2020.", en: "Does not list oa>o; that comes from Rus 2020." }
    ),
    enwal: S(
      "Wikipedia \u2013 Wallachian dialect",
      WP("Wallachian dialect"),
      "https://en.wikipedia.org/wiki/Wallachian_dialect",
      { ro: "Fonetica munteneasc\u0103 \u0219i oltean\u0103: h-, de\u2192d\u0103 \xEEn prepozi\u021Bii \u0219i prefixe, labiale \xEEn NE/E Muntenia, Oltenia (e/i/ea, j \xEEnaintea lui k), sudul Olteniei; morfologie; citeaz\u0103 Avram & Sala 2000, Caragiu Mario\u021Beanu 1975 (p. 173), Ursan 2008, B\u0103descu.", en: "Muntenian and Oltenian phonetics: h-, de\u2192d\u0103 in prepositions and prefixes, labials in NE/E Muntenia, Oltenia (e/i/ea, j before k), southern Oltenia; morphology; cites Avram & Sala 2000, Caragiu Mario\u021Beanu 1975 (p. 173), Ursan 2008, B\u0103descu." },
      { ro: "Muntenia, Oltenia, nordul Dobrogei, sudul Transilvaniei (Bra\u0219ov, sudul Sibiului), parte din Valea Timocului.", en: "Muntenia, Oltenia, northern Dobruja, southern Transylvania (Bra\u0219ov, southern Sibiu), part of the Timok Valley." },
      { ro: "Pagina e marcat\u0103 \u201Eneeds additional citations\u201D. Spune c\u0103 subdiviziunile mai fine nu se pot sprijini pe tr\u0103s\u0103turi fonetice sistematice.", en: "The page is marked \u201Cneeds additional citations\u201D. It says finer divisions cannot rest on systematic phonetic features." }
    ),
    guia15: S(
      "Guia 2015 \u2013 dentalele",
      "Sorin Guia, studiu despre tratamentul dentalelor \xEEn dacorom\xE2na actual\u0103, Caietele Sextil Pu\u0219cariu II, 2015, pp. 190\u2013196.",
      "https://csp.inst-puscariu.ro/pdf/CSP%20II/CSP%20II%20%5BPages%20190%20-%20196%5D.pdf",
      { ro: "Palatalizarea \u0219i africatizarea lui t, d, n \xEEnaintea lui e, i, ea; confuzia lui k', g' cu t', d'; velarizarea; \u021Aara Oa\u0219ului ca singura arie f\u0103r\u0103 palatalizarea dentalelor (k', g' \u2192 \u021B', d' muiat; schimb\u2192\u0219timb).", en: "Palatalization and africatization of t, d, n before e, i, ea; confusion of k', g' with t', d'; velarization; \u021Aara Oa\u0219ului as the only area without dental palatalization (k', g' \u2192 softened t', d'; schimb\u2192\u0219timb)." },
      { ro: "Anchete dup\u0103 2010 \xEEn peste 60 de puncte: Alba (Vin\u021Bu, G\xE2rda de Sus, C\u0103p\xE2lna), Bac\u0103u, Bistri\u021Ba-N\u0103s\u0103ud (Ilva), Boto\u0219ani, Covasna, Gala\u021Bi, Hunedoara, Ia\u0219i, Neam\u021B, Satu Mare (Odoreu), Suceava (Vicovu, Straja, M\u0103n\u0103stirea Humorului, Crucea\u2026), Vaslui.", en: "Surveys after 2010 in more than 60 points: Alba (Vin\u021Bu, G\xE2rda de Sus, C\u0103p\xE2lna), Bac\u0103u, Bistri\u021Ba-N\u0103s\u0103ud (Ilva), Boto\u0219ani, Covasna, Gala\u021Bi, Hunedoara, Ia\u0219i, Neam\u021B, Satu Mare (Odoreu), Suceava (Vicovu, Straja, M\u0103n\u0103stirea Humorului, Crucea\u2026), Vaslui." },
      { ro: "Descrie st\u0103ri de azi; unele tr\u0103s\u0103turi sunt mai slabe dec\xE2t \xEEn anchetele vechi.", en: "Describes present-day states; some features are weaker than in the old surveys." }
    ),
    guia20: S(
      "Guia 2020 \u2013 labialele",
      "Sorin Guia, studiu despre palatalizarea consoanelor labiale \xEEn dacorom\xE2na dialectal\u0103, \xEEn Paths of Communication in Postmodernity, 2020, pp. 329\u2013339.",
      "https://www.diacronia.ro/indexing/details/A32452",
      { ro: "Stadiile palataliz\u0103rii labialelor p, b, m, f, v \xEEn fiecare subdialect: Moldova (stadiu final, linia Bac\u0103u\u2013Vaslui\u2013Hu\u0219i pentru f/v), stadii intermediare \xEEn Bucovina \u0219i NE Transilvaniei, Cri\u0219ana (doar nordul), Maramure\u0219; copil/lupi cu p p\u0103strat.", en: "The stages of labial palatalization p, b, m, f, v in each subdialect: Moldavia (final stage, Bac\u0103u\u2013Vaslui\u2013Hu\u0219i line for f/v), intermediate stages in Bukovina and NE Transylvania, Cri\u0219ana (north only), Maramure\u0219; copil/lupi with p kept." },
      { ro: "Texte din anchete pentru atlase \u0219i corpusul Seminarului de dialectologie din Ia\u0219i (Guia 2014), \xEEn jude\u021Bele BC, BT, GL, IS, NT, SV, VS, VN, BN, SM, AB, CV, HD.", en: "Texts from atlas surveys and the corpus of the Ia\u0219i Dialectology Seminar (Guia 2014), in the counties BC, BT, GL, IS, NT, SV, VS, VN, BN, SM, AB, CV, HD." },
      { ro: "Labialele r\u0103m\xE2n nealterate \xEEn Muntenia (centru, vest), Banat, jum\u0103tatea de sud a Cri\u0219anei \u0219i Hunedoara.", en: "Labials stay unaltered in Muntenia (centre, west), Banat, the southern half of Cri\u0219ana and Hunedoara." }
    ),
    oeaw: S(
      "Sorescu-Marinkovi\u0107 \u2013 Timok (OEAW)",
      "Annemarie Sorescu-Marinkovi\u0107, \u201ETimok Romanian / Vlach\u201D, Austrian Academy of Sciences, Institute for Habsburg and Balkan Studies (VLACH).",
      "https://www.oeaw.ac.at/vlach/collections/romanian-varieties/timok-romanian-vlach",
      { ro: "Dou\u0103 grupuri: ungureni la vest (grai apropiat de cel b\u0103n\u0103\u021Bean) \u0219i \u021B\u0103rani la est (grai asem\u0103n\u0103tor cu vestul Olteniei), \xEEn aproximativ 170 de localit\u0103\u021Bi.", en: "Two groups: Ungureni in the west (speech close to Banat) and \u021A\u0103rani in the east (speech similar to western Oltenia), in about 170 settlements." },
      { ro: "Estul Serbiei: Morava, Crna Reka, Dun\u0103re, Timoc, Klju\u010D, Krajina Negotinului.", en: "Eastern Serbia: Morava, Crna Reka, Danube, Timok, Klju\u010D, Negotin Krajina." },
      { ro: "Nu d\u0103 reguli fonetice; de aceea valea Timocului nu are pagini \xEEn aplica\u021Bie.", en: "Gives no phonetic rules; that is why the Timok Valley has no pages in the app." }
    ),
    petrovici35: S(
      "Petrovici \u2013 luvat (Dacoromania)",
      "Emil Petrovici, not\u0103 \xEEn \u201EArticole m\u0103runte\u201D, Dacoromania VIII (1934\u201335).",
      "https://www.diacronia.ro/indexing/details/A14833",
      { ro: "Formele luvat, nuv\u0103r, l\u0103vd\u0103, capt \xEEn loc de luat, nour, laud\u0103, caut, ca \u201Efalse regresii\u201D care evit\u0103 hiatul, \xEEn sud-vestul Banatului.", en: "The forms luvat, nuv\u0103r, l\u0103vd\u0103, capt instead of luat, nour, laud\u0103, caut, as \u201Cfalse regressions\u201D avoiding hiatus, in south-west Banat." },
      { ro: "Sud-vestul Banatului (valea Alm\u0103jului, Cara\u0219ova).", en: "South-west Banat (Alm\u0103j valley, Cara\u0219ova)." },
      { ro: "Not\u0103 scurt\u0103; explica\u021Bia (slavi romaniza\u021Bi) e a autorului.", en: "A short note; the explanation (Romanized Slavs) is the author's." }
    ),
    rus20: S(
      "Rus 2020 \u2013 Valea B\xE2rg\u0103ului",
      "Maria Cornelia Rus, \u201EMethodological aspects used to realize a dialectal survey in B\xE2rg\u0103u area, Bistri\u021Ba-N\u0103s\u0103ud\u201D, \xEEn Paths of Communication in Postmodernity, 2020, pp. 253\u2013259.",
      "https://www.diacronia.ro/indexing/details/A32442",
      { ro: "Prezint\u0103, dup\u0103 Rusu (Tratat 1984, p. 358) \u0219i Guia (2014), tr\u0103s\u0103turile nord-estului Transilvaniei: oa>o \xEEn tot graiul ardelenesc, labiale \xEEn stadii pt/bd \u0219i p\u0109/pk'/b\u011D/bg'/m\u0144, f \u0219i v>\u0219, z.", en: "Presents, after Rusu (Tratat 1984, p. 358) and Guia (2014), the traits of north-east Transylvania: oa>o across Transylvanian speech, labials in stages pt/bd and p\u0109/pk'/b\u011D/bg'/m\u0144, f and v>\u0219, z." },
      { ro: "Valea B\xE2rg\u0103ului, Bistri\u021Ba-N\u0103s\u0103ud: 17 puncte (5 comune, 12 sate), chestionar de 186 de \xEEntreb\u0103ri; 55 de vorbitori intervieva\u021Bi p\xE2n\u0103 atunci.", en: "B\xE2rg\u0103u valley, Bistri\u021Ba-N\u0103s\u0103ud: 17 points (5 communes, 12 villages), a questionnaire of 186 questions; 55 speakers interviewed so far." },
      { ro: "Articol de metodologie: tr\u0103s\u0103turile sunt preluate din literatur\u0103, nu sunt rezultate noi.", en: "A methodology paper: the features are taken from the literature, not new results." }
    ),
    spinu09: S(
      "Sp\xEEnu 2009 \u2013 nord-estul Rep. Moldova",
      "Stela Sp\xEEnu, \u201EGraiurile moldovene\u0219ti din nord-estul Republicii Moldova \xEEn cadrul dialectului dacorom\xE2n\u201D, Revist\u0103 de lingvistic\u0103 \u0219i \u0219tiin\u021B\u0103 literar\u0103, 3\u20134/2009, pp. 116\u2013120.",
      "https://www.diacronia.ro/indexing/details/A25956",
      { ro: "Clasificarea lui Udler (grupuri central, NV, NE, SV, bucovinean); tr\u0103s\u0103turi fonetice ale NE (\u0103\u2192\xEE final, e/i dup\u0103 sibilante, ea>a, m>\u0144, ia>ie, \xEE etimologic), tr\u0103s\u0103turi comune cu Maramure\u0219ul (f, v>\u0219, z; ce/ci>\u0219\u0301; ch, gh africatizate; ou\u0103>oau\xEE; guler>guliar) \u0219i \u201Ecu excep\u021Bia graiurilor de sud-vest\u201D.", en: "Udler's classification (central, NW, NE, SW, Bukovinian groups); phonetic features of the NE (final \u0103\u2192\xEE, e/i after sibilants, ea>a, m>\u0144, ia>ie, etymological \xEE), features shared with Maramure\u0219 (f, v>\u0219, z; ce/ci>\u0219\u0301; ch, gh africatized; ou\u0103>oau\xEE; guler>guliar) and \u201Cexcept the south-western speech\u201D." },
      { ro: "Nord-estul Republicii Moldova, pe linia Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari, \u0219i raionul Kotovsk (reg. Odesa); exemple din Hru\u0219ca, Mihailovca (r-nul R\xEEbni\u021Ba).", en: "North-eastern Republic of Moldova, along the Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari line, and Kotovsk district (Odesa region); examples from Hru\u0219ca and Mihailovca (R\xEEbni\u021Ba district)." },
      { ro: "Transcrierea fonetic\u0103 din PDF e greu de citit; unele valori (ou\u0103\u2192oau\xEE, copcil, cupcior) sunt citiri apropiate. Concluzia: nu e o arie dialectal\u0103 unitar\u0103.", en: "The phonetic transcription in the PDF is hard to read; some values (ou\u0103\u2192oau\xEE, copcil, cupcior) are close readings. Conclusion: not a unitary dialect area." }
    ),
    spinu18: S(
      "Sp\xEEnu 2018 \u2013 Republica Moldova",
      "Stela Sp\xEEnu, \u201ETendin\u021Be fonetice \u0219i lexicale \xEEn graiurile rom\xE2ne\u0219ti din Republica Moldova\u201D, Fonetic\u0103 \u0219i dialectologie, XXXVII, 2018, pp. 133\u2013140.",
      "https://www.diacronia.ro/indexing/details/A29393",
      { ro: "Compar\u0103 Atlasul lingvistic moldovenesc (1957\u201365) cu anchete din 2015\u201316: a dup\u0103 \u0219/j\u2192\u0103, ea>a, e/i dup\u0103 sibilante, labiale \xEEn stadiul final, \u0219/j din ce/ci/ge/gi, \u011Dos/\u011Doc, fecior/femeie, t\u0103\u021B, \u0103\u2192a \xEEn nord, forme ale v\xE2rstnicilor, lexic.", en: "Compares the Moldavian Linguistic Atlas (1957\u201365) with surveys from 2015\u201316: a after \u0219/j\u2192\u0103, ea>a, e/i after sibilants, labials in the final stage, \u0219/j from ce/ci/ge/gi, \u011Dos/\u011Doc, fecior/femeie, t\u0103\u021B, \u0103\u2192a in the north, forms of older speakers, lexis." },
      { ro: "34 de localit\u0103\u021Bi din re\u021Beaua atlasului din Republica Moldova (rezumatul \xEEn englez\u0103 spune 40), 3 informatori pe localitate, v\xE2rste diferite; iunie\u2013august 2015 \u0219i iunie\u2013iulie 2016.", en: "34 localities of the atlas network in the Republic of Moldova (the English abstract says 40), 3 informants per locality of different ages; June\u2013August 2015 and June\u2013July 2016." },
      { ro: "Nu spune care localit\u0103\u021Bi sunt nordice sau sudice; subliniaz\u0103 c\u0103 tinerii folosesc forma literar\u0103 \u0219i c\u0103 multe tr\u0103s\u0103turi sunt doar la v\xE2rstnici.", en: "Does not say which localities are northern or southern; stresses that young speakers use the standard form and that many features survive only among the elderly." }
    ),
    turc77: S(
      "Turcule\u021B 1977\u201378 \u2013 Bucovina",
      "Adrian Turcule\u021B, \u201EStructura dialectal\u0103 a graiurilor rom\xE2ne\u0219ti din Bucovina\u201D, Anuar de lingvistic\u0103 \u0219i istorie literar\u0103, 26 (1977\u201378), pp. 97\u2013120.",
      "https://www.diacronia.ro/indexing/details/A1448",
      { ro: "Patru arii (dornean, c\xE2mpulungean, r\u0103d\u0103u\u021Bean, sud-est africatizant), cu satele \u0219i tr\u0103s\u0103turile lor, istoria migra\u021Biilor ardelene\u0219ti din sec. XVIII, lista punctelor Noului atlas lingvistic rom\xE2n pe regiuni (Moldova \u0219i Bucovina).", en: "Four areas (Dorna, C\xE2mpulung, R\u0103d\u0103u\u021Bi, south-east africatizing), with their villages and features, the history of the 18th-century Transylvanian migrations, the list of points of the Noul atlas lingvistic rom\xE2n pe regiuni (Moldova and Bukovina)." },
      { ro: "Bucovina \u0219i vecin\u0103tatea (puncte 461\u2013565: Poiana Stampei, Co\u0219na, C\xE2rlibaba, Straja, C\xE2mpulung, Pojor\xE2ta, R\u0103d\u0103u\u021B, Gura Humorului, Suceava, T\u0103t\u0103ru\u0219i \u0219.a.), comparate cu Weigand (1909) \u0219i ALR.", en: "Bukovina and its surroundings (points 461\u2013565: Poiana Stampei, Co\u0219na, C\xE2rlibaba, Straja, C\xE2mpulung, Pojor\xE2ta, R\u0103d\u0103u\u021Bi, Gura Humorului, Suceava, T\u0103t\u0103ru\u0219i, etc.), compared with Weigand (1909) and ALR." },
      { ro: "PDF-ul are erori de recunoa\u0219tere a textului (OCR), mai ales la simbolurile fonetice. \u201EAfricatizant\u201D \xEEnseamn\u0103 chi/ghi \u0219i t', d' \u2192 c, g; ce/ci primare devin \u0219/j.", en: "The PDF has text-recognition (OCR) errors, especially in phonetic symbols. \u201CAfricatizing\u201D means chi/ghi and t', d' \u2192 c, g; primary ce/ci become \u0219/j." }
    )
  };

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
      E("literature", "Ion Creang\u0103, \u201EAmintiri din copil\u0103rie\u201D (zona Neam\u021B). Forme dialectale documentate de C\u0103prioar\u0103: chilos, chilit, chiu\u0103, s\u0103 chiroteasc\u0103, pochii, hi (f\u2192h), givorni\u021B\u0103, ghiavole, ghib\u0103cia, m\u0103 spariu, o m\xE2niet, \xEEnfuriet, ved\xE9, vr\xE9. Aten\u021Bie: e limb\u0103 literar\u0103, nu transcriere de teren.", "Ion Creang\u0103, \u201CAmintiri din copil\u0103rie\u201D (Neam\u021B area). Dialect forms documented by C\u0103prioar\u0103: chilos, chilit, chiu\u0103, s\u0103 chiroteasc\u0103, pochii, hi (f\u2192h), givorni\u021B\u0103, ghiavole, ghib\u0103cia, m\u0103 spariu, o m\xE2niet, \xEEnfuriet, ved\xE9, vr\xE9. Note: literary language, not a field transcription.", "C\u0103prioar\u0103 2002 (diacronia A3599); Iordan, prefa\u021B\u0103 la Creang\u0103, Opere, Minerva, 1970", { only: ["moldovenesc_neamt"] }),
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
    ]
  };

  // js/research.js
  var f = (ro, en) => ({ ro, en });
  var sec = (h, ...i) => ({ h, i });
  var RESEARCH = {
    muntenia: { title: f("Muntenia \u0219i Oltenia", "Muntenia and Oltenia"), sections: [
      sec(
        f("Zon\u0103", "Area"),
        f("Muntenia: Arge\u0219, Br\u0103ila (\xEEn special jum\u0103tatea de sud \u0219i centrul; nordul are influen\u021B\u0103 moldoveneasc\u0103), Buz\u0103u (la fel), C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Ilfov \u0219i Bucure\u0219ti, Prahova, Teleorman. Oltenia: Dolj, Gorj (est), Mehedin\u021Bi (mai ales est), Olt, V\xE2lcea. Nordul Dobrogei (Constan\u021Ba, sudul Tulcei) \u0219i sudul Transilvaniei (Bra\u0219ov, sudul Sibiului) sunt tot arii muntene\u0219ti. [Wikipedia \u2013 Wallachian]", "Muntenia: Arge\u0219, Br\u0103ila (mainly the south and centre; the north has Moldavian influence), Buz\u0103u (the same), C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Ilfov and Bucharest, Prahova, Teleorman. Oltenia: Dolj, Gorj (east), Mehedin\u021Bi (mostly east), Olt, V\xE2lcea. Northern Dobruja (Constan\u021Ba, southern Tulcea) and southern Transylvania (Bra\u0219ov, southern Sibiu) are also Wallachian areas. [Wikipedia \u2013 Wallachian]"),
        f("Cele mai tipice tr\u0103s\u0103turi: Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt, Teleorman.", "The most typical features: Arge\u0219, C\u0103l\u0103ra\u0219i, D\xE2mbovi\u021Ba, Giurgiu, Ialomi\u021Ba, Olt, Teleorman.")
      ),
      sec(
        f("De ce nu sunt pagini separate", "Why there are no separate pages"),
        f("Muntenia central\u0103 vs. sudic\u0103: sursa nu d\u0103 nicio deosebire fonetic\u0103; spune c\u0103 subdiviziunile mai fine nu se mai pot sprijini pe tr\u0103s\u0103turi fonetice sistematice, ci pe cele morfologice, sintactice \u0219i lexicale.", "Central vs. southern Muntenia: the source gives no phonetic difference; it says finer divisions can no longer rest on systematic phonetic features, but on morphological, syntactic and lexical ones."),
        f("Dobrogea: varietate de tranzi\u021Bie \xEEntre muntean \u0219i moldovean, \u201E\u0219i mai pu\u021Bin distinct\u0103\u201D dec\xE2t Oltenia; f\u0103r\u0103 tr\u0103s\u0103turi fonetice listate.", "Dobruja: a transition variety between Wallachian and Moldavian, \u201Ceven less distinct\u201D than Oltenia; no phonetic features listed."),
        f("Oltenia nord/centru/vest: sursa d\u0103 o singur\u0103 descriere a Olteniei, cu o deosebire pentru sud (f, v \xEEnaintea unei vocale din fa\u021B\u0103).", "Oltenia north/centre/west: the source gives a single description of Oltenia, with one difference for the south (f, v before a front vowel)."),
        f("Zone de tranzi\u021Bie numite f\u0103r\u0103 tr\u0103s\u0103turi: nord-estul (influen\u021B\u0103 moldoveneasc\u0103), nordul (spre Transilvania central\u0103 \u0219i sudic\u0103), nord-vestul (Banat \u0219i Ha\u021Beg), Teleorman \u0219i Arge\u0219 (influen\u021B\u0103 olteneasc\u0103).", "Transition zones named without features: the north-east (Moldavian influence), the north (towards central and southern Transylvania), the north-west (Banat and Ha\u021Beg), Teleorman and Arge\u0219 (Oltenian influence).")
      ),
      sec(
        f("Tr\u0103s\u0103turi fonetice descrise, dar neredate", "Phonetic features described but not rendered"),
        f("[t\u0283, d\u0292] se p\u0103streaz\u0103; contrastul d\u0292/\u0292; dup\u0103 s, z, \u021B vocalele e, i, ea se p\u0103streaz\u0103 \xEEn afara Olteniei (semn, singur, sear\u0103) \u2014 identic cu rom\xE2na standard; ea>e \xEEn unele contexte (lege, mese); u final surd (om\u02B7, pom\u02B7).", "[t\u0283, d\u0292] are preserved; the d\u0292/\u0292 contrast; after s, z, \u021B the vowels e, i, ea are preserved outside Oltenia (semn, singur, sear\u0103) \u2014 same as standard Romanian; ea>e in some contexts (lege, mese); devoiced final u (om\u02B7, pom\u02B7).")
      ),
      sec(
        f("Despre regula prepozi\u021Biilor", "About the preposition rule"),
        f("Sursa spune: \xEEn Muntenia, dup\u0103 d \u0219i p, e\u2192\u0103 \u0219i i\u2192\xEE \u201E\xEEn prepozi\u021Bii \u0219i prefixe\u201D, cu exemplele de, dec\xE2t, destupat, despart, deschid, dintre, pe. Aplica\u021Bia aplic\u0103 regula la toate prepozi\u021Biile care \xEEncep cu de-, di-, pe- (inclusiv pentru\u2192p\u0103ntru, peste\u2192p\u0103ste, din\u2192d\xEEn) \u0219i la cuvintele-exemplu cu prefix; alte cuvinte cu prefix nu sunt numite \xEEn surs\u0103.", "The source says: in Muntenia, after d and p, e\u2192\u0103 and i\u2192\xEE \u201Cin prepositions and prefixes\u201D, with the examples de, dec\xE2t, destupat, despart, deschid, dintre, pe. The app applies the rule to every preposition starting with de-, di-, pe- (including pentru\u2192p\u0103ntru, peste\u2192p\u0103ste, din\u2192d\xEEn) and to the example words with a prefix; other words with a prefix are not named in the source.")
      ),
      sec(
        f("Morfologie \u0219i lexic (descrise, neredate)", "Morphology and lexis (described, not rendered)"),
        f("Articol posesiv variabil al, a, ai, ale; subjunctive s\u0103 stea, s\u0103 dea, s\u0103 bea, s\u0103 ia, s\u0103 vrea; imperative adu, vino; vocativ \xEEn -o (Leano, Anico); alternan\u021Ba a\u2192\u0103 la plural; schimb \xEEntre conjug\u0103rile a II-a \u0219i a III-a (a cade, a place, a vede; a cusea, a \u021Besea); imperfect 3pl \xEEn -a \xEEn Muntenia (ei lucra) \u0219i -au \xEEn Oltenia; mai-mult-ca-perfect f\u0103r\u0103 -r\u0103- (c\xE2ntasem, c\xE2ntase); \xEEn Muntenia -r\u0103 pe perfectul compus (am c\xE2ntat\u0103r\u0103) \u0219i forme iotacizate (eu cei, eu spui, eu \u021B\xE2u, eu viu); \xEEn Oltenia perfect simplu la toate persoanele, plural feminin \xEEn -i (cas\u0103\u2013c\u0103\u0219i), \u0103\u0219tea invariabil, f\u0103r\u0103 -esc- la conj. IV (amoarte), dec\xE2t f\u0103r\u0103 nega\u021Bie, sufixul -ete (brabete, dovlete), -\u0219a (aici\u0219a).", "Variable possessive article al, a, ai, ale; subjunctives s\u0103 stea, s\u0103 dea, s\u0103 bea, s\u0103 ia, s\u0103 vrea; imperatives adu, vino; vocative in -o (Leano, Anico); a\u2192\u0103 alternation in the plural; swap between the 2nd and 3rd conjugations (a cade, a place, a vede; a cusea, a \u021Besea); 3pl imperfect in -a in Muntenia (ei lucra) and -au in Oltenia; pluperfect without -r\u0103- (c\xE2ntasem, c\xE2ntase); in Muntenia -r\u0103 on the compound perfect (am c\xE2ntat\u0103r\u0103) and iotacized forms (eu cei, eu spui, eu \u021B\xE2u, eu viu); in Oltenia simple perfect in all persons, feminine plural in -i (cas\u0103\u2013c\u0103\u0219i), invariable \u0103\u0219tea, no -esc- in conj. IV (amoarte), dec\xE2t without negation, the suffix -ete (brabete, dovlete), -\u0219a (aici\u0219a)."),
        f("Cuvinte: drug\u0103, clups\u0103, tron, sacsie, dul; pepene (Muntenia) vs. lubeni\u021B\u0103 (Oltenia).", "Words: drug\u0103, clups\u0103, tron, sacsie, dul; pepene (Muntenia) vs. lubeni\u021B\u0103 (Oltenia).")
      )
    ] },
    moldova: { title: f("Moldova (Rom\xE2nia)", "Moldavia (Romania)"), sections: [
      sec(
        f("Zon\u0103", "Area"),
        f("Jude\u021Bele Bac\u0103u, Boto\u0219ani, Gala\u021Bi, Ia\u0219i, Neam\u021B, Suceava, Vaslui, Vrancea; izoglose \xEEn nordul Buz\u0103ului, Br\u0103ilei \u0219i Tulcei \u0219i \xEEn NE Transilvaniei. Fonetica \u0219i morfologia sunt identice peste Prut; deosebiri mai mari sunt \xEEntre nordul \u0219i sudul Republicii Moldova. [Wikipedia \u2013 Moldavian]", "The counties Bac\u0103u, Boto\u0219ani, Gala\u021Bi, Ia\u0219i, Neam\u021B, Suceava, Vaslui, Vrancea; isoglosses in northern Buz\u0103u, Br\u0103ila and Tulcea and in NE Transylvania. Phonetics and morphology are identical across the Prut; larger differences lie between the north and south of the Republic of Moldova. [Wikipedia \u2013 Moldavian]")
      ),
      sec(
        f("Linia nord\u2013sud", "The north\u2013south line"),
        f("Pentru f, v, Guia (2020) pune grani\u021Ba pe linia Bac\u0103u\u2013Vaslui\u2013Hu\u0219i: la sud f\u2192h, v\u2192\u0125; la nord f\u2192\u0219, v\u2192z (aici redat j, pentru c\u0103 z-ul transcris e palatal). Spune \u0219i c\u0103 \xEEn nord-vest (Bucovina) predomin\u0103 formele cu v nealterat.", "For f, v, Guia (2020) puts the border on the Bac\u0103u\u2013Vaslui\u2013Hu\u0219i line: south of it f\u2192h, v\u2192\u0125; north of it f\u2192\u0219, v\u2192z (rendered here as j, because the transcribed z is palatal). It also says that in the north-west (Bukovina) forms with unaltered v predominate."),
        f("Formele cu f, v nealterat (fiert, fierbi) coexist\u0103 cu cele palatalizate, chiar la vorbitori v\xE2rstnici.", "Forms with unaltered f, v (fiert, fierbi) coexist with the palatalized ones, even among older speakers.")
      ),
      sec(
        f("Conflicte \xEEntre surse", "Conflicts between sources"),
        f("Wikipedia d\u0103 copil\u2192cochil; Guia (2020) \u0219i Sp\xEEnu (2009) spun c\u0103 p se p\u0103streaz\u0103 dup\u0103 vocal\u0103 \xEEn copil/lupi (copchil, lupchi), \u201E\xEEn aproape toate graiurile moldovene\u0219ti\u201D. Aplica\u021Bia urmeaz\u0103 Guia \u0219i Sp\xEEnu.", "Wikipedia gives copil\u2192cochil; Guia (2020) and Sp\xEEnu (2009) say p is kept after a vowel in copil/lupi (copchil, lupchi), \u201Cin almost all Moldavian speeches\u201D. The app follows Guia and Sp\xEEnu."),
        f("m\u2192n: Wikipedia \u0219i Sp\xEEnu \xEEl dau; C\u0103prioar\u0103 spune c\u0103 m nu se muiaz\u0103 la Creang\u0103; Guia noteaz\u0103 unele puncte din Moldova cu m nealterat (Lozna, Talpa, G\xE2din\u021Bi, Cepleni\u0163a, Straja, R\u0103d\u0103\u0219eni, Micle\u015Fti \u0219.a.).", "m\u2192n: Wikipedia and Sp\xEEnu give it; C\u0103prioar\u0103 says m is not softened in Creang\u0103; Guia notes some Moldavian points with unaltered m (Lozna, Talpa, G\xE2din\u021Bi, Cepleni\u0163a, Straja, R\u0103d\u0103\u0219eni, Micle\u015Fti, etc.)."),
        f("dz: Wikipedia d\u0103 zic\u2192dz\xEEc pentru moldoveneasc\u0103; Sp\xEEnu 2018 spune c\u0103 dz nu se p\u0103streaz\u0103 \xEEn Republica Moldova. Aplicat doar pe paginile din Rom\xE2nia.", "dz: Wikipedia gives zic\u2192dz\xEEc for Moldavian; Sp\xEEnu 2018 says dz is not kept in the Republic of Moldova. Applied only on the Romanian pages."),
        f("Wikipedia d\u0103 e\u2192\u0103 dup\u0103 v \xEEn lovesc\u2192lov\u0103sc, dar \xEEn acela\u0219i text vezi\u2192vjez: de aceea doar cuvintele din surs\u0103.", "Wikipedia gives e\u2192\u0103 after v in lovesc\u2192lov\u0103sc, but in the same text vezi\u2192vjez: hence only the source's words."),
        f("ia\u2192ie: Sp\xEEnu (2009) \xEEl d\u0103 la \xEEnceput de cuv\xE2nt \u0219i dup\u0103 vocal\u0103 (b\u0103iet, \xEEncuiet); Wikipedia d\u0103 exemplele b\u0103iat, \xEEncuiat. Aplica\u021Bia urmeaz\u0103 formularea lui Sp\xEEnu, deci \u0219i iarb\u0103\u2192ierb\u0103.", "ia\u2192ie: Sp\xEEnu (2009) gives it at the start of a word and after a vowel (b\u0103iet, \xEEncuiet); Wikipedia gives the examples b\u0103iat, \xEEncuiat. The app follows Sp\xEEnu's wording, so iarb\u0103\u2192ierb\u0103 too."),
        f("-ea final: Wikipedia d\u0103 \xE9 (avea\u2192av\xE9); Sp\xEEnu (2009) d\u0103 monoftongare cu a sau \u0103 (m\u0103sea\u2192m\u0103sa, curea\u2192cur\u0103, rea\u2192r\u0103) pentru nord-estul Republicii Moldova.", "final -ea: Wikipedia gives \xE9 (avea\u2192av\xE9); Sp\xEEnu (2009) gives monophthongization with a or \u0103 (m\u0103sea\u2192m\u0103sa, curea\u2192cur\u0103, rea\u2192r\u0103) for the north-east of the Republic of Moldova.")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("Accentul \u0219i vocalele neaccentuate: o\u2192u (acoperit\u2192acupirit), e medial neaccentuat\u2192i \xEEn toate cuvintele (doar fecior, femeie sunt redate), \u0103 \xEEnaintea accentului \u2192a \xEEn nord (doar c\xE2teva cuvinte), labializarea \xEEnaintea lui o (b\u02B7ol\u02B2, z\u02B7or\u02B2), i \u0219i u final asilabice (p\u0103durar\u02B2), plural/persoana a 2-a cu i disp\u0103rut.", "Stress and unstressed vowels: o\u2192u (acoperit\u2192acupirit), unstressed medial e\u2192i in all words (only fecior, femeie are rendered), \u0103 before the stress \u2192a in the north (only a few words), labialization before o (b\u02B7ol\u02B2, z\u02B7or\u02B2), asyllabic final i and u (p\u0103durar\u02B2).")
      ),
      sec(
        f("Neam\u021B (Creang\u0103)", "Neam\u021B (Creang\u0103)"),
        f("C\u0103prioar\u0103: Humule\u0219ti apar\u021Bine \xEEn mare parte nordului graiurilor de tip moldovenesc, dar e la \xEEncruci\u0219area cu sudul Moldovei \u0219i cu Transilvania; mama lui Creang\u0103 era din Pipirig (punctul 551 din ALR). Forme: pochii, chilos, chilit, s\u0103 chiroteasc\u0103, chiu\u0103 (p+i), a hi (f+i), fert, mercuri, petre, pept, perd (ie\u2192e), ghiavole, ghib\u0103cia (d muiat), givorni\u021B\u0103, m\u0103 spariu, balan, jaratic, macar, ved\xE9, vr\xE9, \xEEnfuriet, m\xE2niet, sar\u0103, bu\u0219asc\u0103.", "C\u0103prioar\u0103: Humule\u0219ti belongs mostly to the north of Moldavian-type speech, but lies at the crossing with southern Moldavia and Transylvania; Creang\u0103's mother came from Pipirig (point 551 in ALR). Forms: pochii, chilos, chilit, s\u0103 chiroteasc\u0103, chiu\u0103 (p+i), a hi (f+i), fert, mercuri, petre, pept, perd (ie\u2192e), ghiavole, ghib\u0103cia (softened d), givorni\u021B\u0103, m\u0103 spariu, balan, jaratic, macar, ved\xE9, vr\xE9, \xEEnfuriet, m\xE2niet, sar\u0103, bu\u0219asc\u0103.")
      ),
      sec(
        f("Morfologie \u0219i lexic (descrise, neredate)", "Morphology and lexis (described, not rendered)"),
        f("Genitiv-dativ \xEEn -c\u0103i (maic\u0103i, puic\u0103i); tatul; a meu invariabil; imperfect 3pl era/erau; perfect simplu rar; o fost la singular \u0219i plural; \xEEn nord mai-mult-ca-perfect analitic (m-am fost dus, am fost venit); s\u0103 deie, steie, beie, ieie, vreie; \xE1d\u0103, vin\u0103; genitiv-dativ analitic (d\u0103 m\xE2ncare la pisic\u0103); d\xE2nsul; aista, ajasta, a\u0219ela; om\u0103t, agud\u0103, poame, perje, ciubot\u0103, cori.", "Genitive-dative in -c\u0103i (maic\u0103i, puic\u0103i); tatul; invariable a meu; 3pl imperfect era/erau; simple perfect rare; o fost in singular and plural; in the north analytic pluperfect (m-am fost dus, am fost venit); s\u0103 deie, steie, beie, ieie, vreie; \xE1d\u0103, vin\u0103; analytic genitive-dative (d\u0103 m\xE2ncare la pisic\u0103); d\xE2nsul; aista, ajasta, a\u0219ela; om\u0103t, agud\u0103, poame, perje, ciubot\u0103, cori.")
      )
    ] },
    basarabia: { title: f("Basarabia (Republica Moldova)", "Bessarabia (Republic of Moldova)"), sections: [
      sec(
        f("Cum e \xEEmp\u0103r\u021Bit\u0103", "How it is divided"),
        f("Sp\xEEnu (2009) reia clasificarea lui Udler (ALM, 1968): grupul central (cea mai mare parte), nord-vest (inclusiv nordul Bucovinei, Her\u021Ba, Hotin), nord-est (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari \u0219i raionul Kotovsk), sud-vest (de la Cahul la Ismail, Chilia, V\xE2lcov) \u0219i bucovinean. Cea mai v\u0103dit\u0103 e opozi\u021Bia dintre centru \u0219i sud-vest. Co\u0219eriu consider\u0103 c\u0103 nordul \u0219i centrul \u021Bin de subdialectul moldovenesc, sudul de graiul muntean.", "Sp\xEEnu (2009) reuses Udler's classification (ALM, 1968): the central group (most of the territory), north-west (including northern Bukovina, Her\u021Ba, Hotin), north-east (Camenca\u2013R\xEEbni\u021Ba\u2013Dub\u0103sari and Kotovsk district), south-west (from Cahul to Ismail, Kilia, Vylkove) and Bukovinian. The clearest opposition is between the centre and the south-west. Co\u0219eriu considers that the north and centre belong to the Moldavian subdialect, the south to Wallachian."),
        f("Udler e criticat ca tenden\u021Bios; Turcule\u021B: a-l trata ca entitate separat\u0103 contravine geografiei lingvistice.", "Udler is criticized as tendentious; Turcule\u021B: treating it as a separate entity contradicts linguistic geography.")
      ),
      sec(
        f("Centru \u0219i ancheta din 2015\u201316", "Centre and the 2015\u201316 survey"),
        f("34 de localit\u0103\u021Bi din re\u021Beaua atlasului, 3 informatori pe localitate de v\xE2rste diferite. Sp\xEEnu marcheaz\u0103 v\xE2rsta fiec\u0103rei tr\u0103s\u0103turi (a treia v\xE2rst\u0103 = cei mai \xEEn v\xE2rst\u0103) \u0219i spune c\u0103 tinerii folosesc tot mai mult forma literar\u0103 (bumbi, piele, mire, fin, vierme; cinci, arici, ciolan).", "34 localities of the atlas network, 3 informants per locality of different ages. Sp\xEEnu marks the age of each feature (third age = the oldest) and says young speakers increasingly use the standard form (bumbi, piele, mire, fin, vierme; cinci, arici, ciolan)."),
        f("a accentuat dup\u0103 \u0219/j\u2192\u0103 (\u0219\u0103rpi, \u0219\u0103pti, j\u0103li) a ap\u0103rut \xEEn sud \u0219i s-a extins spre nord; azi mai ales la v\xE2rstnici. a\u015Fa domin\u0103 \xEEn NE, SV \u0219i regiunea Cern\u0103u\u021Bi.", "stressed a after \u0219/j\u2192\u0103 (\u0219\u0103rpi, \u0219\u0103pti, j\u0103li) began in the south and spread north; today mostly among older speakers. a\u015Fa dominates in the NE, SW and the Chernivtsi region."),
        f("e\u2192\u0103 dup\u0103 \u0219, s, z, \u021B, j general la a doua \u0219i a treia v\xE2rst\u0103, sporadic la tineri; apoi \u0219i \xEEn pozi\u021Bie moale: r\u0103pidi, r\u0103\u0219i, m\u0103rg.", "e\u2192\u0103 after \u0219, s, z, \u021B, j general among the second and third age, sporadic among the young; later also in a soft position: r\u0103pidi, r\u0103\u0219i, m\u0103rg."),
        f("to\u021Bi: Atlasul \xEEnregistreaz\u0103 o p\u0103strat (to\u021Bi); \u201E\xEEn restul teritoriului moldovenesc o>\u0103: t\u0103\u021B\u201D.", "to\u021Bi: the Atlas records o kept (to\u021Bi); \u201Cin the rest of the Moldavian territory o>\u0103: t\u0103\u021B\u201D.")
      ),
      sec(
        f("Nord-est", "North-east"),
        f("Sp\xEEnu: \xEEn NE se \xEEntretaie tr\u0103s\u0103turi moldovene\u0219ti cu tr\u0103s\u0103turi din sud-estul Maramure\u0219ului (sud de Tisa) \u0219i din graiuri insulare moldovene\u0219ti; ariile nu sunt unitare. Acelea\u0219i fenomene apar \u0219i \xEEn sud-vestul Ucrainei \u0219i \xEEn regiunea Cern\u0103u\u021Bi (ou\u0103>oau\xEE, nacaz).", "Sp\xEEnu: in the NE Moldavian traits cross with traits from south-east Maramure\u0219 (south of the Tisza) and from Moldavian island speeches; the areas are not unitary. The same phenomena appear in south-west Ukraine and the Chernivtsi region (ou\u0103>oau\xEE, nacaz)."),
        f("Exemple din surs\u0103: ou\u0103, rou\u0103, nou\u0103, plou\u0103; guler, nepot, nevast\u0103; necaz (\xEEn restul masivului moldovenesc n\u0103caz); \u0144ic, \u0144iri\u015Fti, \u0144iri, \u0144iras\u0103 (m); b \xEEn stadiul g' (getu, gini, algin\u0103, vr\u0103gii); p \xEEn stadiul c (cept, cele, luci) \u0219i intermediar (copcil, cupcior); \u015B, \u017A din f, v (\u0219\u02B2er, j\u02B2in, j\u02B2is); ce/ci/ge/gi\u2192\u0219\u0301, \u017A\u0301; ch>c, gh>g (ocelari, cem, ureci, gind\u0103, ungi, \xEEngit); plural feminin -e>-i (lampi, rani, \u0219coali, talpi); de-a d\u0103ura, de-a triiora; s\u0103\u2192s\xEE (\u0219i s\u0103 fie\u2192s\xEE \u0219\u02B2ib\xEE).", "Examples from the source: ou\u0103, rou\u0103, nou\u0103, plou\u0103; guler, nepot, nevast\u0103; necaz (elsewhere n\u0103caz); \u0144ic, \u0144iri\u015Fti, \u0144iri, \u0144iras\u0103 (m); b at the g' stage (getu, gini, algin\u0103, vr\u0103gii); p at the c stage (cept, cele, luci) and intermediate (copcil, cupcior); \u015B, \u017A from f, v (\u0219\u02B2er, j\u02B2in, j\u02B2is); ce/ci/ge/gi\u2192\u0219\u0301, \u017A\u0301; ch>c, gh>g (ocelari, cem, ureci, gind\u0103, ungi, \xEEngit); feminine plural -e>-i (lampi, rani, \u0219coali, talpi); de-a d\u0103ura, de-a triiora; s\u0103\u2192s\xEE (and s\u0103 fie\u2192s\xEE \u0219\u02B2ib\xEE)."),
        f("Lexic NE: belozor, \u0219liap\u0103, boz, camforc\u0103, mohorici, cr\xE2\u0219\u0103, \u0219alvari, corac, lijac, ciup, polovnic, bada, baneac, aliguni, arbuzoaic\u0103, baistrucel, balamut, balerc\u0103, barca\u0219, basalic, bastonc\u0103, bumb\u0103n, vezm\u0103, gazni\u021B\u0103, g\xE2tlan, a balani\u2026", "NE lexis: belozor, \u0219liap\u0103, boz, camforc\u0103, mohorici, cr\xE2\u0219\u0103, \u0219alvari, corac, lijac, ciup, polovnic, bada, baneac, aliguni, arbuzoaic\u0103, baistrucel, balamut, balerc\u0103, barca\u0219, basalic, bastonc\u0103, bumb\u0103n, vezm\u0103, gazni\u021B\u0103, g\xE2tlan, a balani\u2026")
      ),
      sec(
        f("Nord-vest", "North-west"),
        f("Sp\xEEnu 2009 \u0219i 2018 numesc doar diftongarea lui o (ou\u0103, rou\u0103, nou\u0103, plou\u0103) ca tr\u0103s\u0103tur\u0103 a ariilor laterale NE \u0219i NV; \xEEn 2015\u201316 nu a mai fost notat\u0103. Pagina folose\u0219te \xEEn plus \u0103\u2192a \xEEn c\xE2teva cuvinte (zona de nord, la v\xE2rstnici).", "Sp\xEEnu 2009 and 2018 name only the diphthongization of o (ou\u0103, rou\u0103, nou\u0103, plou\u0103) as a trait of the lateral NE and NW areas; it was no longer recorded in 2015\u201316. The page also uses \u0103\u2192a in a few words (the northern zone, older speakers).")
      ),
      sec(
        f("Sud-vest", "South-west"),
        f("Sp\xEEnu 2009: \xEEn restul masivului moldovenesc se aude \u0219, j (ari\u0219, \u0219ernal\u0103, \u0219olan, faj), iar \xEEn sud-vest africatele se p\u0103streaz\u0103 (ari\u0109, \u0109ernal\u0103, \u0109olan, fa\u01E7). Pagina se sprijin\u0103 pe acest singur pasaj. Lexic: varz\u0103 (nu curechi), pr\u0103\u0219tin\u0103 (nu tescovin\u0103).", "Sp\xEEnu 2009: in the rest of the Moldavian block \u0219, j are heard (ari\u0219, \u0219ernal\u0103, \u0219olan, faj), while in the south-west the affricates are kept (ari\u0109, \u0109ernal\u0103, \u0109olan, fa\u01E7). The page rests on this single passage. Lexis: varz\u0103 (not curechi), pr\u0103\u0219tin\u0103 (not tescovin\u0103)."),
        f("Cartea Sp\xEEnu, Graiurile rom\xE2ne\u0219ti din sud-vestul Basarabiei (2002), nu a putut fi citit\u0103.", "Sp\xEEnu's book Graiurile rom\xE2ne\u0219ti din sud-vestul Basarabiei (2002) could not be read.")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("\u0103\u2192a \xEEnaintea accentului (barb\xE1t, mag\xE1r, pad\xFAre) \xEEn zona de nord, doar v\xE2rstnici \u2014 redat doar pentru cuvintele din surs\u0103; e neaccentuat medial\u2192a (sac\xE1r\xEE, spari\xF3s, c\xE1rp\u0103n, g\xE1lb\u0103n); u\u2192o (por\xF3nc\xEE, sap\xF3n, fod\xFAl; redat doar \xEEn NE); pom\xE2nt; fumei, puntru (zon\u0103 restr\xE2ns\u0103, v\xE2rstnici); preiotarea lui i, o, e ini\u021Biale (simboluri ilizibile \xEEn PDF); fasuli, cuco\u0219, tucma, bubuc (v\xE2rstnici); intra\u2192\xEEntra; jura, jug, tutun cu forme dialectale (simboluri ilizibile).", "\u0103\u2192a before the stress (barb\xE1t, mag\xE1r, pad\xFAre) in the northern zone, older speakers only \u2014 rendered only for the source's words; unstressed medial e\u2192a (sac\xE1r\xEE, spari\xF3s, c\xE1rp\u0103n, g\xE1lb\u0103n); u\u2192o (por\xF3nc\xEE, sap\xF3n, fod\xFAl; rendered only in the NE); pom\xE2nt; fumei, puntru (restricted area, older speakers); preiotation of initial i, o, e (symbols unreadable in the PDF); fasuli, cuco\u0219, tucma, bubuc (older speakers); intra\u2192\xEEntra; jura, jug, tutun with dialectal forms (symbols unreadable)."),
        f("Lexic general (Sp\xEEnu 2018): ciolan, om\u0103t, hulub, p\xE2ntece, a pi\u0219ca, p\u0103pu\u0219oi, mo\u0219 (unchi), v\u0103dan\u0103, ogheal, \u021B\xE2ntirim, harbuz, ciubot\u0103, bumb, baistruc, glod, r\u0103cituri, curechi, tescovin\u0103, m\xE2\u021B\u0103.", "General lexis (Sp\xEEnu 2018): ciolan, om\u0103t, hulub, p\xE2ntece, a pi\u0219ca, p\u0103pu\u0219oi, mo\u0219 (uncle), v\u0103dan\u0103, ogheal, \u021B\xE2ntirim, harbuz, ciubot\u0103, bumb, baistruc, glod, r\u0103cituri, curechi, tescovin\u0103, m\xE2\u021B\u0103.")
      )
    ] },
    bucovina: { title: f("Bucovina", "Bukovina"), sections: [
      sec(
        f("Cele patru arii (Turcule\u021B 1977\u201378)", "The four areas (Turcule\u021B 1977\u201378)"),
        f("1) Dornean \u2014 tranzi\u021Bie \xEEntre NE Transilvaniei \u0219i Moldova, format \xEEn secolele XVII\u2013XVIII; 2) C\xE2mpulungean \u2014 cel mai arhaic; 3) R\u0103d\u0103u\u021Bean \u2014 moldovenesc cu tr\u0103s\u0103turi arhaice \u0219i straturi ardelene\u0219ti, cu o arie mic\u0103 aparte pe valea superioar\u0103 a Sucevei; 4) sud-est \u201Eafricatizant\u201D \u2014 ardeleni din secolul XVIII peste o baz\u0103 c\xE2mpulungean\u0103, \xEEn mozaic; plus \u201Einsule\u201D care p\u0103streaz\u0103 tipul vechi \xEEn jurul Sucevei.", "1) Dorna \u2014 a transition between NE Transylvania and Moldavia, formed in the 17th\u201318th centuries; 2) C\xE2mpulung \u2014 the most archaic; 3) R\u0103d\u0103u\u021Bi \u2014 Moldavian with archaic traits and Transylvanian layers, with a small separate area on the upper Suceava valley; 4) south-east \u201Cafricatizing\u201D \u2014 18th-century Transylvanians over a C\xE2mpulung-type base, in a mosaic; plus \u201Cislands\u201D keeping the old type around Suceava."),
        f("Migra\u021Biile din nordul Transilvaniei\u2013Maramure\u0219 (N\u0103s\u0103ud, Some\u0219, Maramure\u0219) au adus muierea dentalelor \u0219i africatizarea lui k', g' \u0219i a dentalelor muiate. Palatalizarea u\u0219oar\u0103 a dentalelor (tie, die) e normal\u0103 \xEEn graiurile moldovene\u0219ti.", "The migrations from northern Transylvania\u2013Maramure\u0219 (N\u0103s\u0103ud, Some\u0219, Maramure\u0219) brought dental softening and africatization of k', g' and of softened dentals. Light palatalization of dentals (tie, die) is normal in Moldavian speech.")
      ),
      sec(
        f("C\xE2mpulung", "C\xE2mpulung"),
        f("Cel mai important: p\u0103strarea africatelor c, g \u0219i palatalizarea lui f, v \xEEn h', y; p\u0103strarea labialei \xEEn grupurile pk', bg', m\u0144. Nu are velarizarea lui e dup\u0103 s, z, \u021B, \u0219, j, r (a\u0219, co\u0219, reci, \u0219ed, \u0219ezi). Africatele c, g nu sunt de obicei palatalizate; \u0219, j se aud \u0219i dure, \u0219i moi.", "Most important: the affricates c, g are kept and f, v are palatalized to h', y; the labial is kept in the groups pk', bg', m\u0144. It has no velarization of e after s, z, \u021B, \u0219, j, r (a\u0219, co\u0219, reci, \u0219ed, \u0219ezi). The affricates c, g are usually not palatalized; \u0219, j are heard both hard and soft."),
        f("Pojor\xE2ta\u2013Fundu Moldovei: muierea dentalelor \u0219i confuzia lui k', g' cu t', d', mai slab\u0103 dec\xE2t \xEEn anchetele vechi; la Fundu Moldovei h' e mai ales la v\xE2rstnici, tinerii spun \u0219, iar y a aproape disp\u0103rut (azi j, z). \xCEnchiderea lui -\u0103/-e e mult mai frecvent\u0103 la Pojor\xE2ta \u0219i Vatra Moldovi\u021Bei (\u0219i la Capul Codrului, \u0218cheia, Volov\u0103\u021B, Gr\u0103nice\u0219ti, Marginea, Fr\u0103t\u0103u\u021Bii Vechi).", "Pojor\xE2ta\u2013Fundu Moldovei: dental softening and confusion of k', g' with t', d', weaker than in the old surveys; at Fundu Moldovei h' is mostly among older speakers, the young say \u0219, and y has almost disappeared (today j, z). Closing of -\u0103/-e is much more frequent at Pojor\xE2ta and Vatra Moldovi\u021Bei (and at Capul Codrului, \u0218cheia, Volov\u0103\u021B, Gr\u0103nice\u0219ti, Marginea, Fr\u0103t\u0103u\u021Bii Vechi)."),
        f("Urme de rotacism: p\xEEr\u0103 (C\xE2mpulung), p\xEErei (p\xEEn\u0103 ce, Fundu Moldovei), rapoi (Ostra); apocopa formelor verbale (gr\u0103j) la Fundu Moldovei \u0219i alte sate.", "Traces of rhotacism: p\xEEr\u0103 (C\xE2mpulung), p\xEErei (p\xEEn\u0103 ce, Fundu Moldovei), rapoi (Ostra); apocope of verb forms (gr\u0103j) at Fundu Moldovei and other villages.")
      ),
      sec(
        f("Dorna", "Dorna"),
        f("Diferen\u021Bele fa\u021B\u0103 de graiurile transilv\u0103nene \u021Bin mai ales de tempo \u0219i prozodie (vorbire mai rapid\u0103, accent dinamic, silabe neaccentuate care cad: urdi\u021B\u0103, veveri\u021B\u0103). Africatizarea lui chi/ghi (oc, gat\u0103) \u0219i muierea dentalelor scad de la nord-vest spre sud-est; \xEEnchiderea lui -\u0103/-e cre\u0219te spre sud-est. La Crucea africatizarea apare doar sporadic, mai ales \xEEn grupurile pk', bg' (b\u0103rg, \xEEntreb\u0103).", "The differences from Transylvanian speech are mostly tempo and prosody (faster speech, dynamic stress, dropped unstressed syllables: urdi\u021B\u0103, veveri\u021B\u0103). Africatization of chi/ghi (oc, gat\u0103) and dental softening drop from the north-west to the south-east; closing of -\u0103/-e grows towards the south-east. At Crucea africatization appears only sporadically, mostly in the groups pk', bg' (b\u0103rg, \xEEntreb\u0103)."),
        f("Muierea dentalelor: general\u0103 la Co\u0219na, frecvent\u0103 la Poiana Stampei, inconsecvent\u0103 \u0219i u\u0219oar\u0103 la Argestru, Iacobeni, Cioc\u0103ne\u0219ti, Valea Putnei, sporadic\u0103 la Crucea, \u0218aru Dornei, P\u0103ltini\u0219. Velarizarea lui e e \u201Ecurent\u0103\u201D \xEEn Dorna.", "Dental softening: general at Co\u0219na, frequent at Poiana Stampei, inconsistent and light at Argestru, Iacobeni, Cioc\u0103ne\u0219ti, Valea Putnei, sporadic at Crucea, \u0218aru Dornei, P\u0103ltini\u0219. Velarization of e is \u201Ccurrent\u201D in Dorna."),
        f("Co\u0219na: a protonic\u2192\u0103 (c\u0103pac, p\u0103har, t\u0103bac; \xEEn rest \u0103\u2192a e aproape general \xEEn Bucovina), ps\u2192p\u021B (coap\u021B\u0103); C\xE2rlibaba \u0219i Co\u0219na: oa uneori o. Cioc\u0103ne\u0219ti: africatele primare c, g coexist\u0103 cu fricativele \u0219, j \u0219i cu africatele secundare (amestec de tip c\xE2mpulungean vechi \u0219i dornean nou). Valea Putnei: azi fricativele \u0219, j au \xEEnlocuit africatele primare la majoritatea vorbitorilor.", "Co\u0219na: protonic a\u2192\u0103 (c\u0103pac, p\u0103har, t\u0103bac; elsewhere \u0103\u2192a is almost general in Bukovina), ps\u2192p\u021B (coap\u021B\u0103); C\xE2rlibaba and Co\u0219na: oa sometimes o. Cioc\u0103ne\u0219ti: the primary affricates c, g coexist with the fricatives \u0219, j and with the secondary affricates (a mix of the old C\xE2mpulung type and the new Dorna type). Valea Putnei: today the fricatives \u0219, j have replaced the primary affricates for most speakers."),
        f("C\xE2rlibaba (insul\u0103 ardelean\u0103, de tip vest-maramure\u0219ean) nu are pagin\u0103: c, g \u201Edure\u201D, palatale confundate cu dentale, labiodentale \xEEn h', d'/\u011D; transcrierea din PDF e prea deteriorat\u0103 pentru a fi redat\u0103.", "C\xE2rlibaba (a Transylvanian island, of west-Maramure\u0219 type) has no page: \u201Chard\u201D c, g, palatals confused with dentals, labiodentals in h', d'/\u011D; the PDF transcription is too damaged to render.")
      ),
      sec(
        f("R\u0103d\u0103u\u021B", "R\u0103d\u0103u\u021Bi"),
        f("\xCEn toat\u0103 aria: fricativizarea lui c, g (\u0219, j) \u0219i palatalizarea lui f, v \xEEn \u0219', j' (cu excep\u021Bia lui zespe \u201Eviespe\u201D); f\u0103r\u0103 velarizarea lui e; vocative scurte (tat!, m\u0103j!) de la Straja la Gr\u0103me\u0219ti \u0219i p\xE2n\u0103 la C\u0103jvana, Frasin, Doroteia, Stulpicani, Gemenea, Ostra; labializarea lui a foarte pronun\u021Bat\u0103.", "Across the area: fricativization of c, g (\u0219, j) and palatalization of f, v to \u0219', j' (except zespe \u201Cviespe\u201D); no velarization of e; short vocatives (tat!, m\u0103j!) from Straja to Gr\u0103me\u0219ti and as far as C\u0103jvana, Frasin, Doroteia, Stulpicani, Gemenea, Ostra; very pronounced labialization of a."),
        f("Vest (Straja 466, Sucevi\u021Ba 475, Marginea 478): \xEEnchiderea lui -\u0103/-e nu e generalizat\u0103 sau e rar\u0103; labiala \xEEnc\u0103 p\u0103strat\u0103 (pierderea e \xEEn curs la Marginea \u0219i Sucevi\u021Ba). Est (Fr\u0103t\u0103u\u021Bii Vechi 477, Volov\u0103\u021B 479, Gr\u0103nice\u0219ti 487): \xEEnchidere consecvent\u0103; labiala s-a pierdut (\u0219i la Solca 480, C\u0103jvana 486); recent \u0219i variabil.", "West (Straja 466, Sucevi\u021Ba 475, Marginea 478): closing of -\u0103/-e is not generalized or is rare; the labial is still kept (its loss is under way at Marginea and Sucevi\u021Ba). East (Fr\u0103t\u0103u\u021Bii Vechi 477, Volov\u0103\u021B 479, Gr\u0103nice\u0219ti 487): consistent closing; the labial has been lost (also at Solca 480, C\u0103jvana 486); recent and variable."),
        f("Cuvinte proprii: aclo (acolo, cu accentul etimologic \u0219i c\u0103derea lui o), dup\u0103\u2192dipi, zespe, capuli/omuli (genitiv-dativ \xEEn -li), a\u0219 \u201Echiar, tocmai\u201D, \xEEnies, lus\u0103f\u0103n, pomini; capulu/omulu (f\u0103r\u0103 -i) general la Gr\u0103nice\u0219ti.", "Own words: aclo (acolo, with the etymological stress and loss of o), dup\u0103\u2192dipi, zespe, capuli/omuli (genitive-dative in -li), a\u0219 \u201Cexactly\u201D, \xEEnies, lus\u0103f\u0103n, pomini; capulu/omulu (no -i) general at Gr\u0103nice\u0219ti."),
        f("Valea superioar\u0103 a Sucevei (Straja, Vicovu de Sus, Vicovu de Jos, G\u0103l\u0103ne\u0219ti, Bilca, Fr\u0103t\u0103u\u021Bii Noi): africatizarea lui chi/ghi (oc, gat\u0103) o separ\u0103 de restul R\u0103d\u0103u\u021Bului. Guia 2015: la Straja \u0219i M\u0103n\u0103stirea Humorului t, d se africatizeaz\u0103, la Vicovu de Jos doar t; Guia 2020: labiale p\u2192p\u0109, b\u2192b\u011D, m\u2192m\u0144 la Straja, Vicovu de Jos, Ili\u0219e\u0219ti, M\u0103n\u0103stirea Humorului.", "Upper Suceava valley (Straja, Vicovu de Sus, Vicovu de Jos, G\u0103l\u0103ne\u0219ti, Bilca, Fr\u0103t\u0103u\u021Bii Noi): africatization of chi/ghi (oc, gat\u0103) sets it apart from the rest of R\u0103d\u0103u\u021Bi. Guia 2015: at Straja and M\u0103n\u0103stirea Humorului t, d are africatized, at Vicovu de Jos only t; Guia 2020: labials p\u2192p\u0109, b\u2192b\u011D, m\u2192m\u0144 at Straja, Vicovu de Jos, Ili\u0219e\u0219ti, M\u0103n\u0103stirea Humorului.")
      ),
      sec(
        f("Sud-est \u201Eafricatizant\u201D", "South-east \u201Cafricatizing\u201D"),
        f("Africatizarea lui chi/ghi (oc, gat\u0103) \u0219i a dentalelor muiate (frunce, gince) \xEEn M\u0103n\u0103stirea Humorului, P\u0103ltinoasa, Dr\u0103goie\u0219ti, Moara, Ude\u0219ti, \u0218cheia, Ili\u0219e\u0219ti, Todire\u0219ti, Boto\u0219ana, Poieni (Solca); la C\u0103jvana chi/ghi se africatizeaz\u0103, iar dentalele sunt doar muiate. Spre sud: Cornul Luncii, Boroaia, Vadul Moldovei, For\u0103\u0219ti, Dr\u0103gu\u0219eni, v\u0103ile Suha Mare \u0219i H\xE2r\u0219ca, \u0218omuzul Mare \u0219i Mic: Liteni, R\u0103d\u0103\u0219eni, Bune\u0219ti, Vultureni, Preute\u0219ti, Dolhe\u0219ti; col\u021Bul sud-estic: T\u0103t\u0103ru\u0219i (Ia\u0219i). Ipoteza lui Weigand (origine b\u0103n\u0103\u021Bean\u0103) e respins\u0103.", "Africatization of chi/ghi (oc, gat\u0103) and of softened dentals (frunce, gince) at M\u0103n\u0103stirea Humorului, P\u0103ltinoasa, Dr\u0103goie\u0219ti, Moara, Ude\u0219ti, \u0218cheia, Ili\u0219e\u0219ti, Todire\u0219ti, Boto\u0219ana, Poieni (Solca); at C\u0103jvana chi/ghi are africatized, while the dentals are only softened. South: Cornul Luncii, Boroaia, Vadul Moldovei, For\u0103\u0219ti, Dr\u0103gu\u0219eni, the Suha Mare and H\xE2r\u0219ca valleys, \u0218omuzul Mare and Mic: Liteni, R\u0103d\u0103\u0219eni, Bune\u0219ti, Vultureni, Preute\u0219ti, Dolhe\u0219ti; the south-eastern corner: T\u0103t\u0103ru\u0219i (Ia\u0219i). Weigand's hypothesis (Banat origin) is rejected."),
        f("F\u0103r\u0103 africatizare (doar tr\u0103s\u0103turi moldovene\u0219ti de nord): Slatina, Horodniceni, Baia, P\xE2rte\u0219ti de Jos \u0219i de Sus, Leucu\u0219e\u0219ti, Hu\u0219i (Preute\u0219ti), Dolhe\u0219tii Mici, Giule\u0219ti (Boroaia), Pl\u0103v\u0103lari, M\u0103n\u0103stioara (Ude\u0219ti), Mihoveni (\u0218cheia).", "Without africatization (only northern Moldavian traits): Slatina, Horodniceni, Baia, P\xE2rte\u0219ti de Jos and de Sus, Leucu\u0219e\u0219ti, Hu\u0219i (Preute\u0219ti), Dolhe\u0219tii Mici, Giule\u0219ti (Boroaia), Pl\u0103v\u0103lari, M\u0103n\u0103stioara (Ude\u0219ti), Mihoveni (\u0218cheia)."),
        f("Velarizarea lui e e \u201Ecurent\u0103\u201D; \xEEnchiderea lui -\u0103/-e e sporadic\u0103 sau rar\u0103. Lexic: cor\u0103st\u0103, crep, durmim, durmi\u021Bi, nasl, r\u0103gil\u0103, s\u0103rin, zbis.", "Velarization of e is \u201Ccurrent\u201D; closing of -\u0103/-e is sporadic or rare. Lexis: cor\u0103st\u0103, crep, durmim, durmi\u021Bi, nasl, r\u0103gil\u0103, s\u0103rin, zbis.")
      ),
      sec(
        f("Insule vechi (subdialectul \u201Eestic\u201D din Wikipedia)", "Old islands (the \u201CEastern\u201D subdialect in Wikipedia)"),
        f("Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na (\u0219i Zvori\u0219tea, \xEEn Moldova) p\u0103streaz\u0103 africatele c, g \u0219i palatalizarea lui f, v \xEEn h', y; fricativele \u0219, z apar doar sporadic. Turcule\u021B le nume\u0219te \u201Emartori de erodare\u201D ai unei arii vechi comune cu C\xE2mpulungul. Wikipedia EN adaug\u0103 satele din jurul Sucevei (Moara Nica, Moara Carp, Frumoasa, Bulai, Podeni, Ti\u0219\u0103u\u021Bi, Lisaura, Mitocu Dragomirnei, P\u0103l\u0103ra\u021Bi, Calafinde\u0219ti, Sin\u0103u\u021Bi de Sus, St\u0103ne\u0219ti, Poieni, \u021Aureni) \u0219i satele din regiunea Cern\u0103u\u021Bi.", "Bosanci, P\u0103tr\u0103u\u021Bi, Mihoveni, Cost\xE2na (and Zvori\u0219tea, in Moldavia) keep the affricates c, g and the palatalization of f, v to h', y; the fricatives \u0219, z appear only sporadically. Turcule\u021B calls them \u201Cerosion witnesses\u201D of an old area shared with C\xE2mpulung. Wikipedia EN adds the villages around Suceava (Moara Nica, Moara Carp, Frumoasa, Bulai, Podeni, Ti\u0219\u0103u\u021Bi, Lisaura, Mitocu Dragomirnei, P\u0103l\u0103ra\u021Bi, Calafinde\u0219ti, Sin\u0103u\u021Bi de Sus, St\u0103ne\u0219ti, Poieni, \u021Aureni) and villages in the Chernivtsi region.")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("Tempo rapid \u0219i c\u0103derea silabelor finale; imperative \u0219i persoana a 3-a apocopate (gr\u0103j); genitiv-dativ \xEEn -li; labializarea lui a; epenteza lui r (coorj\u0103); fonetisme lexicale (curast\u0103/cor\u0103st\u0103, perin\u0103/s\u0103rin, r\u0103di\u021B\u0103, rizil\u0103).", "Fast tempo and loss of final syllables; apocopated imperatives and 3rd-person forms (gr\u0103j); genitive-dative in -li; labialization of a; epenthetic r (coorj\u0103); lexical phonetisms (curast\u0103/cor\u0103st\u0103, perin\u0103/s\u0103rin, r\u0103di\u021B\u0103, rizil\u0103).")
      )
    ] },
    banat: { title: f("Banat", "Banat"), sections: [
      sec(
        f("Zon\u0103 \u0219i subvariet\u0103\u021Bi", "Area and sub-varieties"),
        f("Cara\u0219-Severin, Timi\u0219, sudul Aradului \u0219i al Hunedoarei, Banatul s\xE2rbesc, parte din Valea Timocului; tranzi\u021Bie spre muntean \xEEn nord-vestul Olteniei (Gorj, Mehedin\u021Bi); amestec cu graiurile transilv\u0103nene \xEEn nord-est (Ha\u021Beg) \u0219i spre sudul Cri\u0219anei. [Wikipedia \u2013 Banat]", "Cara\u0219-Severin, Timi\u0219, southern Arad and Hunedoara, Serbian Banat, part of the Timok Valley; transition to Wallachian in north-west Oltenia (Gorj, Mehedin\u021Bi); mixing with Transylvanian speech in the north-east (Ha\u021Beg) and towards southern Cri\u0219ana. [Wikipedia \u2013 Banat]"),
        f("Wikipedia nume\u0219te subvariet\u0103\u021Bile: sud-vest, est, nord (\u0268 mai anterior, spre i, \xEEn jurul Lugojului: r\u0268d) \u0219i nord-est (Ha\u021Beg). Lista tr\u0103s\u0103turilor lor nu apare \xEEn text. Danciu (2009) \xEEmparte graiurile din nord \xEEn nord-est (Mocanu) \u0219i nord-vest (Faiciuc 2001) \u0219i descrie separat sud-vestul Timi\u0219oarei; Petrovici descrie sud-vestul extrem (Alm\u0103j, Cara\u0219ova).", "Wikipedia names the sub-varieties: south-west, east, north (a more fronted \u0268, towards i, around Lugoj: r\u0268d) and north-east (Ha\u021Beg). The list of their features does not appear in the text. Danciu (2009) divides the northern speeches into north-east (Mocanu) and north-west (Faiciuc 2001) and describes the south-west of Timi\u0219oara separately; Petrovici describes the extreme south-west (Alm\u0103j, Cara\u0219ova).")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("Vocale neaccentuate: e, \u0103, o\u2192i, \xEE, u \u0219i a\u2192\u0103 (papuc\u2192p\u0103puc, plecat\u2192plicat, \xEEngropat\u2192\xEEngrupat); oa\u2192wa \xEEntr-unele variet\u0103\u021Bi (soare\u2192swarje) \u0219i \u2192\u0254 \xEEn altele (coaj\u0103\u2192c\u0254j\u0103, oal\u0103\u2192\u0254l\u0103) \u2014 sursa nu spune care unde; \u0268 vechi \xEEn c\xE2ine/m\xE2ine/p\xE2ine (redat ca lexical).", "Unstressed vowels: e, \u0103, o\u2192i, \xEE, u and a\u2192\u0103 (papuc\u2192p\u0103puc, plecat\u2192plicat, \xEEngropat\u2192\xEEngrupat); oa\u2192wa in some varieties (soare\u2192swarje) and \u2192\u0254 in others (coaj\u0103\u2192c\u0254j\u0103, oal\u0103\u2192\u0254l\u0103) \u2014 the source does not say which where; old \u0268 in c\xE2ine/m\xE2ine/p\xE2ine (rendered as a word list)."),
        f("Danciu: \u0103\u2192o (rogo\u0219it, cotr\xEEn\u021B\u0103), accent har\xEDp\u0103, p\u0103s\xE1re, durific\u0103ri \xEEn unele cuvinte, v dur (v\u0103spar), sinerez\u0103 (m\u0103\u015F\u0107\xF3\u0144), \u0144 \xEEn -o\u0144, t\u0103m\xEE\u0144e; unele tr\u0103s\u0103turi nu apar la nord de Bega sau doar sporadic.", "Danciu: \u0103\u2192o (rogo\u0219it, cotr\xEEn\u021B\u0103), stress har\xEDp\u0103, p\u0103s\xE1re, hardenings in some words, hard v (v\u0103spar), synaeresis (m\u0103\u015F\u0107\xF3\u0144), \u0144 in -o\u0144, t\u0103m\xEE\u0144e; some features do not occur north of the Bega or only sporadically.")
      ),
      sec(
        f("Morfologie \u0219i lexic (descrise, neredate)", "Morphology and lexis (described, not rendered)"),
        f("cas\u0103\u2013c\u0103\u0219i; genitiv-dativ analitic (piciorul de la scaun, la/de la/lu); a meu invariabil; perfect simplu activ la toate persoanele; o m\u0103rs/or m\u0103rs; lucr\u0103, \xEEnfloare (f\u0103r\u0103 -ez/-esc); eu cobor, ei cobor; mai-mult-ca-perfect am fost avut, m-am fost dus; nu fugire\u021B, nu m\xE2ncare\u021B; vrea\u0219 face; \u0103l, a, \u0103i, ale; alt\u0103\u0219\u02B2e, tot natul; s\u0268m \u201Esunt\u201D; adjective invariabile (braun, lila); mi-s, ni-s, vi-s; prefixe de aspect do-, pro-, z\u0103- (am dom\xEEncat, am dog\u0103tat, m-o prontors, z\u0103uita, zogoni \u2014 influen\u021B\u0103 s\xE2rb\u0103).", "cas\u0103\u2013c\u0103\u0219i; analytic genitive-dative (piciorul de la scaun, la/de la/lu); invariable a meu; simple perfect active in all persons; o m\u0103rs/or m\u0103rs; lucr\u0103, \xEEnfloare (no -ez/-esc); eu cobor, ei cobor; pluperfect am fost avut, m-am fost dus; nu fugire\u021B, nu m\xE2ncare\u021B; vrea\u0219 face; \u0103l, a, \u0103i, ale; alt\u0103\u0219\u02B2e, tot natul; s\u0268m \u201CI am\u201D; invariable adjectives (braun, lila); mi-s, ni-s, vi-s; aspect prefixes do-, pro-, z\u0103- (am dom\xEEncat, am dog\u0103tat, m-o prontors, z\u0103uita, zogoni \u2014 Serbian influence)."),
        f("Cuvinte: \u0219c\u0103tul\u0103, \u0219naid\u0103r, ai (usturoi), farb\u0103, golumb, cozeci (pojar); lubeni\u021B\u0103.", "Words: \u0219c\u0103tul\u0103, \u0219naid\u0103r, ai (garlic), farb\u0103, golumb, cozeci (measles); lubeni\u021B\u0103.")
      )
    ] },
    crisana: { title: f("Cri\u0219ana", "Cri\u0219ana"), sections: [
      sec(
        f("Zon\u0103 \u0219i subvariet\u0103\u021Bi", "Area and sub-varieties"),
        f("Bihor, S\u0103laj, Satu Mare, NV Alba, V Cluj, N Arad, N Hunedoara, SV Maramure\u0219. Subvariet\u0103\u021Bi: Bihor, \u021Aara Mo\u021Bilor, valea Some\u0219ului, \u021Aara Oa\u0219ului; sud-estul e o zon\u0103 de tranzi\u021Bie spre Banat. Weigand, Philippide, Iordan \u0219i Vasiliu nu au individualizat Cri\u0219ana; Todoran, Petrovici \u0219i Coteanu au tratat-o separat. [Wikipedia \u2013 Cri\u0219ana]", "Bihor, S\u0103laj, Satu Mare, NW Alba, W Cluj, N Arad, N Hunedoara, SW Maramure\u0219. Sub-varieties: Bihor, \u021Aara Mo\u021Bilor, the Some\u0219 valley, \u021Aara Oa\u0219ului; the south-east is a transition zone towards Banat. Weigand, Philippide, Iordan and Vasiliu did not individualize Cri\u0219ana; Todoran, Petrovici and Coteanu treated it separately. [Wikipedia \u2013 Cri\u0219ana]"),
        f("Bihor \u0219i valea Some\u0219ului sunt numite f\u0103r\u0103 tr\u0103s\u0103turi fonetice proprii; de aceea nu au pagini.", "Bihor and the Some\u0219 valley are named without phonetic features of their own; that is why they have no pages.")
      ),
      sec(
        f("Ce spun sursele despre labiale \u0219i dentale", "What the sources say about labials and dentals"),
        f("Guia (2020): labialele r\u0103m\xE2n nealterate \xEEn jum\u0103tatea de sud; \xEEn nord se palatalizeaz\u0103 fluctuant, cu stadii intermediare (pk', p\u0109, p\u0165, pt\u02B2) \u0219i formele nealterate mai numeroase. f\u2192h' (sau \u0219), v\u2192\u010F \xEEn toat\u0103 Cri\u0219ana; \xEEn valea Cri\u0219ului Negru \u0219i \xEEn \u021Aara Mo\u021Bilor v\u2192y (yis, yerme), rar g'. Apuseni: stadiul final k' \xEEn partea ardeleneasc\u0103 a Albei (k'etre, cok'ila la Vin\u021Bu, C\u0103p\xE2lna), iar f\u2192h', v\u2192y la C\u0103p\xE2lna.", "Guia (2020): labials stay unaltered in the southern half; in the north they palatalize in a fluctuating way, with intermediate stages (pk', p\u0109, p\u0165, pt\u02B2) and unaltered forms more numerous. f\u2192h' (or \u0219), v\u2192\u010F throughout Cri\u0219ana; in the Cri\u0219ul Negru valley and in \u021Aara Mo\u021Bilor v\u2192y (yis, yerme), rarely g'. Apuseni: the final stage k' in the Transylvanian part of Alba (k'etre, cok'ila at Vin\u021Bu, C\u0103p\xE2lna), and f\u2192h', v\u2192y at C\u0103p\xE2lna."),
        f("Guia (2015): t, d, n (par\u021Bial l, r) \xEEnaintea lui e, i, ea sunt palatalizate \xEEn toate graiurile cri\u0219ene, \xEEn afar\u0103 de cel din Oa\u0219; k' \u0219i g' se confund\u0103 cu t' \u0219i d' (chem\u2192\u021Beme, ghea\u021B\u0103\u2192da\u021B\u0103); \xEEn Mun\u021Bii Apuseni t se africatizeaz\u0103 (\u0219tiu\u2192\u0219ciu).", "Guia (2015): t, d, n (partly l, r) before e, i, ea are palatalized in all Cri\u0219ana speeches except that of Oa\u0219; k' and g' are confused with t' and d' (chem\u2192\u021Beme, ghea\u021B\u0103\u2192da\u021B\u0103); in the Apuseni Mountains t is africatized (\u0219tiu\u2192\u0219ciu)."),
        f("Wikipedia d\u0103 \u0219i t, d (frate\u2192frat\u02B2e, bade\u2192bad\u02B2e) \u0219i o -\u02B2/-\u02B7 asilabic final (spus\u02B7) \u201Eclarification needed\u201D \u2014 acesta din urm\u0103 nu e redat.", "Wikipedia also gives t, d (frate\u2192frat\u02B2e, bade\u2192bad\u02B2e) and a final asyllabic -\u02B2/-\u02B7 (spus\u02B7) \u201Cclarification needed\u201D \u2014 the latter is not rendered.")
      ),
      sec(
        f("\u021Aara Mo\u021Bilor \u0219i \u021Aara Oa\u0219ului", "\u021Aara Mo\u021Bilor and \u021Aara Oa\u0219ului"),
        f("\u021Aara Mo\u021Bilor: n \xEEntre vocale devine r \xEEn cuvinte vechi (oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0103), ca \xEEn istrorom\xE2n\u0103. \u021Aara Oa\u0219ului: l \xEEnaintea unei consoane se velarizeaz\u0103 (alb\u2192a\u026Bb/awb) \u0219i r are vibra\u021Bii multiple (neredat). Singura arie f\u0103r\u0103 palatalizarea dentalelor (Guia 2015): k', g' devin t', d' (m\u0103 tem vs. \u021Bem \u201Echem\u201D), iar grupul \u0219\u021B se depalatalizeaz\u0103 (\u0219timb, \u0219tiop, dup\u0103 TDR p. 295). Labialele p, b, m dau pt\u02B2, bd\u02B2, mn\u02B2 (p\u0165ele, p\u0165atr\u0103, ob\u010Fal\u0103, m\u0144eu, m\u0144ireas\u0103), mai ales \xEEn Oa\u0219.", "\u021Aara Mo\u021Bilor: intervocalic n becomes r in old words (oameni\u2192wamir\u02B2, lumin\u0103\u2192lumn\u02B2ir\u0103), as in Istro-Romanian. \u021Aara Oa\u0219ului: l before a consonant is velarized (alb\u2192a\u026Bb/awb) and r has multiple vibrations (not rendered). The only area without dental palatalization (Guia 2015): k', g' become t', d' (m\u0103 tem vs. \u021Bem \u201Cchem\u201D), and the group \u0219\u021B is depalatalized (\u0219timb, \u0219tiop, after TDR p. 295). The labials p, b, m give pt\u02B2, bd\u02B2, mn\u02B2 (p\u0165ele, p\u0165atr\u0103, ob\u010Fal\u0103, m\u0144eu, m\u0144ireas\u0103), mostly in Oa\u0219.")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("Vocale neaccentuate a, e, o\u2192\u0259, i, u (pahar\u2192p\u0259har); \u0219, j fie centralizeaz\u0103 vocalele urm\u0103toare, fie se muiaz\u0103 (coaj\u0103\u2192kw\u0254\u0292\u02B2e, u\u0219\u0103\u2192u\u0283\u02B2e), dup\u0103 varietate; \u0268j\u2192\u0268 \xEEn c\xE2ine, m\xE2ine, p\xE2ine (redat ca lexical).", "Unstressed vowels a, e, o\u2192\u0259, i, u (pahar\u2192p\u0259har); \u0219, j either centralize the following vowels or soften (coaj\u0103\u2192kw\u0254\u0292\u02B2e, u\u0219\u0103\u2192u\u0283\u02B2e), depending on the variety; \u0268j\u2192\u0268 in c\xE2ine, m\xE2ine, p\xE2ine (rendered as a word list).")
      ),
      sec(
        f("Morfologie \u0219i lexic (descrise, neredate)", "Morphology and lexis (described, not rendered)"),
        f("a meu invariabil; lucr\u0103, str\u0103luce; \xEEmp\u0103r\u021B\u0103sc, \xEEnghi\u021B\u0103sc, sim\u021B\u0103sc; o zis/or zis; \u0219i fac\u0103 (\u0219i \xEEn loc de s\u0103); s\u0103 deie, steie, beie, vreie; o vu c\xE2nta; c\u0103t\u0103; nu plecare\u021Bi; spuj, viw; oarecine, oarece; arin\u0103, br\xE2nc\u0103, cot\u0103toare, \u0219tergur\u0103, v\u0103!, tulai!, no.", "invariable a meu; lucr\u0103, str\u0103luce; \xEEmp\u0103r\u021B\u0103sc, \xEEnghi\u021B\u0103sc, sim\u021B\u0103sc; o zis/or zis; \u0219i fac\u0103 (\u0219i instead of s\u0103); s\u0103 deie, steie, beie, vreie; o vu c\xE2nta; c\u0103t\u0103; nu plecare\u021Bi; spuj, viw; oarecine, oarece; arin\u0103, br\xE2nc\u0103, cot\u0103toare, \u0219tergur\u0103, v\u0103!, tulai!, no.")
      )
    ] },
    maramures: { title: f("Maramure\u0219", "Maramure\u0219"), sections: [
      sec(
        f("Zon\u0103 \u0219i ramuri", "Area and branches"),
        f("NE Maramure\u0219, pe v\u0103ile Tisei, Vi\u0219eului, Marei \u0219i Cos\u0103ului (Sighetu Marma\u021Biei, Vi\u0219eu, Bor\u0219a); nord-vestul Zakarpatiei. Trei ramuri dup\u0103 tr\u0103s\u0103turi mai ales lexicale: centrul larg (cel mai reprezentativ), nord-vestul (influen\u021B\u0103 din Oa\u0219), sud-estul. Weigand, Philippide, Iordan \u0219i Vasiliu nu recunosc un grai maramure\u0219ean; Todoran \u0219i Coteanu \xEEl recunosc. [Wikipedia \u2013 Maramure\u0219]", "NE Maramure\u0219, along the Tisza, Vi\u0219eu, Mara and Cos\u0103u valleys (Sighetu Marma\u021Biei, Vi\u0219eu, Bor\u0219a); north-west Zakarpattia. Three branches by mostly lexical features: the wide centre (most representative), the north-west (Oa\u0219 influence), the south-east. Weigand, Philippide, Iordan and Vasiliu do not recognize a Maramure\u0219 speech; Todoran and Coteanu do. [Wikipedia \u2013 Maramure\u0219]"),
        f("Fiindc\u0103 diferen\u021Bele dintre ramuri sunt lexicale, nu exist\u0103 pagini fonetice separate.", "Because the differences between branches are lexical, there are no separate phonetic pages.")
      ),
      sec(
        f("Note despre reguli", "Notes on the rules"),
        f("Wikipedia nu d\u0103 dentalele t, d palatalizate; Guia (2015) include Maramure\u0219ul \xEEn aria de palatalizare a dentalelor \u0219i \xEEn aria \xEEn care k', g' se confund\u0103 cu t', d'. Aplica\u021Bia folose\u0219te ambele surse.", "Wikipedia does not give palatalized dentals t, d; Guia (2015) includes Maramure\u0219 in the area of dental palatalization and in the area where k', g' are confused with t', d'. The app uses both sources."),
        f("Dup\u0103 r: sursa trece r \xEEn lista consoanelor dup\u0103 care vocalele din fa\u021B\u0103 devin centrale (rece\u2192r\u0103ce, ridica\u2192r\xEEdica).", "After r: the source lists r among the consonants after which front vowels become central (rece\u2192r\u0103ce, ridica\u2192r\xEEdica)."),
        f("c, g \xEEnaintea lui e sunt \u201Emai pu\u021Bin palatale\u201D \u0219i centralizeaz\u0103 vocala urm\u0103toare (cer\u2192c\u0115r): redat cu \u0115.", "c, g before e are \u201Cless palatal\u201D and centralize the following vowel (cer\u2192c\u0115r): rendered with \u0115.")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("Vocalele mediane se \xEEnchid spre i, \u0268, u sau intermediar (cea mai frecvent\u0103 e\u2192i: di, di la; redat doar de\u2192di); i \u0219i u finale surde (p\u0103curar\u02B2, cer\u02B2\u02B7); \u0268 p\u0103strat \xEEn \xEEmblu, \xEEmflu, \xEEntru (redat ca lexical).", "Mid vowels close towards i, \u0268, u or intermediate (the commonest e\u2192i: di, di la; only de\u2192di is rendered); devoiced final i and u (p\u0103curar\u02B2, cer\u02B2\u02B7); \u0268 kept in \xEEmblu, \xEEmflu, \xEEntru (rendered as a word list).")
      ),
      sec(
        f("Morfologie \u0219i lexic (descrise, neredate)", "Morphology and lexis (described, not rendered)"),
        f("a meu; aista, aiasta; lucr\u0103, m\u0103 ru\u0219in, str\u0103luce; \xEEmp\u0103r\u021B\u0103sc, omor\u0103sc, sim\u021B\u0103sc; spuj, viw, viind; o dz\u0268s/or dz\u0268s; s\u0103 deie, steie, beie, vreie; m-am fost dus; ad\u0103, vin\u0103; scurt\u0103ri o fo, Gheo; cuvinte: cu\u0219\u0103i, cocon, pup, potic\u0103, zierme.", "a meu; aista, aiasta; lucr\u0103, m\u0103 ru\u0219in, str\u0103luce; \xEEmp\u0103r\u021B\u0103sc, omor\u0103sc, sim\u021B\u0103sc; spuj, viw, viind; o dz\u0268s/or dz\u0268s; s\u0103 deie, steie, beie, vreie; m-am fost dus; ad\u0103, vin\u0103; shortenings o fo, Gheo; words: cu\u0219\u0103i, cocon, pup, potic\u0103, zierme.")
      )
    ] },
    transilvania: { title: f("Transilvania", "Transylvania"), sections: [
      sec(
        f("Structur\u0103", "Structure"),
        f("Mozaic de variet\u0103\u021Bi de tranzi\u021Bie (Weigand 1908); cu c\xE2t a\u0219ezarea e mai veche, cu at\xE2t f\u0103r\xE2mi\u021Barea e mai mare (Petrovici 1941). Cri\u0219ana se deosebe\u0219te cel mai u\u0219or, apoi Maramure\u0219ul; mai pu\u021Bin distincte sunt o zon\u0103 nord-estic\u0103 \u0219i una central-sudic\u0103. Iv\u0103nescu deosebe\u0219te nord-estul, centrul \u0219i sudul. Pentru centru-sud nu s-au g\u0103sit tr\u0103s\u0103turi proprii.", "A mosaic of transition varieties (Weigand 1908); the older the settlement, the greater the fragmentation (Petrovici 1941). Cri\u0219ana is the easiest to tell apart, then Maramure\u0219; less distinct are a north-eastern and a central-southern area. Iv\u0103nescu distinguishes the north-east, centre and south. No own features were found for the centre-south."),
        f("Nord-estul: la vest de linia Turda\u2013Cluj\u2013Dej, la est de creasta Carpa\u021Bilor Orientali (Rus 2020, dup\u0103 Fr\u0103\u021Bil\u0103 2010). Individualitatea lui e atestat\u0103 din textele secolului al XVI-lea.", "The north-east: west of the Turda\u2013Cluj\u2013Dej line, east of the crest of the Eastern Carpathians (Rus 2020, after Fr\u0103\u021Bil\u0103 2010). Its individuality is attested from 16th-century texts.")
      ),
      sec(
        f("Neredat", "Not rendered"),
        f("Vocale accentuate deschise (\u025B, \u025C, \u0254), vocale accentuate mai lungi (\u201Ec\xE2ntat\u201D), ritm lent; a \xEEnaintea unei silabe accentuate\u2192\u0259 (pahar\u2192p\u0259har); accent pe prima silab\u0103 \xEEn centru \u0219i vest (s\xFAspin, \xC9mil); accent mutat pe r\u0103d\u0103cin\u0103 (bl\xE1st\u0103m, \xEEnf\u0103\u0219ur, str\xE1cur, m\xE1sur); sursa spune \u0219i c\u0103 \xEEn unele variet\u0103\u021Bi s, z, \u021B sunt urmate de acelea\u0219i schimb\u0103ri dup\u0103 \u0219, j, r.", "Open stressed vowels (\u025B, \u025C, \u0254), longer stressed vowels (\u201Csinging\u201D), slow rhythm; a before a stressed syllable\u2192\u0259 (pahar\u2192p\u0259har); first-syllable stress in the centre and west (s\xFAspin, \xC9mil); stress moved to the root (bl\xE1st\u0103m, \xEEnf\u0103\u0219ur, str\xE1cur, m\xE1sur); the source also says that in some varieties the same changes occur after \u0219, j, r.")
      ),
      sec(
        f("Nord-est \u2014 alte puncte", "North-east \u2014 other points"),
        f("Guia (2015, 2020): la Ilva Mare (Bistri\u021Ba-N\u0103s\u0103ud) k' \u0219i g' se africatizeaz\u0103 (cur\xE9\u0109, \u0109ip\xE9ri) \u0219i labialele au stadii intermediare (p\u0109\xE9lia, b\u011Diholi\u021B\u0103, m\u0144eru); la Vin\u021Bu de Jos \u0219i C\u0103p\xE2lna (Alba, partea ardeleneasc\u0103) palatalizarea labialelor e \xEEn stadiu final; la Odoreu (Satu Mare) k', g' se confund\u0103 cu t', d'. Hunedoara (Petrila): labialele nu se palatalizeaz\u0103.", "Guia (2015, 2020): at Ilva Mare (Bistri\u021Ba-N\u0103s\u0103ud) k' and g' are africatized (cur\xE9\u0109, \u0109ip\xE9ri) and labials have intermediate stages (p\u0109\xE9lia, b\u011Diholi\u021B\u0103, m\u0144eru); at Vin\u021Bu de Jos and C\u0103p\xE2lna (Alba, Transylvanian part) labial palatalization is in its final stage; at Odoreu (Satu Mare) k', g' are confused with t', d'. Hunedoara (Petrila): labials are not palatalized.")
      ),
      sec(
        f("Morfologie \u0219i lexic (descrise, neredate)", "Morphology and lexis (described, not rendered)"),
        f("Absen\u021Ba sufixelor -ez, -eaz\u0103, -esc, -e\u0219te la unele verbe (lucr\u0103/lucru, pr\u0103d, s\u0103r, se osp\u0103t\u0103, se \xEEnv\xEErte); forme iotacizate la verbele cu tema \xEEn -n, -r (s\u0103 sp\xFAie, spui, \u021B\xEEu, s\u0103 \u021B\xEEie); maghiare: darab(\u0103), gazd\u0103, papric\u0103; germane: fain(\u0103), maist\u0103r, \u0219u\u0219t\u0103r, ti\u0219l\u0103r.", "Absence of the suffixes -ez, -eaz\u0103, -esc, -e\u0219te in some verbs (lucr\u0103/lucru, pr\u0103d, s\u0103r, se osp\u0103t\u0103, se \xEEnv\xEErte); iotacized forms in verbs with an -n, -r stem (s\u0103 sp\xFAie, spui, \u021B\xEEu, s\u0103 \u021B\xEEie); Hungarian loans: darab(\u0103), gazd\u0103, papric\u0103; German loans: fain(\u0103), maist\u0103r, \u0219u\u0219t\u0103r, ti\u0219l\u0103r.")
      )
    ] }
  };
  var ALTELE = { title: f("Variet\u0103\u021Bi f\u0103r\u0103 pagin\u0103", "Varieties without a page"), sections: [
    sec(
      f("Valea Timocului (Serbia)", "Timok Valley (Serbia)"),
      f("Dou\u0103 grupuri principale: ungureni la vest (\xEEntre Morava, Crna Reka, Dun\u0103re \u0219i Timoc), cu grai apropiat de cel b\u0103n\u0103\u021Bean, \u0219i \u021B\u0103rani la est (Klju\u010D, Krajina Negotinului), cu grai asem\u0103n\u0103tor cu vestul Olteniei, pe care Petrovici (1942) \xEEl apropie \u0219i de valea Alm\u0103jului \u0219i de sudul Banatului. Alte surse adaug\u0103 muntenii (\xEEn centru, grai amestecat) \u0219i bufanii (Majdanpek). Sursele citite nu dau reguli fonetice, deci nu exist\u0103 pagini. [OEAW \u2013 Sorescu-Marinkovi\u0107]", "Two main groups: Ungureni in the west (between the Morava, Crna Reka, Danube and Timok), with speech close to Banat, and \u021A\u0103rani in the east (Klju\u010D, Negotin Krajina), with speech similar to western Oltenia, which Petrovici (1942) also relates to the Alm\u0103j valley and southern Banat. Other sources add the Munteni (in the centre, mixed speech) and the Bufani (Majdanpek). The sources read give no phonetic rules, so there are no pages. [OEAW \u2013 Sorescu-Marinkovi\u0107]")
    ),
    sec(
      f("Alte variet\u0103\u021Bi numite f\u0103r\u0103 tr\u0103s\u0103turi fonetice", "Other varieties named without phonetic features"),
      f("Muntenia central\u0103 \u0219i sudic\u0103; Dobrogea; Oltenia (nord, centru, vest); Bihor \u0219i valea Some\u0219ului; ramurile Maramure\u0219ului; Banat est, nord \u0219i nord-est (Ha\u021Beg); Transilvania centru-sud. Sunt tratate \xEEn sec\u021Biunile regiunilor lor.", "Central and southern Muntenia; Dobruja; Oltenia (north, centre, west); Bihor and the Some\u0219 valley; the Maramure\u0219 branches; Banat east, north and north-east (Ha\u021Beg); Transylvania centre-south. They are discussed in their regions' sections.")
    )
  ] };
  var FAMILY = { muntenia: "muntenia", moldova: "moldova", basarabia: "basarabia", bucovina: "bucovina", banat: "banat", crisana: "crisana", maramures: "maramures", transilvania: "transilvania" };

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
  var SAMPLES = ["Seara, b\u0103iatul a venit cu p\xE2ine \u0219i br\xE2nz\u0103, apoi a fiert cinci ou\u0103 pentru cin\u0103.", "M\xE2ine merg la pia\u021B\u0103 s\u0103 cump\u0103r pe\u0219te, vin \u0219i pu\u021Bin\u0103 br\xE2nz\u0103, dar nu \u0219tiu c\xE2nd m\u0103 \xEEntorc.", "Fratele meu a luat p\xE2inea \u0219i a mers cu c\xE2inele dup\u0103 lemne, dar s-a \xEEntors seara.", "Seara, fetele mele vin acas\u0103, m\u0103n\xE2nc\u0103 p\xE2ine cu miere \u0219i se uit\u0103 la televizor."];
  var T = {
    ro: {
      title: "Graiuri rom\xE2ne\u0219ti",
      sub: "Scrie un text \xEEn rom\xE2n\u0103 standard \u0219i vezi cum ar suna \xEEntr-un grai. Pentru fiecare regul\u0103 po\u021Bi vedea sursa \u0219i zona \xEEn care a fost studiat\u0103.",
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
      tabs: { src: "Surse (A\u2013Z)", res: "Cercetare" },
      resFor: "Cercetare pentru:",
      cite: "Citare",
      covers: "Ce con\u021Bine",
      areaS: "Unde s-a cules",
      caveat: "Rezerve",
      open: "Deschide sursa",
      exFor: "Exemple pentru:",
      tryIt: "Pune textul \xEEn c\xE2mp",
      none2: "Nu sunt exemple pentru acest grai.",
      noteRule: "Not\u0103:",
      rules: "Reguli",
      intro: "Exemple reale."
    },
    en: {
      title: "Romanian dialects",
      sub: "Type standard Romanian and see how it might sound in a dialect. For every rule you can see the source, and the area where it was studied.",
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
      tabs: { src: "Sources (A\u2013Z)", res: "Research" },
      resFor: "Research for:",
      cite: "Citation",
      covers: "What it covers",
      areaS: "Where it was collected",
      caveat: "Caveats",
      open: "Open the source",
      exFor: "Examples for:",
      tryIt: "Put this text in the box",
      none2: "There are no examples for this dialect.",
      noteRule: "Note:",
      rules: "Rules",
      intro: "Real examples."
    }
  };
  var LEG = [["\u0107 \u0111", "t\u0283\u02B2 d\u0292\u02B2", "ro: \u201Eci\u201D, \u201Egi\u201D moi (Banat)", "soft \u201Cci\u201D, \u201Cgi\u201D (Banat)"], ["\u0144 \u013A \u0155", "n\u02B2 l\u02B2 r\u02B2", "n, l, r muiate", "softened n, l, r"], ["\u02B2", "", "dup\u0103 liter\u0103: pronun\u021Bie \u201Emuiat\u0103\u201D, cu un i foarte scurt", "after a letter: \u201Csoftened\u201D, with a very short i"], ["\u02B0", "", "o suflare de aer (aspirat): p\u02B0", "a puff of air (aspirated): p\u02B0"], ["\u0125", "\u0266\u02B2", "un h sonor, muiat", "a voiced, softened h"], ["\u0142", "\u026B", "l \u201Egros\u201D (Oa\u0219)", "\u201Cdark\u201D l (Oa\u0219)"], ["\xE9, j\xE9", "\u025B", "e deschis (avea\u2192av\xE9, fete\u2192f\xE9te)", "open e (avea\u2192av\xE9, fete\u2192f\xE9te)"], ["\u0115", "\u0259", "e central dup\u0103 c, g (cer\u2192c\u0115r): c, g r\u0103m\xE2n ca \xEEn \u201Ece\u201D", "central e after c, g (cer\u2192c\u0115r): c, g stay as in \u201Cce\u201D"], ["\u0219\u02B2 j\u02B2", "\u0283\u02B2 \u0292\u02B2", "\u0219, j muiate", "softened \u0219, j"], ["\xEE, \xE2", "\u0268", "ca \xEEn \u201Ec\xE2nd\u201D", "as in Romanian \u201Cc\xE2nd\u201D"], ["\u0219, \u021B, \u0103", "\u0283 ts \u0259", "ca \xEEn rom\xE2n\u0103", "as in Romanian"]];
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
  var groupsSorted = () => Object.entries(GROUPS).sort((x, y) => L2(x[1]).localeCompare(L2(y[1]), lang));
  function fillSelect() {
    const sel = $("dia"), cur = sel.value || "muntenesc";
    sel.innerHTML = groupsSorted().map(([g, gd]) => `<optgroup label="${esc(L2(gd))}">` + Object.entries(DIALECTS).filter(([, d]) => d.group === g).map(([k, d]) => `<option value="${k}">${esc(L2(d))}</option>`).join("") + "</optgroup>").join("");
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
    $("w").textContent = toDialect(src, id);
    $("p").textContent = src ? toIPA(toDialect(src, id)) : "";
    $("info").innerHTML = `<h3>${esc(t.area)}</h3><p>${esc(L2(d.area))}</p><h3>${esc(t.diff)}</h3><p>${esc(L2(d.note))}</p>`;
    $("c").innerHTML = d.rules.length ? `<ul class="rules">` + [...new Set(d.rules)].map((r) => {
      const R2 = RULES[r];
      return `<li>${esc(L2(R2))} <span class="ex">(${esc(R2.ex)})</span>${R2.note ? `<div class="rnote">${esc(t.noteRule)} ${esc(L2(R2.note))}</div>` : ""}<div>${chips(R2.src)}</div></li>`;
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
      tabs.innerHTML = ["src", "res"].map((k) => `<button role="tab" data-tab="${k}" aria-selected="${tab === k}">${esc(t.tabs[k])}</button>`).join("");
    } else tabs.hidden = true;
    const b = $("p-body");
    b.innerHTML = panel === "examples" ? examplesHTML(id, d, t) : tab === "src" ? sourcesHTML(t) : researchHTML(d, t);
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
    return `<label for="p-dia">${esc(T[lang].exFor)}</label><select id="p-dia">${groupsSorted().map(([g, gd]) => `<optgroup label="${esc(L2(gd))}">` + Object.entries(DIALECTS).filter(([, x]) => x.group === g).map(([k, x]) => `<option value="${k}"${k === id ? " selected" : ""}>${esc(L2(x))}</option>`).join("") + "</optgroup>").join("")}</select>`;
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
  <div class="meta"><b>${esc(t.rules)}:</b> ${used[k] ? used[k].size : 0}</div>
  <div class="meta"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(t.open)} \u2197</a></div></div>`;
    }).join("");
  }
  function sect(sections) {
    return sections.map((s) => `<h3>${esc(L2(s.h))}</h3><ul>${s.i.map((i) => `<li>${esc(L2(i))}</li>`).join("")}</ul>`).join("");
  }
  function researchHTML(d, t) {
    const r = RESEARCH[FAMILY[d.group]];
    return `<p class="muted">${esc(t.resFor)} <b>${esc(L2(r.title))}</b></p>` + sect(r.sections) + `<h3 style="margin-top:1.4rem">${esc(L2(ALTELE.title))}</h3>` + sect(ALTELE.sections).replace(/<h3>/g, '<h3 class="sub">');
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
