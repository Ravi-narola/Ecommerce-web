import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'flowbite-react';

function ShopNow() {

    const [viewProduct, setViewProduct] = useState([]);
    const [val, setVal] = useState(1)
    let [modal, setModal] = useState(false);
    // let [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        axios.get(`http://localhost:2200/all`)
            .then(response => {
                console.log(response.data.data);
                setViewProduct(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

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

    const npage = localStorage.getItem('npage');

    const numbers = [];
    for (let number = 1; number <= npage; number++) {
        numbers.push(
            <>
                {number}
            </>
        );
    }

    const changePage = (n) => {
        localStorage.setItem("page", n.props.children);
        var page = localStorage.getItem("page");

        var token = localStorage.getItem('token');
        axios.get(`http://localhost:5000/all/?page_no=${page}`, {
            headers: { "Authorization": `${token}` }
        })
            .then(function (response) {
                console.log(response.data.data)
                setViewProduct(response.data.data);
                localStorage.setItem('npage', response.data.totalpage);
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    return (
        <>

            <section>
                <div className="breadcrumb_collection">
                    <div className="bg-image">
                        <div className="title-page text-center">
                            <h2 className='font-medium text-[40px] tracking-[2px] text-[#ffffff]'>Products</h2>
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
                                        <span className="ml-1 text-[16px] font-medium text-white md:ml-2">Products</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex flex-wrap mt-[38px]">

                        {viewProduct.map((item, index) => (

                            <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3" key={index}>
                                <div className="product-item">
                                    <div className="product mb-[30px] relative">
                                        <div className="img-product relative">
                                            <Link to={`/product/${item._id}`}>
                                                <img src={item.thumb} alt="" />
                                            </Link>
                                            <ul className="product-icon-action flex mb-0 text-center px-0">
                                                <li className="add-to-cart mr-0">
                                                    <a href="#" onClick={(e) => handleAdd(e, item)}>
                                                        <i className="fa-solid fa-bag-shopping"></i>
                                                    </a>
                                                </li>
                                                <li className="quick-view mr-0">
                                                    <a href="#" className="engoj_btn_quickview icon-quickview inline-block box-shadow">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </a>
                                                </li>
                                                <li className="add-wishlist mr-0">
                                                    <a href="/wishlist" className="box-shadow inline-block maxus-product__wishlist wish text-center">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                            <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                                <Link to={`/product/${item._id}`} className='hover:text-[#4b9e22]'>{item.name}</Link>
                                            </h4>
                                            <p className='text-center'>
                                                <span className='text-[15px] text-[#4b9e22] font-bold'>${item.price}</span>
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
                                        <a href="#">
                                            <img src={require('../image/9.1.webp')} alt="" />
                                            <img src={require('../image/9.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                                <a href="/account/login" className="box-shadow inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>    
                                            <Link to='/product' className='hover:text-[#4b9e22]'> Apple</Link>
                                        </h4>
                                        <p className='text-center'>
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
                                        <a href="#">
                                            <img src={require('../image/11.1.webp')} alt="" />
                                            <img src={require('../image/11.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                                <a href="/account/login" className="box-shadow inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>     
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Avocado</Link>
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
                                        <a href="#">
                                            <img src={require('../image/13.1.webp')} alt="" />
                                            <img src={require('../image/13.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                                <a href="/account/login" className="box-shadow inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Banana</Link>
                                        </h4>
                                        <p className='text-center'>
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
                                        <a href="#">
                                            <img src={require('../image/8.1.webp')} alt="" />
                                            <img src={require('../image/8.2.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                                <a href="/account/login" className="box-shadow inline-block maxus-product__wishlist wish text-center">
                                                    <i className="fa-regular fa-heart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h4 className='text-[16px] font-medium pt-[20px] pb-[10px] text-center'>       
                                            <Link to='/product' className='hover:text-[#4b9e22]'>Dragon Fruit</Link>
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
                                        <a href="#">
                                            <img src={require('../image/5.1.webp')} alt="" />
                                            <img src={require('../image/5.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                        </div>

                        <div className="w-full lg:w-3/12 md:w-4/12 sm:w-6/12 px-3">
                            <div className="product-item">
                                <div className="product mb-[30px] relative">
                                    <div className="img-product relative">
                                        <a href="#">
                                            <img src={require('../image/3.1.webp')} alt="" />
                                            <img src={require('../image/3.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'> Kiwi Fruit</Link>
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
                                        <a href="#">
                                            <img src={require('../image/2.1.webp')} alt="" />
                                            <img src={require('../image/2.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                        <a href="#">
                                            <img src={require('../image/15.1.webp')} alt="" />
                                            <img src={require('../image/15.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                        <a href="#">
                                            <img src={require('../image/7.1.webp')} alt="" />
                                            <img src={require('../image/7.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                            <Link to='/product' className='hover:text-[#4b9e22]'> Mango</Link>
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
                                        <a href="#">
                                            <img src={require('../image/4.1.webp')} alt="" />
                                            <img src={require('../image/4.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                        <a href="#">
                                            <img src={require('../image/12.1.webp')} alt="" />
                                            <img src={require('../image/12.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                                        <a href="#">
                                            <img src={require('../image/10.1.webp')} alt="" />
                                            <img src={require('../image/10.3.webp')} className='img-product-hover absolute' alt="" />
                                        </a>
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
                        </div> */}

                    </div>

                    <nav aria-label="Page navigation example">
                        <ul className="inline-flex -space-x-px text-sm">
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"><i className="fa-solid fa-angle-left"></i></a>
                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li>
                                        <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700" onClick={() => changePage(n)}>{n}</a>
                                    </li>
                                ))
                            }
                            <li>
                                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"><i className="fa-solid fa-angle-right"></i></a>
                            </li>
                        </ul>
                    </nav>

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

export default ShopNow;
