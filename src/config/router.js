import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import Main from "../components/Main"
import AuthLayout from "../layout/AuthLayout"
import Layout from "../layout/Layout"

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route element={<Layout />} >
               <Route path="/" element={<Main />} />
            </Route>
            <Route element={<AuthLayout />}>
               <Route path="/sign-in" element={<SignIn />} />
               <Route path="/sign-up" element={<SignUp />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}