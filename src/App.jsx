import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Nest from "./components/Nest";
import Docs from "./components/Docs";
import Git from "./components/docs/Git";
import NotFound from "./components/NotFound"
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
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/nest" element={<Nest />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/docs/git" element={<Git />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
