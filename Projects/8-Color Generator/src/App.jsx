import React, { useState } from "react";
import SingleColor from "./components/SingleColor.jsx";
import { FaGithub } from "react-icons/fa";
import Values from "values.js";
import "./App.css";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values("#f15025").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hello");
        try {
            const colors = new Values(color).all(10);
            console.log(colors);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
    };
    const clickGitHub = () => {
        window.open("https://github.com/mavenrank/WDA-React");
    };
    return (
        <React.Fragment>
            <section className="container">
                <h3>color generator project</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="#f15025"
                        type="text"
                        name="color"
                        id="color"
                        value={color}
                        className={`${error ? "error" : null}`}
                        onChange={(e) => setColor(e.target.value)}
                    />
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
                <div className="footer">
                    <span>Ananth S</span>
                    <span>
                        <button onClick={() => clickGitHub()}>
                            <FaGithub className="github-icon" />
                        </button>
                    </span>
                </div>
            </section>
            <section className="colors">
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                        ></SingleColor>
                    );
                })}
            </section>
        </React.Fragment>
    );
}

export default App;
