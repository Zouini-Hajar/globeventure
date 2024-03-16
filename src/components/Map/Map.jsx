import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { createMapLibreGlMapController } from "@maptiler/geocoding-control/maplibregl-controller";
import "@maptiler/geocoding-control/style.css";
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import { selectCoordinates } from '../../features/coordinates/coordinatesSlice';
import { useSelector } from 'react-redux';
import { Button, Tooltip, ConfigProvider } from 'antd';
import { FloatButton } from 'antd';
import { TbMapCog } from "react-icons/tb";


export default function Map({ setMapController }) {
  const API_KEY = 'zX8EGAfxxysZrN6LX00E';

  const mapContainer = useRef(null);
  const map = useRef(null);

  const {long, lat} = useSelector(selectCoordinates);
  const [zoom] = useState(14);
  const [MapsStyle , setMapsStyle] = useState('streets-v2')

  useEffect(() => {
    if (map.current && MapsStyle === '') return; // stops map from intializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/${MapsStyle}/style.json?key=${API_KEY}`,
      center: [long, lat],
      zoom: zoom,
    });
    
    // map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    setMapController(createMapLibreGlMapController(map.current, maplibregl));

  }, [API_KEY, long, lat, zoom, MapsStyle]);
  console.log(MapsStyle)
  const [open, setOpen] = useState(true);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      <FloatButton.Group
        open={open}
        onClick={()=>{setOpen(!open)}}
        trigger="click"
        style={{
          right: 24,
        }}
        icon={<TbMapCog />}
      >
        <Tooltip placement="leftTop" title={'satellite'}>
          <FloatButton onClick={()=>{setMapsStyle('satellite'); setOpen(!open)}} icon={"1"} />
        </Tooltip>
        <Tooltip placement="leftTop" title={'streets-v2'}>
          <FloatButton onClick={()=>{setMapsStyle('streets-v2'); setOpen(!open)}} icon={"2"} />
        </Tooltip>
        <Tooltip placement="leftTop" title={'topo-v2'}>
          <FloatButton onClick={()=>{setMapsStyle('topo-v2'); setOpen(!open)}} icon={"3"} />
        </Tooltip>
      </FloatButton.Group>
    </div>
  );
}