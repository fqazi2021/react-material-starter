import React from 'react';
import './App.css';
import Typingmaterial from './components/typing-material/Typingmaterial';
import Navbar from './components/Navbar/Navbar';
import { Container } from '@mui/material';
function App() {
  return (
    <div className="App">
     <Container>
      
      <Navbar></Navbar>
      <Typingmaterial></Typingmaterial>
     </Container>
    </div>
  );
}

export default App;
