import React from 'react'
import './placedetails.css';
import { FaMoneyBillWave, FaTripadvisor, FaLink } from "react-icons/fa";
import { FaMapLocationDot, FaPhone, FaRankingStar } from "react-icons/fa6";
import { IoBookmarksOutline } from "react-icons/io5";
import { Button, Flex, Rate, Tag, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { setCoordinates } from '../../features/coordinates/coordinatesSlice';
import { SaveAttraction, SaveHotel, SaveRestaurant } from '../../features/User/userSlice';

const { Title, Text } = Typography;

const DEFAULT_PIC_URL = 'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg';

export default function PlaceDetails({ place ,type }) {
  const dispatch = useDispatch();

  const savePlace=(P)=>{
    if(type === 'hotel'){
      dispatch(SaveHotel(P))
    }else if(type ==='attraction'){
      dispatch(SaveAttraction(P))
    }else{
      dispatch(SaveRestaurant(P))
    }
  }
  
  const handleOnClick = () => {
    dispatch(setCoordinates({long: +place.longitude, lat: +place.latitude}));
  };

  return (
    <div className='place-details' onClick={handleOnClick}>
      <img src={place?.photo ? place.photo.images.medium.url : DEFAULT_PIC_URL} alt="" />
      <div className='details'>
        <Title level={5}>{place?.name || 'Interesting Place'}</Title>

        <div>
          <Text strong><FaRankingStar /> Rating : </Text>
          <Rate style={{fontSize: '1rem'}} disabled defaultValue={place?.rating || 2.5} />
        </div>

        <div>
          <Text strong><FaMoneyBillWave /> Pricing : </Text>
          <Text>{place.price_level || '$$'}</Text>
        </div>

        <div>
          <Text strong><FaMapLocationDot /> Address : </Text>
          <Text>{place?.address || 'Address'}</Text>
        </div>

        <div>
          <Text strong><FaPhone /> Phone : </Text>
          <Text>{place?.phone || '+0 000-000-0000'}</Text>
        </div>

        {place?.cuisine && <div className='tags'>
          {place.cuisine.map(cuisine => <Tag color="blue">{cuisine.name}</Tag>)}
        </div>}

        <Flex
          justify='end'
          gap={8}
        >
          <div>
            <Button shape="circle" type='dashed' icon={<IoBookmarksOutline />} onClick={()=>savePlace(place)} />
          </div> 

          <div>
            <Button href={place?.web_url || '#'} shape="circle" type='dashed' icon={<FaTripadvisor />} />
          </div>

          <div>
            <Button href={place?.website || '#'} shape="circle" type='dashed' icon={<FaLink />} />
          </div>
        </Flex>
      </div>
    </div>
  )
}