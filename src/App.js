import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/home/Home";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ContactUS from "./container/contactUs/ContactUs";
import Post from "./container/post/Post";
import AboutUS from "./container/aboutUs/AboutUs";
import BlogPost from "./components/blogPost/BlogPost";
import Add from "./components/addBlog/Add";
import { Error } from "./components/pages/Error";

function App(props) {
  const [loading, setLoading] = useState(true);

  // sorting the blogs from latest to the old one!
  props.blogs.sort((x, y) => y.id - x.id);

  useEffect(() => {
    props.startLoadingBlogs().then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Routes>
          <Route exact path="/" element={<Home blogs={props.blogs} />} />
          <Route
            exact
            path="/contact-us/"
            element={<ContactUS blogs={props.blogs} />}
          />
          <Route
            exact
            path="/post"
            element={<Post blogs={props.blogs} loading={loading} />}
          />
          <Route
            exact
            path="/post/:slug"
            element={
              <BlogPost blogs={props.blogs} loading={loading} {...props} />
            }
          />

          <Route exact path="/about-us" element={<AboutUS />} />
          <Route exact path="/add" element={<Add {...props} />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
