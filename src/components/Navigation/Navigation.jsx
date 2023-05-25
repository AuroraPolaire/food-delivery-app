import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/shoppingCart">Shopping Cart</NavLink>
      </div>
    </>
  );
};

export default Navigation;
