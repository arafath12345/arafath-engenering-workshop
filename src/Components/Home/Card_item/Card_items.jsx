import React from 'react';
import Carder from '../../Share/Card/Carder'
import { useLoaderData } from 'react-router-dom';
import Share_hdr from '../../Share/Header/Share_hdr';


const Card_items = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='font-serif'>
            <div className='flex justify-center items-center'>

                <img src={data.image} alt="" />

            </div>
            <Share_hdr name={data.name}></Share_hdr>
           <div className='flex flex-col px-5 gap-5 justify-center items-center'>
           <h1 className=' text-xl '>Code: {data.code}</h1>
           <h1 className=' text-xl '>আমাদের ঠিকানাঃ কানাইপুর বাজার , ঢাকা খুলনা মহাসড়কের পাশে , করিম জুট মিলের পশ্বিম পাশে , কানাইপুর ফরিদপুর </h1>
           <h1 className=' text-xl '> মোবাইল নাম্বার: 01779863318 </h1>


           </div> 
        </div>
    );
};

export default Card_items;