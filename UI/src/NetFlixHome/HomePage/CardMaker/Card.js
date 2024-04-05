
import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './card.css';
import vid from '../../../assets/time.mp4';
import { IoPlayCircleSharp } from "react-icons/io5";
import { BiCheckCircle, BiChevronDownCircle, BiLike } from "react-icons/bi";
import { LuPlusCircle } from "react-icons/lu";
import axios from 'axios';


const Card = ({movieData}) => {

   const vote_average = Math.ceil(movieData.vote_average *10)
//    console.log(vote_average)
    const[AddedList,setAddedList] = useState(false)

    const userEmail = localStorage.getItem('useremail')
    // console.log(userEmail)
 
    console.log(movieData)
    const myList = (e)=>{

        e.preventDefault();
        const{name,image,genres,vote_average,release_date} = movieData;
        
        try{
            axios.post("http://localhost:1113/my-list",{userEmail,name,imageUrl:image,genres,vote_average,release_date})
            .then(res=>{console.log(res.data)})
           .catch(error=>{console.error('Error:',error)})
           setAddedList(true)
        }
        catch(e){
            console.error(e)
        }
        
    }

    const removeMovie = ()=>{
        axios.delete(`http://localhost:1113/my-list/${movieData._id}`)
        .then(res=>res.data)
    }


    const navigate = useNavigate();
    const[hover,setHover] = useState(false);
    

    return (
        <div
            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=>setHover(false)} 
            className='moviescontainer'>

                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} 
                     alt="movie poster" className='moviesWidth'
                     onClick={()=>navigate("/player")}
                 />

                {
                    hover && (
                        <div className="hovering">
                            <div className="image-and-video">
                                <img src={`https://image.tmdb.org/t/p/w500${movieData.image}`} alt=""
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

                                <h4>{movieData.name}</h4>
                                <small style={{color:'green',fontSize:'17px', marginBottom:'1em', paddingLeft:'5px'}}>{vote_average}% Match</small>


                                <div className="icons">
  
                                    <div className="controls">
                                        <IoPlayCircleSharp
                                        className='svg'
                                        title='play'
                                        onClick={()=>navigate("/player")}
                                        />
                                       
                                        {AddedList ? (
                                            <BiCheckCircle 
                                                title='Remove from List'
                                                className='svg'
                                                onClick={(removeMovie)}
                                            />
                                        ): (
                                            <LuPlusCircle title='add to mylist'
                                                className='svg'
                                                onClick={myList}
                                         />
                                         )}

                                        
                                        

                                        <BiLike title="like" className='svgg'/>
                                        {/* <RiThumbDownFill title="dislike"
                                        className='svg'
                                        /> */}
                                        
                                    </div>
                                    <div className="info">
                                        <BiChevronDownCircle title='More info'
                                            className='svg'
                                        />

                                    </div>

                                </div>
                                <span style={{fontSize:'15px', paddingLeft:'5px'}}>{movieData.release_date}</span>

                                <div className="genres">
                                    <ul>
                                        {movieData.genres.map((genre,index)=>(
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
    // const Container = styled.div``

};

export default Card;