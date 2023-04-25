import React from 'react'
import hoi from "../../Data/movieimage/hoichoi.png"

const Head = ({title}) => {
    return (
        <div className="w-full bg-slate-900 lg:h-64 h-40 relative overflow-hidden rounded-md ">
            <img
                src={hoi}
                alt="about-us"
                className='w-full h-full object-cover'
            />
            <div className="absolute bg-gradient-to-r from-gray-900 bg-opacity-70 linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0  lg:gap-8 md:gap-5gap-4" />
            <div className="absolute lg:top-24 top-16 w-full flex-colo">
                <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">{title && title}</h1>
            </div>
        </div>
    )
}

export default Head;