import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Register() {

    const initialvalue = {
        email: '',
        password: '',
    }

    const [data, setData] = useState(initialvalue);
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const Navigate = useNavigate()

    const patt3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const patt4 = /^(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/;

    const handleonChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
        setEmailError('');
    };

    const Registration = (e) => {
        e.preventDefault();

        if (data.email === '') {
            setEmailError('Enter Your Email');
            return false;
        }
        else if (patt3.test(data.email) === false) {
            setEmailError('Enter Valid Email');
            return false;
        }
        else if (data.password === '') {
            setPasswordError('Enter Your Password');
            return false;
        }
        else if (patt4.test(data.password) === false) {
            setPasswordError('Enter 8-20 characters');
            return false;
        }
        else {
            axios.post('http://localhost:2200/users/register', {
                email: data.email,
                password: data.password,
            })
                .then(function (response) {
                    console.log(response.data);
                    if (response.data.status === "success") {
                        Navigate("/")
                    }
                    else {
                        Navigate("register unsuccess");
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
            <section className="bg-gray-200">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full h-[500px] bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <a href="#" className="flex items-center justify-center pb-5 border-b">
                                <img src={require('../image/logo.webp')} alt="logo" className='w-[185px]' />
                            </a>
                            <h1 className="text-[20px] text-center leading-tight tracking-tight text-gray-900">
                                Please fill in this form to create an account.
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={(e) => Registration(e)}>
                                <div>
                                    <input
                                        type="email"
                                        name='email'
                                        value={data.email}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full h-14 p-2.5"
                                        placeholder="Email adress"
                                        onChange={handleonChange}
                                    />
                                    <span className="error text-red-700">{emailError}</span>
                                </div>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={data.password}
                                        placeholder="Password"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block h-14 w-full p-2.5"
                                        onChange={handleonChange}
                                    />
                                    <i className="eye absolute right-3 top-4" onClick={togglePasswordVisibility}>{show()}</i>
                                    <span className="error">{passwordError}</span>
                                </div>
                                <button type="submit" className="w-full h-14 text-white bg-black hover:bg-[#4b9e22] duration-300 font-medium tracking-widest text-[14px] px-5 py-2.5 text-center">REGISTER</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register;
