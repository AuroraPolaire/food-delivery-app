import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/productsSelector";
import {
  addProduct,
  addStoreName,
  removeProduct,
} from "../../redux/productsSlice";
import { Tooltip } from "@chakra-ui/react";
import { includesMeal } from "../../utils/checkMeal";
import { faker } from "@faker-js/faker";
import { StyledCard } from "./ProductCard.styled";

const ProductCard = ({ product, location }) => {
  const dispatch = useDispatch();
  const storeName = location.pathname.slice(6, location.pathname.length);

  const cartItems = useSelector(selectCart);

  const price = useMemo(() => Number(faker.commerce.price()), []);

  const { strMealThumb, strMeal, idMeal } = product;

  const multipleActions = (dispatch) => {
    dispatch(addProduct({ ...product, price, amount: 1 }));
    dispatch(addStoreName(storeName));
  };

  return (
    <StyledCard>
      <img src={strMealThumb} alt={strMeal} />
      <div>
        <div>{strMeal}</div>
        <div>{price} &euro;</div>
      </div>

      <Tooltip
        label="You can add or remove item"
        fontSize="sm"
        bg="white"
        aria-label="A tooltip"
        color="black"
        border="1px solid gray"
        borderRadius="md"
        hasArrow
        arrowSize={8}
        arrowShadowColor="gray"
      >
        {includesMeal(idMeal, cartItems) ? (
          <button
            style={{ backgroundColor: "var(--accent-color-orange)" }}
            type="button"
            onClick={(e) => dispatch(removeProduct(idMeal))}
          >
            Remove from Cart
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              multipleActions(dispatch);
            }}
          >
            Add to Cart
          </button>
        )}
      </Tooltip>
    </StyledCard>
  );
};

export default ProductCard;
