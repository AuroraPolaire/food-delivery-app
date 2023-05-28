import React from "react";
import { GlobalContainer } from "../../layout/GlobalContainer";
import { StyledHeader, StyledLink } from "./Navigation.styled";
import { useSelector } from "react-redux";
import { selectCart, selectStoreName } from "../../redux/productsSelector";

const Navigation = () => {
  const cart = useSelector(selectCart);
  const storeName = useSelector(selectStoreName);
  return (
    <>
      <StyledHeader>
        <GlobalContainer>
          <StyledLink
            to={cart.length !== null ? `/shop/${storeName}` : "/shop"}
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "2px solid black", fontWeight: "bold" }
                : {}
            }
          >
            Shop
          </StyledLink>
          <StyledLink
            to="/shoppingCart"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "2px solid black", fontWeight: "bold" }
                : {}
            }
          >
            Shopping Cart
          </StyledLink>
        </GlobalContainer>
      </StyledHeader>
    </>
  );
};

export default Navigation;
