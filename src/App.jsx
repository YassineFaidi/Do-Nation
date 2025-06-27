import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Acceuil from './Components/Pages/Acceuil';
import Evenements from './Components/Pages/Evenements';
import Apropos from './Components/Pages/Apropos';
import PlusSurEvent from './Components/Pages/PlusSurEvent';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />}></Route>
          <Route path="/evenements" element={<Evenements />}></Route>
          <Route path="/a-propos" element={<Apropos />}></Route>
          <Route path="/evenements/evntdesc" element={<PlusSurEvent />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
