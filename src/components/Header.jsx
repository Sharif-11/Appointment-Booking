import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar flex justify-between px-9">
                <div className="navbar-start">
                    <NavLink to='/home' className="btn btn-ghost normal-case text-xl">MeetDoctor</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal" >
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/schedule">Schedule</NavLink></li>
                        <li><NavLink to="/appointment">Appointment</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/admin">Admin</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;