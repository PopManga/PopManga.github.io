export interface Manga {
  id: number;
  level: number;
  title: string;
  otherTitle?: string;
  imageUrl: string;
}

const data: Omit<Manga, "id">[] = [
  {
    level: 10,
    title: "Pokémon",
    imageUrl: "pokemon.jpg",
  },
  {
    level: 10,
    title: "Hello Kitty",
    imageUrl: "hello-kitty.jpg",
  },
  {
    level: 10,
    title: "The Legend of Zelda",
    imageUrl: "zelda.jpg",
  },
  {
    level: 10,
    title: "One Piece",
    imageUrl: "one-piece.jpg",
  },
  {
    level: 10,
    title: "Dragon Ball",
    imageUrl: "dragon-ball.jpg",
  },
  {
    level: 10,
    title: "Super Mario",
    imageUrl: "super-mario.jpg",
  },
  {
    level: 10,
    title: "Naruto",
    imageUrl: "naruto.jpg",
  },
  {
    level: 10,
    title: "L'Attaque des Titans",
    imageUrl: "l-attaque-des-titans.jpg",
  },
  {
    level: 10,
    title: "Les Chevaliers du Zodiaque",
    otherTitle: "Saint Seiya",
    imageUrl: "les-chevaliers-du-zodiaque.jpg",
  },
  {
    level: 10,
    title: "Yu-Gi-Oh!",
    imageUrl: "yu-gi-oh.jpg",
  },
  {
    level: 10,
    title: "Capitaine Albator",
    imageUrl: "captaine-albator.jpg",
  },
  {
    level: 10,
    title: "Goldorak",
    imageUrl: "goldorak.jpg",
  },
  {
    level: 10,
    title: "Death Note",
    imageUrl: "death-note.jpg",
  },
  {
    level: 10,
    title: "Beyblade",
    imageUrl: "beyblade.jpg",
  },
  {
    level: 10,
    title: "Digimon",
    imageUrl: "digimon.jpg",
  },
  {
    level: 9,
    title: "Fairy Tail",
    imageUrl: "fairy-tail.jpg",
  },
  {
    level: 9,
    title: "FullMetal Alchemist",
    imageUrl: "fullmetal-alchemist.jpg",
  },
  {
    level: 9,
    title: "Détective Conan",
    imageUrl: "detective-conan.jpg",
  },
  {
    level: 9,
    title: "Captain Tsubasa",
    otherTitle: "Olive et Tom",
    imageUrl: "captain-tsubasa.jpg",
  },
  {
    level: 9,
    title: "My Hero Academia",
    imageUrl: "my-hero-academia.jpg",
  },
  {
    level: 9,
    title: "Jojo's Bizarre Adventure",
    imageUrl: "jojo-s-bizarre-adventure.jpg",
  },
  {
    level: 9,
    title: "City Hunter",
    otherTitle: "Nicky Larson",
    imageUrl: "city-hunter.jpg",
  },
  {
    level: 9,
    title: "Hunter X Hunter",
    imageUrl: "hunter-x-hunter.jpg",
  },
  {
    level: 9,
    title: "Bleach",
    imageUrl: "bleach.jpg",
  },
  {
    level: 9,
    title: "Demon Slayer",
    imageUrl: "demon-slayer.jpg",
  },
  {
    level: 9,
    title: "Kirby",
    imageUrl: "kirby.jpg",
  },
  {
    level: 9,
    title: "Neon Genesis Evangelion",
    imageUrl: "neon-genesis-evangelion.jpg",
  },
  {
    level: 9,
    title: "One Punch Man",
    imageUrl: "one-punch-man.jpg",
  },
  {
    level: 9,
    title: "Sword Art Online",
    imageUrl: "sword-art-online.jpg",
  },
  {
    level: 9,
    title: "Sailor Moon",
    imageUrl: "sailor-moon.jpg",
  },
  {
    level: 9,
    title: "Tokyo Ghoul",
    imageUrl: "tokyo-ghoul.jpg",
  },
  {
    level: 9,
    title: "Seven Deadly Sins",
    imageUrl: "seven-deadly-sins.jpg",
  },
  {
    level: 9,
    title: "Food Wars",
    imageUrl: "food-wars.jpg",
  },
  {
    level: 8,
    title: "Berserk",
    imageUrl: "berserk.jpg",
  },
  {
    level: 8,
    title: "Akira",
    imageUrl: "akira.jpg",
  },
  {
    level: 8,
    title: "Assassination Classroom",
    imageUrl: "assassination-classroom.jpg",
  },
  {
    level: 8,
    title: "Kuroko's Basket",
    imageUrl: "kuroko-s-basket.jpg",
  },
  {
    level: 8,
    title: "Card Captor Sakura",
    imageUrl: "card-captor-sakura.jpg",
  },
  {
    level: 8,
    title: "Hokuto No Ken",
    otherTitle: "Ken, le survivant",
    imageUrl: "hokuto-no-ken.jpg",
  },
  {
    level: 8,
    title: "Vinland Saga",
    imageUrl: "vinland-saga.jpg",
  },
  {
    level: 8,
    title: "Black Clover",
    imageUrl: "black-clover.jpg",
  },
  {
    level: 8,
    title: "Dr Stone",
    imageUrl: "dr-stone.jpg",
  },
  {
    level: 8,
    title: "The Promised Neverland",
    imageUrl: "the-promised-neverland.jpg",
  },
  {
    level: 8,
    title: "Hamtaro",
    imageUrl: "",
  },
  {
    level: 8,
    title: "La Rose de Versailles",
    otherTitle: "Lady Oscar",
    imageUrl: "la-rose-de-versailles.jpg",
  },
  {
    level: 8,
    title: "Slam Dunk",
    imageUrl: "slam-dunk.jpg",
  },
  {
    level: 8,
    title: "Nana",
    imageUrl: "nana.jpg",
  },
  {
    level: 8,
    title: "Megaman",
    imageUrl: "megaman.jpg",
  },
  {
    level: 8,
    title: "Cowboy Bebop",
    imageUrl: "cowboy-bebop.jpg",
  },
  {
    level: 8,
    title: "Mobile Suit Gundam",
    imageUrl: "mobile-suit-gundam.jpg",
  },
  {
    level: 8,
    title: "Ippo",
    imageUrl: "ippo.jpg",
  },
  {
    level: 8,
    title: "Great Teacher Onizuka",
    imageUrl: "great-teacher-onizuka.jpg",
  },
  {
    level: 7,
    title: "Eye Shield 21",
    imageUrl: "eye-shield-21.jpg",
  },
  {
    level: 7,
    title: "Ghost in the Shell",
    imageUrl: "ghost-in-the-shell.jpg",
  },
  {
    level: 7,
    title: "Gunnm",
    imageUrl: "gunnm.jpg",
  },
  {
    level: 7,
    title: "Prince du Tennis",
    imageUrl: "prince-du-tennis.jpg",
  },
  {
    level: 7,
    title: "Cat's Eye",
    imageUrl: "cat-s-eye.jpg",
  },
  {
    level: 7,
    title: "Doraemon",
    imageUrl: "doraemon.jpg",
  },
  {
    level: 7,
    title: "Fire Force",
    imageUrl: "fire-force.jpg",
  },
  {
    level: 7,
    title: "Gintama",
    imageUrl: "gintama.jpg",
  },
  {
    level: 7,
    title: "Alice in Borderland",
    imageUrl: "alice-in-borderland.jpg",
  },
  {
    level: 7,
    title: "Monster",
    imageUrl: "monster.jpg",
  },
  {
    level: 7,
    title: "Kenshin - Le Vagabond",
    imageUrl: "kenshin-le-vagabond.jpg",
  },
  {
    level: 7,
    title: "Blue Exorcist",
    imageUrl: "blue-exorcist.jpg",
  },
  {
    level: 7,
    title: "Haikyu !!",
    imageUrl: "haikyu.jpg",
  },
  {
    level: 7,
    title: "Astro Boy",
    imageUrl: "astro-boy.jpg",
  },
  {
    level: 7,
    title: "Attacker You!",
    otherTitle: "Jeanne et Serge",
    imageUrl: "attacker-you.jpg",
  },
  {
    level: 7,
    title: "Battle Royale",
    imageUrl: "battle-royale.jpg",
  },
  {
    level: 7,
    title: "Fruits Basket",
    imageUrl: "fruits-basket.jpg",
  },
  {
    level: 7,
    title: "Love Hina",
    imageUrl: "love-hina.jpg",
  },
  {
    level: 7,
    title: "Kingdom Hearts",
    imageUrl: "kingdom-hearts.jpg",
  },
  {
    level: 6,
    title: "Initial D",
    imageUrl: "initial-d.jpg",
  },
  {
    level: 6,
    title: "Gantz",
    imageUrl: "gantz.jpg",
  },
  {
    level: 6,
    title: "Ranma 1/2",
    imageUrl: "ranma-1-2.jpg",
  },
  {
    level: 6,
    title: "Devilman",
    imageUrl: "devilman.jpg",
  },
  {
    level: 6,
    title: "Shin Chan",
    imageUrl: "shin-chan.jpg",
  },
  {
    level: 6,
    title: "Kingdom",
    imageUrl: "kingdom.jpg",
  },
  {
    level: 6,
    title: "Prison School",
    imageUrl: "prison-school.jpg",
  },
  {
    level: 6,
    title: "Toriko",
    imageUrl: "toriko.jpg",
  },
  {
    level: 6,
    title: "Chi",
    otherTitle: "Une Vie de Chat",
    imageUrl: "chi.jpg",
  },
  {
    level: 6,
    title: "Soul Eater",
    imageUrl: "soul-eater.jpg",
  },
  {
    level: 6,
    title: "Sun-Ken Rock",
    imageUrl: "sun-ken-rock.jpg",
  },
  {
    level: 6,
    title: "Lady Georgie !",
    imageUrl: "lady-georgie.jpg",
  },
  {
    level: 6,
    title: "Perfect World",
    imageUrl: "perfect-world.jpg",
  },
  {
    level: 6,
    title: "Gambling school",
    imageUrl: "gambling-school.jpg",
  },
  {
    level: 6,
    title: "Urusei Yatsura",
    otherTitle: "Lamu",
    imageUrl: "urusei-yatsura.jpg",
  },
  {
    level: 5,
    title: "Shaman King",
    imageUrl: "shaman-king.jpg",
  },
  {
    level: 5,
    title: "Beelzebub",
    imageUrl: "beelzebub.jpg",
  },
  {
    level: 5,
    title: "D.Gray-man",
    imageUrl: "d-gray-man.jpg",
  },
  {
    level: 5,
    title: "Magi",
    otherTitle: "The Labyrinth of Magic",
    imageUrl: "magi.jpg",
  },
  {
    level: 5,
    title: "Black Butler",
    imageUrl: "black-butler.jpg",
  },
  {
    level: 5,
    title: "Maid Sama",
    imageUrl: "maid-sama.jpg",
  },
  {
    level: 5,
    title: "Sawako",
    imageUrl: "sawako.jpg",
  },
  {
    level: 5,
    title: "Vagabond",
    imageUrl: "vagabond.jpg",
  },
  {
    level: 5,
    title: "Dr Slump",
    imageUrl: "dr-slump.jpg",
  },
  {
    level: 5,
    title: "Fate Stay Night",
    imageUrl: "fate-stay-night.jpg",
  },
  {
    level: 5,
    title: "Full Metal Panic!",
    imageUrl: "full-metal-panic.jpg",
  },
  {
    level: 4,
    title: "Zetman",
    imageUrl: "zetman.jpg",
  },
  {
    level: 4,
    title: "Tsubasa RESERVoir CHRoNiCLE",
    imageUrl: "tsubasa-reservoir-chronicle.jpg",
  },
  {
    level: 4,
    title: "Danmachi",
    imageUrl: "danmachi.jpg",
  },
  {
    level: 4,
    title: "Valkyrie Apocalypse",
    imageUrl: "valkyrie-apocalypse.jpg",
  },
  {
    level: 4,
    title: "The Breaker",
    imageUrl: "the-breaker.jpg",
  },
  {
    level: 4,
    title: "Bonne Nuit Punpun!",
    imageUrl: "bonne-nuit-punpun.jpg",
  },
  {
    level: 4,
    title: "Rainbow",
    imageUrl: "rainbow.jpg",
  },
  {
    level: 4,
    title: "Dorohedoro",
    imageUrl: "dorohedoro.jpg",
  },
  {
    level: 4,
    title: "Kamakura Diary",
    imageUrl: "kamakura-diary.jpg",
  },
  {
    level: 4,
    title: "Chihayafuru",
    imageUrl: "chihayafuru.jpg",
  },
  {
    level: 4,
    title: "Satan 666",
    imageUrl: "satan-666.jpg",
  },
  {
    level: 4,
    title: "Samurai Champloo",
    imageUrl: "samurai-champloo.jpg",
  },
  {
    level: 3,
    title: "Inspecteur Kurokôchi",
    imageUrl: "inspecteur-kurokochi.jpg",
  },
  {
    level: 3,
    title: "Hana Yori Dango",
    imageUrl: "hana-yori-dango.jpg",
  },
  {
    level: 3,
    title: "Blue Spring Ride",
    imageUrl: "blue-spring-ride.jpg",
  },
  {
    level: 3,
    title: "Say I Love You",
    imageUrl: "say-i-love-you.jpg",
  },
  {
    level: 3,
    title: "Kiss Him, Not Me",
    imageUrl: "kiss-him-not-me.jpg",
  },
  {
    level: 3,
    title: "Lovely complex",
    imageUrl: "lovely-complex.jpg",
  },
  {
    level: 3,
    title: "Kimi Wa Pet",
    imageUrl: "kimi-wa-pet.jpg",
  },
  {
    level: 3,
    title: "Midnight Secretary",
    imageUrl: "midnight-secretary.jpg",
  },
  {
    level: 3,
    title: "Bobobo-bo Bo-bobo",
    imageUrl: "bobobo-bo-bo-bobo.jpg",
  },
  {
    level: 3,
    title: "Suikoden",
    imageUrl: "suikoden.jpg",
  },
  {
    level: 2,
    title: "Hôshin - L’Investiture des Dieux",
    imageUrl: "hoshin-l-investiture-des-dieux.jpg",
  },
  {
    level: 2,
    title: "Princess Jellyfish",
    imageUrl: "princess-jellyfish.jpg",
  },
  {
    level: 2,
    title: "Homunculus",
    imageUrl: "homunculus.jpg",
  },
  {
    level: 2,
    title: "Ascension",
    imageUrl: "ascension.jpg",
  },
  {
    level: 2,
    title: "Host Club - Le Lycée de la Séduction",
    otherTitle: "Ouran High School",
    imageUrl: "host-club-le-lycee-de-la-seduction.jpg",
  },
  {
    level: 2,
    title: "Mon Histoire",
    imageUrl: "mon-histoire.jpg",
  },
  {
    level: 2,
    title: "Wolf Girl and Black Prince",
    imageUrl: "wolf-girl-and-black-prince.jpg",
  },
  {
    level: 2,
    title: "Les Vacances de Jésus et Bouddha",
    imageUrl: "les-vacances-de-jesus-et-bouddha.jpg",
  },
  {
    level: 1,
    title: "Golgo 13",
    imageUrl: "golgo-13.jpg",
  },
  {
    level: 1,
    title: "Kids on the Slope",
    imageUrl: "kids-on-the-slope.jpg",
  },
  {
    level: 0,
    title: "Cicatrice the Sirius",
    imageUrl: "cicatrice-the-sirius.jpg",
  },
];

const mangas: Manga[] = [];
for (let i = 0; i < data.length; i++) {
  mangas.push({ id: i + 1, ...data[i] });
}

export function getMangas(): Manga[] {
  return JSON.parse(JSON.stringify(mangas));
}

export function getMangasPerLevel(): Map<number, Manga[]> {
  return getMangas().reduce((agg, e) => {
    if (!agg.has(e.level)) {
      agg.set(e.level, []);
    }
    agg.get(e.level)?.push(e);
    return agg;
  }, new Map<number, Manga[]>());
}
