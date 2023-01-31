window.onkeydown = function(e) {
    return !(e.keyCode == 32);
};

/*
  Handles a click on the song played progress bar.
*/
document.getElementById('song-played-progress').addEventListener('click', function( e ){
  var offset = this.getBoundingClientRect();
  var x = e.pageX - offset.left;

  Amplitude.setSongPlayedPercentage( ( parseFloat( x ) / parseFloat( this.offsetWidth) ) * 100 );
});

document.querySelector('img[data-amplitude-song-info="cover_art_url"]').style.height = document.querySelector('img[data-amplitude-song-info="cover_art_url"]').offsetWidth + 'px';

Amplitude.init({
  "shuffle_on": true,
  "bindings": {
    37: 'prev',
    39: 'next',
    32: 'play_pause'
  },
  "songs": [
    {
      "name": "Erynn Olok And Blythe",
      "url": "./commercials/en-GB/illusionary-instruments/erynn-olok-and-blythe/16752057422760/commercial.mp3",
      "artist": "Illusionary Instruments",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Erolar Eira And Darion",
      "url": "./commercials/en-GB/sigil-design/erolar-eira-and-darion/16752062784960/commercial.mp3",
      "artist": "Sigil Design",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Fira Elowen",
      "url": "./commercials/en-GB/conjuring-tutoring/fira-elowen/16752057548270/commercial.mp3",
      "artist": "Conjuring Tutoring",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Zorvar Order",
      "url": "./commercials/en-GB/mystical-bookbinding/zorvar-order/16752070964960/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Gorik And Sons",
      "url": "./commercials/en-GB/portal-navigation/gorik-and-sons/16752066149060/commercial.mp3",
      "artist": "Portal Navigation",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Bryn Lia And Garvin",
      "url": "./commercials/en-GB/familiar-breeding-and-training/bryn-lia-and-garvin/16752067602140/commercial.mp3",
      "artist": "Familiar Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Dahlia And Sons",
      "url": "./commercials/en-GB/charms-and-talismans-trading/dahlia-and-sons/16752063867800/commercial.mp3",
      "artist": "Charms And Talismans Trading",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Sten Tova And Laurin",
      "url": "./commercials/en-GB/magical-candle-making/sten-tova-and-laurin/16752065246140/commercial.mp3",
      "artist": "Magical Candle Making",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Finley Hestia",
      "url": "./commercials/en-GB/spellcasting-tools/finley-hestia/16752059991930/commercial.mp3",
      "artist": "Spellcasting Tools",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Edith Guild",
      "url": "./commercials/en-GB/astral-projection-and-magical-spell-components/edith-guild/16752062254120/commercial.mp3",
      "artist": "Astral Projection And Magical Spell Components",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Marik Alliance",
      "url": "./commercials/en-GB/demon-summoning/marik-alliance/16752069575140/commercial.mp3",
      "artist": "Demon Summoning",
      "cover_art_url": "assets/img/krang/krang-radio-061.jpg"
    },
    {
      "name": "Deryn House",
      "url": "./commercials/en-GB/magic-forensics-and-crime-scene-investigation/deryn-house/16752068417250/commercial.mp3",
      "artist": "Magic Forensics And Crime Scene Investigation",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Phelan And Sons",
      "url": "./commercials/en-GB/spirit-conjuring/phelan-and-sons/16752061973270/commercial.mp3",
      "artist": "Spirit Conjuring",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Vadim Nolvar",
      "url": "./commercials/en-GB/magical-discovery/vadim-nolvar/16752066327940/commercial.mp3",
      "artist": "Magical Discovery",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Seamus Order",
      "url": "./commercials/en-GB/ritual-enchanting/seamus-order/16752060489610/commercial.mp3",
      "artist": "Ritual Enchanting",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Nalani Isiah And Kian",
      "url": "./commercials/en-GB/mysticism-supplies/nalani-isiah-and-kian/16752063260330/commercial.mp3",
      "artist": "Mysticism Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Ziva Guild",
      "url": "./commercials/en-GB/ritual-enchanting/ziva-guild/16752065684040/commercial.mp3",
      "artist": "Ritual Enchanting",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Zorvar Order",
      "url": "./commercials/en-GB/charm-crafting/zorvar-order/16752061017670/commercial.mp3",
      "artist": "Charm Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-039.jpg"
    },
    {
      "name": "Isla Gavril",
      "url": "./commercials/en-GB/conjuring-tutoring/isla-gavril/16752065909170/commercial.mp3",
      "artist": "Conjuring Tutoring",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Jana Nox And Elik",
      "url": "./commercials/en-GB/summoning-services/jana-nox-and-elik/16752059584990/commercial.mp3",
      "artist": "Summoning Services",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Vanya Kallan",
      "url": "./commercials/en-GB/enchantment-emporium/vanya-kallan/16752063319000/commercial.mp3",
      "artist": "Enchantment Emporium",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Wulf Silar",
      "url": "./commercials/en-GB/mystic-jewelry-crafting/wulf-silar/16752067492460/commercial.mp3",
      "artist": "Mystic Jewelry Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-042.jpg"
    },
    {
      "name": "Kya Galadon",
      "url": "./commercials/en-GB/potion-preparation/kya-galadon/16752056918570/commercial.mp3",
      "artist": "Potion Preparation",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Landon Arvar And Reya",
      "url": "./commercials/en-GB/crystal-and-gem-mining-and-refinement/landon-arvar-and-reya/16752069030310/commercial.mp3",
      "artist": "Crystal And Gem Mining And Refinement",
      "cover_art_url": "assets/img/krang/krang-radio-090.jpg"
    },
    {
      "name": "Silvar Kyler",
      "url": "./commercials/en-GB/illusionary-fashion-design-and-tailoring/silvar-kyler/16752058477590/commercial.mp3",
      "artist": "Illusionary Fashion Design And Tailoring",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Belvar Olok",
      "url": "./commercials/en-GB/necromancy-supplies/belvar-olok/16752067242830/commercial.mp3",
      "artist": "Necromancy Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Tancred Kaylee And Eder",
      "url": "./commercials/en-GB/elemental-summoning-and-binding/tancred-kaylee-and-eder/16752070700270/commercial.mp3",
      "artist": "Elemental Summoning And Binding",
      "cover_art_url": "assets/img/krang/krang-radio-067.jpg"
    },
    {
      "name": "Ronan Order",
      "url": "./commercials/en-GB/conjuring-tutoring/ronan-order/16752065046010/commercial.mp3",
      "artist": "Conjuring Tutoring",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Gorvar Keiran And Eirwen",
      "url": "./commercials/en-GB/spellcasting-component-trading/gorvar-keiran-and-eirwen/16752068866960/commercial.mp3",
      "artist": "Spellcasting Component Trading",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Cora Faren",
      "url": "./commercials/en-GB/magical-artifact-and-relic-restoration/cora-faren/16752059821380/commercial.mp3",
      "artist": "Magical Artifact And Relic Restoration",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Thalen Panya",
      "url": "./commercials/en-GB/demonology-consultation/thalen-panya/16752063493550/commercial.mp3",
      "artist": "Demonology Consultation",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Zolmir And Sons",
      "url": "./commercials/en-GB/mystical-bookbinding/zolmir-and-sons/16752070408190/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Silvar Xalvador And Kora",
      "url": "./commercials/en-GB/dragon-breeding-and-training/silvar-xalvador-and-kora/16752068627570/commercial.mp3",
      "artist": "Dragon Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Elowen Alliance",
      "url": "./commercials/en-GB/ancient-artifacts/elowen-alliance/16752070015950/commercial.mp3",
      "artist": "Ancient Artifacts",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Xena Kya",
      "url": "./commercials/en-GB/magical-creatures-breeding/xena-kya/16752064166220/commercial.mp3",
      "artist": "Magical Creatures Breeding",
      "cover_art_url": "assets/img/krang/krang-radio-066.jpg"
    },
    {
      "name": "Darion Lilah",
      "url": "./commercials/en-GB/blood-magic-consulting/darion-lilah/16752068208110/commercial.mp3",
      "artist": "Blood Magic Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Eogan Sigurd And Lia",
      "url": "./commercials/en-GB/ghost-hunting-and-exorcism-services/eogan-sigurd-and-lia/16752063210840/commercial.mp3",
      "artist": "Ghost Hunting And Exorcism Services",
      "cover_art_url": "assets/img/krang/krang-radio-078.jpg"
    },
    {
      "name": "Aric Alliance",
      "url": "./commercials/en-GB/ghost-hunting-and-exorcism-services/aric-alliance/16752058782180/commercial.mp3",
      "artist": "Ghost Hunting And Exorcism Services",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Kyla Niall And Darmok",
      "url": "./commercials/en-GB/monster-hunting-and-containment/kyla-niall-and-darmok/16752059136740/commercial.mp3",
      "artist": "Monster Hunting And Containment",
      "cover_art_url": "assets/img/krang/krang-radio-002.jpg"
    },
    {
      "name": "Thane And Sons",
      "url": "./commercials/en-GB/divine-spellcasting-services/thane-and-sons/16752059638130/commercial.mp3",
      "artist": "Divine Spellcasting Services",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Ione And Sons",
      "url": "./commercials/en-GB/psychic-services/ione-and-sons/16752067126170/commercial.mp3",
      "artist": "Psychic Services",
      "cover_art_url": "assets/img/krang/krang-radio-053.jpg"
    },
    {
      "name": "Ashleen Kyran",
      "url": "./commercials/en-GB/rune-forging/ashleen-kyran/16752057617250/commercial.mp3",
      "artist": "Rune Forging",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Sheva Morrigan",
      "url": "./commercials/en-GB/necromancy-ritual-planning-and-coordination/sheva-morrigan/16752057172430/commercial.mp3",
      "artist": "Necromancy Ritual Planning And Coordination",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Kya Guild",
      "url": "./commercials/en-GB/astral-cartography/kya-guild/16752062899670/commercial.mp3",
      "artist": "Astral Cartography",
      "cover_art_url": "assets/img/krang/krang-radio-076.jpg"
    },
    {
      "name": "Kostya Nieve And Isvar",
      "url": "./commercials/en-GB/dragon-hunting/kostya-nieve-and-isvar/16752070132200/commercial.mp3",
      "artist": "Dragon Hunting",
      "cover_art_url": "assets/img/krang/krang-radio-023.jpg"
    },
    {
      "name": "Halia Rhys",
      "url": "./commercials/en-GB/astral-travel/halia-rhys/16752070184160/commercial.mp3",
      "artist": "Astral Travel",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Wulfric Eirwen",
      "url": "./commercials/en-GB/arcane-architecture/wulfric-eirwen/16752061734360/commercial.mp3",
      "artist": "Arcane Architecture",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Cadmar House",
      "url": "./commercials/en-GB/magical-weaponry/cadmar-house/16752064402250/commercial.mp3",
      "artist": "Magical Weaponry",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Urien Yuki And Hestia",
      "url": "./commercials/en-GB/demonology-consultation/urien-yuki-and-hestia/16752056975630/commercial.mp3",
      "artist": "Demonology Consultation",
      "cover_art_url": "assets/img/krang/krang-radio-033.jpg"
    },
    {
      "name": "Arielle Sarai And Tolar",
      "url": "./commercials/en-GB/mystical-bookbinding/arielle-sarai-and-tolar/16752069641510/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-001.jpg"
    },
    {
      "name": "Dessa Kostya",
      "url": "./commercials/en-GB/dragon-breeding-and-training/dessa-kostya/16752067662860/commercial.mp3",
      "artist": "Dragon Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Zana Sariel",
      "url": "./commercials/en-GB/necromancy-supplies/zana-sariel/16752062559900/commercial.mp3",
      "artist": "Necromancy Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Maia Alliance",
      "url": "./commercials/en-GB/mystic-machinery/maia-alliance/16752071058850/commercial.mp3",
      "artist": "Mystic Machinery",
      "cover_art_url": "assets/img/krang/krang-radio-092.jpg"
    },
    {
      "name": "Darrel Order",
      "url": "./commercials/en-GB/mystical-bookbinding/darrel-order/16752068968940/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Rhea Jadzia",
      "url": "./commercials/en-GB/dragon-hunting/rhea-jadzia/16752060238280/commercial.mp3",
      "artist": "Dragon Hunting",
      "cover_art_url": "assets/img/krang/krang-radio-026.jpg"
    },
    {
      "name": "Bysa Order",
      "url": "./commercials/en-GB/spellcasting-tools/bysa-order/16752068803620/commercial.mp3",
      "artist": "Spellcasting Tools",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Dara Corvar And Bryony",
      "url": "./commercials/en-GB/illusionary-fashion-design-and-tailoring/dara-corvar-and-bryony/16752064055350/commercial.mp3",
      "artist": "Illusionary Fashion Design And Tailoring",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Riana Order",
      "url": "./commercials/en-GB/chant-crafting/riana-order/16752068687250/commercial.mp3",
      "artist": "Chant Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-017.jpg"
    },
    {
      "name": "Aedan Elowen And Kya",
      "url": "./commercials/en-GB/runic-inscriptions/aedan-elowen-and-kya/16752061792390/commercial.mp3",
      "artist": "Runic Inscriptions",
      "cover_art_url": "assets/img/krang/krang-radio-089.jpg"
    },
    {
      "name": "Noemi House",
      "url": "./commercials/en-GB/mystic-potion-brewing/noemi-house/16752057221000/commercial.mp3",
      "artist": "Mystic Potion Brewing",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Jaegar Order",
      "url": "./commercials/en-GB/mystical-bookbinding/jaegar-order/16752061211400/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Beorn Wrenn And Eris",
      "url": "./commercials/en-GB/ritual-enchanting/beorn-wrenn-and-eris/16752070250590/commercial.mp3",
      "artist": "Ritual Enchanting",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Aelar Olorin And Ziva",
      "url": "./commercials/en-GB/ethereal-and-astral-constructs-creation/aelar-olorin-and-ziva/16752066528790/commercial.mp3",
      "artist": "Ethereal And Astral Constructs Creation",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Raquel Sian And Elinor",
      "url": "./commercials/en-GB/dragon-training/raquel-sian-and-elinor/16752067187460/commercial.mp3",
      "artist": "Dragon Training",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Liana Remi",
      "url": "./commercials/en-GB/mystic-jewelry-trading/liana-remi/16752062500410/commercial.mp3",
      "artist": "Mystic Jewelry Trading",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Malachi Nalia And Kallan",
      "url": "./commercials/en-GB/magical-item-crafting/malachi-nalia-and-kallan/16752058209270/commercial.mp3",
      "artist": "Magical Item Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-045.jpg"
    },
    {
      "name": "Garek Guild",
      "url": "./commercials/en-GB/magitek-devices/garek-guild/16752062203540/commercial.mp3",
      "artist": "Magitek Devices",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Gavril Uma",
      "url": "./commercials/en-GB/crystal-and-gem-mining-and-refinement/gavril-uma/16752065564990/commercial.mp3",
      "artist": "Crystal And Gem Mining And Refinement",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Eilwen House",
      "url": "./commercials/en-GB/mystical-bookbinding/eilwen-house/16752066386200/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Kailan Hana And Portia",
      "url": "./commercials/en-GB/astral-projection-consultation/kailan-hana-and-portia/16752066272650/commercial.mp3",
      "artist": "Astral Projection Consultation",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Beorn Order",
      "url": "./commercials/en-GB/fortune-telling-and-divination/beorn-order/16752067709830/commercial.mp3",
      "artist": "Fortune Telling And Divination",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Zorvar House",
      "url": "./commercials/en-GB/mystic-potion-supplies-and-ingredients/zorvar-house/16752058947050/commercial.mp3",
      "artist": "Mystic Potion Supplies And Ingredients",
      "cover_art_url": "assets/img/krang/krang-radio-081.jpg"
    },
    {
      "name": "Thea House",
      "url": "./commercials/en-GB/necromancy-reagent-harvesting-and-sales/thea-house/16752067803760/commercial.mp3",
      "artist": "Necromancy Reagent Harvesting And Sales",
      "cover_art_url": "assets/img/krang/krang-radio-024.jpg"
    },
    {
      "name": "Elio Bayne",
      "url": "./commercials/en-GB/dimension-and-plane-travel-services/elio-bayne/16752058057650/commercial.mp3",
      "artist": "Dimension And Plane Travel Services",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Heber Alliance",
      "url": "./commercials/en-GB/magical-creature-breeding-and-training/heber-alliance/16752069807210/commercial.mp3",
      "artist": "Magical Creature Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Hestia Kian And Sariya",
      "url": "./commercials/en-GB/spellcasting-potion-brewing/hestia-kian-and-sariya/16752059345960/commercial.mp3",
      "artist": "Spellcasting Potion Brewing",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Elvira Darmok",
      "url": "./commercials/en-GB/mystic-scrolls-and-books/elvira-darmok/16752063743370/commercial.mp3",
      "artist": "Mystic Scrolls And Books",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Erick Sarena And Yola",
      "url": "./commercials/en-GB/golem-control/erick-sarena-and-yola/16752060764010/commercial.mp3",
      "artist": "Golem Control",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Orin Order",
      "url": "./commercials/en-GB/mystic-potion-and-concoction-supplies/orin-order/16752065371380/commercial.mp3",
      "artist": "Mystic Potion And Concoction Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Fira Aric",
      "url": "./commercials/en-GB/psychic-services/fira-aric/16752067001260/commercial.mp3",
      "artist": "Psychic Services",
      "cover_art_url": "assets/img/krang/krang-radio-046.jpg"
    },
    {
      "name": "Lilah Skyla",
      "url": "./commercials/en-GB/summoning-services/lilah-skyla/16752058329180/commercial.mp3",
      "artist": "Summoning Services",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Valeria Alliance",
      "url": "./commercials/en-GB/soul-binding-and-manipulation/valeria-alliance/16752064601590/commercial.mp3",
      "artist": "Soul Binding And Manipulation",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Ishar Keiran And Sten",
      "url": "./commercials/en-GB/wand-carving/ishar-keiran-and-sten/16752063137560/commercial.mp3",
      "artist": "Wand Carving",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Owen Jornar",
      "url": "./commercials/en-GB/blood-magic-consulting/owen-jornar/16752059693480/commercial.mp3",
      "artist": "Blood Magic Consulting",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Hana Zevran",
      "url": "./commercials/en-GB/astral-and-ethereal-real-estate-development/hana-zevran/16752070909980/commercial.mp3",
      "artist": "Astral And Ethereal Real Estate Development",
      "cover_art_url": "assets/img/krang/krang-radio-063.jpg"
    },
    {
      "name": "Fynn Macon And Eder",
      "url": "./commercials/en-GB/binding-and-containment-services-for-extraplanar-beings/fynn-macon-and-eder/16752061400240/commercial.mp3",
      "artist": "Binding And Containment Services For Extraplanar Beings",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Ilona Noelle",
      "url": "./commercials/en-GB/magical-creature-trading/ilona-noelle/16752066580880/commercial.mp3",
      "artist": "Magical Creature Trading",
      "cover_art_url": "assets/img/krang/krang-radio-073.jpg"
    },
    {
      "name": "Lia Aelwen And Bronwyn",
      "url": "./commercials/en-GB/portal-creation-and-maintenance-services/lia-aelwen-and-bronwyn/16752063683190/commercial.mp3",
      "artist": "Portal Creation And Maintenance Services",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Lira Gaia And Greer",
      "url": "./commercials/en-GB/spellcasting-training-and-tutoring/lira-gaia-and-greer/16752060310320/commercial.mp3",
      "artist": "Spellcasting Training And Tutoring",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Thorgal Kysa",
      "url": "./commercials/en-GB/mystic-jewelry-crafting/thorgal-kysa/16752059445080/commercial.mp3",
      "artist": "Mystic Jewelry Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Neeraj Caladon",
      "url": "./commercials/en-GB/mystic-jewelry-crafting/neeraj-caladon/16752067373610/commercial.mp3",
      "artist": "Mystic Jewelry Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-038.jpg"
    },
    {
      "name": "Talon Liana",
      "url": "./commercials/en-GB/magic-item-enchanting-and-customization/talon-liana/16752064915360/commercial.mp3",
      "artist": "Magic Item Enchanting And Customization",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Ingmar Oona And Galina",
      "url": "./commercials/en-GB/magic-trap-construction-and-disarmament/ingmar-oona-and-galina/16752066461560/commercial.mp3",
      "artist": "Magic Trap Construction And Disarmament",
      "cover_art_url": "assets/img/krang/krang-radio-077.jpg"
    },
    {
      "name": "Zaynah Arvar And Fauve",
      "url": "./commercials/en-GB/arcane-refining/zaynah-arvar-and-fauve/16752057062400/commercial.mp3",
      "artist": "Arcane Refining",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Paloma Fola And Qorik",
      "url": "./commercials/en-GB/spellweaving/paloma-fola-and-qorik/16752064230870/commercial.mp3",
      "artist": "Spellweaving",
      "cover_art_url": "assets/img/krang/krang-radio-044.jpg"
    },
    {
      "name": "Narvik Erick",
      "url": "./commercials/en-GB/ritual-tutoring/narvik-erick/16752064859590/commercial.mp3",
      "artist": "Ritual Tutoring",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Corvar Zana And Begona",
      "url": "./commercials/en-GB/dark-arts-supplies/corvar-zana-and-begona/16752062845480/commercial.mp3",
      "artist": "Dark Arts Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Jareth Hroki",
      "url": "./commercials/en-GB/witchcraft-and-wizardry-supplies/jareth-hroki/16752062725480/commercial.mp3",
      "artist": "Witchcraft And Wizardry Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-041.jpg"
    },
    {
      "name": "Oona Corin",
      "url": "./commercials/en-GB/enchanting-services/oona-corin/16752058648350/commercial.mp3",
      "artist": "Enchanting Services",
      "cover_art_url": "assets/img/krang/krang-radio-091.jpg"
    },
    {
      "name": "Qorik Grom And Eorl",
      "url": "./commercials/en-GB/necromantic-novelties/qorik-grom-and-eorl/16752068054230/commercial.mp3",
      "artist": "Necromantic Novelties",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Valeria Kysa And Tola",
      "url": "./commercials/en-GB/monster-hunting-and-containment/valeria-kysa-and-tola/16752069962260/commercial.mp3",
      "artist": "Monster Hunting And Containment",
      "cover_art_url": "assets/img/krang/krang-radio-009.jpg"
    },
    {
      "name": "Aelwen Yael",
      "url": "./commercials/en-GB/magic-artifact-appraisal-and-authentication/aelwen-yael/16752060954230/commercial.mp3",
      "artist": "Magic Artifact Appraisal And Authentication",
      "cover_art_url": "assets/img/krang/krang-radio-087.jpg"
    },
    {
      "name": "Eamon Guild",
      "url": "./commercials/en-GB/portal-navigation/eamon-guild/16752059185530/commercial.mp3",
      "artist": "Portal Navigation",
      "cover_art_url": "assets/img/krang/krang-radio-098.jpg"
    },
    {
      "name": "Thalen Leona",
      "url": "./commercials/en-GB/ritualistic-magic-supplies/thalen-leona/16752060363730/commercial.mp3",
      "artist": "Ritualistic Magic Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Olok Alala",
      "url": "./commercials/en-GB/conjuring-constructs/olok-alala/16752062153800/commercial.mp3",
      "artist": "Conjuring Constructs",
      "cover_art_url": "assets/img/krang/krang-radio-075.jpg"
    },
    {
      "name": "Lyla Kyler",
      "url": "./commercials/en-GB/portal-creation-and-maintenance-services/lyla-kyler/16752068277900/commercial.mp3",
      "artist": "Portal Creation And Maintenance Services",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Glorin Caladon",
      "url": "./commercials/en-GB/portal-creation-and-maintenance-services/glorin-caladon/16752061461910/commercial.mp3",
      "artist": "Portal Creation And Maintenance Services",
      "cover_art_url": "assets/img/krang/krang-radio-054.jpg"
    },
    {
      "name": "Rhona Guild",
      "url": "./commercials/en-GB/thaumaturgy-trading/rhona-guild/16752070085740/commercial.mp3",
      "artist": "Thaumaturgy Trading",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Wren Alliance",
      "url": "./commercials/en-GB/spell-component-sourcing/wren-alliance/16752067425940/commercial.mp3",
      "artist": "Spell Component Sourcing",
      "cover_art_url": "assets/img/krang/krang-radio-056.jpg"
    },
    {
      "name": "Toreth Guild",
      "url": "./commercials/en-GB/summoning-services/toreth-guild/16752064531930/commercial.mp3",
      "artist": "Summoning Services",
      "cover_art_url": "assets/img/krang/krang-radio-055.jpg"
    },
    {
      "name": "Harlan Bryn And Lia",
      "url": "./commercials/en-GB/magical-candle-making/harlan-bryn-and-lia/16752057118000/commercial.mp3",
      "artist": "Magical Candle Making",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Baelik Blythe",
      "url": "./commercials/en-GB/astral-travel/baelik-blythe/16752067987150/commercial.mp3",
      "artist": "Astral Travel",
      "cover_art_url": "assets/img/krang/krang-radio-036.jpg"
    },
    {
      "name": "Golar Harland And Cressida",
      "url": "./commercials/en-GB/mystic-jewelry-trading/golar-harland-and-cressida/16752068128790/commercial.mp3",
      "artist": "Mystic Jewelry Trading",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Rianna Kedryn",
      "url": "./commercials/en-GB/arcane-inventions/rianna-kedryn/16752069509990/commercial.mp3",
      "artist": "Arcane Inventions",
      "cover_art_url": "assets/img/krang/krang-radio-021.jpg"
    },
    {
      "name": "Zaira House",
      "url": "./commercials/en-GB/mystical-apothecary/zaira-house/16752065737260/commercial.mp3",
      "artist": "Mystical Apothecary",
      "cover_art_url": "assets/img/krang/krang-radio-086.jpg"
    },
    {
      "name": "Urien Dahlia",
      "url": "./commercials/en-GB/necromancy-reagent-harvesting-and-sales/urien-dahlia/16752065328940/commercial.mp3",
      "artist": "Necromancy Reagent Harvesting And Sales",
      "cover_art_url": "assets/img/krang/krang-radio-015.jpg"
    },
    {
      "name": "Oren And Sons",
      "url": "./commercials/en-GB/binding-and-containment-services-for-extraplanar-beings/oren-and-sons/16752066651860/commercial.mp3",
      "artist": "Binding And Containment Services For Extraplanar Beings",
      "cover_art_url": "assets/img/krang/krang-radio-006.jpg"
    },
    {
      "name": "Yvonne And Sons",
      "url": "./commercials/en-GB/magic-item-enchanting-and-customization/yvonne-and-sons/16752061143950/commercial.mp3",
      "artist": "Magic Item Enchanting And Customization",
      "cover_art_url": "assets/img/krang/krang-radio-019.jpg"
    },
    {
      "name": "Trista Sarai And Galdor",
      "url": "./commercials/en-GB/divine-spellcasting-services/trista-sarai-and-galdor/16752063018140/commercial.mp3",
      "artist": "Divine Spellcasting Services",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Glorik Nalia",
      "url": "./commercials/en-GB/fortune-telling-and-divination/glorik-nalia/16752061909620/commercial.mp3",
      "artist": "Fortune Telling And Divination",
      "cover_art_url": "assets/img/krang/krang-radio-094.jpg"
    },
    {
      "name": "Zuri Merielle",
      "url": "./commercials/en-GB/magical-creature-breeding/zuri-merielle/16752069708000/commercial.mp3",
      "artist": "Magical Creature Breeding",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Maris Sheva And Elwin",
      "url": "./commercials/en-GB/portal-security/maris-sheva-and-elwin/16752065483310/commercial.mp3",
      "artist": "Portal Security",
      "cover_art_url": "assets/img/krang/krang-radio-016.jpg"
    },
    {
      "name": "Owen Rowan And Edric",
      "url": "./commercials/en-GB/spellcasting-devices/owen-rowan-and-edric/16752059292960/commercial.mp3",
      "artist": "Spellcasting Devices",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Oleg Maeve",
      "url": "./commercials/en-GB/spellshaping/oleg-maeve/16752068349770/commercial.mp3",
      "artist": "Spellshaping",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Wulfgar Alliance",
      "url": "./commercials/en-GB/mystic-scrolls-and-books/wulfgar-alliance/16752058375440/commercial.mp3",
      "artist": "Mystic Scrolls And Books",
      "cover_art_url": "assets/img/krang/krang-radio-040.jpg"
    },
    {
      "name": "Gavril Guild",
      "url": "./commercials/en-GB/magical-cartography/gavril-guild/16752062366660/commercial.mp3",
      "artist": "Magical Cartography",
      "cover_art_url": "assets/img/krang/krang-radio-004.jpg"
    },
    {
      "name": "Halvor Jaden And Maelar",
      "url": "./commercials/en-GB/ritualistic-magic-teaching/halvor-jaden-and-maelar/16752070464460/commercial.mp3",
      "artist": "Ritualistic Magic Teaching",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Phelan Jaren And Seamus",
      "url": "./commercials/en-GB/elemental-summoning-and-binding/phelan-jaren-and-seamus/16752065105510/commercial.mp3",
      "artist": "Elemental Summoning And Binding",
      "cover_art_url": "assets/img/krang/krang-radio-035.jpg"
    },
    {
      "name": "Hagan Jareth And Yvonne",
      "url": "./commercials/en-GB/astral-travel-guidance/hagan-jareth-and-yvonne/16752061077450/commercial.mp3",
      "artist": "Astral Travel Guidance",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Kiona And Sons",
      "url": "./commercials/en-GB/astral-travel-guidance/kiona-and-sons/16752060876170/commercial.mp3",
      "artist": "Astral Travel Guidance",
      "cover_art_url": "assets/img/krang/krang-radio-027.jpg"
    },
    {
      "name": "Yannik Conlan And Volmir",
      "url": "./commercials/en-GB/portal-crafting/yannik-conlan-and-volmir/16752061669120/commercial.mp3",
      "artist": "Portal Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-058.jpg"
    },
    {
      "name": "Silar Volik And Myra",
      "url": "./commercials/en-GB/arcane-inventions/silar-volik-and-myra/16752057294170/commercial.mp3",
      "artist": "Arcane Inventions",
      "cover_art_url": "assets/img/krang/krang-radio-084.jpg"
    },
    {
      "name": "Vadim Ilsa",
      "url": "./commercials/en-GB/elemental-crafting/vadim-ilsa/16752059757290/commercial.mp3",
      "artist": "Elemental Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-031.jpg"
    },
    {
      "name": "Hollin Belvar",
      "url": "./commercials/en-GB/psychic-services/hollin-belvar/16752064477370/commercial.mp3",
      "artist": "Psychic Services",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Fyrin Selina And Finley",
      "url": "./commercials/en-GB/magical-weaponry/fyrin-selina-and-finley/16752064000350/commercial.mp3",
      "artist": "Magical Weaponry",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Cadmar Leif And Soren",
      "url": "./commercials/en-GB/shadow-magic/cadmar-leif-and-soren/16752068745420/commercial.mp3",
      "artist": "Shadow Magic",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Arielle Xylah",
      "url": "./commercials/en-GB/mystic-scrolls-and-books/arielle-xylah/16752064282080/commercial.mp3",
      "artist": "Mystic Scrolls And Books",
      "cover_art_url": "assets/img/krang/krang-radio-028.jpg"
    },
    {
      "name": "Devlin Elik And Nareena",
      "url": "./commercials/en-GB/mystical-bookbinding/devlin-elik-and-nareena/16752067307060/commercial.mp3",
      "artist": "Mystical Bookbinding",
      "cover_art_url": "assets/img/krang/krang-radio-079.jpg"
    },
    {
      "name": "Corvar Order",
      "url": "./commercials/en-GB/spellshaping/corvar-order/16752069094670/commercial.mp3",
      "artist": "Spellshaping",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Jaren Ulvar",
      "url": "./commercials/en-GB/magical-creature-breeding-and-training/jaren-ulvar/16752060633260/commercial.mp3",
      "artist": "Magical Creature Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-082.jpg"
    },
    {
      "name": "Galin Sheyla",
      "url": "./commercials/en-GB/runic-inscriptions-and-talisman-creation/galin-sheyla/16752070634080/commercial.mp3",
      "artist": "Runic Inscriptions And Talisman Creation",
      "cover_art_url": "assets/img/krang/krang-radio-043.jpg"
    },
    {
      "name": "Leora Guild",
      "url": "./commercials/en-GB/dimension-and-plane-travel-services/leora-guild/16752060694560/commercial.mp3",
      "artist": "Dimension And Plane Travel Services",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Idony Rowan And Isley",
      "url": "./commercials/en-GB/dragon-breeding-and-training/idony-rowan-and-isley/16752062622200/commercial.mp3",
      "artist": "Dragon Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-030.jpg"
    },
    {
      "name": "Jazlyn Devlin",
      "url": "./commercials/en-GB/divination-rune-casting/jazlyn-devlin/16752069353640/commercial.mp3",
      "artist": "Divination Rune Casting",
      "cover_art_url": "assets/img/krang/krang-radio-052.jpg"
    },
    {
      "name": "Keiran Nola",
      "url": "./commercials/en-GB/magical-creature-breeding-and-training/keiran-nola/16752063627490/commercial.mp3",
      "artist": "Magical Creature Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-068.jpg"
    },
    {
      "name": "Teron Cyril",
      "url": "./commercials/en-GB/illusionary-instruments/teron-cyril/16752064668040/commercial.mp3",
      "artist": "Illusionary Instruments",
      "cover_art_url": "assets/img/krang/krang-radio-005.jpg"
    },
    {
      "name": "Fola Baran And Tordek",
      "url": "./commercials/en-GB/magical-artifacts-trading/fola-baran-and-tordek/16752061623460/commercial.mp3",
      "artist": "Magical Artifacts Trading",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Erolar Alliance",
      "url": "./commercials/en-GB/magical-lore/erolar-alliance/16752062963360/commercial.mp3",
      "artist": "Magical Lore",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Viggo Landon",
      "url": "./commercials/en-GB/dragon-hunting/viggo-landon/16752058538890/commercial.mp3",
      "artist": "Dragon Hunting",
      "cover_art_url": "assets/img/krang/krang-radio-070.jpg"
    },
    {
      "name": "Lissandra Vesper And Kord",
      "url": "./commercials/en-GB/magic-potion-brewing-and-distillation/lissandra-vesper-and-kord/16752059511090/commercial.mp3",
      "artist": "Magic Potion Brewing And Distillation",
      "cover_art_url": "assets/img/krang/krang-radio-008.jpg"
    },
    {
      "name": "Hodan Owen",
      "url": "./commercials/en-GB/golem-control/hodan-owen/16752068917720/commercial.mp3",
      "artist": "Golem Control",
      "cover_art_url": "assets/img/krang/krang-radio-074.jpg"
    },
    {
      "name": "Talon And Sons",
      "url": "./commercials/en-GB/magical-discovery/talon-and-sons/16752065784080/commercial.mp3",
      "artist": "Magical Discovery",
      "cover_art_url": "assets/img/krang/krang-radio-097.jpg"
    },
    {
      "name": "Aric And Sons",
      "url": "./commercials/en-GB/ritualistic-magic-teaching/aric-and-sons/16752062304370/commercial.mp3",
      "artist": "Ritualistic Magic Teaching",
      "cover_art_url": "assets/img/krang/krang-radio-050.jpg"
    },
    {
      "name": "Ishmael Helmar",
      "url": "./commercials/en-GB/magical-creature-breeding/ishmael-helmar/16752065427890/commercial.mp3",
      "artist": "Magical Creature Breeding",
      "cover_art_url": "assets/img/krang/krang-radio-096.jpg"
    },
    {
      "name": "Balam Order",
      "url": "./commercials/en-GB/ritual-supplies/balam-order/16752066704990/commercial.mp3",
      "artist": "Ritual Supplies",
      "cover_art_url": "assets/img/krang/krang-radio-012.jpg"
    },
    {
      "name": "Gaia Niall And Rhona",
      "url": "./commercials/en-GB/mystic-potion-brewing/gaia-niall-and-rhona/16752069300170/commercial.mp3",
      "artist": "Mystic Potion Brewing",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Tressa Nadia",
      "url": "./commercials/en-GB/mystic-scrolls-and-books/tressa-nadia/16752069150620/commercial.mp3",
      "artist": "Mystic Scrolls And Books",
      "cover_art_url": "assets/img/krang/krang-radio-064.jpg"
    },
    {
      "name": "Nieve Faolin",
      "url": "./commercials/en-GB/mystic-jewelry-crafting/nieve-faolin/16752066201160/commercial.mp3",
      "artist": "Mystic Jewelry Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-083.jpg"
    },
    {
      "name": "Malar And Sons",
      "url": "./commercials/en-GB/dragon-breeding-and-training/malar-and-sons/16752069852560/commercial.mp3",
      "artist": "Dragon Breeding And Training",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Sheva Palor And Calista",
      "url": "./commercials/en-GB/occult-outfitting/sheva-palor-and-calista/16752066046320/commercial.mp3",
      "artist": "Occult Outfitting",
      "cover_art_url": "assets/img/krang/krang-radio-020.jpg"
    },
    {
      "name": "Rhea Alliance",
      "url": "./commercials/en-GB/portal-creation-and-maintenance-services/rhea-alliance/16752060432690/commercial.mp3",
      "artist": "Portal Creation And Maintenance Services",
      "cover_art_url": "assets/img/krang/krang-radio-099.jpg"
    },
    {
      "name": "Anastasia Guild",
      "url": "./commercials/en-GB/potion-preparation/anastasia-guild/16752066944900/commercial.mp3",
      "artist": "Potion Preparation",
      "cover_art_url": "assets/img/krang/krang-radio-022.jpg"
    },
    {
      "name": "Nalia Corinne And Eralin",
      "url": "./commercials/en-GB/magical-creature-trading/nalia-corinne-and-eralin/16752068486040/commercial.mp3",
      "artist": "Magical Creature Trading",
      "cover_art_url": "assets/img/krang/krang-radio-011.jpg"
    },
    {
      "name": "Rurik Morrin",
      "url": "./commercials/en-GB/summoning-circles/rurik-morrin/16752064996830/commercial.mp3",
      "artist": "Summoning Circles",
      "cover_art_url": "assets/img/krang/krang-radio-057.jpg"
    },
    {
      "name": "Xar Baldir",
      "url": "./commercials/en-GB/magical-relics-restoration/xar-baldir/16752062040780/commercial.mp3",
      "artist": "Magical Relics Restoration",
      "cover_art_url": "assets/img/krang/krang-radio-088.jpg"
    },
    {
      "name": "Gwyn Merielle",
      "url": "./commercials/en-GB/teleportation-runes/gwyn-merielle/16752057982980/commercial.mp3",
      "artist": "Teleportation Runes",
      "cover_art_url": "assets/img/krang/krang-radio-029.jpg"
    },
    {
      "name": "Morrin Vadim",
      "url": "./commercials/en-GB/astral-travel-and-projection-services/morrin-vadim/16752058900300/commercial.mp3",
      "artist": "Astral Travel And Projection Services",
      "cover_art_url": "assets/img/krang/krang-radio-085.jpg"
    },
    {
      "name": "Telmir And Sons",
      "url": "./commercials/en-GB/spellcasting-component-trading/telmir-and-sons/16752070308980/commercial.mp3",
      "artist": "Spellcasting Component Trading",
      "cover_art_url": "assets/img/krang/krang-radio-093.jpg"
    },
    {
      "name": "Trista Order",
      "url": "./commercials/en-GB/portal-navigation/trista-order/16752067852900/commercial.mp3",
      "artist": "Portal Navigation",
      "cover_art_url": "assets/img/krang/krang-radio-060.jpg"
    },
    {
      "name": "Tirion Iomar And Parth",
      "url": "./commercials/en-GB/demonology-consultation/tirion-iomar-and-parth/16752067921660/commercial.mp3",
      "artist": "Demonology Consultation",
      "cover_art_url": "assets/img/krang/krang-radio-065.jpg"
    },
    {
      "name": "Chrysanthe Arkov",
      "url": "./commercials/en-GB/chant-crafting/chrysanthe-arkov/16752065844770/commercial.mp3",
      "artist": "Chant Crafting",
      "cover_art_url": "assets/img/krang/krang-radio-003.jpg"
    },
    {
      "name": "Bayne Oren",
      "url": "./commercials/en-GB/golem-control/bayne-oren/16752062094340/commercial.mp3",
      "artist": "Golem Control",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Morwen And Sons",
      "url": "./commercials/en-GB/shadow-magic/morwen-and-sons/16752070807610/commercial.mp3",
      "artist": "Shadow Magic",
      "cover_art_url": "assets/img/krang/krang-radio-049.jpg"
    },
    {
      "name": "Flora Parth And Bryn",
      "url": "./commercials/en-GB/magic-item-enchanting-and-customization/flora-parth-and-bryn/16752063802330/commercial.mp3",
      "artist": "Magic Item Enchanting And Customization",
      "cover_art_url": "assets/img/krang/krang-radio-072.jpg"
    },
    {
      "name": "Rina Galenor And Kiona",
      "url": "./commercials/en-GB/potion-brewing/rina-galenor-and-kiona/16752063563800/commercial.mp3",
      "artist": "Potion Brewing",
      "cover_art_url": "assets/img/krang/krang-radio-047.jpg"
    },
    {
      "name": "Fawn Kaspar",
      "url": "./commercials/en-GB/conjuring-tutoring/fawn-kaspar/16752069438980/commercial.mp3",
      "artist": "Conjuring Tutoring",
      "cover_art_url": "assets/img/krang/krang-radio-034.jpg"
    },
    {
      "name": "Corik Portia And Sybilla",
      "url": "./commercials/en-GB/magical-creature-taming-and-training/corik-portia-and-sybilla/16752063380130/commercial.mp3",
      "artist": "Magical Creature Taming And Training",
      "cover_art_url": "assets/img/krang/krang-radio-007.jpg"
    },
    {
      "name": "Veda Hestia And Conlan",
      "url": "./commercials/en-GB/magical-lore/veda-hestia-and-conlan/16752068556450/commercial.mp3",
      "artist": "Magical Lore",
      "cover_art_url": "assets/img/krang/krang-radio-059.jpg"
    },
    {
      "name": "Dessa Order",
      "url": "./commercials/en-GB/mystical-warding-and-protection-services/dessa-order/16752065622350/commercial.mp3",
      "artist": "Mystical Warding And Protection Services",
      "cover_art_url": "assets/img/krang/krang-radio-080.jpg"
    },
    {
      "name": "Innovation And Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-innovation-and-advertising-come-together.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Future Of Advertising",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-future-of-advertising-is-now.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "Power Of AI",
      "url": "./commercials/jingles/you-are-listening-to-krangs-radio--where-the-power-of-ai-technology-meets-the-world-of-advertising.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Technology Leads",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-leads-the-way-in-advertisemen.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    },
    {
      "name": "AI Meets Advertising",
      "url": "./commercials/jingles/you-re-listening-to-krangs-radio--where-ai-technology-meets-advertising-excellence.mp3",
      "artist": "Krangs Radio",
      "cover_art_url": "assets/img/krang/station.jpg"
    }
  ]
});

