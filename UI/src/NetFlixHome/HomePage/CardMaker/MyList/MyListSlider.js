

import React from 'react';
import MyListCard from './MyListCard';


const MyListSlider = ({data}) => {
    console.log(data)

    if(!Array.isArray(data)){
        console.log("dta is not an array", data)
        return null
    }


    return (
        <div className='listarrangement' style={{paddingBottom:'2em', zIndex:'-1', paddingLeft:'1em'}}>
            
            <div className='Wrapper'>
            <div className="flex">
            {data.map((movie)=>(
                <div key={movie._id}>
                    <MyListCard data={movie}/>
                </div>
            ))}
            </div>
            
            </div>

            
        </div>
    );
};

export default MyListSlider;