import React from "react";
import {useSelector} from 'react-redux';
import {useNavigate} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getCartProducts } from '../Actions/Actions';
import "./Cart.css"
import axios from 'axios';
import {base_url} from "../Actions/Config"



function Cart(){

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const user_id = useSelector((state) => state.Auth.l_data && state.Auth.l_data.id ? state.Auth.l_data.id :null)

    const Auth = useSelector((state) => state.Auth.l_data.id)

    const cart_data = useSelector((state) => state.Cart.c_data && state.Cart.c_data.data && Array.isArray(state.Cart.c_data.data)
    && state.Cart.c_data.data.length ? state.Cart.c_data.data : [])

    const cart_count = useSelector((state) => state.Cart.c_data && state.Cart.c_data.count 
    ? state.Cart.c_data.count : 0)

    React.useEffect(() => {
        if(!Auth || Auth === null || Auth === 'undefined'){
            alert("To Proceed Further Login First!!");
            navigate('/login')
        }
       
    },[])

    React.useEffect(()=>{
        dispatch(getCartProducts(user_id))
    },[])

    var sums=0;       
    { cart_data.map((row , i) =>{ 
        sums=sums+Number(row.p_data.P_price)
    })}
    


    const delItem = (id) =>{

        axios.get(base_url + '/delete-from-cart' , {params : {c_id : id}}).then((res) =>{

            alert(res.data.msg)
            dispatch(getCartProducts(user_id))

        }).catch((err) =>{
            console.log(err)
        })
    }


    
    
    
        return(
            <>
            <div style={{display:"flex",backgroundColor:"#F1F3F6",justifyContent:"space-evenly"}}>

                <div style={{marginTop:"20px",width:"800px",padding:"10px"}}>

                    <div style={{display:"flex",backgroundColor:"white",justifyContent:"space-between", padding:"10px"}}><p style={{fontSize:"15px"}}>From Saved Addresses</p><button style={{backgroundColor:"white", border:"1px solid #F1F3F6",fontSize:"15px",color:"blue",cursor:"pointer"}}>Enter Delivery Pincode</button></div>

                    <br></br>
                    
                    <div className="cart-row">
                    <div className="moving-row">

                    { cart_data.map((row , i) =>(
                    
                    
                    

                    <div class="card" style={{height:"240px"}}>
                        <div class="card-body" style={{display:"flex",justifyContent:"flex-start"}}>
                            <div><img style={{height:"170px" , width:"200px"}} src={row.p_data.P_image}></img></div>
                            <div style={{paddingLeft:"20px"}}>
                            <h5 class="card-text" style={{fontWeight:"500"}}>{row.p_data.P_name}</h5>
                            <p class="card-text">{row.p_data.P_desc}</p>
                            <p class="card-text" style={{color:"green" , fontWeight:"550"}}>₹{row.p_data.P_price}</p>
                            <a href="#" onClick={() => {delItem(row._id)}} style={{color:"red",textDecoration:"none",fontWeight:"550"}}>REMOVE</a>
                            </div>
                        </div>
                    </div>

                    ))}

                   

                    </div>
                    <div className="fixed-row">
                        <div style={{width:"780px",height:"79px", backgroundColor:"white",display:"flex",justifyContent:"flex-end"}}><button style={{color:"white",backgroundColor:"#fb641b", border:"none",margin:"15px",width:"220px",fontSize:"19px",fontWeight:"550"}}>PLACE ORDER</button></div>
                    </div>


                    </div>


                </div>

                <br></br>

                <div>
                <div class="card" style={{height:"340px",marginTop:"20px",width:"400px"}}>
                        <div class="card-body">
                            <div style={{paddingLeft:"20px"}}>
                            <h5 class="card-text" style={{fontWeight:"500"}}>PRICE DETAILS</h5>
                            <hr style={{margin:"0px", padding:"0px"}}></hr>
                            <br></br>
                            <div style={{display:"flex" , justifyContent:"space-between"}}><p class="card-text">Price ({cart_count} items) </p><p>₹{sums}</p></div>
                            <div style={{display:"flex" , justifyContent:"space-between"}}><p class="card-text">Discount </p><p>₹0</p></div>
                            <div style={{display:"flex" , justifyContent:"space-between"}}><p class="card-text">Delivery Charges </p><p style={{fontWeight:"550",color:"green"}}>FREE</p></div>
                            <hr style={{margin:"0px", padding:"0px"}}></hr>
                            <br></br>
                            <div style={{display:"flex" , justifyContent:"space-between"}}><h5 class="card-text" style={{ fontWeight:"550"}}>Total Amount</h5><h5 style={{fontWeight:"550"}}>₹{sums}</h5></div>
                            <br></br>
                            <hr style={{margin:"0px", padding:"0px"}}></hr>
                           <br></br>
                            
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div style={{display:"flex"}}>
                    
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg"></img>
                    <div>
                    <p style={{fontSize:"14px",marginBottom:"0px",paddingBottom:"0px",color:"#878787",paddingTop:"5px"}}>Safe and Secure Payments.</p>
                    <p style={{fontSize:"14px",marginTop:"0px", paddingTop:"0px",color:"#878787"}}>Easy returns.100% Authentic products.</p>
                    </div>
                    </div>
                </div>

                

            </div>

            <hr style={{margin:"0px", padding:"0px"}}></hr>
            <div style={{display:"flex",justifyContent:"space-around", backgroundColor:"#F1F3F6",height:"60px",padding:"15px"}}>
            <p style={{fontSize:"15px"}}>Policies&nbsp;:&nbsp;Returns Policy&nbsp;&nbsp;|&nbsp;&nbsp;Terms of useSecurity&nbsp;&nbsp;|&nbsp;&nbsp;PrivacyInfringement&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2007-2022 Flipkart.com</p>
            <p style={{fontSize:"15px"}}>Need help? Visit the <a style={{color:"blue"}}>Help Center</a> or <a style={{color:"blue"}}>Contact Us</a></p>
            </div>
            </>
        )
    
        
    }
    


export default Cart;