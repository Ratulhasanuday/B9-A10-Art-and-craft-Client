import React, { useState, useEffect } from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Banner from './Banner';

const Home = () => {
   

    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <Banner></Banner>                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
