import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';

const AllCard = () => {
    const loadedJuteCrafts = useLoaderData();
    const [juteCrafts, setJuteCrafts] = useState(loadedJuteCrafts);
    const { loading } = useContext(AuthContext)
    const [sortBy, setSortBy] = useState('name'); // Default sort by 'name'

    // Sorting function
    const sortJuteCrafts = (criteria) => {
        const sortedJuteCrafts = [...juteCrafts];
        sortedJuteCrafts.sort((a, b) => {
            // Handle undefined values
            const aValue = a[criteria] !== undefined ? a[criteria] : '';
            const bValue = b[criteria] !== undefined ? b[criteria] : '';
    
            if (criteria === 'name' || criteria === 'email' || criteria === 'subcategory') {
                return aValue.localeCompare(bValue);
            } else if (criteria === 'price') {
                return a.price - b.price; 
            }
            return 0;
        });
        setJuteCrafts(sortedJuteCrafts);
    };
    
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        sortJuteCrafts(event.target.value);
    };

    useEffect(() => {
        sortJuteCrafts(sortBy);
    }, [sortBy]);
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-infinity loading-lg"></span></div>
    }
    return (
        <div>
            <Navbar></Navbar>
             {/* Sorting Dropdown */}
             <div className="flex justify-between items-center p-5">
                <label htmlFor="sort" className="text-lg font-semibold">Sort By: </label>
                <select
                    id="sort"
                    className="select select-bordered"
                    value={sortBy}
                    onChange={handleSortChange}
                >
                    <option value="name">Name</option>
                    <option value="email">Email</option>
                    <option value="subcategory">Subcategory</option>
                    <option value="price">Price</option>
                </select>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 p-10'>
                {
                    juteCrafts.map((juteCraft) => (
                        <div key={juteCraft._id} className='flex justify-center'>
                            <div className='w-full h-96 rounded-xl shadow-xl'>
                                <img className='w-full h-3/5 rounded-t-2xl' src={juteCraft.photo} alt="" />
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
                    ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllCard;