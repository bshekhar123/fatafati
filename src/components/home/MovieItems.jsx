import React from 'react'
import {SlCalender} from "react-icons/sl"
import {MdStarRate} from "react-icons/md"


const MovieItems=({movie})=> {
  return (
    <>
        <div className="flex items-center gap-2">
            <span className="text-xl font-medium">{movie.genre}</span>
        </div>
        <div className="flex items-center gap-2">
        <SlCalender className="text-red-600 w-6 h-6" />
            <span className="text-xl font-medium">{movie.year}</span>
        </div>
        <div className="flex items-center gap-2">
        <MdStarRate className="text-red-600 w-6 h-6" />

            <span className="text-xl font-medium">{movie.rate}</span>
        </div>
    </>
  )
}

export default MovieItems;