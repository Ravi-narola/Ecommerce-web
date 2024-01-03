import React from 'react'
import { Link } from 'react-router-dom';

function Breadcrumb() {
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
                                    <Link to="/" className="inline-flex items-center text-[16px] text-white">
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
        </>
    )
}

export default Breadcrumb;
