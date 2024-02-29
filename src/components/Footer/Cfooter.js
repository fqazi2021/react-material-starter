import React from 'react';
 import { Grid,Box, Typography } from '@mui/material';
 //import {InputAdornment,TextField} from '@mui/material';
// import  { Search } from '@mui/icons-material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Cfooter(){
  
    return (
        
   <footer style={{position:'fixed',bottom:0}}>

<Grid container spacing={2}> 
    <Grid item Lg={4}>
        <Box boxShadow={10}>
            <Typography variant='h3' Lg={2}><AccountBoxIcon></AccountBoxIcon>Company</Typography>
            <hr></hr>
            Aliquip voluptate proident voluptate exercitation.
        </Box>
    </Grid>
    <Grid item Lg={4}>
    <Box boxShadow={10} >
            <Typography variant='P' Lg={2}> Ipsum id elit ex veniam laborum in incididunt veniam.   </Typography>
            <hr></hr>
            <Typography variant='P' Lg={2}> Ipsum id elit ex veniam laborum in incididunt veniam.   </Typography>
            <hr></hr>
            <Typography variant='P' Lg={2}> Ipsum id elit ex veniam laborum in incididunt veniam.   </Typography>
            <hr></hr>
            
        </Box>
    </Grid>
    <Grid item Lg={4}>
        Column 3
    </Grid>
</Grid>

    
   </footer>      
        
    );
}


export default Cfooter;