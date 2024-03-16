import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { 
    saved: {
        attractions: [],
        hotels: [],
        restaurants: []
    }
  },
  reducers: {
    SaveAttraction :(state , action)=>{
      state.saved.attractions = [ ...state.saved.attractions , action.payload]
    },
    SaveHotel :(state , action)=>{
      state.saved.hotels = [...state.saved.hotels, action.payload]
    },
    SaveRestaurant :(state , action)=>{
      state.saved.restaurants =[...state.saved.restaurants, action.payload]
    }
  }
});

export const { SaveAttraction ,SaveHotel,SaveRestaurant  } = userSlice.actions;
export const selectSavedAttractions = state => state.user.saved.attractions;
export const selectSavedHotels = state => state.user.saved.hotels;
export const selectSavedRestaurants = state => state.user.saved.restaurants;
export default userSlice.reducer;
