import React from 'react';
import "./AdminProfileSettings.css"
const AdminProfileSettings = () => {
    return (
            <div className="container">
                <div className="title">Basic Information</div>
                <div className="change-avatar">
                    <div className="profile-img">
                        <img
                            src="https://doccure-laravel.dreamguystech.com/template/public/assets/img/doctors/doctor-thumb-02.jpg"
                            height="110"
                            alt="User Image"
                            className="h-1/2 w-1/2"
                        />
                    </div>

                    <div className="upload-img">
                        <div className="">
                            <span>
                                <i className="fa fa-upload"></i>
                                <label htmlFor="file_upload" className='btn bg-success glass text-white'>Upload Photo</label>
                            </span>
                            <input type="file" className="bg-white upload" id="file_upload" />
                        </div>
                    </div>
                </div>

                <div className="content">
                    <form action="#">
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" placeholder="Enter your name" required className='bg-white '/>
                            </div>
                            {/* <div className="input-box">
                                <span className="details">Username</span>
                                <input type="text" placeholder="Enter your username" required className='bg-white '/>
                            </div> */}
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Enter your email" required className='bg-white '/>
                            </div>
                            <div className="input-box">
                                <span className="details">Phone Number</span>
                                <input type="text" placeholder="Enter your number" required className='bg-white '/>
                            </div>
                            <div className="input-box">
                                <span className="details">Password</span>
                                <input
                                    type="text"
                                    placeholder="Enter your password"
                                    required
                                    className='bg-white'
                                />
                            </div>
                            <div className="input-box">
                                <span className="details">Confirm Password</span>
                                <input
                                    type="text"
                                    placeholder="Confirm your password"
                                    required
                                    className='bg-white '
                                />
                            </div>
                        </div>
                        <div className="gender-details">
                            <input type="radio" name="gender" id="dot-1" className='bg-white '/>
                            <input type="radio" name="gender" id="dot-2" className='bg-white '/>
                            <input type="radio" name="gender" id="dot-3" className='bg-white '/>
                            <span className="gender-title">Gender</span>
                            <div className="category">
                                <label htmlFor="dot-1">
                                    <span className="dot one"></span>
                                    <span className="gender">Male</span>
                                </label>
                                <label htmlFor="dot-2">
                                    <span className="dot two"></span>
                                    <span className="gender">Female</span>
                                </label>
                                <label htmlFor="dot-3">
                                    <span className="dot three"></span>
                                    <span className="gender">Prefer not to say</span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default AdminProfileSettings;