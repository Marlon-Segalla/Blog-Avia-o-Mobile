import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação pode ser adicionada aqui
    onLogin(username, password);
  };

  return (
    <div className="App">
      <div className="login-container glass">
        <header className="Login-header">
        </header>
        <h2>AVIATION BLOG</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">USER:</label>
            <input
              type="text"
              id="username"
              placeholder="ex: luis.sodre"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
