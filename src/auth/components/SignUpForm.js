import React from 'react';
import { TextField , InputLabel, FormControl,Box, Button, withStyles} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {signup} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

 
const SignUpForm = () => {

  const dispatch = useDispatch();
  const signUpbtnText = useSelector( state => state.LoginReducerState.signupbtn);
    return(
        <>
        <div className='login__container'>
          <h1 className='login__heading'>Sign Up here</h1>
          <input className = 'login__input' type='text' placeholder = 'first name'/>
          <input className = 'login__input' type='text' placeholder = 'last name'/>
          <input className = 'login__input' type='email' placeholder = 'email'/>
          <input className = 'login__input' type='phone' placeholder = 'contact number'/>
          <input className = 'login__input' type='password' placeholder = 'password'/>
          <input className = 'login__input' type='password' placeholder = 'confirm password'/>
    <button className = 'login__btn' onClick = { ()=> dispatch(signup("avinash"))}>{signUpbtnText}</button>
        </div>
        </>
    )
}

export default SignUpForm;