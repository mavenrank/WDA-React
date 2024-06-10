import React, { useState } from "react";
import data from "./data";
function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(count);

        // ! we see that if we leave it to zero, then it is a number
        // ! if we change the value to any other number, then it is a String

        let amount = parseInt(count);
        console.log(amount);
        console.log(typeof amount);

        let article = document.getElementById("error-value");
        console.log(article);

        let loremtext = document.getElementById("lorem-text");
        console.log(loremtext);

        if (count < 0) {
            article.innerText =
                "Woah there! How can you generate negative number of paragraphs? 🤔\nGive a positive value bucko!";
            return;
        } else if (count == 0) {
            article.innerText =
                "Well you told me not to generate anything ¯\\_(ツ)_/¯\nGive me a positive value";
            return;
        } else if (count > 0 && count <= data.length) {
            article.innerText = "";
            setText(data.slice(0, amount));
            return;
        }
        if (amount > data.length) {
            if (amount > 50) {
                let userConfirm = window.confirm(
                    `Are you Sure you wanna generate ${amount} paragraphs?`
                );
                //! issue present here, after user Declines and then accepts a larger value, the paras start from the previous value.
                if (userConfirm) {
                    article.innerText = "";
                    let paragraphs = [];
                    console.log(`Amount : ${amount}`);
                    console.log(`Paragraph Length : ${paragraphs.length} `);
                    while (paragraphs.length < amount) {
                        paragraphs = paragraphs.concat(data);
                    }
                    console.log(paragraphs.length);
                    paragraphs = paragraphs.slice(0, amount);
                    setText(paragraphs);
                    return;
                } else {
                    loremtext.innerText = "";
                    setCount(0);

                    article.innerText = "Provide another value";
                    return;
                }
            } else {
                article.innerText = "";
                let paragraphs = [];
                while (paragraphs.length < amount) {
                    paragraphs = paragraphs.concat(data);
                }
                console.log(paragraphs.length);
                paragraphs = paragraphs.slice(0, amount);
                setText(paragraphs);
                return;
            }
        }
    };

    return (
        <React.Fragment>
            <section className="section-center">
                <h3>Tired of boring Lorem Ipsum Text</h3>
                <form onSubmit={handleSubmit} className="lorem-form">
                    <label htmlFor="amount">Paragraphs: </label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Generate
                    </button>
                </form>
                <article id="error-value" className="lorem-text"></article>
                <article id="lorem-text" className="lorem-text">
                    {text.map((element, index) => {
                        return (
                            <p key={index}>
                                {index + 1} ----
                                {element}
                            </p>
                        );
                    })}
                </article>
            </section>
        </React.Fragment>
    );
}

export default App;
