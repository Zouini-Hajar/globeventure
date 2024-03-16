import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAttractions, selectAllAttractions } from '../../features/attractions/attractionsSlice'
import { selectCoordinates } from '../../features/coordinates/coordinatesSlice';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

export default function Attractions() {
  const dispatch = useDispatch();
  const coordinates = useSelector(selectCoordinates);
  const attractions = useSelector(selectAllAttractions);

  useEffect(() => {
    dispatch(getAttractions(coordinates))
  }, [coordinates]);
  return (
    <>
      {attractions && attractions.map((attraction, index) => <PlaceDetails key={index} place={attraction} type='attraction' />)}
    </>
  )
}
