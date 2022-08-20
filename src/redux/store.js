import {configureStore} from '@reduxjs/toolkit'
import auth from "./authSlice"
import personal from './personalSlice'

export const store = configureStore({
    reducer : {
        auth : auth,
        personal : personal
    },
});