import React from "react";
import { useSelector } from "react-redux";
import { useAnnouncementLister } from "../config/firebase"
import "../components/announcementTable.css"



function PersonalAnnouncements() {
    useAnnouncementLister();

    const announcement = useSelector((state) => state.announcement.announcement)

    return (
        <div className="container">
            <table1>
                <thead>
                    <tr>
                        <th>Duyuru Tarihi</th>
                        <th>Duyuru Saati</th>
                        <th>Duyuru Adı</th>
                        <th>Duyuru Konusu</th>
                        <th>Duyuru Önemi</th>
                        <th>Oluşturulma Tarihi</th>
                    </tr>
                </thead>
                {announcement.map((announcement) =>
                    <tbody>
                        <tr>
                            <td>{announcement.date}</td>
                            <td>{announcement.time}</td>
                            <td>{announcement.name}</td>
                            <td>{announcement.subject}</td>
                            <td>{announcement.importance}</td>
                            <td>{announcement.createdDate}</td>
                        </tr>
                    </tbody>
                )}
            </table1>
        </div>
    );
}

export default PersonalAnnouncements;