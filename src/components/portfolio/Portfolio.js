import React from 'react';
import { Layout, Card } from 'antd';
import MovieAppLogo from '../../images/movie-app.png';
import './Portfolio.less';

const { Meta } = Card
const { Content } = Layout;

const Portfolio = () => {
    return <Content className="portfolio">
        <h1>Portfolio</h1>
        <a target="_blank" rel="noopener noreferrer" href="https://movies-beige.vercel.app/">
            <Card.Grid >
                <Meta title="My Movie App" />
                <img alt="Movie App" src={MovieAppLogo} className="movie" />
            </Card.Grid>
        </a>
    </Content>;
};

export default Portfolio;
