import { LOGIN_FAILURE, LOGIN_REQUEST ,LOGIN_SUCCESS,LOGIN_REDIRECT, SIGNUP_REQUEST} from "./action.types";


const initialState = {
    email:"",
    password:"",
    LoggedIn: false,
    is_admin:null,
    error:false,
    btn:"Sign in",
    redirectTo:null,
    confirm:"",
    first_name:"",
    last_name:"",
    phone:"",
    signupbtn:"Sign up"
}

let LoginReducer = (state = initialState,action) => {

    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                email:action.payload.email,
                password:action.payload.password,
                btn:"Signing in..."
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                LoggedIn:true,
                is_admin:action.payload
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                LoggedIn:false,
                error:action.payload
            }
        
        case LOGIN_REDIRECT:
            return {
                ...state,
                redirectTo:action.payload
            }
        
        case SIGNUP_REQUEST:
            return {
                ...state,
                phone:action.payload.phone,
                password:action.payload.password,
                confirm:action.payload.confirm,
                signupbtn:"Signing up...",
            }
        default:
            return{
            ...state,
            }
    }
}
export default LoginReducer;
