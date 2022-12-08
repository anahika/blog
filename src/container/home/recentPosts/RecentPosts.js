import React from "react";
import "./RecentPosts.css";
import Card from "../../../components/ui";
import { Link } from "react-router-dom";

const RecentPosts = (props) => {
  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px", paddingBottom: "20px" }}>
        <div className="postImageWrapper">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/blog-e5e5f.appspot.com/o/ronaldo.jpg?alt=media&token=af85daeb-bab5-420a-a061-d5c7fcce8bfe"
            alt=""
          />
        </div>

        <div className="mt-3" style={{ textAlign: "center" }}>
          <span>Sports Update</span>
          <h2 className="mt-4">
            Cristiano Ronaldo completes stunning Manchester United return
          </h2>
          <span>posted on September 09,2021 by Saksham Hadokar</span>
          <p className="m-4">
            Manchester United is a club that has always had a special place in
            my heart, and I have been overwhelmed by all the messages I have
            received since the announcement on Friday. I cannot wait to play at
            Old Trafford in front of a full stadium and see all the fans
            again...
          </p>

          <Link
            to="/post/Cristiano-Ronaldo-completes-stunning-Manchester-United-return"
            className="btn btn-dark mt-3"
          >
            Read More
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
