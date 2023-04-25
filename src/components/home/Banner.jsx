
import React from 'react'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MoviesData } from '../../Data/MoviesData';
import MovieItems from './MovieItems';
import { Link } from 'react-router-dom';
import {AiFillHeart} from "react-icons/ai"


const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        sidePerView={1}
        loop={true}
        speed="1000"
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full  xl:h-96 bg-gray-800 lg:h-64 h-48"
      >
        {
          MoviesData.slice(0, 6).map((movie, index) => (
           
            <SwiperSlide key={index} className="relative  rounded overflow-hidden">
              <img
                src={movie.pic}
                alt={movie.title}
                className="w-full h-full  object-cover"
              />  
              <div className="absolute bg-black bg-opacity-70 linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5gap-4">
                <h1 className="xl:text-4xl w-96 bg-white px-13 border-2 text-gray-900 bg-opacity-50   truncate capitalize  sm:w-80   sm:text-2xl text-xl font-medium ">
                  {movie.title}
                </h1>
                <div className="flex gap-5 items-center text-gray-200">
                  <MovieItems movie={movie} />
                </div>
                <div className="flex gap-5 items-center">
                  <Link to={`/movie/${movie.title}`} className="bg-[#FF0000] border-2  hover:text-gray-900 transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                    Watch
                  </Link>
                  <button className="bg-white bg-opacity-30 hover:text-[#FF0000] transitions text-sm px-4  py-3  rounded">
                    <AiFillHeart/>
                  </button>
                  
                </div>
              </div>

            </SwiperSlide>
           
          ))
        }

      </Swiper>
    </div>
  )
}

export default Banner;