import React from "react";
import { useSelector } from "react-redux";
import { usePersonalLister } from "../config/firebase"
import '../components/personalMainTable.css'

function PersonalMain() {
    usePersonalLister()

    const personal = useSelector((state) => state.personal.personal);

    const message = "https://wa.me/90"
    const messageText = "?text=Merhaba"
    const mailto = "mailto:"

    return (
        <div className="container">
            <tablepersonal>
                <thead>
                    <tr>
                        <th>İsim</th>
                        <th>Soy İsim</th>
                        <th>Doğum Tarihi</th>
                        <th>Başlangıç</th>
                        <th>Bölüm</th>
                        <th>Telefon Numarası</th>
                        <th>E Posta</th>
                        <th>Oluşturulma Tarihi</th>
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
                            <td><a href={message + personal.phone + messageText}  >{personal.phone}</a></td>
                            <td><a href={mailto + personal.mail}>{personal.mail}</a></td>
                            <td>{personal.createdDate}</td>
                        </tr>
                    </tbody>
                )}
            </tablepersonal>
        </div>
    );
}

export default PersonalMain;
