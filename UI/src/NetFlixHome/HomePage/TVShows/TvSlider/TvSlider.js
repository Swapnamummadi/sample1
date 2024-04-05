import React, { useEffect, useState } from 'react';

const TvSlider = ({movies,genres,index}) => {

  

    const filteredShows = movies.filter((show) =>
    show.genre_ids.some((genreId) => genres[index].ids.includes(genreId))
  );
    return (
        <div>
                <h2>Slider for TV Shows with Similar Genres</h2>
      
      <ul>
        {filteredShows.map((show) => (
          <li key={show.id}>{show.name}</li>
        ))}
      </ul>
        </div>
    );
};

export default TvSlider;

