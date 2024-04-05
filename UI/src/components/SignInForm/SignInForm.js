import React, { Fragment, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './SignInForm.css'
import Footer from './Footer';

// import FooterForRegistration from '../FooterForRegistration'
// import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '../Firebase/config';
// import { setPersistence } from 'firebase/auth';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";





const SignInForm = () => {

    // const localEmail = localStorage.getItem('email')
    const location = useLocation()
    const[email,setEmail] = useState(location.state?.email);
    const[password,setPassword] = useState('');
    const[errors1,setErrors1] = useState('');
    const[errors2,setErrors2] = useState('');

    const[showPassword,setShowPassword] = useState(false)
    const[rememberMe,setRememberMe] = useState(false)

    
    const navigate = useNavigate();

    const emailHandler = (e)=>{

        setEmail(e.target.value);
    }
    const passwordHandler = (e)=>{

        setPassword(e.target.value);
    }
    
    const handleChange=(async (e)=>{
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(firebaseAuth, email, password).then(user => navigate('/browser'));
            localStorage.setItem('useremail', email);
            localStorage.setItem('userPass',password)
            
        }catch(err){
            if(err.code ==='auth/email-already-in-use'){
                setErrors2("Email is already exists")
            }else if(err.code === 'auth/invalid-email'){
                setErrors2('Email is not valid')
            }else if(err.code ==='auth/weak-password'){
                setErrors1("Password should be 6 and 60 charecters")
            }else if(err.code ==='auth/missing-password'){
                setErrors1("Please enter your password")
            }else if(err.code ==='auth/invalid-credentials'){
                setErrors1("Please enter your password")
            }
        }
    })

  
    useEffect(()=>{
        document.title="Netflix"
    })

    
    const rememberHandler = (e) => {

        e.preventDefault()
        // setRememberMe(!rememberMe)
        setEmail()
    }
    

    return (
        <Fragment>
            
            
            <div className="SigninComponent">
            <img src="" alt="" />
                <div className="NetflixLogo">
                <Link to= '/'>
                <svg viewBox="0 0 111 30" 
                     xmlns="http://www.w3.org/2000/svg" 
                     xmlnsXlink="http://www.w3.org/1999/xlink" 
                     className="netflix-svg1"><g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" class=""></path></g></svg>
                </Link>
                </div>

                <div className="SigninContainer">
                <div>
                    <div className="SignInFormOuterDiv">

                        <div className="SignInFormInnerDiv">

                            

                            <h3>Sign in</h3>
                           

                            <form action="" className='Form' >
                                <input type="email" placeholder='Email or phone number' className='FormInput' value={email} onChange={emailHandler}
                                
                                />
                                <div>{errors2 && <p>{errors2}</p>}</div>
                                <br /> 


                                <input type={showPassword?'text':'password'} placeholder='Password' className='FormInput' value={password} onChange={passwordHandler}
                                // style={{borderColor: errors? 'red':'initial'}}

                                /> 
                                <span type="button" className="toggle-password" onClick={()=>setShowPassword(!showPassword)}>
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                    </span>
                                <div>{errors1 && <p>{errors1}</p>}</div>
                                {/* {errors.password && <div className='error' style={{color:'red', fontSize:'13px'}}>{errors.password}</div>} */}
                                
                                <br /> 
                                <button type='submit' className='SignBtn' onClick={handleChange}>Sign In</button>

                                {/* {errors.email && <div>{errors.email}</div>} */}
                                <p>OR</p>

                                <button className='SignInCode'>Use a sign-in code</button>
                                <p style={{fontSize:'15px'}}><Link>Forgot password?</Link></p> 

                                
                            </form>
                            
                        </div>


                         <footer className='SignInFormFooter'>
                            
                            <div className="remember">
                                <input type="checkbox"  className='checkbox1' /> <label htmlFor="" className='labelforcheckbox'>Remember me</label>
                                <p className='newtonetflix'>New to Netflix?<Link to='/'>Sign Up now.</Link></p> 

                            </div>
                            <div className="privacy">
                                <span className='privacyPart1'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
                                

                                <Link className='learnmoreContent'>Learn more.</Link>
                                {/* <span id="" data-uia="recaptcha-disclosure-text">The information collected by Google reCAPTCHA is subject to the Google <Link to="https://policies.google.com/privacy" id="recaptcha-privacy-link" data-uia="recaptcha-privacy-link" target="_blank">Privacy Policy</Link> and <Link to="https://policies.google.com/terms" id="recaptcha-tos-link" data-uia="recaptcha-tos-link" target="_blank">Terms of Service</Link>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</span> */}
                                
                            </div>
                            


                        </footer> 
                    </div>
                     
                    
                    </div>
                    
                </div>
                <Footer/>
            </div>

            
        </Fragment>
    );
};

export default SignInForm;