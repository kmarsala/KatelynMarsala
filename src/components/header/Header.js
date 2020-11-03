import React from 'react';
import { Layout } from 'antd';
import HeaderOptions from './HeaderOptions'
import HeaderLinks from './HeaderLinks'

import './Header.less';

const AntHeader = Layout.Header;

const Header = () => {
  return <AntHeader className="header">
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kmarsala/">

      <h1>Katelyn Marsala</h1>
    </a>
    <div className="header-options">
      <HeaderOptions />
      <HeaderLinks />
    </div>
  </AntHeader>;
};

export default Header;
