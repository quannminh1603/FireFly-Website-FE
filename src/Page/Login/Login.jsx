import { React, useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import InputForm from "../InputForm/InputForm";
import * as UserService from "../../services/UserService"
import { useMutationHook } from "../../hooks/useMutationHook";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux"
import { updateUser } from "../../redux/slice/userSlide";
import Header from "../../../src/components/Header/Header";


const Login = () => {
    const navigate = useNavigate();
    
    const user  = useSelector((state) => state.user)
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const mutation = useMutationHook(
        data => UserService.loginUser(data)
    )
    const dispatch = useDispatch();
    const { data, isLoading, isSuccess, isError } = mutation
    console.log('mutation', mutation)

    useEffect(() => {
        if(isSuccess) {
            localStorage.setItem('access_token', data?.access_token)
            if(data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                console.log('decoded', decoded)
                if(decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        }
    }, [isSuccess])

    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
        console.log('res', res)
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnchangeUsername = (value) => {
        setUsername(value)
    }

    const handleOnchangePassword = (value) => {
        setPassword(value)
    }

    const handleNavigateLogin = () => {
        navigate('/')
    }

    const handleLogin = () => {
        // handleNavigateLogin()
        mutation.mutate({
            username,
            password
        })
        console.log('Login', username, password)
    }

    return (
        <>
        <br /><br /><br /><br /><br />
        <Header/>
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