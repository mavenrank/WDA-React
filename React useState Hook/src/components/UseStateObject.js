import React from "react";

const UseStateObject = () => {
    const [person, setPerson] = React.useState({
        name: "John",
        age: 26,
        message: "Random Message",
    });
    console.log(person);

    const changeMessage = () => {
        if (person.message !== "Hello World") {
            setPerson({ ...person, message: "Hello World" });
        }
        else {
            setPerson({...person, message: "Random Message"})
        }
    }

    const changeName = () => {
        if (person.name !== "John") {
            setPerson({...person, name: "John"});
        }
        else {
            setPerson({ ...person, name: "Doe" });
        }
    }

    const increaseAge = () => {
        setPerson({ ...person, age:person.age+1});
    }
    const DecreaseAge = () => {
        setPerson({ ...person, age:person.age-1});
    }

    return (
        <React.Fragment>
            <h2>Changing Object Values</h2>
            <p>{person.name}</p>
            <p>{person.age}</p>
            <p>{person.message}</p>
            <button className="btn" onClick={changeName}>Click to change Name</button>
            <button className="btn" onClick={increaseAge}>Click to increase Age</button>
            <button className="btn" onClick={DecreaseAge}>Click to decrease Age</button>
            <button className="btn" onClick={changeMessage}>Click to change Message</button>
        </React.Fragment>
    );
};

export default UseStateObject;
