import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/action.types';

const initialState = {
    'total':0,
    'items':[]
}

const cartReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                total: state.total + action.payload.price*action.payload.qty,
                items:[...state.items,action.payload]
            }

        case REMOVE_FROM_CART:
                return {
                    ...state,
                    items:[action.payload]
                }
        default:
            return {
                ...state,
            }
    }
}

export default cartReducer;