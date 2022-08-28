import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signOut, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../config/adminFirebase"

const initialState = {
    name: "",
    email: "",
    password: "",
    isLoading: false,
    error: null,
}


export const login = createAsyncThunk("auth/login",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("Successfully logged in")
        }
        catch (e) {
            return rejectWithValue(e.code)
        }
    })

export const logOut = createAsyncThunk("auth/logOut", async () => {
    await signOut(auth);
})

const adminAuthSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        changeName: (state, action) => {
            state.name = action.payload;
        },
        changeEmail: (state, action) => {
            state.email = action.payload;
        },
        changePassword: (state, action) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(login.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
    },
});

export const { changeName, changeEmail, changePassword } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;