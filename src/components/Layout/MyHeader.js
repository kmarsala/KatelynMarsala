import React from 'react';
import { Layout } from 'antd';
import { LinkedinOutlined } from '@ant-design/icons';
import MyMenu from './MyMenu'

import './MyHeader.less';

const { Header } = Layout;

const MyHeader = () => {
  return <Header className="header">
    <h1>Katelyn Marsala</h1>
    <MyMenu />
    <LinkedinOutlined className="header-icon" />
  </Header>;
};

export default MyHeader;
