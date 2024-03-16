import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotels, selectAllHotels } from '../../features/hotels/hotelsSlice'
import { selectCoordinates } from '../../features/coordinates/coordinatesSlice';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function Hotels() {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectCoordinates);
  const hotels = useSelector(selectAllHotels);

  useEffect(() => {
    dispatch(getHotels(coordinates))
  }, [coordinates]);
  console.log(hotels)
  return (
    <>
      {hotels && hotels.map((hotel, index) => <PlaceDetails key={index} place={hotel} type='hotel' />)}
    </>
  )
}
