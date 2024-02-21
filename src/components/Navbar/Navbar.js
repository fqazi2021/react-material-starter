import React from 'react';

import { AppBar, Toolbar, Typography,Link,Button } from '@mui/material';
// import Home from '../pages/home';
// import ContactUs from '../pages/ContactUs';
// import Services from '../pages/Services';

function Navbar(props){

return (
    <AppBar color={props.color}>
           
    <Toolbar >
        <Typography style={{flexGrow:1}} >MY Portfolio</Typography>
       
        <Button variant="contained" path="/" to="/home" component={Link}>Home</Button>
        <Button variant='contained' href="/services">Services</Button>
        <Button variant='contained' href="/contactus">Contact Us</Button>
       
    </Toolbar>
    </AppBar>
);


}
export default Navbar;