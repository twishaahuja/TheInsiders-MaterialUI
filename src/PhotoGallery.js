import React from 'react';
import { Grid, IconButton } from '@mui/material';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import CustomImageList from './logo';
import TitlebarBelowImageList from './col1';
import ImageList from '@mui/material/ImageList';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Box } from '@material-ui/core';
import MyList from './col1';
import Navbar from './components/Navbar/Navbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ChairIcon from '@mui/icons-material/Chair';
import SearchBar from './Header/search';
import Header from './Header/Header'

function PhotoGallery() {
    const itemData = [
        {
          img: 'br5.jpg',
          title: 'Appartment',
          author: '@bkristastucchio',
        },
        {
          img: 'br1.jpg',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'br3.jpg',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
            img: 'br2.jpg',
            title: 'Brezdvxakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'br3.jpg',
            title: 'Burzdxvger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'br4.jpg',
            title: 'Camdfxera',
            author: '@helloimnik',
          },
          {
            img: 'br5.jpg',
            title: 'Breakfdfvdxdast',
            author: '@bkristastucchio',
          },
          {
            img: 'br6.jpg',
            title: 'Bfdvdurger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'br7.jpg',
            title: 'Cadfsmera',
            author: '@helloimnik',
          },
    ]
    const itemData2 = [
      {
        img: 'three.jpeg',
        title: 'Breakfast',
        author: '@bkristastucchio',
      },
      {
        img: 'w3.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'w7.jpg',
        title: 'Camera',
        author: '@helloimnik',
      },
      {
          img: 'two.jpeg',
          title: 'Brezdvxakfast',
          author: '@bkristastucchio',
        },
        {
          img: 'w5.jpg',
          title: 'Camdfxera',
          author: '@helloimnik',
        },
  ]
  const itemData3 = [
    {
      img: 'https://www.anjali-rawat.com/wp-content/uploads/2020/02/Anjali-Rawat-Bayview-2-1024x576.jpg',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'lr2.jpg',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'lr1.jpg',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
        img: 'lr3.jpg',
        title: 'Brezdvxakfast',
        author: '@bkristastucchio',
      },
      {
        img: 'lr4.jpg',
        title: 'Burzdxvger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'lr5.jpg',
        title: 'Camdfxera',
        author: '@helloimnik',
      },
      {
        img: 'lr6.jpg',
        title: 'Breakfdfvdxdast',
        author: '@bkristastucchio',
      },
      {
        img: 'lr7.jpg',
        title: 'Bfdvdurger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'lr8.jpg',
        title: 'Cadfsmera',
        author: '@helloimnik',
      },
]
  return (
    <Grid container spacing={2}>
      {/* Header */}
      <Grid item xs={12}>
        <header style={{ background: '#4c3b35', height: '80px', width: '100%', position: 'sticky', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" style={{ marginLeft: '20px', fontSize: '30px',fontFamily: "Figtree", color: "white" }}>
           <ChairIcon fontSize='medium'/> The Insiders
          </Typography>
          <div style={{fontSize: '35px', padding: '12px', marginLeft: '900px', marginBottom: '18px'}}>
          <SearchBar />
          </div>
          <IconButton color="inherit" style={{ marginRight: '25px',fontSize: '35px', padding: '12px', marginTop:'0px',color: "white" }}>
          <AccountCircleIcon /> 
          </IconButton>
          {/* <Header /> */}
        </header>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* Main Content */}
          <Grid item xs={12} md={9} style={{ paddingTop: '80px' }}>
            <Grid container spacing={2}>
              {/* Column 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" style={{ marginTop: '16px', marginLeft: '20px',fontFamily: "Jost", color: "#4e342e"  }} >
                  Bedroom
                </Typography>
                <div
                  style={{
                    minHeight: '150px',
                    maxWidth: '100%',
                    minWidth: '150px',
                    // width: '100%',
                    marginLeft: '20px'
                    
                  }}
                >
                  {/* ImageList */}
                  <ImageList sx={{ gap: 20, marginTop: '8px' }} cols={1}>
                    {itemData.map((item) => (
                      <ImageListItem key={item.img} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                        <img
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          style={{ maxWidth: '100%' }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </Grid>

              {/* Column 2 */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" style={{ marginTop: '16px', marginLeft: '20px',fontFamily: "Jost", color: "#4e342e", marginRight: '5px'}}>
                  Washroom
                </Typography>
                <div
                  style={{
                    minHeight: '150px',
                    maxWidth: '100%',
                    width: '100%',
                    marginLeft: '20px',
                    marginRight: '5px',
                    minWidth: '150px',
                  }}
                >
                  {/* ImageList */}
                  <ImageList sx={{ gap: 20, marginTop: '8px' }} cols={1}>
                    {itemData2.map((item) => (
                      <ImageListItem key={item.img} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                        <img
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          style={{ maxWidth: '100%' }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </Grid>

              {/* Column 3 */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" style={{ marginTop: '16px', marginLeft: '20px',fontFamily: "Jost", color: "#4e342e", paddingLeft: '20px',  }}>
                  Living Room
                </Typography>
                <div
                  style={{
                    minHeight: '150px',
                    maxWidth: '100%',
                    width: '100%',
                    marginLeft: '20px',
                    minWidth: '150px',
                    paddingLeft: '20px',
                  }}
                >
                  {/* ImageList */}
                  <ImageList sx={{ gap: 20, marginTop: '8px' }} cols={1}>
                    {itemData3.map((item) => (
                      <ImageListItem key={item.img} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                        <img
                          srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                          src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                          alt={item.title}
                          loading="lazy"
                          style={{ maxWidth: '100%' }}
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </Grid>
            </Grid>
          </Grid>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
              
            <Navbar style={{ background: '#81c784' }}/>
        
          </Grid>
        </Grid>
      </Grid>

      {/* Footer */}
      <Grid item xs={12}>
        <footer style={{ background: '#4c3b35', height: '60px', width: '100%', position: 'sticky', bottom: '0', left: '0', display: 'flex' }}>
          {/* Footer content */}
          <h4 style = {{color: 'white',fontFamily: "Jost", textAlign:'center', paddingLeft: '500px', }}>
            {/* The Insiders copyright @2023 */}
            &copy; 2023 copyright: The Insiders
          </h4>
        </footer>
      </Grid>
    </Grid>

  );
}

export default PhotoGallery;