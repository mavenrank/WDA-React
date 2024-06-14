import React, { useReducer, useState, useEffect } from "react";
import Modal from "./Modal";
import { TiDelete } from "react-icons/ti";
import { FaEdit } from "react-icons/fa";

const reducer = (state, action) => {
    if (action.type == "ADD") {
        const allitems = [...state.name, action.payload];
        return {
            ...state,
            grocerylist: allitems,
            showModal: true,
            showModalContent: "Item Added",
        };
    } else if (action.type == "REMOVE") {
        const allitems = state.grocerylist.filer((item) => {
            return item.id !== action.payload;
        });
        return {
            ...state,
            grocerylist: allitems,
            showModal: true,
            showModalContent: "Removed Item",
        };
    } else if (action.type === "UPDATE") {
        console.log(`UPDATE`);
        console.log(`Action Payload: ${JSON.stringify(action.payload)}`);
        console.log(`Action Listitem: ${JSON.stringify(action.listitem)}`);

        const allitems = state.grocerylist.map((item) => {
            if (item.id === action.payload.id) {
                item.name === action.listitem.name;
            }
            return item;
        });
        return {
            ...state,
            grocerylist: allitems,
            showModal: true,
            showModalContent: "Updated Item",
        };
    } else if (action.type == "CLOSE_MODAL") {
        return {
            ...state,
            showModal: false,
            showModalContent: "",
        };
    }
};

const MainPage = () => {
    const grocerylist = [{ id: "1", name: "Eggs" }];
    const [name, setName] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [listitem, setListitem] = useState({ id: null, name: null });
    const [addmode, setAddMode] = useState(true);

    const defaultState = {
        grocerylist: grocerylist,
        name: name,
        showModal: false,
        showModalContent: "",
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleEdit = (eachitem, e) => {
        if (e) {
            e.preventDefault();
        }
        const { id, name } = eachitem;
        console.log("Inside handleEdit");
        console.log(`Each item ID : ${id}`);
        console.log(`Each Item Name : ${name}`);
        console.log(
            `Eachitem object inside of handleEdit: ${JSON.stringify(eachitem)}`
        );
        console.log(`EachItem ID: ${id}`);
        setName(name);
        dispatch({ type: "UPDATE", payload: eachitem, listitem: listitem });
    };

    const EditItem = () => {};
    const handleDelete = (eachitem) => {};

    const handleAdd = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (state.isModalOpen === true) {
            const timer = setTimeout(() => {
                dispatch({ type: "CLOSE_MODAL" });
            }, 3000);
        }
    }, [state.showModal, state.grocerylist]);

    return (
        <div className="mainDiv">
            <h2>Grocery Bud</h2>
            <div className="section">
                {showModal && (
                    <Modal modalcontent={state.showModalContent}></Modal>
                )}
                <div className="card">
                    <form className="form">
                        <label htmlFor="name">Item</label>
                        <div className="inputfield-submit">
                            <input
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
                                    onClick={() => handleAdd}
                                >
                                    Add Item
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="btn"
                                    onClick={() => EditItem}
                                >
                                    Edit Item
                                </button>
                            )}
                        </div>
                    </form>
                    <div className="list">
                        {state.grocerylist.map((eachitem) => {
                            return (
                                <div className="list-item" key={eachitem.id}>
                                    <p>{eachitem.id}</p>
                                    <p>{eachitem.name}</p>
                                    <div className="buttons">
                                        <button
                                            className="seamless-btns"
                                            onClick={() => {
                                                console.log(
                                                    `Each Item in onClick : ${JSON.stringify(
                                                        eachitem
                                                    )}`
                                                );
                                                console.log(
                                                    `Each Item ID in onClick: ${eachitem.id}`
                                                );
                                                console.log(
                                                    `Each Item Name in onClick: ${eachitem.name}`
                                                );
                                                console.log(
                                                    `Listitem in onClick before setting it ${JSON.stringify(
                                                        listitem
                                                    )}`
                                                );
                                                console.log(
                                                    "HERE IS THE ISSUE. https://blog.logrocket.com/using-react-usestate-object/#:~:text=One%20of%20React's%20most%20commonly,won't%20re%2Drender."
                                                );
                                                const newObject = {
                                                    id: eachitem.id,
                                                    name: eachitem.name,
                                                };
                                                setListitem(newObject);

                                                console.log(
                                                    "AFTER SETTING THE VALUES"
                                                );
                                                console.log(
                                                    `ListItem ID in onClick: ${listitem.id}`
                                                );
                                                console.log(
                                                    `ListItem Name in onClick: ${listitem.name}`
                                                );
                                                console.log(
                                                    `ListItem in onClick: ${JSON.stringify(
                                                        listitem
                                                    )}`
                                                );
                                                handleEdit(eachitem);
                                                setAddMode(false);
                                            }}
                                        >
                                            <FaEdit className="edit-icon" />
                                        </button>
                                        <button
                                            className="seamless-btns"
                                            onClick={(eachitem) => {
                                                setListitem(eachitem.id);
                                                handleDelete(eachitem);
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
