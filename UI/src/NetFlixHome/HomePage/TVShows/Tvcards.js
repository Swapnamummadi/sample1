

import React, { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../Reducer';
import { getTVSeries, getTVShows } from '../Reducer1';
import './tvcard.css'

import { firebaseAuth } from '../../../components/Firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import { Link, useNavigate } from 'react-router-dom';

import Carousel from './sliderformenucards/Carousel';
// import FooterforHome from '../FooterForHompage/FooterforHome';

const Tvcards = ({data}) => {

    const navigate = useNavigate()
 

    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(!currentUser){
            navigate('/login')
        }
    })

    
    const tvShows = useSelector(state=>state.tvshows1.tv)
    // console.log(tvShows)

    const dispatch = useDispatch()
    useEffect(()=>{
        // dispatch(getMovies({type:'tv'}))
        dispatch(getTVShows())
        dispatch(getTVSeries())
      },[dispatch])
    
        const genres = useSelector(state=>state.netflix.genres)
        // console.log(genreitems)
    
      useEffect(()=>{
        dispatch(getGenres())
      },[])

      
    // const [input, setinput] = useState(true)
   


    return (
        <div>
            {/* {/* <div className='navbarcontainer' > */}
            
             <div style={{paddingTop:'15em'}}>  

                    <Carousel movies={tvShows} genres={genres} className="onechild"/>
                
            </div>

        </div> 
        
    );
};

export default Tvcards;