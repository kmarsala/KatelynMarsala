import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, } from 'antd';
import Header from './components/header/Header';
import Home from './components/home-page/Home';
import Contact from './components/contact-page/Contact';
import 'antd/dist/antd.less';

import './App.less';

const { Content } = Layout;

function App() {
  return (
    <Layout className="main-layout">
      <Router>

        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/contact" component={Contact} />
            {/* <Route exact path="/nowplaying" component={NowPlaying} /> */}
            {/* <Route exact path="/upcoming" component={Upcoming} />
          <Route exact path="/genres" component={Genres} />
          <Route
          exact
          path="/genres/:genreName/:genreId"
          component={GenreList}
        />  */}
            {/* <Route exact path="/movie/:id" component={MovieDetailsContainer} /> */}
          </Switch>
        </Content>
        {/* <Layout style={{ minHeight: '100vh' }}> */}

      </Router>
      {/* <SideNav /> */}
      {/* <MainContent /> */}

      {/* </Layout> */}
    </Layout>
  );
}

export default App;
