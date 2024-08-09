import React from "react";

const Book = ({ props }) => {
    const { id, title, author, src, price } = props;
    return (
        <div
            className="single-book"
            onClick={() =>
                console.log(
                    `Ranking: ${id} \nBook Name : ${title} \nAuthor : ${author} \n=> Price : \$${price}`
                )
            }
        >
            <div className="ranking">{`#${id}`}</div>
            <div className="image">
                <img src={src} alt={title}></img>
            </div>
            <p className="book-title">{title}</p>
            <p className="author">{author}</p>
            <span className="price-tag">{price}</span>
        </div>
    );
};

export default Book;
