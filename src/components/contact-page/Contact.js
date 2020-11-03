import React from 'react';
import { Layout } from 'antd';
import ContactForm from './ContactForm'
import './Contact.less';

const { Content } = Layout;

const Contact = () => {
    return <Content className="contact-page">
        {/* <h1>Contact</h1> */}
        <h3>Have a question?</h3>
        <ContactForm />
    </Content>;
};

export default Contact;
