import { Button, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetching data from API
                const response = await axios.get('http://localhost:5000/banner');
                setData(response.data);  // Set the fetched data to state
                setLoading(false);  // Set loading to false after data is fetched
            } catch (err) {
                setError(err.message);  // Set error if request fails
                setLoading(false);  // Set loading to false even if there's an error
            }
        };

        fetchData();
    }, []);  // Empty dependency array means this effect runs once on mount

    // Conditional rendering based on loading/error state
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <div>

            <div className="b-10 ">
                <Carousel slideInterval={5000} className='h-40 lg:h-72 '>
                    {
                        data.map(ban => <div className='relative'>
                          <div className='mx-auto flex justify-center items-center'>
                          <img src={ban.image} alt="" />
                          </div>

                            <div className='absolute top-2 lg:top-20 left-0 w-full h-full  flex items-center justify-center '>
                                
                                <div className='p-2 md:p-5 text-xs md:text-base flex items-center justify-center bg-fuchsia-400 bg-opacity-50'>
                                    <div>
                                   
                                    <Link to={`product/${ban.code}`} className=' w-auto'><Button size="xs" outline gradientDuoTone="tealToLime">
                                       Details
                                    </Button></Link></div>
                                </div>


                            </div>
                        </div>)
                    }
                </Carousel>
            </div>
        </div>
    );
};

export default Header;