
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Discover from './Pages/Discover';
import Map from './Pages/Map';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element = {<Home />} />
            
            <Route path='/discover' element = {<Discover />} />

            <Route path='/map' element = {<Map/>} />

            
             
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
