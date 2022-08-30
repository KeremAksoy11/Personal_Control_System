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
            <tablePersonal>
                <thead>
                    <tr>
                        <th className="text-center">İsim</th>
                        <th className="text-center">Soy İsim</th>
                        <th className="text-center">Doğum Tarihi</th>
                        <th className="text-center">Başlangıç</th>
                        <th className="text-center">Bölüm</th>
                        <th className="text-center">Telefon Numarası</th>
                        <th className="text-center">E Posta</th>
                        <th className="text-center">Oluşturulma Tarihi</th>
                    </tr>
                </thead>
                {personal.map((personal) =>
                    <tbody>
                        <tr >
                            <td className="text-center">{personal.name}</td>
                            <td className="text-center">{personal.surname}</td>
                            <td className="text-center">{personal.birthday}</td>
                            <td className="text-center">{personal.startDate}</td>
                            <td className="text-center">{personal.department}</td>
                            <td className="text-center"><a href={message + personal.phone + messageText}  >{personal.phone}</a></td>
                            <td className="text-center"><a href={mailto + personal.mail}>{personal.mail}</a></td>
                            <td className="text-center">{personal.createdDate}</td>
                        </tr>
                    </tbody>
                )}
            </tablePersonal>
        </div>
    );
}

export default PersonalMain;
