import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {addDoc, deleteDoc, doc} from "firebase/firestore"
import { personalRef} from "../config/firebase";




export const addPersonal = createAsyncThunk("personal/addPersonal", async (_, {getState}) => {
    
    await addDoc(personalRef, getState().personal.draftPersonal)
})

export const deletePersonal = createAsyncThunk("personal/deletePersonal",async (id)=>{
    await deleteDoc(doc(personalRef, id));
})

const initialState = {

    draftPersonal: {
        name : "",
        surname : "",
        birthday : "",
        startDate : "",
        department : "",
        phone : "",
        mail : "",
    },
    personal : [],
}

const personalSlice = createSlice({
    name : 'personal',
    initialState : initialState,

    reducers : {
        changeDraftPersonalName : (state, action) =>{
            state.draftPersonal.name = action.payload;
        },
        changeDraftPersonalSurname : (state, action) =>{
            state.draftPersonal.surname = action.payload;
        },
        changeDraftPersonalBirthday : (state, action) =>{
            state.draftPersonal.birthday = action.payload;
        },
        changeDraftPersonalStartDate : (state, action) =>{
            state.draftPersonal.startDate = action.payload;
        },
        changeDraftPersonalDepartment : (state, action) =>{
            state.draftPersonal.department = action.payload;
        },
        changeDraftPersonalPhone : (state, action) =>{
            state.draftPersonal.phone = action.payload;
        },
        changeDraftPersonalMail : (state, action) =>{
            state.draftPersonal.mail = action.payload;
        },
        clearDraftPersonal : ( state) =>{
            state.draftPersonal = initialState.draftPersonal
        },
        setDraftPersonal : ( state, action) =>{
            state.draftPersonal = action.payload;
        },
        setPersonal : (state, action) =>{
            state.personal = action.payload;
        },
    }
})

export const  {
    changeDraftPersonalName,
    changeDraftPersonalSurname,
    changeDraftPersonalBirthday, 
    changeDraftPersonalStartDate, 
    changeDraftPersonalDepartment, 
    changeDraftPersonalPhone,
    changeDraftPersonalMail,
    clearDraftPersonal,
    setDraftPersonal,
    setPersonal
} = personalSlice.actions;

export default personalSlice.reducer;