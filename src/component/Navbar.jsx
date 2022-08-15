import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <header className="container__navbar">
        <a href="/">
          <figure className="logo-navbar">
            <img src="/images/logo.png" alt="logo-samesta" />
            <img src="/images/text-samesta.png" alt="text-samesta" />
          </figure>
        </a>
        <ul className="navbar-menu">
          <li>
            <a href="/profile">PROFIL</a>
          </li>
          <li>
            <a href="/produk">PRODUK</a>
          </li>
          <li>
            <a href="/proyek">PROYEK</a>
          </li>
          <li>
            <a href="/promo">NEWS</a>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
