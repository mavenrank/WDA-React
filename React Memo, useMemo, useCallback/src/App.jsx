import React, { useCallback, useMemo, useState } from "react";

import { useFetch } from "./components/useFetch";
import BigList from "./components/BigList";

import javascript_store_products from "../Products";

// ! not able to fetch data

const calculateMostExpensive = (data) => {
    console.count("calculateMostExpensive called");
    return data.reduce((total, item) => {
        const price = item.fields.price;
        if (price >= total) total = price;
        return total;
    }, 0);
};

const App = () => {
    const [count, setCount] = useState(0);

    const [cart, setCart] = useState(0);

    const addtoCart = useCallback(() => {
        setCart(cart + 1);
    }, [cart]);


    // const { products } = useFetch(url);
    // ! fetch results in Undefined
    
    const products = javascript_store_products;
    const mostExpensive = useMemo(()=> calculateMostExpensive(products), [products])

    return (
        <>
            <h1>React Memo, useMemo, useCallback Tutorial</h1>
            <h1>Most Expensive : {mostExpensive}</h1>
            <div className="container">
                <h3>Generic Button</h3>
                <h2>{`Count : ${count}`}</h2>
                <button
                    className="btn"
                    onClick={(e) => {
                        setCount(count + 1);
                    }}
                >
                +
                </button>
            </div>
            <BigList products={products} addtoCart={addtoCart}></BigList>
        </>
    );
};

export default App;
