import React from "react";
import { usePersonalLister, deletePersonal, addPersonal} from "../config/firebase"


function Main() {
    const personal = usePersonalLister()
    
    return (
      <div>
        <button onClick={() => addPersonal()}>Ekle</button>
            {personal.map((personal) => 
            <div>
                <h2  style={{color : 'black'}} >{personal.name + " "} </h2>
                <button onClick={()=>{
                    deletePersonal(personal.id);
                }}>delete </button>
               </div>
               
            )}        
        </div>
    );
}

export default Main;
