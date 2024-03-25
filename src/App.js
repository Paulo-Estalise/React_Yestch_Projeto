import logo from './logo.svg';
import './App.css';

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
import React from 'react';
import './App.css';

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Yestch</h1>
        <p>Seu slogan ou descrição aqui...</p>
      </header>
    </div>
  );
}

export {App};
import React from 'react';
import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Adicione o restante do conteúdo do seu aplicativo aqui */}
    </div>
  );
}

export {App};

import NavBar from './components/NavBar.js';
import NavBar from './components/NavBar.css';


import React from 'react';
import ItemListContainer from './ItemListContainer';

const MinhaPagina = () => {
  return (
    <div>
      <h1>Minha Página</h1>
      <ItemListContainer greeting="Olá, seja bem-vindo!" />
    </div>
  );
};

export {MinhaPagina};
