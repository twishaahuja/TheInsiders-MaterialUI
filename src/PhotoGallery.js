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

function PhotoGallery() {
    const itemData = [
        {
          img: 'one.jpeg',
          title: 'Appartment',
          author: '@bkristastucchio',
        },
        {
          img: 'two.jpeg',
          title: 'Burger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
          title: 'Camera',
          author: '@helloimnik',
        },
        {
            img: 'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
            title: 'Brezdvxakfast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://static.vecteezy.com/system/resources/thumbnails/022/448/292/small/save-earth-day-poster-environment-day-nature-green-ai-generative-glossy-background-images-tree-and-water-free-photo.jpg',
            title: 'Burzdxvger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camdfxera',
            author: '@helloimnik',
          },
          {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfdfvdxdast',
            author: '@bkristastucchio',
          },
          {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Bfdvdurger',
            author: '@rollelflex_graphy726',
          },
          {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
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
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
        title: 'Burger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
      },
      {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Brezdvxakfast',
          author: '@bkristastucchio',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burzdxvger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camdfxera',
          author: '@helloimnik',
        },
        {
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfdfvdxdast',
          author: '@bkristastucchio',
        },
        {
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Bfdvdurger',
          author: '@rollelflex_graphy726',
        },
        {
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Cadfsmera',
          author: '@helloimnik',
        },
  ]
  const itemData3 = [
    {
      img: 'five.jpeg',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Brezdvxakfast',
        author: '@bkristastucchio',
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burzdxvger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camdfxera',
        author: '@helloimnik',
      },
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfdfvdxdast',
        author: '@bkristastucchio',
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Bfdvdurger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Cadfsmera',
        author: '@helloimnik',
      },
]
  return (
    <Grid container spacing={2}>
      {/* Header */}
      <Grid item xs={12}>
        <header style={{ background: 'lightblue', height: '80px', width: '100%', position: 'sticky', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h4" style={{ marginLeft: '20px', fontSize: '30px' }}>
           <ChairIcon fontSize='medium'/> The Insiders
          </Typography>
          <div style={{fontSize: '35px', padding: '12px', marginLeft: '900px', marginBottom: '18px'}}>
          <SearchBar />
          </div>
          <IconButton color="inherit" style={{ marginRight: '25px',fontSize: '35px', padding: '12px', marginTop:'0px' }}>
          <AccountCircleIcon /> {/* Add the profile icon here */}
          </IconButton>
        </header>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* Main Content */}
          <Grid item xs={12} md={9} style={{ paddingTop: '80px' }}>
            <Grid container spacing={2}>
              {/* Column 1 */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h5" style={{ marginTop: '16px', marginLeft: '20px'  }}>
                  Bedroom
                </Typography>
                <div
                  style={{
                    minHeight: '150px',
                    maxWidth: '100%',
                    minWidth: '150px',
                    // width: '100%',
                    marginLeft: '20px',
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
                <Typography variant="h5" style={{ marginTop: '16px', marginLeft: '20px' }}>
                  Washroom
                </Typography>
                <div
                  style={{
                    minHeight: '150px',
                    maxWidth: '100%',
                    width: '100%',
                    marginLeft: '20px',
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
                <Typography variant="h5" style={{ marginTop: '16px', marginLeft: '20px'  }}>
                  Living Room
                </Typography>
                <div
                  style={{
                    minHeight: '150px',
                    maxWidth: '100%',
                    width: '100%',
                    marginLeft: '20px',
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
            <Navbar />
          </Grid>
        </Grid>
      </Grid>

      {/* Footer */}
      <Grid item xs={12}>
        <footer style={{ background: 'lightcoral', height: '60px', width: '100%', position: 'sticky', bottom: '0', left: '0', display: 'flex' }}>
          {/* Footer content */}
          <h4>
            copyright @2023
          </h4>
        </footer>
      </Grid>
    </Grid>
  );
}

export default PhotoGallery;