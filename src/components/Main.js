import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { logOut } from "../redux/authSlice"

function Main() {
    const dispatch = useDispatch();
    const name = useSelector((state) => state.auth.name)
    

    const handleLogOut = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <h2  class="italic" style={{color : 'white'}}>Welcome {name}</h2>
            <button onClick={handleLogOut}> Sign Out</button>
        </div>
    );
}

export default Main;
