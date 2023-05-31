import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GlobalContainer } from "../../layout/GlobalContainer";
import Navigation from "../Navigation/Navigation";

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <GlobalContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </GlobalContainer>
    </>
  );
};

export default SharedLayout;
