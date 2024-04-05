import React from 'react';
import Header from '../Header/Header';
import './Landing.css'
import ToSignUp from '../SignIn/ToSignUp';
import Television from '../Television/Television';
import Mobile from '../Mobile/Mobile';
import Desktop from '../Desktop/Desktop';
import Kids from '../Kids/Kids';
import Footer from '../Footer/Footer';
import Accordion from '../Accordian/Accordion';


const LandingPage = () => {
    return (
        <div className='main'>
            <div>
            <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" 
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
            className="FirstSectionBg"></img>
            
            <div className='OuterSection'>
                <div className='OuterHeader'>
                    <Header/>
                </div>  
                <div className='OuterSection-inside'>
                    <div className='content'>
                        <span className='contentPart1'>Unlimited movies, TV shows and more</span>
                        <span className='contentPart2'>Watch anywhere. Cancel anytime.</span>
                    </div> 
                    <ToSignUp/>
                </div>
                <div>
                    

                </div>
                
            </div>
             <Television/>
                    <Mobile/>
                    <Desktop/>
                    <Kids/> 
                    <Accordion/>


                    <Footer/>
            </div>


           
           
        </div>
        
    );
};

export default LandingPage;