const AddArtCard = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
        <Link to='/' className='btn btn-ghost'>Back To Home</Link>
        <h2 className="text-2xl font-bold">ADD Coffee</h2>
        <form onSubmit={handleAddCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex gap-8">
                <div className="md:w-1/2">
                    <label>
                        <span className="text-xl">Coffee Name</span>
                    </label>
                    <br />
                    <input className="input w-full" placeholder="Coffee Name" name="name" type="text" />
                </div>
                <div className="md:w-1/2">
                    <label>
                        <span className="text-xl">Available Quantity </span>
                    </label>
                    <br />
                    <input className="input w-full" name="quantity" placeholder="Available Quantity" type="text" />
                </div>

            </div>
            {/* form supplier and test row */}
            <div className="md:flex gap-8">
                <div className="md:w-1/2">
                    <label>
                        <span className="text-xl">Supplier Name</span>
                    </label>
                    <br />
                    <input className="input w-full" placeholder="Supplier Name" name="supplier" type="text" />
                </div>
                <div className="md:w-1/2">
                    <label>
                        <span className="text-xl">Teste </span>
                    </label>
                    <br />
                    <input className="input w-full" name="teste" placeholder="Teste" type="text" />
                </div>

            </div>
            {/* form catagory and details row  */}
            <div className="md:flex gap-8">
                <div className="md:w-1/2">
                    <label>
                        <span className="text-xl">Category</span>
                    </label>
                    <br />
                    <input className="input w-full" placeholder="Category" name="category" type="text" />
                </div>
                <div className="md:w-1/2">
                    <label>
                        <span className="text-xl">Details </span>
                    </label>
                    <br />
                    <input className="input w-full" name="details" placeholder="Details" type="text" />
                </div>

            </div>
            {/* form photo URL */}
            <div className="">
                <div className="">
                    <label>
                        <span className="text-xl">Photo URL</span>
                    </label>
                    <br />
                    <input className="input w-full" placeholder="Photo URL" name="photo" type="text" />
                </div>
            </div>
            <input type="submit" value="Add Card" className="mt-8  btn w-full  bg-[#D2B48C]"/>
        </form>
    </div>
    );
};

export default AddArtCard;