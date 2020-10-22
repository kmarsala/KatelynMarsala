import React from 'react';
import { Layout } from 'antd';
import MyHeader from './components/MyHeader';
import MainContent from './components/MainContent';
import './App.less';

function App() {
  return (
    <div className="App">
      <Layout>
        <MyHeader />
        <MainContent />
      </Layout>
    </div>
  );
}

export default App;
