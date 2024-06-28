import React, { useReducer, useState, useEffect } from "react";
import Modal from "./Modal";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";
import reducer from "./Reducer";

const MainPage = () => {
    const grocerylist = [{ id: "1", name: "Eggs" }];
    const [name, setName] = useState("");
    const [addmode, setAddMode] = useState(true);
    const [currentItem, setCurrentItem] = useState(null);
    const [counter, setCounter] = useState(2);

    const defaultState = {
        grocerylist: grocerylist,
        name: name,
        showModal: false,
        showModalContent: "",
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    const editIconFunctionality = (item, e) => {
        if (e) e.preventDefault();
        const { id, name } = item;
        console.log("Inside editIconfunctionality ----------> ");
        console.log(`Item ID : ${id} and Name is : ${name}`);
        console.log(
            `Item object inside of editIconfunctionality: ${JSON.stringify(
                item
            )}`
        );
        setCurrentItem(item);
        setName(name);
        console.log(
            "--------- Name set, editIconFunctionality done ----------"
        );
    };

    const handleEdit = (e) => {
        e.preventDefault();
        const tempObj = currentItem;
        tempObj.name = name;
        dispatch({ type: "UPDATE", payload: tempObj });
        setName("");
        setAddMode(true);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        console.log("Handle Add ---------> ");
        console.log(counter)
        setCounter(counter + 1);
        console.log(counter)
        const newItem = { id: counter, name: name };

        dispatch({ type: "ADD", payload: newItem });
        console.log("-------- Dispatched ADD ---------");
        setName("");
    };

    const handleDelete = (eachitem) => {
        dispatch({ type: "DELETE", payload: eachitem.id });
    };

    useEffect(() => {
        if (state.showModal === true) {
            const timer = setTimeout(() => {
                dispatch({ type: "CLOSE_MODAL" });
            }, 3000);
        }
    }, [state.showModal, state.grocerylist]);

    return (
        <div className="mainDiv">
            <h2>Grocery Bud</h2>
            <div className="section">
                {state.showModal && (
                    <Modal modalcontent={state.showModalContent}></Modal>
                )}
                <div className="card">
                    <form className="form">
                        <label htmlFor="name">Item</label>
                        <div className="inputfield-submit">
                            <input
                                id="input"
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="eg: bread"
                            />
                            {addmode ? (
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={handleAdd}
                                >
                                    Add Item
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={handleEdit}
                                >
                                    Edit Item
                                </button>
                            )}
                        </div>
                    </form>
                    <div className="list">
                        {state.grocerylist.map((singleItem) => {
                            return (
                                <div className="list-item" key={singleItem.id}>
                                    <p>{singleItem.id}</p>
                                    <p>{singleItem.name}</p>
                                    <div className="buttons">
                                        <button // EDIT ICON BUTTON
                                            className="seamless-btns"
                                            onClick={() => {
                                                console.log(
                                                    "Setting Add Mode to False"
                                                );
                                                setAddMode(false);

                                                console.log(
                                                    `Each Item in onClick : ${JSON.stringify(
                                                        singleItem
                                                    )}`
                                                );
                                                console.log(
                                                    "https://blog.logrocket.com/using-react-usestate-object/#:~:text=One%20of%20React's%20most%20commonly,won't%20re%2Drender."
                                                );
                                                editIconFunctionality(
                                                    singleItem
                                                );
                                            }}
                                        >
                                            <FaEdit className="edit-icon" />
                                        </button>
                                        <button // DELETE BUTTON
                                            className="seamless-btns"
                                            onClick={() => {
                                                setCurrentItem(singleItem);
                                                console.log(
                                                    `onClick delete icon, singleItem: ${JSON.stringify(
                                                        currentItem
                                                    )}`
                                                );
                                                handleDelete(singleItem);
                                            }}
                                        >
                                            <TiDelete className="delete-icon" />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
