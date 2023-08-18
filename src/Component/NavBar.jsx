import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
const NavBar = () => {

    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        navigate("/")
    } 

    return (
        <div className="navbar fixed top-0 z-50 px-20 drop-shadow-lg bg-base-100">
            <div className="flex-1">
                <img className="w-20" src="data:image/png;base64,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" alt='Image'/>
            </div>
            <div className="flex-none">

                <ul className="menu menu-horizontal px-2">
                    <li><NavLink to="/">Product</NavLink></li>
                </ul>
                <ul className="menu menu-horizontal px-3">
                    <li><NavLink to="/cart-list">View Cart</NavLink></li>
                </ul>
                <div className="dropdown dropdown-end px-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face-thumbnail.jpg" alt='Image'/>
                        </div>
                    </label>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-42">
                        <li><NavLink to = "/login">Login </NavLink></li>
                        <li> <button onClick={handleLogOut}>Logout </button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;