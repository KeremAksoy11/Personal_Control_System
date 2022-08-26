import { configureStore } from '@reduxjs/toolkit'
import auth from "./authSlice"
import personal from './personalSlice'
import meet from './meetingSlice'
import announcement from './announcementsSlice'

export const store = configureStore({
    reducer: {
        auth: auth,
        personal: personal,
        meet: meet,
        announcement: announcement
    },
});