import React from 'react';
import { Layout } from 'antd';
import Headshot from '../../images/katelyn_m_headshot.jpg'
import './Home.less';

const { Content } = Layout;

const Home = () => {
    return <Content className="home-page">
        <img src={Headshot} alt="Headshot" className="headshot" />
        <p>Hello! My name is Katelyn Marsala. </p>
    </Content>;
};

export default Home;
