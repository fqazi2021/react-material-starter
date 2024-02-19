import React from 'react';
import './App.css';
import BoxMaterial from './components/box-material/Boxmaterial';
import Typingmaterial from './components/typing-material/Typingmaterial';
import { Container } from '@mui/material';
function App() {
  return (
    <Container variant="Section">
      <header className="App-header">
        <h2>Lets explore react!</h2>
      
      <Typingmaterial name="Farrukh Ali Qazi!"></Typingmaterial>
      <BoxMaterial ></BoxMaterial>
      </header>
      </Container>
  );
}

export default App;
