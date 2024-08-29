// src/App.js
import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Lógica de autenticação pode ser adicionada aqui
    // Se a autenticação for bem-sucedida:
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>AVIATION BLOG</h1>
      </header>
      <body className="App-body">
        <h2>Blog Aviação</h2>
      </body>
      <footer className="App-footer">
        <p>Blog de Aviação Agosto de 2025</p>
      </footer>
    </div>
  );
}

export default App;
