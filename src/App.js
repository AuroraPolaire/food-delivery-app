import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { fetchProducts } from "./redux/productsOperations";

function App() {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchProducts());
  // });

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/shop" element={<Shop />}>
          <Route path="egersund" element={<ProductsList />} />
          <Route path="foodmarket" element={<div>shop</div>} />
          <Route path="domino" element={<div>shop</div>} />
          <Route path="chelentano" element={<div>shop</div>} />
          <Route path="mafia" element={<div>shop</div>} />
        </Route>
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
