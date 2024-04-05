
import React, { useState } from 'react';
import { BiChevronDownCircle, BiLike } from 'react-icons/bi';
import { IoPlayCircleSharp } from 'react-icons/io5';
import { TiTick, TiTickOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import vid from '../vide.mp4';
import { FaRegCheckCircle } from 'react-icons/fa';
import axios from 'axios';
import './list.css'

const MyListCard = ({data,setMovies}) => {

    console.log(data)
    const navigate = useNavigate();
    const[hover,setHover] = useState(false);
    const[id,setId] = useState(null)
    // const[movies,setMovies] = useState([])

    const userEmail = localStorage.getItem('useremail')


    const getDeletedData = () =>{

        axios.get(`http://localhost:1113/my-list?userEmail=${userEmail}`)
        .then(res=>setMovies(res.data))
        
    }
    const removeMovie = (id)=>{
        axios.delete(`http://localhost:1113/my-list/${id}`)
        .then(()=>getDeletedData())
    }

    const vote_average = Math.ceil(data.details.vote_average*10);
   console.log(vote_average)
    return (
        <div
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=>setHover(false)} 
        className='moviescontainer' >

            <img src={`https://image.tmdb.org/t/p/w500${data.details.imageUrl}`} 
                 alt="movie poster" className='moviesWidth'
                 onClick={()=>navigate("/player")}
             />

            {
                hover && (
                    <div className="hovering">
                        <div className="image-and-video">
                            <img src={`https://image.tmdb.org/t/p/w500${data.details.imageUrl}`} alt=""
                            onClick={()=>navigate("/player")}
                            />
                            <video src={vid}
                            autoPlay
                            loop
                            muted
                            onClick={()=> navigate("/player")}
                            />
                        </div>

                        <div className="information">

                            <h4>{data.details.name}</h4>
                            <small style={{color:'green',fontSize:'17px', marginBottom:'1em', paddingLeft:'5px'}}>{vote_average}% Match</small>

                            <div className="icons">

                                <div className="controls">
                                    <IoPlayCircleSharp
                                    className='svg'
                                    title='play'
                                    onClick={()=>navigate("/player")}
                                    />

                                    <FaRegCheckCircle title='Remove from My List'
                                        className='svg'
                                        onClick={()=>removeMovie(data._id)}
                                        
                                         />
                                         
                                    <BiLike title="like" className='svgg'/>
                                </div>
                                <div className="info">
                                    <BiChevronDownCircle title='More info'
                                        className='svg'
                                    />

                                </div>

                            </div>
                            <span style={{fontSize:'15px', paddingLeft:'5px'}}>{data.details.release_date}</span>

                               <div className="genres">
                                <ul>
                                    {data.details.genres.map((genre,index)=>(
                                        <li key={index} className='list'>{genre}</li>
                                    ))}
                                </ul>
                            </div>  
                        </div>
                    </div>
                )
            }
        
        {/* <p>{movieData.index}</p> */}
        {/* <TvShows moviedata={movieData} /> */}

    </div>

    );
};

export default MyListCard;