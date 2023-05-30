import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import ProductsList from "./components/ProductsList/ProductsList";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import History from "./pages/History/History";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

const alert = "Coming soon... ";

function App() {
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
          <Route path="dessertsstore" element={<ProductsList />} />
          <Route path="veganstore" element={<ProductsList />} />
          <Route path="chickenstore" element={<ProductsList />} />
          <Route
            path="comingsoon"
            element={<div className="not-available">{alert}</div>}
          />
        </Route>
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
