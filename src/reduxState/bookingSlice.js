import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        bookAdded: {
            reducer(state, action) {
                const newItem = { ...action.payload };
                let temp = state.data.find((obj) => obj.id === newItem.id);
                if(temp===undefined){
                    state.data.push(action.payload)
                }else{
                    alert("Sudah ada di booking")
                }
            }
        }
    }
})

export const {bookAdded} = bookingSlice.actions
export default bookingSlice.reducer