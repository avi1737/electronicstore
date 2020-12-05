import axios from "axios"
import { SHOW_BRAND_SUCCESS } from "./action.types";


export const get_brand = (brands) => ({
    type:SHOW_BRAND_SUCCESS,
    payload:brands
});


export const show_brand = () => async (dispatch) => {
    await axios.get('http://127.0.0.1:5000/get/brands/')
    .then( res => {
        console.log(res.data.brands);
        dispatch(get_brand(res.data.brands));
    })
    .catch( err => {
        console.log(err);
    })
}