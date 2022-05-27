import axios from "axios";
import React, { useEffect, useState } from "react";

import {Images} from "../app/type";
import AddImageModal from "./AddImageModal";
import SearchImageModal from "./SearchImageModal";
import {useAppDispatch} from "../app/hook";
import {addImages} from "../features/images/imagesSlice";

type Props = {
  setModalOn: React.Dispatch<React.SetStateAction<boolean>>;
  
};

const Modal: React.FC<Props> = ({ setModalOn }) => {

    const dispatch = useAppDispatch();

    const [searchResult,setSearchResult] = useState<Images[]>([]);
    const [selectedImage, setSelectedImage] = useState<Images>({id:"",
        checked:false,
        url:"",
        height:0,
        width:0,
        name:"",
        date:"" });
    
    const [isSelected,setIsSelected] = useState<boolean>(false);
    const [searchquery,setSearchquery] = useState<string>("");
    
    const apiKey:unknown = process.env.REACT_APP_UNSPLASH_KEY;
    const apiUrl = "https://api.unsplash.com/photos?page=1&client_id="+apiKey;
    


    const selectImage = (image:Images) =>{
        setSelectedImage({...image});
    }

    const fetchData =async (url:any) =>{
        try {
            
            const res = await axios.get(url);
            
            if(res){
                let data = []
                if(res.data.results){
                    data = [...res.data.results];
                }else{
                    data = [...res.data];
                }
                let tempData:Images[] = [];
            
                data.map((obj:any,index:number) => {

                let newObj:Images = {
                    id:obj.id,
                    checked:false,
                    url:obj.urls.regular,
                    height:obj.height,
                    width:obj.width,
                    name:obj.sponsorship ?  obj.sponsorship.tagline :"img"+index ,
                    date:obj.created_at 
                }
                tempData.push(newObj);
            });
            
            setSearchResult([...tempData]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchSearch = () =>{
        const searchApiUrl = `https://api.unsplash.com/search/photos?page=1&per_page=15&query=${searchquery}&client_id=${apiKey}`;
        fetchData(searchApiUrl);
    }

    const nextStep=() =>{
        if (selectedImage.height===0 && selectedImage.id===""){
            return 
        }else{
            setIsSelected(true);
        }
    }

    const addImage = (name:string) =>{
        let obj = {...selectedImage};
        obj.name = name;
        dispatch(addImages(obj));
        setModalOn(false);
    }


    useEffect(() => {
    //setIsSelected()
      fetchData(apiUrl);
    }, [])
    


  return (
    <div className="bg-zinc-700 bg-opacity-90 fixed inset-0 z-50   ">
      <div className="flex h-screen justify-center items-center ">
        <div className=" max-w-[90%] max-h-[90%] flex-col justify-center  bg-white  py-2 px-3 md:py-6 md:px-10  rounded-xl   ">
            {
                isSelected ? (
                    <AddImageModal setModalOn={setModalOn} selectedImage={selectedImage} addImage={addImage} />
                ):(
                    <SearchImageModal  setModalOn={setModalOn} searchResult={searchResult} selectImage={selectImage}  selectedImage={selectedImage} nextStep={nextStep} searchquery={searchquery} setSearchquery={setSearchquery}  fetchSearch={fetchSearch}/>
                )
            }
        </div>
      </div>
    </div>
  );
};

export default Modal;
