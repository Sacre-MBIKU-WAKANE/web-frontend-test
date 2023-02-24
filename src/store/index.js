import { configureStore } from "@reduxjs/toolkit";
import formalWearsReducer from "../components/organisms/formal-wears/slice";
import imagesListReducer from "../components/molecules/images-list/slice";
import optionsReducer from "../components/organisms/options/slice";

export default configureStore({
  reducer: {
    images: imagesListReducer,
    formalWears: formalWearsReducer,
    options: optionsReducer,
  },
});
