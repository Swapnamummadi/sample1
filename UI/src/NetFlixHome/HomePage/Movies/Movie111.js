

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMVShows, getMVShowsByGenre, getMvGenres } from '../Reducer1';
import GenresList from '../SelectGenres/TvShows11/GenerList/GenreList';
import SearchFunctionality from '../../HomeHeaders/SearchFunctionality';
import FooterforHome from '../FooterForHompage/FooterforHome';
import NavbarTv from '../Navbar/NavbarTv';


const Movie111 = () => {

        
    
    const[randomPages,setRandomPages] = useState([]);
    const[showVedio,setShowVedio]=useState(false);
    const[showOverview,setShowOverview] = useState(false)

    const navigate = useNavigate();
    const dispatch = useDispatch();
    

  const tvShows = useSelector(state=>state.tvshows1.movie)
  // console.log(tvShows)

  useEffect(()=>{
    // dispatch(getMovies({type:'tv'}))
    dispatch(getMVShows())
    dispatch(getMVShowsByGenre())
  },[dispatch])

    const genreitems = useSelector(state=>state.netflix.genres)
    // console.log(genreitems)
    const genremvitems = useSelector(state=>state.tvshows1.mvgenres)

  useEffect(()=>{
    dispatch(getMvGenres())
  },[])



    
  
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

     
  const [searchQuery,setSearchQuery] = useState('')
  const[filteredshows,setFilteredShows]=useState([])
  const[search,setSearch] = useState(false);

  const genres = useSelector((state) => state.netflix.genres);
  // console.log(genres)
  const movies = useSelector((state) => state.netflix.movies);
  // console.log(movies);

  const searchHandler = (e)=>{

       setSearchQuery(e.target.value)
       console.log(e.target.value)

      const filter = movies.filter((show)=>show.name.toLowerCase().includes(searchQuery.toLowerCase()))
      // console.log(filter)
      setFilteredShows(filter)
      setSearch(true)

  }
// console.log(filteredshows)

useEffect(() => {
  document.title = "Movies";
});
    return (

      

        <div>
            {/* <TvNav searchHandler={searchHandler} filteredshows={filteredshows} searchQuery={searchQuery} setSearch = {setSearch} search={search}/> */}

            <NavbarTv searchHandler={searchHandler} filteredshows={filteredshows} searchQuery={searchQuery} setSearch = {setSearch} search={search}/>


            <div className='genrebackground'>
              {searchQuery == '' && 
            <GenresList title="Movies" listGenre={genreitems} data={tvShows} trailerdata={randomPages} showVedio={showVedio} showOverview={showOverview}/>
              }
            </div>
            <div>
        {searchQuery.length > 0 && <SearchFunctionality filteredshows={filteredshows} searchQuery={searchQuery} genres={genres}/>}
      </div>
            <FooterforHome/>
        
        </div>
    );
};

export default Movie111;