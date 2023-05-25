import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../redux/productsSelector";
import { calculateTotal, changeAmount } from "../../redux/productsSlice";

const CartItemList = ({ formik }) => {
  const cartItems = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <>
      {cartItems.map(({ strMealThumb, strMeal, price, idMeal, amount }) => {
        return (
          <div key={idMeal}>
            <img src={strMealThumb} alt={strMeal} />
            <p>{strMeal}</p>
            <p>{price}</p>
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
        );
      })}
    </>
  );
};

export default CartItemList;
