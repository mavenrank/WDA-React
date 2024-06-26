import React, { useState } from "react";
import Markdown from "react-markdown";
const App = () => {
    const [markdown, setMarkdown] = useState("## markdown preview");
    console.log("1719398521386\n");
    return (
        <main>
            <section className="markdown">
                <textarea
                    className="input"
                    id=""
                    value={markdown}
                    onChange={(e) => {
                        setMarkdown(e.target.value);
                    }}
                ></textarea>
                <article className="result">
                    <Markdown>{markdown}</Markdown>
                </article>
            </section>
            {console.log("I will miss you Rudy.\nI'm hoping you'll read this.")}
        </main>
    );
};

export default App;
