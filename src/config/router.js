import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import Main from "../components/Main"
import AuthLayout from "../layout/AuthLayout"
import Layout from "../layout/Layout"
import ForgotPassword from "../components/ForgotPassword"
import Meeting from "../components/Meeting"
import Announcements from "../components/Announcements"


export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />} >
               <Route path="/" element={<Main />} />
               <Route path="/Main" element={<Main />} />
               <Route path="/Meeting" element={<Meeting />} />
               <Route path="/Announcements" element={<Announcements />} />
            </Route>
            <Route element={<AuthLayout />}>
               <Route path="/sign-in" element={<SignIn />} />
               <Route path="/sign-up" element={<SignUp />} />
               <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}