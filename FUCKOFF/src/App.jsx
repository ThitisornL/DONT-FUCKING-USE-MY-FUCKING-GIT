import React from 'react';
import { Routes, Route, Link } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Vanguard from './Vanguard';
import NotFound from './pages/NotFound';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Vanguard">VG</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vanguard" element={<Vanguard />} />
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};

export default App;