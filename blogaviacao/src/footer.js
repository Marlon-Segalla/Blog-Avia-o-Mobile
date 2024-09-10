import React from 'react';
import './App.css';

function Footer() {
  return (
    <footer className="App-footer">
      <div className="icon-bar">
        <a href="/Home" class="home-button"   ><img src="/img-icons/home.png"  alt="Home"/></a>
        <a href="/Home" class="search-button" ><img src="/img-icons/w_search.png"alt="Search"/></a>
        <a href="/Home" class="add-button"    ><img src="/img-icons/w_add.png"   alt="Add"/></a>
        <a href="/Home" class="reels-button"  ><img src="/img-icons/reels.png" alt="Reels"/></a>
        <a href="/Home" class="profile-button"><img src="/img-icons/w_user.png"  alt="Profile"/></a>
      </div>
    </footer>
  );
}

export default Footer;