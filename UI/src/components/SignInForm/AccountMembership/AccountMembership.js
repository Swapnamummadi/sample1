import React, { Fragment, useEffect, useState } from 'react';
import RegesterHeaders from '../RegesterHeaders';
import FooterForRegistration from '../FooterForRegistration';
import '../PasswordCreation/PasswordCreation.css'
import axios from 'axios';

const AccountMembership = ({email}) => {

//     var url='https://65b77f9046324d531d54bbf9.mockapi.io/users'
//     const[userdata,setUserData] = useState('')
//     const[filterData,setFilteredData] = useState('')
    
//     useEffect(()=>{
//     const gettingDataHandler = async()=>{

//         try{
//             const response = await axios.get(url);
//             setUserData(response.data)
            
//         }catch(error){
//             console.error('Error:',error)
//         }
//     }
//     gettingDataHandler();
// },[])

//     const filtering = (e)=>{
//         const search = e.find((user)=>user.email === userdata.email)
//         console.log(search)
//     }
  
    return (
        <Fragment>
            <RegesterHeaders/>
            <div style={{height:'1.5px',backgroundColor:'#f3f3f3'}}></div>
            <div className="PassWordCreationContainer">

                <div className="PasswordCreationStepsPart1">
                    <div className="stepsInclude">
                    <span>STEP 1 OF 3</span>
                    <div className="PasswordCreationSection1">
                        <h1>Welcome back!</h1>
                        <h1>Joining Netflix is easy.</h1>
                    </div>
                    <div className="PasswordCreationSection2">
                        <p>Enter your password and you'll be watching in no time.</p>
                        
                    </div>
                    <div className="InputFieldEmail">
                        <form action="" >
                            <span>Email</span>
                            {/* <div>{email</div> */}
                           
                            {/* <input type="email"  className='InputLabels' value={userdata.email}/> */}
                            
                             {/* {userdata && userdata.map(e=>(
                                <div key={e.id}>
                                    
                                    <h6 style={{color:'black'}}>{e.email}</h6>
                                </div>
                            ))}  */}
                        {/* <div>{error && <p>{error}</p>}</div> */}
                            <input type="password" className='InputLabels' placeholder='Enter your Password' />
                            {/* <div>{error && <p>{error}</p>}</div> */}
                            <button type='button' className='InputLabels button'>Next</button>
                        </form>
                    </div>
                    </div>
                    
                </div>
            </div>
            <div style={{height:'1.5px',backgroundColor:'#f3f3f3'}}></div>
            <FooterForRegistration/>
        </Fragment>
    );
};

export default AccountMembership;