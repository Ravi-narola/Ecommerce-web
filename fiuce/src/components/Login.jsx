import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [text, setText] = useState('');
    const Navigate = useNavigate()

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

    const show = () => {
        if (showPassword) {
            return <i className="fa-regular fa-eye-slash"></i>;
        } else {
            return <i className="fa-regular fa-eye"></i>;
        }
    };


    return (
        <>

            {/* <section className="bg-gray-200">
                <div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative w-full max-w-2xl max-h-full">

                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="staticModal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
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
                                            <i className="eye absolute right-3 top-4" onClick={togglePasswordVisibility}>{show()}</i>
                                            <span className="error">{passwordError}</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label for="remember" className="text-gray-500">Remember me</label>
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
            </section> */}
        </>
    )
}

export default Login;
