import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSeafood,
  getChickenList,
  getDessertsList,
} from "../../redux/productsOperations";
import { shops } from "../../utils/shops";
import { ShopButton } from "./ShopsList.styled";
import { useLocation } from "react-router-dom";
import { getVeganList } from "../../redux/productsOperations";
import {
  selectChicken,
  selectDesserts,
  selectSeafood,
  selectVegan,
} from "../../redux/productsSelector";

const ShopsList = () => {
  const location = useLocation();
  console.log(location.pathname);
  const dispatch = useDispatch();

  const seafood = useSelector(selectSeafood);
  const desserts = useSelector(selectDesserts);
  const vegan = useSelector(selectVegan);
  const chicken = useSelector(selectChicken);

  useEffect(() => {
    if (location.pathname === "/shop/egersund" && seafood.length === 0)
      dispatch(fetchSeafood());
    if (location.pathname === "/shop/dessertsstore" && desserts.length === 0)
      dispatch(getDessertsList());

    if (location.pathname === "/shop/veganstore" && vegan.length === 0)
      dispatch(getVeganList());
    if (location.pathname === "/shop/chickenstore" && chicken.length === 0)
      dispatch(getChickenList());
  }, [
    location.pathname,
    dispatch,
    seafood.length,
    desserts.length,
    vegan.length,
    chicken.length,
  ]);

  return (
    <>
      {shops.map(({ href, name }) => {
        return (
          <ShopButton
            to={href}
            key={name}
            style={({ isActive }) =>
              isActive ? { fontWeight: "bold", backgroundColor: "#219ebc" } : {}
            }
          >
            {name}
          </ShopButton>
        );
      })}
    </>
  );
};

export default ShopsList;
