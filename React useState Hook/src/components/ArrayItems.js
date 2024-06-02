import React, { useState } from "react";
import { data } from "./data";
import "./Arrayitems.css";

function eachperson() {
    
}
const ArrayItems = () => {
    const [people, setPeople] = useState(data);
    const removeitem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };
    return (
        <React.Fragment>
            <h2>Manipulating Array Elements</h2>
            <div>
                <div className="enclosingDiv">
                    {people.map((person) => {
                        const { id, name } = person;
                        let firstLetter = name[0].toUpperCase();
                        let remainingLetters = name.slice(1);
                        let newName = firstLetter + remainingLetters;
                        return (
                            <div>
                                <div id={id} className="element highlighted">
                                    <p>{newName}</p>
                                    <button
                                        onClick={() => {
                                            removeitem(id);
                                        }}
                                        className="btn"
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className="emptyDiv"></div>
                            </div>
                        );
                    })}
                </div>
                <button className="btn" onClick={() => setPeople([])}>
                    Empty Array
                </button>
                <button className="btn" onClick={() => setPeople()}>
                    Restore
                </button>
            </div>
        </React.Fragment>
    );
};

export default ArrayItems;
