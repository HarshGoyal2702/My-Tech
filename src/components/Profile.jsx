import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Profile = ({user}) => {
    const {logout} = useContext(AuthContext);
    const handleLogout = async ()=>{
await logout().then(()=>{
alert("Logout Successfull")
}).catch((error)=>{
    alert("Error Occured Try Again to Logout The Account")
})
    }
  return (
    <div>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-ghost btn-circle avatar"
          >
            <div className="avatar online">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                    <img src={user.photoURL} />
                 
                ) : (
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                )}
              </div>
            </div>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <a href="/update-profile">Profile</a>
            </li>
            <li>
              <a href="/menu">Events</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
