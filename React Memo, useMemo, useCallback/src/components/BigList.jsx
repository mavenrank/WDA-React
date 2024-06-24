import React, { useEffect } from "react";
import SingleProduct from "./SingleProduct";

const BigList = React.memo(({ products, addtoCart }) => {
    // console.log(products);  //> works
    useEffect(() => {
        console.count("Biglist called");
    })
    return (
        <section className="products">
            {products.map((product) => {
                return <SingleProduct key={product.id}{...product} addtoCart={addtoCart}></SingleProduct>;
            })}
        </section>
    );
});

export default BigList;
