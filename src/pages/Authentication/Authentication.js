import React from 'react'
import Grid from '@mui/material/Grid';
// import PhotoGallery2 from '../../PhotoGallery2';
// import PhotoGallery from '../../PhotoGallery2';
import PhotoGallery from '../../PhotoGallery';
import Header from '../../Header/Header';

const Authentication = () => {

    return (
        <Grid item xs={8}>
            <Header />
            <PhotoGallery />
        </Grid>
    )
}

export default Authentication
