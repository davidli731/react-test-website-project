import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// components
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" exact />
                    </Routes>
                </Router>
            </>
        </div>
    );
}

export default App;
