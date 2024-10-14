import React from "react";
import "./Sidebar.css";
import Card from "../ui";
import { Link } from "react-router-dom";
import pic from "../../assets/saksham.jpg";

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = (props) => {
  const posts = props.blogs;

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
              to="https://firebasestorage.googleapis.com/v0/b/blog-e5e5f.appspot.com/o/resume.pdf?alt=media&token=b19ee55c-fb54-4da2-ba83-efb92cf599d8"
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
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="/"
              className="facebook social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="/"
              className="twitter social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://www.instagram.com/thymistyroom/?igshid=YmMyMTA2M2Y%3D"
              className="instagram social"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      >
        <Link to="/add" className="btn btn-secondary">
          Add Blog
        </Link>
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
          {posts.slice(0, 5).map((post, index) => {
            return (
              <Link
                key={index}
                to={`/post/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
