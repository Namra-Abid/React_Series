import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react'


function App() {
  
  const [mode,setMode]=useState('light');
  const togglemode =()=>{
    if (mode=='light')
    {
      //mode='dark'  // wrong way
      setMode('dark')  //right way
      document.body.style.backgroundColor='grey';
      console.log('clicked dark')
      ShowAlert('Dark mode enable','success')
      setTimeout(()=>{
        setAlert(null)
      }, 3000) ;
     
    }
    else{
    //  mode='light' //wrong way
    setMode('light')//right way
    console.log('clicked light')
    document.body.style.backgroundColor='white';
    ShowAlert('Light mode enable','success');
    setTimeout(()=>{
      setAlert(null)
    }, 3000)  ;
    
    }
  }
  /////////////////////////////////////////////
  const[ alert , setAlert]=useState(null);
  const ShowAlert=(message,type)=>{
    setAlert({
      msg:message,
      typ:type
    })
  }
   

  return (
    <div>
      <Navbar title="Text Utils Namra" aboutText="About Text Utils" mode={mode} togglemodefunc={togglemode}  />
      <Alert alert={alert}/>
      <div className='container my-3'>
      <TextForm heading='Enter Text To Analyze' mode={mode}/>
      <About/>
      </div>
    </div>

  );
}

export default App;
