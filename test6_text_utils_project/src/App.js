import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React, {useState} from 'react'


function App() {
  
  const [mode,setMode]=useState('light');
  const togglemode =()=>{
    if (mode=='light')
    {
      //mode='dark'  // wrong way
      setMode('dark')  //right wat
      console.log('clicked dark')
     
    }
    else{
    //  mode='light' //wrong way
    setMode('light')//right way
    console.log('clicked light')
    
    }
  }

  return (
    <div>
      <Navbar title="Text Utils Namra" aboutText="About Text Utils" mode={mode} togglemodefunc={togglemode}  />
      <div className='container my-3'>
      <TextForm heading='Enter Text To Analyze' />
      <About/>
      </div>
    </div>

  );
}

export default App;
