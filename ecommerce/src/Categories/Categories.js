import React from "react";
import "./Categories.css"
import logo1 from "../images/categories/top_offers.png"
import logo2 from "../images/categories/grocery.png"
import logo3 from "../images/categories/mobiles.png"
import logo4 from "../images/categories/fashion.png"
import logo5 from "../images/categories/electronics.png"
import logo6 from "../images/categories/home.png"
import logo7 from "../images/categories/appliances.png"
import logo8 from "../images/categories/beauty_toys.png"
import logo9 from "../images/categories/2wheelers.png"
import {useNavigate} from 'react-router-dom';
import SellerLogin from "../Views/SellerLogin";
import Cart from "../Views/Cart";

function Categories(){
    const Navigate = useNavigate();
    const seller = window.location.href.includes('sellerlogin');
    const cart = window.location.href.includes('cart');
    if(seller){
        <SellerLogin />;
    }
    else{
        if(cart){
            <Cart />
        }
        else{ 
    return(
        <>
        <div className="categories">
            <li><img style={{height:"65px",width:"60px"}} src={logo1}></img></li>
            <li><img style={{height:"65px",width:"65px"}} src={logo2}></img></li>
            <li><img style={{height:"65px",width:"65px"}} src={logo3}></img></li>
            <li><img style={{height:"65px",width:"60px"}} src={logo4}></img></li>
            <li><img style={{height:"65px",width:"55px"}} src={logo5}></img></li>
            <li><img style={{height:"65px",width:"60px" , marginRight:"15px"}} src={logo6}></img></li>
            <li><img style={{height:"65px",width:"65px"}} src={logo7}></img></li>
            <li><img style={{height:"65px",width:"65px"}} src={logo8}></img></li>
            <li><img style={{height:"65px",width:"65px"}} src={logo9}></img></li>
        </div>
        
        <div className = "categories-name" id="cate">
            <ul>
            <li ><a  class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : ( (window.location.href.includes('/topoffers')) || (window.location.href.includes('/Home')) ) ? "blue" : "black" }}  onClick={ () => Navigate('/topoffers')}  >Top Offers</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('grocery')) ? "blue" : "black" }}  onClick={ () => Navigate('/grocery')}  >Grocery</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('mobiles')) ? "blue" : "black" }}  onClick={ () => Navigate('/mobiles')}  >Mobiles</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('fashion')) ? "blue" : "black" }}  onClick={ () => Navigate('/fashion')}  >Fashion</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('electronics')) ? "blue" : "black" }}  onClick={ () => Navigate('/electronics')}  >Electronics</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('homes')) ? "blue" : "black" }}  onClick={ () => Navigate('/homes')}  >Home</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('appliances')) ? "blue" : "black" }}  onClick={ () => Navigate('/appliances')}  >Appliances</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('toys')) ? "blue" : "black" }}  onClick={ () => Navigate('/toys')}  >Toys & more</a></li>
            <li  ><a class="cat-ele" aria-current="page" style={{cursor : 'pointer' , color : (window.location.href.includes('vehicles')) ? "blue" : "black" }}  onClick={ () => Navigate('/vehicles')}  >2 Wheelers</a></li>
            </ul>
        </div>
        <hr style={{margin:"0px", padding:"0px"}}></hr>

       
    
        </>
    )}
    }
}
export default Categories;