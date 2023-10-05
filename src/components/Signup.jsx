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

                    <div className="card mx-9 flex-shrink-0 w-full max-w-[650px] shadow-2xl bg-white card-body">
                        <form className='w-[100%]'>
                            <div className="flex justify-between w-[100%] flex-wrap">
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="bg-white input input-bordered" required />
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Date of Birth</span>
                                    </label>
                                    <input type="date" placeholder="Select Date of Birth" name='dob' className="bg-white input input-bordered" required />
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" placeholder="Enter Phone Number" name='phone' className="bg-white input input-bordered" required />
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name="email" className="bg-white input input-bordered" />
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="bg-white input input-bordered " required />
                                </div>
                                <div className="form-control w-[45%]">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" placeholder="Confirm password" name='confirm-password' className="bg-white input input-bordered " required />
                                  
                                </div>
                               

                                {/* <div className="form-control">
                                    <button className="btn glass bg-success text-white"><FaGoogle className='text-xl'></FaGoogle></button>
                                </div> */}
                            </div>
                            <div className="form-control mt-6">
                                    <button className="btn glass bg-success text-white">Register</button>
                                    <label className="label flex justify-center">
                                        <Link to='/login' className="label-text-alt link link-hover">Already Have an account? Login</Link>
                                    </label>
                                    {/* <div className="divider">OR</div> */}
                                </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Signup;