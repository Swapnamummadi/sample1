import React, { useEffect, useState } from 'react';
import './PasswordCreation.css'
import RegesterHeaders from '../RegesterHeaders'
import FooterForRegistration from '../FooterForRegistration'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../../Firebase/config';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const PasswordCreation = ({setEmail1}) => {

    const[email,setEmail] = useState('')
    const[error1,setError1] = useState('');
    const[error2,setError2] = useState('');

    const[password,setPassword] = useState('')
    

    useEffect(()=>{
        const storedEmail = localStorage.getItem('email')
        if(setEmail){
            setEmail(storedEmail);
        }
    },[])

    useEffect(()=>{
        document.title="Netflix"
    })

    const newEmailHandler = (e)=>{

        const newEmail = setEmail(localStorage.setItem('email',e.target.value))
        localStorage.setItem('email',e.target.value)
        // const getstore = localStorage.getItem('email')
        // console.log(getstore)
    }
    const passwordHandler=(e)=>{
        setPassword(e.target.value);
        
    }

    var url = "https://65b77f9046324d531d54bbf9.mockapi.io/users";
    const navigate = useNavigate()

    
    const handleChange=(async (e)=>{
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(firebaseAuth, email, password).then(user => navigate('/browse'))
            await axios.post(url,{email, password});
            // setEmail1(email)
            

        }catch(err){
            if(err.code=='auth/email-already-in-use'){
                setError1("Email is already exists")
            }else if(err.code== 'auth/invalid-email'){
                setError1('Email is not valid')
            }else if(err.code==='auth/missing-password'){
                setError2("Please enter your password")
            }else if(err.code==='auth/weak-password'){
                setError2("Password should contains at least 8 characters")
            }
        }
    })
   
    return (
        <div>
            <RegesterHeaders/>
            <div style={{height:'1.5px',backgroundColor:'#f3f3f3'}}></div>
            <div className="PassWordCreationContainer">

                <div className="PasswordCreationStepsPart1">
                    <div className="stepsInclude">
                    <span>STEP 1 OF 3</span>
                    <div className="PasswordCreationSection1">
                        <h1>Create a password to start your membership</h1>
                    </div>
                    <div className="PasswordCreationSection2">
                        <p>Just a few more steps and you're done!</p>
                        <p>We hate paperwork, too.</p>
                    </div>
                    <div className="InputFieldEmail">
                        <form action="" >
                            <input type="email"  className='InputLabels' placeholder='Email address' value={email} onChange={newEmailHandler} />
                            <div>{error1 && <p>{error1}</p>}</div>
                            <input type="password" className='InputLabels' placeholder='Password' value={password} onChange={passwordHandler}/>
                            <div>{error2 && <p>{error2}</p>}</div>
                            
                            <button type='button' className='InputLabels button' onClick={handleChange}>Next</button>
                           
                        </form>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div style={{height:'1.5px',backgroundColor:'#f3f3f3'}}></div>
            
            <FooterForRegistration/>
        </div>
    );
};

export default PasswordCreation;