import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    arr: []
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newObj = action.payload;
            const newState = { ...state };
            state.arr.push(newObj)
            // newState.arr = newObj;
            // newState.arr.push(newObj)
            // state.arr = [...state, { newObj }];
            // console.log(newState.arr);

        },
    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer