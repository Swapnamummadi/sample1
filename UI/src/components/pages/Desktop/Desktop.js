import React from 'react';
import '../Television/television.css';

const Desktop = () => {
    return (
        <div>
            <div className='SecondSection'>
                <div className='SecondSectionDiv'>
                    <div className='SecondSectionContent'>
                        <div className='left_content'>
                        <span className='Section2contentPart1'>Watch everywhere</span><br/><br/>
                        <span className='Section2contentPart2'>Stream unlimited movies and TV shows on your phone, tablet, laptop and TV</span>
                        </div>
                    </div>
                    <div className='SecondSectionImage'>
                    <img alt="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className="image"
                        />
                    <video autoPlay playsInline="" muted loop="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                        type="video/mp4" className='video video4'/>
                        
                    </div>
                </div>

            </div> 
        </div>
    );
};

export default Desktop;