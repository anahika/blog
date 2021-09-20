import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './container/home'
import Header from './components/header';
import Hero from './components/hero';
import ContactUS from './container/ContactUS';
import Post from './container/Post';
import AboutUS from './container/AboutUS'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero /> 

       <Route path="/" exact component={Home} />
       <Route path="/contact-us"  component={ContactUS}/>
       <Route path="/post/:slug" component={Post} /> 
       <Route path="/about-us" component={AboutUS} /> 
      
    </div>
  </Router>
  );
}

export default App;
