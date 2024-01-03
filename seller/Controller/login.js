const { seller } = require("../Module/login");
var jwt = require('jsonwebtoken');

/* seller login */

module.exports.seller_login = async(req,res) =>{
 var login_data = await seller.find({"email":req.body.email});

 if(login_data.length == 1){
  if(login_data[0].password == req.body.password){
   var token = jwt.sign({id:login_data[0].id}, 'token');

    res.status(200).json({
     status:"success",
     token
    })
  }else{
   res.status(200).json({
    status:"Incorrect Password"
   })
  }
 }else{
  res.status(200).json({
    status:"Not Found Email"
  })
 }
}

/* check email */

module.exports.check_email = async(req,res)=>{
  var data = await seller.find({"email":req.body.email})
  if(data.length == 1){
      res.status(200).json({
          status:"success",
          data
      })
  } else if(data.length == 0){
      res.status(200).json({
          status:"incorrect email"
      })
  } 
}

// forgot password

module.exports.update_password = async(req,res)=>{
  await seller.findByIdAndUpdate({"_id":req.params.id},req.body);
  var data = await seller.findByIdAndUpdate({"_id":req.params.id});

  res.status(200).json({
      status:"success",
      data
  })
}