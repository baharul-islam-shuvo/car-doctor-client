import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.log(error))
    }

    const navLinks =
        <>
            <li><Link to='/' className="btn">Home</Link></li>
            <li><Link to='/about' className="btn">About</Link></li>
            {user?.email ? <>
                <li><Link onClick={handleLogOut} className="btn">Logout</Link></li>
                <li><Link to="/bookings" className="btn">My Bookings</Link></li>
            </>
                :
                <li><Link to='/login' className="btn">Login</Link></li>}
        </>
    return (
        <div className="navbar bg-base-100 h-28 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className=""><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-white border-2 border-[#FF3811] text-[#FF3811]">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;