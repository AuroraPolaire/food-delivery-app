import { useSelector } from "react-redux";
import {
  selectChicken,
  selectDesserts,
  selectSeafood,
  selectVegan,
} from "../redux/productsSelector";

export const useProducts = (location) => {
  const seafood = useSelector(selectSeafood);
  const desserts = useSelector(selectDesserts);
  const vegan = useSelector(selectVegan);
  const chicken = useSelector(selectChicken);

  let food;

  switch (location) {
    case "/shop/egersund":
      food = seafood.meals;
      break;
    case "/shop/dessertsstore":
      food = desserts.meals;
      break;
    case "/shop/veganstore":
      food = vegan.meals;
      break;
    case "/shop/chickenstore":
      food = chicken.meals;
      break;
    default:
      return;
  }

  return { food };
};
