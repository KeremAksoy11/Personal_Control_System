import React from "react";
import { useSelector } from "react-redux";
import { useMeetLister } from "../config/firebase"
import "../components/meetTable.css"

function PersonalMeeting() {
    useMeetLister();

    const meet = useSelector((state) => state.meet.meet)

    return (
        <div className="container">
            <table2>
                <thead>
                    <tr>
                        <th>Toplantı Tarihi</th>
                        <th>Toplantı Saati</th>
                        <th>Toplantı Adı</th>
                        <th>Toplantı Konusu</th>
                        <th>Toplantı Önemi</th>
                        <th>Oluşturulma Tarihi</th>
                        <th>Link</th>
                    </tr>
                </thead>
                {meet.map((meet) =>
                    <tbody>
                        <tr>
                            <td>{meet.date}</td>
                            <td>{meet.time}</td>
                            <td>{meet.name}</td>
                            <td>{meet.subject}</td>
                            <td>{meet.importance}</td>
                            <td>{meet.createdDate}</td>
                            <td><a href={meet.link} rel="noopener noreferrer">Toplantıya Katıl</a></td>
                        </tr>
                    </tbody>
                )}
            </table2>
        </div>
    );
}

export default PersonalMeeting;