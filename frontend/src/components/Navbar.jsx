// components/Navbar.jsx
import React from 'react';
import icon from '../assets/user.png'; // User icon
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'; // Import the custom hook
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const { loggedIn, name, logout } = useUser(); // Access loggedIn and name directly from context
    const navigate = useNavigate();

    return (
        <div className="navbar  rounded-md shadow-sm mb-3">
            <div className="flex-1 font-semibold text-white">
                DeepReadTranslate Web APP
            </div>
            <div>
                <button onClick={() => navigate('/')} className='text-center mr-[450px] bg-transparent text-white font-semibold border-2 border-solid border-white'>
                    Home
                </button>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img className="w-7 h-7 mt-2 mx-2" alt="User Avatar" src={icon} />
                        </div>
                    </div>
                    {loggedIn ? (
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between ">
                                    {name}
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><NavLink to='/history'>History</NavLink></li>

                            <li><a onClick={logout}>Logout</a></li>
                        </ul>
                    ) : (
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a onClick={() => navigate('/login')}>Log In</a></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
