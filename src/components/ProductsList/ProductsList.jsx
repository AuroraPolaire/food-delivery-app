import React from "react";
import ProductCard from "../ProductsCard/ProductCard";
import { useLocation } from "react-router-dom";
import { GetPath } from "../../hooks/GetPath";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/productsSelector";

const ProductsList = () => {
  const location = useLocation();

  const isLoading = useSelector(selectLoading);
  console.log(isLoading);

  const { food } = GetPath(location.pathname);

  return (
    <>
      {isLoading
        ? null
        : food !== undefined &&
          food.map((product) => {
            return <ProductCard key={product.idMeal} product={product} />;
          })}
    </>
  );
};

export default ProductsList;
