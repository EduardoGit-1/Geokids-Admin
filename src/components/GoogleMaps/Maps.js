// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// const {REACT_APP_GOOGLE_API_KEY} = process.env
// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//     lat:41.5661506652832,
//     lng:-8.477214813232422
// };

// let origin = {
//     lat:41.5661506652832,
//     lng:-8.477214813232422
// }

// let destination = {
//     lat: 41.566062927246094,
//     lng:-8.47773551940918
// }



// function MyComponent({}) {
//   return (
//     <LoadScript
//       googleMapsApiKey= {REACT_APP_GOOGLE_API_KEY}
//     >
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={10}
//       >
//         { /* Child components, such as markers, info windows, etc. */ }
//         <></>
//       </GoogleMap>
//     </LoadScript>
//   )
// }

// export default React.memo(MyComponent)

// import { Map, GoogleApiWrapper } from 'google-maps-react';
// const {REACT_APP_GOOGLE_API_KEY} = process.env
// function GoogleMaps() {
//   const mapStyles = {
//     width: '100%',
//     height: '100%',
//   };
//   return (
//     <Map
    
//       zoom={8}
//       style={mapStyles}
//       initialCenter={{ lat: 47.444, lng: -122.176}}
//     />
// );

// }


// export default GoogleApiWrapper({
//   apiKey: REACT_APP_GOOGLE_API_KEY
// })(GoogleMaps);

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import RoomIcon from '@material-ui/icons/Room';
import destination from '../../assets/Icons/destination.svg'
import origin from '../../assets/Icons/origin.svg'
const {REACT_APP_GOOGLE_API_KEY} = process.env
const containerStyle = {
  paddingTop: "56.25%"
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function GoogleMaps({markers}) {
  console.log(markers)
  const renderMarkers = () => {
    markers.map((marker, i) => {
      console.log(marker)
      return <Marker key = {i} position = {marker}/>

    })    

  }
  return (
    <LoadScript
      googleMapsApiKey={REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={{
          disableDefaultUI: true,
          zoomControlOptions: false
        }}
        center={markers[0]}
        zoom={18}
      >
        
        {markers.length > 1 ?
          <>
            <Marker key = {1} icon = {{url: origin}} position = {markers[0]}/> 
            <Marker key = {2} icon = {{url: destination}} position = {markers[1]}/>
          </>
          :
          <Marker key = {1} icon = {{url: destination}} position = {markers[0]}/>
        }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(GoogleMaps)
