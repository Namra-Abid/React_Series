import logo from './logo.svg';
import './App.css';
import Functional_component_ from './components/FunctionalComponent'
import GreetNamra from './components/Greet'
import WishNamra from './components/Wish'
import CelebrateNamra from './components/Celebrate'
import { FarewellNamra } from './components/Farewell'

function App() {
  return (
    <div className="App">
      <Functional_component_ />
      <GreetNamra />
      <WishNamra />
      <CelebrateNamra />
      <FarewellNamra />
    </div>
  );
}

export default App;
