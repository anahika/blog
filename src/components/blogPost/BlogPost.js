import React from "react";
import "./BlogPost.css";
import Card from "../ui";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { Error } from "../pages/Error";
import { Loading } from "../pages/Loading";

const BlogPost = (props) => {
  const params = useParams();
  const slug = params.slug;

  const post = props.blogs.find((post) => post.slug === slug);

  if (props.loading === true) return <Loading />;
  else if (post) {
    return (
      <Layout blogs={props.blogs}>
        <Card>
          <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">
              posted on {post.postedOn} by {post.author}
            </span>
          </div>

          <div className="postImageContainer">
            <img src={post.blogImage} alt="Post" />
          </div>

          <div className="postContent">
            <h3>{post.blogTitle}</h3>
            <p>{post.blogText}</p>
          </div>
        </Card>
      </Layout>
    );
  } else return <Error />;
};

export default BlogPost;
