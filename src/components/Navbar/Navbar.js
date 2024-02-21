import React from 'react';

import { AppBar, Toolbar, Typography,Button } from '@mui/material';

function Navigate(url){
    window.location= url;
    console.log("url:"+url);
}

function Navbar(props){
    //const navigate = useNavigate();
return (
    <AppBar color={props.color}>
           
    <Toolbar >
        <Typography style={{flexGrow:1}} >MY Portfolio</Typography>
       
        <Button variant='contained' onClick={()=>{Navigate("/home")}}>Home</Button>
        <Button  variant='contained' onClick={()=>{Navigate("/services")}}>Services</Button>
        <Button  variant='contained' onClick={()=>{Navigate("/contactus")}}>Contact Us</Button>
       
    </Toolbar>
    </AppBar>
);


}
export default Navbar;