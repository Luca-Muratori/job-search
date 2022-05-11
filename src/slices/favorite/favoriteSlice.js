import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    content: [],
  },
  reducers: {
    addToFavorite: (state, action) => {
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    },
    removeFromFavorite: (state, action) => {
      return {
        ...state,
        content: state.content.filter((book, i) => i !== action.payload),
      };
    },
  },
});

export default favoriteSlice.reducer;
export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
