import React from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import BungalowIcon from '@mui/icons-material/Bungalow';



function Header() {

  return (
    <div>
      <Grid container spacing={2}>
{/* Header */}
<Grid item xs={12}>
  <header style={{ background: 'lightblue', height: '80px', width: '250%', paddingLeft: '',}}>
    <Grid container justifyContent="space-between" alignItems="center">
        <BungalowIcon fontSize='large'/>
      <Grid item>
        <h1 style={{ textAlign: 'center', lineHeight: '80px', margin: '0' }}>
          The Insiders
        </h1>
      </Grid>
      <Box paddingRight={1}
      marginLeft={140}>
          <h2>Profile</h2>
      {/* <NotificationBell
               iconColor="white"
           /> */}
           </Box>
           
      <Grid item>
        <Box paddingRight={4}> {/* Add some right padding */}
          <NotificationsIcon
               iconColor="white"
           />
        </Box>
      </Grid>
    </Grid>
  </header>
</Grid>
</Grid>
      </div>
    
  );
}

export default Header;