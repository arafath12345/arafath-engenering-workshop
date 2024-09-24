import React from 'react';
import Share_hdr from '../../Share/Header/Share_hdr';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const Worker = () => {
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

    console.log(data);

    // Conditional rendering based on the query's loading and error state
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error?.message || "Something went wrong"}</p>;

    return (
        <div>
            <Share_hdr name="আমাদের কাজগুলো " />
        </div>
    );
};

export default Worker;
