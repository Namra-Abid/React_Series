import logo from './logo.svg';
import './App.css';
import  JSXElement from './components/test'
import Double_JSX_Element from './components/test2'
import JSX_three_params from './components/test3'
import Hello_World_JSX from './components/test4'

function App() {
  return (
    <div className="App">
      <JSXElement />
      <Double_JSX_Element/>
      <JSX_three_params />
      <Hello_World_JSX/>
    </div>
  );
}

export default App;
