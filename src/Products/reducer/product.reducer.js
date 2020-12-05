import { act } from "react-dom/test-utils";

const { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE, GET_UNIQUE_PRODUCT_SUCCESS } = require("../actions/action.types");

const initialState = {
    'products':[],
    'unique_product':{}
}

const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
            }

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                products:action.payload
            }

        case GET_PRODUCTS_FAILURE:
            return {
                ...state,
            }

        case GET_UNIQUE_PRODUCT_SUCCESS:
            return {
                ...state,
                unique_product:action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default ProductReducer;