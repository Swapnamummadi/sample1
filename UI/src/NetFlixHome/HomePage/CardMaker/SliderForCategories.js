import React from 'react';
import SliderForCard from './SliderForCard';
// import TvShows from '../TVShows/TvShows';
// import './styleforcategories.css'

const SliderForCategories = ({movies}) => {

    // const selectedMovies = movies.slice(from,end)
    const selectedMovies = (start,end) =>{
        return movies.slice(start,end)
    }

    return (

        <div className='slider-for-card'>
            

            <SliderForCard title="Movies" data={selectedMovies(0,15)}/>
            <SliderForCard title="TV Shows" data={selectedMovies(15,30)}/>
            <SliderForCard title="TrendingNow" data={selectedMovies(30,45)}/>
            <SliderForCard title="Popular" data={selectedMovies(45,60)}/>
            <SliderForCard title="Action Movies" data={selectedMovies(60,74)}/>
            <SliderForCard title="Discover" data={selectedMovies(74,80)}/>



        </div>
    );
};

export default SliderForCategories;