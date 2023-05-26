import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { fetchProducts } from "./redux/productsOperations";

const alert = "Coming soon... ";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to="/shop" />} />
        <Route path="/shop" element={<Shop />}>
          <Route
            index
            element={<div className="not-available"> Choose a shop</div>}
          />
          <Route path="egersund" element={<ProductsList />} />
          <Route
            path="foodmarket"
            element={<div className="not-available">{alert}</div>}
          />
          <Route
            path="domino"
            element={<div className="not-available">{alert}</div>}
          />
          <Route
            path="chelentano"
            element={<div className="not-available">{alert}</div>}
          />
          <Route
            path="mafia"
            element={<div className="not-available">{alert}</div>}
          />
        </Route>
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
