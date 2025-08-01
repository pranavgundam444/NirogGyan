import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Doctor from './components/Doctor/Doctor';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors/:id' element={<Doctor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;