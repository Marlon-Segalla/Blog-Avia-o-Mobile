// src/App.js
import React, { useState } from 'react';
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
    <div className="Box-app">
      <header className="App-header">
        <h1>AVIATION BLOG</h1>
      </header>
      <body className="App-body">
        <h2>Blog Aviação</h2>
      </body>
      <footer className="App-footer">
        <p>Blog de Aviação Agosto de 2077</p>
      </footer>
    </div>
  );
}

export default App;
