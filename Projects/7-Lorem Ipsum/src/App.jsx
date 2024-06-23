import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import data from "./data";
function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);
    const [showCopy, setShowCopy] = useState(false);
    const [checkmark, setCheckMark] = useState(false);

    const handleGithubLink = () => {
        window.open(
            "https://github.com/mavenrank/WDA-React/tree/main/Projects/7-Lorem%20Ipsum"
        );
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text.join("\n")).then(() => {
            setCheckMark(true);
            setTimeout(() => setCheckMark(false), 3000);
        });
    };

    const handleSubmit = (e) => {
        console.log("INSIDE HANDLE SUBMIT");
        e.preventDefault();
        console.log(count);
        console.log(`type of count is : ${typeof count}`);

        setText([]);
        // ! this is the best solution to the setText, we just empty the variable regardess of its values just after clicking the button

        let amount = parseInt(count);
        console.log(amount);
        // ! we see that if we leave count to zero, then it is a number
        // ! if we change the count value to any other number, then it is a String
        // ! therefore using parseInt.
        //? issue couldn't recreate, fixed.
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
            setCount(0);
            setShowCopy(false);

            return;
        } else if (count == 0) {
            errorText.innerText =
                "Well you told me not to generate anything ¯\\_(ツ)_/¯\nGive me a positive value";
            setCount(0);
            setShowCopy(false);

            return;
        } else if (count > 0 && count <= data.length) {
            setShowCopy(true);
            errorText.innerText = "";
            setText(data.slice(0, count));
            return;
        }
        if (count > data.length) {
            if (count > 50 && count < 1000) {
                let userConfirm = window.confirm(
                    `Are you Sure you wanna generate ${count} paragraphs?`
                );
                //! issue present here, after user Declines and then accepts a larger value, the paras start from the previous value.
                //? issue fixed,
                //? the issue was where loremtext id html element was being tampered with.
                //? when we had a text state variable dealing with it, we could have just setText([]), in userConfirm = false
                if (userConfirm) {
                    setShowCopy(true);
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
                    return;
                } else {
                    setCount(0);
                    setShowCopy(false);
                    //! loremText.innerText = "";
                    //? THE ABOVE STATEMENT CHANGES IT FROM CONTROLLED COMP TO UNCONTROLLED COMP AND THEN BACK TO CONTROLLED COMP IN CASE THE USER CONFIRMS AGAIN
                    //! THIS WILL BE TAKING CONTROL OF ELEMNT FROM REACT TO JS.
                    //! DO NOT DO THIS WHEN A STATE VARIABLE IS ALREADY CONTROLLING THE ELEMENT
                    //? THIS IS A BETTER WAY OF SETTING THE VALUE, USING REACT ITSELF.
                    errorText.innerText = "Provide another value";
                    return;
                }
            } else if (count >= 1000) {
                setShowCopy(false);
                errorText.innerText =
                    "Hmm, would prefer a value less than a 1000";
                setCount(0);

                return;
            } else {
                setShowCopy(true);
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
                <div className="title-div">
                    <div className="headings">
                        <h1>Lorem Ipsum Generator</h1>
                        <h3>Type in a Number and hit Generate</h3>
                    </div>
                    <div className="credits">
                        <FaGithub
                            className="github-icon"
                            onClick={handleGithubLink}
                        ></FaGithub>
                        <span>Ananth S</span>
                    </div>
                </div>
                <div className="form-and-copy">
                    <form onSubmit={handleSubmit} className="lorem-form">
                        <label htmlFor="amount" className="label">
                            Paragraphs:
                        </label>
                        <input
                            type="number"
                            name="count"
                            id="count"
                            className="input-count"
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                        />
                        <button type="submit" className="btn">
                            Generate
                        </button>
                    </form>
                    {showCopy && (
                        <button className="copy-button" onClick={handleCopy}>
                            {checkmark ? <FaCheck /> : "Copy to Clipboard"}
                        </button>
                    )}
                </div>
                <article id="error-value" className="error-text"></article>

                <article id="lorem-text" className="lorem-text">
                    {text.map((element, index) => {
                        return <p key={index}>{`${element}\n`}</p>;
                    })}
                </article>
            </section>
        </React.Fragment>
    );
}

export default App;
