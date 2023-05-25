import logo from './logo.svg';
import './App.css';
import TestProps from './components/test1_props'

function App() {
  return (
    <div className="App">
         <TestProps sequence="One" number="1" />
         <p>This paragrpah tag is considered as children of props </p>
         <TestProps sequence="Two" number="2"/>
         <button> Action </button>
         <TestProps sequence="Three" number="2"/> 
    </div>
  );
}

export default App;
