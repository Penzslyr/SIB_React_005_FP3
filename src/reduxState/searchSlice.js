import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    searched: false,
    location: '',
    checkIn: '',
    checkOut: '',
    adults:1,
    countDays: 1
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: {
            reducer(state, action){
                
                state.location = action.payload.location
                state.checkIn = action.payload.checkin
                state.checkOut = action.payload.checkout
                state.adults = action.payload.count
                state.countDays = action.payload.countDays
                state.searched = true
                
            }
        }
    }
})

export const {setSearch} = searchSlice.actions
export default searchSlice.reducer