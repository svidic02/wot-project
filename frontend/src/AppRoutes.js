import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FoodPage from "./pages/Food/FoodPage";
import CartPage from "./pages/Cart/CartPage";
import LoginPage from "./pages/Login/LoginPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/search/:searchTerm" element={<HomePage />}></Route>
      <Route path="/tag/:tag" element={<HomePage/>}></Route>
      <Route path="/food/:id" element={<FoodPage/>}></Route>
      <Route path="/cart" element={<CartPage/>}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
    </Routes>
  );
}
