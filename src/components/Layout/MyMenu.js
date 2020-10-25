import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'


const { SubMenu } = Menu;

const MyMenu = () => {
    const [current, setCurrent] = useState('')

    const handleClick = current => {
        console.log(current);
        setCurrent(current);
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

export default MyMenu;