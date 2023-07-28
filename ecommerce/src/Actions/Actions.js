import { getALlProductsFailure , getALlProductsLoading , getALlProductsSuccess} from "./ActionCreators"
import axios from 'axios'
import {base_url} from "./Config";
import { addToCartFailure, addToCartLoading,addToCartSuccess } from './ActionCreators'
import { getCartFailure, getCartLoading,getCartSuccess } from './ActionCreators'


export const getProducts = () => {
    return (dispatch) => {
        dispatch ( getALlProductsLoading () ) 
        axios.get( base_url + '/get-products').then((res) => {
            console.log(res.data)
            dispatch( getALlProductsSuccess (res.data))

        }).catch ((err) => {
            dispatch ( getALlProductsFailure (err.res.data))
        })
    }
}





export const addToCartProducts = (data) => {
    return (dispatch) => {
        dispatch ( addToCartLoading () ) 
        axios.post( base_url + '/add-to-cart' , data).then((res) => {
            console.log(res.data)
            dispatch( addToCartSuccess (res.data))

        }).catch ((err) => {
            dispatch ( addToCartFailure (err.res.data))
        })
    }
}

export const getCartProducts = (uid) => {
    return (dispatch) => {
        dispatch ( getCartLoading () ) 
        axios.get( base_url + '/get-from-cart' , {params : {u_id : uid}}).then((res) => {
            console.log(res.data)
            dispatch( getCartSuccess (res.data))

        }).catch ((err) => {
            dispatch ( getCartFailure (err.res.data))
        })
    }
}
