import { Footer } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer_in = () => {
    return (
        <div>
            <div className='flex justify-center items-center gap-10 bg-blue-400 text-white'>
            <Link>Contract</Link>
            <Link>About </Link>
            </div>
        </div>
    );
};

export default Footer_in;