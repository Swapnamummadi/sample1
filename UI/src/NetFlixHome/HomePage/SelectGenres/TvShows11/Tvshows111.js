

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMvGenres, getTVSeries, getTVShows, getTVShowsByGenre } from '../../Reducer1';
import { getGenres } from '../../Reducer';
import GenresList from './GenerList/GenreList';
import '../../TVShows/tvshows.css'
import './tvshow.css'
import SearchFunctionality from '../../../HomeHeaders/SearchFunctionality';
import FooterforHome from '../../FooterForHompage/FooterforHome';
import NavbarTv from '../../Navbar/NavbarTv';


const Tvshows111 = () => {

        
    
    const[randomPages,setRandomPages] = useState([]);
    const[showVedio,setShowVedio]=useState(false);
    const[showOverview,setShowOverview] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    

  const tvShows = useSelector(state=>state.tvshows1.tv)
  console.log(tvShows)

  useEffect(()=>{

    dispatch(getTVShows())
    dispatch(getTVShowsByGenre())
    dispatch(getTVSeries())
  },[dispatch])

    const genreitems = useSelector(state=>state.netflix.genres)


  useEffect(()=>{
    dispatch(getGenres())
  },[])


  useEffect(() => {
    document.title = "TVShows";
  });
    
  const [searchQuery,setSearchQuery] = useState('')
  const[filteredshows,setFilteredShows]=useState([])
  const[search,setSearch] = useState(false);

  const genres = useSelector((state) => state.netflix.genres);
  const movies = useSelector((state) => state.netflix.movies);


  const searchHandler = (e)=>{

       setSearchQuery(e.target.value)
       console.log(e.target.value)

      const filter = movies.filter((show)=>show.name.toLowerCase().includes(searchQuery.toLowerCase()))
      console.log(filter)
      setFilteredShows(filter)
      setSearch(true)

  }
// console.log(filteredshows)
  
  const shuffledArr = (arr) => {
    const shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j],shuffledArray[i]];
    }
    // console.log(JSON.stringify(shuffledArray))
    return shuffledArray;
  };

  useEffect(() => {
    if (tvShows.length > 0) {
      const shuffledMovies = shuffledArr(tvShows);
      const randomMovies = shuffledMovies.slice(0,1);
      // console.log(JSON.stringify(randomMovies))

      setTimeout(()=>{
        setShowVedio(true);
        setShowOverview(true)

      },4000)
      setRandomPages(randomMovies);
    }
  }, [tvShows]);

  for(let i = 0; i<10; i++){
 
  }
    return (

      

        <div>
           
            <NavbarTv searchHandler={searchHandler} filteredshows={filteredshows} searchQuery={searchQuery} setSearch = {setSearch} search={search}/>
            <div className='genrebackground'>
              {searchQuery == '' &&
            <GenresList title="TVShows" listGenre={genreitems} data={tvShows} trailerdata={randomPages} showVedio={showVedio} showOverview={showOverview}
              searchHandler={searchHandler} filteredshows={filteredshows} searchQuery={searchQuery} setSearch = {setSearch} search={search}
            />
             }
            </div>
            <div>
        {searchQuery.length > 0 && <SearchFunctionality filteredshows={filteredshows} searchQuery={searchQuery} genres={genres}/>}
      </div>
           
            <FooterforHome/>
        {/* //     </div> */}
        </div>
    );
};

export default Tvshows111;