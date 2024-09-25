import React from 'react';
import Nav_bar from '../Nab_bar/Nav_bar';
import { Outlet } from 'react-router-dom';
import Footer_in from '../Footer_in/Footer_in';

const Layout = () => {
    return (
        <div>
            <Nav_bar></Nav_bar>
            <Outlet></Outlet>
            <Footer_in></Footer_in>
            
        </div>
    );
};

export default Layout;