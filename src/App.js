import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components /Header';
import Home from './components /Home';
import About from './components /About';
import Visitors from './Sidebar_Material/Visitors';

// import Messages from './components/Messages';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Header />
        <div className="flex-grow m-3 text-xl text-gray-900 font-semibold">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/visitor" element={<Visitors />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
