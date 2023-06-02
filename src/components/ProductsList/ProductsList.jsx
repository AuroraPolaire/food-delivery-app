import React from "react";
import ProductCard from "../ProductsCard/ProductCard";
import { useLocation } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/productsSelector";

const ProductsList = () => {
  const location = useLocation();

  const isLoading = useSelector(selectLoading);

  const { food } = useProducts(location.pathname);

  return (
    <>
      {isLoading
        ? null
        : food !== undefined &&
          food.map((product) => {
            return (
              <ProductCard
                key={product.idMeal}
                product={product}
                location={location}
              />
            );
          })}
    </>
  );
};

export default ProductsList;
