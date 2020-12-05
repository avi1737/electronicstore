import { ADD_TO_CART, REMOVE_FROM_CART } from "./action.types";


export const add_to_cart = (productObj) => ({
        type:ADD_TO_CART,
        payload:productObj
})


export const remove_from_cart = () => ({
        type:REMOVE_FROM_CART,
        payload:{}
})

