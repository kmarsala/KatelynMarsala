import React from 'react';
import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import MainContent from './components/MainContent';
import SideNav from './components/SideNav';
import 'antd/dist/antd.css';


import './App.less';

function App() {
  return (
    <div className="App">
      <Layout>
        <SideNav />
        <MyHeader />
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;
