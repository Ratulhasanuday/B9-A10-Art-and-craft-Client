import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import { FaStar } from 'react-icons/fa';
const ViewDetails = () => {
    const loadedDetails=useLoaderData();
    if (!loadedDetails) {
        return <NotFound></NotFound>
    }
    return (
        <div className="p-10 ">
      <div key={loadedDetails._id} className='flex justify-center'>
                            <div className='w-full h-96 bg-gray-200 rounded-xl shadow-xl'>
                                <img className='w-full h-3/5 rounded-t-2xl' src={loadedDetails.photo} alt="" />
                                <div className='px-5 '>
                                    <h1 className='text-2xl pt-4 font-bold'>{loadedDetails.name}</h1>
                                    <div className='flex justify-between'>
                                        <p className='text-lg font-semibold'>Status:{loadedDetails.stockStatus}</p>
                                        <p className='text-lg font-semibold'>Price:{loadedDetails.price}$</p>
                                    </div>

                                    <p className='text-lg font-semibold flex items-center'>
                                        Product Rating:
                                        {[...Array(Math.round(loadedDetails.rating))].map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 ml-1" />
                                        ))}
                                    </p>
                                    <div className='flex justify-end '>

                                        <Link to={`/viewDetails/${loadedDetails._id}`} className='btn btn-active'>View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default ViewDetails;
