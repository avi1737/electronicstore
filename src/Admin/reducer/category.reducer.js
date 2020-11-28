import { act } from "react-dom/test-utils";

const { ADD_CATEGORY, ADD_CATEGORY_REQUEST, ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE, SHOW_CATEGORY_SUCCESS, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_FAILURE } = require("../actions/action.types");

const initialState = {
    'addCategoryBtn':'Add Category',
    'categoryToast':"",
    'items':[],
    'is_deleted':null
}

const CategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_REQUEST:
            return {
                ...state,
                addCategoryBtn:action.payload
            }
        case ADD_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryToast:action.payload,
                addCategoryBtn:"Add Category"
            }

        case ADD_CATEGORY_FAILURE:
            return {
                ...state,
                categoryToast:action.payload
            }

        case SHOW_CATEGORY_SUCCESS:
            return {
                ...state,
                items:action.payload
            }

        case DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                id_deleted:action.payload
            }

        case DELETE_CATEGORY_FAILURE:
            return {
                ...state,
                id_deleted:action.payload
            }
            
        default:
            return {
                ...state
            }
    }
}

export default CategoryReducer;