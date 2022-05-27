import React from "react";

type Props = { openModal: () => void };

const Header: React.FC<Props> = ({ openModal }) => {
  return (
    <>
      <div className="md:pt-9 pt-5 px-5 sm:px-10 w-screen flex place-content-between items-center">
        <div className="w-[55%] sm:w-[60%]">
          <p className="text-xl font-medium">Media Library</p>
          <span className="text-sm text-opacity-50 text-gray-700 pb-2">
            Create, edit, and manage the media on your community
          </span>
        </div>
        <button
          className="text-sm sm:text-md sm:font-bold  border border-blue-500 active:border-black bg-gradient-to-t from-blue-600 to-blue-500 rounded-md text-white px-4 h-10 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer hover:shadow-md "
          onClick={openModal}
          
        >
          Add Image
        </button>
        
      </div>

      
    </>
  );
};

export default Header;
