import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
   
         <Box sx={{ flexGrow: 1 }}style={{marginTop:'0'}}>
      <AppBar position="static">
         <Toolbar>
        <img src="images/logo.jpg"
        alt="Logo"
        style={{ height: '100px', marginRight: '90px' }} 
      />

             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'0'}}>
            FeedBack Dashboard
          </Typography>
                   <Button color="inherit" href="/form">Add Feedback</Button>
                      <Button color="inherit" href="/l">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
 
  )
}

export default Navbar
