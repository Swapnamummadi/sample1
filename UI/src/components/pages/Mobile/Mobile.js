import React from 'react';
import './Mobile.css'
const Mobile = () => {
    return (
        <div className='adjust'>
            <div className='ThirdSection '>
                <div className='ThirdSectionDiv'>
                <div className='ThirdSectionImage'>
                    <img alt="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
                        className='image1'/>
                    <div className='video ThirdSectionOverflowDiv'>
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" 
                            className="image3"/>
                        <div className='Content3'>
                            <span className='Content3Part1'>Stranger Things </span><br/>
                            <span className='Content3Part2'>Downloading...</span>
                        </div>
                        <div className='gif'></div>
                    </div>
                        
                </div>
                    <div className='ThirdSectionContent reverse'>
                        <div className='right_content'>
                        <span className='Section3contentPart1'>Download your shows to watch offline</span><br/><br/>
                        <span className='Section3contentPart2'>Save your favourites easily and always have something to watch</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Mobile;