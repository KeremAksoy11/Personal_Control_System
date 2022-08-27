import { Outlet, Navigate } from "react-router-dom"
import { useIsLoggedIn } from "../config/hooks"
import Loading from "../components/Loading"

export default function AdminAuthLayout() {
    const isLoggedIn = useIsLoggedIn();

    if (isLoggedIn === null) return <Loading />;
    else if (isLoggedIn === true) return <Navigate replace to="/" />

    return <Outlet />
}