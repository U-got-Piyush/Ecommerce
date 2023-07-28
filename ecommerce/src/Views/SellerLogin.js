import React from "react";
import {useNavigate} from "react-router-dom";
import banner1 from "../images/login/banner.png";
import banner2 from "../images/login/grow_faster_new.png";
import Home from "../Views/Home";

function SellerLogin (){
    const Navigate = useNavigate();
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark "style={{display:"flex" , justifyContent:"space-evenly"}}>
        <button style={{ border:"none", backgroundColor:"#3392F3", width:"165px",color:"white",cursor:"default",padding:"6px",borderRadius:"25px", fontSize:"16px", fontWeight:"500" }} onClick={()=>Navigate('/Home')}> { '<-' } Back To Home</button>
        <button style={{ border:"none", backgroundColor:"#3392F3", width:"195px",color:"white",cursor:"default",padding:"10px",borderRadius:"25px", fontSize:"20px", fontWeight:"700" }}>Seller Hub</button>
        <div class="nav-content" >
            
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            
                <ul class="navbar-nav mr-auto" style={{display:"flex" , justifyContent:"flex-end"}}>
                
                <li class="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a class="nav-link" href="#" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"400" , fontSize:"17px" , color:"black"}} >Fee Structure<span class="sr-only" >(current)</span></a>
                </li>

                <li class="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a class="nav-link" href="#" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"400" , fontSize:"17px" , color:"black"}} >Services<span class="sr-only" >(current)</span></a>
                </li>

                <li class="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a class="nav-link" href="#" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"400" , fontSize:"17px" , color:"black"}} >Resources<span class="sr-only" >(current)</span></a>
                </li>

                <li class="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a class="nav-link" href="#" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"400" , fontSize:"17px" , color:"black"}} >FAQs<span class="sr-only" >(current)</span></a>
                </li>

                <li class="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                    <a class="nav-link" href="#" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px", fontWeight:"400" , fontSize:"17px" , color:"black"}} >Shopsy<span class="sr-only" >(current)</span></a>
                </li>
                

                
                <li class="nav-item active" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px"}}>
                <form class="form-inline my-2 my-lg-0">
                
                <button class="btn btn-light" type="submit" style={{padding:"auto", margin:"auto", marginLeft:"10px" , marginRight:"10px" , fontWeight:"600", color:"white", backgroundColor:"#3392F3",width:"150px" }} onClick={()=>Navigate('/sellerlogin')}>Login</button>
                </form>
                </li>
                
                </ul>
                
            </div>
            </div>
        </nav>

        <hr style={{margin:"0px", padding:"0px"}}></hr>

        <div>
        <img  style={{width:"100%",height:"300px"}}src={banner1}></img>
        <hr style={{margin:"0px", padding:"0px"}}></hr>
        </div>

        <br></br>
        <br></br>

        <h3 style={{ display:"flex",justifyContent:"center"}}>WHY SELL ONLINE ?</h3>

        <br></br>
        <br></br>

        <div style={{display:"flex",padding:"20px"}}>
            <div style={{padding:"20px"}}>
                <div style={{ display:"flex",justifyContent:"center"}}>
                <button style={{ border:"none", backgroundColor:"#3392F3", width:"45px",borderRadius:"15px",color:"white",cursor:"default" }}>1</button>
                </div>
                <br></br>
                <h5 style={{ display:"flex",justifyContent:"center"}}>Growth in the online retail market</h5>
                <br></br>
                <p style={{fontSize:"15px",display:"flex",justifyContent:"center"}}>Witnessing tremendous growth for the past 5 years, retailers are moving towards online selling.</p>
                <ul>
                    <li style={{fontSize:"15px"}}>Avoid huge investments.</li>
                    <li style={{fontSize:"15px"}}>Large customer base to sell anywhere.</li>
                </ul>
            </div>

            <div style={{padding:"20px"}}>
                <div style={{ display:"flex",justifyContent:"center"}}>
                <button style={{ border:"none", backgroundColor:"#3392F3", width:"45px",borderRadius:"15px",color:"white",cursor:"default" }}>2</button>
                </div>
                <br></br>
                <h5 style={{ display:"flex",justifyContent:"center"}}>Get orders across India</h5>
                <br></br>
                <p style={{fontSize:"15px",display:"flex",justifyContent:"center"}}>Receive orders from every part of the country and follow the simple steps to fulfill the orders.</p>
                <ul>
                    <li style={{fontSize:"15px"}}>Simple dashboard</li>
                    <li style={{fontSize:"15px"}}>Sale events, advertising and promotions</li>
                </ul>
            </div>

            <div style={{padding:"20px"}}>
                <div style={{ display:"flex",justifyContent:"center"}}>
                <button style={{ border:"none", backgroundColor:"#3392F3", width:"45px",borderRadius:"15px",color:"white",cursor:"default" }}>3</button>
                </div>
                <br></br>
                <h5 style={{ display:"flex",justifyContent:"center"}}>Ship with ease</h5>
                <br></br>
                <p style={{fontSize:"15px",display:"flex",justifyContent:"center"}}>Enjoy easy pick-up and delivery across India with Ekart, our logistics partner.</p>
                <ul>
                    <li style={{fontSize:"15px"}}>Efficient pick-up network</li>
                    <li style={{fontSize:"15px"}}>Professional packaging support</li>
                </ul>
            </div>

            <div style={{padding:"20px"}}>
                <div style={{ display:"flex",justifyContent:"center"}}>
                <button style={{ border:"none", backgroundColor:"#3392F3", width:"45px",borderRadius:"15px",color:"white",cursor:"default" }}>4</button>
                </div>
                <br></br>
                <h5 style={{ display:"flex",justifyContent:"center"}}>Earn big</h5>
                <br></br>
                <p style={{fontSize:"15px",display:"flex",justifyContent:"center"}}>Our payments process is the fastest in the industry - get your payments in as little as 7 days of sales.</p>
                <ul>
                    <li style={{fontSize:"15px"}}>Fastest payment settlement</li>
                    <li style={{fontSize:"15px"}}>Detailed reports to track your payments</li>
                </ul>
            </div>

        </div>
        <br></br>

        <h3 style={{ display:"flex",justifyContent:"center"}}>GROW FASTER ONLINE !!</h3>
        
        
        <img style={{width:"100%"}} src={banner2}></img>

        <br></br>
        <br></br>
        <hr style={{margin:"0px", padding:"0px"}}></hr>
        
        <div style={{backgroundColor:"#F9F9F9", padding:"20px"}}>
        <h3 style={{ display:"flex",justifyContent:"center" ,fontWeight:"400"}}>SELL HERE</h3>
        <br></br>

        <p style={{fontWeight:"350", fontSize:"16px"}}>Flipkart Marketplace is India’s leading platform for selling online. Be it a manufacturer, vendor or supplier, simply sell your products online on Flipkart and become a top e-commerce player with minimum investment. Through a team of experts offering exclusive seller workshops, training, and seller support, Flipkart focuses on empowering sellers across India.</p>
        <p style={{fontWeight:"350", fontSize:"16px"}}>Selling on Flipkart.com is easy and absolutely free. All you need is to register, list your catalog and start selling your products.</p>
        <p style={{fontWeight:"350", fontSize:"16px"}}>What's more? We have third party ‘Ecommerce Service Providers’ who provide logistics, cataloging support, product photoshoot and packaging materials. We have a program called Seller Protection Fund to safeguard sellers from losses via compensations. We provide Flipkart Fulfilment services through which you can ensure faster delivery of your items, quality check by our experts and a delightful packaging. Combine these with the fastest payments in the industry and you get an excellent seller portal. No wonder Flipkart is India’s favourite place to sell online.</p>

        <br></br>
        
        </div>

        <hr style={{margin:"0px", padding:"0px"}}></hr>

        <div style={{backgroundColor:"#3392F3"}}>

            <div class = "ul-list">
                <ul>
                    <li style={{paddingBottom:"10px", color:"white" , fontWeight:"700", fontSize:"17px"}}>About</li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Corporate Information</a></li>
                </ul>
                <ul>
                    <li style={{paddingBottom:"10px", color:"white" , fontWeight:"700", fontSize:"17px"}}>Help</li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Cancellation & Returns</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Report Ingfringement</a></li>
                </ul>
                <ul>
                    <li style={{paddingBottom:"10px", color:"white" , fontWeight:"700", fontSize:"17px"}}>Policy</li>
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Security</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
                <ul>
                    <li style={{paddingBottom:"10px", color:"white" , fontWeight:"700", fontSize:"17px"}}>Social</li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Youtube</a></li>
                </ul>
                <ul>
                    <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K"></img><a href="#">Become a Seller</a></li>
                    <br />
                    <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="></img><a href="#">Advertise</a></li>
                    <br />
                    <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg=="></img><a href="#">Gift Cards</a></li>
                    <br />
                    <li><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="></img><a href="#">Help Center</a></li>
                    <br />
                    <br />
                    
                    <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"></img>
                </ul>
               
                
            </div>

        </div>
        
        </>
    )
}

export default SellerLogin;