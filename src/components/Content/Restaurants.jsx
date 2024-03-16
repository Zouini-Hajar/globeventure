import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants, selectAllRestaurants } from '../../features/restaurants/restaurantsSlice'
import { selectCoordinates } from '../../features/coordinates/coordinatesSlice';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function Restaurants() {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectCoordinates);
  const restaurants = useSelector(selectAllRestaurants);

  useEffect(() => {
    dispatch(getRestaurants(coordinates))
  }, [coordinates]);
  return (
    <>
      {restaurants && restaurants.map((restaurant, index) => <PlaceDetails key={index} place={restaurant} type='restaurant'/>)}
    </>
  )
}
