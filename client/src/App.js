import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import 'Routes' instead of 'Switch'
import Home from "./components/home";
import MacBookPage from "./components/MacBookPage";
import ShoppingCart from "./components/ShoppingCart";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {" "}
                    {/* Use 'Routes' instead of 'Switch' */}
                    <Route path="/" element={<Home />} />
                    <Route path="/macbooks" element={<MacBookPage />} />
                    <Route path="/cart" element={<ShoppingCart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
