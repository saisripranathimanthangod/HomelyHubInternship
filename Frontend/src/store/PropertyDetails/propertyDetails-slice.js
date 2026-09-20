//propertyDetails 

// create a slice name
//create intial state
//request starts
//propert data recieved
//error occurs
//export Actions
//export slice

import { createSlice } from '@reduxjs/toolkit';

const propertyDetailsSlice = createSlice({
    name: "propertyDetails",
    initialState: {
        propertyDetails:null,
        loading: false,
        error: null
    },
    reducers: {
        getListRequest(state){
            state.loading = true;
        },
        getPropertyDetails(state,action){
            state.propertyDetails = action.payload;
            state.loading = false;
        },
        getError(state,action){
            state.error = action.payload;
            state.loading = false;
        }
    }
})
export const propertyDetailsActions = propertyDetailsSlice.actions;
export default propertyDetailsSlice;