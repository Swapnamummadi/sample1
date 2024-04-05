
import React from 'react';
import MyListSlider from './MyListSlider';
import {useMediaQueries, useMediaQuery} from '@react-hook/media-query'

const ListCategories = ({data}) => {

    const selectedMovies = (start,end)=>{
        return data.slice(start,end)
    }

    const {matches} = useMediaQueries('(max-width:768px)');
    const movieslider = matches ? 2 : 5;
    return (
        <div className='slider-for-card' style={{marginTop:'15em', zIndex:'-1'}}>
            <MyListSlider data={selectedMovies(0,movieslider)} />
            <MyListSlider data={selectedMovies(movieslider,movieslider*2)} />
            <MyListSlider data={selectedMovies(movieslider*2,movieslider*3)} />
            <MyListSlider data={selectedMovies(15,20)} />
            <MyListSlider data={selectedMovies(20,25)} />
            <MyListSlider data={selectedMovies(25,30)} />
            <MyListSlider data={selectedMovies(30,35)} />
            <MyListSlider data={selectedMovies(35,40)} />

        </div>
    );
};

export default ListCategories;