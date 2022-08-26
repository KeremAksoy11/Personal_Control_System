import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc } from "firebase/firestore"
import { announcementRef } from "../config/firebase";
import uuid from 'uuidv4';

export const addAnnouncement = createAsyncThunk("announcement/addAnnouncement", async (_, { getState }) => {
    await addDoc(announcementRef, getState().announcement.draftAnnouncement)
})

export const deleteAnnouncement = createAsyncThunk("announcement/deleteAnnouncement", async (id) => {
    await deleteDoc(doc(announcementRef, id));
})

const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }

const initialState = {
    draftAnnouncement: {
        name: "",
        date: "",
        time: "",
        importance: "",
        subject: "",
        announcementId: uuid(),
        createdDate: event.toLocaleDateString('tr-TR', options),
    },
    announcement: [],
}

const announcementsSlice = createSlice({
    name: 'announcement',
    initialState: initialState,
    reducers: {
        changeDraftAnnouncementId: (state, action) => {
            state.draftAnnouncement.announcementId = action.payload;
        },
        changeDraftAnnouncementName: (state, action) => {
            state.draftAnnouncement.name = action.payload;
        },
        changeDraftAnnouncementDate: (state, action) => {
            state.draftAnnouncement.date = action.payload;
        },
        changeDraftAnnouncementTime: (state, action) => {
            state.draftAnnouncement.time = action.payload;
        },
        changeDraftAnnouncementImportance: (state, action) => {
            state.draftAnnouncement.importance = action.payload;
        },
        changeDraftAnnouncementSubject: (state, action) => {
            state.draftAnnouncement.subject = action.payload;
        },
        changeDraftAnnouncementCreateDate: (state, action) => {
            state.draftAnnouncement.createdDate = action.payload;
        },
        setAnnouncement: (state, action) => {
            state.announcement = action.payload;
        },
    }
})


export const {
    changeDraftAnnouncementId,
    changeDraftAnnouncementName,
    changeDraftAnnouncementDate,
    changeDraftAnnouncementTime,
    changeDraftAnnouncementImportance,
    changeDraftAnnouncementSubject,
    changeDraftAnnouncementCreateDate,
    setAnnouncement,
} = announcementsSlice.actions;

export default announcementsSlice.reducer;