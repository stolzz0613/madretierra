import {useState, useMemo} from 'react';

import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl
} from 'react-map-gl';

import Pin from './pin';

import CITIES from './cities.json';
import './map.css';

const TOKEN = 'pk.eyJ1Ijoic3RvbHp6MDYxMyIsImEiOiJjbG5sYXplbXkxbHhzMnNvMnVyM3M5dWJ6In0.PwrM2KFVkXb5oUKNmOvaZQ';

function MapComponent() {
  const [popupInfo, setPopupInfo] = useState(null);

  const pins = useMemo(
    () =>
      CITIES.map((city, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={city.longitude}
          latitude={city.latitude}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPopupInfo(city);
          }}
        >
          <Pin />
        </Marker>
      )),
    []
  );

  return (
    <div id='map'>
      <Map
        initialViewState={{
          latitude: 15.05170,
          longitude: -90.9830,
          zoom: 3,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={TOKEN}
        bearing={0}
        pitch={60}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}
      </Map>
    </div>
  );
}

export default MapComponent;