import React from 'react';
import './television.css'

const Television = () => {
    return (
        <div>
            <div className='SecondSection'>
                <div className='SecondSectionDiv'>
                    <div className='SecondSectionContent'>
                        <div className='left_content'>
                        <span className='Section2contentPart1'>Enjoy on your TV</span><br/><br/>
                        <span className='Section2contentPart2'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray players and more.</span>
                        </div>
                    </div>
                    <div className='SecondSectionImage'>
                    <img alt="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className="image"
                        />
                    <video autoPlay playsInline="" muted loop="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" 
                        type="video/mp4" className='video'/>
                        
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Television;