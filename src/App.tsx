import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import Settings from './components/Settings';
import axios from "axios";
import {useAppSelector,useAppDispatch} from "./app/hook";
import {defaultImages,updateImages,selectAllImages,deleteImage,searchImages,sortTitle,sortDate,sortSize} from './features/images/imagesSlice';
import {Images} from "./app/type";
import Modal from './components/Modal';


const App :React.FC = () => {
  const images = useAppSelector(state => state.images.images);
  const searchresults = useAppSelector(state=>state.images.searchImages);
  const checkedImages = useAppSelector(state => state.images.checkedImages);
  const selectAll = useAppSelector(state => state.images.selectAll)
  const dispatch = useAppDispatch();

  const [modalOn,setModalOn] = useState(false);
  const [choiceImage,setChoiseImage] = useState({});


  const apiKey:unknown = process.env.REACT_APP_UNSPLASH_KEY;
  
  const getDefaultImages = () =>{
    try {
      const apiUrl:any = "https://api.unsplash.com/photos?page=1&per_page=20&client_id="+apiKey;
      axios.get(apiUrl).then(res =>{
        
        if(res){
          let dataArray:Images[] = [];
          res.data.map((obj:any,index:number)=>{
            let data:Images = {
              id:obj.id,
              checked:false,
              url:obj.urls.regular,
              height:obj.height,
              width:obj.width,
              name:obj.sponsorship ?  obj.sponsorship.tagline :"img"+index ,
              date:obj.created_at
            } 

            dataArray.push(data);
          });

          dispatch(defaultImages(dataArray));
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  const checkBoxchange =(id:string)=>{
    dispatch(updateImages(id));
  }

  const selectAllHandlar=()=>{
    dispatch(selectAllImages());
  }

  const deleteimage=()=>{
    dispatch(deleteImage());
  }

  const openModal = ()=>{
    setModalOn(true);
  }

  const inAppSearch = (val:string) =>{
    dispatch(searchImages(val));
  }

  const sortByTitle=()=>{
    
    dispatch(sortTitle());
  }
  const sortBySize=()=>{
    dispatch(sortSize());
  }
  const sortByDate=()=>{
    dispatch(sortDate());
  }

  

  useEffect(() => {
     getDefaultImages();
   }, []);

   
   
  return (
    <div className="bg-[#F7F8FA] w-screen h-screen overflow-x-hidden ">
      <Header openModal={openModal} /> 
      <Settings checkedImages={checkedImages} selectAll={selectAll}  selectAllHandlar={selectAllHandlar} deleteimage={deleteimage} inAppSearch={inAppSearch} value={searchresults.length} sortByTitle={sortByTitle} sortByDate={sortByDate} sortBySize={sortBySize} />
      <ImageGallery images={searchresults.length>0 ? searchresults : images} checkBoxchange={checkBoxchange} />
      {modalOn && <Modal setModalOn={setModalOn}   /> }
    </div>
  );
}

export default App;
