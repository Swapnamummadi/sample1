import React from 'react';
import CarouselCard from './CarouselCard';

const Carousel = ({movies,genres}) => {

    const filterData = (genreName) => {

        return movies.filter((show) => show.genres.includes(genreName));
    };

    console.log(genres)
    return (
        // <div>
        //     <SliderForCard key={movies.id} data={movies} />
        // </div>

        <div className='slider-for-card'>
           

             {   
                 genres.map((genre,index)=>{
                     const hasShows = movies.some((show)=>show.genres.includes(genre.name));
                     const filteredShows = filterData(movies, genre.name);
                    //  console.log(filteredShows)
                    
                         return(
                       
                      

                        <CarouselCard key={genre.index} data={filterData(genre.name).slice(0,5)}/>
                         )
                    

                   
                 })

               
             }

            

            
         </div>
    );
};

export default Carousel;

