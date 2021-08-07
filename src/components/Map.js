import ReactMapGL,{Marker,Popup} from 'react-map-gl';
import React,{useState} from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';

import marker from '../static/systemUtility/marker.png'

const mapStyle = {
    width: '100%',
    height: 400
}


function Map({locationData}) {
    const [showPopup,togglePopup]=useState(false)
    const [viewport, setviewport] = useState({
        latitude: locationData?.latitude,
        longitude: locationData?.longitude,
        zoom: 10
    })
    return (
        <ReactMapGL
        mapboxApiAccessToken='pk.eyJ1IjoidGVua3VzNDciLCJhIjoiY2tzMWpjdmF3MGtxdDJ3cGU5YTE2dmZteiJ9.3KssrguiXhgGXRyXylX3Cw'
        mapStyle="mapbox://styles/tenkus47/cks1kc1ix0f9e18qq21cj2rla"
        {...viewport}
        {...mapStyle}
        onViewportChange={(viewport) => setviewport(viewport)}
      >
          <Marker
          latitude={locationData?.latitude}
          longitude={locationData?.longitude}
          >
        <img src={marker} alt='marker' onClick={()=>togglePopup(true)} className='w-6 animate-bounce cursor-pointer'/>
          </Marker>
          {showPopup && <Popup
          latitude={locationData?.latitude}
          longitude={locationData?.longitude}
          closeButton={true}
          closeOnClick={false}
          onClose={() => togglePopup(false)}
          anchor="bottom" >
          <div 
          className='font-bold '>
              <p>latitude:{locationData?.latitude}</p>
              <p>longitude:{locationData?.longitude}</p>
          </div>
        </Popup>}
      </ReactMapGL>
    )
}

export default Map
