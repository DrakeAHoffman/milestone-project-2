import axios from "axios";
import ProductList from "./components/ProductList";
import Show from "./components/Ratings";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>BOOM</h2>
        <h1>Andrew has Arrived!!!!! Rawr!!!!! Evan's Here Yo!</h1>
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
