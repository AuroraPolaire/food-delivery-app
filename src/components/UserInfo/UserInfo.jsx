import React from "react";
import { StyledInput, StyledLabel, Validation } from "./UserInfo.styled";

const UserInfo = ({ formik }) => {
  return (
    <>
      <div className="form-container">
        <StyledLabel htmlFor="name"> Name:</StyledLabel>
        {formik.errors.name && formik.touched.name ? (
          <Validation>{formik.errors.name}</Validation>
        ) : null}
        <StyledInput
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-container">
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        {formik.errors.email && formik.touched.email ? (
          <Validation>{formik.errors.email}</Validation>
        ) : null}
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-container">
        <StyledLabel htmlFor="phone">Phone:</StyledLabel>
        {formik.errors.phone && formik.touched.phone ? (
          <Validation>{formik.errors.phone}</Validation>
        ) : null}
        <StyledInput
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-container">
        <StyledLabel htmlFor="address">Address:</StyledLabel>
        {formik.errors.address && formik.touched.address ? (
          <Validation>{formik.errors.address}</Validation>
        ) : null}
        <StyledInput
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
        />
      </div>
    </>
  );
};

export default UserInfo;
