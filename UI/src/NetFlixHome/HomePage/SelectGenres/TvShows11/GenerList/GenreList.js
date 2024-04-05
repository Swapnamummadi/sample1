
import React, { useEffect, useRef, useState } from 'react';
// import './GenresList.css'
import { RiArrowDownSFill } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { RiMenu2Line } from "react-icons/ri";

import '../../genreselect.css'
import { SiWindows } from 'react-icons/si';
import Tvcards from '../../../TVShows/Tvcards';

import TVSliderCategories from '../../../TVShows/TvSlider/TVSliderCategories';
import RandomMovies from '../RandomMovies';
import SliderForCard from '../../../CardMaker/SliderForCard';
import SliderForCategories from '../../../CardMaker/SliderForCategories';





const GenresList = ({ title, listGenre, data, trailerdata, trend,showVedio, showOverview}) => {

  const genrebox = useRef()
  const inputsearch = useRef()
  const [input, setinput] = useState(true)
  const search1 = useRef()

  const alldatatv = useSelector(store => store.tvshows1.tv)
  const moviegenres = useSelector(store => store.netflix.genres)
  const tvgenres= useSelector(state=>state.tvshows1.genres)
  
  const [list, setList] = useState(true)

  function genresOpen() {
    openlist.current.style.display = 'grid'
  }

  useEffect(() => {

  
    const handleScroll = () => {
      const navbar = document.getElementById('GenreListStyle')
      if (window.scrollY > 40) {
        navbar.style.backgroundColor = 'rgb(20,20,20)'
      } else {
        navbar.style.backgroundColor = 'transparent'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  function removeGenre(e) {
    if (genrebox.current && !openlist.current.contains(e.target))
      openlist.current.style.display = 'none'
  }

  useEffect(() => {
    document.addEventListener('mousedown', removeGenre)
  }, [])



  var [Genre, setGenre] = useState('')  
  const[list1,setList1] = useState(false)


  const genreName = 'Crime'
  listGenre.forEach((e)=>{
    if(e.name == Genre){
      genreName = e.name
    }
  })



  

  const openlist = useRef()
  const right = useRef()
  const nav = useNavigate()

  const [choosegenre, setChoosegenre] = useState('')

  function add(i) {
    console.log(i.target.outerText)
    setGenre(i.target.value)
    setChoosegenre(i.target.outerText)
    genrebox.current.style.display = 'none'
    right.current.style.display = 'block'
    right.current.style.fontSize = '40px'
    setList1(true)
    

  }
  function remove(i) {
    // console.log(i.target.outerText)
    setGenre('')
    setChoosegenre('')
    genrebox.current.style.display = 'block'
    right.current.style.display = 'none'
    setList1(false)
    

  }

  
  const navigate = useNavigate()
  function click() {
    setinput(!input)
    setList(false)
    
  }

  function listadd(){
        setinput(true)
        setList(true)
        
  }

  

  
  return (
    <div className='backggg'>
      
      <div className='discoverTvCont' id='GenreListStyle'>

    <div className='genresbox'>
  <div>
    <h1 onClick={() => remove()} className='h11'>{title}</h1>
    
  </div>
  <h1 ref={right} style={{ display: 'none'}}>&gt;</h1>
  <div> <h1 className='h1style'>{choosegenre}</h1></div>
  <div className='tvGenres' onClick={genresOpen} ref={genrebox}> <span className='genres1'>Genres <span className='upArrow'></span><RiArrowDownSFill /></span>

    <div className=''>
      <div className='genresList' ref={openlist}>

        {listGenre.map(e =>


          // <div  >
          <ul key={e.id} >
            <Link> <li value={e.id} onClick={(i) => add(i)}>{e.name}</li></Link>
          </ul>
          // </div>

        )}

      </div>
    </div>
    
  </div>
  
</div>

<div className='itemstosearch  flitericons'>
         
          <div className="sv22"> 
                           
                           <button className="button1" onClick={listadd}>
                               <RiMenu2Line className='sv2'/>
   
                           </button>
                       </div>
        

<div className="sv33" ref={search1}>
       
       <button className="button2" onClick={click}  >
       <SiWindows className='sv3'/>

       </button>
       <select className={(input) ? "input" : 'extend'}  ref={inputsearch}>

        <option value="suggestionsForYou" >Suggested for you</option>
        <option value="yearReleased">year Released</option>
        <option value="AtoZ">A-Z</option>
        <option value="ZtoA">Z-A</option>
       </select>
       
   </div>
          

        </div>
         
       
      </div>
      <div className='mt'>
      {list == false &&
          <Tvcards data={data} />
        }
        </div>
      <div >

        
        {list&& <RandomMovies datas={trailerdata} showVedio={showVedio} showOverview={showOverview} />}
      </div>

      
      <div className="dispatched mt1">
        
        {list==true && list1==false &&
           <TVSliderCategories movies={alldatatv}  genres={tvgenres} />
         }
      
      </div>

     

         
      <div className="dispatched mt1">
        
        {list1==true &&
          //  <TVSliderCategories movies={alldatatv}  genres={tvgenres} />
          <SliderForCategories movies={data}/>
         }
      
      </div> 

 
      <div className="dispatched mt1">
        
        {list==false && list1==true &&
          //  <TVSliderCategories movies={alldatatv}  genres={tvgenres} />
          <TVSliderCategories movies={alldatatv} genres={tvgenres}/>
          
         }
      
      </div>  

     
    </div>
  );
};


export default GenresList;

// const Container = styled.div`

// margin-top:17em;
// `