import React from "react";
const reducer = (state, action) => {
    if (action.type == "ADD") {
        const allitems = [...state.grocerylist, action.payload];
        return {
            ...state,
            grocerylist: allitems,
            showModal: true,
            showModalContent: "Item Added",
        };
    } else if (action.type == "DELETE") {
        console.log(`Action Payload inside DELETE: ${action.payload}`);

        const newitems = state.grocerylist.filter((item) => {
            return item.id !== action.payload;
        });
        return {
            ...state,
            grocerylist: newitems,
            showModal: true,
            showModalContent: "Removed Item",
        };
    } else if (action.type === "UPDATE") {
        console.log(`Control in Reducer, UPDATE Action type`);
        console.log(`Action Payload: ${JSON.stringify(action.payload)}`);
        const { id, name } = action.payload;
        console.log("Destructuring into id and name");
        console.log(`id : ${id} and name is : ${name}`);
        const allitems = state.grocerylist.map((item) => {
            if (item.id === id) {
                item.name === name;
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
    } else {
        return {
            ...state,
            showModal: true,
            showModalContent: "DISPATCH ERROR PROBABLY or OTHER ERROR",
        };
    }
};


export default reducer;
