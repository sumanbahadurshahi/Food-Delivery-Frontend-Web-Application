import { useState } from "react";
import { GiFoodTruck } from "react-icons/gi";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa"; 

function Nav() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();  // Stops page reload
    if (searchQuery.trim() === "") return;  // Prevent empty search
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-7'>
      
      {/* Food Truck Logo */}
      <div className='w-[60px] h-[50px] bg-white flex justify-center items-center rounded-b-md shadow-2xl'>
        <GiFoodTruck className='w-[50px] h-[50px] text-orange-500' />
      </div>

      {/* Search Bar */}
      <form 
        onSubmit={handleSearch} 
        className='w-[40%] h-[50px] bg-white flex items-center rounded-md border border-gray-300 overflow-hidden md:w-[75%]'
      >
        <input 
          type="text" 
          placeholder='Search items...' 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 outline-none"
        />
        <button 
          type="submit" 
          className="px-4 py-4 bg-[#ff9900] text-black font-bold hover:bg-[#e68a00] transition duration-300 flex items-center"
        >
          <FaSearch className="w-4 h-4 mr-2" /> Search
        </button>
      </form>

      {/* Shopping Cart */}
      <div className='w-[60px] h-[50px] bg-white flex justify-center items-center rounded-b-md shadow-2xl'>
        <span className='absolute top-4 right-9 text-orange-400 font-semibold text-[20px]'>x</span>
        <LiaShoppingBasketSolid className='w-[50px] h-[50px] text-orange-500' />
      </div>
    
    </div>
  );
}

export default Nav;
