import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase"

export const useCurrentAdmin = () => {
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, (admin) => {
            setAdmin(admin);
        });
    }, [])

    return admin;
};

export const useIsLoggedInAdmin = () => {
    const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(null)

    useEffect(() => {
        return onAuthStateChanged(auth, (admin) => {
            setIsLoggedInAdmin(!!admin);
        });
    }, [isLoggedInAdmin])
    return isLoggedInAdmin;
}