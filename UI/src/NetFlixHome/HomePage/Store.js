
import Reducer from './Reducer';
import {configureStore} from "@reduxjs/toolkit";
import Reducer1 from './Reducer1';


const store = configureStore({

    reducer :{
        netflix:Reducer,
        tvshows1:Reducer1
    }
})

export default store