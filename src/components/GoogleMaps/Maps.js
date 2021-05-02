import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const {REACT_APP_GOOGLE_API_KEY} = process.env
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
    lat:41.5661506652832,
    lng:-8.477214813232422
};

let origin = {
    lat:41.5661506652832,
    lng:-8.477214813232422
}

let destination = {
    lat: 41.566062927246094,
    lng:-8.47773551940918
}



function MyComponent({}) {
  return (
    <LoadScript
      googleMapsApiKey= {REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)