import { useState } from 'react';
import Map from '../components/Map/Map';
import Header from '../components/Header/Header';
import Sider from '../components/Sider/Sider';
import Saved from '../components/Saved/Saved';

function Home() {
  const [mapController, setMapController] = useState();
  const [showSaved, setShowSaved] = useState(false);

  return (
    <>
      <Map setMapController={setMapController} />
      <Header setShowSaved={setShowSaved} />
      {!showSaved ?
        <Sider mapController={mapController} /> :
        <Saved setShowSaved={setShowSaved} />
      }
    </>
  );
}

export default Home;