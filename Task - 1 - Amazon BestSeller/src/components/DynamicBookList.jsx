import React from "react";
import Book from "./Book";
import book_data from "../data";

const DynamicBookList = () => {
    return (
        <div className="booklist">
            <Book props={book_data[0]}></Book>
            <Book props={book_data[1]}></Book>
            <Book props={book_data[2]}></Book>
            <Book props={book_data[3]}></Book>
            <Book props={book_data[4]}></Book>
            <Book props={book_data[5]}></Book>
            <Book props={book_data[6]}></Book>
            <Book props={book_data[7]}></Book>
            <Book props={book_data[8]}></Book>
            <Book props={book_data[9]}></Book>
            <Book props={book_data[10]}></Book>
            <Book props={book_data[11]}></Book>
            <Book props={book_data[12]}></Book>
            <Book props={book_data[13]}></Book>
            <Book props={book_data[14]}></Book>
            <Book props={book_data[15]}></Book>
            <Book props={book_data[16]}></Book>
            <Book props={book_data[17]}></Book>
            <Book props={book_data[18]}></Book>
            <Book props={book_data[19]}></Book>
            <Book props={book_data[20]}></Book>
            <Book props={book_data[21]}></Book>
            <Book props={book_data[22]}></Book>
            <Book props={book_data[23]}></Book>
            <Book props={book_data[24]}></Book>
        </div>
    );
};

export default DynamicBookList;
