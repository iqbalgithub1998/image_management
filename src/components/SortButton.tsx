import React from 'react'

type Props = {
    title:string,
    sortclick: () => void;
}

function SortButton({title,sortclick}:Props) {
  return (
    <button onClick={sortclick} className="bg-transparent text-gray-400 border border-gray-400 px-4 py-1 text-sm text-center hover:bg-blue-200 bg-opacity-5 hover:border-blue-500 hover:text-blue-400 ml-4 rounded-md active:shadow-md">{title}</button>
  )
}

export default SortButton