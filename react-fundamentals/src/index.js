import React from "react";
import ReactDOM from "react-dom/client";

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

const Image = ({ source, alt }) => {
    return (
        <>
            <img
                src= {source}
                alt = {alt}
            />
        </>
    );
}

const Author = ({authorname}) => {
    return (
        <p>{authorname}</p>
    )
} 

const Bookname = ({ bookname }) => {
    return (
        <p>{bookname}</p>
    )
}

const Book = ({ bookname, source, alt, authorname }) => {
    console.log(source)
    return (
        <>
            <Bookname bookname={bookname} />
            <img src={source} />
            <Image src={source} alt={alt} />
            <Author authorname={authorname} />
        </>
    )
}

const BookList = () => {
    return (
        <>
            <Book
                bookname="Atomic Habits"
                source="https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg"
                alt="Image of book Atomic Habits"
                authorname="James Clear"
            />

        </>
    );
}


function Greeting() {
    return (
        <>
            <p>
                <Message text="Good Morning " />, <Person name="Roopam" />
            </p>
            <div style={{ display: "flex", flexDirection: "row", alignItems:"center"}}>
                <p>{user.name}</p>
                <img
                    src={user.imageUrl}
                    alt={"Photo of " + user.name}
                    style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        paddingLeft:'10px'
                    }}
                />
            </div>
        </>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);
