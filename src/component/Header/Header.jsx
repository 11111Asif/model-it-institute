import { NavLink } from "react-router-dom";





const Header = () => {

    const links = <>
        <li className="hover:text-indigo-600 text-lg font-semibold"><NavLink to="/courses">Courses</NavLink></li>
        <li className="hover:text-indigo-600 text-lg  font-semibold"><NavLink to="/instructors">Instructors</NavLink></li>
        <li className="hover:text-indigo-600 text-lg  font-semibold"><NavLink to="/testimonials">Testimonials</NavLink></li>
        <li className="hover:text-indigo-600 text-lg  font-semibold"><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="">
            <div className="navbar bg-gray-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold">
                            MI
                        </div>
                        <div className="hidden lg:block">
                            <h1 className="text-2xl font-semibold"><i>Model IT Institute</i></h1>
                            
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="w-[130px] h-[40px] rounded-lg font-bold  bg-fuchsia-600 hover:bg-indigo-600 py-1.5 px-5.5 text-white"><NavLink to="/enroll">Enroll Now</NavLink></a>
                </div>
            </div>
        </div>
    );
};

export default Header;