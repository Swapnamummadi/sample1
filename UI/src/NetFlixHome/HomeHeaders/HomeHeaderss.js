
import React, { Fragment, useEffect, useState } from 'react';
// import './HomeHeaders.css';
import { Link, useNavigate } from 'react-router-dom';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import { firebaseAuth } from '../../components/Firebase/config';


const HomeHeaderss = ({searchHandler,filteredShows,searchQuery,setSearch,search}) => {

    const navigate = useNavigate()
    console.log(search)
    

    useEffect(()=>{
        document.title="Home - Netflix"
    })


    onAuthStateChanged(firebaseAuth, (currentUser)=> {
        if(!currentUser){
            navigate('/login')
        }
    })

    const userEmail = localStorage.getItem('useremail');
    console.log(userEmail);

    const[menutoggle,setMenuToggle] = useState(false)
    

    const[isScroll,setScroll] = useState(false)

    const scrollHandler = ()=>{
        if(window.scrollY > 0){
            setScroll(true)
        }
        else{
            setScroll(false)
        }
    }

    window.addEventListener('scroll',scrollHandler)
    

    return (
        
       <Fragment>
        
        
        <div className={`${isScroll ? 'NavbarContainer navbar-bg' : 'NavbarContainer'}`} >
            
            
            <div className="NavbarSection">

                <div className="menucomponent">
                    <div className="menu" style={{color:'white'}} onClick={()=>setMenuToggle(!menutoggle)} >
                            &#9776;
                    </div>

                    {menutoggle && (
                    <div className="menuList1">
                        <div className='menuList1'>
                        <img class="profile-icon" src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""/> 
                        <span>{userEmail}</span>
                        <div className='signoutnetflix' onClick={()=> signOut(firebaseAuth)}>Sign Out of Netflix</div>
                        </div>
                    
                    
                    </div>
                )}
                {menutoggle &&(
                    <div className='menu-mobile'>
                    <ul className='menuList2'>
                        
                        <li><Link to='/browser'>Home</Link></li>

                        <li><Link to='/my-list'>My List</Link></li>
                        <li><Link to=''>Thrillers</Link></li>
                        <li><Link to=''>Hindi Movies & TV</Link></li>
                        <li><Link to=''>Children & Family/</Link></li>
                        <li><Link to=''>International Movies & TV</Link></li>
                        <li><Link to=''>Malayam-Language</Link></li>
                        <li><Link to=''>Movies</Link></li>
                        <li><Link to=''>Action</Link></li>
                        <li><Link to=''>Comedy</Link></li>
                        <li><Link to=''>Fantacy</Link></li>
                        <li><Link to=''>BollyWood</Link></li>
                        <li><Link to=''>HollyWood</Link></li>
                        
                    </ul>
                    </div>
                  )}  
                </div>


                <div className="navbar-logo">
                <svg viewBox="0 0 111 30" 
                     xmlns="http://www.w3.org/2000/svg" 
                     xmlnsXlink="http://www.w3.org/1999/xlink" 
                     className="netflix-svgNav"><g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" class=""></path></g></svg>
                </div>

                <div className="navbarSection2">
                    <ul className="ListItems">
                        <li><Link to='/browser'>Home</Link></li>
                        <li><Link to='/tv'>TV Shows</Link></li>
                        <li><Link to='/movie'>Movies</Link></li>
                        <li><Link to='/my-list'>My List</Link></li>
                    </ul>
                    <select name="" id="" className="options" >
                        <option value="">Browse</option>
                       <option value="" onClick={()=>navigate('/browser')}>
                            Home
                        </option>
                       <option value="" onClick={()=>navigate('/tv')}>TV Shows</option>
                        <option value="" onClick={()=>navigate('/movie')}>Movies</option>
                        <option value="" onClick={()=>navigate('/my-list')}>My List</option>
                    </select>

                    
                    <div className="childrenpagelink1">
                        <span>Children</span>
                    </div>
                    
                </div>

                <div className="NavbarSection3">
                    <div className="Searchtab">
                        <form action="" className='search'>
                            <input type="text" className='search-bar' placeholder='Titles,peoples,genres'
                             value={searchQuery} onChange={searchHandler} />
                            <input type="text" className='search-bar1' placeholder='Search'
                            value={searchQuery} onChange={searchHandler} />
                            
                            <span className='searchicon'><i class="fa-solid fa-magnifying-glass" ></i></span>

                        </form>

                    </div>
                    <div className="childrenpagelink">
                        <span>Children</span>
                    </div>
                    <div className="notificationBell">
                    {/* <i class="fa-regular fa-bell"></i> */}
                    <i class="fa-regular fa-bell"></i>
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-4z3qvp e1svuwfo1" data-name="Bell" aria-labelledby=":Rlp94m:" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"></path></svg> */}
                    </div>
                   

                        <div className="account2">
                            <div className="account2part1">

                            <img class="profile-icon" src="https://occ-0-2663-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229" alt=""/> 
                            <span className='fs-text-1'>{userEmail}</span>
                            
                            <div className="account2part2">
                                <span onClick={()=> signOut(firebaseAuth)}>Sign Out</span>

                            </div>
                            </div>
                            
                        </div>
                        {/* <span></span> */}
                    </div>
                </div>


            </div>
            
        {/* </div> */}


        <div>
            
        </div>

        <div>
        </div>

        
       </Fragment>
    );
};

export default React.memo(HomeHeaderss);