import pepperoni from "../assets/images/pepperoni.png";
import margherita from "../assets/images/margherita.png";
import hawaiian from "../assets/images/hawaiian.png";
import supreme from "../assets/images/supreme.png";
import bbqChicken from "../assets/images/bbqChicken.png";

const classicPizzas = [
  {
    id: 1,
    category: "Classic Pizzas",
    image: pepperoni,
    name: "Pepperoni",
    sizes: {
      s: { price: 10 },
      m: { price: 14 },
      l: { price: 18 },
    },
    rate: 5,
  },
  {
    id: 2,
    category: "Classic Pizzas",
    name: "Margherita",
    image: margherita,
    sizes: {
      s: { price: 8 },
      m: { price: 12 },
      l: { price: 16 },
    },
    rate: 4,
  },
  {
    id: 3,
    category: "Classic Pizzas",
    name: "Hawaiian",
    image: hawaiian,
    sizes: {
      s: { price: 11 },
      m: { price: 15 },
      l: { price: 19 },
    },
    rate: 4.5,
  },
  {
    id: 4,
    category: "Classic Pizzas",
    name: "Supreme",
    image: supreme,
    sizes: {
      s: { price: 12 },
      m: { price: 16 },
      l: { price: 20 },
    },
    rate: 4.5,
  },
  {
    id: 5,
    category: "Classic Pizzas",
    name: "BBQ Chicken",
    image: bbqChicken,
    sizes: {
      s: { price: 11 },
      m: { price: 15 },
      l: { price: 19 },
    },
    rate: 4,
  },
];

export default classicPizzas;
