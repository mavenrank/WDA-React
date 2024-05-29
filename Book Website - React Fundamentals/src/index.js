import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const Image = ({ src, alt }) => {
    return (
        <section>
            {console.log(src)}
            <img className="image" src={src} alt={alt} />
        </section>
    );
};

const Author = ({ authorname }) => {
    return <p className="authorname">{authorname}</p>;
};

const Bookname = ({ bookname }) => {
    return <p className="bookname">{bookname}</p>;
};
let count = 0;
const Book = ({ bookname, source, alt, authorname }) => {
    count++;
    console.log(count);
    return (
        <div className="outerborder col-large-3 col-med-6 col-small-12">
            <section className="book">
                <Bookname bookname={bookname} />
                <Image src={source} alt={alt} />
                <Author authorname={authorname} />
            </section>
        </div>
    );
};

const HarcodedBookList = () => {
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
                authorname="Evie Woods"
            />
        </section>
    );
};

const bookNameList = ["Atomic Habits", "Ikigai", "The Lost Bookhouse"];
const newBookName = bookNameList.map((newbookname) => {
    return <p>{newbookname}</p>;
});
const imageSrcList = [
    "https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/41jRRrqZipL._SY445_SX342_.jpg",
    "https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UY327_FMwebp_QL65_.jpg",
];
const newImageSrc = imageSrcList.map((newimagesrc) => {
    return <p>{newimagesrc}</p>;
});
const imageAltList = [
    "Image of Book Atomic Habits",
    "Image of Book Ikigai",
    "Image of Book The Lost Bookshop",
];
const newImageAlt = imageAltList.map((newimagealt) => {
    return <p>{newimagealt}</p>;
});
const authorNameList = [
    "James Clear",
    "Héctor García, Francesc Miralles",
    "Evie Woods",
];
const newAuthorName = authorNameList.map((newauthorname) => {
    return <p>{newauthorname}</p>;
});

function DynamicBookList() {
    let ctr = 1;
    return (
        <section className="booklist">
            <Book
                bookname={bookNameList[count]}
                source={imageSrcList[count]}
                alt={imageAltList[count]}
                authorname={authorNameList[count]}
            />
            <Book
                bookname={bookNameList[count + 1]}
                source={imageSrcList[count + 1]}
                alt={imageAltList[count + 1]}
                authorname={authorNameList[count + 1]}
            />
            <Book
                bookname={bookNameList[count + 2]}
                source={imageSrcList[count + 2]}
                alt={imageAltList[count + 2]}
                authorname={authorNameList[count + 2]}
            />
        </section>
    );
}

function DynamicBookList1() {
    const booklist = bookNameList.map((item, index) => {
        console.log(authorNameList[index]);
        return (
            <Book
                bookname={item[index]}
                source={imageSrcList[index]}
                alt={imageAltList[index]}
                authorname={authorNameList[index]}
            />
        );
    });
    console.log(booklist);
    return <section className="booklist">{booklist}</section>;
}

const Webpage = () => {
    return (
        <div className="mainDiv">
            <h1>Welcome to our BookStore</h1>
            {/* <HardcodedBookList></HardcodedBookList> */}
            <DynamicBookList1></DynamicBookList1>
            <div className="emptyDiv"></div>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Webpage />);
