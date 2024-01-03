import React from 'react';
import OwlCarousel from 'react-owl-carousel';

function Blog() {
    return (
        <>
            <section className='pt-20 pb-12'>
                <div className="container">
                    <div className="text-center pb-[40px]">
                        <h3 className='title_heading font-medium text-[24px] leading-tight tracking-[1px] relative inline-block pb-[10px]'>OUR BLOGS</h3>
                    </div>

                    <div className="blogs">
                        <OwlCarousel className='owl-theme' loop margin={20} nav responsive={{
                            '0': {
                                items: 1,
                            },
                            '767': {
                                items: 2,
                            },
                            '992': {
                                items: 3,
                            }
                        }}>
                            <div className='item'>
                                <div className="relative">
                                    <a href="#">
                                        <img src={require('../image/blog6.webp')} alt="" />
                                    </a>
                                    <div className="date">
                                        <span className='day text-[14px] block'>13</span>
                                        <span className='text-[10px] block pt-[4px] tracking-[.3rem]'>FEB</span>
                                    </div>
                                    <div className="info-blog text-center pt-[20px]">
                                        <a href="#" className='text-[16px] font-medium leading-6 text-[#83868c]'>NEWS</a>
                                        <h4 className='pt-[5px] title-blog'>
                                            <a href="#">Latest News Are On Top All Times</a>
                                        </h4>
                                        <p className='text-[16px] text-[#83868c]'>What Is Your Favorite Non-Premium Designer Bag? I got my first premium designer bag when I was in middle school. It was...</p>
                                    </div>
                                </div>
                            </div>

                            <div className='item'>
                                <div className="relative">
                                    <a href="#">
                                        <img src={require('../image/blog5.webp')} alt="" />
                                    </a>
                                    <div className="date">
                                        <span className='day text-[14px] block'>13</span>
                                        <span className='text-[10px] block pt-[4px] tracking-[.3rem]'>FEB</span>
                                    </div>
                                    <div className="info-blog text-center pt-[20px]">
                                        <a href="#" className='text-[16px] font-medium leading-6 text-[#83868c]'>NEWS</a>
                                        <h4 className='pt-[5px] title-blog'>
                                            <a href="#">What we need to know</a>
                                        </h4>
                                        <p className='text-[16px] text-[#83868c]'>What Is Your Favorite Non-Premium Designer Bag? I got my first premium designer bag when I was in middle school. It was...</p>
                                    </div>
                                </div>
                            </div>

                            <div className='item'>
                                <div className="relative">
                                    <a href="#">
                                        <img src={require('../image/blog4.webp')} alt="" />
                                    </a>
                                    <div className="date">
                                        <span className='day text-[14px] block'>13</span>
                                        <span className='text-[10px] block pt-[4px] tracking-[.3rem]'>FEB</span>
                                    </div>
                                    <div className="info-blog text-center pt-[20px]">
                                        <a href="#" className='text-[16px] font-medium leading-6 text-[#83868c]'>NEWS</a>
                                        <h4 className='pt-[5px] title-blog'>
                                            <a href="#">The most useful things for you</a>
                                        </h4>
                                        <p className='text-[16px] text-[#83868c]'>What Is Your Favorite Non-Premium Designer Bag? I got my first premium designer bag when I was in middle school. It was...</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
