import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignIn from "../components/SignIn"
import Main from "../components/Main"
import AuthLayout from "../layout/AuthLayout"
import Layout from "../layout/Layout"
import AdminAuthLayout from "../layout/AdminAuthLayout"
import ForgotPassword from "../components/ForgotPassword"
import Meeting from "../components/Meeting"
import Announcements from "../components/Announcements"
import UserLayout from "../layout/UserLayout"
import PersonalMain from "../components/PersonalMain"
import PersonalMeeting from "../components/PersonalMeeting"
import PersonalAnnouncements from "../components/PersonalAnnouncement"
import AdminSignIn from "../components/AdminSignIn"

export default function Router() {
   return (
      /* Admin Layout */
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />} > /
               <Route path="/" element={<Main />} />
               <Route path="/Meeting" element={<Meeting />} />
               <Route path="/Announcements" element={<Announcements />} />
            </Route>


            <Route element={<AdminAuthLayout />}>
               <Route path="/admin-sign-in" element={<AdminSignIn />} />
               <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Route>

            <Route element={<UserLayout />}>
               <Route path="/personalMain" element={<PersonalMain />} />
               <Route path="/personalMeeting" element={<PersonalMeeting />} />
               <Route path="/personalAnnouncements" element={<PersonalAnnouncements />} />
            </Route>


            <Route element={<AuthLayout />}>
               <Route path="/sign-in" element={<SignIn />} />
               <Route path="/forgotPassword" element={<ForgotPassword />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}