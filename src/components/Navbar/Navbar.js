import React from 'react';

import { AppBar, Toolbar, Typography,Button } from '@mui/material';
import Home from '../pages/home';
import ContactUs from '../pages/ContactUs';
import Services from '../pages/Services';
import {Link} from 'react-router-dom';
function navbar(props){

return (
    <AppBar color="primary">
           
    <Toolbar >
        <Typography style={{flexGrow:1}} >MY Portfolio</Typography>
        <Button variant='contained' component={Link}  to="/">Home</Button>
        <Button variant='contained' component={Link}  to="/Services">Services</Button>
        <Button variant='contained' component={Link}  to="/contact-us">Contact Us</Button>
    </Toolbar>
    </AppBar>
)


}
export default navbar;