import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchJobs = createAsyncThunk(
  "search/getSearchJobs",
  async (url, thunkAPI) => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        return data.data;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    stock: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getSearchJobs.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getSearchJobs.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        stock: action.payload,
      };
    },
    [getSearchJobs.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export default searchSlice.reducer;
