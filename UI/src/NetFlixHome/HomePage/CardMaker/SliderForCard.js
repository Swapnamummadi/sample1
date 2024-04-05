
import React, { useRef, useState } from 'react';
import Card from './Card';
import './styleforcard.css'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
// import TvShows from '../TVShows/TvShows';



const SliderForCard = ({data,title}) => {

    const ref = useRef();
    const [sliderPosition,setSliderPosition] = useState(0);

    const handleDirection = (direction) =>{
        const slideWidth = ref.current.offsetWidth;
        const maxSliderPosition = data.length-1;

        let newPosition;
        if(direction === 'left' && sliderPosition > 0){
            newPosition = sliderPosition-0.2;
            // ref.current.style.tr

        }else if(direction === 'right' && sliderPosition < maxSliderPosition){
            newPosition = sliderPosition+0.3;
        }else{
            return;
        }

        setSliderPosition(newPosition);
        ref.current.style.transform = `translate(-${newPosition * slideWidth}px)`;
    }

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

            <h3>{title}</h3>
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
            <div className='sliderActions'>
                <div className="slider-action left" onClick={()=>handleDirection("left")}>
                    <AiOutlineLeft className='svg1'/>
                </div>
                <div className="slider-action right" onClick={()=>handleDirection("right")}>
                    <AiOutlineRight className='svg1'/>
                </div>
            </div>
            </div>

            
        </div>
    );
};

export default React.memo(SliderForCard);