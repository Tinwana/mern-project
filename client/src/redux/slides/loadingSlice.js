import { createSlice } from "@reduxjs/toolkit";
let initialState = {
  loadingState: false,
};
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading: (state, action) => {
      state.loadingState = action.payload;
    },
  },
});

export const { isLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
