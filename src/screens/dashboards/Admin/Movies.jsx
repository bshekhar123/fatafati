import React, { useState } from 'react'
import Layout from '../../../layouts/Layout'
import Filters from '../../../components/home/Filters';
import Movie from '../../../components/home/Movie';
import { PopMovies } from '../../../Data/PopMovies';
import { CgSpinner } from 'react-icons/cg';



const Movies = () => {
const maxpage= 10
const [page , setPage]= useState(maxpage)
const HandleLoadingMore = ()=>{
    setPage(page+maxpage)
}

    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Filters />
                
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        PopMovies.slice(0,page)?.map((movie, index) => (
                            <Movie key={index} movie={movie} />
                        ))
                    }
                </div>
                <div className="w-full flex-colo md:my-20 my-10">
                    <button onclick={HandleLoadingMore} className='flex-rows gap-3 text-white py-3  rounded font-semibold border-2 border-[#FF0000]'>
                        Loading More <CgSpinner className='animate-spin'/>
                    </button>
                </div>

            </div>

        </Layout>
    )
}

export default Movies;