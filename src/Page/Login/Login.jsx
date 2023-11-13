import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import InputForm from "../InputForm/InputForm";

const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [email, setEmail] = useState('2222');

    const hangdleOnchangeEmail = () => {
        
    }

    return (
        <>
            <InputForm placeholder="Email" value={email} hangdleOnchange={hangdleOnchangeEmail} />
            {/* <div className="loginPage">
                <h1>XIN CHÀO</h1>
                <h4>Chào mừng bạn đã trở lại</h4>

            </div> */}
            {/* <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền tên đăng nhập!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền mật khẩu!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="reset">
          Reset
        </Button>
                </Form.Item>
            </Form> */}
        </>
    )
}

export default Login;