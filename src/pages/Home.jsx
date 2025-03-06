import React, { useState, useEffect } from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const loadedJuteCrafts = useLoaderData();
    const [juteCrafts, setJuteCrafts] = useState(loadedJuteCrafts);

    return (
        <div className=''>
            <Navbar />
            <Banner></Banner>
            <div>
                <h1 className='text-center text-3xl font-bold mt-12'>All Jute and Craft</h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-10'>
                    {juteCrafts.map((juteCraft) => (
                        <div className='flex justify-center'>
                            <div className='w-full h-96 bg-gray-200 rounded-xl shadow-xl'>
                                <img className='w-full h-3/5 rounded-t-2xl' src={juteCraft.photo} alt="" />
                                <div className='px-5 '>
                                    <h1 className='text-2xl pt-4 font-bold'>{juteCraft.name}</h1>
                                    <div className='flex justify-between'>
                                        <p className='text-lg font-semibold'>Status:{juteCraft.stockStatus}</p>
                                        <p className='text-lg font-semibold'>Price:{juteCraft.price}$</p>
                                    </div>

                                    <p className='text-lg font-semibold'>
                                        Product Rating: {juteCraft.rating}
                                    </p>
                                    <div className='flex justify-end '>

                                        <Link className='btn btn-active'>View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
