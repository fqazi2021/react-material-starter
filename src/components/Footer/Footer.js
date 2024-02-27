import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import {InputAdornment,TextField} from '@mui/material';
import SearchIcon, { Search } from '@mui/icons-material';
 

function Footer(){
  
    return (
        <>
    
        <Grid container  bgcolor='#666' >
            <Grid item lg={4} md={4} borderRadius={1} borderRight={1} bgcolor='#ccc' p={2}>
           
            <Typography variant='h4' color='secondary' >Company Name</Typography>
            <hr></hr>

            <Typography variant='span'>
            Centillion is a recognized development company with an aim to assist businesses with product design, development and support.

            <TextField
            id="input-with-icon-textfield"
            label="Search Site"
            InputProps={{
            startAdornment: (
                <InputAdornment position="start">                   
<Search></Search>
                </InputAdornment>
            ),
            }}
             variant="outlined"
      />

            </Typography>

            </Grid>
            <Grid item lg={4} md={4}  borderRadius={1} borderRight={1} bgcolor='#ccc' p={2}>
            <Typography variant='h4'  >Recent Posts</Typography>
            <hr></hr>

            <Typography variant='span'>Labore minim amet dolore ea irure consequat . </Typography>
            <hr></hr>
            <Typography variant='span'>Labore minim amet dolore ea irure consequat . </Typography>
            <hr></hr>
            <Typography variant='span'>Labore minim amet dolore ea irure consequat . </Typography>
            <hr></hr>
            <Typography variant='span'>Labore minim amet dolore ea irure consequat . </Typography>
            

          
            </Grid>
            <Grid item lg={4} md={4} borderRadius={1} borderRight={1} bgcolor='#ccc'  p={2}>
            <Typography variant='h4'>Contact Information </Typography>
            <hr></hr>
            <Typography variant='div'>
            Australia<br/>

1300 806 778<br/>

sales@centillion.au<br/>

United Arab Emirates<br/>
+971 2 6225999<br/>

sales@centillion-ts.com

            </Typography>
            </Grid>
        </Grid>
        
        </>
    )
}


export default Footer;