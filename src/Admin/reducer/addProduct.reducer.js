const { ADMIN_ADD_PRODUCT_SUCCESS, ADMIN_ADD_PRODUCT_FAILURE, ADMIN_ADD_PRODUCT_REQUEST } = require("../actions/action.types");

const initialState = {
    'message':"",
    'addProductButton':"Add Product"
}

const AddProductReducer = (state = initialState,action) => {
    switch (action.type) {

        case ADMIN_ADD_PRODUCT_REQUEST:
            return {
                ...state,
                addProductButton:action.payload
            }

        case ADMIN_ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                message:action.payload,
                addProductButton:"Added"
            }

        case ADMIN_ADD_PRODUCT_FAILURE:
            return {
                ...state,
                message:action.payload
            }
        default:
            return {
                ...state,
            }
    }

}

export default AddProductReducer;