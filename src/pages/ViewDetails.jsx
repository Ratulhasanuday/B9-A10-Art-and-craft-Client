import React from 'react';
import { Link, useLoaderData, useNavigate, } from 'react-router-dom';
import NotFound from './Shared/NotFound';
import { FaStar } from 'react-icons/fa';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Swal from 'sweetalert2';
const ViewDetails = () => {
    const loadedDetails = useLoaderData();
    if (!loadedDetails) {
        return <NotFound></NotFound>
    }
    const navigate = useNavigate();
    const handleDeleteCard = (_id) => {
        console.log("deleted iteme selected",_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                console.log('delete confarm',result);
                
                fetch(`https://unice-jute-wooden-crafts-server.vercel.app/juteCrafts/${_id}`,{
                    method:'DELETE',
                    
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          }).then(()=>{
                            navigate('/')
                          })
                    }
                    
                })
                
             
            }
          });
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="p-10 ">
                <div className='md:flex justify-center rounded-2xl md:h-96 shadow-xl  '>

                    <img className='md:w-1/2 w-full h-52   md:rounded-l-2xl rounded-t-2xl' src={loadedDetails.photo} alt="view" />
                    <div className='p-5'>
                        <h1 className='md:text-3xl text-2xl font-bold'>
                            Product Name :  {loadedDetails.name}</h1>
                        <h1 className='md:text-2xl text-xl  font-bold'>
                            Category Name: {loadedDetails.subcategory}</h1>
                        <div className='md:flex justify-stretch'>
                            <h1 className='md:text-xl font-bold'>Name: {loadedDetails.userName}</h1>
                            <h1 className='md:text-xl font-bold'>Email Address:  {loadedDetails.userEmail}</h1>
                        </div>

                        <h1 className='md:text-xl  font-medium'>{loadedDetails.details}</h1>

                        <h1 className='md:text-xl font-medium'>Product Costomaization: {loadedDetails.customaization}</h1>
                        <div className='md:flex justify-between'>
                            <p className='md:text-lg font-semibold'>Status: {loadedDetails.stockStatus}</p>
                            <p className='md:text-lg font-semibold'>Price:{loadedDetails.price}$</p>
                        </div>
                        <p className='md:text-lg font-semibold flex items-center'>
                            Product Rating:
                            {[...Array(Math.round(loadedDetails.rating))].map((_, index) => (
                                <FaStar key={index} className="text-yellow-500 ml-1" />
                            ))}
                        </p>
                        <div className='pt-4 '>
                            <button onClick={() => handleDeleteCard(loadedDetails._id)} className='btn mr-4'>Delete</button>
                            <Link to={`/updateCard/${loadedDetails._id}`} className='btn'>Update</Link>
                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default ViewDetails;
