import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {registerAction} from '../Actions/AuthActions';
import { cleanAuth } from '../Actions/ActionCreators';

function Register(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data,setData] = useState({
        name : "",
        email : "",
        password : "",
        mobile : ""
    })

    const msg = useSelector((state) => state.Auth.r_data.msg)
    const err = useSelector((state) => state.Auth.r_error.err)

    const handleInput = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        dispatch(registerAction(data))
        setData({ ...data , ['name'] : "" ,['email'] : "" ,['password'] : "" ,['mobile'] : ""})
    }

    React.useEffect(() => {
        if(msg !== null  &&  msg !== "" && msg !== undefined){
            alert(msg)
            dispatch(cleanAuth())
        }
        if(err !== null  &&  err!== "" && err !== undefined){
            alert(err)
            dispatch(cleanAuth())
        }
    },[msg , err])


    return(
        <>
        {/*	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png */}
        <div style={{ display: 'flex','text-align' :'center', marginTop:'8%', backgroundColor:'white', marginLeft:'25%', marginRight:'25%',margin:"80px",border:"1px solid black"}}>
            <div style={{backgroundColor:"#2874F0", width:"40%",height:"500px", }}>
                <h4 style={{paddingTop:"30px", color:"white"}}>Looks like you're new here!</h4>
                <br></br>
                <br></br>
                <br></br>
                <h5 style={{color:"white"}}>Sign up with your mobile number to get started</h5>
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
               
               
            <label style={{fontWeight:'bolder'}}>Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>  
            
            <input type="text" placeholder="Enter Name" name="name" value={data.name} onChange={handleInput}  required></input>  
            <br></br>
            <br></br>
            <label style={{fontWeight:'bolder'}}>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  </label>  
            
            <input type="text" placeholder="Enter Email" name="email" value={data.email} onChange={handleInput}  required></input>  
            <br></br>
            <br></br>
            <label style={{fontWeight:'bolder'}}>Password &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</label> 
            
            <input type="password" placeholder="Enter Password" name="password" value={data.password} onChange={handleInput} required>  
           </input> 
           <br></br>
            <br></br>

           <label style={{fontWeight:'bolder'}}>Mobile  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;</label> 
            
            <input type="text" placeholder="Enter Mobile Number" name="mobile" value={data.mobile} onChange={handleInput} required>  
           </input> 
           <br></br>
           <br></br>
           <br></br>
            <br></br>
           <h6 style={{fontSize:"12px"}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</h6>
           <br></br>
           <button class='btn btn-success' onClick={(e)=>handleSubmit(e)} style={{backgroundColor:"#FB641B",paddingLeft:'150px', paddingRight:"150px"}} >Register</button>
           
           <br></br>
            <br></br>
           <h6>Existing User? <span style={{color:"blue" ,textDecoration : "underline" , cursor : "pointer" , marginLeft:'10px'}} onClick={() => {navigate('/login')}}>Login!</span></h6>
            </div>
        </div>

        </>
    )
}
export default Register;