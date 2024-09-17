import React from 'react';
import Header from '../Header/Header';
import Worker from '../Worker/Worker';
import Carder from '../../Share/Card/Carder';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center mx-auto'>
            <Header></Header>
            </div>
           
            <Worker></Worker>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           <Carder></Carder>
           </div>
            
        </div>
    );
};

export default Home;