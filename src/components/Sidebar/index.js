import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../ui";
import blogPost from "../../data/blog.json";
import { NavLink, Link } from "react-router-dom";
import pic from "../../assets/brother.jpg";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      style={{
        width: props.width,
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>About Me</span>
        </div>
        <div className="profileImageContainer">
          <img src={pic} alt="" />
        </div>
        <div className="cardBody">
          <h3>Saksham Hadokar</h3>
          <p className="personalBio">
            Talented, versatile, and proficient in writing. I may not have any
            professional experience,but every experience needs a start.<br></br>
            <br></br>
            <Link
              to="/blogPostImages/resume.pdf"
              download
              target="_blank"
              className="btn btn-primary"
              style={{ width: "100%" }}
            >
              <i className="fa fa-download"></i> Download Resume
            </Link>
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <div>
            <a href="/" target="_blank" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="/" className="facebook social" target="_blank">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="/" className="twitter social" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/thymistyroom/?igshid=YmMyMTA2M2Y%3D"
              className="instagram social"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map((post) => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
