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
    const { data=[], error, isLoading, isError } = useQuery({
      queryKey: ['bannerData'],  // Ensure the correct queryKey format
      queryFn: fetchBannerData,   // Pass the fetch function here
    });
    console.log(data)
    // Conditional rendering based on the query's loading and error state
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;  // Display the error message

    return (
        <div>
                                    
            <Share_hdr name="আমাদের কাজগুলো "></Share_hdr>

        </div>
    );
};

export default Worker;