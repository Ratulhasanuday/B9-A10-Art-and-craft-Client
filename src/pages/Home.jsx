import React, { useState, useEffect } from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Banner from './Banner';

const Home = () => {


    return (
        <div className=''>
            <Navbar />
            <div>

            <Banner></Banner>
            </div>
            <div className='container mx-auto'>
                <h2 className='text-5xl'>This card section </h2>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
