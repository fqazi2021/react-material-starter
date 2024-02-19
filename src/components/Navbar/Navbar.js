import React from 'react';

import { AppBar, Toolbar, Typography,Button } from '@mui/material';
import Home from '../pages/home';
import ContactUs from '../pages/ContactUs';
import Services from '../pages/Services';
import {Link} from 'react-router-dom';
function Navbar(props){

return (
    <AppBar color="primary">
           
    <Toolbar >
        <Typography style={{flexGrow:1}} >MY Portfolio</Typography>
        <Button variant='contained' Component={Link} path={Home} to="/">Home</Button>
        <Button variant='contained' Component={Link} path={Services} to="/Services">Services</Button>
        <Button variant='contained' Component={Link} path={ContactUs} to='/ContactUs'>Contact Us</Button>
    </Toolbar>
    </AppBar>
)


}
export default Navbar;