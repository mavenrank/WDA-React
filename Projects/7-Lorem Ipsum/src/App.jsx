import React, { useState } from "react";
import data from "./data";
function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(count);
        console.log(`type of count is : ${typeof count}`);

        // ! we see that if we leave it to zero, then it is a number
        // ! if we change the value to any other number, then it is a String
        //? issue couldn't recreate, fixed.
        let amount = parseInt(count);
        console.log(amount);
        console.log(typeof amount);

        let errorText = document.getElementById("error-value");
        console.log(errorText);

        //???????? let loremText = document.getElementById("lorem-text");
        //! DO NOT TAMPER WITH THE DOCUMENT ELEMENT SEPARATELY USING JSDOM,
        //! THIS ELEMENT WAS BEING CONTORLLED BY TEXT STATE VARIABLE
        //! USE ONLY SETTEXT TO CHANGE THE VALUES OF TEXT

        if (count < 0) {
            errorText.innerText =
                "Woah there! How can you generate negative number of paragraphs? 🤔\nGive a positive value bucko!";
            return;
        } else if (count == 0) {
            errorText.innerText =
                "Well you told me not to generate anything ¯\\_(ツ)_/¯\nGive me a positive value";
            return;
        } else if (count > 0 && count <= data.length) {
            errorText.innerText = "";
            setText(data.slice(0, count));
            return;
        }
        if (count > data.length) {
            if (count > 50) {
                let userConfirm = window.confirm(
                    `Are you Sure you wanna generate ${count} paragraphs?`
                );
                //! issue present here, after user Declines and then accepts a larger value, the paras start from the previous value.
                //? issue fixed,
                //? the issue was where loremtext id html element was being tampered with.
                //? when we had a text state variable dealing with it, we could have just setText([]), in userConfirm = false
                if (userConfirm) {
                    errorText.innerText = "";
                    let paragraphs = [];
                    console.log(`Count : ${count}`);
                    console.log(`Paragraph Length : ${paragraphs.length} `);
                    while (paragraphs.length < count) {
                        paragraphs = paragraphs.concat(data);
                    }
                    console.log(paragraphs.length);
                    paragraphs = paragraphs.slice(0, count);
                    setText(paragraphs);
                    setCount(0);
                    return;
                } else {
                    setCount(0);
                    //! loremText.innerText = "";
                    //? THE ABOVE STATEMENT CHANGES IT FROM CONTROLLED COMP TO UNCONTROLLED COMP AND THEN BACK TO CONTROLLED COMP IN CASE THE USER CONFIRMS AGAIN
                    //! THIS WILL BE TAKING CONTROL OF ELEMNT FROM REACT TO JS.
                    //! DO NOT DO THIS WHEN A STATE VARIABLE IS ALREADY CONTROLLING THE ELEMENT
                    setText([]); //? THIS IS A BETTER WAY OF SETTING THE VALUE, USING REACT ITSELF.
                    errorText.innerText = "Provide another value";
                    return;
                }
            } else {
                errorText.innerText = "";
                let paragraphs = [];
                while (paragraphs.length < count) {
                    paragraphs = paragraphs.concat(data);
                }
                console.log(paragraphs.length);
                paragraphs = paragraphs.slice(0, count);
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
