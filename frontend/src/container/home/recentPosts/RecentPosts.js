import React, { useEffect, useState } from "react";
import "./RecentPosts.css";
import Card from "../../../components/ui";
import { Link } from "react-router-dom";
import { fetchBlogContents } from "../../../utils/fetchBlogContent";
import {
  renderContent,
  limitRenderedContent,
} from "../../../utils/renderContent";

const RecentPosts = (props) => {
  const [content, setContent] = useState([]);
  const blog = props.blogs[0] || null;

  useEffect(() => {
    const loadBlogContents = async () => {
      const contents = await fetchBlogContents([blog]);
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
  }, [blog]);

  return (
    <div style={props.style}>
      <Card style={{ marginBottom: "20px", paddingBottom: "20px" }}>
        <div className="postImageWrapper">
          <img src={blog.blogImage} alt="blogImage" />
        </div>

        <div className="mt-3" style={{ textAlign: "center" }}>
          <span>{blog.blogCategory}</span>
          <h2 className="mt-4">{blog.blogTitle}</h2>
          <span>
            posted on {blog.postedOn} by {blog.author}
          </span>
          <div className="m-4">
            {content[blog.id]
              ? limitRenderedContent(content[blog.id], 200)
              : "Loading..."}
          </div>

          <Link to={`/post/${blog.slug}`} className="btn btn-dark mt-3">
            Read More
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RecentPosts;
