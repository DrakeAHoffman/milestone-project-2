import axios from "axios";
import ProductList from './components/ProductList';

//import Ratings from './components/Ratings'
import Rating from './components/Rating'

import logo from './logo.svg';
import './App.css';
//import { Component } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <ProductList/>
        <Rating stars="1"/>
        <Rating stars="2"/>
        <Rating stars="3"/>
        <Rating stars="4"/>
        <Rating stars="5"/>
        <Rating stars="0"/>
  
      </header>
    </div>
  );
}

export default App;
