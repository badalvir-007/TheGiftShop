// Navbar.js
import { FaHome, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
  <div  className='w-11/12'> 
      <nav className="bg-gray-800 text-white p-4 space-x-4 ">
      <div className="flex flex-row items-center justify-between">
      

        {/* Logo in the top left */}
        <div className="text-xl font-bold">Your Logo</div>

        {/* Search bar in the middle */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none"
          />
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
