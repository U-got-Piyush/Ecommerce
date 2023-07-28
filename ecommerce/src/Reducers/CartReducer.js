import { GET_CART_FAILURE , GET_CART_LOADING, GET_CART_SUCCESS} from '../Actions/Types';
import {ADD_TO_CART_FAILURE ,ADD_TO_CART_LOADING,ADD_TO_CART_SUCCESS} from '../Actions/Types';
import { CLEAN_CART , CLEAN_AUTH} from '../Actions/Types';


const Cart = ( state , action ) => {
     
    if( typeof( state ) === 'undefined') {
        return {
            loading : false ,
            c_data : [],
            c_error : {},
            add_data : [],
            add_error : {}
        }
    }

    switch (action.type){

        case CLEAN_AUTH :
            return{
                loading : false ,
                c_data : [],
                c_error : {},
                add_data : [],
                add_error : {}
            }

        case CLEAN_CART :
            return{
                ...state ,
                loading : false,
                add_data : [] ,
                add_error : {}
            }

        case GET_CART_LOADING :
            return{
                ...state ,
                loading : true ,
                c_data : [] ,
                c_error : {}
            }
            case GET_CART_SUCCESS :
                return{
                    ...state ,
                    loading : false ,
                    c_data : action.data ,
                    c_error : {}
                }
                case GET_CART_FAILURE :
                    return{
                        ...state ,
                        loading : false ,
                        c_data : [] ,
                        c_error : action.err
                    }

                    case ADD_TO_CART_LOADING :
                        return{
                            ...state ,
                            loading : true ,
                            add_data : [] ,
                            add_error : {}
                        }
                        case ADD_TO_CART_SUCCESS :
                            return{
                                ...state ,
                                loading : false ,
                                add_data : action.data ,
                                add_error : {}
                            }
                            case ADD_TO_CART_FAILURE :
                                return{
                                    ...state ,
                                    loading : false ,
                                    add_data : [] ,
                                    add_error : action.err
                                }
                default : return state
    }
}

export default Cart
