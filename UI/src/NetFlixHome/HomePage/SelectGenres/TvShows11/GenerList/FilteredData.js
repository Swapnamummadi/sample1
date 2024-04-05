

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTVShows } from '../../../Reducer1';
import short from '../../../../HomePage/short.mp4'
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { CiCircleChevDown } from "react-icons/ci";

const FilteredData = ({data}) => {

    console.log(data)
    const img = useRef()
    const dispatch = useDispatch()
    const select = useSelector((state)=>state.tvshows1.tv)

    data= data.filter((value,index,mt)=> 
    index === mt.findIndex((e) => (
        e.title=== value.title
     ))||mt.findIndex((e) => (
       e.name=== value.name
    ))
   )
   
   useEffect(() => {
    dispatch(getTVShows())
}, [])
    return (
        <div>
            <div id="main-cards-container" >

<div id="cardsContainer" >

    {
        data.map((e) =>



            <div className="Card" key={e.id} >

               
                <div className="imgCard"  >
                    <div className='itemHover' >
                        <img className='src pic' src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} ref={img} alt="" />

                        <video className="src vid" src={short.mp4} autoPlay muted></video>

                        <div className='vid content_box'>

                            <h4>{e.title || e.name}</h4>
                            <div className='icons'>
                                <div>
                                    <FaCirclePlay size={28} />


                                    <IoIosAddCircleOutline size={32} />

                                    <AiOutlineLike size={28} style={{ border: '2px solid white', borderRadius: '50%', padding: '5px' }} />
                                </div>
                                <div>
                                    <CiCircleChevDown size={32} />

                                </div>
                            </div>
                            <small style={{ color: 'green', fontWeight: '500', marginLeft: '2rem' }}>96% Match</small>
                            <small style={{ color: 'white', margin: '0px 1rem', marginTop: '-1rem' }}>-{e.original_language}-</small>
                            <small style={{ color: 'white' }}>Avg-{e.vote_count}</small>

                        </div>
                    </div>
                </div>
            </div>

        )
    }


</div>

</div>
        </div>
    );
};

export default FilteredData;