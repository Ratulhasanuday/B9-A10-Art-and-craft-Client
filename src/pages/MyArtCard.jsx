
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaStar } from 'react-icons/fa';
import Footer from './Shared/Footer';
const MyArtCard = () => {
    const loadedJuteCrafts = useLoaderData();
    const [juteCrafts, setJuteCrafts] = useState(loadedJuteCrafts);
    const { user,loading } = useContext(AuthContext)
   

    // Sorting function


    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-10'>
            {
                    juteCrafts.map((juteCraft) => (
                        // Only render the card if the logged-in user's email matches the card's email
                        user?.email === juteCraft.email && (
                            <div key={juteCraft._id} className='flex justify-center'>
                                <div className='w-full h-96 rounded-xl shadow-xl'>
                                    <img className='w-full h-3/5 rounded-t-2xl' src={juteCraft.photo} alt="myCard" />
                                    <div className='px-5 '>
                                        <h1 className='text-2xl pt-4 font-bold'>{juteCraft.name}</h1>
                                        <div className='flex justify-between'>
                                            <p className='text-lg font-semibold'>Status:{juteCraft.stockStatus}</p>
                                            <p className='text-lg font-semibold'>Price:{juteCraft.price}$</p>
                                        </div>

                                        <p className='text-lg font-semibold flex items-center'>
                                            Product Rating:
                                            {[...Array(Math.round(juteCraft.rating))].map((_, index) => (
                                                <FaStar key={index} className="text-yellow-500 ml-1" />
                                            ))}
                                        </p>
                                        <div className='flex justify-end '>
                                            <Link to={`/viewDetails/${juteCraft._id}`} className='btn btn-active'>View Detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyArtCard;