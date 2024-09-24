import React from 'react';
import Carder from '../../Share/Card/Carder'
import { useLoaderData } from 'react-router-dom';


const Card_items = () => {
    const data = useLoaderData();
    return (
        <div>
            <div className='flex justify-center items-center'>

                <img src={data.image} alt="" />

            </div>
        </div>
    );
};

export default Card_items;