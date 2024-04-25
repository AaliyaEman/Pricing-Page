import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Page from './Assets/Page';
import Second from './Assets/Second';
function App() {
  return (
    <div  className=' bg-gray h-screen'>
      <Router>
<div>

  <Routes>
    <Route path="/" element ={<Page/>}
    />
     <Route path="/next" element ={<Second/>}
    />

  </Routes>
</div>

      </Router>
      
      
      <div className='absolute top-0 left-0 w-16 h-28 rounded-br-full rounded-tr-full  bg-lightblue opacity-60'></div>
          <div className='absolute top-0 left-0 w-28 h-16 rounded-br-full rounded-bl-full bg-lightblue opacity-60'></div>


    </div>
  );
}

export default App;
