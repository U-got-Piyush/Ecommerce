import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch , useSelector} from 'react-redux';
import {loginAction} from '../Actions/AuthActions';
import { cleanAuth } from '../Actions/ActionCreators';


function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const [data,setData] = useState({
        email : "",
        password : ""
    })

    const err_msg = useSelector((state) => state.Auth.l_error.err)
    const msg = useSelector((state) => state.Auth.l_data.msg)

    const handleInput = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginAction(data))
    }


    React.useEffect(() => {
        if(err_msg !== null  &&  err_msg !== "" && err_msg !== undefined && typeof(err_msg) === 'string'){
            alert(err_msg)
            dispatch(cleanAuth())
        }
    },[err_msg])

    React.useEffect(() => {
        if(msg !== null  &&  msg !== "" && msg !== undefined && typeof(msg) === 'string'){
            alert(msg)
            navigate ('/Home')
        }
    },[msg])




    return(
        <>
        {/*	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png */}
        <div style={{ display: 'flex',textAlign :'center', marginTop:'8%', backgroundColor:'white', marginLeft:'25%', marginRight:'25%',margin:"80px",border:"1px solid black"}}>
            <div style={{backgroundColor:"#2874F0", width:"40%",height:"500px", }}>
                <h4 style={{paddingTop:"30px", color:"white"}}>Login</h4>
                <br></br>
                <br></br>
                <br></br>
                <h5 style={{color:"white"}}>Get access to your Orders, Wishlist and Recommendations</h5>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"></img>
            </div>
            <div style={{width:"100%"}}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <label style={{fontWeight:'bolder'}}>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>  
            
            <input type="text" placeholder="Enter Username" name="email" value={data.email} onChange={handleInput} required></input>  
            <br></br>
            <br></br>
            <label style={{fontWeight:'bolder'}}>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</label> 
            
            <input type="password" placeholder="Enter Password" name="password" value={data.password} onChange={handleInput} required>  
           </input> 
           <br></br>
           <br></br>
           <br></br>
            <br></br>
           <h6 style={{fontSize:"12px"}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</h6>
           <br></br>
           <button class='btn btn-success' onClick={(e)=>handleSubmit(e)} style={{backgroundColor:"#FB641B",paddingLeft:'150px', paddingRight:"150px"}} >Login</button>
           <br></br>
           <br></br>
           <br></br>
            <br></br>
           <h6>Don't have an account? <span style={{color:"blue" ,textDecoration : "underline" , cursor : "pointer" , marginLeft:'10px'}} onClick={() => {navigate('/register')}}>Register Here!</span></h6>
            </div>
        </div>

        </>
    )
}
export default Login;