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
    imageUrl: "",
  },
  {
    level: 8,
    title: "Akira",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Assassination Classroom",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Kurokos Basket",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Card Captor Sakura",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Hokuto No Ken",
    otherTitle: "Ken le survivant",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Vinland Saga",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Black Clover",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Dr Stone",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Promised Neverland",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Hamtaro",
    imageUrl: "",
  },
  {
    level: 8,
    title: "La rose de Versailles",
    otherTitle: "Lady Oscar",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Slam Dunk",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Nana",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Mega Man",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Cowboy Bebop",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Gundam",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Ippo",
    imageUrl: "",
  },
  {
    level: 8,
    title: "Great Teacher Onizuka",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Eyeshield 21",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Ghost in the shell",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Gunnm",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Prince of tennis",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Cat's eyes",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Doraemon",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Fire force",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Gintama",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Alice in Borderland",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Monster",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Kenshin le vagabond",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Blue exorcist",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Haikyu",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Astro Boy",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Jeanne et Serge",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Battle Royale",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Fruit Basket",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Love Hina",
    imageUrl: "",
  },
  {
    level: 7,
    title: "Kingdom Hearts",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Initial D",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Gantz",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Ranma 1/2",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Devilman",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Shin-Shan",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Kingdom",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Prison School",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Toriko",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Shi",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Soul eater",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Sun-Ken-Rock",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Georgie",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Perfect World",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Gambling school",
    imageUrl: "",
  },
  {
    level: 6,
    title: "Lamu",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Shaman King",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Belzebuub",
    imageUrl: "",
  },
  {
    level: 5,
    title: "D gray man",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Magi",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Black butler",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Maid sama",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Sawako",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Vagabond",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Dr Slump",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Fate",
    imageUrl: "",
  },
  {
    level: 5,
    title: "Full metal panic fumoffu",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Zetman",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Tsubasa reservoir chronicles",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Danmachi",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Valkyrie apocalypse",
    imageUrl: "",
  },
  {
    level: 4,
    title: "The breaker",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Bonne nuit punpun",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Rainbow",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Dorohedoro",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Kamakura diary",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Chihayafuru",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Satan 666",
    imageUrl: "",
  },
  {
    level: 4,
    title: "Samurai champloo",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Inspecteur kurokichi",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Hana yori dango",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Blue spring ride",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Say I love you",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Kiss him not me",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Lovely complex",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Kimi wa pet",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Midnight secretary",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Bobobobo bobobo",
    imageUrl: "",
  },
  {
    level: 3,
    title: "Suikoden",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Hoshin l'investiture des dieux",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Princess jellyfish",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Homonculus",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Ascension",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Uran high school host club",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Mon histoire",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Wolf girl and black prince",
    imageUrl: "",
  },
  {
    level: 2,
    title: "Les vacances de Jésus et Boudha",
    imageUrl: "",
  },
  {
    level: 1,
    title: "Golgo 13",
    imageUrl: "",
  },
  {
    level: 1,
    title: "Kids on the slope",
    imageUrl: "",
  },
  {
    level: 0,
    title: "Cicatrice the sirius",
    imageUrl: "",
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
