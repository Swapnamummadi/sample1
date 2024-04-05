

import React from 'react';

import { useNavigate } from 'react-router-dom';
import { HiPlay } from 'react-icons/hi2';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import '../../TVShows/tvshows.css'
import short from '../../../../assets/netflix.mp4'

const RandomMovies = ({datas,showVedio,showOverview}) => {

    
    const navigate = useNavigate()
    
    return (
        <div className="dispatched">
          
      <div>
      
        {datas.map((movie,index) => (
          <div key={movie.id}>
            {
              showVedio?(
                <video src={short} autoPlay loop muted className="shuffle" style={{}} />  
              ):
              
              (
                <img
              src={`https://image.tmdb.org/t/p/w1280${movie.image}`}
              alt={`Movie ${movie.id}`}
              className="shuffle  "
              style={{zIndex:'0'}}
            />
              )
            }

            <div className="overlay" >
              <h1>{movie.name}</h1>
              {
                !showOverview &&(
                  <p>{movie.overview}</p>

                )
              }

             
              <div className="buttons" >
              <button className="playvideo" onClick={()=>navigate('/player')}style={{zIndex:'0'}}><HiPlay className="svg2" style={{zIndex:'999'}}/> <span style={{zIndex:'999'}}>Play</span></button>
              <button className="playvideomore" onClick={()=>navigate('/player')}style={{zIndex:'0'}}><IoMdInformationCircleOutline className="svg2" style={{zIndex:'999'}} /> <span style={{zIndex:'999'}}>More Info</span></button>
              </div>
             

            </div>
            
          
          </div>
        ))}
      </div>
    </div>
    );
};

export default RandomMovies;