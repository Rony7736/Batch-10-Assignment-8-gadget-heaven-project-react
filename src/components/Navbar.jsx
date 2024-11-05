import { NavLink } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="navbar bg-[#9538E2] rounded-t-3xl px-40 pt-6 flex items-center">
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4 text-white">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                        <NavLink to="/phone">Phone</NavLink>
                    </ul>
                </div>
                <a className="text-xl font-bold text-white">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 gap-8 text-white">
                    <NavLink className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`} to="/">Home</NavLink>
                    <NavLink className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`} to="/statistics">Statistics</NavLink>
                    <NavLink className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`} to="/dashboard">Dashboard</NavLink>
                    <NavLink className={({ isActive }) => `text-base ${isActive ? 'text-warning font-bold' : 'hover:text-warning'}`} to="/phone">Phone</NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <span className="bg-white border rounded-full p-2"><CiShoppingCart size={20}></CiShoppingCart></span>
                <span className="bg-white border rounded-full p-2 mr-6"><CiHeart size={20}></CiHeart></span>
            </div>
        </div>
    );
};

export default Navbar;