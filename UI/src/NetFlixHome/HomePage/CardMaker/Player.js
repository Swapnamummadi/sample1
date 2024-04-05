import React from 'react';
import video from '../../HomePage/nun.mp4'
import { useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from 'react-icons/io5';
// import { BsArrowLeft } from 'react-icons/bs';
import './player.css'

const Player = () => {

    const navigate =useNavigate();
    return (
        <div>
            <div className="player">
                <div className='arrowback' onClick={()=>navigate(-1)}>
                    <IoArrowBackOutline />
                </div>
                <video src={video} autoPlay loop controls muted/>
                
            </div>
        </div>
    );
};

export default Player;