import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Products from "./views/Products";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Page404 from "./views/others/Page404";
import NavBar from "./components/NavBar";
import Product from "./views/Product";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App;