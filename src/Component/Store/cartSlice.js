import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },

    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    edit(state, action) {
      return state.map((user) => {
        if (user.id === action.payload.id) {
          user.inputs = action.payload.inputs;
        }
      });
    },
    updatedata(state, action, index) {
      state = state.map((user) => {
        if (user.id === action.payload.newinputs.id) {
          return action.payload.newinputs;
        } else {
          return user;
        }
      });
      console.log(state);

      console.log(action.payload.newinputs);
    },
  },
});
export const { add, remove, edit, getdata, updatedata } = cartSlice.actions;
export default cartSlice.reducer;
