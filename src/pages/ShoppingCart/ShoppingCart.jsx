import React, { useEffect, useState } from "react";
import CartItemList from "../../components/CartItemsList/CartItemList";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectTotal } from "../../redux/productsSelector";
import { calculateTotal } from "../../redux/productsSlice";
import { StyledCartBox, StyledTotal } from "./ShoppingCart.styled";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCart);
  const total = useSelector(selectTotal);

  const [cart, setCart] = useState(cartItems);

  useEffect(() => {
    dispatch(calculateTotal());
    setCart(cartItems);
  }, [dispatch, cartItems]);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
        }}
        onSubmit={(values, { resetForm }) => {
          let formData = new FormData();
          formData.append("total", total);
          formData.append("order", JSON.stringify(cartItems));
          resetForm({
            values: "",
          });

          // Object.keys(values).forEach((key) => {
          //   if (key === "order") {
          //     formData.append(key, JSON.stringify(values[key]));
          //     return;
          //   }
          //   formData.append(key, values[key]);
          // });
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <StyledCartBox>
              <div className="form-box">
                <UserInfo formik={formik} />
              </div>
              <div className="cart-box">
                <CartItemList formik={formik} type="number" label="amount" />
              </div>
            </StyledCartBox>
            <StyledTotal>
              <div>
                Total price: <span className="price">{total} &euro;</span>
              </div>
              <button type="submit">Submit</button>
            </StyledTotal>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ShoppingCart;
