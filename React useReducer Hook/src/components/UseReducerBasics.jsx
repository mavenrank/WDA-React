import React, { useEffect } from "react";
import Modal from "./Modal";
import data from "../data";
import { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "Item Added",
        };
    } else if (action.type === "NAME_ONLY") {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "Name entered, Email assumed\nItem Added",
        };
    } else if (action.type === "EMAIL_ONLY") {
        const newPeople = [...state.people, action.payload];
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "Email Entered, Name assumed\nItem Added",
        };
    } else if (action.type === "NO_VALUE") {
        return {
            ...state,
            isModalOpen: true,
            modalContent: "Please enter value",
        };
    } else if (action.type === "REMOVE_PERSON") {
        console.log(state.people);
        console.log(`Action Payload ${action.payload}`);
        const newPeople = state.people.filter((person) => {
            console.log(`Person ID: ${person.id}`);
            return person.id !== action.payload;
        });
        console.log(newPeople);
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modalContent: "Person Removed",
        };
    } else if (action.type === "CLOSE_MODAL") {
        return {
            ...state,
            isModalOpen: false,
            modalContent: "",
        };
    } else {
        return {
            ...state,
            isModalOpen: false,
            modalContent: "Some Error Occured",
        };
    }
};

const defaultState = {
    people: data,
    email: "",
    isModalOpen: false,
    modalContent: "Hello World",
};

const UseReducerBasics = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);

    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        if (name && email) {
            const newPerson = {
                id: new Date().getTime().toString(),
                name: name,
                email: email,
            };
            dispatch({ type: "ADD_ITEM", payload: newPerson });
        } else if (name && !email) {
            let email = `${name}@gmail.com`;
            const newPerson = {
                id: new Date().getTime().toString(),
                name: name,
                email: email,
            };
            dispatch({ type: "NAME_ONLY", payload: newPerson });
        } else if (!name && email) {
            const atIndex = email.indexOf("@");
            const name = email.substring(0, atIndex);
            const newPerson = {
                id: new Date().getTime().toString(),
                name: name,
                email: email,
            };
            dispatch({ type: "EMAIL_ONLY", payload: newPerson });
        } else if (!name && !email) {
            dispatch({ type: "NO_VALUE" });
        }
    };

    useEffect(() => {
        if (state.isModalOpen === true) {
            const timer = setTimeout(() => {
                dispatch({ type: "CLOSE_MODAL" });
            }, 3000);
        }
    }, [state.isModalOpen]);

    return (
        <div className="useReducerBasics">
            {state.isModalOpen && (
                <Modal modalContent={state.modalContent}></Modal>
            )}
            <h2>Editing multiple forms values</h2>
            <form onSubmit={handleSubmit} className="form">
                <div>
                    <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br></br>
                    <input
                        placeholder="Email"
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">
                    Add Person
                </button>
            </form>
            <p className="people-list-title">People List: </p>
            {state.people.map((person) => {
                return (
                    <div key={person.id} className="person-list">
                        <p>{person.name}</p>
                        <p className="person-list-email">{person.email}</p>
                        <button
                            className="btn"
                            onClick={() =>
                                dispatch({
                                    type: "REMOVE_PERSON",
                                    payload: person.id,
                                })
                            }
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default UseReducerBasics;
