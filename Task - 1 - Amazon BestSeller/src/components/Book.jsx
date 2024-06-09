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
            <span className="ranking">{`#${id}`}</span>
            <div className="image">
                <img src={src} alt={title}></img>
            </div>
            <p className="title">{title}</p>
            <p className="author">{author}</p>
            <span className="price-tag">{price}</span>
        </div>
    );
};

export default Book;
