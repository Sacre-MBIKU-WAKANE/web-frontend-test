import { createSlice } from "@reduxjs/toolkit";

export const optionsSlice = createSlice({
  name: "Options",
  initialState: {
    options: [
      {
        title: "Option 1",
        optionsList: [
          "Wedding Clothes",
          "Summer Wears",
          "Play Suits",
          "Night Gowns",
          "Painties",
          "Suits",
        ],
      },
      {
        title: "Option 2",
        optionsList: [
          "Summer Wears",
          "Play Suits",
          "Night Gowns",
          "Wedding Clothes",
          "Painties",
          "Suits",
        ],
      },
      {
        title: "Option 1",
        optionsList: [
          "Night Gowns",
          "Painties",
          "Suits",
          "Wedding Clothes",
          "Summer Wears",
          "Play Suits",
        ],
      },
    ],
    selectedOption: undefined,
  },

  reducers: {
    selectOption: (state, { payload }) => {
      state.selectedOption = payload;
    },
  },
});

export const { selectOption } = formalWearsSlice.actions;

export const getOptions = (state) => state.options.options;
export const getSelectedOption = (state) => state.formalWears.selectedOption;

export default optionsSlice.reducer;
