import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { postAPI } from '../services/PostService';
import  userReducer  from '../store/reducers/UserSlice';


const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

export const setupReducer = () => {
    return configureStore({
            reducer:rootReducer,
            middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupReducer>
export type AppDispatch  = AppStore['dispatch']