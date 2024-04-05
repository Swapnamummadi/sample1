import React from 'react';
import LandingPage from './components/pages/landing/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import RegisterSetUp from './components/SignInForm/RegisterSetUp';
import PasswordCreation from './components/SignInForm/PasswordCreation/PasswordCreation';
// import HomeHeaders from './HomeHeaders/HomeHeaders';
import HomeHeaders from './NetFlixHome/HomeHeaders/HomeHeaders';import AccountMembership from './components/SignInForm/AccountMembership/AccountMembership';
import Player from './NetFlixHome/HomePage/CardMaker/Player';
// import TvShows from './NetFlixHome/HomePage/TVShows/TvShows';
// import Movies from './NetFlixHome/HomePage/Movies/Movies';
import Dispatching from './NetFlixHome/HomePage/Dispatching';
import Tvcards from './NetFlixHome/HomePage/TVShows/Tvcards';
import Tvshows111 from './NetFlixHome/HomePage/SelectGenres/TvShows11/Tvshows111';
import Movie111 from './NetFlixHome/HomePage/Movies/Movie111';
import MyList from './NetFlixHome/HomePage/CardMaker/MyList/MyList';


// import App1 from './NetFlixHome/HomePage/App1';


const App = () => {  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<SignInForm/>}/>
      <Route path='/signup' element={<RegisterSetUp/>}/>
      <Route path='/signup/regform' element={<PasswordCreation/>}/>
      <Route path='/browser' element={<Dispatching/>}/>
      <Route path='/account' element={<AccountMembership/>}/>
      <Route path='/player' element={<Player/>}/>
      <Route path='/tv' element={<Tvshows111/>}/>
      <Route path='/movie' element={<Movie111/>}/>
      <Route path='/su' element={<Tvcards/>}/>
      <Route path='/my-list' element={<MyList/>}/>
    </Routes>
  
  {/* <App1/> */}
    </BrowserRouter>

  
    
  );
};

export default App;