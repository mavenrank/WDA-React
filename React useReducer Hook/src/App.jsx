import React, { useState } from "react";
import UseReducerBasics from "./components/UseReducerBasics";
import { FaGithubSquare } from "react-icons/fa";

function App() {
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            <div className="page-title-div maindivs">
                <h1 className="page-title">React useReducer Hook</h1>
                <div className="github">
                    <p className="github-name">Ananth S</p>
                    <button
                        className="external"
                        onClick={() => {
                            window.open(
                                "https://github.com/mavenrank/WDA-React"
                            );
                        }}
                    >
                        <FaGithubSquare className="github-icon" />
                    </button>
                </div>
            </div>
            <div className="maindivs">
                <UseReducerBasics></UseReducerBasics>
            </div>
        </React.Fragment>
    );
}

export default App;
