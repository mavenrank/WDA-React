import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css" 

function Person(usr) {
    return (
        <>
            <span>{usr.name}</span>
        </>
    );
}

function Message(msg) {
    return (
        <>
            <span>{msg.text}</span>
        </>
    );
}

const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
};


function Greeting() {
    return (
        <>
            <p>
                <Message text="Good Morning " />, <Person name="Roopam" />
            </p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <p>{user.name}</p>
                <img
                    src={user.imageUrl}
                    alt={"Photo of " + user.name}
                    style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        paddingLeft: "10px",
                    }}
                />
            </div>
        </>
    );
}

const Image = ({ source, alt }) => {
    return (
        <section className="image">
            <img
                src= {source}
                alt = {alt}
            />
        </section>
    );
}

const Author = ({authorname}) => {
    return (
        <p className="authorname">{authorname}</p>
    )
} 

const Bookname = ({ bookname }) => {
    return (
        <p className="bookname">{bookname}</p>
    )
}

const Book = ({ bookname, source, alt, authorname }) => {
    console.log(source)
    return (
        <div className="outerborder col-large-3 col-med-6 col-small-12">
            <section className="book">
                <Bookname bookname={bookname} />
                <img src={source} alt={alt} className="image" />
                {/* <Image src={source} alt={alt} />   There is an issues here and this doesnt work properly */}
                <Author authorname={authorname} />
            </section>
        </div>
    );
}

const BookList = () => {
    return (
        <section className="booklist">
            <Book
                bookname="Atomic Habits"
                source="https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg"
                alt="Image of book Atomic Habits"
                authorname="James Clear"
            />
            <Book
                bookname="Ikigai"
                source="https://m.media-amazon.com/images/I/41jRRrqZipL._SY445_SX342_.jpg"
                alt="Image of book Ikigai: Japanese Secret to Long and Happy Life"
                authorname="Héctor García, Francesc Miralles"
            />
            <Book
                bookname="The Lost Bookshop"
                source="https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UY327_FMwebp_QL65_.jpg"
                alt="Image of book The Lost Bookshop"
                authorname="Héctor García, Francesc Miralles"
            />
        </section>
    );
}

const Webpage = () => {
    return (
        <div className="mainDiv">
            <h1>Welcome to our BookStore</h1>
            <BookList></BookList>
            <div className="emptyDiv"></div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Webpage/>);
