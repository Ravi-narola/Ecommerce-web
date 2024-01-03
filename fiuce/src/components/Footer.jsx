import React from 'react'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="top-footer bg-[#f9f9f9] border-t-2">
                    <div className="container">
                        <div className="flex flex-wrap px-[15px]">

                            <div className="w-full lg:w-3/12">
                                <div className="info_footer pt-[50px] pb-[40px]">
                                    <div className="logo-top">
                                        <img src={require('../image/logo.webp')} alt="" className='w-[185px]' />
                                    </div>
                                    <div className="content-footer mt-[23px] text-[14px]">
                                        Subscribe our newsletter and get
                                        <br />
                                        discount 30% off
                                    </div>
                                    <div className="newletter_email w-[250px] max-w-full mt-[20px]">
                                        <form action="#" className='relative'>
                                            <div className="form-group">
                                                <input type="email" name='EMAIL' className='form-control' placeholder='Your email address...' />
                                            </div>
                                            <button className='btn' type='submit'>
                                                <i className="fa-solid fa-paper-plane"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="list-icon">
                                        <ul className='mt-[30px]'>
                                            <li className='inline-block me-4'>
                                                <a href="#" className='mx-[5px] hover:text-[#4b9e22]'><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li className='inline-block me-4'>
                                                <a href="#" className='mx-[5px] hover:text-[#4b9e22]'><i className="fa fa-dribbble"></i></a>
                                            </li>
                                            <li className='inline-block me-4'>
                                                <a href="#" className='mx-[5px] hover:text-[#4b9e22]'><i className="fa fa-behance"></i></a>
                                            </li>
                                            <li className='inline-block me-4'>
                                                <a href="#" className='mx-[5px] hover:text-[#4b9e22]'><i className="fa fa-instagram"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-3/12 md:w-4/12 border-ft">
                                <div className="info_footer">
                                    <div className="title_footer">
                                        <h4 className='text-[18px] font-semibold title_border'>Customer Care</h4>
                                    </div>
                                    <ul className='mt-[30px]'>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>About Us</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Products Return</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Wholesale Policy</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full lg:w-3/12 md:w-4/12 border-ft">
                                <div className="info_footer">
                                    <div className="title_footer">
                                        <h4 className='text-[18px] font-semibold title_border'>Quick Shop</h4>
                                    </div>
                                    <ul className='mt-[30px]'>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Pagination</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Terms & Conditions</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Contact</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Accessories</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Home Page</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="w-full lg:w-3/12 md:w-4/12 border-ft">
                                <div className="info_footer">
                                    <div className="title_footer">
                                        <h4 className='text-[18px] font-semibold title_border'>Company</h4>
                                    </div>
                                    <ul className='mt-[30px]'>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Menu items</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Help Center</a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Address Store </a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>Privacy Policy </a>
                                        </li>
                                        <li>
                                            <a href="#" className='leading-8 text-[14px] hover:text-[#4b9e22] duration-700'>HomePage</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="copyright bg-[#f9f9f9] border-t-2 py-[26px]">
                    <div className="container">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full lg:w-6/12 md:w-6/12 lg:text-left md:text-left">
                                <p className="text-copyright text-[14px]">
                                    © Copyright 2023 |
                                    <a href="#" className='underline_hover'>  Fiuce</a> By
                                    <a href="#" className='underline_hover text-[#6c6c6c]'> ShopiLaunch.</a>
                                    <a href="#"> Powered by Shopify.</a>
                                </p>
                            </div>
                            <div className="w-full lg:w-6/12 md:w-6/12 lg:text-right md:text-right">
                                <img src={require('../image/logoo-removebg-preview.webp')} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer
