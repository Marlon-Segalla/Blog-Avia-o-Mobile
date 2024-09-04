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
          <div className="login-box glass2">
            <div className="text-box">
              <span>WELCOME</span>
            </div>
            <div className="user-box">
              <input
                type="text"
                id="username"
                placeholder="USER"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="password-box">
              <input
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-box">
            <button type="submit">ENTER</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;