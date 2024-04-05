
import React, { useRef, useState } from 'react';
import Card from '../../CardMaker/Card';

const CarouselCard = ({data}) => {

 
    const ref = useRef();
    const [sliderPosition,setSliderPosition] = useState(0);

   

    const sliderWrapperStyle = {
       

        transform: `translateX(-${sliderPosition * 100}%)`, // Using percentage to adjust for dynamic content width
        transition: 'transform 0.5s ease'
    }

    if (!Array.isArray(data)) {
        // Return null or other fallback content if data is not an array
        return null;
    }

    return (    
        <div className='SliderContainer'>
            {/* <h1>Movies</h1> */}

            {/* <h3>{title}</h3> */}
            <div className='Wrapper'>
            <div className="flex" ref={ref} style={sliderWrapperStyle}>
            {
                data.map((movie,index)=>{

                    return(
                        <Card movieData = {movie} index={index} key={movie.id}/>
                       
                    )
                    // {`https://image.tmdb.org/t/p/w500${e.image}`}
                })
            }
            </div>
            
            </div>

            
        </div>
    );
};



export default CarouselCard;

