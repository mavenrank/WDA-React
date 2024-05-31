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

export default Book;