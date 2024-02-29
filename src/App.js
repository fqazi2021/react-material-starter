import React from 'react';
import './App.css';
// import Typingmaterial from './components/typing-material/Typingmaterial';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter ,  
  Route,  
  Routes,
  
} from "react-router-dom";

import Home from './components/pages/home';
import OurServices from './components/pages/OurServices';
import ContactUs from './components/pages/ContactUs';
// import Notfound from './components/pages/Notfound';
// import BoxMaterial from './components/box-material/Boxmaterial';
const theme = createTheme({
 palette:{
 primary:{
  main:indigo[500]
 }
}
  
});



function App() {
  
  return (
    <div className="App">
<ThemeProvider theme={theme}>
<Container> 
   
     
<BrowserRouter>
<Navbar color="primary"></Navbar> 
      <Routes>
         <Route exact path="/Home" element={<Home/>} />            
         
         <Route path="/services" element={<OurServices/>}/>            
         
         <Route path="/contact us" element={<ContactUs/>}/>          
        
        
       </Routes>  
</BrowserRouter>   
       
     <Footer></Footer>
    </Container>
    </ThemeProvider>



    
     
  
    </div>
  );
}

export default App;
