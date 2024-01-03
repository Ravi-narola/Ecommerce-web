import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {

    const [showSearch, setShowSearch] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const Navigate = useNavigate()
    const [cart, setCart] = useState([]);

    const handelSearch = () => {
        setShowSearch(!showSearch)
    }

    const show = () => {
        if (showSearch) {
            return <input type="search" placeholder='search' />
        } else {
            return <i className="fa-solid fa-magnifying-glass"></i>
        }
    }


    useEffect(() => {
        var token = localStorage.getItem('token');
        axios.get(`http://localhost:2200/cart/all`, {
            headers: { "Authorization": `${token}` }
        })
            .then(response => {
                console.log(response.data.data);
                setCart(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [])

    const handleRemoveFromCart = (id) => {
        var token = localStorage.getItem('token');
        axios.delete(`http://localhost:2200/cart/delete/${id}`, {
            headers: { "Authorization": token }
        })
            .then(response => {
                console.log(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const totalChange = () => {
        const totalPrice = cart.reduce((total, item) => total + item.total_price, 0);
        return totalPrice.toFixed(2);
    };


    const patt3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const patt4 = /^(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            setEmailError('Enter Your Email');
            return false;
        }
        else if (patt3.test(email) === false) {
            setEmailError('Enter Valid Email');
            return false;
        }
        else if (password === '') {
            setPasswordError('Enter Your Password');
            return false;
        }
        else if (patt4.test(password) === false) {
            setPasswordError('Enter 8-20 characters');
            return false;
        }
        else {
            axios.post('http://localhost:2200/users/', {
                email: email,
                password: password
            })
                .then(function (response) {
                    console.log(response.data.token);
                    if (response.data.status === "success") {
                        Navigate("/")
                        console.log(response.data)
                        localStorage.setItem('token', response.data.token);
                    }
                    else {
                        Navigate("Incurrent email or password");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const show1 = () => {
        if (showPassword) {
            return <i className="fa-regular fa-eye-slash"></i>;
        } else {
            return <i className="fa-regular fa-eye"></i>;
        }
    };

    return (
        <>
            <header id='header' className='main-header py-[25px]'>
                <div className="container px-2">
                    <div className="flex flex-wrap items-center justify-between">
                        <div className="w-2/12 order-2 lg:order-1">
                            <div className="logo">
                                <Link to="/">
                                    <img src={require('../image/logo.webp')} alt="logo" className='w-[185px]' />
                                </Link>
                            </div>
                        </div>
                        <div className="w-8/12 order-1 lg:order-2">
                            <div className="menu lg:block">
                                <nav>
                                    <ul className='navbar nav flex flex-wrap items-center justify-center'>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/" className='nav-link'>Home</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/shopNow" className='nav-link'>Shop</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/cart" className='nav-link'>Cart</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="#" className='nav-link'>Blogs</Link>
                                        </li>
                                        <li className='nav-item px-[20px] text-[16px] font-medium'>
                                            <Link to="/addProduct" className='nav-link'>Add Products</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <button className="menu-toggle"><span></span> <span></span> <span></span></button>
                            </div>
                        </div>
                        <div className="w-2/12 order-3 lg:order-3">
                            <div className="cart-login-search">
                                <ul className='flex items-center justify-end'>
                                    <li className='px-[16px]'>
                                        <a href="#" className="text-lg" onClick={handelSearch}>{show()}</a>
                                    </li>
                                    <li className='px-[16px] hidden lg:block'>
                                        <button className="text-lg" data-modal-target="staticModal" data-modal-toggle="staticModal" type="button">
                                            <i className="fa-regular fa-user"></i>
                                        </button>
                                    </li>
                                    <li className='px-[16px] hidden lg:block'>
                                        <Link to="/wishlist" className="text-lg"><i className="fa-regular fa-heart"></i></Link>
                                    </li>
                                    <li className='px-[16px]'>
                                        <button className="text-lg" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
                                            <i className="fa-solid fa-bag-shopping"></i>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/*================= Login Section ==================*/}

            <section className="bg-gray-200">
                <div id="staticModal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative w-full max-w-2xl max-h-full">

                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <a href="#" className="flex items-center justify-center pb-5 border-b">
                                        <img src={require('../image/logo.webp')} alt="logo" className='w-[185px]' />
                                    </a>
                                    <h1 className="text-[20px] text-center leading-tight tracking-tight text-gray-900">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleSubmit(e)}>
                                        <div>
                                            <input
                                                type="email"
                                                value={email}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                                                placeholder="Email adress"
                                                onChange={handleEmailChange}
                                            />
                                            <span className="error text-red-700">{emailError}</span>
                                        </div>
                                        <div className='relative'>
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                value={password}
                                                placeholder="Password"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block h-14 w-full p-2.5"
                                                onChange={handlePasswordChange}
                                            />
                                            <i className="eye absolute right-3 top-4" onClick={togglePasswordVisibility}>{show1()}</i>
                                            <span className="error">{passwordError}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                                </div>
                                            </div>
                                            <Link to="/check_email" className="text-sm font-medium text-[#c5c4c4] hover:text-[#4b9e22]">Forgot your password?</Link>
                                        </div>
                                        <button type="submit" className="w-full h-14 text-white bg-black hover:bg-[#4b9e22] duration-300 font-medium tracking-widest text-[14px] px-5 py-2.5 text-center">LOG IN</button>
                                        <p className="text-sm font-light text-center p-3 bg-[#f2f2f2]">
                                            Don’t have an account yet? <Link to="/register" className="font-medium text-[#c5c4c4] hover:text-[#4b9e22]">Register now</Link>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*================= cart Section ==================*/}

            <section>

                <div id="drawer-right-example" className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-[#f7f7f7] w-96" tabIndex="-1" aria-labelledby="drawer-right-label">
                    <div className="top-cart-header]">
                        <h5 id="drawer-right-label" className="text-xl text-center mb-4 font-medium">
                            Shopping Cart
                        </h5>
                        <button type="button" data-drawer-hide="drawer-right-example" aria-controls="drawer-right-example" className="font-semibold hover:text-[#4b9e22] text-xl w-8 h-8 absolute top-2.5 left-2.5 inline-flex items-center justify-center" >
                            ✕<span className="sr-only">Close menu</span>
                        </button>
                        {/* <div className='counter-cart font-semibold absolute top-4 right-3.5 inline-flex items-center justify-center'>
                            <span>2</span>
                        </div> */}
                        <div className="border"></div>
                    </div>
                    <div className="mb-6 text-sm text-center">
                        <div className="relative max-h-full overflow-auto">
                            <div className="relative text-left overflow-hidden">
                                {
                                    cart.map((item, i) => (
                                        <ul>
                                            <li className='flex border-b relative py-5' key={i}>
                                                <div className="thumb_img w-1/4">
                                                    <Link>
                                                        <img src={item.thumb} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="product-details w-[70%] ps-5">
                                                    <h3 className='text-base mb-2'>
                                                        <Link className='hover:text-[#4b9e22]'>
                                                            {item.name}
                                                        </Link>
                                                    </h3>
                                                    <div className="product_info">
                                                        <div className="product_quantity text-base leading-6">QTY : {item.quantity}</div>
                                                        <div className="product_price"><span className='text-sm leading-6'>${item.price}</span></div>
                                                    </div>
                                                </div>
                                                <div className="product_remove w-[10%]">
                                                    <button className='hover:text-[#4b9e22]' onClick={() => handleRemoveFromCart(item._id)}>
                                                        <i className="fa fa-trash-o"></i>
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="top-cart-footer absolute bottom-0 w-[350px] bg-white">
                        <div className="sub_total h-14">
                            <span className='text-lg font-medium'>Total</span>
                            <span className='float-right font-semibold text-[#4b9e22] block w-auto'>${totalChange()}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Link to="/cart" className="px-6 py-4 text-sm font-medium text-center text-white bg-[#2a2a2a] hover:bg-[#4b9e22] duration-200">VIEW CART</Link>
                            <Link to='#' className="px-6 py-4 text-sm font-medium text-center text-white bg-[#111111] hover:bg-[#4b9e22] duration-200">CHECK OUT</Link>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Header;
