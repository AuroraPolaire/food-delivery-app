import React from "react";
import ShopsList from "../../components/ShopsList/ShopsList";
import { ShopPageContainer } from "./Shop.styled";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <HelmetProvider>
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
      </HelmetProvider>
    </>
  );
};

export default Shop;
