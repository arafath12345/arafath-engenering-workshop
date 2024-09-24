import React from 'react';
import Header from '../Header/Header';
import Worker from '../Worker/Worker';
import Card_items from '../Card_item/Card_items'
// import Card_items from '../Card_item/Card_items';
// import Carder from '../../Share/Card/Carder';

const Home = () => {
    return (
        <div>
            <div className='flex justify-center items-center mx-auto'>
            <Header></Header>
            </div>
           
            <Worker></Worker>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
          <Card_items></Card_items>
           </div>
            
        </div>
    );
};

export default Home;