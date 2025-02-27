//creating the slice for cart for that import createslice from Rtk
import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:"cart",
    initialState:{items:[]},
    reducers:{
            additem:(state,action)=>
            {
                state.items.push(action.payload);
            },
            removeitem:(state)=>
            {
                state.items=[]
            }
    }
})

 export const {additem,removeitem}=cartslice.actions
 export default cartslice.reducer;
