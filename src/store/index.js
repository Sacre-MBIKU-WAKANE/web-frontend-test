import { configureStore } from "@reduxjs/toolkit";
import formalWearsReducer from "../components/organisms/formal-wears/slice";
import imagesListReducer from "../components/molecules/images-list/slice";

export default configureStore({
  reducer: {
    images: imagesListReducer,
    formalWears: formalWearsReducer,
  },
});
