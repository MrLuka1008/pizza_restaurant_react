import MeatLovers from "../assets/images/MeatLovers.png";
import BBQBaconChicken from "../assets/images/BBQBaconChicken.png";
import BuffaloChicken from "../assets/images/BuffaloChicken.png";
import SupremeDeluxe from "../assets/images/SupremeDeluxe.png";

const specialtyPizzas = [
  {
    id: 1,
    category: "Specialty Pizzas",
    name: "Meat Lovers",
    image: MeatLovers,
    sizes: {
      s: { price: 14 },
      m: { price: 18 },
      l: { price: 22 },
    },
    rate: 4.5,
  },
  {
    id: 2,
    category: "Specialty Pizzas",
    name: "BBQ Bacon Chicken",
    image: BBQBaconChicken,
    sizes: {
      s: { price: 13 },
      m: { price: 16 },
      l: { price: 19 },
    },
    rate: 4,
  },
  {
    id: 3,
    category: "Specialty Pizzas",
    name: "Buffalo Chicken",
    image: BuffaloChicken,
    sizes: {
      s: { price: 12 },
      m: { price: 15 },
      l: { price: 18 },
    },
    rate: 4,
  },
  {
    id: 4,
    category: "Specialty Pizzas",
    name: "Supreme Deluxe",
    image: SupremeDeluxe,
    sizes: {
      s: { price: 14 },
      m: { price: 18 },
      l: { price: 22 },
    },
    rate: 4.5,
  },
];

export default specialtyPizzas;
