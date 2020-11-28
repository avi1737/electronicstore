import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REDIRECT, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_REQUEST } from "./action.types";
import { Redirect } from "react-router-dom";
import {history} from '../history'; 

export const login_request = (email,password) => ({
    type:LOGIN_REQUEST,
    payload:{
        email:email,
        password:password,
    }
});

export const login_success = (is_admin) => ({
    type:LOGIN_SUCCESS,
    payload:is_admin
});

export const login_failure = () => ({
    type:LOGIN_FAILURE,
    payload:true
});

export const login_redirect = (link) => ({
    type:LOGIN_REDIRECT,
    payload:link
})

export const signup_request = (first_name,last_name,email,phone,password,confirm) => ({
    type:SIGNUP_REQUEST,
    payload:{
        first:first_name,
        last:last_name,
        email:email,
        phone:phone,
        password:password,
        confirm:confirm
    }
})


export const login = (email,password) => async (dispatch) => {
    dispatch(login_request(email,password));
    await axios.post(
        "http://127.0.0.1:5000/auth/login/",
        {
            email:email,
            password:password
        }
    ).then( res => {
       if( res.data.message === "user found"){
           if( res.data.admin === true ){
               dispatch(login_success(true));
               dispatch(login_redirect("/admin"));
           }
           else{
               dispatch(login_success(false));
               dispatch(login_redirect("/"));
           }
       }
       else{
           dispatch(login_failure());
       }
    }).catch( err => {
        dispatch({
            type:LOGIN_FAILURE,
            payload:true
        });
    });
}

export const signup = (first,last,email,phone,pass,confirm) => async (dispatch) => {
    dispatch(signup_request(first,last,email,phone,pass,confirm));
}

export default login;
