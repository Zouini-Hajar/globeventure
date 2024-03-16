import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/hotels/list-by-latlng';
const API_KEY = "46e0ad0146msh6cd472e242925bcp113282jsn4be37695e7f5";

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
};

export const getHotels = createAsyncThunk(
  "hotels/fetchHotels",
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
  });

const hotelsSlice = createSlice({
  name: "hotels",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHotels.pending, (state, action) => {
      state.loading = true;
    })

    builder.addCase(getHotels.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    })
  }
});

export const { } = hotelsSlice.actions
export const selectAllHotels = state => state.hotels.data;
export default hotelsSlice.reducer;
