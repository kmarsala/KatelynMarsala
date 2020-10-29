import React from 'react';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const HeaderLinks = () => {
    return (
        <>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kmarsala/">
                <LinkedinOutlined className="header-icon" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/kmarsala">
                <GithubOutlined className="header-icon" />
            </a>
        </>
    )
}

export default HeaderLinks;