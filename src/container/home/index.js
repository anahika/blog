import React from 'react';
import './style.css';
import RecentPosts from './RecentPosts'
import Layout from '../../components/Layout'
import Carousal from '../../components/Carousal';

const Home  = props => {
        return (
                <Layout>
                    <div>
                        <RecentPosts />
                        <Carousal />
                    </div>
                   
                </Layout>
    );
}

export default Home;