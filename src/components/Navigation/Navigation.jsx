import React from "react";
import { GlobalContainer } from "../../layout/GlobalContainer";
import { StyledHeader, StyledLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <>
      <StyledHeader>
        <GlobalContainer>
          <StyledLink
            to="/shop"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "1px solid black", fontWeight: "bold" }
                : {}
            }
          >
            Shop
          </StyledLink>
          <StyledLink
            to="/shoppingCart"
            style={({ isActive }) =>
              isActive
                ? { borderBottom: "1px solid black", fontWeight: "bold" }
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
