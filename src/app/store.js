import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slice/favorite/favoriteSlice";

export default configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});
