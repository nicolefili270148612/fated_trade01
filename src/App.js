// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import Header from './components/Header';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/About';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<Navigation />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
