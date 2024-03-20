import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return (
        <>
            <h4>Hello this is my first time using react</h4>
            <p>Hello people</p>
            <ul>
                <li>List Element</li>
            </ul>
            <p>
                <Message text="Good Morning! " />, <Person name="Anubhaw" />
            </p>
        </>
    );
}

function Person(usr) {
    return (
        <>
            <span>{usr.name}</span>
        </>
    );
}

function Message(msg) {
    return (
        <>
            <span>{msg.text}</span>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
