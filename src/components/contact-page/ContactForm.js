import React from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import * as emailjs from 'emailjs-com'


const ContactForm = () => {
    const onFinish = (values) => {
        emailjs.send(
            process.env.REACT_APP_EMAIL_SERVICE_ID,
            process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            values,
            process.env.REACT_APP_EMAIL_USER_ID,
        )
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="contact-form"
            className="contact-form"
            requiredMark={false}
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            labelCol={{ span: 6 }}
        >
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Name' }]}
            >
                <Input placeholder="Name" />
            </Form.Item>

            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Enter email' },
                ]}
            >
                <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
                name="message"
                rules={[{ required: true, message: 'Your message' }]}
            >
                <TextArea placeholder="Message" />
            </Form.Item>

            <Form.Item >
                <Button className="submit-button" type="primary" htmlType="submit">
                    Submit
                </Button >
            </Form.Item>
        </Form>
    );
};

export default ContactForm;