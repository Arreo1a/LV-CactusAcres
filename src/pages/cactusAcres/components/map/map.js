import React,{useState,useRef,useEffect,useLocation} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.scss";
import L from "leaflet";
import UseGeolocation from "./useGeolocation"


//iconos 
const markIcon = new L.Icon({
    iconUrl: require("./Icon/icon-location-red-removebg-preview.png"),
    iconSize: [35,45],
    iconAnchor:[17,46], //[left/Right,top/bottom]
    popupAnchor:[3,-46], //[left/Right,top/bottom]

})

const mymarkLocation = new L.Icon({
    iconUrl: require("./Icon/icon-location-blue-removebg-preview.png"),
    iconSize: [35,45],
    iconAnchor:[17,46], //[left/Right,top/bottom]
    popupAnchor:[3,-46], //[left/Right,top/bottom]

})
////////////////////////////////////////////////////////////////////////////


const Map = () => {

    const Zoom_Level = 12;
    const mapRef = useRef();

     const  [center,setCenter] =  useState ({
     currentLocation:{lat:30.004725448043615,lng:-107.56251452323006},
     });

     const [state,setState]=useState({
        longitude:0,
        latitude:0

    })

     useEffect(() => {
        navigator.geolocation.getCurrentPosition(
         function(position){
             setState({
                 longitude:position.coords.longitude,
                 latitude:position.coords.latitude
             })
         },
         function (error){
            console.log(error);
         },
         {
             enableHighAccuracy:true
         }
        )
     }, []);
   
    //  const [location] = useLocation();
    
    //  useEffect(() => {
    //      if(location.state.latitude && location.state.longitude){
    //          const currentLocation= {
    //              let:location.state.latitude,
    //              lng:location.state.longitude
    //          }
    //          setState({...state,currentLocation})
    //      }
    //  })

    

    const location = UseGeolocation();
    
  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.leafletElement.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        Zoom_Level,
        { animate: true }
      );
    } else {
      alert("NO funciona");
    }
  };
   
    

  return (
        <div className="map">
             <MapContainer center={center.currentLocation} zoom={Zoom_Level} ref={mapRef}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                    <Marker position={[30.012630122401593,-107.60445811795758]} icon={markIcon}>
                        <Popup>
                            Fraccionamiento <br /> Cactus Acres
                        </Popup>
                    </Marker>  

                    {location.loaded && !location.error && (
                    <Marker position={[location.coordinates.lat,location.coordinates.lng]} icon={mymarkLocation}>
                        
                    </Marker>  
                    )}
                
            
                
            </MapContainer>

            <div  className="btn-location">
             <button  className="btn-primary" onClick={showMyLocation}>
                    ubicacion
            </button> 
                
                <h1>Latitude: {state.latitude}</h1>
                <h1>Longitude: {state.longitude}</h1>
            </div>
      </div>

  );
};

export default Map;

