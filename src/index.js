import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';
import Login from './views/Login';
import Register from './views/Register';
import Dashboard from './views/Dashboard';
import MonoLink from './views/MonoConnect';


import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="link-account" element={<MonoLink />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
