import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalContainer } from "../../layout/GlobalContainer";
import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <GlobalContainer>
        <Outlet />
      </GlobalContainer>
    </>
  );
};

export default SharedLayout;
