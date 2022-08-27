import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { personalRef, db } from "../config/firebase";
import uuid from 'uuidv4';


export const addPersonal = createAsyncThunk("personal/addPersonal", async (_, { getState }) => {
  await addDoc(personalRef, getState().personal.draftPersonal)
})

export const deletePersonal = createAsyncThunk("personal/deletePersonal", async (id) => {
  await deleteDoc(doc(personalRef, id));
})

export const updatePersonal = createAsyncThunk("personal/updatePersonal", async (id) => {
  const personalDoc = doc(db, "Personal", id)
  console.log(id)
  try {
    await updateDoc(personalDoc, { name: "Ahmet", surname: "can" });
  }
  catch (err) {
    console.error(err)
    console.log(err)
  }
});

const event = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }

const initialState = {
  draftPersonal: {
    name: "",
    surname: "",
    birthday: "",
    startDate: "",
    department: "",
    phone: "",
    mail: "",
    personalId: uuid(),
    createdDate: event.toLocaleDateString('tr-TR', options),
    password: "",
  },
  personal: [],
  updatePersonal: {
    name: "",
    surname: "",
    birthday: "",
    startDate: "",
    department: "",
    phone: "",
    mail: "",
    personalId: "",
  },
}

const personalSlice = createSlice({
  name: 'personal',
  initialState: initialState,

  reducers: {
    changeDraftPersonalId: (state, action) => {
      state.draftPersonal.personalId = action.payload;
    },
    changeDraftPersonalName: (state, action) => {
      state.draftPersonal.name = action.payload;
    },
    changeDraftPersonalPassword: (state, action) => {
      state.draftPersonal.password = action.payload;
    },
    changeDraftPersonalSurname: (state, action) => {
      state.draftPersonal.surname = action.payload;
    },
    changeDraftPersonalBirthday: (state, action) => {
      state.draftPersonal.birthday = action.payload;
    },
    changeDraftPersonalStartDate: (state, action) => {
      state.draftPersonal.startDate = action.payload;
    },
    changeDraftPersonalDepartment: (state, action) => {
      state.draftPersonal.department = action.payload;
    },
    changeDraftPersonalPhone: (state, action) => {
      state.draftPersonal.phone = action.payload;
    },
    changeDraftPersonalMail: (state, action) => {
      state.draftPersonal.mail = action.payload;
    },
    clearDraftPersonal: (state) => {
      state.draftPersonal = initialState.draftPersonal
    },
    setDraftPersonal: (state, action) => {
      state.draftPersonal = action.payload;
    },
    setPersonal: (state, action) => {
      state.personal = action.payload;
    },
    changeUpdatePersonalName: (state, action) => {
      state.updatePersonal.name = action.payload;
    },
    changeUpdatePersonalSurname: (state, action) => {
      state.updatePersonal.surname = action.payload;
    },
    changeUpdatePersonalBirthday: (state, action) => {
      state.updatePersonal.birthday = action.payload;
    },
    changeUpdatePersonalStartDate: (state, action) => {
      state.updatePersonal.startDate = action.payload;
    },
    changeUpdatePersonalDepartment: (state, action) => {
      state.updatePersonal.department = action.payload;
    },
    changeUpdatePersonalPhone: (state, action) => {
      state.updatePersonal.phone = action.payload;
    },
    changeUpdatePersonalMail: (state, action) => {
      state.updatePersonal.mail = action.payload;
    },
  }
})

export const {
  changeDraftPersonalName,
  changeDraftPersonalSurname,
  changeDraftPersonalBirthday,
  changeDraftPersonalStartDate,
  changeDraftPersonalDepartment,
  changeDraftPersonalPhone,
  changeDraftPersonalMail,
  clearDraftPersonal,
  setDraftPersonal,
  changeUpdatePersonalName,
  changeUpdatePersonalSurname,
  changeUpdatePersonalBirthday,
  changeUpdatePersonalStartDate,
  changeUpdatePersonalDepartment,
  changeUpdatePersonalPhone,
  changeUpdatePersonalMail,
  changeDraftPersonalId,
  changeDraftPersonalPassword,
  setPersonal,
} = personalSlice.actions;

export default personalSlice.reducer;