import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Cart from './pages/cart';
import Aboutme from './pages/aboutme';
import Camera from './pages/camera.tsx';
import Stuff from './pages/Stuff';
import './App.css';

function App() {
  const initialState = () => {
    const storedState = localStorage.getItem('thechosen2appState');
    return storedState ? JSON.parse(storedState) : {
      cartinput: "",
      checkedout: false,
      stuffvisible: true,
      spanstuff: false,
      spanvisible: true,
      stuffcount: 0,
    };
  };

  const [state, setState] = useState(initialState);

  const { cartinput, checkedout, stuffvisible, spanstuff, spanvisible, stuffcount } = state;

  useEffect(() => {
    localStorage.setItem('thechosen2appState', JSON.stringify(state));
  }, [state]);
  const setcartinput = (value) => setState(prevState => ({ ...prevState, cartinput: value }));
  const setcheckedout = (value) => setState(prevState => ({ ...prevState, checkedout: value }));
  const setstuffvisible = (value) => setState(prevState => ({ ...prevState, stuffvisible: value }));
  const setspanstuff = (value) => setState(prevState => ({ ...prevState, spanstuff: value }));
  const setspanvisible = (value) => setState(prevState => ({ ...prevState, spanvisible: value }));
  const setstuffcount = (value) => setState(prevState => ({ ...prevState, stuffcount: value }));

  return (
    <div className="App">
      <Navbar checkedout={checkedout} stuffvisible={stuffvisible} />
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/me" element={<Aboutme />} />
          <Route path="/camera" element={<Camera />} />
          {!checkedout && (
            <Route
              path="/cart"
              element={
                <Cart
                  cartinput={cartinput}
                  setcartinput={setcartinput}
                  stuffcount={stuffcount}
                  setstuffcount={setstuffcount}
                  setcheckedout={setcheckedout}
                  setstuffvisible={setstuffvisible}
                  spanstuff={spanstuff}
                  setspanstuff={setspanstuff}
                  spanvisible={spanvisible}
                  setspanvisible={setspanvisible}
                />
              }
            />
          )}
          {stuffvisible && <Route path="/stuff" element={<Stuff />} />}
        </Routes>
      </div>
    </div>
  );
}

export default App;
