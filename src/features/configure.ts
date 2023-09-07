import { createSlice } from "@reduxjs/toolkit";

export const configureSlice = createSlice({
  name: "configure",
  initialState: {
    tv_genres: [],
    movie_genres: [],
  },
  reducers: {
    getTVGenres: (state, action) => {
      state.tv_genres = action.payload;
    },
    getMVGenres: (state, action) => {
      state.movie_genres = action.payload;
    },
  },
});

export const { getTVGenres, getMVGenres } = configureSlice.actions;
export default configureSlice.reducer;
