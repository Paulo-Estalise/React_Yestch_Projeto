import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <nav>
      <div className="brand">Yestch</div> {}
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export { NavBar };
