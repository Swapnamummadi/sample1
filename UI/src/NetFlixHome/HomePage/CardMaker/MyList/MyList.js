

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavbarTv from '../../Navbar/NavbarTv';
import FooterforHome from '../../FooterForHompage/FooterforHome';
import MyListCard from './MyListCard';
import './list.css'
import { useSelector } from 'react-redux';
import SearchFunctionality from '../../../HomeHeaders/SearchFunctionality';


const MyList = () => {

    const userEmail = localStorage.getItem('useremail')
    const[movies,setMovies] = useState([])
    useEffect(()=>{
        axios.get(`http://localhost:1113/my-list?userEmail=${userEmail}`)
        .then(res=>setMovies(res.data))
        
    },[])

    useEffect(() => {
        document.title = "Netflix";
      });

         
  const [searchQuery,setSearchQuery] = useState('')
  const[filteredshows,setFilteredShows]=useState([])
  const[search,setSearch] = useState(false);

  const genres = useSelector((state) => state.netflix.genres);
  // console.log(genres)
  const movie = useSelector((state) => state.netflix.movies);
  // console.log(movies);

  const searchHandler = (e)=>{

       setSearchQuery(e.target.value)
       console.log(e.target.value)

      const filter = movie.filter((show)=>show.name.toLowerCase().includes(searchQuery.toLowerCase()))
      // console.log(filter)
      setFilteredShows(filter)
      setSearch(true)

  }
console.log(filteredshows)
    return (
        <div>

            <NavbarTv searchHandler={searchHandler} filteredshows={filteredshows} searchQuery={searchQuery} setSearch = {setSearch} search={search}/>
            <div className='backgroundcolor'>
                <h3 style={{zIndex:'100'}}>My List</h3>
            </div>
            <div>
        {searchQuery.length > 0 && <SearchFunctionality filteredshows={filteredshows} searchQuery={searchQuery} genres={genres}/>}
      </div>

            <div className='listarrangement'>
            {searchQuery == '' && <div className='listarrangement'>

                {movies.map((movie)=>(
                    <MyListCard data={movie} setMovies = {setMovies}/>
                ))}
                </div>
            }                          
            </div>
            <FooterforHome/>
        </div>
    );
};

export default MyList;