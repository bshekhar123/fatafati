import React from 'react'
import {AiFillHeart} from "react-icons/ai"
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Movie=({movie})=> {
  return (
   <>
    <div  className="border border-gray-600 p-1 hover:scale-95 transitions relative rounded overflow-hidden">
      <Link to={`/movies/${movie?.id}`} className="w-full">
      <img
        src={movie?.image}
        alt={movie?.title}
        className="w-full h-64 obeject-cover"
      />
      </Link>
      <div className="absolute flex-btn  gap-2 bottom-0 right-0 left-0 bg-black  bg-opacity-80 text-white px-4 py-3">
        <h3 className="font-semibold truncate ">{movie?.title}</h3>
        <button className="h-9 w-9 text-sm felx-col transitions hover:bg-transparent border-2 border-[#FF0000] rounded-md bg-[#FF0000] text-white">
        <AiFillHeart className="ml-2"/>
        </button>
      </div>
      
    </div>
   </>
  )
}

export default Movie;