import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";

/*export const fetchUsers = () => (dispatch:AppDispatch) => {
    try {
      dispatch(usersFetching);
      setTimeout( async() => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(usersFetchingSuccess(response.data))
      }, 5000)
    } catch(e) {
         dispatch(usersFetchingError('ой произошла ошибка'))
    }
}*/

export const fetchUsers = createAsyncThunk(
    'user/fetchAll', //названия асинхронного thunka
    async(_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data
        } catch(e) {
           return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }

)