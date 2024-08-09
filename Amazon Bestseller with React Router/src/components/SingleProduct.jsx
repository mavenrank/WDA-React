import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import book_data from "../data";
import ErrorPage from "./Error";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";

const SingleProduct = () => {
    const cart = useSelector((state)=>{state.arr})
    const dispatch = useDispatch();
    console.log(useParams());
    const { rank } = useParams();
    const book = book_data.find((singleBook) => singleBook.id === Number(rank));
    console.log(book);

    const handleaddtocart = () => {
        dispatch(addToCart(book));
        
    }

    if (!book) {
        return <ErrorPage />;
    }
    console.log(cart);
    const { id, title, author, src, price, about_the_author, description } = book;
    return (
        <div className="single-product-page">
            <Link to="/">
                <button className="back-button">Back to Books</button>
            </Link>
            <div className="single-product">
                <div className="single-book-image-section">
                    <img src={src} alt={title} />
                </div>
                <div className="single-book-text-section">
                    <h1 className="booktitle">{title}</h1>
                    <h2>About the Book</h2>
                    <p>{description}</p>
                    <h2 className="author">{author}</h2>
                    <p>{about_the_author}</p>
                    <h3 className="price">{price}</h3>
                </div>
            </div>
            <button className="increment-decrement">-</button>
            <input type="number" value={1}></input>
            <button className="increment-decrement">+</button>
            <button className="add-to-cart" onClick={handleaddtocart}>Add to Cart</button>
        </div>
    );
};

export default SingleProduct;
