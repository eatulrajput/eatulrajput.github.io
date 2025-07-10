import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import MySpace from "./components/MySpace";
import NotFound from "./components/NotFound"
import GTagRouteTracker from './components/GTagRouteTracker';
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <LoadingSpinner loading={loading} />;
    }

    return (
        <Router>
            <GTagRouteTracker />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/my-space" element={<MySpace />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
