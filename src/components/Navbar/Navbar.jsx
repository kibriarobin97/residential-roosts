import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import defaultPhoto from "../../assets/user.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Successfully Logout", { position: "top-center" })
            })
            .catch(error => {
                toast.error(error.message, { position: "top-center" })
            })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/userProfile'>User Profile</NavLink></li>
        {
            user && <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        }
        <li><NavLink to='/contact'>Contact-Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-[#EBEEF3]">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl font-bold">Residential-Roosts</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Photo" src={user?.photoURL || defaultPhoto} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-32 mx-auto">
                                <li className="hover:font-bold"><Link to='/userProfile'>
                                    {user?.displayName ? user.displayName : 'User'}
                                </Link></li>
                                <li className="hover:font-bold"><button onClick={handleLogOut}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        <div>
                            <Link to='/login'>
                                <button className="btn btn-sm text-white bg-gray-500 hover:bg-gray-700 duration-300">Login</button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;