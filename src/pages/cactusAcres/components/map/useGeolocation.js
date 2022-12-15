import React,{useState,useEffect} from 'react';

const UseGeolocation = () => {

    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: "" },
    });

    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                 longitude:location.coords.longitude,
                 latitude:location.coords.latitude
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            function: console.log("hubo un error",error)
                
            
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            onError({
                code: 0,
                function: console.log("Geolocation not supported")
                
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);




    return (
       <div>
       {location}
       </div>
    );
}

export default UseGeolocation;




// const [location, setLocation] = useState({
    //     loaded: false,
    //     coordinates: { lat: "", lng: "" },
    // });

    // const onSuccess = (location) => {
    //     setLocation({
    //         loaded: true,
    //         coordinates: {
    //              longitude:position.coords.longitude,
    //              latitude:position.coords.latitude
    //         },
    //     });
    // };

    // const onError = (error) => {
    //     setLocation({
    //         loaded: true,
    //         error: {
    //             code: error.code,
    //             message: error.message,
    //         },
    //     });
    // };

    // useEffect(() => {
    //     if (!("geolocation" in navigator)) {
    //         onError({
    //             code: 0,
    //             message: "Geolocation not supported",
    //         });
    //     }

    //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // }, []);
