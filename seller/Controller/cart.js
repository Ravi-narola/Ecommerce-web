const { cart } = require("../Module/cart");

/* add cart */

module.exports.add_cart = async (req, res) => {

        var cart_data = await cart.find({ "name": req.body.name });

        if (cart_data.length == 0) {
            var total_price = parseInt(req.body.quantity) * parseInt(req.body.price);
            var data = await cart.create(req.body);
            var id = data._id;
            await cart.findByIdAndUpdate(id, {"total_price":total_price}, {new:true})
            await cart.findByIdAndUpdate(id)
            var cart_new = await cart.findByIdAndUpdate(id)
            res.status(200).json({
                status: "Success",
                cart_new
            })
        }
        else {
            var old_qty = "";
            old_qty = cart_data[0].quantity;
            new_qty = parseInt(old_qty) + parseInt(req.body.quantity);
            var price = parseInt(new_qty) * parseInt(req.body.price);

            var cart_update = await cart.findByIdAndUpdate(cart_data[0].id, {"quantity":new_qty, "total_price":price}, { new: true })

            res.status(200).json({
                status: "cart updated",
                cart_update
            })
        }

    
}

/* update cart */

module.exports.update_cart = async (req, res) => {
    try {
        var id = req.params.id;
        await cart.findByIdAndUpdate(id, req.body);
        var update_data = await cart.findByIdAndUpdate(id);

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

/* delete cart */

module.exports.delete_cart = async (req, res) => {
    try {
        var id = req.params.id;

        var delete_data = await cart.findByIdAndDelete(id);

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

/* view cart */

module.exports.cart_product = async (req, res) => {
    try {
        var cart_data = await cart.find({ "userId": req.params.userId });

        res.status(200).json({
            status: "success",
            cart_data
        })
    } catch (error) {
        res.status(200).json({
            error
        })
    }
}

/* view all cart */

module.exports.all_cart = async (req, res) => {
    try {

        var limit = 5;
        var page_no = req.query.page_no;
        if (page_no == undefined) {
            page_no = 1;
        }

        var start = (page_no - 1) * limit;

        var data = await cart.find().skip(start).limit(limit);

        var total_record = await cart.find().count();
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