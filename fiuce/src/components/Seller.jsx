import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal } from 'flowbite-react';

function Seller() {

    const [seller, setSeller] = useState([]);
    const [val, setVal] = useState(1)
    let [modal, setModal] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:2200/all`)
            .then(response => {
                console.log(response.data.data);
                setSeller(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])


    const handleClose = () => setModal(false);

    const handleAdd = (e, p) => {
        e.preventDefault();
        const title = p.name
        const id = p._id
        const image = p.thumb
        const price = p.price

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
                        <h3 className='title_heading font-medium text-[24px] leading-tight tracking-[1px] relative inline-block pb-[10px]'>BEST SELLER</h3>
                        <span className="text-[17px] font-medium pt-[20px] block text-[#666666]">
                            Best Seller Product This Week!
                        </span>
                    </div>

                    <div className="flex flex-wrap mt-[38px]">

                        {
                            seller.map((p, i) => (

                                <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3" key={i}>
                                    <div className="product-item">
                                        <div className="product mb-[30px] relative">
                                            <div className="img-product relative">
                                                <Link to={`/product/${p._id}`}>
                                                    <img src={p.thumb} alt="" />
                                                    <img src={require('../image/10.3.webp')} className='img-product-hover absolute' alt="" />
                                                </Link>
                                                <ul className="product-icon-action flex mb-0 text-center px-0">
                                                    <li className="add-to-cart mr-0">
                                                        <a href="" onClick={(e) => handleAdd(e, p)}>
                                                            <i className="fa-solid fa-bag-shopping"></i>
                                                        </a>
                                                    </li>
                                                    <li className="quick-view mr-0">
                                                        <a href="#" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                            <i className="fa-solid fa-magnifying-glass"></i>
                                                        </a>
                                                    </li>
                                                    <li className="add-wishlist mr-0">
                                                        <a href="#" className="box-shadow  inline-block maxus-product__wishlist wish text-center">
                                                            <i className="fa-regular fa-heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                                    <Link to={`/product/${p._id}`} className='hover:text-[#4b9e22]'>{p.name}</Link>
                                                </h4>
                                                <p className='text-center'>
                                                    <span className='text-[15px] text-[#4b9e22] font-bold'>${p.price}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

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

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Pomegranate</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$22.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
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

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Mango</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <s className="text-[15px] text-[#979797] font-bold me-1">$22.00</s>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$20.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
                                            <img src={require('../image/2.1.webp')} alt="" />
                                            <img src={require('../image/2.3.webp')} className='img-product-hover absolute' alt="" />
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Lychee Fruit</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$23.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
                                            <img src={require('../image/15.1.webp')} alt="" />
                                            <img src={require('../image/15.3.webp')} className='img-product-hover absolute' alt="" />
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Lemon Fruit</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$18.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
                                            <img src={require('../image/3.1.webp')} alt="" />
                                            <img src={require('../image/3.3.webp')} className='img-product-hover absolute' alt="" />
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Kiwi Fruit</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <s className="text-[15px] text-[#979797] font-bold me-1">$28.00</s>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$25.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <Link to="/product">
                                            <img src={require('../image/5.1.webp')} alt="" />
                                            <img src={require('../image/5.3.webp')} className='img-product-hover absolute' alt="" />
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Guava Fruit</Link>
                                        </h4>
                                        <p className='text-center'>
                                            <s className="text-[15px] text-[#979797] font-bold me-1">$23.00</s>
                                            <span className='text-[15px] text-[#4b9e22] font-bold'>$21.00</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                </div>
            </section>

            <section className='mt-20'>
                <div className="slick-list slick-initialized offer ">
                    <div className="slick-track" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>

                        <OwlCarousel className='owl-theme' loop responsive={{
                            '0': {
                                items: 1,
                            },
                            '575': {
                                items: 2,
                            },
                            '992': {
                                items: 3,
                            },
                            '1200': {
                                items: 4,
                            }
                        }}>
                            <div className='item'>
                                <div className="slick-slide">
                                    <div className="item" style={{ width: '380px' }}>
                                        <div className="thumb relative">
                                            <a href="#">
                                                <img className='img-fluid w-[100%]' src={require('../image/ba10.webp')} alt="" />
                                            </a>
                                            <div className="banner-info">
                                                <div className="info">
                                                    <h6 className='tracking-[4px] font-medium mb-[12px]'>20% OFF ALL</h6>
                                                    <h3 className='text-[30px] font-medium mb-[14px]'>Apple</h3>
                                                    <a href="#" className='button text-[14px] font-medium pb-[3px] relative inline-block overflow-hidden'>Shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='item'>
                                <div className="slick-slide">
                                    <div className="item" style={{ width: '380px' }}>
                                        <div className="thumb relative">
                                            <a href="#">
                                                <img className='img-fluid w-[100%]' src={require('../image/ba7.webp')} alt="" />
                                            </a>
                                            <div className="banner-info">
                                                <div className="info">
                                                    <h6 className='tracking-[4px] font-medium mb-[12px]'>30% OFF ALL</h6>
                                                    <h3 className='text-[30px] font-medium mb-[14px]'>Kiwi</h3>
                                                    <a href="#" className='button text-[14px] font-medium pb-[3px] relative inline-block overflow-hidden'>Shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='item'>
                                <div className="slick-slide">
                                    <div className="item" style={{ width: '380px' }}>
                                        <div className="thumb relative">
                                            <a href="#">
                                                <img className='img-fluid w-[100%]' src={require('../image/ba8.webp')} alt="" />
                                            </a>
                                            <div className="banner-info">
                                                <div className="info">
                                                    <h6 className='tracking-[4px] font-medium mb-[12px]'>50% OFF ALL</h6>
                                                    <h3 className='text-[30px] font-medium mb-[14px]'>Peach</h3>
                                                    <a href="#" className='button text-[14px] font-medium pb-[3px] relative inline-block overflow-hidden'>Shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="item">
                                <div className="slick-slide">
                                    <div className="item" style={{ width: '380px' }}>
                                        <div className="thumb relative">
                                            <a href="#">
                                                <img className='img-fluid w-[100%]' src={require('../image/ba9.webp')} alt="" />
                                            </a>
                                            <div className="banner-info">
                                                <div className="info">
                                                    <h6 className='tracking-[4px] font-medium mb-[12px]'>40% OFF ALL</h6>
                                                    <h3 className='text-[30px] font-medium mb-[14px]'>Strawberry</h3>
                                                    <a href="#" className='button text-[14px] font-medium pb-[3px] relative inline-block overflow-hidden'>Shop now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
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

export default Seller
