import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div 
    style={{
      backgroundImage: "url('/images/home.jpg')",
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
            height: '100vh',
      width: '100vw', 
    }}>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: 'transparent',
            boxShadow: 'none', }}>
      <Toolbar >
        <img src="images/logo.png"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />
       <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,color:'aliceblue'}}>
            <h2>Feedback Portal</h2>
          </Typography>
          
          <Button color="inherit" a href='/dash' ><h2>Admin Panel</h2></Button>
        </Toolbar>
      </AppBar>
    </Box>
    <br/><br/><br/><br/>
    <div 
        style={{
          textAlign: 'center', 
          marginTop: '50px', 
          color: 'Highlight', 
        }}
      >
        <Typography variant="h2" gutterBottom>
          Welcome to the Course Feedback Portal
        </Typography><br/><br/>
        <Typography variant="h5" fontStyle={'oblique'} gutterBottom>
          <h6>“We all need people who will give us feedback. That’s how we improve.”</h6> 
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          href="/login" 
          style={{ marginTop: '20px' }}
       >
          Get Started
        </Button>
      </div>
    </div>
  );
}

  export default Home