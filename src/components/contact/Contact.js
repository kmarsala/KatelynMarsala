import React from 'react';
import { Layout } from 'antd';
import ContactForm from './ContactForm'
import './Contact.less';

const { Content } = Layout;

const Contact = () => {
    return <Content className="contact">
        {/* <h1>Contact</h1> */}
        <h3>Have a question? Send me a message</h3>
        <ContactForm />
    </Content>;
};

export default Contact;
