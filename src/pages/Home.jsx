import React, { useContext } from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';
const Home = () => {
    const loadedJuteCrafts = useLoaderData();

    const { loading } = useContext(AuthContext)
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    return (
        <div className=''>
            <Navbar />
            <Banner></Banner>
            <div className='mt-28'>
                <h1 className='text-center md:text-3xl font-bold '>
                    <Typewriter
                        words={['All Jute and Craft', 'Welcome To Unice Crafts ', 'Enjoy coding!']}
                        loop={5}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-10'>
                    {
                        loadedJuteCrafts.map((juteCraft) => (
                            <div key={juteCraft._id} className='flex justify-center'>
                                <div className='w-full h-96 rounded-xl shadow-xl'>
                                    <img className='w-full h-3/5 rounded-t-2xl' src={juteCraft.photo} alt="" />
                                    <div className='px-5 '>
                                        <h1 className='md:text-2xl text-xl pt-4 font-bold'>{juteCraft.name}</h1>
                                        <div className='flex justify-between'>
                                            <p className='md:text-lg  font-semibold'>Status:{juteCraft.stockStatus}</p>
                                            <p className='md:text-lg font-semibold'>Price:{juteCraft.price}$</p>
                                        </div>

                                        <p className='md:text-lg font-semibold flex items-center'>
                                            Product Rating:
                                            {[...Array(Math.round(juteCraft.rating))].map((_, index) => (

                                                <FaStar key={index} className="text-yellow-500 ml-1" />
                                            ))}
                                        </p>
                                        <div className='flex justify-end '>

                                            <Link to={`/viewDetails/${juteCraft._id}`}

                                                className='btn btn-active'>View Detail</Link>
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
