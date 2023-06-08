import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchSeafood,
  getChickenList,
  getDessertsList,
} from "../../redux/productsOperations";
import { shops } from "../../utils/shops";
import { ShopButton } from "./ShopsList.styled";
import { getVeganList } from "../../redux/productsOperations";
import {
  selectCart,
  selectChicken,
  selectDesserts,
  selectDisabledButton,
  selectSeafood,
  selectStoreName,
  selectVegan,
} from "../../redux/productsSelector";
import { Tooltip } from "@chakra-ui/react";

const ShopsList = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const seafood = useSelector(selectSeafood);
  const desserts = useSelector(selectDesserts);
  const vegan = useSelector(selectVegan);
  const chicken = useSelector(selectChicken);
  const cart = useSelector(selectCart);
  const storeName = useSelector(selectStoreName);
  const disabled = useSelector(selectDisabledButton);

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
          <Tooltip
            key={name}
            isDisabled={disabled || storeName === href}
            label="You can order food only from one store at a time. To choose another store you have to delete items from the cart."
            fontSize="sm"
            bg="white"
            aria-label="A tooltip"
            color="black"
            border="1px solid gray"
            borderRadius="md"
            hasArrow
            arrowSize={8}
            arrowShadowColor="gray"
          >
            <ShopButton
              onClick={(e) => {
                if (storeName !== href && cart.length !== 0) {
                  e.preventDefault();
                }
                if (cart.length !== 0) navigate(`/shop/${storeName}`);
              }}
              disabled={storeName !== href && cart.length !== 0}
              to={href}
              key={name}
              className={!disabled ? "disabled-button" : "active-button"}
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bold", backgroundColor: "#219ebc" }
                  : {}
              }
            >
              {name}
            </ShopButton>
          </Tooltip>
        );
      })}
    </>
  );
};

export default ShopsList;
