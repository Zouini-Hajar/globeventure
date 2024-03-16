import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng';
const API_KEY = '46e0ad0146msh6cd472e242925bcp113282jsn4be37695e7f5';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
};

export const getAttractions = createAsyncThunk(
  "attractions/fetchAttractions",
  async ({ long, lat }) => {
    try {
      const { data: { data } } = await axios.get(
        URL,
        {
          params: {
            longitude: long,
            latitude: lat,
            lunit: 'km'
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

const attractionsSlice = createSlice({
  name: "attractions",
  initialState: {
    data: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAttractions.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getAttractions.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});

export const { } = attractionsSlice.actions;
export const selectAllAttractions = state => state.attractions.data;
export default attractionsSlice.reducer;
