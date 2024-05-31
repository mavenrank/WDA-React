import {Book} from "./Book"

const bookNameList = ["Atomic Habits", "Ikigai", "The Lost Bookhouse"];
const imageSrcList = [
    "https://m.media-amazon.com/images/I/71F4+7rk2eL._AC_UY327_FMwebp_QL65_.jpg",
    "https://m.media-amazon.com/images/I/41jRRrqZipL._SY445_SX342_.jpg",
    "https://m.media-amazon.com/images/I/91Sy3S-198L._AC_UY327_FMwebp_QL65_.jpg",
];
const imageAltList = [
    "Image of Book Atomic Habits",
    "Image of Book Ikigai",
    "Image of Book The Lost Bookshop",
];
const authorNameList = [
    "James Clear",
    "Héctor García, Francesc Miralles",
    "Evie Woods",
];

// not using this part of code
function DynamicBookListType2() {
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

function DynamicBookList() {
    const booklist = bookNameList.map((index) => {
        console.log(authorNameList[index]);
        return (
            <Book
                bookname={bookNameList[index]}
                source={imageSrcList[index]}
                alt={imageAltList[index]}
                authorname={authorNameList[index]}
            />
        );
    });
    console.log(booklist);
    return <section className="booklist">{booklist}</section>;
}
