import React from 'react'

function Login_Register() {

    return (
        <>

            <section>
                <div className="login_regester pb-[100px]">
                    <div className="container container-v2">
                        <div className="flex flex-wrap justify-content-between">
                            <div className="w-full lg:w-5/12 register pt-24">

                                <h1 className="text-lg font-semibold pb-12 title_login text-center"><i className="mr-3 ti-pencil-alt"></i>REGISTER</h1>
                                <form>
                                    <div className="form-group flex flex-wrap mb-4">
                                        <label for="staticEmail" className="w-full sm:w-3/12 col-form-label">Email address</label>
                                        <div className="w-full sm:w-9/12">
                                            <input type="email" placeholder="Email address" className="form-control" name="customer[email]" required="" />
                                        </div>
                                    </div>
                                    <div className="form-group flex flex-wrap">
                                        <label for="inputPassword" className="w-full sm:w-3/12 col-form-label">Password</label>
                                        <div className="w-full sm:w-9/12">
                                            <input type="password" className="form-control" name="customer[password]" placeholder="Password" required="" />
                                        </div>
                                    </div>
                                    <div className="text-center mt-12">
                                        <button className="btn btn-dark" value="register">
                                            register
                                        </button>
                                    </div>
                                </form>
                                <div className="forgot_pass mt-6 text-center">
                                    <a href="/shopNow" className='text-sm hover:text-[#4b9e22]'>Return to Store</a>
                                </div>
                            </div>

                            <div className="w-full lg:w-1/12"></div>

                        
                            <div className="w-full lg:w-5/12 login pt-24">
                                <div className="CustomerLoginForm">
                                    <h1 className="text-lg font-semibold pb-12 title_login text-center"><i className="mr-3 ti-user"></i>LOGIN</h1>
                                    <form>
                                        <div className="form-group flex flex-wrap mb-4">
                                            <label for="staticEmail" className="w-full sm:w-3/12 col-form-label">Email adress </label>
                                            <div className="w-full sm:w-9/12">
                                                <input type="text" className="form-control" name="customer[email]" placeholder="Email adress" required="" />
                                            </div>
                                        </div>

                                        <div className="form-group flex flex-wrap">
                                            <label for="inputPassword" className="w-full sm:w-3/12 col-form-label">Password </label>
                                            <div className="w-full sm:w-9/12">
                                                <input type="password" className="form-control" placeholder="Password" name="customer[password]" required="" />
                                            </div>
                                        </div>

                                        <div className="text-center mt-12">
                                            <button className="btn btn-dark" value="Log In">
                                                Log In
                                            </button>
                                        </div>
                                        <div className="forgot_pass_form mt-6 flex justify-center">
                                            <div className="leftx pe-6">
                                                <a href="/shopNow" className='text-sm hover:text-[#4b9e22]'>Return to Store</a>
                                            </div>


                                            <div className="rightx">
                                                <a href="#recover" className="RecoverPassword text-sm hover:text-[#4b9e22]">Forgot your password?</a>
                                            </div>

                                        </div>
                                    </form>
                                </div>


                                <form id='recover'>
                                    <div className="RecoverPasswordForm" style={{ display: 'none' }}>
                                        <div className="block-login">
                                            <h2 className="title24 text-center title-form-account"><i className="mr-3 ti-reload"></i>Reset your password</h2>
                                            <div className="form-group row">
                                                <label className="col-sm-3">Email adress</label>
                                                <div className="col-sm-9">
                                                    <input type="email" className="form-control" placeholder="Email adress" name="customer[email]" required="" />
                                                </div>
                                            </div>
                                            <div className="text-center mt-5">
                                                <input type="submit" className="register-button" value="Submit" />
                                            </div>
                                            <div className="table-custom create-account">
                                                <div className="text-center mt-4">
                                                    <a className="HideRecoverPasswordLink" style={{ cursor: 'pointer' }}>Cancel</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Login_Register
