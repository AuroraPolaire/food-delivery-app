import React from "react";
import { Formik } from "formik";
import { StyledInput, StyledLabel } from "../UserInfo/UserInfo.styled";
import { StyledIdFormBox } from "./IdForm.styled";
import { useDispatch } from "react-redux";
import { getUserOrder } from "../../redux/productsOperations";
import toast, { Toaster } from "react-hot-toast";

const IdForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          id: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(values, formik) => {
          dispatch(getUserOrder(values.id))
            .unwrap()
            .catch((error) => {
              console.log(error);
              if (error === "Request failed with status code 500") {
                toast.error("Order not found!", {
                  duration: 4000,
                  position: "top-right",
                });
              }
            });
        }}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <StyledIdFormBox>
              <div className="form-box">
                <div className="form-container">
                  <StyledLabel htmlFor="id"> Order:</StyledLabel>
                  {/* {formik.errors.name && formik.touched.name ? (
                    <Validation>{formik.errors.name}</Validation>
                  ) : null} */}
                  <StyledInput
                    id="id"
                    name="id"
                    type="number"
                    onChange={formik.handleChange}
                  />
                </div>
                <button type="submit">Submit</button>
              </div>
            </StyledIdFormBox>
          </form>
        )}
      </Formik>
      <Toaster />
    </>
  );
};

export default IdForm;
