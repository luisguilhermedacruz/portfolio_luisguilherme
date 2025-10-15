import './App.css';
import './styles/global.css';
import Home from '../src/components/Home';
import Navbar from '../src/components/Navbar';


function App() {
  return (
    <div className="app_container">     
        <Navbar/>
        <Home/>
      </div>
  );
}

export default App;
