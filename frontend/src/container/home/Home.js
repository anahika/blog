import React from "react";
import "./Home.css";
import RecentPosts from "./recentPosts/RecentPosts";
import Layout from "../../components/layout/Layout";
import Carousal from "../../components/carousal/Carousel";
import { blogs } from "../../assets/blogs";

const Home = (props) => {
  return (
    <>
      {/* for hardcoded data */}
      <Layout blogs={blogs}>
        <div>
          <RecentPosts blogs={blogs} />
          <Carousal blogs={blogs} />
        </div>
      </Layout>
      {/* <Layout blogs={props.blogs}>
        <div>
          <RecentPosts blogs={props.blogs} />
          <Carousal blogs={props.blogs} />
        </div>
      </Layout> */}
    </>
  );
};

export default Home;
