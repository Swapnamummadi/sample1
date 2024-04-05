
import React, { useState } from 'react';
import Navbartvs from './Navbartvs';
import TvShows from '../TVShows/TvShows';

const Page = () => {
    
    const[showRandomPage,setShowRandomPage] = useState(true)

    const toggleForpage = ()=>{
        setShowRandomPage(!showRandomPage)
    }
    return (
        <div>
            <Navbartvs toggle = {toggleForpage}/>
            <TvShows showPage = {showRandomPage}/>    
        </div>
    );
};

export default Page;