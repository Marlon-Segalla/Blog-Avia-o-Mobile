import React from 'react';
import './App.css';

function Body() {
  return (
    <main className="App-body">
        <section className="one">
          <section className="left-container">
            <div className="card glass" id="card_1" tabIndex="0"></div>
            <div className="card glass" id="card_2" tabIndex="0"></div>
            <div className="card glass" id="card_3" tabIndex="0"></div>
            <div className="card glass" id="card_4" tabIndex="0"></div>
          </section>
        </section>

        <section className="two">
          <section className="right-container">
            <section className="right-container-top">
              <div className="post glass" id="post_1" tabIndex="0"></div>
              <div className="post glass" id="post_2" tabIndex="0"></div>
            </section>
            <section className="right-container-bottom">
              <div className="post glass" id="post_3" tabIndex="0"></div>
              <div className="post glass" id="post_4" tabIndex="0"></div>
            </section>
          </section>
        </section>

        <section className="three">
          <h1>Third Page</h1>
        </section>

        <section className="four">
          <h1>Web Dev</h1>
        </section>
    </main>
  );
}

export default Body;