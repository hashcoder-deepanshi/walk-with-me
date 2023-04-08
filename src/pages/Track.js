import React, { useEffect, useState } from "react";
import { useJsApiLoader , GoogleMap,Marker ,Autocomplete , DirectionsRenderer } from "@react-google-maps/api";
import { Button, Skeleton ,  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CustomMarker from "./img1.jpg"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'transparent',
    boxShadow: 24,
    p: 4,
  };

export default function Track(){
    
    const [latitude,setLatitude] = useState("")
    const [longitude,setLongitude] = useState("")
    const [map,setMap] = useState(/** @type google.maps.Map */(null))
    
    const navigate = useNavigate()
    const fam = {lat:28.6675,lng: 77.2282}
    const fam2 ={lat:28.666,lng: 77.2282}
    const coords = {lat:latitude,lng:longitude}

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)

        })
    },[])

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey:"AIzaSyDO_ixC0ugp6gNOcZN-Y1ozRPAMka8YTeA",
        libraries:['places']
    })

    if(!isLoaded){
        return <Skeleton/>
    }

    return(
        <div className="Track">
           <GoogleMap 
                center={coords} 
                zoom={15} 
                mapContainerStyle={{width:"1000px",height:"800px"}}
                options={{
                    zoomControl:false,
                    streetViewControl:false,
                    mapTypeControl:false,
                    fullscreenControl:false
                }}
                onLoad={map => setMap(map)}>
                    <Marker position={coords}/>
                    <Marker position={fam} onClick={handleOpen} >
                    <Modal
                       open={open}
                       onClose={handleClose}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                    >
                    <Box sx={style} >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        Do you wish to connect with anusha chourasia ?
                        </Typography>
                        <Button onClick={()=>navigate("/dashboard/chatroom")}>Yes , connect me</Button>

                    </Box>
                    </Modal>
                    </Marker>
                    <Marker position={fam2} onClick={handleOpen} >
                    <Modal
                       open={open}
                       onClose={handleClose}
                       aria-labelledby="modal-modal-title"
                       aria-describedby="modal-modal-description"
                    >
                    <Box sx={style} >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                        Do you wish to connect with Deepanshi chourasia ?
                        </Typography>
                        <Button onClick={()=>navigate("/dashboard/chatroom")}>Yes , connect me</Button>

                    </Box>
                    </Modal>
                    </Marker>
                </GoogleMap> 
        </div>
    )
}