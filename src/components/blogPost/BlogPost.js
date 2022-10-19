import React, { useState, useEffect } from "react";
import "./BlogPost.css";
import Card from "../ui";
import blogPost from "../../data/blog.json";
import Layout from "../layout/Layout";

const BlogPost = (props) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });

  useEffect(() => {
    const id = props.match.params.id;
    const post = blogPost.data.find((post) => post.slug === id);
    setPost(post);
  }, [post, props.match.params.id]);

  if (post.blogImage === "") return null;

  return (
    <Layout>
      <Card>
        <div className="blogHeader">
          <span className="blogCategory">{post.blogCategory}</span>
          <h1 className="postTitle">{post.blogTitle}</h1>
          <span className="postedBy">
            posted on {post.postedOn} by {post.author}
          </span>
        </div>

        <div className="postImageContainer">
          <img src={"/blogPostImages/" + post.blogImage} alt="Post" />
        </div>

        <div className="postContent">
          <h3>{post.blogTitle}</h3>
          <p>{post.blogText}</p>
        </div>
      </Card>
    </Layout>
  );
};

export default BlogPost;
