export interface Manga {
  id: number;
  level: number;
  title: string;
  otherTitle?: string;
  imageUrl: string;
}

export interface MangaLevel {
  level: number;
  mangas: Manga[];
}

const data: Omit<Manga, "id">[] = [
  {
    level: 1,
    title: "Pokémon",
    imageUrl: "pokemon.jpg",
  },
  {
    level: 1,
    title: "Hello Kitty",
    imageUrl: "hello-kitty.jpg",
  },
  {
    level: 1,
    title: "The Legend of Zelda",
    imageUrl: "zelda.jpg",
  },
  {
    level: 1,
    title: "One Piece",
    imageUrl: "one-piece.jpg",
  },
  {
    level: 1,
    title: "Dragon Ball",
    imageUrl: "dragon-ball.jpg",
  },
  {
    level: 1,
    title: "Super Mario",
    imageUrl: "super-mario.jpg",
  },
  {
    level: 1,
    title: "Naruto",
    imageUrl: "naruto.jpg",
  },
  {
    level: 1,
    title: "L'Attaque des Titans",
    imageUrl: "l-attaque-des-titans.jpg",
  },
  {
    level: 1,
    title: "Les Chevaliers du Zodiaque",
    otherTitle: "Saint Seiya",
    imageUrl: "les-chevaliers-du-zodiaque.jpg",
  },
  {
    level: 1,
    title: "Yu-Gi-Oh!",
    imageUrl: "yu-gi-oh.jpg",
  },
  {
    level: 1,
    title: "Capitaine Albator",
    imageUrl: "captaine-albator.jpg",
  },
  {
    level: 1,
    title: "Goldorak",
    imageUrl: "goldorak.jpg",
  },
  {
    level: 1,
    title: "Death Note",
    imageUrl: "death-note.jpg",
  },
  {
    level: 1,
    title: "Beyblade",
    imageUrl: "beyblade.jpg",
  },
  {
    level: 1,
    title: "Digimon",
    imageUrl: "digimon.jpg",
  },
  {
    level: 2,
    title: "Fairy Tail",
    imageUrl: "fairy-tail.jpg",
  },
  {
    level: 2,
    title: "FullMetal Alchemist",
    imageUrl: "fullmetal-alchemist.jpg",
  },
  {
    level: 2,
    title: "Détective Conan",
    imageUrl: "detective-conan.jpg",
  },
  {
    level: 2,
    title: "Captain Tsubasa",
    otherTitle: "Olive et Tom",
    imageUrl: "captain-tsubasa.jpg",
  },
  {
    level: 2,
    title: "My Hero Academia",
    imageUrl: "my-hero-academia.jpg",
  },
  {
    level: 2,
    title: "Jojo's Bizarre Adventure",
    imageUrl: "jojo-s-bizarre-adventure.jpg",
  },
  {
    level: 2,
    title: "City Hunter",
    otherTitle: "Nicky Larson",
    imageUrl: "city-hunter.jpg",
  },
  {
    level: 2,
    title: "Hunter X Hunter",
    imageUrl: "hunter-x-hunter.jpg",
  },
  {
    level: 2,
    title: "Bleach",
    imageUrl: "bleach.jpg",
  },
  {
    level: 2,
    title: "Demon Slayer",
    imageUrl: "demon-slayer.jpg",
  },
  {
    level: 2,
    title: "Kirby",
    imageUrl: "kirby.jpg",
  },
  {
    level: 2,
    title: "Neon Genesis Evangelion",
    imageUrl: "neon-genesis-evangelion.jpg",
  },
  {
    level: 2,
    title: "One Punch Man",
    imageUrl: "one-punch-man.jpg",
  },
  {
    level: 2,
    title: "Sword Art Online",
    imageUrl: "sword-art-online.jpg",
  },
  {
    level: 2,
    title: "Sailor Moon",
    imageUrl: "sailor-moon.jpg",
  },
  {
    level: 2,
    title: "Tokyo Ghoul",
    imageUrl: "tokyo-ghoul.jpg",
  },
  {
    level: 2,
    title: "Seven Deadly Sins",
    imageUrl: "seven-deadly-sins.jpg",
  },
  {
    level: 2,
    title: "Food Wars",
    imageUrl: "food-wars.jpg",
  },
  {
    level: 3,
    title: "Berserk",
    imageUrl: "berserk.jpg",
  },
  {
    level: 3,
    title: "Akira",
    imageUrl: "akira.jpg",
  },
  {
    level: 3,
    title: "Assassination Classroom",
    imageUrl: "assassination-classroom.jpg",
  },
  {
    level: 3,
    title: "Kuroko's Basket",
    imageUrl: "kuroko-s-basket.jpg",
  },
  {
    level: 3,
    title: "Card Captor Sakura",
    imageUrl: "card-captor-sakura.jpg",
  },
  {
    level: 3,
    title: "Hokuto No Ken",
    otherTitle: "Ken, le survivant",
    imageUrl: "hokuto-no-ken.jpg",
  },
  {
    level: 3,
    title: "Vinland Saga",
    imageUrl: "vinland-saga.jpg",
  },
  {
    level: 3,
    title: "Black Clover",
    imageUrl: "black-clover.jpg",
  },
  {
    level: 3,
    title: "Dr Stone",
    imageUrl: "dr-stone.jpg",
  },
  {
    level: 3,
    title: "The Promised Neverland",
    imageUrl: "the-promised-neverland.jpg",
  },
  {
    level: 3,
    title: "La Rose de Versailles",
    otherTitle: "Lady Oscar",
    imageUrl: "la-rose-de-versailles.jpg",
  },
  {
    level: 3,
    title: "Slam Dunk",
    imageUrl: "slam-dunk.jpg",
  },
  {
    level: 3,
    title: "Nana",
    imageUrl: "nana.jpg",
  },
  {
    level: 3,
    title: "Megaman",
    imageUrl: "megaman.jpg",
  },
  {
    level: 3,
    title: "Cowboy Bebop",
    imageUrl: "cowboy-bebop.jpg",
  },
  {
    level: 3,
    title: "Mobile Suit Gundam",
    imageUrl: "mobile-suit-gundam.jpg",
  },
  {
    level: 3,
    title: "Ippo",
    imageUrl: "ippo.jpg",
  },
  {
    level: 3,
    title: "Great Teacher Onizuka",
    imageUrl: "great-teacher-onizuka.jpg",
  },
  {
    level: 4,
    title: "Eye Shield 21",
    imageUrl: "eye-shield-21.jpg",
  },
  {
    level: 4,
    title: "Ghost in the Shell",
    imageUrl: "ghost-in-the-shell.jpg",
  },
  {
    level: 4,
    title: "Gunnm",
    imageUrl: "gunnm.jpg",
  },
  {
    level: 4,
    title: "Prince du Tennis",
    imageUrl: "prince-du-tennis.jpg",
  },
  {
    level: 4,
    title: "Cat's Eye",
    imageUrl: "cat-s-eye.jpg",
  },
  {
    level: 4,
    title: "Doraemon",
    imageUrl: "doraemon.jpg",
  },
  {
    level: 4,
    title: "Fire Force",
    imageUrl: "fire-force.jpg",
  },
  {
    level: 4,
    title: "Gintama",
    imageUrl: "gintama.jpg",
  },
  {
    level: 4,
    title: "Alice in Borderland",
    imageUrl: "alice-in-borderland.jpg",
  },
  {
    level: 4,
    title: "Monster",
    imageUrl: "monster.jpg",
  },
  {
    level: 4,
    title: "Kenshin - Le Vagabond",
    imageUrl: "kenshin-le-vagabond.jpg",
  },
  {
    level: 4,
    title: "Blue Exorcist",
    imageUrl: "blue-exorcist.jpg",
  },
  {
    level: 4,
    title: "Haikyu !!",
    imageUrl: "haikyu.jpg",
  },
  {
    level: 4,
    title: "Astro Boy",
    imageUrl: "astro-boy.jpg",
  },
  {
    level: 4,
    title: "Attacker You!",
    otherTitle: "Jeanne et Serge",
    imageUrl: "attacker-you.jpg",
  },
  {
    level: 4,
    title: "Battle Royale",
    imageUrl: "battle-royale.jpg",
  },
  {
    level: 4,
    title: "Fruits Basket",
    imageUrl: "fruits-basket.jpg",
  },
  {
    level: 4,
    title: "Love Hina",
    imageUrl: "love-hina.jpg",
  },
  {
    level: 4,
    title: "Kingdom Hearts",
    imageUrl: "kingdom-hearts.jpg",
  },
  {
    level: 5,
    title: "Initial D",
    imageUrl: "initial-d.jpg",
  },
  {
    level: 5,
    title: "Gantz",
    imageUrl: "gantz.jpg",
  },
  {
    level: 5,
    title: "Ranma 1/2",
    imageUrl: "ranma-1-2.jpg",
  },
  {
    level: 5,
    title: "Devilman",
    imageUrl: "devilman.jpg",
  },
  {
    level: 5,
    title: "Shin Chan",
    imageUrl: "shin-chan.jpg",
  },
  {
    level: 5,
    title: "Kingdom",
    imageUrl: "kingdom.jpg",
  },
  {
    level: 5,
    title: "Prison School",
    imageUrl: "prison-school.jpg",
  },
  {
    level: 5,
    title: "Toriko",
    imageUrl: "toriko.jpg",
  },
  {
    level: 5,
    title: "Chi",
    otherTitle: "Une Vie de Chat",
    imageUrl: "chi.jpg",
  },
  {
    level: 5,
    title: "Soul Eater",
    imageUrl: "soul-eater.jpg",
  },
  {
    level: 5,
    title: "Sun-Ken Rock",
    imageUrl: "sun-ken-rock.jpg",
  },
  {
    level: 5,
    title: "Lady Georgie !",
    imageUrl: "lady-georgie.jpg",
  },
  {
    level: 5,
    title: "Perfect World",
    imageUrl: "perfect-world.jpg",
  },
  {
    level: 5,
    title: "Gambling school",
    imageUrl: "gambling-school.jpg",
  },
  {
    level: 5,
    title: "Urusei Yatsura",
    otherTitle: "Lamu",
    imageUrl: "urusei-yatsura.jpg",
  },
  {
    level: 6,
    title: "Shaman King",
    imageUrl: "shaman-king.jpg",
  },
  {
    level: 6,
    title: "Beelzebub",
    imageUrl: "beelzebub.jpg",
  },
  {
    level: 6,
    title: "D.Gray-Man",
    imageUrl: "d-gray-man.jpg",
  },
  {
    level: 6,
    title: "Magi",
    otherTitle: "The Labyrinth of Magic",
    imageUrl: "magi.jpg",
  },
  {
    level: 6,
    title: "Black Butler",
    imageUrl: "black-butler.jpg",
  },
  {
    level: 6,
    title: "Maid Sama",
    imageUrl: "maid-sama.jpg",
  },
  {
    level: 6,
    title: "Sawako",
    imageUrl: "sawako.jpg",
  },
  {
    level: 6,
    title: "Vagabond",
    imageUrl: "vagabond.jpg",
  },
  {
    level: 6,
    title: "Dr Slump",
    imageUrl: "dr-slump.jpg",
  },
  {
    level: 6,
    title: "Fate Stay Night",
    imageUrl: "fate-stay-night.jpg",
  },
  {
    level: 6,
    title: "Full Metal Panic!",
    imageUrl: "full-metal-panic.jpg",
  },
  {
    level: 7,
    title: "Zetman",
    imageUrl: "zetman.jpg",
  },
  {
    level: 7,
    title: "Tsubasa RESERVoir CHRoNiCLE",
    imageUrl: "tsubasa-reservoir-chronicle.jpg",
  },
  {
    level: 7,
    title: "Danmachi",
    imageUrl: "danmachi.jpg",
  },
  {
    level: 7,
    title: "Valkyrie Apocalypse",
    imageUrl: "valkyrie-apocalypse.jpg",
  },
  {
    level: 7,
    title: "The Breaker",
    imageUrl: "the-breaker.jpg",
  },
  {
    level: 7,
    title: "Bonne Nuit Punpun!",
    imageUrl: "bonne-nuit-punpun.jpg",
  },
  {
    level: 7,
    title: "Rainbow",
    imageUrl: "rainbow.jpg",
  },
  {
    level: 7,
    title: "Dorohedoro",
    imageUrl: "dorohedoro.jpg",
  },
  {
    level: 7,
    title: "Kamakura Diary",
    imageUrl: "kamakura-diary.jpg",
  },
  {
    level: 7,
    title: "Chihayafuru",
    imageUrl: "chihayafuru.jpg",
  },
  {
    level: 7,
    title: "Satan 666",
    imageUrl: "satan-666.jpg",
  },
  {
    level: 7,
    title: "Samurai Champloo",
    imageUrl: "samurai-champloo.jpg",
  },
  {
    level: 8,
    title: "Inspecteur Kurokôchi",
    imageUrl: "inspecteur-kurokochi.jpg",
  },
  {
    level: 8,
    title: "Hana Yori Dango",
    imageUrl: "hana-yori-dango.jpg",
  },
  {
    level: 8,
    title: "Blue Spring Ride",
    imageUrl: "blue-spring-ride.jpg",
  },
  {
    level: 8,
    title: "Say I Love You",
    imageUrl: "say-i-love-you.jpg",
  },
  {
    level: 8,
    title: "Kiss Him, Not Me",
    imageUrl: "kiss-him-not-me.jpg",
  },
  {
    level: 8,
    title: "Lovely complex",
    imageUrl: "lovely-complex.jpg",
  },
  {
    level: 8,
    title: "Kimi Wa Pet",
    imageUrl: "kimi-wa-pet.jpg",
  },
  {
    level: 8,
    title: "Midnight Secretary",
    imageUrl: "midnight-secretary.jpg",
  },
  {
    level: 8,
    title: "Bobobo-bo Bo-bobo",
    imageUrl: "bobobo-bo-bo-bobo.jpg",
  },
  {
    level: 8,
    title: "Suikoden",
    imageUrl: "suikoden.jpg",
  },
  {
    level: 9,
    title: "Hôshin - L’Investiture des Dieux",
    imageUrl: "hoshin-l-investiture-des-dieux.jpg",
  },
  {
    level: 9,
    title: "Princess Jellyfish",
    imageUrl: "princess-jellyfish.jpg",
  },
  {
    level: 9,
    title: "Homunculus",
    imageUrl: "homunculus.jpg",
  },
  {
    level: 9,
    title: "Ascension",
    imageUrl: "ascension.jpg",
  },
  {
    level: 9,
    title: "Host Club - Le Lycée de la Séduction",
    otherTitle: "Ouran High School",
    imageUrl: "host-club-le-lycee-de-la-seduction.jpg",
  },
  {
    level: 9,
    title: "Mon Histoire",
    imageUrl: "mon-histoire.jpg",
  },
  {
    level: 9,
    title: "Wolf Girl and Black Prince",
    imageUrl: "wolf-girl-and-black-prince.jpg",
  },
  {
    level: 9,
    title: "Les Vacances de Jésus et Bouddha",
    imageUrl: "les-vacances-de-jesus-et-bouddha.jpg",
  },
  {
    level: 10,
    title: "Golgo 13",
    imageUrl: "golgo-13.jpg",
  },
  {
    level: 10,
    title: "Kids on the Slope",
    imageUrl: "kids-on-the-slope.jpg",
  },
  {
    level: 10,
    title: "Cicatrice the Sirius",
    imageUrl: "cicatrice-the-sirius.jpg",
  },
];

const mangas: Manga[] = [];
for (let i = 0; i < data.length; i++) {
  mangas.push({ id: i + 1, ...data[i] });
}

export function getMangas(): Manga[] {
  return JSON.parse(JSON.stringify(mangas)); // cloning initial list
}

export function getMangasPerLevel(): MangaLevel[] {
  const mangasPerLevel: MangaLevel[] = [];
  getMangas()
    .reduce((agg, e) => {
      if (!agg.has(e.level)) {
        agg.set(e.level, []);
      }
      agg.get(e.level)?.push(e);
      return agg;
    }, new Map<number, Manga[]>())
    .forEach((mangas, level) => mangasPerLevel.push({ level, mangas }));
  return mangasPerLevel;
}

export function getMangasShuffled(): Manga[] {
  // Fisher-Yates (aka Knuth) Shuffle
  const mangasArray = getMangas();
  let currentIndex = mangasArray.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [mangasArray[currentIndex], mangasArray[randomIndex]] = [
      mangasArray[randomIndex],
      mangasArray[currentIndex],
    ];
  }

  return mangasArray;
}
