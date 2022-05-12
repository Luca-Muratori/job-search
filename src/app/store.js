import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../slices/favorite/favoriteSlice";
import searchReducer from "../slices/search/searchSlice";
export default configureStore({
  reducer: {
    favorite: favoriteReducer,
    search: searchReducer,
  },
});
