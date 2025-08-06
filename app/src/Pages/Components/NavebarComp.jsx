import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <AppBar position="static" sx={{ width:"100%", margin:"auto" , maxWidth:"1024px"}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        
        <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
          MyStore
        </Typography>

        
        <Box sx={{ display: 'flex', gap: 2 , height:"70px", bgcolor:"primary.main"}}>
          <Button component={Link} to="/" sx={{ color: '#fff' }}>Home</Button>
          <Button component={Link} to="/allitems" sx={{ color: '#fff' }}>AllItems</Button>
          <Button component={Link} to="/allclients" sx={{ color: '#fff' }}>AllClients</Button>
          <Button component={Link} to="/allorders" sx={{ color: '#fff' }}>AllOrders</Button>
        </Box>

        
        <Box sx={{ display: 'flex', height:"70px", alignItems: 'center', gap: 2, bgcolor:"primary.main"}}>
          <IconButton component={Link} to="/cart" sx={{ color: '#fff' }}>
            <Badge badgeContent={2} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button component={Link} to="/login" sx={{ color: '#fff', border: '1px solid #fff' }}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
    
  );
};

export default Navbar;