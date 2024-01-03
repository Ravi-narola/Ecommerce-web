const { user_login } = require("../Module/user");
var jwt = require('jsonwebtoken');

/* user registration */

module.exports.register = async(req,res)=>{
 try {
  var register_data = await user_login.create(req.body);

  res.status(200).json({
   status:"success",
   register_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* seller login */

module.exports.user_login_data = async(req,res) =>{
 var login_data = await user_login.find({"email":req.body.email});

 if(login_data.length == 1){
  if(login_data[0].password == req.body.password){
   var token = jwt.sign({id:login_data[0].id}, 'token');

    res.status(200).json({
     status:"success",
     login_data,
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

module.exports.user_check_email = async(req,res)=>{
  var data = await user_login.find({"email":req.body.email})
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

module.exports.user_update_password = async(req,res)=>{
  await user_login.findByIdAndUpdate({"_id":req.params.id},req.body);
  var data = await user_login.findByIdAndUpdate({"_id":req.params.id});

  res.status(200).json({
      status:"success",
      data
  })
}

/* get user stat */

module.exports.user_stat = async(req,res)=>{
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear()-1));

  try {
    const stat = await user.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
       $project:
       {
        month: { $month: "$createdAt" },
       },
      },
      {
       $group: {
        _id: "$month",
        total: { $sum: 1 }
       }
      }
     ]);
     res.status(200).json({
      stat
     })
  } catch (error) {
    res.status(300).json({
      error
    })
  }
}