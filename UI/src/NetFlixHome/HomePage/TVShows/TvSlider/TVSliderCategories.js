

import React from 'react';
import SliderForCard from '../../CardMaker/SliderForCard';
// import TvShows from '../TvShows';

import './style.css'

const TVSliderCategories = ({movies,genres,index}) => {

    // const tvSlider = (start,end)=>{
    //     return movies.slice(start,end);
    // }

    // console.log(movies)
    const filterData = (genreName) => {

        // const mv = movies.filter((show)=>show.genres.includes("Romance"))
        // console.log(mv)
        return movies.filter((show) => show.genres.includes(genreName));
    };

    console.log(genres)

    // console.log(filterData)

    // filterData(['actions,movie'])
    // const action = movies.filter((show,index)=>show.inludes(id))
    // console.log(action)

    // console.log(movies)
    // console.log(movies[0].genres)

    // const movieArr = []
    // const movie_name = ()=>{

    // for(let i = 0; i<movies.length;i++){
    //     movieArr.push(movies[i].genres);
    //     // movieArr.push(movies.)
    //     console.log(movieArr)
    // }
    // }
    // movie_name()

    // console.log(genres[0].id)

    return (
        <div className='slider-for-card'>
           

            {   
                genres.map((genre,index)=>{
                    const hasShows = movies.some((show)=>show.genres.includes(genre.name));
                    const filteredShows = filterData(movies, genre.name);
                    console.log(filteredShows)
                    if(hasShows){
                        return(
                       
                            <SliderForCard key={genre.index}
                                title={genre.name}
                                data={filterData(genre.name).slice(0,10)}
                                
                                
                            />
                        )
                    }
                    return null

                   
                })

               
            }

            

            
        </div>
    );
};

export default React.memo(TVSliderCategories);