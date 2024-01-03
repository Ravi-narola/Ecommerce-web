import React from 'react'

function Collection() {
    return (
        <>
            <section className='mt-20'>
                <div className="container">
                    <div className="flex flex-wrap collection">
                        <div className="w-full md:w-4/12">
                            <div className="overflow-hidden relative banner-left">
                                <div className="box-img overflow-hidden hover:scale-110 duration-1000">
                                    <img src={require('../image/ba12.webp')} alt="" width={'100%'}  className='max-w-full h-auto'/>
                                </div>
                                <div className="b-contant absolute bottom-[55px] w-full px-[40px]">
                                    <div className="info">
                                        <p className='px-[15px] text-white leading-6 inline-block font-medium bg-black'>UP TO 30% OFF</p>
                                        <h3 className='text-[36px] font-medium leading-tight'>Fresh Fruit</h3>
                                        <a href="#" className='inline-block text-[16px] relative font-semibold pb-[5px] overflow-hidden btn-banner'>Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-full md:w-8/12">
                            <div className="flex flex-wrap">
                                <div className="w-full xl:w-4/12 lg:w-6/12  px-2 pb-2">
                                    <div className="col-item" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="box-img overflow-hidden hover:scale-110 duration-500">
                                            <a href="#"><img src={require('../image/ba4.jpg')} alt="" /></a>
                                        </div>
                                        <div className="item-title text-[20px] font-semibold hover:text-[#4b9e22] absolute bottom-4 left-6">
                                            <a href="#">Peach</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full xl:w-4/12 lg:w-6/12 hidden lg:block px-2 pb-2">
                                    <div className="col-item" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="box-img overflow-hidden hover:scale-110 duration-500">
                                            <a href="#"><img src={require('../image/ba6.jpg')} alt="" /></a>
                                        </div>
                                        <div className="item-title text-[20px] font-semibold hover:text-[#4b9e22] absolute bottom-4 left-6">
                                            <a href="#">Lemons</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full hidden xl:w-4/12 xl:block px-2 pb-2">
                                    <div className="col-item" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="box-img overflow-hidden hover:scale-110 duration-500">
                                            <a href="#"><img src={require('../image/ba2.jpg')} alt="" /></a>
                                        </div>
                                        <div className="item-title text-[20px] font-semibold hover:text-[#4b9e22] absolute bottom-4 left-6">
                                            <a href="#">Passion Fruit</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full xl:w-4/12 lg:w-6/12  px-2 pt-2">
                                    <div className="col-item" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="box-img overflow-hidden hover:scale-110 duration-500">
                                            <a href="#"><img src={require('../image/ba1.jpg')} alt="" /></a>
                                        </div>
                                        <div className="item-title text-[20px] font-semibold hover:text-[#4b9e22] absolute bottom-4 left-6">
                                            <a href="#">Mulberry</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full xl:w-4/12 lg:w-6/12 hidden lg:block px-2 pt-2">
                                    <div className="col-item" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="box-img overflow-hidden hover:scale-110 duration-500">
                                            <a href="#"><img src={require('../image/ba5.jpg')} alt="" /></a>
                                        </div>
                                        <div className="item-title text-[20px] font-semibold hover:text-[#4b9e22] absolute bottom-4 left-6">
                                            <a href="#">Strawberry</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full hidden xl:w-4/12 xl:block px-2 pt-2">
                                    <div className="col-item" style={{ width: '100%', display: 'inline-block' }}>
                                        <div className="box-img overflow-hidden hover:scale-110 duration-500">
                                            <a href="#"><img src={require('../image/ba3.jpg')} alt="" /></a>
                                        </div>
                                        <div className="item-title text-[20px] font-semibold hover:text-[#4b9e22] absolute bottom-4 left-6">
                                            <a href="#">Pomegranate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-20'>
                <div className="container">
                    <div className="rewards relative">
                        <div className="content-banner text-center">
                            <h3 className="title-banner text-[#ffffff] text-[40px] font-medium leading-none mb-5">Rewards just for shopping!</h3>
                            <p className="content text-[#ffffff]">Don’t forget to opt into Fashion News to have your offers and rewards delivered right to your inbox!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection
