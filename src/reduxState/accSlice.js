import {  createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLogin: false,
  whoIsLogin: null,
  account: [
    {
      id: 1,
      email: 'admin@gmail.com',
      password: 'admin',
      name: 'admin',
      gender: 'male',
      noHp: '0821312313123',
    },
    {
      id: 2,
      email: 'admin1@gmail.com',
      password: 'admin1',
      name: 'admin1',
      gender: 'male',
      noHp: '0821312313123',
    },
    {
      id: 3,
      email: 'admin2@gmail.com',
      password: 'admin2',
      name: 'admin2',
      gender: 'male',
      noHp: '0821312313123',
    },
    {
      id: 4,
      email: 'customer@gmail.com',
      password: 'customer',
      name: 'customer',
      gender: 'male',
      noHp: '0821312313123',
    },
  ],
  hotelList: [],
  bookHistory: [],
};

const accSlice = createSlice({
  name: 'acc',
  initialState,
  reducers: {
    updateProfile: {
      reducer(state, action) {
     
        state.account[state.whoIsLogin].name =
          action.payload.name;
        state.account[state.whoIsLogin].email = action.payload.email;
        state.account[state.whoIsLogin].gender = action.payload.gender;
      },
    },
    checkLogin: {
      reducer(state, action) {
      
        let tesLogin = state.account.find(
          (obj) =>
            obj.email === action.payload.email &&
            obj.password === action.payload.password
        );
        if (tesLogin === undefined) {
          alert("akun tidak ada")
        } else {
      
          state.isLogin = true;
          const searchIndex = state.account.findIndex(
            (obj) => obj.email == action.payload.email
          );
          state.whoIsLogin = searchIndex;
         
        }
        
      },
    },
    logOut: {
      reducer(state, action){
        state.isLogin = false
        state.whoIsLogin = false
      }
      
    }
  },
});

export const { updateProfile, checkLogin, logOut } = accSlice.actions;
export default accSlice.reducer;
