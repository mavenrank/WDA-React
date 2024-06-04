import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
    const [people, setPeople] = useState(data);

    // Small Task - 1 - mentioned in DAY 3 at 44:01
    // Implement a Remove button for each Person in the List. Every time a person is removed, the counter value should change.

    const handleClick = (id) => {
        alert("Inside ");
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <main>
            <section className="container">
                <h3>{people.length} Birthdays Today</h3>
                <List people={people} clickHandler={handleClick}></List>
                <button onClick={() => setPeople([])}>Clear All</button>
            </section>
        </main>
    );
}

export default App;
