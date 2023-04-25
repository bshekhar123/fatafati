import React from 'react'
import Layout from '../../../layouts/Layout'
import { useParams } from 'react-router-dom'
import { PopMovies } from '../../../Data/PopMovies';
import MovieInfo from '../../../components/single/MovieInfo';
import MovieRates from '../../../components/single/MovieRates';
import Title from '../../../components/home/Title';
import { BsCollectionFill } from 'react-icons/bs';
import Movie from '../../../components/home/Movie';


const SingleMovie = () => {

    const { id } = useParams()
    const movie = PopMovies.find((movie) => movie.id == id)

    return (
        <Layout>
            <MovieInfo movie={movie} />
            <div className="container mx-auto min-h-screen px-2 my-6">
                <MovieRates movie={movie} />
            </div>
            <div className='my-16'>
                <Title title="Related movies" Icon={BsCollectionFill} />
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                    {
                        PopMovies.slice(0, 7)?.map((movie, index) => (
                            <Movie key={index} movie={movie} />
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default SingleMovie;