import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/productsSelector";
import { changeAmount, removeProduct } from "../../redux/productsSlice";
import { CartBox, StyledIcon } from "./CartItemList.styled";
import { DeleteIcon } from "@chakra-ui/icons";

const CartItemList = ({ formik }) => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();
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
              <input
                name="amount"
                type="number"
                min={1}
                defaultValue={amount}
                onChange={(e) => {
                  const value = e.target.value;
                  dispatch(changeAmount({ idMeal, value }));
                  formik.handleChange(e);
                }}
              />
            </div>
          </CartBox>
        );
      })}
    </>
  );
};

export default CartItemList;