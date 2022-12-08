import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import "./Post.css";
import { Loading } from "../../components/pages/Loading";
import { Error } from "../../components/pages/Error";

const Post = (props) => {
  const posts = props.blogs;
  if (props.loading === true) return <Loading />;
  else if (posts) {
    return (
      <Layout blogs={props.blogs}>
        {posts.map((post, index) => {
          return (
            <Link
              key={index}
              to={`/post/${post.slug}`}
              className="custom-card d-flex"
            >
              <div className="card cardcss p-4 ">
                <h5 className="card-title">{post.blogTitle}</h5>
                <p className="card-text">
                  {post.blogText.substring(0, 200)}...
                </p>
              </div>
            </Link>
          );
        })}
      </Layout>
    );
  } else return <Error />;
};

export default Post;
