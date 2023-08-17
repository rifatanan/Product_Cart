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
                <img className="w-20" src="/public/Image/shop.png" />
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
                            <img src="/public/Image/profile.jpeg" />
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