import React, { useState } from "react";

// ? in React we use
// ? value => to ge the value of the input by the user
// ? onChange => we use onChange to grab a value when it changes and set it to our variable containing the value

// ? now if we submit the value, we see that the page reloads everytime
const MultipleInputs = () => {
    // const [firstName, setFirstName] = useState("");
    // const [email, setEmail] = useState("");
    // ? instead of doing this, we can manage the whole object as one by using useState

    const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

    const [people, setPeople] = useState([]);

    // ! previous handleSubmit
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(firstName);
    //     console.log(email);

    //     if (firstName && email) {
    //         const person = {
    //             id: new Date().getTime().toString(),
    //             firstName,
    //             email,
    //         };
    //         console.log(person);

    //         setPeople((people) => {
    //             return [...people, person];
    //         });

    //         // to make it such that we don't need to clear any field once submitted
    //         setFirstName("");
    //         setEmail("");
    //     } else {
    //         e.preventDefault();
    //         alert("Enter all the values");

    //         console.log(`Empty value(s)`);
    //     }
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age) {
            const newPerson = {
                ...person,
                id: new Date().getTime().toString(),
            };
            setPeople([...people, newPerson]);
            setPerson({ firstName: "", email: "", age: "" });
        } else {
            console.log("Empty Value(s)");
        }
    };
    const handleChange = (e) => {
        const name = e.target.name;
        const id = e.target.id;
        const value = e.target.value;
        console.log(name);
        console.log(value);
        setPerson({ ...person, [name]: value });
        // ! name should be defined for all the inputs for this to work
    };

    return (
        <>
            <article>
                <h2>Multiple inputs</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={person.firstName}
                            // onChange={(e) => setFirstName(e.target.value)}
                            // ! we can't use this anymore as it doesn't exist instead we do the following
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={person.email}
                            // ! we can't use this anymore as it doesn't exist instead we do the following
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={person.age}
                            // ! we can't use this anymore as it doesn't exist instead we do the following
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn">Add Person</button>
                </form>

                {people.map((person) => {
                    const { id, firstName, email, age } = person;
                    return (
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                        </div>
                    );
                })}
            </article>
        </>
    );
};

export default MultipleInputs;
