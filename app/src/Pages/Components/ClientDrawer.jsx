import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import StoreIcon from '@mui/icons-material/Store';


const clientArray = [
  {
    name: "Store",
    URL : "/client-store"
  },
  {
    name: "Trending",
    URL : "/client-trending"
  },
  {
    name: "Sales",
    URL : "/client-sales"
  }
]
export default function ClientDrawer() {
 
  return (    
     <Box>
      <List sx={{display:"flex"}}>
        {clientArray.map((text, index) => (
          <ListItem key={index} component={Link} to={text.URL}>
            <ListItemButton >
              <ListItemIcon>
                {index % 2 === 0 ? <StoreIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>       
  );
}