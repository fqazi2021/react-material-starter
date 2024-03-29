import React from 'react';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
// import {Check,ListItemIcon} from '@mui/icons-material';
import { AppBar, Toolbar, Typography, IconButton,Menu,MenuItem, ListItemText,Box,Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar(props){
    const menuitems =["Home","Profile","Services","Contact Us"]
const [anchorEl, setAnchorEl] = useState(false);
const open = anchorEl;
const handleClick = (e) => {
    console.log(open);
    if(open===false){
    setAnchorEl(true);
    
    }

else{
    setAnchorEl(false);
    
}
}
// function Navigate(url){
//     window.location= url;
// }
const handleClose = () => {
  setAnchorEl(false);
};
function getmenuitems(){

    const buttons = menuitems.map((item)=>{
        return (
        <Link  to={item} ><Button color="primary" variant='contained'>{item}</Button></Link>
        );
    });

    return buttons;
}

function getlistmenuitems(){

    const buttons = menuitems.map((item)=>{
        return (<MenuItem >
            <ListItemText onClick={handleClose}>{item}</ListItemText>
            </MenuItem>);
    });

    return buttons;
}
    
return (
    <AppBar color={props.color} position='fixed'>
           
    <Toolbar >
    <IconButton Size='Large' edge='start' color='inherit' aria-label='Logo' sx={{display:{sm:'none',xs:'none',md:'flex',lg:'flex'}}}>
            <ContactEmergencyIcon></ContactEmergencyIcon>
        </IconButton>
        <Box sx={{display:{sm:'flex',xs:'flex',md:'none',lg:'none'}}}>
        <IconButton Size='Large' edge='start' color='inherit' aria-label='Logo' sx={{display:{sm:'flex',xs:'flex',md:'none',lg:'none'}}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
            <MenuIcon ></MenuIcon>
        </IconButton>
               
            <Menu open={open}  MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
           {getlistmenuitems()}
            </Menu>
        
        
        </Box>
        <Typography style={{flexGrow:1}} >MY Portfolio</Typography>
        <Box variant='div' sx={{display:{sm:'none',xs:'none',md:'none',lg:'flex',width:'inherit'}}}>
        
        {getmenuitems()}
            
                
        </Box>

        
    
  
    </Toolbar>
    </AppBar>
);


}
export default Navbar;