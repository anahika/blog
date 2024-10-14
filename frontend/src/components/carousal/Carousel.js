import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Card from "../ui";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { fetchBlogContents } from "../../utils/fetchBlogContent";
import { renderContent, limitRenderedContent } from "../../utils/renderContent";

function Carousal(props) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const loadBlogContents = async () => {
      const contents = await fetchBlogContents(props.blogs);
      if (contents) {
        // Format the raw content
        const formattedMap = Object.keys(contents).reduce((acc, id) => {
          acc[id] = renderContent(contents[id]);
          return acc;
        }, {});

        setContent(formattedMap);
      }
    };

    loadBlogContents();
  }, [props.blogs]);
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showThumbs={false}
      showStatus={false}
    >
      {props.blogs.slice(0, 5).map((post) => {
        return (
          <Card
            key={post.id}
            style={{ marginBottom: "20px", paddingBottom: "20px" }}
          >
            <div className="postImageWrapper1">
              <img
                src={process.env.PUBLIC_URL + post.blogImage}
                alt="BlogImage"
              />
            </div>

            <div className="mt-3" style={{ textAlign: "center" }}>
              <span>{post.blogCategory}</span>
              <h2 className="mt-4">{post.blogTitle}</h2>
              <span>
                posted on {post.postedOn} by {post.author}
              </span>
              <div className="m-4">
                {content[post.id]
                  ? limitRenderedContent(content[post.id], 200)
                  : "Loading..."}
              </div>

              <Link to={`/post/${post.slug}`} className="btn btn-dark mt-3">
                Read More
              </Link>
            </div>
          </Card>
        );
      })}
    </Carousel>
  );
}

export default Carousal;
