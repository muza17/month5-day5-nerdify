import { useState } from 'react';
import Header from './components/Header/header';
import Intro from './components/Intro/intro';
import './App.css';

function App() {
  
  return (
    <>
      <Header/>
      <main>
        <Intro/>
      </main>
      <footer><h2>Footer</h2></footer>
    </>
      
  );
}

export default App;
