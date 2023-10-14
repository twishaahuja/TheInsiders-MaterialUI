import React from 'react';
import PhotoGallery from './PhotoGallery'; // Import your PhotoGallery component
import CustomImageList from './logo'; // Polaroid Photo
import { Box } from '@material-ui/core';
import { mainNavbarItems } from './components/Navbar/consts/navbarItems';
import MyList from './col1';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div>
      {/* <Navbar /> */}
      {/* You can add any additional components or content here */}
      <PhotoGallery /> {/* Render your PhotoGallery component */}
    </div>
    
  );
}

export default App;
