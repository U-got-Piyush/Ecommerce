const userModel = require ('../Models/Users')
const products = require ('../Models/Products')
const Cart = require ('../Models/Cart')

const bcrypt = require('bcrypt')







exports.getRegData = ( req , res ) => {

bcrypt.genSalt(10, (err,salt)=> {
    if(err){
        res.status(403).send({ err :"Something Went Wrong!!"})
    }
    else{
        bcrypt.hash(req.body.password, salt , (err, hash)=>{
            if(err){
                res.status(403).send({ err :"Something Went Wrong!!"})
            }
            else{
                userModel.insertMany({name : req.body.name , email : req.body.email , password : hash , mobile : req.body.mobile}).then((result)=>{
                    res.status(200).send({ msg : 'User Registered Succesfully!!!'})
                }).catch((err)=>{
                    res.status(403).send({ err :"Something Went Wrong!!"})
                })
            }
        })
    }
})
}





exports.userLogin = (req,res)=>{
    userModel.find({"email" : req.body.email}).then((result)=>{
        if(result.length === 0){
            res.status(403).send({ err :"Wrong Email ID!!"})
        }
        else {
            bcrypt.compare(req.body.password , result[0].password, (err,stat)=>{
                if(err){
                    res.status(403).send({ err :"Something Went Wrong!!"})
                }
                else{
                    if(stat === true ){
                        res.status(200).send({msg : "User Logged In Succesfully!!" , id : result[0]._id})
                    }
                    else {
                        res.status(403).send({ err :"Incorrect Password!!"})
                    }
                }
            })
        }
    })
}







exports.addProduct  = (req , res ) =>{
    products.insertMany({
      P_name : req.body.P_name , 
      P_price : req.body.P_price , 
      P_desc : req.body.P_desc ,
      P_image : req.body.P_image ,
      P_cat : req.body.P_cat,
      P_subcat : req.body.P_subcat,
      avl_quantity : req.body.avl_quantity
    }).then((result) => {
  
      console.log(result)
      res.status(200).send({msg:"Product Added Succesfully!!"})
  
    }).catch((err) =>{
  
      console.log(err)
      res.status(400).send("Something Went Wrong!!!")
  
    })
  }



  exports.getAllProducts = (req , res) => {

    products.find({}).then((result) =>{
  
      res.status(200).send(result)
  
    }).catch((err) => {
      res.status(400).send({msg:"Something Went Wrong!!!"})
    })
  
  }






  exports.addToCart = (req , res) =>{
    Cart.insertMany({u_id : req.body.u_id , p_data : req.body.p_data}).then((result) => {
      
      res.status(200).send({msg : "Item Added To Cart"})
  
    }).catch((err) => {
  
      res.status(400).send({msg: "Something Went Wrong!!!"})
    })
  }
  
  exports.getCartItems = (req , res) =>{
    Cart.find({u_id : req.query.u_id}).then((result) => {
      
      res.status(200).send( {data : result , count : result.length})
      
      
  
    }).catch((err) => {
  
      res.status(400).send({msg: "Something Went Wrong!!!"})
    })
  }
  
  exports.deleteCartItem = (req , res) => {
    Cart.deleteOne({_id : req.query.c_id}).then((result) => {
  
      res.status(200).send({msg : "Item Deleted Successfully!!"})
  
    }).catch((err) => {
      res.status(400).send({msg: "Something Went Wrong!!"})
    })
  }
