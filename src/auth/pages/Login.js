import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
    return(
        <>
        <Header heading = { "Login" } />
        <LoginForm/>
        </>
    )
}

export default Login;