import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import './components/NavBar.css';
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function NavBar() {
  return (
    <div className="navbar">
      {/* Conteúdo do NavBar */}
    </div>
  );
}

export { NavBar };

function MinhaPagina() {
  return (
    <div>
      <h1>Minha Página</h1>
      <ItemListContainer greeting="Olá, seja bem-vindo!" />
    </div>
  );
}

export { App };

import NavBar from './components/NavBar.js';
import './components/NavBar.css';
import ItemListContainer from './ItemListContainer'; 

const MinhaPagina = () => {
  return (
    <div>
      <h1>Minha Página</h1>
      <ItemListContainer greeting="Olá, seja bem-vindo!" />
    </div>
  );
};

export { MinhaPagina };

