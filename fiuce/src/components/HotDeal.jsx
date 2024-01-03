import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal, Tabs } from 'flowbite-react';

function HotDeal() {

    const [hotDeal, setHotDeal] = useState([]);
    const [val, setVal] = useState(1)
    let [modal, setModal] = useState(false);


    useEffect(() => {
        axios.get('http://localhost:2200/hot_deal')
            .then(response => {
                console.log(response.data.data);
                setHotDeal(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleClose = () => setModal(false);

    const handleAdd = (e, hot) => {
        e.preventDefault();
        const title = hot.name
        const id = hot._id
        const image = hot.thumb
        const price = hot.price
        var token = localStorage.getItem('token');

        axios.post('http://localhost:2200/cart/', {
            userId: id,
            name: title,
            price: price,
            thumb: image,
            quantity: val
        },
            {
                headers: { "Authorization": `${token}` }
            })
            .then(function (response) {
                console.log(response.data);
                setVal(1);
                if (response.data.status === "Success" || response.data.status === "cart updated") {
                    setModal(true);
                } else {
                    setModal(false);
                }
            })
            .catch(function (error) {
                console.error(error);
            })
    }


    return (
        <>
            <section className='mt-20'>
                <div className="container">
                    <div className="text-center">
                        <h3 className='title_heading font-medium text-[24px] leading-tight tracking-[1px] relative inline-block pb-[10px]'>HOT DEAL</h3>
                        <span className="text-[17px] font-medium pt-[20px] block text-[#666666]">
                            Don't Miss Today's Featured Deals
                        </span>
                    </div>

                    <div className="flex flex-wrap mt-[38px]">

                        {hotDeal.map((hot, index) => (

                            <div className="w-full lg:w-3/12 md:w-6/12 sm:w-6/12 px-3" key={index}>
                                <div className="product-item">
                                    <div className="product mb-[30px] relative">
                                        <div className="img-product relative">
                                            <Link to={`/product/${hot._id}`}>
                                                <img src={hot.thumb} alt="" />
                                            </Link>
                                            <ul className="product-icon-action flex mb-0 text-center px-0">
                                                <li className="add-to-cart mr-0">
                                                    <a href="" onClick={(e) => handleAdd(e, hot)}>
                                                        <i className="fa-solid fa-bag-shopping"></i>
                                                    </a>
                                                </li>
                                                <li className="quick-view mr-0">
                                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </a>
                                                </li>
                                                <li className="add-wishlist mr-0">
                                                    <a href="/account/login" className="box-shadow  inline-block maxus-product__wishlist wish text-center">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                                <Link to={`/product/${hot._id}`} className='hover:text-[#4b9e22]'>{hot.name}</Link>
                                            </h4>
                                            <p className='text-center'>
                                                <span className='text-[15px] text-[#4b9e22] font-bold'>${hot.price}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))}

                        {/* <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
                                            <img src={require('../image/10.1.webp')} alt="" />
                                            <img src={require('../image/10.3.webp')} className='img-product-hover absolute' alt="" />
                                        </Link>
                                        <ul className="product-icon-action flex mb-0 text-center px-0">
                                            <li className="add-to-cart mr-0">
                                                <a href="">
                                                    <i className="fa-solid fa-bag-shopping"></i>
                                                </a>
                                            </li>
                                            <li className="quick-view mr-0">
                                                <a href="#" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </a>
                                            </li>
                                            <li className="add-wishlist mr-0">
                                                <a href="/account/login" className="box-shadow  inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Raspberry</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$25.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-6/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to='/product'>
                                            <img src={require('../image/12.1.webp')} alt="" />
                                            <img src={require('../image/12.3.webp')} className='img-product-hover absolute' alt="" />
                                        </Link>
                                        <ul className="product-icon-action flex mb-0 text-center px-0">
                                            <li className="add-to-cart mr-0">
                                                <a href="">
                                                    <i className="fa-solid fa-bag-shopping"></i>
                                                </a>
                                            </li>
                                            <li className="quick-view mr-0">
                                                <a href="javascript:void(0)" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </a>
                                            </li>
                                            <li className="add-wishlist mr-0">
                                                <a href="/account/login" className="box-shadow  inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Pomegranate</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$22.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-6/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to='/product'>
                                            <img src={require('../image/4.1.webp')} alt="" />
                                            <img src={require('../image/4.3.webp')} className='img-product-hover absolute' alt="" />
                                        </Link>
                                        <ul className="product-icon-action flex mb-0 text-center px-0">
                                            <li className="add-to-cart mr-0">
                                                <a href="">
                                                    <i className="fa-solid fa-bag-shopping"></i>
                                                </a>
                                            </li>
                                            <li className="quick-view mr-0">
                                                <a href="javascript:void(0)" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </a>
                                            </li>
                                            <li className="add-wishlist mr-0">
                                                <a href="/account/login" className="box-shadow  inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Peach Fruit</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <s className="text-[15px] text-[#979797] font-bold me-1">$22.00</s>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$20.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-6/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to='/product'>
                                            <img src={require('../image/7.1.webp')} alt="" />
                                            <img src={require('../image/7.3.webp')} className='img-product-hover absolute' alt="" />
                                        </Link>
                                        <ul className="product-icon-action flex mb-0 text-center px-0">
                                            <li className="add-to-cart mr-0">
                                                <a href="">
                                                    <i className="fa-solid fa-bag-shopping"></i>
                                                </a>
                                            </li>
                                            <li className="quick-view mr-0">
                                                <a href="javascript:void(0)" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                </a>
                                            </li>
                                            <li className="add-wishlist mr-0">
                                                <a href="/account/login" className="box-shadow  inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Mango</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <s className="text-[15px] text-[#979797] font-bold me-1">$22.00</s>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$20.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            <Modal show={modal} onHide={handleClose}>
                <Modal.Body>PRODUCT SUCCESSFULLY ADD</Modal.Body>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal>
        </>
    )
}

export default HotDeal
