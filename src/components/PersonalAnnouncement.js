import React from "react";
import { useSelector } from "react-redux";
import { useAnnouncementLister } from "../config/firebase"
import "../components/personalAnnouncement.css"



function PersonalAnnouncements() {
    useAnnouncementLister();

    const announcement = useSelector((state) => state.announcement.announcement)

    return (
        <div className="container">
            <tablePersonalAnnouncement>
                <thead>
                    <tr>
                        <th className="text-center">Tarihi</th>
                        <th className="text-center">Saati</th>
                        <th className="text-center">Adı</th>
                        <th className="text-center">Konusu</th>
                        <th className="text-center">Önemi</th>
                        <th className="text-center">Tarihi</th>
                    </tr>
                </thead>
                {announcement.map((announcement) =>
                    <tbody>
                        <tr>
                            <td className="text-center" >{announcement.date}</td>
                            <td className="text-center">{announcement.time}</td>
                            <td className="text-center">{announcement.name}</td>
                            <td className="text-center">{announcement.subject}</td>
                            <td className="text-center">{announcement.importance}</td>
                            <td className="text-center">{announcement.createdDate}</td>
                        </tr>
                    </tbody>
                )}
            </tablePersonalAnnouncement>
        </div>
    );
}

export default PersonalAnnouncements;