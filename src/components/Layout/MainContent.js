import React from 'react';
import { Layout, Button } from 'antd';

const { Content } = Layout;

function MainContent() {
  return (<Layout className="site-layout">
    <Content style={{ margin: '0 16px' }}>
      <Button type='primary' >Hello World</Button>
    </Content>
  </Layout>);
}

export default MainContent;
