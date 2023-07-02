import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
function App() {
  return (
    <div className="App">
      <Navbar image= {logo} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='service' element={<Service/>}/>
      </Routes>
      
      
      
    </div>
  );
}

export default App;
