import {createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';



const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));
export default store;