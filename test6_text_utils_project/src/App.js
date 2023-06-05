import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <div>
      <Navbar title="Text Utils Namra" aboutText="About Text Utils" />
      <div className='container my-3'>
      <TextForm heading='Enter Text To Analyze' />
      <About/>
      </div>
    </div>

  );
}

export default App;
