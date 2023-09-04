import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import SlideShow, { Home } from "./components/Home"

function App() {
  return (
    <div className="App">      
      <Navbar />
      <SlideShow />
    </div>
  );
}

export default App;
