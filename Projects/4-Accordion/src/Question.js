import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ id, title, info, clickHandler, open }) => {
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                {console.log(id)}
                <button
                    className="btn"
                    onClick={() => {
                        clickHandler(id);
                    }}
                >
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {console.log(`Open inside Question.js : ${open}`)}
            {open && <p>{info}</p>}
        </article>
    );
};

export default Question;
