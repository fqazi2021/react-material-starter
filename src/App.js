import React from 'react';
import './App.css';
// import Typingmaterial from './components/typing-material/Typingmaterial';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/material';
import {
  BrowserRouter as Router,  
  Route,  
  Routes
} from "react-router-dom";

import Home from './components/pages/home';
import OurServices from './components/pages/OurServices';
import ContactUs from './components/pages/ContactUs';
import Notfound from './components/pages/Notfound';
// import BoxMaterial from './components/box-material/Boxmaterial';
function App() {
  return (
    <div className="App">
     <Container>      
     
      <Navbar></Navbar> 
    <br/><br/>

<Router>
       <Routes>
          <Route exact path="/" element={<Home/>} />            
          
          <Route path="/services" element={<OurServices/>}/>            
          
          <Route path="/contactus" element={<ContactUs/>}/>          
         
         
        </Routes>  
        </Router>   
      
     </Container>
     
  
    </div>
  );
}

export default App;
