import React from 'react'
import { PopMovies } from '../../Data/PopMovies';
import MovieItems from '../home/MovieItems';
import { FaShareAlt } from "react-icons/fa"
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {FiLogIn} from "react-icons/fi"

const MovieInfo = ({ movie }) => {
    return (
        <div className="w-full xl:h-screen relative text-white">

            <img
                src={movie?.image}
                alt={movie.title}
                className="movie w-full hidden xl:inline-block h-full"
            />
            <div className="xl:bg-zinc-900 bg-zinc-900 flex-colo xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0 ">
                <div className=" container px-3 mx:auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8 ">
                    <div className="xl:col-span-1 w-full xl:order-none order-last h-header bg-zinc-800 border border-gray-800 rounded-lg overflow-hidden">
                        <img
                            src={movie?.image}
                            alt={movie?.title}
                            className='w-full h-full object-cover'
                        />
                    </div>
                    <div className='col-span-2 md:grid grid-cols-5 gap-4 items-center'>
                        <div className='col-span-3 flex flex-col gap-10'>
                            <h1 className='xl:text-4xl capitalize font-sans text-2xl font-bold'>
                                {movie?.title}
                            </h1>
                            <div className='flex items-center gap-4 font-semibold rounded-sm text-gray-100'>
                                <div className='flex-colo bg-[#FF0000] text-xs px-2 py-1 '>
                                    HD 4K
                                </div>
                                <MovieItems movie={movie && movie} />

                            </div>
                            <p className='text-zinc-100 text-sm font-normal leading-7'> lorem ipsum dolor sit amet, consecteturlore,lorem lorem ipsum dolor sit amet, consectetlorem lro lorem lorem ipsum dolor sit amet lorem ipsum dolor sit ametlo lorem ipsum dolor</p>
                            {/* <div className="grid sm:grid-cols-5 grid-cols-3 gap-2  p-5 w-96 bg-zinc-900 border border-gray-700 rounded-lg"> */}
                                <div className="col-span-1 flex-colo vorder-r border-zinc-600">
                                    <button className="w-10 h-10 flex-colo rounded-lg bg-gray-300 bg-opacity-10">
                                        <FaShareAlt />
                                    </button>
                                </div>
                                <div className='sm:col-span-2 col-span-3  flex justify-end font-medium text-sm '>
                                    <Link to={movie?.id} className="bg-zinc-900 hover:bg-[#FF0000] transitions border-2 border-[#FF0000] rounded-full flex-rows gap-4 w-full sm:py-3">
                                        <FaPlay className="w-3 h-3" />  Watch
                                    </Link>
                                </div>

                            {/* </div> */}
                        </div>
                        <div className='col-span-3 md:mt-0 mt-2 flex justify-end'>
                            <button className="md:w-1/4 w-full relative flex-colo bg-[#FF0000] hover:bg-transparent border-2 border-[#FF0000] transitions md:h-64 rounded font-medium " >
                                <div className='flex-rows font-bold text-xl gap-6 text-md uppercase tracking-widest absolute md:rotate-90'>
                                    Download <FiLogIn className="w-6 h-6"/>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MovieInfo;







