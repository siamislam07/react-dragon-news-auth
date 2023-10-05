import { Link, NavLink } from "react-router-dom";

import userDefault from '../../../assets/user.png'
import Login from "../../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = ()=>{
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/career'> Career</Link></li>

    </>

    return (
        <div className="navbar bg-base-100 mt-11">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user ? <img src="https://th.bing.com/th/id/R.62904db9e97099ba9defaefcd7484706?rik=qUmpvCVK5LE7fw&riu=http%3a%2f%2fwallsdesk.com%2fwp-content%2fuploads%2f2017%2f01%2fMonkey-full-HD.jpg&ehk=cRfP3iLrsoM654x5sjBA1BP4LAfw0w2iVGajyz%2b3MQo%3d&risl=&pid=ImgRaw&r=0" />
                            : <img src={userDefault}></img>
                        }
                    </div>
                </label>
                {
                    user ?
                        <button className="btn " onClick={handleSignOut}>Sign Out</button>
                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;