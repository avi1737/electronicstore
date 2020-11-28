import React, { useEffect, useState} from 'react';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Input ,InputAdornment} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { inputEmail } from '../actions';
import login from '../actions';
import { useSelector } from 'react-redux';
import '../styles/loginStyle.css';



const LoginForm = (props) => {

   const dispatch = useDispatch();
   const [email,setEmail] = useState("");
   const [password,setPassword] = useState("");

   const inputEmail = (e) => {
     setEmail(e.target.value);
   }

   const inputPassword = (e) => {
     setPassword(e.target.value);
   }


   const btntext = useSelector( state => state.LoginReducerState.btn);
   const error = useSelector( state=> state.LoginReducerState.error);
   const is_admin = useSelector( state=> state.LoginReducerState.is_admin);
   const redirectTo = useSelector( state=> state.LoginReducerState.redirectTo);
   if (redirectTo) {
    return <Redirect to={redirectTo} />;
  }
   

    return(
        <>
        <div className="login__container">
        <h1 className='login__heading'>Sign in to Continue</h1>
        <input type='email' placeholder='email' onChange={inputEmail} className='login__input' />
        <input type='password' placeholder ='password' onChange={inputPassword}className='login__input'/>
        <button className='login__btn' onClick = { ()=> dispatch(login(email,password))}>{btntext}</button>
        <Link to='/SignUp' className='login__link'>New User ?</Link>
        { error? <p>Wrong Credentials ! please try again</p> :<p></p> }

        </div>
        </>

    )
}

export default LoginForm;