import React, { useState } from "react";
import './saved.css';
import { LuPalmtree } from "react-icons/lu";
import { MdOutlineLocalHotel } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Empty, Menu, Typography } from "antd";
import { useSelector } from "react-redux";
import { selectSavedAttractions, selectSavedHotels, selectSavedRestaurants } from "../../features/User/userSlice";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const { Text } = Typography;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const Saved = ({ setShowSaved }) => {
    const [selected, setSelected] = useState('1');

    const items = [
        getItem(
            <Text>Attractions</Text>,
            '1',
            <LuPalmtree />,
        ),
        getItem(
            <Text>Hotels</Text>,
            '2',
            <MdOutlineLocalHotel />,
        ),
        getItem(
            <Text>Restaurants</Text>,
            '3',
            <IoFastFoodOutline />,
        ),
    ];

    const attractions = useSelector(selectSavedAttractions);
    const hotels = useSelector(selectSavedHotels);
    const restaurants = useSelector(selectSavedRestaurants);


    return (
        <div className="saved">
            <Menu
                style={{
                    width: '20%',
                    height: '100%'
                }}
                defaultSelectedKeys={[selected]}
                items={items}
                onSelect={e => setSelected(e.key)}
            />
            <div>
                <Button type="text" shape='circle' onClick={(e) => setShowSaved(false)} icon={<FaArrowLeft />} />
                <div  className="list">
                    {selected === '1' &&
                        (attractions ?
                            attractions.map((attraction, index) => <PlaceDetails key={index} place={attraction} />) :
                            <Empty description="No saved data" />
                        )
                    }
                    {selected === '2' &&
                        (hotels ?
                            hotels.map((hotel, index) => <PlaceDetails key={index} place={hotel} />) :
                            <Empty description="No saved data" />
                        )
                    }
                    {selected === '3' &&
                        (restaurants ? restaurants.map((restaurant, index) => <PlaceDetails key={index} place={restaurant} />) :
                            <Empty description="No saved data" />
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Saved;