import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
