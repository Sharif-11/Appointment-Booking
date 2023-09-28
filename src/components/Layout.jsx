import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='px-2'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;