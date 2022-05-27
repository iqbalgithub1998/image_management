import React, { useState } from "react";
import { Images } from "../app/type";
import Modalheader from "./Modalheader";

type Props = {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  selectedImage: Images;
  addImage: (name: string) => void;
};

const AddImageModal = ({ setModalOn, selectedImage,addImage }: Props) => {

    const [name,setName]= useState(selectedImage.name);

  const finishAddImage = () => {
    addImage(name);
  };

  const getSize = () => {
    let size = (selectedImage.height * selectedImage.width)*3;
    let sizeinKb = size/1000;
    
    if (sizeinKb >100){
        return Math.floor(sizeinKb/100) +" KB";
    }else{
        return sizeinKb +" KB";
    }
  };
  return (
    <>
      <Modalheader
        setModalOn={setModalOn}
        title="Add Image"
        subTitle="Edit your media files here"
      />
      <div className="max-w-2xl border-dashed border-2 border-gray-400 rounded-lg max-h-[80%] overflow-hidden  p-4 mt-3">
        <div className=" border max-w-full max-h-60 sm:max-h-80 rounded-lg overflow-hidden object-cover ">
          <img src={selectedImage.url} alt="img" />
        </div>
        <div className="sm:flex mt-2 sm:items-center">
          <div className="flex flex-col sm:w-1/2">
            <span className="text-sm font-thin text-gray-300">Title</span>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              className=" rounded-lg sm:w-[70%]"
              value={name}
              onChange= {(e)=> setName(e.target.value)}
            />
          </div>
          <div className="flex place-content-between sm:w-1/2">
            <div>
              <span className="text-sm font-extralight text-gray-400">
                file Type
              </span>
              <span className="img_details">JPG</span>
            </div>
            <div>
              <span className="text-sm font-extralight text-gray-400">
                File Size
              </span>
              <span className="img_details">{getSize()}</span>
            </div>
            <div>
              <span className="text-sm font-extralight text-gray-400">
                Dimensions
              </span>
              <span className="img_details">
                {selectedImage.width} x {selectedImage.height}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-3 flex justify-end ">
        <button
          onClick={finishAddImage}
          className="text-sm sm:text-md sm:font-bold  border border-blue-500 active:border-black bg-gradient-to-t from-blue-600 to-blue-500 rounded-md text-white px-4 h-10 hover:bg-gradient-to-t hover:from-blue-500 hover:to-blue-600 cursor-pointer hover:shadow-md "
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AddImageModal;
