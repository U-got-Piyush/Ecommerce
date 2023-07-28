import React from "react";
import Electronics from "../Categories/Electronics";
import Homes from "../Categories/Homes";
import Toys from "../Categories/Toys";
import Vehicles from "../Categories/Vehicles";
import Mobiles from "../Categories/Mobiles";
import Appliances from "../Categories/Appliances";
import Fashion from "../Categories/Fashion";
import Grocery from "../Categories/Grocery";
import Home from "../Views/Home";
import {Routes, Route} from "react-router-dom";
import Login from "../Views/Login";
import Register from "../Views/Register";
import SellerLogin from "../Views/SellerLogin";
import Cart from "../Views/Cart";

function Routing () {

    return(
        <>
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/topoffers' element={<Home />} />
            <Route path='/homes' element={<Homes />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/electronics' element={<Electronics />} />
            <Route path='/vehicles' element={<Vehicles />} />
            <Route path='/toys' element={<Toys />} />
            <Route path='/appliances' element={<Appliances />} />
            <Route path='/grocery' element={<Grocery />} />
            <Route path='/mobiles' element={<Mobiles />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/sellerlogin' element={<SellerLogin />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Home />} />
        </Routes>
        </>
    )
}

export default Routing;
