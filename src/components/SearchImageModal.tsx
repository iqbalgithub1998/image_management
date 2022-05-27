import React from 'react'
import SearchImageGallary from './SearchImageGallary'
import { Images } from '../app/type'
import Modalheader from './Modalheader'

type Props = {
    setModalOn:React.Dispatch<React.SetStateAction<boolean>>;
    searchResult: Images[];
    selectImage:(image: Images) => void;
    selectedImage: Images;
    nextStep: () => void;
    searchquery:string;
    setSearchquery:React.Dispatch<React.SetStateAction<string>>;
    fetchSearch:()=>void;
}

const SearchImageModal:React.FC<Props> = ({setModalOn,searchResult,selectImage,selectedImage,nextStep, searchquery, setSearchquery,fetchSearch}) => {

  return (
    <>
        <Modalheader setModalOn={setModalOn} title="Select Image" subTitle="Search and select an image" />
          <div className="flex  items-center ">
            <form className="flex py-2 pr-3 w-[73%] sm:w-[30%] lg:w-[20%] xl:w-[17%]" >
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  value={searchquery}
                  onChange = {(e)=> setSearchquery(e.target.value)}
                  className="bg-white border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block  w-full pl-10 p-2  "
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            <button className="border bg-gradient-to-t from-[#F1F5FA] to-[#FDFEFF] border-blue-100 shadow-md rounded-md px-3 py-1 w-[25%] max-w-[100px]" onClick={fetchSearch}>
              Search
            </button>
          </div>

          <div className="w-full border-dashed border-2 border-gray-400 rounded-lg max-h-80 sm:max-h-96 overflow-hidden overflow-y-scroll">
            <SearchImageGallary data={searchResult} selectImage={selectImage} selected={selectedImage} />
          </div>

          <div className="w-full mt-3 flex justify-end ">
              <button onClick={nextStep} className="text-sm sm:text-md sm:font-bold  border border-blue-500 active:border-black bg-gradient-to-t from-blue-600 to-blue-500 rounded-md text-white px-4 h-10 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer hover:shadow-md " >Select Image</button>
          </div>
    </>
  )
}

export default SearchImageModal