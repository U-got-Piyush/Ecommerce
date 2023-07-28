import { REG_API_FAILURE, REG_API_LOADING , REG_API_SUCCESS} from "./Types"
import {LOGIN_API_FAILURE , LOGIN_API_LOADING , LOGIN_API_SUCCESS} from "./Types"
import { CLEAN_AUTH } from "./Types";
import { GET_ALL_PRODUCTS_FAILURE , GET_ALL_PRODUCTS_LOADING , GET_ALL_PRODUCTS_SUCCESS} from './Types';
import { ADD_TO_CART_FAILURE, ADD_TO_CART_SUCCESS, ADD_TO_CART_LOADING } from './Types'
import { GET_CART_FAILURE, GET_CART_SUCCESS, GET_CART_LOADING } from './Types'
import { CLEAN_CART } from "./Types";



export const regApiLoading = () => ({
    type : REG_API_LOADING
})

export const regApiSuccess = (data) => ({
    type : REG_API_SUCCESS,
    data
})

export const regApiFailure = (err) => ({
    type : REG_API_FAILURE,
    err
})

export const loginApiLoading = () => ({
    type: LOGIN_API_LOADING
})

export const loginApiSuccess = (data) => ({
    type: LOGIN_API_SUCCESS,
    data
})

export const loginApiFailure = (err) => ({
    type : LOGIN_API_FAILURE,
    err
})






export const cleanAuth = () => ({
    type : CLEAN_AUTH
})





export const getALlProductsLoading = () => ({
    type : GET_ALL_PRODUCTS_LOADING
})

export const getALlProductsSuccess = ( data ) => ({
    type : GET_ALL_PRODUCTS_SUCCESS,
    data
})

export const getALlProductsFailure = ( err ) => ({
    type : GET_ALL_PRODUCTS_FAILURE,
    err
})







export const addToCartLoading = () => ({
    type : ADD_TO_CART_LOADING
})

export const addToCartSuccess = ( data ) => ({
    type : ADD_TO_CART_SUCCESS,
    data
})

export const addToCartFailure = ( err ) => ({
    type : ADD_TO_CART_FAILURE,
    err
})

export const getCartLoading = () => ({
    type : GET_CART_LOADING
})

export const getCartSuccess = ( data ) => ({
    type : GET_CART_SUCCESS,
    data
})

export const getCartFailure = ( err ) => ({
    type : GET_CART_FAILURE,
    err
})

export const cleanCart = () => ({
    type : CLEAN_CART
})