import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const { user, signOutUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [userData, setUserData]=useState(null)
    const handleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSignOutUser = () => {
        signOutUser()
            .then(() => console.log("User signed out"))
            .catch((error) => console.error(error));
    };
    useEffect(()=>{
        if(user?.email){
            fetch(`https://unice-jute-wooden-crafts-server.vercel.app/users/${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                
                setUserData(data)
            })
        }
    },[user?.email])

    return (
        <div className="relative inline-block text-left">
            {user ? (
                <>
                    <button onClick={handleDropdown} className="bg-gray-800 text-white p-2 rounded-full focus:outline-none">
                        {/* Show User Profile Picture */}
                        <img 
                            data-tooltip-id="my-tooltip"
                            data-tooltip-content={userData?.name || "Profile"}
                            src={userData?.photo|| "https://via.placeholder.com/40"} // Default image if photoURL is missing
                            alt="Profile"
                            className="w-10 h-10 rounded-full"
                        />
                        <Tooltip id="my-tooltip" place="left" />
                    </button>

                    {isOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                            <div className="py-1 text-center">
                                {/* Display User Name */}
                                <img src={userData?.photo} alt="Profile" className="w-16 h-16 rounded-full mx-auto mt-2" />
                                <p className="px-4 py-2 text-sm font-bold text-gray-700">{userData?.name}</p>
                                <button
                                    onClick={handleSignOutUser}
                                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 mt-2 btn"
                                    role="menuitem"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="flex gap-2">
                    <button onClick={signInWithGoogle} className="px-4 py-2 bg-red-500 text-white rounded">
                        Google Login
                    </button>
                    <button onClick={signInWithFacebook} className="px-4 py-2 bg-blue-500 text-white rounded">
                        Facebook Login
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;
