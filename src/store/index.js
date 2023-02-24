import { configureStore } from '@reduxjs/toolkit';
import imagesListReducer from '../components/molecules/images-list/slice';



export default configureStore({
    reducer: {
        images: imagesListReducer
    }
})