import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc } from "firebase/firestore"
import { meetRef } from "../config/firebase";
import uuid from 'uuidv4';



export const addMeet = createAsyncThunk("meet/addMeet", async (_, { getState }) => {
    await addDoc(meetRef, getState().meet.draftMeet)
})

export const deleteMeet = createAsyncThunk("meet/deleteMeet", async (id) => {
    await deleteDoc(doc(meetRef, id));
})

const initialState = {
    draftMeet: {
        name: "",
        date: "",
        time: "",
        link: "",
        subject: "",
        meetId: uuid(),
    },
    meet: [],
}

const meetingSlice = createSlice({
    name: 'meet',
    initialState: initialState,

    reducers: {
        changeDraftMeetId: (state, action) => {
            state.draftMeet.meetId = action.payload;
        },
        changeDraftMeetName: (state, action) => {
            state.draftMeet.name = action.payload;
        },
        changeDraftMeetDate: (state, action) => {
            state.draftMeet.date = action.payload;
        },
        changeDraftMeetTime: (state, action) => {
            state.draftMeet.time = action.payload;
        },
        changeDraftMeetLink: (state, action) => {
            state.draftMeet.link = action.payload;
        },
        changeDraftMeetSubject: (state, action) => {
            state.draftMeet.subject = action.payload;
        },
        setMeet: (state, action) => {
            state.meet = action.payload;
        },
    }
})

export const {
    changeDraftMeetId,
    changeDraftMeetName,
    changeDraftMeetDate,
    changeDraftMeetTime,
    changeDraftMeetLink,
    changeDraftMeetSubject,
    setMeet,
} = meetingSlice.actions;


export default meetingSlice.reducer;
