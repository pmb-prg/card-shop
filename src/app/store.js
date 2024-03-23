import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice";
import cardReducer from "../features/cart/cardSlice";

const store = configureStore({
    reducer:{
        products : productsReducer,
        card: cardReducer,
    }
})

export default store;