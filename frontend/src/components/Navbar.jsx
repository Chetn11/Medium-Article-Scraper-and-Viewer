import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NewspaperSharpIcon from '@mui/icons-material/NewspaperSharp';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <NewspaperSharpIcon/>
        </IconButton>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Article WebScraper
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar