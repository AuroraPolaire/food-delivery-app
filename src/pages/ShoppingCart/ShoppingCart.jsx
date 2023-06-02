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
import { Helmet, HelmetProvider } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

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
      <HelmetProvider>
        <Helmet>
          <title>Shopping cart</title>
        </Helmet>
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, formik) => {
            dispatch(
              sendUserOrder({
                ...values,
                total: total,
                order: cartItems,
              })
            ).then(({ payload }) => {
              toast.success(
                `Order successfully sent! Your order number is ${payload.id}. You can check it on History page`,
                {
                  duration: 8000,
                  position: "top-right",
                }
              );
              dispatch(emptyCart());
              formik.resetForm();
            });

            console.log(values, total, cartItems);
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
                    <CartItemList
                      formik={formik}
                      type="number"
                      label="amount"
                    />
                  )}
                </div>
              </StyledCartBox>
              <StyledTotal>
                <div>
                  Total price: <span className="price">{total} &euro;</span>
                </div>
                <button disabled={cartItems.length === 0} type="submit">
                  Submit
                </button>
              </StyledTotal>
            </form>
          )}
        </Formik>
        <Toaster />
      </HelmetProvider>
    </>
  );
};

export default ShoppingCart;
