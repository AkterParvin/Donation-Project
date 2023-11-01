import { NavLink } from "react-router-dom";
import '../../index.css'


const Nav = () => {
    const activeLink = 'bg-neutral-300 text-red-600 px-2 py-1 underline rounded-lg';
    const normalLink = "text-black";
    return (
        <div className="">

            <div className="flex flex-col lg:flex-row justify-between items-center  pb-6  lg:px-12   absolute  top-0 left-0 right-0 z-50  rounded-lg max-w-7xl mx-auto shadow-sm">

                <div className="my-5">
                    <img src="/Logo.png" alt="" />
                </div>
                <div >
                    <ul className=" flex gap-5 lg:gap-24">
                        <li className="text-lg font-bold "><NavLink to='/'
                            className={({ isActive }) => isActive ? activeLink : normalLink}>
                            Home
                        </NavLink></li>

                        <li className="text-lg font-bold "><NavLink to='/donation' className={({ isActive }) => isActive ? activeLink : normalLink}>
                            Donation
                        </NavLink></li>

                        <li className="text-lg font-bold "><NavLink to='/statistics' className={({ isActive }) => isActive ? activeLink : normalLink} >
                            Statistics
                        </NavLink></li>
                    </ul>
                </div>

            </div>




        </div>
    );
};

export default Nav;