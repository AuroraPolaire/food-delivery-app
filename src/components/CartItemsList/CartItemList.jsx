import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/productsSelector";
import { changeAmount, removeProduct } from "../../redux/productsSlice";
import { CartBox, StyledIcon } from "./CartItemList.styled";
import { DeleteIcon } from "@chakra-ui/icons";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const CartItemList = ({ formik }) => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();

  const increaseAmount = (id, amount) => {
    dispatch(changeAmount({ id, amount: ++amount }));
  };

  const decreaseAmount = (id, amount) => {
    dispatch(changeAmount({ id, amount: --amount }));
  };

  return (
    <>
      {cartItems.map(({ strMealThumb, strMeal, price, idMeal, amount }) => {
        return (
          <CartBox key={idMeal}>
            <DeleteIcon
              as={StyledIcon}
              w={20}
              h={20}
              onClick={(e) => dispatch(removeProduct(idMeal))}
            />

            <img src={strMealThumb} alt={strMeal} />
            <div className="cart-item-data">
              <p>{strMeal}</p>
              <p>
                Price: <span className="price">{price} &euro; </span>
              </p>
              <div className="amount-container">
                <button
                  type="button"
                  className="amount-button"
                  onClick={() => decreaseAmount(idMeal, amount)}
                  disabled={amount <= 1}
                >
                  <MinusIcon />
                </button>
                <div className="amount-input"> {amount} </div>
                <button
                  type="button"
                  className="amount-button"
                  onClick={() => increaseAmount(idMeal, amount)}
                  disabled={amount >= 15}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
          </CartBox>
        );
      })}
    </>
  );
};

export default CartItemList;
