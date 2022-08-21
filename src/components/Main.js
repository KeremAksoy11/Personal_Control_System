import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonal, deletePersonal } from '../redux/personalSlice'
import { usePersonalLister } from "../config/firebase"
import '../components/table.css'


function Main() {
    usePersonalLister()

    const dispatch = useDispatch();

    const personal = useSelector((state) => state.personal.personal);
    
    return (
        
        <div className="container">
            <button onClick={() => dispatch(addPersonal())}>Ekle</button>
            <table>
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Soy İsim</th>
                        <th>Doğum Tarihi</th>
                        <th>Başlangıç</th>
                        <th>Bölüm</th>
                        <th>Telefon Numarası</th>
                        <th>E Posta</th>
                        <th>Sil</th>
                    </tr>
                </thead>
            {personal.map((personal) =>
               
                    <tbody>
                        <tr>
                            <td>{personal.name}</td>
                            <td>{personal.surname}</td>
                            <td>{personal.birthday}</td>
                            <td>{personal.startDate}</td>
                            <td>{personal.department}</td>
                            <td>{personal.phone}</td>
                            <td>{personal.mail}</td>
                            <a  href={() => false} onClick={() => dispatch(deletePersonal(personal.id))}>

                                <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                             
                            </a>
                        </tr>
                    </tbody>
            
            )}
            </table>
        </div>
    );
}

export default Main;
