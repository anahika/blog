import React, { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import "./Post.css";
import { Loading } from "../../components/pages/Loading";
import { Error } from "../../components/pages/Error";
import { fetchBlogContents } from "../../utils/fetchBlogContent";
import { renderContent, limitRenderedContent } from "../../utils/renderContent";

const Post = (props) => {
  const [content, setContent] = useState("");
  const posts = props.blogs;

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

  if (props.loading === true) return <Loading />;
  else if (posts) {
    return (
      <Layout blogs={props.blogs}>
        {posts.map((post, index) => {
          return (
            <Link
              key={index}
              to={{
                pathname: `/post/${post.slug}`,
                state: { blogs: props.blogs },
              }}
              className="custom-card d-flex"
            >
              <div className="card cardcss p-4 ">
                <h5 className="card-title">{post.blogTitle}</h5>
                <div className="m-4">
                  {content[post.id]
                    ? limitRenderedContent(content[post.id], 200)
                    : "Loading..."}
                </div>
              </div>
            </Link>
          );
        })}
      </Layout>
    );
  } else return <Error />;
};

export default Post;
