const { SHOW_BRAND_SUCCESS } = require("../actions/action.types");


const initialState = {
    'brands':[]
}

const BrandReducer = (state = initialState ,action) => {
    switch (action.type) {
        case SHOW_BRAND_SUCCESS:
            return {
                ...state,
                brands:action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default BrandReducer;