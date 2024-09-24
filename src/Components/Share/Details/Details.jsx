import React from 'react';
import { useLoaderData,  } from 'react-router-dom';

const Details = () => {
    const data = useLoaderData();


    return (
        <div>
            <div className='flex justify-center items-center'>

                <img src={data.image} alt="" />

            </div>
        </div>
    );

};

export default Details;