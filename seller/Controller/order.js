const { order } = require("../Module/order");

/* add order */

module.exports.add_order = async (req, res) => {
 try {
  var order_data = await order.create(req.body);

  res.status(200).json({
   status: "success",
   order_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* update order */

module.exports.update_order = async (req, res) => {
 try {
  var id = req.params.id;
  await order.findByIdAndUpdate(id, req.body);
  var update_data = await order.findByIdAndUpdate(id);

  res.status(200).json({
   status: "success",
   update_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* delete order */

module.exports.delete_order = async (req, res) => {
 try {
  var id = req.params.id;

  var delete_data = await order.findByIdAndDelete(id);

  res.status(200).json({
   status: "success",
   delete_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* view users order  */

module.exports.order_product = async (req, res) => {
 try {
  var order_data = await order.find({ "userId": req.params.userId });

  res.status(200).json({
   status: "success",
   order_data
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}

/* view all order */

module.exports.all_order = async (req, res) => {
 try {

  var limit = 5;
  var page_no = req.query.page_no;
  if (page_no == undefined) {
   page_no = 1;
  }

  var start = (page_no - 1) * limit;

  var data = await order.find().skip(start).limit(limit);

  var total_record = await order.find().count();
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

/* get monthly income */

module.exports.month_income = async (req, res) => {
 const date = new Date();
 const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
 const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

 try {
  const income = await order.aggregate([
   { $match: { createdAt: { $gte: previousMonth } } },
   {
    $project:
    {
     month: { $month: "$createdAt" },
     sales: "$amount"
    },
   },
   {
    $group: {
     _id: "$month",
     total: { $sum: "$sales" }
    }
   }
  ]);
  res.status(200).json({
   income
  })
 } catch (error) {
  res.status(200).json({
   error
  })
 }
}