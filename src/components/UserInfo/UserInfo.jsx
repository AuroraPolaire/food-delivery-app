import React from "react";

const UserInfo = ({ formik }) => {
  return (
    <>
      <label htmlFor="name"> Name</label>
      <input id="name" name="name" type="text" onChange={formik.handleChange} />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
      />
      <label htmlFor="phone">Phone</label>
      <input
        id="phone"
        name="phone"
        type="tel"
        onChange={formik.handleChange}
      />
      <label htmlFor="address">Address</label>
      <input
        id="address"
        name="address"
        type="text"
        onChange={formik.handleChange}
      />
    </>
  );
};

export default UserInfo;
