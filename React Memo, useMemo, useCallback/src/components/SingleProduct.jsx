import React, {useEffect} from "react";

const SingleProduct = ({ fields, addtoCart }) => {
    const { name, price } = fields;
    const img = fields.image[0].url;
    useEffect(() => {
        console.count("SingleProduct called");
    });
    return (
        <article className="product">
            <img src={img} alt={name}></img>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={addtoCart}>Add to Cart</button>
        </article>
    );
};

export default SingleProduct;
