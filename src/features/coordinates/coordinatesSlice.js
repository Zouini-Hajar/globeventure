import { createSlice } from "@reduxjs/toolkit";

const coordinatesSlice = createSlice({
    name: "coordinates",
    initialState: {
      // Coordinates of New York city  
      long: -79.76197600364684,
      lat:  40.47657820049533
    },
    reducers: {
        setCoordinates: (state, action) => {
            const { long, lat } = action.payload;
            state.long = long;
            state.lat = lat;
        }
    }
  });
  
export const { setCoordinates } = coordinatesSlice.actions;
export const selectCoordinates = state => state.coordinates;
export default coordinatesSlice.reducer;