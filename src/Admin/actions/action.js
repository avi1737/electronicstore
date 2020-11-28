import { ADD_CATEGORY, ADD_CATEGORY_FAILURE, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE, DELETE_CATEGORY_SUCCESS, SHOW_CATEGORY_SUCCESS } from './action.types';
import axios from "axios";

export const add_category_req  = () => ({
        type:ADD_CATEGORY_REQUEST,
        payload:'Adding...'
})

export const add_category_success  = () => ({
        type:ADD_CATEGORY_SUCCESS,
        payload:'Category has been Added'
})

export const add_category_failure  = () => ({
        type:ADD_CATEGORY_FAILURE,
        payload:"There was problem Adding Category !"
})

export const store_categories = (items) => ({
        type:SHOW_CATEGORY_SUCCESS,
        payload:items
})

export const show_category = () => async (dispatch) => {
        await axios.get('http://127.0.0.1:5000/get/category/')
        .then( res => {
                dispatch(store_categories(res.data.categories));
        })
        .catch( err => {
                dispatch(store_categories(err));
        });
}

export const add_category = (title) => async (dispatch) => {
        dispatch(add_category_req());
        await axios.post('http://127.0.0.1:5000/add/category/'
        ,{
             title:title   
        }
        ).then( res => {
                console.log(res);
                if( res.data.message == "success"){
                        dispatch(add_category_success());
                }
        }).catch( err => {
                dispatch(add_category_failure());
        });
}

export const delete_category_success = () => ({
        type:DELETE_CATEGORY_SUCCESS,
        payload:"success"
})

export const delete_category_failure = () => ({
        type:DELETE_CATEGORY_FAILURE,
        payload:"failure"
})

export const delete_category = (id) => async (dispatch) => {
        
        await axios.delete('http://127.0.0.1:5000/delete/category/'+id).then( res => {
                console.log(res);
                if( res.data.message == "success")
                {
                        dispatch(delete_category_success());
                }
                else{
                        dispatch(delete_category_failure());
                }
        }).catch( err => {
                console.log(err);
                dispatch(delete_category_failure());
        });
}

