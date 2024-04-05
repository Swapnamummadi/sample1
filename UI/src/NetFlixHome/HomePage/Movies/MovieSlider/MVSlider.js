

import React from 'react';
import SliderForCard from '../../CardMaker/SliderForCard';
// import TvShows from '../TvShows';

const MVSlider = ({movies,genres}) => {

    // const tvSlider = (start,end)=>{
    //     return movies.slice(start,end);
    // }

    const filterData = (genreId)=>{
        return movies.filter((show)=>show.genres.include(genreId))
    }
    return (
        <div className='slider-for-card'>
            {/* <SliderForCard title="Popular" data={tvSlider(0,15)} />
            <SliderForCard title="Trending" data={tvSlider(15,30)}/>
            <SliderForCard title="Drama" data={tvSlider(30,45)}/>
            <SliderForCard title="Horror" data={tvSlider(45,60)}/>
            <SliderForCard title="NewMovies" data={tvSlider(60,75)}/>
            <SliderForCard title="Actions" data={tvSlider(70,80)}/> */}

           

                {
                genres.map((genre,index)=>{
                    return(
                        <SliderForCard key={genre.index}
                            title={genre.name}
                            data={filterData(genre.name)}
                            
                            
                        />
                    )
                })

               
            }
        </div>
    );
};

export default MVSlider;