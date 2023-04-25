import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { CgUserList } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";



import pic1 from "../../layouts/imageslay/logo.png"
const Navbar = () => {
  const hover = 'hover:text-[#FF0000] transitions text-white'
  const Hover = ({ isActive }) => (isActive ? 'text-[#FF0000]' : hover)
  return (
    <>
      <div className="bg-black shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7  justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/lists">
              <img src={pic1}
                alt="logo"
                className="w-full h-9 object-contain"

              />

            </Link>
          </div>
          <div className="col-span-3 ">
            <form className=" w-full text-sm bg-gray-200 rounded flex-btn gap-4">
              <button type="submit" className="bg-[#FF0000] w-12 flex-col py-5 h-12 text-xl rounded text-white items-center justify-center">
                <BiSearch />
              </button>
              <input type="text" placeholder="Search Movies" className="font-medium placeholder:text-gray-400 text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black" />
            </form>

          </div>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              Movies
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/Login" className={Hover}>
              <CgUserList className="w-8 h-8" />
            </NavLink>
            <NavLink to="/Login" className={Hover}>
              <AiFillHeart className="w-8 h-8" />

            </NavLink>
            {/* <NavLink to="/Login" className={`${Hover} relative`}>
              <AiFillHeart className="w-8 h-8"/>
              <div className="w-5 h-5 flex-col rounded-full text-xs bg-[#FF0000] text-white absolute px-2 -top-5 -right-1">
                2
              </div>
            </NavLink> */}
          </div>
        </div>

      </div>

    </>
  )
}

export default Navbar;