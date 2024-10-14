import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import Card from "../ui";
import Layout from "../layout/Layout";
import { useParams } from "react-router-dom";
import { Error } from "../pages/Error";
import { Loading } from "../pages/Loading";
import { fetchBlogContents } from "../../utils/fetchBlogContent";
import { renderContent } from "../../utils/renderContent";

const BlogPost = (props) => {
  const [content, setContent] = useState([]);
  const params = useParams();
  const slug = params.slug;

  const post = props.blogs.find((post) => post.slug === slug);
  // const deleteBlog = (id) => {
  //   props.startDeletingBlog(id);
  //   navigate("/post");
  // };

  useEffect(() => {
    const loadBlogContents = async () => {
      const contents = await fetchBlogContents([post]);
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
  }, [post]);

  if (props.loading === true) return <Loading />;
  else if (post) {
    return (
      <Layout blogs={props.blogs}>
        <Card style={{ marginBottom: "20px", padding: "20px" }}>
          <div className="blogHeader">
            <span className="blogCategory">{post.blogCategory}</span>
            <h1 className="postTitle">{post.blogTitle}</h1>
            <span className="postedBy">
              posted on {post.postedOn} by {post.author}
            </span>
          </div>

          <div className="postImageContainer">
            <img src={post.blogImage} alt="BlogImage" />
          </div>

          <div className="postContent">
            {content[post.id] ? content[post.id] : "Loading..."}
          </div>
          {/* to delete particular blog I am commenting it cz someone deleted all my blogs */}
          {/* <button
            className="btn btn-outline-secondary m-auto mb-3"
            onClick={() => deleteBlog(post.id)}
          >
            Delete Blog
          </button> */}
        </Card>
      </Layout>
    );
  } else return <Error />;
};

export default BlogPost;
