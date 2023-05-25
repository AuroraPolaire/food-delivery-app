import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/productsSelector";
import { addProduct, removeProduct } from "../../redux/productsSlice";
import { Tooltip } from "@chakra-ui/react";
import { includesMeal } from "../../utils/checkMeal";
import { faker } from "@faker-js/faker";

const ProductCard = ({ product }) => {
  const cartItems = useSelector(selectCart);

  const dispatch = useDispatch();

  const price = useMemo(() => Number(faker.commerce.price()), []);

  const { strMealThumb, strMeal, idMeal } = product;
  return (
    <div>
      <img src={strMealThumb} alt={strMeal} />
      <p>{strMeal}</p>
      <p>{price}</p>
      <Tooltip
        label="You can add or remove item"
        fontSize="md"
        aria-label="A tooltip"
      >
        {includesMeal(idMeal, cartItems) ? (
          <button
            type="button"
            onClick={(e) => dispatch(removeProduct(idMeal))}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) =>
              dispatch(addProduct({ ...product, price, amount: 1 }))
            }
          >
            Add to Cart
          </button>
        )}
      </Tooltip>
    </div>
  );
};

export default ProductCard;
