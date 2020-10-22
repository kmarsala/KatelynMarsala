import React from 'react';
import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import background from './images/background.jpg';
import MainContent from './components/MainContent';
import SideNav from './components/SideNav';
import 'antd/dist/antd.css';


import './App.less';

function App() {
  return (
    <div className="App" >
      <Layout>
        <MyHeader />
        <Layout style={{ minHeight: '100vh' }}>

          <SideNav />
          <MainContent />

        </Layout>
      </Layout>
    </div>
  );
}

export default App;
