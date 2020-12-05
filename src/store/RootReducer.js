import { Category, FaceRounded } from "@material-ui/icons";
import { combineReducers } from "redux"
import  LoginReducer from '../auth/auth.reducer';
import CategoryReducer from '../Admin/reducer/category.reducer';
import BrandReducer from '../Admin/reducer/Brand.reducer';
import addProductReducer from "../Admin/reducer/addProduct.reducer";
import ProductReducer from "../Products/reducer/product.reducer";
import cartReducer from "../Cart/reducer/CartReducer";

const rootReducer = combineReducers({
  LoginReducerState:LoginReducer,
  CategoryReducerState:CategoryReducer,
  BrandReducerState:BrandReducer,
  AddProductReducerState:addProductReducer,
  ProductReducerState:ProductReducer,
  CartReducerState:cartReducer
  });

export default rootReducer;