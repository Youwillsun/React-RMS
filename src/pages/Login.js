import React from 'react';
import { Form, Input, Button, Checkbox, Card, message } from 'antd';
import { setToken } from '../utils/auth';
import { loginApi } from '../services/auth';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const loginBoxCss = {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1'
}

function Login(props) {
    const onFinish = values => {
        // 调用API
        loginApi({
            userName: values.userName,
            password: values.password
        }).then(res => {
            if (res.code === 'success') {
                message.info('登录成功');
                setToken(values.username);
                props.history.push('/admin');
            } else {
                message.info(res.message);
            }
        }).catch(err => {
            message.info('用户不存在');
        })
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Card title="SYW React SYS" style={loginBoxCss}>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={[{ required: true, message: '请输入您的账号' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={[{ required: true, message: '请输入您的密码' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default Login
