import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import { FaStar } from 'react-icons/fa';
import Navbar from './Shared/Navbar';
import { AuthContext } from '../provider/AuthProvider';
const ViewDetails = () => {
    const loadedDetails = useLoaderData();  
    if (!loadedDetails) {
        return <NotFound></NotFound>
    }
    return (
        <>
        <Navbar></Navbar>
        <div className="p-10 ">
            <div className='flex justify-center rounded-2xl shadow-xl bg-gray-200 '>
          
            <img className='w-1/2 rounded-l-2xl' src={loadedDetails.photo} alt="" />
       

                <div className='p-5 '>
                    <h1 className='text-2xl font-bold'>
                        Product Name :  {loadedDetails.name}</h1>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-bold'>{loadedDetails.userName}</h1>
                        <h1 className='text-xl font-bold'>{loadedDetails.userEmail}</h1>
                    </div>
                    <h1 className='text-xl  font-bold'>
                        Category Name: {loadedDetails.subcategory}</h1>
                    <h1 className='text-xl  font-medium'>{loadedDetails.details}</h1>

                    <h1 className='text-xl font-bold'>Product Costomaization: {loadedDetails.customaization}</h1>
                    <div className='flex justify-between'>
                        <p className='text-lg font-semibold'>Status: {loadedDetails.stockStatus}</p>
                        <p className='text-lg font-semibold'>Price:{loadedDetails.price}$</p>
                    </div>
                    <p className='text-lg font-semibold flex items-center'>
                        Product Rating:
                        {[...Array(Math.round(loadedDetails.rating))].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500 ml-1" />
                        ))}
                    </p>
                    <div>
                        <button className='btn'>Delete</button>
                        <Link to='/updateCard' className='btn'>Update</Link>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default ViewDetails;
