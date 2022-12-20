import React,{useState,useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.scss";
import L from "leaflet";

//iconos 
const markIcon = new L.Icon({
    iconUrl: require("./Icon/icon-location-red-removebg-preview.png"),
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
                
                           
            </MapContainer>
      </div>

  );
};

export default Map;

