import React from "react";
import {useNavigate} from "react-router-dom";
import SellerLogin from "../Views/SellerLogin";
import {useSelector} from 'react-redux';
import {useDispatch } from 'react-redux';
import { cleanAuth } from '../Actions/ActionCreators';
import "./Navbar.css"


function Navbar(){
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault()
        dispatch(cleanAuth())
        alert ("User Logged Out Successfully!!")
        Navigate('/Home')
    }

    const Auth = useSelector((state) => state.Auth.l_data.id)

    const cart_count = useSelector((state) => state.Cart.c_data && state.Cart.c_data.count 
    ? state.Cart.c_data.count : 0)

    const seller = window.location.href.includes('sellerlogin');
    if(seller){
        <SellerLogin />;
    }
    else{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary"style={{display:"flex" , justifyContent:"space-evenly"}}>
        <a className="navbar-brand" href="#" onClick={()=>Navigate('/Home')} style={{fontWeight:"700", fontSize:"25px"}}>Flipkart</a>
        <div className="nav-content" >
            
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            
                <ul className="navbar-nav mr-auto" >
                
                <li className="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                <div className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px" , width:"400px"}}></input>



                { Auth && Auth !== null && Auth !== 'undefined' && typeof(Auth) === 'string'  ?
        
        <button className="btn btn-light" type="submit" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px" , fontWeight:"600", color:"#007BFF" }} onClick={(e)=>handleLogout(e)}>Logout</button>
        
        :
        <button className="btn btn-light" type="submit" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px" , fontWeight:"600", color:"#007BFF" }} onClick={()=>Navigate('/login')}>Login</button>
        }
                

                </div>
                </li>
                <li className="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a className="nav-link" href="#" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"600" , fontSize:"17px"}} onClick={()=>Navigate('/sellerlogin')}>Become a Seller<span className="sr-only" >(current)</span></a>
                </li>
                
                <li className="nav-item dropdown" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"600", color:"white", fontSize:"17px"}}>
                    More
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a className="nav-link" href="#" onClick={()=>Navigate('/cart')} style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"600" , fontSize:"17px"}}>
                        <button style={{ color:"white" , fontSize : "18px" , border : "0px" , backgroundColor: "#007BFF",outline:"none" ,cursor:"pointer"}}  onClick={()=>Navigate('/cart')}>
                        <i className="fa" style={{fontSize:"24px" }}>&#xf07a;</i>
                        <span className='badge badge-warning' id='lblCartCount'> {cart_count} </span></button>Cart<span className="sr-only">(current)</span></a>

                        
                </li>
                
                </ul>
                
            </div>
            </div>
        </nav>

        </>

    )
    }

}

export default Navbar;