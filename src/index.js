import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Residents from './Sidebar_Material/Residents';
import Visitors from './Sidebar_Material/Visitors';
import Home from './components /Home';
import About from './components /About';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App />
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/about' element={<About />}/>
      <Route path='/residents' element={<Residents />}/>
      <Route path='/visitor' element={<Visitors />}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
