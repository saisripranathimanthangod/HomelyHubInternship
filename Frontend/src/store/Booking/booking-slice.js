//managing booking

//store all bookings
//store individual booking details
//trap the API loading status
//add new bookings when a booking is created
//updating the booking data when we recv if from the backend


import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    bookings:[],
    bookingDetails:{},
    loading:false
}

const bookingSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        setBookingRequest(state){
            state.loading=true;
        },  
        //stores the bookings recieved from the api
        setBooking(state,action){
            state.bookings= action.payload;
            state.loading=false
        },
        addBooking:(state,action)=>{
            state.bookings.push(action.payload);
        },
        setBookingDetails:(state,action)=>{
            state.bookingDetails = action.payload.bookings;
        }
    }
})

export const {setBooking, addBooking, setBookingDetails} = bookingSlice.actions;
export default bookingSlice;