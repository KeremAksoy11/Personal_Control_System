import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {addPersonal, deletePersonal} from '../redux/personalSlice'
import { usePersonalLister} from "../config/firebase"


function Main() {
    usePersonalLister()

    const dispatch = useDispatch();

    const personal = useSelector((state) => state.personal.personal);
    
    return (
      <div>
        <button onClick={() => dispatch(addPersonal())}>Ekle</button>

             {personal.map((personal) => 
            <div key={personal.id}>
                <h2  style={{color : 'black'}} >{personal.name + " "} </h2>
                <button onClick={()=>{
                    dispatch(deletePersonal(personal.id));
                }}>delete </button>
               </div>
               
            )}     
        </div>
    );
}

export default Main;
