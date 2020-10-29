import React from 'react';
import { Form, Input, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import * as emailjs from 'emailjs-com'


const ContactForm = () => {
    const onFinish = (values) => {
        emailjs.send(
            'service_mbcy68j',
            'template_z5ywagl',
            values,
            'user_sHPJMJLVzmSM1lt8UEqbc'
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
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Name' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Enter email' },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Your message' }]}
            >
                <TextArea />
            </Form.Item>

            <Form.Item >
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
};

export default ContactForm;