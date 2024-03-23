import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helpers";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
}

const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addItem: (state, action) => {
            if(!state.selectedItems.find(i => i.id === action.payload.id)){
                state.selectedItems.push({...action.payload, quantity: 1});
                state.total = sumPrice(state.selectedItems);
                state.itemsCounter = sumQuantity(state.selectedItems);
                state.checkout = false;
            }
        },
        removeItem: (state, action) => {
            const newSelectedItems = state.selectedItems.filter(i => i.id !== action.payload.id);
            state.selectedItems = newSelectedItems;
            state.total = sumPrice(state.selectedItems);
            state.itemsCounter = sumQuantity(state.selectedItems);
            state.checkout = false;
        },
        increase: (state, action) => {
            const increaseIndex = state.selectedItems.findIndex(i => i.id === action.payload.id);
            state.selectedItems[increaseIndex].quantity++
            state.total = sumPrice(state.selectedItems);
            state.itemsCounter = sumQuantity(state.selectedItems);
        },
        decrease: (state, action) => {
            const decreaseIndex = state.selectedItems.findIndex(i => i.id === action.payload.id);
            state.selectedItems[decreaseIndex].quantity--
            state.total = sumPrice(state.selectedItems);
            state.itemsCounter = sumQuantity(state.selectedItems);
        },
        checkouted: (state) => {
            state.selectedItems = [];
            state.itemsCounter = 0;
            state.total = 0;
            state.checkout = true;
        }
    }
})


export default cardSlice.reducer;
export const {
    addItem,
    removeItem,
    increase,
    decrease,
    checkouted,
} = cardSlice.actions;