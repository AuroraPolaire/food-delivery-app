import React from "react";
import { shops } from "../../utils/shops";
import { ShopButton } from "./ShopsList.styled";

const ShopsList = () => {
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
