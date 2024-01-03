import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ForgotPass() {

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate()

  const patt4 = /^(?=.*[@#$%^&\-+=()])(?=\S+$).{8,20}$/;

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setNewPasswordError('');
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword === '') {
      setNewPasswordError('Enter a new password');
      return false;

    } else if (patt4.test(newPassword) === false) {
      setNewPasswordError('Enter 8-20 characters');
      return false;

    }

    if (confirmPassword === '') {
      setConfirmPasswordError('Confirm your password');
      return false;

    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return false;
    }

    axios.post('http://localhost:2200/users/forgot', {
      password: confirmPassword
    })
      .then(function (response) {
        console.log(response.data);

        if (response.data.status === "success") {
          Navigate("/")
        }
        // else {
        //   Navigate("/");
        // }
      })
      .catch(function (error) {
        console.log(error);
      })

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

              <h1 className="text-base py-8 text-center leading-tight tracking-[3px] font-medium text-gray-900">
                RESET YOUR PASSWORD
              </h1>
              
              <form className="space-y-4 md:space-y-6" onSubmit={(e) => handleSubmit(e)}>

                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    placeholder="New Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block h-14 w-full p-2.5"
                    onChange={handleNewPasswordChange}
                  />
                  <i className="eye absolute right-3 top-4" onClick={togglePasswordVisibility}>{show()}</i>
                  <span className="error text-red-700">{newPasswordError}</span>
                </div>

                <div className='relative'>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block h-14 w-full p-2.5"
                    onChange={handleConfirmPasswordChange}
                  />
                  <i className="eye absolute right-3 top-4" onClick={togglePasswordVisibility}>{show()}</i>
                  <span className="error text-red-700">{confirmPasswordError}</span>
                </div>

                <button type="submit" className="w-full h-14 text-white bg-black hover:bg-[#4b9e22] duration-300 font-medium tracking-widest text-[14px] px-5 py-2.5 text-center">RESET PASSWORD</button>
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

export default ForgotPass
