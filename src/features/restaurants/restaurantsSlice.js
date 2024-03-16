import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng";
const API_KEY = "46e0ad0146msh6cd472e242925bcp113282jsn4be37695e7f5";

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
};

export const getRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async ({ long, lat }) => {
    try {
      const { data: { data } } = await axios.get(
        URL,
        {
          params: {
            latitude: lat,
            longitude: long,
            limit: 50
          },
          headers
        }
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.pending, (state, action) => {
      state.loading = true;
    })

    builder.addCase(getRestaurants.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
  }
});

export const { } = restaurantsSlice.actions;
export const selectAllRestaurants = state => state.restaurants.data;
export default restaurantsSlice.reducer;
