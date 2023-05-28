import logo from './logo.svg';
import './App.css';
import TestProps from './components/test1_props'
import Greet from './components/test2_props'
import Welcome from './components/test2_classbasedcomponent'
function App() {
  return (
    <div className="App">
         <TestProps sequence="One" number="1" />
         <p>This paragrpah tag is considered as children of props </p>
         <TestProps sequence="Two" number="2"/>
         <button> Action </button>
         <TestProps sequence="Three" number="2"/> 
         <Greet name="Namra" profession="The Boss Lady Coder"> <p> Hello, This is not a self closing tag </p> </Greet>
         <Greet name="Sana" profession="The Phramacist"/> 
         <Greet name="Rehana" profession="The Fashionista"/> 
         <Welcome  name="Bella" profession="The Artist"/>
    </div>
  );
}

export default App;
