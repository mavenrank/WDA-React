import Book from "./Book";

const HardcodedBooklist = () => {
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

export default HardcodedBooklist;
