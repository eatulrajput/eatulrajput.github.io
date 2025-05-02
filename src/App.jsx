import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import MySpace from "./components/MySpace";
import GTagRouteTracker from './components/GTagRouteTracker';

function App() {
    return (

        <Router>
            <GTagRouteTracker />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/my-space" element={<MySpace />} />
            </Routes>
        </Router>
    );
}

export default App;
