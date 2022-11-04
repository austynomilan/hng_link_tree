import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import './App.css'
import Contact from './pages/contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
      <Routes>
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
