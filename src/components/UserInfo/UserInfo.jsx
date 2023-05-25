import React from "react";
import { StyledInput, StyledLabel } from "./UserInfo.styled";

const UserInfo = ({ formik }) => {
  return (
    <>
      <div>
        <StyledLabel htmlFor="name"> Name:</StyledLabel>
        <StyledInput
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <StyledLabel htmlFor="phone">Phone:</StyledLabel>
        <StyledInput
          id="phone"
          name="phone"
          type="tel"
          onChange={formik.handleChange}
        />
      </div>
      <div>
        <StyledLabel htmlFor="address">Address:</StyledLabel>
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
