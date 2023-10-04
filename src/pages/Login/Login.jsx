import React from 'react';

const Login = () => {
    return (
        <div className='m-7 mt-24'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login Now!</h1>
                    </div>

                    <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-white card-body">
                        <form>
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Enter Phone Number" name="phone" className="bg-white w-full input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="bg-white w-full input input-bordered " required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-success glass text-white">Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;