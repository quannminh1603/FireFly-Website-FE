import React from "react";
import { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input, Email } from 'antd';
import InputForm from "../InputForm/InputForm";
import * as UserService from "../../services/UserService"
import { useMutationHook } from "../../hooks/useMutationHook";
import * as message from "../../components/Message/Message"
import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const navigate = useNavigate();

    const mutation = useMutationHook(
        data => UserService.registerUser(data)
    )
    const { data, isLoading, isSuccess, isError} = mutation
    console.log('mutation', mutation)

    useEffect(() => {
        if(isSuccess) {
            message.success()
            // handleNavigateLogin()
        }else if(isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleNavigateLogin = () => {
        navigate('/login')
    }

    const [hoTenKH, setHoTenKH] = useState('');
    const [username, setUsername] = useState('');
    const [sdt, setSdt] = useState('');
    const [email, setEmail] = useState('')
    const [diaChi, setDiaChi] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleOnchangeHoTenKH = (value) => {
        setHoTenKH(value)
    }

    const handleOnchangeUsername = (value) => {
        setUsername(value)
    }

    const handleOnchangeSdt = (value) => {
        setSdt(value)
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }

    const handleOnchangeDiaChi = (value) => {
        setDiaChi(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const handleRegister = () => {
        mutation.mutate({
            hoTenKH,
            username,
            sdt,
            email,
            diaChi,
            password,
            confirmPassword
        })
        console.log('Register', hoTenKH, username, sdt, email, diaChi, password, confirmPassword)
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
                className="formRegister"
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
                <InputForm placeholder="Họ và tên" value={hoTenKH} onChange={handleOnchangeHoTenKH} />
                <InputForm placeholder="Tên đăng nhập" value={username} onChange={handleOnchangeUsername} />
                <InputForm placeholder="Số điện thoại" value={sdt} onChange={handleOnchangeSdt} />
                <InputForm placeholder="Email" value={email} onChange={handleOnchangeEmail} />
                <InputForm placeholder="Địa chỉ" value={diaChi} onChange={handleOnchangeDiaChi} />
                <InputForm placeholder="Mật khẩu" value={password} onChange={handleOnchangePassword} />
                <InputForm placeholder="Xác nhận mật khẩu" value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
                {/* <Form.Item
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
                </Form.Item> */}

                

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
                {data?.status === "ERR" && <span style={{color: "red"}}>{data?.message}</span>}
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button className="btnRegister" type="primary" htmlType="submit" onClick={handleRegister} >
                        Submit
                    </Button>
                    <Button className="btnRegister" type="primary" htmlType="submit" onClick={handleNavigateLogin} >
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default Register;