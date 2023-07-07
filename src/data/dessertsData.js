import ChocolateBrownie from "../assets/images/ChocolateBrownie.png";
import Cheesecake from "../assets/images/Cheesecake.png";
import Tiramisu from "../assets/images/Tiramisu.png";
import Cannoli from "../assets/images/Cannoli.png";
import IceCreamSundae from "../assets/images/IceCreamSundae.png";

const desserts = [
  {
    id: 1,
    category: "Desserts",
    name: "Chocolate Brownie",
    image: ChocolateBrownie,
    sizes: {
      s: { price: 12 },
      m: { price: 16 },
      l: { price: 20 },
    },
    rate: 4.5,
  },
  {
    id: 2,
    category: "Desserts",
    name: "Cheesecake",
    image: Cheesecake,
    sizes: {
      s: { price: 10 },
      m: { price: 14 },
      l: { price: 18 },
    },
    rate: 4,
  },
  {
    id: 3,
    category: "Desserts",
    name: "Tiramisu",
    image: Tiramisu,
    sizes: {
      s: { price: 8 },
      m: { price: 12 },
      l: { price: 16 },
    },
    rate: 4.5,
  },
  {
    id: 4,
    category: "Desserts",
    name: "Cannoli",
    image: Cannoli,
    sizes: {
      s: { price: 10 },
      m: { price: 14 },
      l: { price: 18 },
    },
    rate: 4,
  },
  {
    id: 5,
    category: "Desserts",
    name: "Ice Cream Sundae",
    image: IceCreamSundae,
    sizes: {
      s: { price: 10 },
      m: { price: 14 },
      l: { price: 18 },
    },
    rate: 4.5,
  },
];

export default desserts;
