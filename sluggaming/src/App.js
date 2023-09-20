import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoPage from './pages/NoPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Staff from './pages/Staff';
import Contact from './pages/Contact'
import Recruitment from './pages/Recruitment'
import Teams from './pages/Teams';
import Achievements from './pages/Achievements';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff' element={<Staff />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/recruitment' element={<Recruitment />} />
          <Route path='/achievements' element={<Achievements />} />
          <Route path='/teams' element={<Teams />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
