import { Button, Carousel } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



const Header = () => {
    // Define the data fetching function for the banner data
    const fetchBannerData = async () => {
        const response = await axios.get('https://s-hop-murex.vercel.app/banner');
        return response.data;
    };
    

    // Use the useQuery hook from React Query
    const { data=[], error, isLoading, isError } = useQuery({
      queryKey: ['bannerData'],  // Ensure the correct queryKey format
      queryFn: fetchBannerData,   // Pass the fetch function here
    });
    // console.log(data)
    // Conditional rendering based on the query's loading and error state
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;  // Display the error message

    return (
        <div>
            <div className="b-10 ">
                <Carousel slideInterval={5000} className='h-40 lg:h-72'>
                    {data?.map(ban => (
                        <div className='relative' key={ban.code}>  {/* Add key here */}
                            <div className='mx-auto flex justify-center items-center'>
                                <img src={ban.image} alt="" />
                            </div>
                            <div className='absolute top-2 lg:top-20 left-0 w-full h-full flex items-center justify-center'>
                                <div className='p-2 md:p-5 text-xs md:text-base flex items-center justify-center bg-fuchsia-400 bg-opacity-50'>
                                    <div>
                                        <Link to={`product/${ban.code}`} className=' w-auto'>
                                            <Button size="xs" outline gradientDuoTone="tealToLime">
                                                Details
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Header;
