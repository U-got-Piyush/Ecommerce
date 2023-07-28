import {combineReducers } from 'redux';
import Auth from './AuthReducer'
import Products from './Products';
import Cart from './CartReducer';


export default combineReducers({
    
    Auth,
    Products,
    Cart
    
});