import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
    const [questions, setQuestions] = useState(data);
    const [isOpenID, setIsOpenID] = useState(data.id);

    const handleClick = (id) => {
        console.log(`ID getting from HandleClick : ${id}`)
        console.log(`isOpenID in App.js before Set: ${isOpenID}`);
        setIsOpenID(isOpenID === id ? null : id);
        console.log(`isOpenID in App.js After Set: ${isOpenID}`);

    };

    return (
        <div className="container">
            <h3>FAQ about Login</h3>
            <section className="info">
                {questions.map((question) => {
                    return (
                        <Question
                            key={question.id}
                            {...question}
                            clickHandler={() => handleClick(question.id)}
                            //Small Task - 2 mentioned at 1:24:54 of Day-4
                            // Implement the accordion such that if we open another question while one question is active, then close the existing one and open the new one.
                            open={isOpenID===question.id}
                        ></Question>
                    );
                })}
            </section>
        </div>
    );
}

export default App;
