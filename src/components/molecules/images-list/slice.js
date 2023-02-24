import { createSlice } from "@reduxjs/toolkit";

export const imagesListSlice = createSlice({
  name: "imagesList",
  initialState: {
    images: [
      {
        title: "one",
        source:
          "https://cdn.create.vista.com/api/media/medium/255294576/stock-photo-side-view-african-american-woman?token=",
      },
      {
        title: "two",
        source:
          "https://cdn.create.vista.com/api/media/medium/197187356/stock-photo-portrait-beautiful-african-american-woman?token=",
      },
      {
        title: "three",
        source:
          "https://cdn.create.vista.com/api/media/medium/255294512/stock-photo-side-view-african-american-woman?token=",
      },
    ],
    activeImage: { title: "one" },
  },

  reducers: {
    selectImage: (state, { payload }) => {
      state.activeImage.title = payload;
    },
  },
});

export const { selectImage } = imagesListSlice.actions;

export const getImages = (state) => state.images.images;
export const getActiveImage = (state) => state.images.activeImage.title;

export default imagesListSlice.reducer;
