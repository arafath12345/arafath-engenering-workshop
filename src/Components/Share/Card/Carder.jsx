import React from 'react';
import { Button, Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Carder = ({ info }) => {
  console.log(info)
  return (
    <div>


      <Card className="max-w-sm">
        <img className='max-h-48' src={info.image} alt="" />
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {info.name}
        </h5>
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Code: {info.code}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className='text-fuchsia-300'>Category:</span> {info.category}
        </p>
        {/* <Link to={`product/${ban.code}`}> */}
        <Link to={`carder/${info.code}`} className=' w-auto'>
          <Button>
            Read more
            <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          </Link>
      </Card>

    </div>
  );
};

export default Carder;