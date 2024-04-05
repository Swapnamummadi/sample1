import React, { useState } from 'react';
import './Accordion.css'
import ToSignUp from '../SignIn/ToSignUp';
const Accordion = () => {

    const[active,setActive] = useState(null)

    const accordionFun = (i) =>{

        if(active === i){
            return setActive(null)
        }
        setActive(i)
    }
    return (
        <div className='accordionContainer'>
            
            <div className="accordion" >
            <h3>Frequently Asked Questions</h3>
                {
                    data.map((e,i)=>(
                        <div className="item">
                        <div className="title" onClick={()=> accordionFun(i)}>
                            <div className='title-question'>{e.question}</div>
                            {/* <span>{active === i ? 'X' : '+' }</span> */}
                            <span>{active === i ? (<i class="fa-sharp fa-thin fa-x"></i>) : (<i class="fa-thin fa-plus"></i>)}</span>
                        </div>
                        <div className={
                            active === i ? 'contentShow' : 'contentHide'
                        }>{e.Answer}</div>
                        </div>
                    ))
                }
            </div>
            
            <div className="tosignup">
            <ToSignUp/>
            
            </div>
        </div>
    );

    
};

const data = [
    {
        id:1,
        question:'What is Netflix?',
        Answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
        
        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
        
      },
      {
        id:2,
        question:'How much does Netflix cost?',
        Answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        
      },
      {
        id:3,
        question:'Where can i watch?',
        Answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        
      },
      {
        id:4,
        question:'How do i cancel?',
        Answer: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
       
      },
      {
        id:5,
        question:'What can i watch on Netflix?',
        Answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      },
      {
          id:6,
          question:'Is Netflix good for kids?',
          Answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        
      },
  
]

export default Accordion;