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
    price: 14,
    rate: 5,
  },
  {
    id: 2,
    category: "Classic Pizzas",
    name: "Margherita",
    image: margherita,
    price: 12,
    rate: 4,
  },
  {
    id: 3,
    category: "Classic Pizzas",
    name: "Hawaiian",
    image: hawaiian,
    price: 15,
    rate: 4.5,
  },
  {
    id: 4,
    category: "Classic Pizzas",
    name: "Supreme",
    image: supreme,
    price: 16,
    rate: 4.5,
  },
  {
    id: 5,
    category: "Classic Pizzas",
    name: "BBQ Chicken",
    image: bbqChicken,
    price: 15,
    rate: 4,
  },
];

export default classicPizzas;
