import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './container/home'
import Header from './components/header';
import Hero from './components/hero';
import ContactUS from './container/ContactUS';
import Post from './container/Post';
import AboutUS from './container/AboutUS'
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Hero /> 

       <Route exact path="/" exact component={Home} />
       <Route exact path="/contact-us/"  component={ContactUS}/>
       <Route exact path="/post" component={Post} /> 
       <Route exact path="/post/:id" component={BlogPost} /> 
       <Route exact path="/about-us" component={AboutUS} /> 
      
    </div>
  </Router>
  );
}

export default App;
