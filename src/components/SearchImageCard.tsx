import React from 'react'
import {Images} from "../app/type";
import { TiTick } from "react-icons/ti";

type Props = {
    search:Images;
    selectImage: (image: Images) => void;
    selected:boolean
}

const SearchImageCard :React.FC<Props> = ({search,selectImage,selected}) => {
  return (
    <div className=" relative rounded-lg overflow-hidden  max-h-[100px] object-cover hover:shadow-xl hover:border-slate-400 hover:border" onClick={()=>selectImage(search)}>
        {
          selected ? (
                    <div className="w-9 h-9 bg-slate-50 bg-opacity-30 absolute bottom-1 right-1 rounded-full flex justify-center items-center">
                      <TiTick  className="text-blue-600 w-[30px] h-[30px]" />
                    </div>  
                    ):null
        }
        <img src={search.url} alt="img"  className="h-full w-full"  />
    </div>
  )
}

export default SearchImageCard