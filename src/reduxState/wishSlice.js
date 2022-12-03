import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

const wishSlice = createSlice({
    name: 'wish',
    initialState,
    reducers: {
        wishAdded: {
            reducer(state, action) {
                const newItem = { ...action.payload };
                let temp = state.data.find((obj) => obj.id === newItem.id);
                if(temp===undefined){
                    state.data.push(action.payload)
                }else{
                    alert("Sudah ada di wishlist")
                }
            }
        }
    }
})

export const {wishAdded} = wishSlice.actions
export default wishSlice.reducer