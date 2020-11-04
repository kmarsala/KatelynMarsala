import React from 'react';
import { Layout } from 'antd';
import HeaderOptions from './HeaderOptions'
import HeaderLinks from './HeaderLinks'

import './Header.less';

const AntHeader = Layout.Header;

const Header = () => {
  return <AntHeader className="header">
    <a href="/home">
      <h1>Katelyn Marsala</h1>
    </a>
    <div className="header-options">
      <HeaderOptions />
      <HeaderLinks />
    </div>
  </AntHeader>;
};

export default Header;
