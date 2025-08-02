import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a1a1a' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo / Brand */}
        <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
          MyStore
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button component={Link} to="/" sx={{ color: '#fff' }}>Home</Button>
          <Button component={Link} to="/shop" sx={{ color: '#fff' }}>Shop</Button>
          <Button component={Link} to="/about" sx={{ color: '#fff' }}>About</Button>
          <Button component={Link} to="/contact" sx={{ color: '#fff' }}>Contact</Button>
        </Box>

        {/* Cart and Auth Buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
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