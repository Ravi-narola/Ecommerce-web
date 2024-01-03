import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CheckEmail() {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const Navigate = useNavigate()

    const patt3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError('');
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
        } else {
            axios.post('http://localhost:2200/users/check_email', {
                email: email,
            })
                .then(function (response) {
                    console.log(response.data);
                    localStorage.setItem('token', response.data.token);
                    if (response.data.status === "success") {
                        Navigate("/forgot_password")
                    }
                    else {
                        Navigate("/");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    return (
        <>
            <section className="bg-gray-200">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full h-[500px] bg-white shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-base py-8 text-center leading-tight tracking-[3px] font-medium text-gray-900">
                                FORGOT YOUR PASSWORD
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
                                <button type="submit" className="w-full h-14 text-white bg-black hover:bg-[#4b9e22] duration-300 font-medium tracking-widest text-[14px] px-5 py-2.5 text-center">CONTINUE</button>
                                <div className="text-sm font-light text-center p-3 bg-[#f2f2f2]">
                                    <Link to="/" className="font-medium hover:text-[#4b9e22]">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckEmail;
