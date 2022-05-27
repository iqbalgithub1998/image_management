import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

type Props = {
    setModalOn:React.Dispatch<React.SetStateAction<boolean>>;
    title:string;
    subTitle:string
}

const Modalheader = ({setModalOn,title,subTitle}:Props) => {
  return (
    <>
        <div className="flex justify-between items-center">
            <div >
              <span className="text-md md:text-lg  font-semibold text-zinc-600">
                {title}
              </span>
              <span className="block text-sm font-light text-zinc-300">
                {subTitle}
              </span>
            </div>
            <div className=" cursor-pointer w-8 h-8 rounded-md flex justify-center items-center hover:bg-slate-200 hover:shadow-md">
              <AiOutlineClose className="w-[24px] h-[24px] " onClick={()=>setModalOn(false)} />
            </div>
          </div>
    </>
  )
}

export default Modalheader