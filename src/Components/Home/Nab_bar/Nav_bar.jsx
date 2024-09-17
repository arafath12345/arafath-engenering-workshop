import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';

const Nav_bar = () => {
    return (
        <div className=''>
            <Navbar fluid rounded >
                <Navbar.Brand >
                    <div className='flex  justify-between'>
                        <div className='bg-slate-600'>
                            <img className='h-8' src={logo} alt="" />
                        </div>

                    </div>

                </Navbar.Brand>
                <div className="flex md:order-2">

                    <Navbar.Toggle />
                </div>

                <Navbar.Collapse>
                    <Link to="/"> <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link></Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Nav_bar;