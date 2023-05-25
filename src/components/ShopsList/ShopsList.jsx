import React from "react";
import { useSelector } from "react-redux";
import { selectShops } from "../../redux/productsSelector";

const ShopsList = () => {
  const shopsList = useSelector(selectShops);
  return (
    <>
      {shopsList.map((shop) => {
        return <button key={shop}>{shop}</button>;
      })}
    </>
  );
};

export default ShopsList;
