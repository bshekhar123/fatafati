import React from "react";
import Banner from "../../../components/home/Banner";
import PopularMovies from "../../../components/home/PopularMovies";
import Promos from "../../../components/home/Promos";
import TopRated from "../../../components/home/TopRated";
import Layout from "../../../layouts/Layout";


const HomeScreen = () => {
    return (
        <Layout>
            <div className="container mx-auto min-h-screen px-2 mb-6">
                <Banner />
                <PopularMovies />
                <Promos />
                <TopRated />
            </div>

        </Layout>
    )
}

export default HomeScreen; 