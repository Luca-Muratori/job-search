import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slices/favorite/favoriteSlice";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
