import React from "react";
import Book from "./Book";
import book_data from "../data";
import { Link } from "react-router-dom";

const DynamicBookList = () => {
    return (
        <React.Fragment>
            <div className="booklist">
                {book_data.map((book, id) => {
                    return (
                        <React.Fragment>
                            <Link
                                to={`products/${id + 1}`}
                                className="book-link"
                            >
                                <Book props={book} key={id}></Book>
                            </Link>
                        </React.Fragment>
                    );
                })}
            </div>
        </React.Fragment>
    );
};

export default DynamicBookList;
