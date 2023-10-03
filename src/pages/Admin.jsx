import React from 'react';
import AdminNav from '../components/AdminNav/AdminNav'
import AdminBoard from '../components/AdminBoard'
import { Outlet } from 'react-router';
// import { Carousel, initTE } from "tw-elements";
const Admin = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-center pt-9 font-bold'>Admin Panel</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4 m-5">
                <AdminNav></AdminNav>
                <div className="p-4 border-2 row-span-2 col-span-2 rounded-lg">
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default Admin;