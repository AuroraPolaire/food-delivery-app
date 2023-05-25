import React from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/productsSelector";
import ProductCard from "../ProductsCard/ProductCard";

const ProductsList = () => {
  const products = useSelector(selectProducts);
  return (
    <>
      {products.length !== 0 &&
        products.meals.map((product) => {
          return <ProductCard key={product.idMeal} product={product} />;
        })}
    </>
  );
};

export default ProductsList;
