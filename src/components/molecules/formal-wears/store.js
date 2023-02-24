import { createSlice } from "@reduxjs/toolkit";

export const formalWearsSlice = createSlice({
  name: "formalWears",
  initialState: {
    wears: ["Available", "100% coton"],
    colors: ["red", "blue", "yellow"],
    selectedColor: "red",
    sizes: [32, 42, 66, 12],
    selectedSize: 12,
    sizeGuide: 12,
  },

  reducers: {
    selectColor: (state, { payload }) => {
      state.selectedColor = payload;
    },
    selectSize: (state, { payload }) => {
      state.selectedSize = payload;
    },
  },
});

export const { selectWear } = formalWearsSlice.actions;

export const getWears = (state) => state.formalWears.Wears;
export const getSelectedColor = (state) => state.formalWears.selectedColor;
export const getSelectedSize = (state) => state.formalWears.selectedSize;

export default formalWearsSlice.reducer;
