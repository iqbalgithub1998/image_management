import React from 'react'
import {Images} from "../app/type";

type Props ={
  data:Images;
  checkBoxchange: (id: string) => void;
}

const ImageCard:React.FC<Props>=({data,checkBoxchange})=> {

  const checkHandler = ()=>{
    checkBoxchange(data.id);
  }
  return (
    <div className="bg-[#E7EAF1] px-2 py-2 w-[100%] rounded-lg  max-w-[640px] max-h-[200px] sm:max-h-[180px]  overflow-hidden relative ">
        <input type="checkbox" checked={data.checked} onChange={checkHandler} name="img" id="checkbox" className=" absolute w-[18px] h-[18px] bg-teal-50s rounded-sm  " />
        <img src={data.url} alt="img1" className="rounded-lg w-full h-40 sm:h-36 object-cover " />
        <span className="font-semibold text-gray-600 text-sm p-1 inline-block w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{data.name}</span>
    </div>
  )
}

export default ImageCard