const { product } = require("../Module/product");

/* add product */

module.exports.add_product = async(req,res)=>{
 try {
  var product_data = await product.create(req.body);

  res.status(200).json({
   status:"success",
   product_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* view all product */

module.exports.all_product = async(req,res)=>{
 try {

  var limit=8;
  var page_no = req.query.page_no;
  if (page_no==undefined)
  {
      page_no = 1;
  }

  var start = (page_no - 1) * limit;

  var data = await product.find().skip(start).limit(limit);

  var total_record = await product.find().count();
  var totalpage = Math.ceil(total_record / 8)
  res.status(200).json({
      status: "Success",
      data,
      totalpage,
      total_record, limit, page_no
  })

 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* Hot Deal */
module.exports.hot_deal = async(req,res)=>{
 try {

  var limit=4;
  var page_no = req.query.page_no;
  if (page_no==undefined)
  {
      page_no = 1;
  }

  var start = (page_no - 1) * limit;

  var data = await product.find().skip(start).limit(limit);

  var total_record = await product.find().count();
  var totalpage = Math.ceil(total_record / 5)
  res.status(200).json({
      status: "Success",
      data,
      totalpage,
      total_record, limit, page_no
  })

 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* view single product */

module.exports.single_product = async(req,res)=>{
 try {
  var single_data = await product.findById(req.params.id);

  res.status(200).json({
   status:"success",
   single_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* update product */

module.exports.update_product = async(req,res)=>{
 try {
  var id = req.params.id;
  await product.findByIdAndUpdate(id, req.body);
  var update_data = await product.findByIdAndUpdate(id);

  res.status(200).json({
   status:"success",
   update_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* delete product */

module.exports.delete_product = async(req,res)=>{
 try {
  var id = req.params.id;

  var delete_data = await product.findByIdAndDelete(id);

  res.status(200).json({
   status:"success",
   delete_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* all category */

module.exports.all_category = async (req,res) =>{
try {
  var data = await product.distinct("category");
  
  res.status(200).json({
   status:"success",
     data
  })
} catch (error) {
 res.status(200).json({
  error
 })
}
}

/* search product by name and category */

module.exports.search_product = async (req,res) => {
try {
  var data = await product.find({
     "$or":[
        {
           name :{ $regex: req.params.key, $options:'i' }
        },
        { 
           category:{ $regex: req.params.key, $options:'i' }
        }
     ]
  })
 
  res.status(200).json({
     status:"success",
     data
  })
} catch (error) {
 res.status(200).json({
  error
 })
}
}

/* get product from category */

module.exports.product_category = async(req,res) =>{
try {
  var data = await product.find({"category":req.params.category});
 
  res.status(200).json({
     data
  })
} catch (error) {
 res.status(200).json({
  error
 })
}
}