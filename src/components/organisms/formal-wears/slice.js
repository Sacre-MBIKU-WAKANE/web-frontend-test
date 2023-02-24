import { createSlice } from "@reduxjs/toolkit";

export const formalWearsSlice = createSlice({
  name: "formalWears",
  initialState: {
    wears: ["Available", "100% coton"],
    colors: ["#C53030", "#4FD1C5", "#F6E05E"],
    selectedColor: "#C53030",
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

export const { selectWear, selectColor, selectSize } = formalWearsSlice.actions;

export const getWears = (state) => state.formalWears.wears;
export const getColors = (state) => state.formalWears.colors;
export const getSizes = (state) => state.formalWears.sizes;
export const getSelectedColor = (state) => state.formalWears.selectedColor;
export const getSelectedSize = (state) => state.formalWears.selectedSize;

export default formalWearsSlice.reducer;
