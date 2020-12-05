import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_UNIQUE_PRODUCT_FAILURE, GET_UNIQUE_PRODUCT_SUCCESS } from "./action.types"

export const get_product_request = () => ({
    type:GET_PRODUCTS_REQUEST,
    payload:{}
})

export const get_product_success = (products) => ({
    type:GET_PRODUCTS_SUCCESS,
    payload:products
})

export const get_product_fail = () => ({
    type:GET_PRODUCTS_FAILURE,
    payload:{}
})


export const get_products = () => async (dispatch) => {
    dispatch(get_product_request());
    await axios.get('http://127.0.0.1:5000/get/products/')
    .then( res => {
        dispatch(get_product_success(res.data.products));
    })
    .catch( err => {
        dispatch(get_product_fail());
    })
}

export const get_unique_product_success = (product) => ({
    type:GET_UNIQUE_PRODUCT_SUCCESS,
    payload:product
})


export const get_unique_product_failure = () => ({
    type:GET_UNIQUE_PRODUCT_FAILURE,
    payload:{}
})

export const get_unique_product = (id) => async (dispatch) => {
    await axios.get('http://127.0.0.1:5000/get/product/'+id)
    .then( res => {
        dispatch(get_unique_product_success(res.data));
    })
    .catch( err => {
        dispatch(get_unique_product_failure());
    })
}

