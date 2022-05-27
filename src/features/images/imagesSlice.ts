import { Images } from './../../app/type';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";


type InitialState ={
    images:Images[],
    checkedImages:Images[],
    selectAll:boolean,
    searchImages:Images[],
}

const initialState:InitialState = {
    images:[],
    checkedImages:[],
    selectAll:false,
    searchImages:[],
}

const imagesSlice = createSlice({
    name:"images",
    initialState,
    reducers:{
        addImages: (state,action:PayloadAction<Images>)=>{
            state.images.push(action.payload);
        },
        // add 20 images when app loads ........................................
        defaultImages:(state,action:PayloadAction<Images[]>)=>{
            state.images = [...action.payload]
        },
        // edit checkbox of individual card......................................
        updateImages:(state,action:PayloadAction<string>)=>{
            let initData = [];
            if(state.searchImages.length>0){
                initData=[...state.searchImages]
            }else{
                initData=[...state.images]
            }
            
            let objIndex = initData.findIndex((obj => obj.id === action.payload));
            if(initData[objIndex].checked === false){
                state.checkedImages.push({...initData[objIndex]})
                initData[objIndex].checked = true;
            }else{
                const filteredArray = state.checkedImages.filter(item => item.id !== action.payload)
                initData[objIndex].checked = false;
                state.checkedImages = [...filteredArray]
            }
            if(state.searchImages.length>0){
                state.searchImages = [...initData];
            }else{
                state.images=[...initData];
            }
        },
        // check or uncheck all images by pressing select all checkbox.....................
        selectAllImages:(state)=>{
            let iniData = [];
            if(state.searchImages.length>0){
                iniData=[...state.searchImages]
            }else{
                iniData=[...state.images]
            }

            if(state.selectAll===false){
                iniData.map(data=> data.checked=true)
                state.selectAll = true;
                state.checkedImages = [...iniData];
            }else{
                iniData.map(data=> data.checked=false)
                state.selectAll = false;
                state.checkedImages = []
            }
            if(state.searchImages.length>0){
                state.searchImages = [...iniData];
            }else{
                state.images=[...iniData];
            }
        },
        // delete image from list....................
        deleteImage:(state)=>{
            let imagesData:Images[] = [...state.images];
            
            state.checkedImages.map((data)=>{
                imagesData = imagesData.filter((item)=>item.id !==data.id)
            });

            if(state.searchImages.length>0){
                let searchData:Images[] = [...state.searchImages];

                state.checkedImages.map((data)=>{
                    searchData = searchData.filter(item => item.id !== data.id)
                });

                state.searchImages = [...searchData];
                if(searchData.length===0){
                    state.selectAll = false;
                }
            }
            state.images = [...imagesData];
            
            state.checkedImages = [];
        },
        // in app search filter.....................
        searchImages:(state,action:PayloadAction<string>) =>{
            let val = action.payload;
            if(val.length!==0){
            const iniData = [...state.images];
            const filter = iniData.filter(data=> data.name.indexOf(action.payload)!==-1)
            if(filter.length>0){
                state.searchImages=[...filter];
            }else{
                state.searchImages = [];
            }
            }else{
                state.searchImages = [];
            }
        },
        sortTitle:(state)=>{
            let iniData = [];
            if(state.searchImages.length>0){
                iniData=[...state.searchImages]
            }else{
                iniData=[...state.images]
            }
            

            iniData.sort(function(a, b) {
                const nameA = a.name.toUpperCase(); 
                const nameB = b.name.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                return 0;
              });

            if(state.searchImages.length>0){
                state.searchImages = [...iniData];
            }else{
                state.images=[...iniData];
            }

        },
        sortDate:(state)=>{
            let iniData = [];
            if(state.searchImages.length>0){
                iniData=[...state.searchImages]
            }else{
                iniData=[...state.images]
            }

            iniData.sort((a, b)=>{
                let dateA = a.date.toLowerCase();
                let dateB = b.date.toLowerCase();
                if (dateA < dateB) 
                {
                  return -1;
                }    
                else if (dateA > dateB)
                {
                  return 1;
                }   
                return 0;
              });

            if(state.searchImages.length>0){
                state.searchImages = [...iniData];
            }else{
                state.images=[...iniData];
            }

        },
        sortSize:(state)=>{
            let iniData = [];
            if(state.searchImages.length>0){
                iniData=[...state.searchImages]
            }else{
                iniData=[...state.images]
            }

            iniData.sort((a, b)=>{
                let sizeA = a.width*a.height;
                let sizeB = b.width*b.height;
                return sizeA-sizeB;
              });
            if(state.searchImages.length>0){
                state.searchImages = [...iniData];
            }else{
                state.images=[...iniData];
            }
        }
    }
})

export default imagesSlice.reducer;
export const {addImages,defaultImages,updateImages,selectAllImages,deleteImage,searchImages,sortTitle,sortDate,sortSize} = imagesSlice.actions