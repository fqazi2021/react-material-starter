import React from 'react';

import { AppBar, Toolbar, Typography,Button } from '@mui/material';
// import Home from '../pages/home';
// import ContactUs from '../pages/ContactUs';
// import Services from '../pages/Services';

function Navbar(props){

return (
    <AppBar color="primary">
           
    <Toolbar >
        <Typography style={{flexGrow:1}} >MY Portfolio</Typography>
       
        <Button variant="contained">Home</Button>
        <Button variant='contained' >Services</Button>
       
    </Toolbar>
    </AppBar>
);


}
export default Navbar;