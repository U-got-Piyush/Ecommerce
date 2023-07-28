import React, {useEffect} from "react";
import {getProducts } from '../Actions/Actions';
import { useSelector , useDispatch } from 'react-redux';
import "./Common.css";
import {addToCartProducts,getCartProducts} from '../Actions/Actions';
import { cleanCart } from '../Actions/ActionCreators';
import {useNavigate} from "react-router-dom";
import Bottom from "../Views/Bottom";
import banner1 from "../images/banner/banner4.png";
import banner2 from "../images/banner/image.png";
import banner3 from "../images/banner/banner4.png";


function Toys(){

    const Navigate= useNavigate()

    const dispatch = useDispatch()

    const product_list = useSelector((state) => 
        state.Products.p_data && Array.isArray(state.Products.p_data) && state.Products.p_data.length ?
        state.Products.p_data : []
    )

    const toys_list = product_list.filter(category => {
        return category.P_cat === 'Beauty';
      });

      const skin_list = toys_list.filter(category => {
        return category.P_subcat === 'Skincare';
      });

      const hair_list = toys_list.filter(category => {
        return category.P_subcat === 'Haircare';
      });

      const toy_list = toys_list.filter(category => {
        return category.P_subcat === 'Toys';
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

        <div class = "toys" style={{backgroundColor:"#F1F3F6"}}>

        <h4 style={{marginLeft:"15px" , paddingTop:"10px", paddingBottom:"0px",marginBottom:"0px"}}>Beauty, Toys & More</h4>

        {/* Banner/Carousel */}
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{padding:"15px"}}>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-100" height="280px" src="https://img.freepik.com/free-vector/realistic-beauty-sale-banner-template_52683-94993.jpg?w=2000" alt="First slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={banner2} alt="Second slide"></img>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-100" src={banner3} alt="Third slide"></img>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>


            {/*https://img2.gadgetsnow.com/gd/images/products/additional/large/G287436_View_1/electronics/televisions/sony-bravia-55x80j-55-inch-led-4k-3840-x-2160-pixels-tv.jpg*/}
            <div class = "further-category">

            <h5 style={{marginLeft:"15px" , paddingTop:"10px", paddingBottom:"0px",marginBottom:"0px"}}>Skincare :-</h5>
            <div class = "row1">

                <div class = "inside-row">

               

                <div class="row-elements">
                
                { skin_list.map((row , i) =>(
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









                <h5 style={{marginLeft:"15px" , paddingTop:"10px", paddingBottom:"0px",marginBottom:"0px"}}>Haircare :-</h5>
                <div class = "row2">

                <div class = "inside-row">

               

                <div class="row-elements">
                { hair_list.map((row , i) =>(
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
















                <h5 style={{marginLeft:"15px" , paddingTop:"10px", paddingBottom:"0px",marginBottom:"0px"}}>Toys :-</h5>
                <div class = "row3">

                    <div class = "inside-row">

                   

                    <div class="row-elements">
                    { toy_list.map((row , i) =>(
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

                

           
            </div>

            <Bottom />
        




        </div>

        </>
    )
}
export default Toys;