import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCard = () => {
    const loadedData = useLoaderData()
    
    const {_id,name,photo,subcategory,details,rating,price,userEmail, userName,processingTime,customaization,stockStatus}=loadedData
    const navigate=useNavigate()
    const handleUpdatCard=(e)=>{
        e.preventDefault()
        const form = e.target;  
        const data = new FormData(form);
        const name = data.get('name');  
        const photo = data.get('photo');
        const subcategory = data.get('subcategory');
        const processingTime = data.get('processingTime');
        const rating = data.get('rating');
        const price = data.get('price');
        const userName = data.get('userName');
        const userEmail = data.get('userEmail');
        const details = data.get('details');
        const customaization = data.get('customaization');
        const stockStatus = data.get('stockStatus');
        const updateCard = {
            name,
            photo,
            subcategory,
            processingTime,
            rating,
            price,
            userName,
            userEmail,
            details,
            customaization,
            stockStatus,
        };
        fetch(`https://unice-jute-wooden-crafts-server.vercel.app/juteCrafts/${_id}`,{
            method:'PUT',
            
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCard)
        })
        .then(res=>res.json())
        .then(data=>{
                        if (data.modifiedCount) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Product Update  Successfully',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                              }).then((result)=>{
                                if (result.isConfirmed) {
                                    navigate('/')
                                }
                              })
                        }
            
        })
        
        
    }
    return (
        <div className="md:px-24 px-2">
            <Link to='/' className='btn btn-ghost mt-10' ><FaArrowLeft />Back To Home</Link>
            <form onSubmit={handleUpdatCard} className="shadow-xl p-4 bg-slate-400">
                <h2 className="text-2xl font-bold text-center pb-4">Update Art & Crafts Card</h2>
                {/* form item name and image  row */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Item Name</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Item Name" name="name" type="text" required defaultValue={name} />
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Photo Url </span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Photo URL" name="photo" type="text" required defaultValue={photo} />
                    </div>

                </div>
                {/* form subcategory and short Processing row */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Subcategory Name</span>
                        </label>
                        <br />
                        <input
                            className="input w-full"
                            placeholder="Select a subcategory"
                            name="subcategory"
                            list="subcategory-options"
                            required
                            defaultValue={subcategory}
                        />
                        <datalist id="subcategory-options" >
                            <option value="Wooden Furniture & Sculptures" />
                            <option value="Wooden Home Decor" />
                            <option value="Wooden Utensils and Kitchenware" />
                            <option value="Jute Home Decor" />
                            <option value="Jute Kitchenware & Utensils" />
                            <option value="Jute and Wooden Jewellery" />
                        </datalist>
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Processing time</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Item Processing Time" name="processingTime" type="text" list="Processing-options" required 
                        defaultValue={processingTime}/>
                        <datalist id="Processing-options" >
                            <option value="1 Day" />
                            <option value="2 Days" />
                            <option value="3 Days" />
                            <option value="4 Days" />
                            <option value="5 Days" />
                            <option value="6 Days" />
                            <option value="7 Days" />
                            <option value="8 Days" />
                            <option value="9 Days" />
                            <option value="10 Days" />
                            <option value="11 Days" />
                            <option value="12 Days" />
                            <option value="13 Days" />
                            <option value="14 Days" />
                            <option value="15 Days" />
                            <option value="16 Days" />
                            <option value="17 Days" />
                            <option value="18 Days" />
                            <option value="19 Days" />
                            <option value="20 Days" />
                            <option value="21 Days" />
                            <option value="22 Days" />
                            <option value="23 Days" />
                            <option value="24 Days" />
                            <option value="25 Days" />
                            <option value="26 Days" />
                            <option value="27 Days" />
                            <option value="28 Days" />
                            <option value="29 Days" />
                            <option value="30 Days" />
                        </datalist>
                    </div>


                </div>
                {/* form Rating and Price  row  */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Rating</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="Rating" name="rating" type="text" list="rating-option" required defaultValue={rating}/>
                        <datalist id="rating-option" >
                            <option value="1" />
                            <option value="2" />
                            <option value="3" />
                            <option value="4" />
                            <option value="5" />
                        </datalist>
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">Price</span>
                        </label>
                        <br />
                        <input className="input w-full" name="price" placeholder="Price" type="text" required defaultValue={price} />
                    </div>

                </div>
                {/* form user name  and email row  */}
                <div className="md:flex gap-8">
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">User Name</span>
                        </label>
                        <br />
                        <input className="input w-full" placeholder="User Name" name="userName" type="text" required defaultValue={userName} />
                    </div>
                    <div className="md:w-1/2">
                        <label>
                            <span className="text-xl">User Email </span>
                        </label>
                        <br />
                        <input className="input w-full" name="userEmail" placeholder="Enter user Email" type="text" required defaultValue={userEmail} />
                    </div>

                </div>

                {/* form details row  */}
                <div className="md:flex gap-8">

                    <div className="md:w-full">
                        <label>
                            <span className="text-xl">Details </span>
                        </label>
                        <br />
                        <input className="input w-full" name="details" placeholder="Details" type="text" required defaultValue={details}/>
                    </div>


                </div>
                {/* form customaization  row */}
                <div className="md:flex">
                    <div className="md:flex gap-8 w-full">
                        <div className="mt-6 space-y-6">
                            <h2 className="text-lg font-bold">Customaization</h2>
                        </div>
                        <div className="md:mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="yes" name="customaization" type="radio" value="Yes" checked className="" defaultChecked={customaization==='Yes'}/>
                                <label htmlFor="yes" className="block text-sm font-medium text-gray-900">Yes</label>
                            </div>
                        </div>
                        <div className="md:mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="no" name="customaization" type="radio" value="No" checked className="" defaultChecked={customaization==='No'}/>
                                <label htmlFor="no" className="block text-sm font-medium text-gray-900">No</label>
                            </div>
                        </div>
                    </div>
                    {/* form stock status row */}
                    <div className="md:flex gap-8 w-full">
                        <div className="mt-6 space-y-6">
                            <h2 className="text-lg font-bold">Stock Status</h2>
                        </div>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="inStock" name="stockStatus" type="radio" value="In Stock" checked className="" defaultChecked={stockStatus==='In Stock'}/>
                                <label htmlFor="inStock" className="block text-sm font-medium text-gray-900">In Stock</label>
                            </div>
                        </div>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input id="madeToOrder" name="stockStatus" type="radio" value="Made To Order" checked className="" defaultChecked={stockStatus==="Made To Order"}/>
                                <label htmlFor="madeToOrder" className="block text-sm font-medium text-gray-900">Made to Order</label>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" value="Update Card" className="mt-8  btn w-full  bg-[#93a6ce]" />
            </form >
        </div >
    );
};

export default UpdateCard;