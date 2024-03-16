import React, { useState } from "react"
import './sider.css';
import { GeocodingControl } from "@maptiler/geocoding-control/react";
import TypesMenu from "./TypesMenu";
import { useDispatch } from "react-redux";
import { setCoordinates } from "../../features/coordinates/coordinatesSlice";
import Content from "../Content/Content";

const Sider = ({ mapController }) => {
    const API_KEY = 'zX8EGAfxxysZrN6LX00E';
    const dispatch = useDispatch();

    // Menu item selected
    const [selected, setSelected] = useState('1');

    const handlePickLocation = (e) => {
        if (e)
            dispatch(setCoordinates({long: e.bbox[0], lat: e.bbox[1]}));
    }

    return (
        <div className="sider">
            <div className="geocoding">
                <GeocodingControl 
                    onPick={handlePickLocation}
                    apiKey={API_KEY}
                    mapController={mapController} 
                />
            </div>
            <TypesMenu selected={selected} setSelected={setSelected} />
            <Content selected={selected} />
        </div>
    );
}

export default Sider;