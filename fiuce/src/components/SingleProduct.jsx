import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Button, Modal, Tabs } from 'flowbite-react';


function SingleProduct() {

    const [single, setSingle] = useState([]);
    const [quantity, setQuantity] = useState(1);
    let [modal, setModal] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:2200/single/${id}`)
            .then(response => {
                localStorage.setItem('image', response.data.single_data.images[0]);
                localStorage.setItem('price', response.data.single_data.price);
                localStorage.setItem('title', response.data.single_data.name);
                console.log(response.data.single_data);
                setSingle(response.data.single_data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleImageClick = (image) => {
        setSingle({ ...single, thumb: image });
    };

    const qtyPlus = () => {
        setQuantity(quantity + 1);
    }

    const qtyMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleClose = () => setModal(false);

    const handleAdd = (e) => {
        e.preventDefault();
        console.log(single);
        const title = localStorage.getItem('title');
        const image = localStorage.getItem('image');
        const price = localStorage.getItem('price');
        // var userId = localStorage.getItem('userId');
        var token = localStorage.getItem('token');


        axios.post('http://localhost:2200/cart/', {
            userId: id,
            name: title,
            price: price,
            thumb: image,
            quantity: quantity
        },
            {
                headers: { "Authorization": `${token}` }
            })
            .then(function (response) {
                console.log(response.data);
                setQuantity(1);
                if (response.data.status === "Success" || response.data.status === "cart updated") {
                    setModal(true);
                } else {
                    setModal(false);
                }
            })
            .catch(function (error) {
                console.error(error);
            });
    }


    return (
        <>

            <section>
                <div className="container">
                    <div className="breadcrumb_collection">
                        <nav className="flex pt-[6px] pb-[30px]" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-[16px] hover:text-[#4b9e22] ">
                                        Home
                                    </a>
                                </li>
                                <li aria-current="page">
                                    <div className="flex items-center">
                                        <i className="fa-solid fa-angle-right"></i>
                                        <span className="ml-1 text-[16px] font-medium text-[#4b9e22] md:ml-2">{single.name}</span>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="container">
                    <div className="content-page-detail pb-[68px]">
                        <div className="flex flex-wrap">

                            <div className="w-full lg:w-7/12 md:w-7/12">
                                <div className="gallery-control">
                                    <div className="relative">
                                        <div className="img_thumb">
                                            <img src={single.thumb} alt="" className='w-auto' />
                                        </div>
                                    </div>

                                    {single.images && single.images.map((image, i) => (
                                        <div className="sub_img" key={i}>
                                            <div className="float-left img_bottom w-[150px] px-[5px] pt-[10px]">
                                                <img
                                                    src={image}
                                                    alt={`Product Image ${i}`}
                                                    className='w-auto object-cover'
                                                    onClick={() => handleImageClick(image)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="w-full lg:w-5/12 md:w-5/12">
                                <div className="detail-info ps-[60px]">
                                    <div className="relative">
                                        <h2 className='font-medium text-[24px] pe-[40px] mb-2 capitalize'>{single.name}</h2>
                                        <div className='pb-[40px]'>
                                            <ins className='font-medium text-[18px] text-[#4b9e22] no-underline'>${single.price}</ins>
                                        </div>
                                        <div className="wrap-rating border"></div>
                                        <div className="pd_summary text-[15px] text-[#969696] leading-relaxed pt-[22px]">
                                            <p>
                                                {single.desc}
                                            </p>
                                        </div>
                                        <p className='random_product mt-[20px] text-[16px] font-semibold '>
                                            <span className='font-semibold text-[#4b9e22] text-[18px]'> 7 </span>
                                            sold in last
                                            <span className='font-semibold text-[#4b9e22] text-[18px]'> 20 </span>
                                            Hour
                                        </p>
                                        <div className="ciloe-size-guide relative my-[25px]">
                                            <div className="extra-link font-bold flex">
                                                <a href="#" className='me-[20px] hover:text-[#4b9e22]'>Size guide</a>
                                                <a href="#" className='me-[20px] hover:text-[#4b9e22]'>Delivery & Return</a>
                                                <a href="#" className='me-[20px] hover:text-[#4b9e22]'>Ask a Question</a>
                                            </div>
                                        </div>
                                        <form>
                                            <div className="btn-action mt-[22px]">
                                                <div>
                                                    <div className="js-qty">
                                                        <button type='button' className='qty_minus' onClick={qtyMinus}>
                                                            <span className="fa fa-caret-down hover:text-[#4b9e22]"></span>
                                                        </button>

                                                        <input
                                                            type="text"
                                                            className='js-qty__num'
                                                            value={quantity}
                                                            name='quantity'
                                                            readOnly
                                                        />

                                                        <button type='button' className='qty_plus' onClick={qtyPlus}>
                                                            <span className="fa fa-caret-up hover:text-[#4b9e22]"></span>
                                                        </button>
                                                    </div>
                                                    <button type='submit' className='shop-button' onClick={(e) => handleAdd(e)}>
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="payment-button">
                                                <div className="shopify-cleanslate">
                                                    <button type='button' className='shopify-payment-button__button--unbranded'>
                                                        <Link to='/add_order'>Buy it now</Link>
                                                    </button>
                                                </div>
                                                <div className="border"></div>
                                            </div>
                                        </form>
                                        <p className='visitor my-[20px] text-[16px] font-semibold '>
                                            Real time
                                            <span className='font-semibold text-[#4b9e22] text-[18px]'> 20 </span>
                                            Visitor right now
                                        </p>
                                        <div className="btn-addwhlist">
                                            <a href="#" className='block' title="Add to Wishlist"><i className="fa-regular fa-heart"></i></a>
                                        </div>
                                        <div className="product-category-info">
                                            <span className='text-[15px] pe-1'>Categories :</span>
                                            <span className='text-[15px] text-[#bfbfbf] hover:text-[#4b9e22]'>{single.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="featured-icon pb-[60px]">
                        <div className="block-top-link flex flex-wrap mx-[-15px]">

                            <div className="w-full lg:w-3/12 md:w-3/12 sm:w-6/12">
                                <div className="textwidget custom-html-widget">
                                    <div className="sp-iconfeatured">
                                        <div className="iconbox-inner">
                                            <div className="icon">
                                                <i className="fa-solid fa-plane-up"></i>
                                            </div>
                                            <div className="content">
                                                <p className="title">WORLDWIDE SHIPPING</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 md:w-3/12 sm:w-6/12">
                                <div className="textwidget custom-html-widget">
                                    <div className="sp-iconfeatured">
                                        <div className="iconbox-inner">
                                            <div className="icon">
                                                <i className="fa-solid fa-retweet"></i>
                                            </div>
                                            <div className="content">
                                                <p className="title">FREE 10-DAY RETURNS</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 md:w-3/12 sm:w-6/12">
                                <div className="textwidget custom-html-widget">
                                    <div className="sp-iconfeatured">
                                        <div className="iconbox-inner">
                                            <div className="icon">
                                                <i className="fa-solid fa-award"></i>
                                            </div>
                                            <div className="content">
                                                <p className="title">24 MONTH WARRANTY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/12 md:w-3/12 sm:w-6/12">
                                <div className="textwidget custom-html-widget">
                                    <div className="sp-iconfeatured">
                                        <div className="iconbox-inner">
                                            <div className="icon">
                                                <i className="fa-solid fa-shield"></i>
                                            </div>
                                            <div className="content">
                                                <p className="title">100% SECRUE CHECKOUT</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border mb-4"></div>
                <div className="container px-16">
                    <Tabs.Group
                        aria-label="Full width tabs"
                        style="fullWidth">
                        <Tabs.Item
                            active
                            title="DESCRIPTION">
                            <div className="tab-content">
                                <p className='pt-10 mb-8 text-[#a8a8a8] text-[15px] leading-[28px]'>
                                    {single.desc}
                                </p>
                                <div className="flex flex-wrap">
                                    <div className="w-full xl:w-5/12 lg:w-5/12 md:6/12">
                                        <img src={require('../image/instagram7.webp')} className='w-[458px] h-[315px]' alt="" />
                                    </div>
                                    <div className="w-full xl:w-7/12 lg:w-7/12 md:6/12">
                                        <h2 className='text-[12px] tracking-[3.2px] mt-[10px] mb-[20px] underline font-medium'>BRAND</h2>
                                        <p className='mb-8 text-[#a8a8a8] text-[15px] leading-[28px]'>
                                            With eye-catching artwork, step-by-step diagrams, and illustrations that break down complicated ideas into manageable concepts, The Science Book will have readers conversant in genetic engineering, black holes, and global warming in no time. Along the way are found mini-biographies of the most well-known scientists, and a glossary of helpful scientific terms. For students, and students of the world, there is no better way to explore the fascinating, strange, and mysterious world of science than in The Science Book.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-wrap">
                                <div className="w-full xl:w-4/12 lg:w-4/12 md:4/12 mb-4">
                                    <h2 className='text-[12px] tracking-[3.2px] mt-[30px] mb-[20px] underline font-medium'>PRODUCT DETAILS</h2>
                                    <ul className='text-[#a8a8a8] text-[15px] leading-[28px]'>
                                        <li>You show me what is deep as sea</li>
                                        <li>Crew neck</li>
                                        <li>Short sleeves</li>
                                        <li>Large logo print to chest</li>
                                        <li>Regular fit</li>
                                        <li>True size</li>
                                    </ul>
                                </div>
                                <div className="w-full xl:w-4/12 lg:w-4/12 md:4/12 mb-4">
                                    <h2 className='text-[12px] tracking-[3.2px] mt-[30px] mb-[20px] underline font-medium'>SIZE & FIT</h2>
                                    <ul className='text-[#a8a8a8] text-[15px] leading-[28px]'>
                                        <li>Setting: Claw Prong Basket</li>
                                        <li>Diamond Engagement Ring</li>
                                    </ul>
                                </div>
                                <div className="w-full xl:w-4/12 lg:w-4/12 md:4/12 mb-4">
                                    <h2 className='text-[12px] tracking-[3.2px] mt-[30px] mb-[20px] underline font-medium'>ABOUT ME</h2>
                                    <ul className='text-[#a8a8a8] text-[15px] leading-[28px]'>
                                        <li>Style: BE1D129-18KW</li>
                                        <li>Metal: 18K White Gold</li>
                                        <li>Average width: 1.4 mm</li>
                                    </ul>
                                </div>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="ADDITIONAL INFORMATION">
                            <div className="tab-pane pt-8 text-left">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-8/12 md:w-6/12">
                                        <div className="title_content">
                                            <p className='text-[11px] font-semibold tracking-[2px] text-[#979797] mb-[5px]'>MORE INFORMATION TO YOU</p>
                                            <h3 >Things you need to know</h3>
                                        </div>
                                        <div className="flex flex-wrap">
                                            <div className="w-full lg:w-6/12 px-[15px]">
                                                <p className='py-[10px] mb-4 text-[#979797] text-[16px] leading-[28px]'>
                                                    We use industry standard SSL encryption to protect your details. Potentially sensitive information such as your name, address and card details are encoded so they can only be read on the secure server.
                                                </p>
                                                <ul className='text-[#979797] text-[16px] font-medium leading-[32px]'>
                                                    <li>Safe Payments</li>
                                                    <li>Accept Credit Cart</li>
                                                    <li>Different Payment Method</li>
                                                    <li>Price Include VAT</li>
                                                    <li>Easy To Order</li>
                                                </ul>
                                            </div>
                                            <div className="w-full lg:w-6/12 px-[15px]">
                                                <div className="info1">
                                                    <h3 className='text-[18px] font-medium mb-[10px]'>Express Delivery</h3>
                                                    <ul className='text-[#979797] text-[16px] font-medium leading-[32px]'>
                                                        <li>Europe & USA within 2-4 days</li>
                                                        <li>Rest of the world within 3-7 days</li>
                                                        <li>Selected locations</li>
                                                    </ul>
                                                </div>
                                                <div className="info2 mt-4">
                                                    <h3 className='text-[18px] font-medium mb-[10px]'>Need more information</h3>
                                                    <ul className='text-[#979797] text-[16px] font-medium leading-[32px]'>
                                                        <li><a href="#" className='hover:text-[#4b9e22]'>Orders & Shipping</a></li>
                                                        <li><a href="#" className='hover:text-[#4b9e22]'>Returns & Refunds</a></li>
                                                        <li><a href="#" className='hover:text-[#4b9e22]'>Payments</a></li>
                                                        <li><a href="#" className='hover:text-[#4b9e22]'>Your Orders</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 md:w-6/12">
                                        <img src={single.thumb} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="REVIEW">
                            <p>
                                <h2>Good Product</h2>
                            </p>
                        </Tabs.Item>
                    </Tabs.Group>
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

export default SingleProduct;
