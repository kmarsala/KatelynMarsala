import React from 'react';
import { Layout } from 'antd';
import Headshot from '../../images/katelyn_m_headshot.jpg'
import './Home.less';

const { Content } = Layout;

const Home = () => {
    return <Content className="home">
        <img src={Headshot} alt="Headshot" className="headshot" />
        <p className="bio">Hello! My name is Katelyn Marsala.
        I'm a software developer with almost three years of experience working on various applications.
        I'm driven and flexible when working in group environments or flying solo on a project.
        I value communication, organization, and continuous learning.
        -> ReactJS, Java, Kotlin, Spring Boot, AngularJS, JavaScript, HTML, CSS, Pivotal Cloud Foundry, and Agile.
        </p>
    </Content>;
};

export default Home;
