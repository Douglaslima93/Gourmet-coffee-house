import React from "react"
import { GoogleMap, useJsApiLoader , Marker} from '@react-google-maps/api';
import "./MapPage.css"

const position = {
    lat: 45.677171, 
    lng: 9.634322
}

const MapPage = () => {

        const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: "AIzaSyCB1v7xeQby2EnU1CWdJCgRROa7opO5JKY"
        })

    return ( 
    <div className="map">
        {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '100%' , height: '100%'}}
        center={position}
        zoom={15}
      >
        <Marker position={position}/>
      </GoogleMap>
  ) : <></>
}

        
    </div>)
}
export default MapPage