import React, { useEffect, useState } from "react";
import CartItemList from "../../components/CartItemsList/CartItemList";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectTotal } from "../../redux/productsSelector";
import { calculateTotal, emptyCart } from "../../redux/productsSlice";
import { StyledCartBox, StyledTotal } from "./ShoppingCart.styled";
import { validationSchema } from "../../utils/validation";
import { sendUserOrder } from "../../redux/productsOperations";

const ShoppingCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCart);
  const total = useSelector(selectTotal);
  // eslint-disable-next-line
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
        validationSchema={validationSchema}
        onSubmit={(values, formik) => {
          let formData = new FormData();
          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          formData.append("total", total);
          formData.append("order", JSON.stringify(cartItems));

          dispatch(sendUserOrder(formData));
          console.log(values, total, cartItems);
          dispatch(emptyCart());
          formik.resetForm();
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <StyledCartBox>
              <div className="form-box">
                <UserInfo formik={formik} />
              </div>
              <div className="cart-box">
                {cartItems.length === 0 ? (
                  <div className="empty">The cart is empty.</div>
                ) : (
                  <CartItemList formik={formik} type="number" label="amount" />
                )}
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
