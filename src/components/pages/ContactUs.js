import { TextField,Grid,Paper } from '@mui/material';

import React from 'react';

function ContactUs(){
    return(
       <div>
      
      <h1> Contact Us Page!</h1>
        <Grid container spacing={1} padding={4} component={Paper} boxShadow={20}>
           
            <Grid item Lg={3} md={6} sm={1}>
<TextField type="text" id="txtname" label="Fullname" placeholder='Fullname' size='sm' variant='standard'></TextField>
            </Grid>
            <Grid item Lg={3} md={6} sm={1}>
<TextField type="text" id="txtEmail" label="Email" placeholder='Email' size='sm' variant='standard'></TextField>

            </Grid> 

            <Grid item Lg={3} md={3} sm={1}>
<TextField id="txtcrnumber" label="CRNumber" placeholder='CRNumber' size='sm' variant='standard' type="number"></TextField>
            </Grid>

          
           

        </Grid>
        </div>
    )
}
export default ContactUs;