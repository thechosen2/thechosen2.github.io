import logo from './logo.svg';
import './App.css';
import {Route, Routes, Router} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Aboutme from './pages/aboutme';
import Camera from './pages/camera';
import Blogs from './pages/blogs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="body-container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/me" element={<Aboutme />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
