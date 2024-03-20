import React from "react";
import ReactDOM from "react-dom/client";

const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
};

function Greeting() {
    return (
        <>
            <h4>Hello this is my first time using react</h4>
            <p>Hello people</p>
            <ul>
                <li>List Element</li>
            </ul>
            <p>
                <Message text="Good Morning " />, <Person name="Anubhaw" />
            </p>

            <div style={{ display: "flex", flexDirection: "row", alignItems:"center"}}>
                <p>{user.name}</p>
                <img
                    src={user.imageUrl}
                    alt={"Photo of " + user.name}
                    style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        paddingLeft:'10px'
                    }}
                />
            </div>
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
