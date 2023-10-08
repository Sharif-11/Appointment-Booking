import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UserContext from '../Contexts/UserContext';

const Header = () => {
    const [user]=useContext(UserContext)
    console.log(user);
    return (
        <div className='mt-16'>
            <div className="navbar shadow-xl flex justify-between fixed top-0 w-full bg-[#f0f8ff] z-10">
                <div className="navbar-start">
                    <NavLink to='/home' className="btn btn-ghost normal-case text-xl">MeetDoctor</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal" >
                        <li className='mx-2'><NavLink to="/home">Home</NavLink></li>
                        <li className='mx-2'><NavLink to="/schedule">Schedule</NavLink></li>
                        <li className='mx-2'><NavLink to="/appointment">Appointment</NavLink></li>
                        <li className='mx-2'><NavLink to="/about">About</NavLink></li>
                      {  user===null && <li className='mx-2'><NavLink to="/login">Login</NavLink></li>}
                       { user===null &&  <li className='mx-2'><NavLink to="/signup">Signup</NavLink></li>}
                       { user!==null &&  <li className='mx-2'><NavLink to="/logout">Logout</NavLink></li>}

                        <li className='mx-2'><NavLink to="/admin">Admin</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;