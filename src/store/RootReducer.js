import { Category, FaceRounded } from "@material-ui/icons";
import { combineReducers } from "redux"
import  LoginReducer from '../auth/auth.reducer';
import CategoryReducer from '../Admin/reducer/category.reducer';
import BrandReducer from '../Admin/reducer/Brand.reducer';
import addProductReducer from "../Admin/reducer/addProduct.reducer";

const rootReducer = combineReducers({
  LoginReducerState:LoginReducer,
  CategoryReducerState:CategoryReducer,
  BrandReducerState:BrandReducer,
  AddProductReducerState:addProductReducer
  });

export default rootReducer;