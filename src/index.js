import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Navbar, Footer } from './component/base';
import { Home, Proyek, Produk, News } from './pages/base';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Pesonasambinae, Laresort, Karangasri } from './pages/Proyek/base';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/proyek" element={<Proyek />} />
        <Route path="/proyek/laresort" element={<Laresort />} />
        <Route path="/proyek/karangasri" element={<Karangasri />} />
        <Route path="/proyek/pesonasambinae" element={<Pesonasambinae />} />
        <Route path="/promo" element={<News />} />
      </Routes>
    </Router>

    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
