import PizzaAndDrink from "../assets/images/PizzaAndDrink.png";
import PizzaAndWings from "../assets/images/PizzaAndWings.png";
import PersonalPizzaAndSalad from "../assets/images/PersonalPizzaAndSalad.png";

const specialOffers = [
  {
    id: 1,
    category: "Special Offers",
    name: "Combo Deal: Pizza + Drink",
    image: PizzaAndDrink,
    sizes: {
      s: { price: 15 },
      m: { price: 19 },
      l: { price: 23 },
    },
    rate: 4.5,
  },
  {
    id: 2,
    category: "Special Offers",
    name: "Family Feast: Large Pizza + Wings",
    image: PizzaAndWings,
    sizes: {
      s: { price: 20 },
      m: { price: 25 },
      l: { price: 30 },
    },
    rate: 4.5,
  },
  {
    id: 3,
    category: "Special Offers",
    name: "Lunch Special: Personal Pizza + Salad",
    image: PersonalPizzaAndSalad,
    sizes: {
      s: { price: 10 },
      m: { price: 12 },
      l: { price: 14 },
    },
    rate: 4,
  },
];

export default specialOffers;
