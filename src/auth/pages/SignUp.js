import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SignUpForm from '../components/SignUpForm';

const SignUp = (props) => {
    return(
        <>
        <Header heading = { "Sign Up" } />
        <SignUpForm/>
        <Link to= '/Login'>Signin ?</Link>
        </>
    )
}

export default SignUp;