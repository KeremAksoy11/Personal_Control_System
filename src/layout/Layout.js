import { Outlet, Navigate } from "react-router-dom"
import { useIsLoggedIn } from "../config/hooks"
import Loading from "../components/Loading"

export default function Layout(){
    const isLoggedIn = useIsLoggedIn();

    if(isLoggedIn === null) return  <Loading />;
    else if(isLoggedIn === false) return <Navigate replace to="/sign-in"/>

    return <Outlet/>
}