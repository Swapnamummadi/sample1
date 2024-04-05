
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY} from './ApiKey';
import { TMDB_BASE_URL } from './ApiKey';
import axios from 'axios';


export const getGenres = createAsyncThunk("netflix/genres",async()=>{
    const{
        data:{genres},
    }  = await axios.get(
        `${TMDB_BASE_URL}/genre/tv/list?api_key=${API_KEY}`
    );
    // console.log(genres)
    return genres;
    // console.log(genres)
});

const createMovieArrayFromMovieData = (results,moviesArr,genres)=>{
    
    // console.log(results)
    // console.log(genres)
    
    results.forEach((movie)=>{
        const movieGenres = [];
        // console.log(movieGenres)
        console.log(movie)
        movie.genre_ids.forEach((genre)=>{
            const finding = genres.find(({ id }) =>id === genre);
            console.log(finding)
            if(finding){
                movieGenres.push(finding.name);
            }
            
        
        })
        // console.log(movieGenres)
        if(movie.backdrop_path){
            moviesArr.push({
                
                id:movie.id,
                name:movie.original_name ? movie.original_name : movie.original_title,
                image:movie.backdrop_path,
                genres:movieGenres.slice(0,3),
                overview:movie.overview,
                media_type:movie.media_type,
                release_date:movie.release_date,
                vote_average:movie.vote_average,
                first_air_date:movie.first_air_date,

            });
            // console.log(media_type);

        }
       
        
    });

}

export const getData = async(api,genres,paging)=>{

        const moviesArr = [];
        for(let i = 1; moviesArr.length < 80 && i < 10; i++){

            const { 
                data: { results },
            } = await axios.get(`${api}${paging ? `&page=${i}`:""}`);
        
        createMovieArrayFromMovieData(results,moviesArr,genres)
        // console.log(movie)
        
    }
    // console.log(moviesArr)
    return moviesArr
};

export const getMovies = createAsyncThunk("netflix/trending", async({type},thunkApi)=>{
    const {
        netflix : {genresLoaded},
    } = thunkApi.getState();
    
    if(!genresLoaded){
        await thunkApi.dispatch(getGenres());

    }
    
    const updateState = thunkApi.getState();

    const data = await getData(
            `${TMDB_BASE_URL}/trending/${type}/day?api_key=${API_KEY}`,
            updateState.netflix.genres,
            true
        )
        // console.log(data)
        return data;
})

export const getDataByGenre = createAsyncThunk(
    "netflix/genre",
    async ({ type }, thunkAPI) => {
      const {
        netflix: { genresLoaded },
      } = thunkAPI.getState();
    //   console.log(genres)

    if(!genresLoaded){
        await thunkAPI.dispatch(getGenres())
    }
    const updateState = thunkAPI.getState();
      return getData(
        
        `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
        updateState.netflix.genres
      );
    }
  );


// Modify getData function to fetch TV shows




const netflixSlice = createSlice({
    name:"Netflix",
    initialState:{
        movies:[],
        genres:[],
        // tv:[],
        genresLoaded:false,
        // discoverLoaded:false,
    },
    extraReducers:(builder)=>{
        
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres=action.payload;
            state.genresLoaded=true;
            
        })
        builder.addCase(getMovies.fulfilled,(state,action)=>{
            state.movies = action.payload;
            // console.log(state.movies)
            
            
        })

        builder.addCase(getDataByGenre.fulfilled, (state, action) => {
            state.movies = action.payload;
        });

        // builder.addCase(getTVShows.fulfilled, (state, action) => {
        //     state.tv = action.payload;
        //     console.log(action.payload)
        // });
        // builder.addCase(getTVShowsByGenre.fulfilled, (state, action) => {
        //     state.tv = action.payload;
        // });
    },
   
    reducers:{
        
    }
})


export default netflixSlice.reducer;
