import logo from './logo.svg';
import './App.css';
import {Route, Routes, Router} from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/navbar';
import Home from './pages/home';
import Cart from './pages/cart';
import Aboutme from './pages/aboutme';
import Camera from './pages/camera.tsx';
import Stuff from './pages/Stuff';

function App() {
  const [cartinput, setcartinput] = useState("");
  const [stuffcount, setstuffcount] = useState(0);
  return (
    <div className="App">
      <Navbar/>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/me" element={<Aboutme />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/cart" element={<Cart cartinput={cartinput} setcartinput={setcartinput} stuffcount={stuffcount} setstuffcount={setstuffcount}/>} />
          <Route path="/stuff" element={<Stuff />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
