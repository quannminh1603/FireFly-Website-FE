import { React, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import InputForm from "../InputForm/InputForm";
import * as UserService from "../../services/UserService"
import { useMutationHook } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import * as message from "../../components/Message/Message"
import { Navigate } from "react-router-dom";


const Login = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const mutation = useMutationHook(
        data => UserService.loginUser(data)
    )
    const { data, isLoading, isSuccess, isError } = mutation
    console.log('mutation', mutation)

    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('access_token', data?.access_token)
        }
    }, [isSuccess])

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnchangeUsername = (value) => {
        setUsername(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleNavigateLogin = () => {
        Navigate('/login')
    }

    const handleLogin = () => {
        mutation.mutate({
            username,
            password
        })
        console.log('Login', username, password)
    }

    return (
        <>
            <InputForm placeholder="Tên đăng nhập" name={username} value={username} onChange={handleOnchangeUsername} />
            <InputForm placeholder="Password" name={password} value={password} onChange={handleOnchangePassword} />
            {data?.status === "ERR" && <span style={{color: "red"}}>{data?.message}</span>}
            {/* <LoadingComponent isLoading={isLoading}> */}
            <br></br>
                <Button
                    onClick={handleLogin}
                >
                    Đăng nhập
                </Button>
            {/* </LoadingComponent> */}
            
        </>
    )
}

export default Login;