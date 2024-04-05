import React, { useEffect, useState } from 'react';
import './ToSignUp.css';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { validEmail } from './RegEx';
import axios from 'axios';

const ToSignUp = () => {

    const[email,setEmail] = useState('');
    const[emailErr,setEmailErr] = useState('')
    const[userdata,setUserData] = useState();
    const navigate = useNavigate();

    const[email1,setEmail1] = useState([])


    
    
    function emailHandler(e){
        setEmail(e.target.value)

    }

    useEffect(()=>{
        axios.get('https://65b77f9046324d531d54bbf9.mockapi.io/users')
        .then(res => setUserData(res.data))
    },[])

    
    
    const validateEmail = (e) =>{
        e.preventDefault();

        if(email == '' || email === null){
            setEmailErr('Email is required')

        } else if(!validEmail.test(email)){
            setEmailErr('Please enter a valid email address')
        } else{
            localStorage.setItem('email', email)

            const results = userdata.find(p=> p.email === email)

            if(results){
                navigate('/login', {state:{email}});
            }else{
            navigate('/signup', {state:{email}});

            }
        }
    }


    return (
        <div className='SignUp-Container'>
            <h3 className='SignUpContent'>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className='SignUp-ContainerButtons'>
            <div className='emailContainer'>
                <input type='email' placeholder='Email address ' 
                value={email} 
                onChange={emailHandler} 
                className='signUpEmail' 
                size='24' required
                style={{borderColor:emailErr ? 'red' : 'initial'}}
                />
            </div>
            {/* <Link to='/signup'> */}

            
            <button className='btn signUpStart' onClick={validateEmail}>Get Started <MdKeyboardArrowRight /></button> <br />  
            {/* </Link> */}
           
        </div>
        {emailErr && <p className='ErrorStyling'>{emailErr}</p>}

        </div>
    );
};



export default ToSignUp;