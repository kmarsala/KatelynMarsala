import React from 'react';
import { Layout } from 'antd';
import MyHeader from './components/Layout/MyHeader';
import background from './images/background.jpg';
import MainContent from './components/Layout/MainContent';
import SideNav from './components/Layout/SideNav';
import 'antd/dist/antd.css';


import './App.less';

function App() {
  return (
    <Layout className="main-layout">
      <MyHeader />
      {/* <Layout style={{ minHeight: '100vh' }}> */}

      {/* <SideNav /> */}
      {/* <MainContent /> */}

      {/* </Layout> */}
    </Layout>
  );
}

export default App;
