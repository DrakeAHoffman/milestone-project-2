import axios from "axios";
import Ratings from './components/Ratings'
import Rating from "./components/Rating";

import logo from './logo.svg';
import './App.css';
import { Component } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>BOOM</h2>
        <h1>Andrew has Arrived!!!!! Rawr!!!!! Evan's Here Yo!</h1>
        <Rating stars="1"/>
        <Rating stars="2"/>
        <Rating stars="3"/>
        <Rating stars="4"/>
        <Rating stars="5"/>
        <Rating stars="0"/>
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
        <p>Drake</p>
        <p>HAHHAHAHAHA</p>
        <p>Was doing everything on a forked clone...</p>
      </header>
    </div>
  );
}

export default App;
