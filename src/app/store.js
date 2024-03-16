import { configureStore } from "@reduxjs/toolkit";
import attractionsReducer from "../features/attractions/attractionsSlice";
import hotelsReducer from "../features/hotels/hotelsSlice";
import restaurantsReducer from "../features/restaurants/restaurantsSlice";
import coordinatesReducer from "../features/coordinates/coordinatesSlice";
import userReducer from "../features/User/userSlice"

export default configureStore({
    reducer: {
        attractions: attractionsReducer,
        hotels: hotelsReducer,
        restaurants: restaurantsReducer,
        coordinates: coordinatesReducer,
        user : userReducer
    }
});