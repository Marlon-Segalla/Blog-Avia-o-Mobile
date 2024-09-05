import React from 'react';
import './App.css';

function Body() {
  return (
    <main class="App-body">
        <section class="Main-Post">
            <div class="post-main glass"></div>
        </section>
        <section class="left-container">
            <div class="card glass" id="card_1" tabIndex="0"></div>
            <div class="card glass" id="card_2" tabIndex="0"></div>
            <div class="card glass" id="card_3" tabIndex="0"></div>
            <div class="card glass" id="card_4" tabIndex="0"></div>
        </section>
        <section class="right-container">
            <section class="right-container-top">
                <div class="post glass" id="post_1" tabIndex="0"></div>
                <div class="post glass" id="post_2" tabIndex="0"></div>
            </section>
            <section class="right-container-bottom">
                <div class="post glass" id="post_3" tabIndex="0"></div>
                <div class="post glass" id="post_4" tabIndex="0"></div>
            </section>
        </section>
    </main>
  );
}

export default Body;