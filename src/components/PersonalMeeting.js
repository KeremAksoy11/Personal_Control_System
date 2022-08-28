import React from "react";
import { useSelector } from "react-redux";
import { useMeetLister } from "../config/firebase"
import "../components/personalMeeting.css"

function PersonalMeeting() {
    useMeetLister();

    const meet = useSelector((state) => state.meet.meet)

    return (
        <div className="container">
            <tablePersonalMeet>
                <thead>
                    <tr>
                        <th className="text-center">Tarihi</th>
                        <th className="text-center">Saati</th>
                        <th className="text-center">Adı</th>
                        <th className="text-center">Konusu</th>
                        <th className="text-center">Önemi</th>
                        <th className="text-center">Tarihi</th>
                        <th className="text-center">Link</th>
                    </tr>
                </thead>
                {meet.map((meet) =>
                    <tbody>
                        <tr>
                            <td className="text-center">{meet.date}</td>
                            <td className="text-center">{meet.time}</td>
                            <td className="text-center">{meet.name}</td>
                            <td className="text-center">{meet.subject}</td>
                            <td className="text-center">{meet.importance}</td>
                            <td className="text-center">{meet.createdDate}</td>
                            <td className="text-center"><a href={meet.link} rel="noopener noreferrer">Toplantıya Katıl</a></td>
                        </tr>
                    </tbody>
                )}
            </tablePersonalMeet>
        </div>
    );
}

export default PersonalMeeting;