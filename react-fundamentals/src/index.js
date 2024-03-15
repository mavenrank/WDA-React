import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
    return <h4>Hello this is my first time using react</h4>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting />);