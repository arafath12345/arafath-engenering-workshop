import React from 'react';
import Nav_bar from '../Nab_bar/Nav_bar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Nav_bar></Nav_bar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;