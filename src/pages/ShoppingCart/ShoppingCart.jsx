import React, { useEffect } from "react";
import CartItemList from "../../components/CartItemsList/CartItemList";
import UserInfo from "../../components/UserInfo/UserInfo";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectCart, selectTotal } from "../../redux/productsSelector";
import { calculateTotal } from "../../redux/productsSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCart);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(calculateTotal());
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          // order: cartItems,
        }}
        onSubmit={(values) => {
          let formData = new FormData();
          formData.append("total", total);
          formData.append("order", cartItems);

          Object.keys(values).forEach((key) => {
            console.log(key);
            if (key === "order") {
              formData.append(key, JSON.stringify(values[key]));
              return;
            }
            formData.append(key, values[key]);
          });

          // for (let [name, value] of formData) {
          // console.log(`${name} = ${value}`);
          // if (name === "order") {
          //   console.log(JSON.parse(value));
          // return;
          // }
          // }
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <UserInfo formik={formik} />
            <CartItemList formik={formik} type="number" label="amount" />
            <div>
              Total price:
              {total}
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ShoppingCart;
