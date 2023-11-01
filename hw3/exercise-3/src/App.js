import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Search from './components/Search';
import Houses from './components/Houses';
 

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/search" Component={Search}></Route>
        <Route path="/houses" Component={Houses}></Route>
      </Routes>

    </div>
  );
}

export default App;
