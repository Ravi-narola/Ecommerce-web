import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cart() {

    const [cart, setCart] = useState([]);


    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:2200/cart/all`, {
            headers: { "Authorization": `${token}` }
        })
            .then(response => {
                console.log(response.data.data);
                setCart(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const handleRemoveFromCart = (id) => {
        var token = localStorage.getItem('token');
        axios.delete(`http://localhost:2200/cart/delete/${id}`, {
            headers: { "Authorization": token }
        })
            .then(response => {
                console.log(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const cartUpdate = (_id) => {
        const id = cart._id
        var token = localStorage.getItem('token');
        axios.post(`http://localhost:2200/cart/update/${id}`, {
            userId: id
        },
            {
                headers: { "Authorization": token }
            })
            .then(response => {
                console.log(response.data.data);
                setCart(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const handleQuantity = (index, newQuantity) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity = newQuantity;
        updatedCart[index].total_price = updatedCart[index].price * newQuantity;
        setCart(updatedCart);
    };

    const qtyPlus = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        updatedCart[index].total_price = updatedCart[index].price * updatedCart[index].quantity;
        setCart(updatedCart);
    };

    const qtyMinus = (index) => {
        if (cart[index].quantity > 1) {
            const updatedCart = [...cart];
            updatedCart[index].quantity -= 1;
            updatedCart[index].total_price = updatedCart[index].price * updatedCart[index].quantity;
            setCart(updatedCart);
        }
    };

    const totalChange = () => {
        const totalPrice = cart.reduce((total, item) => total + item.total_price, 0);
        return totalPrice.toFixed(2);
    };


    return (
        <>

            <section>
                <div className="bg-[#f6f6f6]">
                    <div className="container">
                        <div className="breadcrumb_collection">
                            <nav className="flex py-3" aria-label="Breadcrumb">
                                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                    <li className="inline-flex items-center">
                                        <a href="#" className="inline-flex items-center hover:text-[#4b9e22] text-[16px] ">
                                            Home
                                        </a>
                                    </li>
                                    <li aria-current="page">
                                        <div className="flex items-center">
                                            <i className="fa-solid fa-angle-right"></i>
                                            <span className="ml-1 text-[16px] font-medium text-[#4b9e22] md:ml-2">Your Shopping Cart</span>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="page-cart py-12">
                    <div className="content-page">
                        <div className="container">
                            <div className="content-about content-cart-page">
                                <form>
                                    <div className="table-responsive block w-full overflow-x-auto">
                                        <table className="shop_table table--responsive cart table">
                                            <thead>
                                                <tr className="cart-title">
                                                    <th colSpan="2" className="product-thumbnail text-left"> Product name</th>
                                                    <th className="product-price">Price</th>
                                                    <th className="product-quantity">Quantity</th>
                                                    <th className="product-subtotal">Total</th>
                                                    <th className="product-remove">&nbsp;</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    cart.map((item, i) => (
                                                        <tr className="cart_item" key={i}>
                                                            <td data-label="Product Name" className="product-thumbnail">
                                                                <a href="#"><img loading="lazy" width="" height="" src={item.thumb} alt="" /></a>
                                                            </td>
                                                            <td className="product-name-thumb" data-title="Product">
                                                                <a href="#" className='text-black'>{item.name}</a>
                                                            </td>
                                                            <td data-label="Product Price" className="product-price" data-title="Price">
                                                                <span className="amount">${item.price}</span>
                                                            </td>
                                                            <td data-label="Quantity" className="product-quantity" data-title="Quantity">
                                                                <div className="js-qty">
                                                                    <button type='button' className='qty_minus' onClick={() => qtyMinus(i)}>
                                                                        <span className="fa fa-caret-down hover:text-[#4b9e22]"></span>
                                                                    </button>
                                                                    <input type="text"
                                                                        className='js-qty__num text-left'
                                                                        value={item.quantity}
                                                                        name='quantity'
                                                                        onChange={(e) => handleQuantity(i, e.target.value)}
                                                                        readOnly
                                                                    />
                                                                    <button type='button' className='qty_plus' onClick={() => qtyPlus(i)}>
                                                                        <span className="fa fa-caret-up hover:text-[#4b9e22]"></span>
                                                                    </button>
                                                                </div>
                                                            </td>
                                                            <td data-label="Sub Total" className="product-subtotal" data-title="Total">
                                                                <span className="amount">$ {item.total_price}</span>
                                                            </td>
                                                            <td className="product-remove">
                                                                <button className="remove set-12-svg" onClick={() => handleRemoveFromCart(item._id)}>✕</button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="cart_totals ">
                                        <div className="cart-update">
                                            <input type="submit" value="Update Cart" name="update_cart" className="button bg-color" onClick={() => cartUpdate(cart._id)} />
                                        </div>
                                        <div className="continue-shopping-1">
                                            <Link to="/shopNow">Continue Shopping</Link>
                                        </div>

                                        <div className="cart-check">
                                            <h2 className="cart-title">CART TOTALS</h2>
                                            <hr />
                                            <table className="total-checkout w-full">
                                                <tbody>
                                                    <tr>
                                                        <th className="cart-label text-left"><span>Total</span></th>
                                                        <td className="cart-amount"><span><strong><span className="amount">${totalChange()}</span></strong> </span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="wc-proceed-to-checkout clearfix">
                                                <Link to='/add_order' className="checkout-button button alt wc-forward bg-color">Proceed to checkout</Link>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
