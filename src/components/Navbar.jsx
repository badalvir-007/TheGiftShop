// Navbar.js
import { FaHome, FaHeart, FaUser, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/Logos/logo.jpeg";

const Navbar = () => {
  return (
    <div className="w-11/12">
      <nav className="bg-white p-4 space-x-4 border-b border-gray-300">
        <div className="flex flex-row items-center justify-between cursor-pointer">
          {/* Logo in the top left */}
          <div className="w-12 h-8">
            <img src={Logo} alt="" />
          </div>

          {/* Search bar in the middle */}
          <div className="flex items-center w-[534px] h-[36px] border-slate-400 rounded-2xl">
            <input
              type="text"
              placeholder="Search For Gifts"
              className="flex-grow pl-2 pr-10 text-slate-900  placeholder-slate-500 bg-transparent border-none focus:outline-none"
            />
            <div className="relative right-2">
              <CiSearch className="text-slate-500" />
            </div>
          </div>
          {/* Icons in the top left corner */}
          <div className="flex  space-x-4 items-center">
            <FaHome className="mr-2" />
            <FaHeart className="mr-2" />
            <FaUser className="mr-2" />
            <FaShoppingCart />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
