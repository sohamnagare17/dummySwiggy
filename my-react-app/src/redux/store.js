// creating the redux store for that import  configurestore from the rtk
//configureStore() creates the Redux store.
import {configureStore} from "@reduxjs/toolkit";
import cartreducer from "./cartslice";

const store = configureStore({
    reducer:{
    cart:cartreducer,
    }
})

export default store;