import React, { useState } from 'react'
import ImageCard from './ImageCard';
import {Images} from "../app/type";

type Props = { images: Images[]; checkBoxchange: (id: string) => void; }

const  ImageGallery:React.FC <Props>=({images,checkBoxchange})=> {

  return (
    <div className="px-5 sm:px-10 py-7  grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6  ">
        {
          images.map(data=>(
            <ImageCard key={data.id} data={data} checkBoxchange={checkBoxchange} />
          ))
        }
    </div>
  )
}

export default ImageGallery 