import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GlobalContainer } from "../../layout/GlobalContainer";
import Navigation from "../Navigation/Navigation";
import PuffLoader from "react-spinners/PuffLoader";

const override = {
  display: "block",
  margin: "100px auto",
  borderColor: "red",
};

const SharedLayout = () => {
  return (
    <>
      <Navigation />
      <GlobalContainer>
        <Suspense
          fallback={
            <PuffLoader color="#219ebc" size={120} cssOverride={override} />
          }
        >
          <Outlet />
        </Suspense>
      </GlobalContainer>
    </>
  );
};

export default SharedLayout;
