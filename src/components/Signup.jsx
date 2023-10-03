import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
const Signup = () => {
    return (
        <div className='m-7 mt-20'>
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Please Register!</h1>
                    </div>

                    <div className="card mx-9 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-body">
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
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input type="date" placeholder="Select Date of Birth" name='dob' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Enter Phone Number" name='phone' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered " required />
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already Have an account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Register</button>
                                    <div className="divider">OR</div>
                                </div>

                                <div className="form-control">
                                    <button className="btn btn-primary text-white"><FaGoogle className='text-xl'></FaGoogle></button>
                                </div>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;