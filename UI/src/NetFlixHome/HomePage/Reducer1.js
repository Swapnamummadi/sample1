import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getGenres } from "./Reducer";
import { API_KEY, TMDB_BASE_URL } from "./ApiKey";


export const getMvGenres = createAsyncThunk("netflix/Mvgenres",async()=>{
    const{
        data:{genres},
    }  = await axios.get(
        `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}`
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
            // console.log(finding)
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
                genres:movieGenres.slice(0,5),
                overview:movie.overview,
                media_type:movie.media_type,
                release_date:movie.release_date,
                vote_average:movie.vote_average,
                first_air_date:movie.first_air_date,
            });

        }
       
        
    });

}

export const getTVShows = createAsyncThunk("netflix/tvShows", async (_,thunkApi) => {
    const {
        netflix: { genresLoaded },
    } = thunkApi.getState();

    if (!genresLoaded) {
        await thunkApi.dispatch(getGenres());
    }

    const updateState = thunkApi.getState();
    const tvShows = await getTVData(
        `${TMDB_BASE_URL}/trending/tv/day?api_key=${API_KEY}`,
        updateState.netflix.genres,
        true
    );
    return tvShows;
});
export const getTVData = async (api, genres, paging) => {
    const tvShowsArr = [];
    for (let i = 1; tvShowsArr.length < 500 && i < 30; i++) {
        const {
            data: { results },
        } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);

        const filteredResults = results.filter((show) => {
            return show.genre_ids.every((genreId) => genres.map(genre => genre.name));
                // return genreNames.includes('Your_Desired_Genre_Name'); // Modify this line
        });
        
        createMovieArrayFromMovieData(filteredResults, tvShowsArr, genres);
    }
    // console.log(tvShowsArr)
    return tvShowsArr;
};
export const getTVShowsByGenre = createAsyncThunk(
    "netflix/genreTVShows",
    async ({ type }, thunkAPI) => {
        const {
            netflix: { genresLoaded },
        } = thunkAPI.getState();

        if (!genresLoaded) {
            await thunkAPI.dispatch(getGenres());
        }

        const updateState = thunkAPI.getState();
        return getTVData(
            `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
            updateState.netflix.genres
        );
    }
);

export const getTVSeries = createAsyncThunk(
    "netflix/genreTVSeries",
    async ({ type }, thunkAPI) => {
        const {
            netflix: { genresLoaded },
        } = thunkAPI.getState();

        if (!genresLoaded) {
            await thunkAPI.dispatch(getGenres());
        }

        const updateState = thunkAPI.getState();
        return getTVData(
            `https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1`,
            updateState.netflix.genres
        );
    }
);


//Storing for moviesPart



export const getMVShows = createAsyncThunk("netflix/mvShows", async (_, thunkApi) => {
    const {
        netflix: { genresLoaded },
    } = thunkApi.getState();

    if (!genresLoaded) {
        await thunkApi.dispatch(getMvGenres());
    }

    const updateState = thunkApi.getState();
    const tvShows = await getTVData(
        `${TMDB_BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
        updateState.netflix.genres,
        true
    );
    return tvShows;
});
export const getMVData = async (api, genres, paging) => {
    const tvShowsArr = [];
    for (let i = 1; tvShowsArr.length < 500 && i < 10; i++) {
        const {
            data: { results },
        } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);

        const filteredResults = results.filter((show) => {
            return show.genre_ids.every((genreId) => genres.map(genre => genre.name));
                // return genreNames.includes('Your_Desired_Genre_Name'); // Modify this line
        });
        
        createMovieArrayFromMovieData(filteredResults, tvShowsArr, genres);
    }
    // console.log(tvShowsArr)
    return tvShowsArr;
};
export const getMVShowsByGenre = createAsyncThunk(
    "netflix/genreMVShows",
    async ({ type }, thunkAPI) => {
        const {
            netflix: { genresLoaded },
        } = thunkAPI.getState();

        if (!genresLoaded) {
            await thunkAPI.dispatch(getMvGenres());
        }

        const updateState = thunkAPI.getState();
        return getTVData(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
            updateState.netflix.genres
        );
    }
);


const netflixSlicing = createSlice({
    name:"Netflix1",
    initialState:{
        movie:[],
        genres:[],
        tv:[],
        allgenres:[],
        mvgenres:[],
        allMovies:[],
        genresLoaded:false,
        // discoverLoaded:false,
    },
    extraReducers:(builder)=>{
        
        builder.addCase(getGenres.fulfilled,(state,action)=>{
            state.genres=action.payload;
            state.allgenres=action.payload;
            state.genresLoaded=true;
            
        });
        builder.addCase(getMvGenres.fulfilled,(state,action)=>{
            state.mvgenres=action.payload;
            state.allgenres=action.payload;
            state.genresLoaded = true;
            // console.log(state.mvgenres)
        })
        builder.addCase(getTVShows.fulfilled, (state, action) => {
            state.tv = action.payload;
            state.allMovies = action.payload;
            // console.log(action.payload)
            // console.log(state.tv)
        });
        builder.addCase(getTVShowsByGenre.fulfilled, (state, action) => {
            state.tv = action.payload;
            state.allMovies = action.payload;

        });

        builder.addCase(getTVSeries.fulfilled,(state,action)=>{
            state.tv = action.payload
            state.allMovies = action.payload;

        });
        builder.addCase(getMVShows.fulfilled,(state,action)=>{
            state.movie=action.payload;
            state.allMovies = action.payload;

            
        });
        
        
    },
   
    reducers:{
        
    }
})


export default netflixSlicing.reducer;
