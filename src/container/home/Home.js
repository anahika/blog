import React from "react";
import "./Home.css";
import RecentPosts from "./recentPosts/RecentPosts";
import Layout from "../../components/layout/Layout";
import Carousal from "../../components/carousal/Carousel";

const Home = (props) => {
  return (
    <Layout>
      <div>
        <RecentPosts />
        <Carousal />
      </div>
    </Layout>
  );
};

export default Home;
