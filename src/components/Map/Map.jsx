import React from 'react'; 
import GoogleMapReact from 'google-map-react';
import { Paper, TYpography, useMediaQuery } from '@mui/material/core';
import LocationOutlined from '@mui/icons-material/locationOutlined';
import Rating from 'mui/material/lab'; 

import useStyles from './styles'; 

const Map = () => {

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = { lan: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
                
            </GoogleMapReact>
        </div>
    )
}

export default Map;