

import React from 'react';
import './NavBar.css'; // Importe o arquivo CSS 

const NavBar = () => {
  return (
    <nav>
      <div className="brand">Yestch</div> {/* Adicione a div com a classe "brand" */}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;



import React from 'react';
import CartWidget from './cartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Products</a>
            </li>
            {/* Outros itens do menu */}
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export  {Navbar};
