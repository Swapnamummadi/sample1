import React, { useEffect, useState, memo, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGenres,
  getMovies,
  getDataByGenre
} from "./Reducer";
import "./Dispatching.css";
import FooterforHome from "./FooterForHompage/FooterforHome";
import { getMVShows, getMVShowsByGenre, getTVShows, getTVShowsByGenre } from "./Reducer1";
import HomeHeader from "../HomeHeaders/HomeHeader/HomeHeader";
import SearchFunctionality from "../HomeHeaders/SearchFunctionality";
import AllDispatch from "./AllDispatch";

const Dispatching = () => {

  const dispatch = useDispatch();
  const [randomPages, setRandomPages] = useState([]);
  const[showVedio,setShowVedio]=useState(false);
  const[showOverview,setShowOverview] = useState(false)
  
  
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
      console.log(filter)
      setFilteredShows(filter)
      setSearch(true)

  }
console.log(filteredshows)

  // const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getMovies({ type: "all" }));
    dispatch(getDataByGenre({ type: "movie" }));
  }, [dispatch]);

 



  useEffect(()=>{
      dispatch(getTVShows())
      dispatch(getTVShowsByGenre())
      dispatch(getMVShows())
      dispatch(getMVShowsByGenre())
  },[dispatch])

  
  const shuffledArr = (arr) => {
    const shuffledArray = [...arr];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j],shuffledArray[i]];
    }
    console.log(JSON.stringify(shuffledArray))
    return shuffledArray;
  };

  useEffect(() => {
    if (movies.length > 0) {
      const shuffledMovies = shuffledArr(movies);
      const randomMovies = shuffledMovies.slice(0,1);

      setTimeout(()=>{
        setShowVedio(true);
        setShowOverview(true)

      },4000)
      setRandomPages(randomMovies);
    }
  }, [movies]);


  


  const url = "https://image.tmdb.org/t/p/w500";
  return (
    <Fragment>
      
      <HomeHeader searchHandler={searchHandler} filteredshows={filteredshows} searchQuery={searchQuery} setSearch = {setSearch} search={search}/>

   
      <div>
        {searchQuery.length > 0 && <SearchFunctionality filteredshows={filteredshows} searchQuery={searchQuery} genres={genres}/>}
      </div>

      <div>
        {searchQuery == '' && <AllDispatch randomPages={randomPages} showVedio={showVedio} showOverview={showOverview} movies={movies}/>}
      </div>

      
      <FooterforHome/>
    
    </Fragment>
  );
};

export default React.memo(Dispatching);


