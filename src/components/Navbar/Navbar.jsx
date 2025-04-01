
import React, { useState, useRef} from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FaShopify } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Mens Wear", link: "/#" },
  { id: 5, name: "Electronics", link: "/#" },
];

const Navbar = ({ LoginPagePopup, scrollToCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <div className="shadow-md dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-slate-600 py-2 overflow-hidden flex flex-wrap-reverse ">
        <div className="container flex justify-between items-center">
          <div className=" flex items-center mr-2 ">
            <a
              href="#"
              className="font-bold text-xl flex items-center mr-2 gap-1"
            >
              <FaShopify size="40" />
              <span className="text-3xl">MY</span>
              Sohping
            </a>
          </div> 

          <div className="flex justify-between items-center gap-4">
            {/* Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] h-9 group-hover:w-[300px] transition-all duration-500 
                rounded-lg border border-gray-300 py-1 px-3 text-sm focus:outline-none 
                focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch
                className="text-slate-800 group-hover:text-black dark:group-hover:text-white 
              dark:text-white absolute top-1/2 -translate-y-1/2 right-3"
              />
            </div>

            {/* Cart Button */}
            <button
              onClick={scrollToCart}
              className="group bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-bold 
              rounded-full flex items-center justify-center h-9 w-9 hover:w-20 
              transition-all duration-500 overflow-hidden"
            >
              <span
                className="whitespace-nowrap opacity-0 w-0 
                group-hover:opacity-100 group-hover:w-7
                transition-all duration-500 transform -translate-x-2 
                group-hover:translate-x-0"
              >
                Cart
              </span>
              <FaCartShopping
                className="text-xl text-black drop-shadow-sm 
                transform transition-transform group-hover:translate-x-2"
              />
            </button>

            {/* Login Button */}
            <button
              onClick={LoginPagePopup}
              className="group bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-bold 
              rounded-full flex items-center justify-center h-9 w-9 hover:w-20 
              transition-all duration-500 overflow-hidden"
            >
              <span
                className="whitespace-nowrap opacity-0 w-0 
                group-hover:opacity-100 group-hover:w-12
                transition-all duration-500 transform -translate-x-2 
                group-hover:translate-x-0"
              >
                Login
              </span>
              <FaUserAlt className="text-xl text-black drop-shadow-sm cursor-pointer" />
            </button>

            {/* Menu Toggle */}
            <div className="relative" ref={menuRef}>
              <IoReorderThreeOutline
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                size="30"
                className="bg-gradient-to-r from-yellow-400 to-orange-600 text-black font-bold 
               rounded-full h-9 w-9 cursor-pointer"
              />

              {/* Menu Dropdown */}
              {isMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 
                 rounded-lg shadow-lg py-2 z-50"
                >
                  {Menu.map((item) => (
                    <a
                      key={item.id}
                      href={item.link}
                      className="block px-4 py-2 hover:bg-primary/20 dark:hover:bg-slate-700 
                       transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
