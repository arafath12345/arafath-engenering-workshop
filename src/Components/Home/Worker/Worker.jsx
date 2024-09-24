import React from 'react';
import Share_hdr from '../../Share/Header/Share_hdr';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
// import Card_items from '../Card_item/Card_items';
import Carder from '../../Share/Card/Carder';

const Worker = ({}) => {
    const fetchBannerData = async () => {
        const response = await axios.get('https://s-hop-murex.vercel.app/carder');
        return response.data;
    };

    // Use the useQuery hook from React Query
    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['carederData'],
        queryFn: fetchBannerData,
        initialData: [],  // Optional: provide an initial value if you expect data to be an array
    });

    // console.log(data);


    // Conditional rendering based on the query's loading and error state
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error?.message || "Something went wrong"}</p>;

    return (
        <div>
            <Share_hdr name="আমাদের কাজগুলো " />
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mx-auto md:mx-10 md:gap-10'>
                    {
                        data.map(dat => <Carder info={dat} ></Carder>)
                    }

                </div>
            </div>
        </div>

    );
};

export default Worker;
