import React from "react";
import { useState } from "react";
import { Button, Checkbox, Form, Input, Email } from 'antd';

const Register = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const [email, setEmail] = useState('222')

    const handleOnchangeEmail = () => {

    }

    // const handleOnchangeInput = (e) => {
    //     props.handleOnchange(e.target.value)
    // }

    // const handleOnchangeEmail = (value) => {
    //     setEmail(value)
    // }
    return (
        <>
            {/* <div className="loginPage">
                <h1>XIN CHÀO</h1>
                <h4>Chào mừng bạn đã trở lại</h4>

            </div> */}
            <Form
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
                    label="Họ và tên"
                    name="hoTenKH"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền họ và tên!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên đăng nhập"
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
                    label="Số điện thoai"
                    name="sdt"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền số điện thoại!',
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền mật khẩu!',
                        },
                    ]}
                >
                    <Input type="email" placeholder="Email" value={email} handleOnchange = {handleOnchangeEmail}/>
                </Form.Item>
                
                <Form.Item
                    label="Địa chỉ"
                    name="diaChi"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng điền địa chỉ!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Mật khẩu"
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

                

                {/* <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

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
            </Form>
        </>
    )
}

export default Register;