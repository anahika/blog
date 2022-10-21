import React from "react";
import "./Footer.css";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container containerFooter">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-4 col-xs-12 d-flex justify-content-center">
            <div className="column">
              <h4>Work</h4>
              <p>Are you working on something great?</p>
              <p>We'd love to help make it happen.</p>
              <p>Ok that's enough.</p>
              <p>Please have a look at my work.</p>
            </div>
          </div>

          <div className="col-md-4 col-xs-12 d-flex justify-content-center">
            <div className="column">
              <h4> Navigate</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/post">Posts</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-xs-12 d-flex justify-content-center">
            <div className="column">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <i className="far fa-envelope"></i>{" "}
                  <a href="mailto:hadokar10@gmail.com">hadokar10@gmail.com</a>
                </li>

                <li>
                  <i className="fas fa-map-marker-alt"></i> Palampur, India{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container containerFooter">
        <div className="row">
          <div className="col-12">
            <div className="line"></div>
            <div className="second2">
              <a href="/" target="_blank" className="social">
                <FontAwesomeIcon
                  className="icon-class"
                  icon={faYoutube}
                  size="2x"
                />
              </a>
              <a href="/" className="social " target="_blank">
                <FontAwesomeIcon
                  className="icon-class"
                  icon={faFacebook}
                  size="2x"
                />
              </a>
              <a href="/" className="social" target="_blank">
                <FontAwesomeIcon
                  className="icon-class"
                  icon={faTwitter}
                  size="2x"
                />
              </a>
              <a
                href="https://instagram.com/thymistyroom?igshid=YmMyMTA2M2Y="
                className="social"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="icon-class"
                  icon={faInstagram}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
