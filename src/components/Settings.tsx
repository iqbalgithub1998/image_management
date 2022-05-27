import React, { useState } from 'react';
import { BsTrash } from "react-icons/bs";
import SortButton from './SortButton';
import { Images } from '../app/type';

type Props ={
    checkedImages:Images[];
    selectAll:boolean;
    selectAllHandlar: () => void;
    deleteimage: () => void;
    inAppSearch: (val :string) => void;
    value:number;
    sortByTitle: () => void;
    sortByDate: () => void;
    sortBySize: () => void;
}

const Settings: React.FC<Props> =({checkedImages,selectAll,selectAllHandlar,deleteimage ,inAppSearch,value,sortByTitle,sortBySize,sortByDate}) =>{
    const [val,setVal]= useState<string>("");
  return (
    <div className="px-5 sm:px-10 w-screen pt-2   ">
        <div className="border border-[#CCD2E2] h-16 rounded-md flex bg-[#fafafa] opacity-90 shadow-sm ">
            <div className="flex items-center justify-center flex-row w-1/3 sm:w-[25%] md:w-[20%] lg:w-[15%] xl:w-[10%]  ">
                <input type="checkbox" checked={selectAll} onChange={selectAllHandlar}  className="pt-1"/>
                <span className="text-sm sm:text-md font-semibold text-gray-500 md:pl-2" >Select All</span>
            </div>
            <div className="w-[2px] h-auto bg-gray-300"></div>
            <div className="flex items-center place-content-between w-full px-3">
                <div className="">
                    {
                        checkedImages.length>0 ? (
                            <BsTrash className="cursor-pointer w-[20px] h-[20px] " onClick={deleteimage}/>
                        ):(
                            <BsTrash className="text-slate-500 opacity-20 w-[20px] h-[20px] "/>
                        )
                    }
                    
                </div>
                <form className="flex w-[80%] sm:w-[50%] lg:w-[30%] xl:w-[20%]">   
                    <label className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input type="text" value={value===0 ? "":val} id="simple-search" className="bg-white border border-gray-300 text-black-500 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block  w-full pl-10 p-2  " placeholder="Search" required onChange={(e)=>{inAppSearch(e.target.value);setVal(e.target.value)}}/>
                    </div>
                </form>
            </div>
        </div>
        <div className="border border-[#CCD2E2]  h-12 rounded-md flex bg-[#fafafa] opacity-90 shadow-sm ">
            <div className="flex items-center justify-center  w-1/4 sm:w-[22%] md:w-[17%] lg:w-[13%] xl:w-[7%]  ">
                <span className="text-sm sm:text-md font-semibold text-gray-500 " >Sort By</span>
            </div>
            <div className="w-[2px] h-auto bg-gray-300"></div>
            <div className="w-full flex items-center">
                <SortButton title="Title" sortclick={sortByTitle} />
                <SortButton title="Date"  sortclick={sortByDate}/>
                <SortButton title="Size"  sortclick={sortBySize}/>
            </div>
        </div>
    </div>
  )
}

export default Settings