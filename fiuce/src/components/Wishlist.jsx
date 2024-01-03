import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Wishlist() {

    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:2200/wish/all`, {
            headers: { "Authorization": `${token}` }
        })
            .then(response => {
                console.log(response.data.data);
                setWishlist(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])


    return (
        <>

            <section>
                <div className="breadcrumb_collection2">
                    <div className="bg-image">
                        <div className="title-page text-center">
                            <h2 className='font-medium text-[40px] tracking-[2px] text-[#ffffff]'>Wishlist</h2>
                        </div>
                        <nav className="flex pt-[6px] pb-[30px] justify-center" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to="/" className="inline-flex items-center text-[16px] text-white hover:text-[#4b9e22]">
                                        Home
                                    </Link>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <svg className="w-3 h-3 text-white mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="ml-1 text-[16px] font-medium text-white md:ml-2">Wishlist</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
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
                                                    wishlist.map((item, i) => (
                                                        <tr className="wishlist_item" key={i}>
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
                                                                <input type="text"
                                                                    className='js-qty__num text-left'
                                                                    value={item.quantity}
                                                                    name='quantity'
                                                                    // onChange={(e) => handleQuantity(i, e.target.value)}
                                                                    readOnly
                                                                />
                                                            </td>
                                                            <td data-label="Sub Total" className="product-subtotal" data-title="Total">
                                                                <span className="amount">$ {item.total_price}</span>
                                                            </td>
                                                            <td className="product-remove">
                                                                <button className="remove set-12-svg" >✕</button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* <div className="cart_totals ">
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
                                    </div> */}


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-wishlist py-10">
                <div className="container">
                    <div className="table--responsive table-product">

                        <p className="text-center my-4" >
                            <span>Please login: </span>
                            <Link to="/login_register" className='hover:text-[#4b9e22]'>Login</Link>
                            <span> - </span>
                            <Link to="/login_register" className='hover:text-[#4b9e22]'>Register now?</Link>
                        </p>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Wishlist
