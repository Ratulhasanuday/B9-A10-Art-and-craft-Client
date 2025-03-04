import { useContext, useState } from "react";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../../provider/AuthProvider";

const Profile = () => {
    const {signOutUser}=useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const handleDropdown=()=>{
        setIsOpen(!isOpen)
    }
    const handleSignOutUser=()=>{
        signOutUser()  
        .them(result=>{
            console.log(result)
        })      
        .catch(error=>{
            console.error(error);
            
        })
    }
    return (
        
      <div className="relative inline-block text-left">
        <button
        onClick={handleDropdown}
          className="bg-gray-800 text-white p-2 rounded-full focus:outline-none"
        >
          <img 
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Profile"
            src="https://i.ibb.co.com/0Vy8XjVz/3.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
           <Tooltip id="my-tooltip" place="top" />
        </button>
  
        {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            
            <button
             onClick={handleSignOutUser}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
      </div>
    );
  }

export default Profile;