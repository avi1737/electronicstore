import axios from "axios"
import { ADMIN_ADD_PRODUCT_FAILURE, ADMIN_ADD_PRODUCT_REQUEST, ADMIN_ADD_PRODUCT_SUCCESS } from "./action.types"

export const add_product_success = () => ({
    type:ADMIN_ADD_PRODUCT_SUCCESS,
    paload:"success"
})

export const add_product_request = () => ({
    type:ADMIN_ADD_PRODUCT_REQUEST,
    payload:"Adding Product..."
})

export const add_product_failure = () => ({
    type:ADMIN_ADD_PRODUCT_FAILURE,
    paload:"failure"
})


export const add_product = (add_product_data) => async (dispatch) => {
    dispatch(add_product_request());
    axios.post('http://127.0.0.1:5000/add/product/', add_product_data)
    .then( res => {
        if( res.data.message === "success"){
            dispatch(add_product_success());
        }
        else{
            dispatch(add_product_failure());
        }
    })
    .catch( err => {
        dispatch(add_product_failure());
    });

}

