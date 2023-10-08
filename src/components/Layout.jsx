import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Layout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <main className="flex-grow">
                <Header></Header>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;