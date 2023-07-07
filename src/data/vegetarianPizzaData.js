import MushroomandOlive from "../assets/images/MushroomandOlive.png";
import MargheritawithFreshTomatoes from "../assets/images/MargheritawFT.png";
import spinachandfeta from "../assets/images/spinachandfeta.png";
import ArtichokeandRedPepper from "../assets/images/ArtichokeandRedPepper.png";

const vegetarianPizzas = [
  {
    id: 1,
    category: "Vegetarian Pizzas",
    name: "Mushroom and Olive",
    image: MushroomandOlive,
    sizes: {
      s: { price: 11 },
      m: { price: 14 },
      l: { price: 17 },
    },
    rate: 4.5,
  },
  {
    id: 2,
    category: "Vegetarian Pizzas",
    name: "Margherita with Fresh Tomatoes",
    image: MargheritawithFreshTomatoes,
    sizes: {
      s: { price: 10 },
      m: { price: 13 },
      l: { price: 16 },
    },
    rate: 4,
  },
  {
    id: 3,
    category: "Vegetarian Pizzas",
    name: "Spinach and Feta",
    image: spinachandfeta,
    sizes: {
      s: { price: 12 },
      m: { price: 15 },
      l: { price: 18 },
    },
    rate: 4.5,
  },
  {
    id: 4,
    category: "Vegetarian Pizzas",
    name: "Artichoke and Red Pepper",
    image: ArtichokeandRedPepper,
    sizes: {
      s: { price: 12 },
      m: { price: 15 },
      l: { price: 18 },
    },
    rate: 4,
  },
];

export default vegetarianPizzas;
