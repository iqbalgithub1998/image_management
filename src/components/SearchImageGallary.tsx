import React from 'react'
import { Images } from '../app/type'
import SearchImageCard from './SearchImageCard'

type Props = {
  data:Images[]
  selectImage: (image: Images) => void;
  selected:Images
}

const SearchImageGallary :React.FC<Props> = ({data,selectImage,selected}) => {
    
    return (
        <div className="px-5 sm:px-10 py-7  grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
            {
                data.map(obj=>(
                    <SearchImageCard key={obj.id} search={obj}  selectImage={selectImage} selected={selected.height!==0 && selected.id===obj.id ? true:false} />
                ))
            }
        </div>
      )
}

export default SearchImageGallary