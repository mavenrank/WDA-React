import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import SingleProduct from "./components/SingleProduct"
import Cart from "./components/Cart";
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavBar />}>
                        <Route index element={<Home />}></Route>
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/products/:rank" element={<SingleProduct />}></Route>
                        <Route path="/cart" element={<Cart/>}></Route>
                    </Route>
                    <Route path="*" element={<Error />}></Route>
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
