import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../ui";
import { Link } from "react-router-dom";
import "./Carousel.css";

function Carousal() {
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showThumbs={false}
      showStatus="false"
    >
      <Card style={{ marginBottom: "20px", paddingBottom: "20px" }}>
        <div className="postImageWrapper1">
          <img src="/blogPostImages/1.png" alt="" />
        </div>

        <div className="mt-3" style={{ textAlign: "center" }}>
          <span>Simple</span>
          <h2 className="mt-4">Beauti lies within special</h2>
          <span>posted on Apr 02, 2017 by Hasina Shaikh</span>
          <p className="m-4">
            Blessed you're lights. There. Behold may yielding meat can't void
            rule, earth green have creepeth land let gathering great fruitful
            under gathered waters...
          </p>

          <Link
            to="/post/beauti-lies-within-special"
            className="btn btn-dark mt-3"
          >
            Read More
          </Link>
        </div>
      </Card>

      <Card style={{ marginBottom: "20px", paddingBottom: "20px" }}>
        <div className="postImageWrapper1">
          <img src="/blogPostImages/2.png" alt="" />
        </div>

        <div className="mt-3" style={{ textAlign: "center" }}>
          <span>Featured</span>
          <h2 className="mt-4">Sliding My Way To Life</h2>
          <span>posted on Jan 02, 2019 by Rizwan Khan</span>
          <p className="m-4">
            Arrived compass prepare an on as. Reasonable particular on my it in
            sympathize. Size now easy eat hand how. Unwilling he departure
            elsewhere dejection at..
          </p>

          <Link to="/post/sliding-my-way-to-life" className="btn btn-dark mt-3">
            Read More
          </Link>
        </div>
      </Card>

      <Card style={{ marginBottom: "20px", padding: "20px" }}>
        <div className="postImageWrapper1">
          <img src="/blogPostImages/3.png" alt="" />
        </div>

        <div className="mt-3" style={{ textAlign: "center" }}>
          <span>Simple</span>
          <h2 className="mt-4">Beautiful & Special Moment</h2>
          <span>posted on May 03, 2016 by Rizwan Khan</span>
          <p className="m-4">
            Extremity direction existence as Dashwood's do up. Securing Marianne
            led welcomed offended but offering six raptures. Conveying concluded
            newspaper rapturous oh at...
          </p>

          <Link
            to="/post/beautiful-and-special-moment"
            className="btn btn-dark mt-3"
          >
            Read More
          </Link>
        </div>
      </Card>
      <Card style={{ marginBottom: "20px", padding: "20px" }}>
        <div className="postImageWrapper1">
          <img src="/blogPostImages/4.png" alt="" />
        </div>

        <div className="mt-3" style={{ textAlign: "center" }}>
          <span>Fashion</span>
          <h2 className="mt-4">Memories From Last Summer</h2>
          <span>posted on Feb 21, 2018 by Buland Khan</span>
          <p className="m-4">
            Purus Convallis nascetur diam torquent sit id adipiscing in netus
            praesent etiam enim nec massa fusce orci nam potenti hac tortor
            montes placerat tortor natoque ante volutpat Class class platea
            hymenaeos...
          </p>

          <Link
            to="/post/memories-from-last-summer"
            className="btn btn-dark mt-3"
          >
            Read More
          </Link>
        </div>
      </Card>
    </Carousel>
  );
}

export default Carousal;
