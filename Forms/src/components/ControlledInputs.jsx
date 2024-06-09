import React, { useState } from "react";

// ? in React we use
// ? value => to ge the value of the input by the user
// ? onChange => we use onChange to grab a value when it changes and set it to our variable containing the value

// ? now if we submit the value, we see that the page reloads everytime
const ControlledInputs = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName);
        console.log(email);

        if (firstName && email) {
            const person = {
                id: new Date().getTime().toString(),
                firstName,
                email,
            };
            console.log(person);

            setPeople((people) => {
                return [...people, person];
            });
            
             // to make it such that we don't need to clear any field once submitted
            setFirstName("");
            setEmail("");
        } else {
            e.preventDefault();
            alert("Enter all the values");

            console.log(`Empty value(s)`);

        }
    };

    return (
        <>
            <article>
                <h2>Controlled Inputs</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="firstName">Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="firstName">Email:</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">Add Person</button>
                </form>

                {people.map((person) => {
                    const { id, firstName, email } = person;
                    return (
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                        </div>
                    )
                })}
            </article>
        </>
    );
};

export default ControlledInputs;
