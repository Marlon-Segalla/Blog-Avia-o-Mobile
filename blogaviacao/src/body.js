import React from 'react';
import './body.css';

function Body() {
  return (
    <main className="App-body">
        <section className="one">
          <section className="first-container">
            <div className="card glass" id="card_1" tabIndex="0"></div>
            <div className="card glass" id="card_2" tabIndex="0"></div>
            <div className="card glass" id="card_3" tabIndex="0"></div>
            <div className="card glass" id="card_4" tabIndex="0"></div>
          </section>
        </section>

        <section className="two">
          <section className="second-container">
              <div className="main-post glass" tabIndex="0"></div>
              <div className="second-post">
                <div className="post glass" tabIndex="0"></div>
                <div className="post glass" tabIndex="0"></div>
              </div>
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