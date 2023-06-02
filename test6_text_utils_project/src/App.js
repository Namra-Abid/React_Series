import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <div>
      <Navbar title="Text Utils Namra" aboutText="About Text Utils" />
      <div className='container my-3'>
      <TextForm heading='Enter Text To Analyze' />
      </div>
    </div>

  );
}

export default App;
