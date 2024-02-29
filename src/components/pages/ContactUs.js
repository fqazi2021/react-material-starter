import { TextField,Grid,Paper } from '@mui/material';
import { useForm } from "react-hook-form";

import React from 'react';

function ContactUs(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm({
        defaultValues: {
            Fullname: "",
            Email: "",
            CRNumber:""
        }
      });

      console.log(watch("example"));


    return(
       <div>
      
      <h1> Contact Us Page!</h1>
      <form  onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}>
        <Grid container spacing={1} padding={4} component={Paper} boxShadow={20}>
           
            <Grid item Lg={3} md={6} sm={1}>
<TextField type="text" {...register("Fullname",{required:true})} id="txtname" label="Fullname" placeholder='Fullname' size='sm' variant='standard' ></TextField>
<p className="error">{errors.Fullname && <p>This field is required</p>}</p>
            </Grid>
            <Grid item Lg={3} md={6} sm={1}>
<TextField type="text" {...register("Email",{required:true})} id="txtEmail" label="Email" placeholder='Email' size='sm' variant='standard'></TextField>
<p className="error">{errors.Email && <p>This field is required</p>}</p>
            </Grid> 

            <Grid item Lg={3} md={3} sm={1}>
<TextField id="txtcrnumber" label="CRNumber" placeholder='CRNumber' size='sm' variant='standard' type="number" {...register("CRNumber",{required:true})}></TextField>
<p className="error">{errors.CRNumber && <p>This field is required</p>}</p>
            </Grid>
<Grid item Lg={1} sm={1}>
    <button type="submit">Submit</button>
</Grid>
          
           

        </Grid>
        </form>
        </div>
    )
}
export default ContactUs;