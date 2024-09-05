import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Header from './header';
import Body from './body';
import Footer from './footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="Box-app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;