import React from 'react';
import './App.css';
import BoxMaterial from './components/box-material/Boxmaterial';
import Typingmaterial from './components/typing-material/Typingmaterial';
import { Container, Switch } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';

import Home from './components/pages/home';
import ContactUs from './components/pages/ContactUs';

function App() {
  return (
    <Container >
      <Navbar></Navbar>
      <header className="App-header">
        <h2>Lets explore react!</h2>
      
      <Typingmaterial name="Farrukh Ali Qazi!"></Typingmaterial>
      <BoxMaterial ></BoxMaterial>
    
      </header>
      <Switch>
        <Route exact path="/" Component={Home}></Route>
        <Route exact path="/contact-us" Component={ContactUs}></Route>
      </Switch>
      </Container>
  );
}

export default App;
