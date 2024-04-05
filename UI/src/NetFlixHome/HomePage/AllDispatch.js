

import React from 'react';
// import short from '.././HomePage/nun.mp4'

import short from '../../assets/legacy.mp4'
import { useNavigate } from 'react-router-dom';
import { HiPlay } from 'react-icons/hi2';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import SliderForCategories from './CardMaker/SliderForCategories';

const AllDispatch = ({randomPages,showVedio,showOverview,movies}) => {

    const navigate = useNavigate()
    return (
        <div>
            
            <div className='dispatched'>
        {randomPages.map((movie) => (
          <div key={movie.id}>
            {
              showVedio?(
                <video src={short} autoPlay loop muted className="shuffle" style={{height:'112vh', objectFit: 'cover'}} />

              ):
              (
                <img
              src={`https://image.tmdb.org/t/p/w1280${movie.image}`}
              alt={`Movie ${movie.id}`}
              className="shuffle"
            />
              )
            }
            

            {/* <h2>{movie.name}</h2> */}

            <div className="overlay">
              <h1>{movie.name}</h1>
              {
                !showOverview &&(
                  <p >{movie.overview}</p>

                )
              }

             
              <div className="buttons">
              <button className="playvideo" onClick={()=>navigate('/player')}><HiPlay className="svg2"/> <span>Play</span></button>
              <button className="playvideomore" onClick={()=>navigate('/player')}><IoMdInformationCircleOutline className="svg2"/> <span>More Info</span></button>
              </div>
              {/* <div className="buttons">

                
              </div> */}
              
              {/* <span style={{color:'red'}}>{movie.overview}</span> */}

            </div>
            <SliderForCategories movies={movies} />
           {/* <HomeHeaders shows={movies}/> */}
          
          </div>
        ))}
      </div>
        </div>
    );
};

export default AllDispatch;