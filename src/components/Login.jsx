import React from 'react';

const Login = () => {
    return (
        <div className='m-7'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Login Now!</h1>
                    </div>

                    <div className="card my-3 mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
                        <form>
                            <div className="">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Enter Phone Number" name="phone" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Login</button>
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