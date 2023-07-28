import axios from "axios";
import {regApiFailure,regApiLoading,regApiSuccess} from "./ActionCreators";
import {loginApiFailure, loginApiLoading, loginApiSuccess} from "./ActionCreators";
import {base_url} from './Config'

export const loginAction = (data) =>{
    return (dispatch) => {

        dispatch(loginApiLoading())
        axios.post(base_url + '/user_login' , data).then((res) => {
            dispatch(loginApiSuccess(res.data))

        }).catch((err) => {
            dispatch(loginApiFailure(err.response.data))
        })
    }
}

export const registerAction = (data) =>{
    return (dispatch) => {

        dispatch(regApiLoading())
        axios.post(base_url + '/user_register' , data).then((res) => {
            dispatch(regApiSuccess(res.data))

        }).catch((err) => {
            dispatch(regApiFailure(err.response.data))
        })
    }
}