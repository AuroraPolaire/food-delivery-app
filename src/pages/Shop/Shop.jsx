import React from "react";
import ShopsList from "../../components/ShopsList/ShopsList";
import { ShopPageContainer } from "./Shop.styled";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop</title>
      </Helmet>
      <ShopPageContainer>
        <div className="shopsList">
          <ShopsList />
        </div>
        <div className="productsList">
          <Outlet />
        </div>
      </ShopPageContainer>
    </>
  );
};

export default Shop;
