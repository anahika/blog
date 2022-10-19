import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./container/home/Home";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ContactUS from "./container/contactUs/ContactUs";
import Post from "./container/post/Post";
import AboutUS from "./container/aboutUs/AboutUs";
import BlogPost from "./components/blogPost/BlogPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route exact path="/" component={Home} />
        <Route exact path="/contact-us/" component={ContactUS} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/post/:id" component={BlogPost} />
        <Route exact path="/about-us" component={AboutUS} />
      </div>
    </Router>
  );
}

export default App;
