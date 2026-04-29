import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Simple one-line components for each page
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

export default function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link>
      </nav>

      {/* Route Switcher */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}