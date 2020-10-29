import React from 'react';
import { Layout } from 'antd';
import ContactForm from './ContactForm'
import './Contact.less';

const { Content } = Layout;

const Contact = () => {
    return <Content className="contact-page">

        <ContactForm />
    </Content>;
};

export default Contact;
