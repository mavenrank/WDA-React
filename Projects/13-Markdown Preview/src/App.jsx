import React, { useState } from "react";
import Markdown from "react-markdown";
import { FaCheck } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const App = () => {
    const [markdown, setMarkdown] = useState("## markdown preview");
    const [checkmark, showCheckMark] = useState();
    console.log("1719398521386\n");

    //done using CHATGPT.
    const handleKeyDown = (e) => {
        const { selectionStart, selectionEnd, value } = e.target;
        const beforeCursor = value.substring(0, selectionStart);
        const afterCursor = value.substring(selectionEnd);
        const cursorLineStart = beforeCursor.lastIndexOf("\n") + 1;
        const currentLine = beforeCursor.substring(cursorLineStart);

        if (e.key === "Tab") {
            e.preventDefault();

            // For ordered and unordered lists
            if (currentLine.match(/^\s*([-+*]|\d+\.)\s/)) {
                setMarkdown(
                    beforeCursor.substring(0, cursorLineStart) +
                        "\t" +
                        currentLine +
                        afterCursor
                );
                setTimeout(() => {
                    e.target.selectionStart = e.target.selectionEnd =
                        selectionStart + 1;
                }, 0);
            } else {
                setMarkdown(beforeCursor + "\t" + afterCursor);
                setTimeout(() => {
                    e.target.selectionStart = e.target.selectionEnd =
                        selectionStart + 1;
                }, 0);
            }
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(markdown);
        showCheckMark(true);
        setTimeout(() => {
            showCheckMark(false);
        }, 3000);
    };

    const handleGithub = () => {
        window.open(
            "https://github.com/mavenrank/WDA-React/tree/main/Projects/13-Markdown%20Preview"
        );
    };

    return (
        <main>
            <div className="first-div">
                <div className="titles">
                    <h1 className="page-title">Markdown Preview</h1>
                    <h2 className="page-info">Simple Markdown Preview</h2>
                </div>
                <div className="credits">
                    <FaGithub className="github-icon" onClick={handleGithub} />
                    <span>Ananth S</span>
                </div>
            </div>
            <section className="markdown">
                <textarea
                    className="input"
                    id=""
                    value={markdown}
                    onChange={(e) => {
                        setMarkdown(e.target.value);
                    }}
                    onKeyDown={handleKeyDown}
                ></textarea>
                <div className="result">
                    <Markdown>{markdown}</Markdown>
                </div>
            </section>
            <div className="btn-div">
                <button onClick={handleCopy} className="btn">
                    {checkmark ? <FaCheck /> : "Copy to Clipboard"}
                </button>
            </div>
            {console.log("I will miss you Rudy.\nI'm hoping you'll read this.")}
        </main>
    );
};

export default App;
