import React, {useEffect} from "react";
import {getProducts } from '../Actions/Actions';
import { useSelector , useDispatch } from 'react-redux';
import "./RowComponent.css"
import {addToCartProducts,getCartProducts} from '../Actions/Actions';
import { cleanCart } from '../Actions/ActionCreators';
import {useNavigate} from "react-router-dom";

function RowComponent(){

    const Navigate= useNavigate()

    const dispatch = useDispatch()

    const product_list = useSelector((state) => 
        state.Products.p_data && Array.isArray(state.Products.p_data) && state.Products.p_data.length ?
        state.Products.p_data : []
    )

    const electronics_list = product_list.filter(category => {
        return category.P_cat === 'Electronics';
      });

      const fashion_list = product_list.filter(category => {
        return category.P_cat === 'Fashion';
      });

      const home_list = product_list.filter(category => {
        return category.P_cat === 'Home';
      });

      const beauty_list = product_list.filter(category => {
        return category.P_cat === 'Beauty';
      });

      const grocery_list = product_list.filter(category => {
        return category.P_cat === 'Grocery';
      });


      const user_id = useSelector((state) => state.Auth.l_data && state.Auth.l_data.id ? state.Auth.l_data.id :null)

      const c_msg = useSelector((state) => state.Cart.add_data && state.Cart.add_data.msg ? state.Cart.add_data.msg : "")



    React.useEffect(() => {

        if(c_msg !== 'undefined' && c_msg !== "" && typeof(c_msg) === 'string') {
          alert(c_msg)
          dispatch(getCartProducts(user_id))
          dispatch(cleanCart())
        }
        dispatch(getCartProducts(user_id))
  
          dispatch( getProducts ())

    },[c_msg])



      const handleAddToCart = (data) => {
        dispatch(addToCartProducts({ u_id : user_id , p_data : data}))
    }



    useEffect(()=>{
        dispatch(getProducts())
    },[])

    return(
        <>

       <br />
        <div class = "row1">

            <div class = "inside-row">
        
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">Best Of Electronics</h5>
                    <br></br>
                    
                    <a href="#" class="btn btn-primary" style={{display:"flex" ,justifyContent:"center",marginTop:"20px"}} onClick={ () => Navigate('/electronics')}>View All</a>
                </div>
                <img class="card-img-top" src="	https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90" alt="Card image cap"></img>
            </div>
           
            <div class="row-elements">

            { electronics_list.map((row , i) =>(
            
            
            <div class="card">
            <img class="card-img-top" style={{height:"250px" , width:"280px"}} src={row.P_image} alt="Card image cap" ></img>
                <div class="card-body">
                <a href="#"  style={{display:"flex" ,justifyContent:"center",marginTop:"20px", color:"black"}}>{ row.P_name }</a>
                    <p class="card-title" style={{display:"flex" ,justifyContent:"center", }}>₹{ row.P_price }</p>
                    <div style={{display:"flex" , alignItems:"center" , margin:"auto" , width:"50%"}}><button class="btn btn-primary" onClick={()=>{handleAddToCart(row)}} >Add To Cart</button></div>
                </div>
                
            </div>

            ))}
            
            </div>
                     
            </div>
            </div>










        <div class = "row2">

            <div class = "inside-row">
        
            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">Best Of Fashion</h5>
                    <br></br>
                    
                    <a href="#" class="btn btn-primary" style={{display:"flex" ,justifyContent:"center",marginTop:"20px"}} onClick={ () => Navigate('/fashion')}>View All</a>
                </div>
                <img class="card-img-top" src="		https://rukminim1.flixcart.com/reco/278/278/images/Reco_DTO.jpg?q=90" alt="Card image cap"></img>
            </div>
           
            <div class="row-elements">


            { fashion_list.map((row , i) =>(
            
            
            <div class="card">
            <img class="card-img-top" style={{height:"250px" , width:"280px"}} src={row.P_image} alt="Card image cap" ></img>
                <div class="card-body">
                <a href="#"  style={{display:"flex" ,justifyContent:"center",marginTop:"20px", color:"black"}}>{ row.P_name }</a>
                    <p class="card-title" style={{display:"flex" ,justifyContent:"center", }}>₹{ row.P_price }</p>
                    <div style={{display:"flex" , alignItems:"center" , margin:"auto" , width:"50%"}}><button class="btn btn-primary" onClick={()=>{handleAddToCart(row)}} >Add To Cart</button></div>
                </div>
                
            </div>

            ))}
            
            
            
            </div>
                     
            </div>
            </div>

















            <div class = "row3">

                <div class = "inside-row">

                <div class="card">
                    
                    <div class="card-body">
                        <h5 class="card-title">Home & kitchen Essentials</h5>
                        <br></br>
                        
                        <a href="#" class="btn btn-primary" style={{display:"flex" ,justifyContent:"center",marginTop:"20px"}} onClick={ () => Navigate('/homes')}>View All</a>
                    </div>
                    <img class="card-img-top" src="	https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90" alt="Card image cap"></img>
                </div>

                <div class="row-elements">

                
                { home_list.map((row , i) =>(
            
            
            <div class="card">
            <img class="card-img-top" style={{height:"250px" , width:"280px"}} src={row.P_image} alt="Card image cap" ></img>
                <div class="card-body">
                <a href="#"  style={{display:"flex" ,justifyContent:"center",marginTop:"20px", color:"black"}}>{ row.P_name }</a>
                    <p class="card-title" style={{display:"flex" ,justifyContent:"center", }}>₹{ row.P_price }</p>
                    <div style={{display:"flex" , alignItems:"center" , margin:"auto" , width:"50%"}}><button class="btn btn-primary" onClick={()=>{handleAddToCart(row)}} >Add To Cart</button></div>
                </div>
                
            </div>

            ))}
            
                
                </div>
                        
                </div>
                </div>







            <div class = "row4">

                <div class = "inside-row">

                <div class="card">
                    
                    <div class="card-body">
                        <h5 class="card-title">Beauty, Toys & more</h5>
                        <br></br>
                       
                        <a href="#" class="btn btn-primary" style={{display:"flex" ,justifyContent:"center",marginTop:"20px"}} onClick={ () => Navigate('/toys')}>View All</a>
                    </div>
                    <img class="card-img-top" src="		https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90" alt="Card image cap"></img>
                </div>

                <div class="row-elements">
                
                { beauty_list.map((row , i) =>(
            
            
                <div class="card">
                <img class="card-img-top" style={{height:"250px" , width:"280px"}} src={row.P_image} alt="Card image cap" ></img>
                    <div class="card-body">
                    <a href="#"  style={{display:"flex" ,justifyContent:"center",marginTop:"20px", color:"black"}}>{ row.P_name }</a>
                        <p class="card-title" style={{display:"flex" ,justifyContent:"center", }}>₹{ row.P_price }</p>
                        <div style={{display:"flex" , alignItems:"center" , margin:"auto" , width:"50%"}}><button class="btn btn-primary" onClick={()=>{handleAddToCart(row)}} >Add To Cart</button></div>
                    </div>
                    
                </div>

                ))}
                
                
                </div>
                        
                </div>
                </div>












            <div class = "row5">

            <div class = "inside-row">

            <div class="card">
                
                <div class="card-body">
                    <h5 class="card-title">Grocery</h5>
                    <br></br>
                   
                    <a href="#" class="btn btn-primary" style={{display:"flex" ,justifyContent:"center",marginTop:"20px"}} onClick={ () => Navigate('/grocery')}>View All</a>
                </div>
                <img class="card-img-top" src="	https://rukminim1.flixcart.com/reco/278/278/images/Reco_DTO.jpg?q=90" alt="Card image cap"></img>
            </div>

            <div class="row-elements">
            { grocery_list.map((row , i) =>(
            
            
            <div class="card">
            <img class="card-img-top" style={{height:"250px" , width:"280px"}} src={row.P_image} alt="Card image cap" ></img>
                <div class="card-body">
                <a href="#"  style={{display:"flex" ,justifyContent:"center",marginTop:"20px", color:"black"}}>{ row.P_name }</a>
                    <p class="card-title" style={{display:"flex" ,justifyContent:"center", }}>₹{ row.P_price }</p>
                    <div style={{display:"flex" , alignItems:"center" , margin:"auto" , width:"50%"}}><button class="btn btn-primary" onClick={()=>{handleAddToCart(row)}} >Add To Cart</button></div>
                </div>
                
            </div>

            ))}
            </div>
                    
            </div>
            </div>











       

        
        
        </>
    )
}
export default RowComponent;