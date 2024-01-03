import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <>
            <section>
                <div className="banner">
                    <OwlCarousel className='owl-theme' loop margin={20} center responsive={{
                        '0': {
                            items: 1,
                        },
                        '767': {
                            items: 1,
                        },
                        '992': {
                            items: 1,
                        }
                    }}>
                        <div className='item'>
                            <div className="relative">
                                <Link to="/shopNow">
                                    <img src={require('../image/s1.webp')} alt="" />
                                </Link>
                                <div className="slider-content text-white absolute top-[50%] left-[12%] translate-y-[-50%]">
                                    <h4 className='text-[16px] pb-4 font-medium tracking-[4px]'>Style Destination</h4>
                                    <h3 href="#" className='text-[30px] lg:text-[80px] sm:text-[55px] pb-4 font-semibold'>Clean Fresh Fruit</h3>
                                    <h3 className='text-[20px] font-medium pb-4 leading-normal'>
                                        From planter materials to style options, discover which
                                        <br />
                                        planter is best for your space.
                                    </h3>
                                    <Link to="/shopNow" className='btn1 inline-block tracking-[2px] mt-[30px] text-[14px] leading-none border py-4 px-10 font-medium'>SHOP NOW</Link>
                                </div>
                            </div>
                        </div>

                        <div className='item'>
                            <div className="relative">
                                <Link to="/shopNow">
                                    <img src={require('../image/s2.webp')} alt="" />
                                </Link>
                                <div className="slider-content absolute top-[50%] left-[12%] translate-y-[-50%]">
                                    <h4 className='text-[16px] pb-4 font-medium tracking-[4px]'>Style Destination</h4>
                                    <h3 href="#" className='text-[30px] lg:text-[80px] sm:text-[55px] pb-4 font-semibold'>Smoothie Delicious</h3>
                                    <h3 className='text-[20px] font-medium pb-4 leading-normal'>
                                        From planter materials to style options, discover which
                                        <br />
                                        planter is best for your space.
                                    </h3>
                                    <Link to="/shopNow" className='btn2 inline-block tracking-[2px] text-[14px] leading-none py-4 px-10 font-medium'>SHOP NOW</Link>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}

export default Banner;
