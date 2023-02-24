import { configureStore } from "@reduxjs/toolkit";
import formalWearsReducer from "../components/molecules/formal-wears/store";
import imagesListReducer from "../components/molecules/images-list/slice";

export default configureStore({
  reducer: {
    images: imagesListReducer,
    formalWears: formalWearsReducer,
  },
});
