import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './container/home'
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />

      {/* <Route path="/" exact component={Home} />
      <Route path="/contact-us"  component={ContactUS}/>
      <Route path="/post/:slug" component={Post} /> */}

      
    </div>
  </Router>
  );
}

export default App;
