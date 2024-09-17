import React from 'react';

const Share_hdr = ({ name }) => {
    return (
        <div className='flex justify-center items-center py-2 md:py-8'>
            <div className='w-2/3  justify-center '>
                <div className='flex justify-center items-center'>
                    <hr className='h-1 w-3/4 bg-gray-400 border-none' />
                </div>
                <div className='flex py-2 justify-center items-center'>
                    <h1 className='font-semibold text-lime-300'>{name}</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <hr className='h-1 w-3/4 bg-gray-400 border-none' />
                </div>

            </div>
        </div>
    );
};

export default Share_hdr;