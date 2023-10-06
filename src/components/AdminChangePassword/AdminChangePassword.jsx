import React from 'react';
import "./AdminChangePassword.css"
import "../AdminProfileSettings/AdminProfileSettings"
const AdminChangePassword = () => {
    return (
        <div className='card'>
            <form>
                <div className='user-details'>
                    {/* <div className='input-box'>
                        <label htmlFor="Old_password">Old Password</label>
                        <input type="password" id="old_password" placeholder="Give your old Password" className='bg-white' />
                    </div> */}

                    <div className='input-box'>
                        <label htmlFor="New_password">New Password</label>
                        <input type="password" id="new_password" placeholder="Give a new Password" className='bg-white' />
                    </div>

                    <div className='input-box'>
                        <label htmlFor="confirm_password">Confirm Password</label>
                        <input type="password" id="confirm_password" placeholder="Confirm your new Password" className='bg-white' />
                    </div>
                </div>

                <button type="submit" className='btn glass bg-success text-white'>Save Changes</button>
            </form>
        </div>
    );
};

export default AdminChangePassword;