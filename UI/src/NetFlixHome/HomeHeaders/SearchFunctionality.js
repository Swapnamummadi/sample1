import React from "react";
import Card from "../HomePage/CardMaker/Card";
// import SliderForCard from "../HomePage/CardMaker/SliderForCard";


const SearchFunctionality = ({filteredshows,searchQuery,genres}) => {
    console.log(filteredshows)
  return (
    <div className="dispatched" style={{width:'96vw', marginLeft:'1em'}}>
      <div className="formovies">
        
        {searchQuery && filteredshows.length > 0 && (
          
          <div style={{marginTop:'10em', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gridColumnGap:'0'}}>
            
            {filteredshows.map((movie) => {
              return (
                <ul key={movie.name}>
                  <li style={{listStyleType:'none'}}>
                    
                    <div >
                      <Card movieData={movie} />

                    </div>
                    {/* <div style={{display:'flex'}}>{movie.name}</div>
                   
                    <div><img src={`https://image.tmdb.org/t/p/w500${movie.image}`} alt="" /></div> */}

                    {/* <TVSliderCategories movies={movie} genres={genres}/> */}
                    
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFunctionality;
