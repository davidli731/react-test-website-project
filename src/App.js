import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function Paths() {
    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <Navbar />
                    <Paths />
                </Router>
            </>
        </div>
    );
}

export default App;
