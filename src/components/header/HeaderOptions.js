import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { Menu } from 'antd';

const HeaderOptions = () => {
    const [current, setCurrent] = useState('')
    const history = useHistory();

    const handleClick = current => {
        console.log(current);
        setCurrent(current.key);
        history.push(`/${current.key}`);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" >
                Home
                </Menu.Item>
            <Menu.Item key="about"  >
                About
                </Menu.Item>
            <Menu.Item key="portfolio"  >
                Portfolio
                </Menu.Item>
            <Menu.Item key="contact">
                Contact
                </Menu.Item>
        </Menu>
    )
}

export default HeaderOptions;