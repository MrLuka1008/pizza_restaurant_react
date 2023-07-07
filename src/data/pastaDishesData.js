import SpaghettiBolognese from "../assets/images/SpaghettiBolognese.png";
import FettuccineAlfredo from "../assets/images/FettuccineAlfredo.png";
import ChickenParmesan from "../assets/images/ChickenParmesan.png";
import PenneArrabiata from "../assets/images/PenneArrabiata.png";
import Lasagna from "../assets/images/Lasagna.png";

const pastaDishes = [
  {
    id: 1,
    category: "Pasta Dishes",
    name: "Spaghetti Bolognese",
    image: SpaghettiBolognese,
    sizes: {
      s: { price: 12 },
      m: { price: 16 },
      l: { price: 20 },
    },
    rate: 4.5,
  },
  {
    id: 2,
    category: "Pasta Dishes",
    name: "Fettuccine Alfredo",
    image: FettuccineAlfredo,
    sizes: {
      s: { price: 11 },
      m: { price: 15 },
      l: { price: 19 },
    },
    rate: 4,
  },
  {
    id: 3,
    category: "Pasta Dishes",
    name: "Chicken Parmesan",
    image: ChickenParmesan,
    sizes: {
      s: { price: 14 },
      m: { price: 18 },
      l: { price: 22 },
    },
    rate: 4,
  },
  {
    id: 4,
    category: "Pasta Dishes",
    name: "Penne Arrabiata",
    image: PenneArrabiata,
    sizes: {
      s: { price: 13 },
      m: { price: 17 },
      l: { price: 21 },
    },
    rate: 4.5,
  },
  {
    id: 5,
    category: "Pasta Dishes",
    name: "Lasagna",
    image: Lasagna,
    sizes: {
      s: { price: 15 },
      m: { price: 19 },
      l: { price: 23 },
    },
    rate: 4.5,
  },
];

export default pastaDishes;
