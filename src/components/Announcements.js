import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAnnouncement, deleteAnnouncement } from "../redux/announcementsSlice"
import { useAnnouncementLister } from "../config/firebase"
import "../components/announcementTable.css"
import {
    changeDraftAnnouncementName,
    changeDraftAnnouncementDate,
    changeDraftAnnouncementTime,
    changeDraftAnnouncementImportance,
    changeDraftAnnouncementSubject,
} from "../redux/announcementsSlice"


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';


function Announcements() {
    useAnnouncementLister();

    const [showAnnouncement, setAnnouncement] = useState(false);

    const handleCloseAnnouncementModal = () => setAnnouncement(false);
    const handleShowAnnouncementModal = () => setAnnouncement(true);

    const dispatch = useDispatch();

    const announcementId = useSelector((state) => state.announcement.draftAnnouncement.announcementId);
    const name = useSelector((state) => state.announcement.draftAnnouncement.name);
    const date = useSelector((state) => state.announcement.draftAnnouncement.date);
    const subject = useSelector((state) => state.announcement.draftAnnouncement.subject);
    const time = useSelector((state) => state.announcement.draftAnnouncement.time);
    const importance = useSelector((state) => state.announcement.draftAnnouncement.importance);
    const createdDate = useSelector((state) => state.announcement.draftAnnouncement.createdDate);

    const announcement = useSelector((state) => state.announcement.announcement)

    const handleNameChange = (e) => {
        dispatch(changeDraftAnnouncementName(e.currentTarget.value))
    }

    const handleDateChange = (e) => {
        dispatch(changeDraftAnnouncementDate(e.currentTarget.value))
    }

    const handleTimeChange = (e) => {
        dispatch(changeDraftAnnouncementTime(e.currentTarget.value))
    }
    const handleSubjectChange = (e) => {
        dispatch(changeDraftAnnouncementSubject(e.currentTarget.value))
    }

    const handleImportanceChange = (e) => {
        dispatch(changeDraftAnnouncementImportance(e.currentTarget.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addAnnouncement({ announcementId, name, date, time, subject, importance, createdDate }))
    }


    return (
        <div className="container">
            {<Modal show={showAnnouncement} onHide={handleCloseAnnouncementModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Duyuru Ekle</Modal.Title>
                </Modal.Header>
                <Container >

                    <Modal.Body>

                        <form onSubmit={handleSubmit}>

                            <p className="text-center" style={{ color: "#39ace7" }}>Duyurunun Yürürlülüğe Gireceği Tarih</p>

                            <div class="input-group">
                                <span class="input-group-text">Tarih ve Saat</span>
                                <input type="date" required aria-label="First name" class="form-control" onChange={handleDateChange} value={date} name="addMeet" />
                                <input type="time" aria-label="Last name" class="form-control" onChange={handleTimeChange} value={time} />
                            </div>

                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>Duyuru Adı ve Konusu</p>
                            <div class="input-group">

                                <input type="text" required aria-label="First name" class="form-control" onChange={handleNameChange} name="addMeet" placeholder="Toplantı Adı" />
                                <input type="text" aria-label="Last name" class="form-control" onChange={handleSubjectChange} placeholder="Toplantı Konusu" />
                            </div>

                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>Önem Derecesi</p>
                            <div class="input-group">

                                <input type="text" required aria-label="importance" class="form-control" onChange={handleImportanceChange} value={importance} list="importance" />
                                <datalist id="importance">
                                    <option>Yüksek</option>
                                    <option>Normal</option>
                                </datalist>
                            </div>

                            <br />
                            <div class="col text-center">
                                <button type="submit" onClick={handleCloseAnnouncementModal} class="btn btn-primary">Duyuru Ekle</button>
                            </div>

                        </form>
                    </Modal.Body>
                </Container>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseAnnouncementModal}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>}

            <tableAnnouncement>

                <thead>
                    <div>
                        <a href={() => false} onClick={handleShowAnnouncementModal}>
                            <img src="https://www.svgrepo.com/show/13196/announcement.svg" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                        </a>


                    </div>
                    <tr>
                        <th className="text-center">Duyuru Tarihi</th>
                        <th className="text-center">Duyuru Saati</th>
                        <th className="text-center">Duyuru Adı</th>
                        <th className="text-center">Duyuru Konusu</th>
                        <th className="text-center">Duyuru Önemi</th>
                        <th className="text-center">Oluşturulma Tarihi</th>
                        <th className="text-center">Duyuruyu Sil</th>
                    </tr>
                </thead>

                {announcement.map((announcement) =>
                    <tbody>
                        <tr>
                            <td className="text-center">{announcement.date}</td>
                            <td className="text-center">{announcement.time}</td>
                            <td className="text-center">{announcement.name}</td>
                            <td className="text-center">{announcement.subject}</td>
                            <td className="text-center">{announcement.importance}</td>
                            <td className="text-center">{announcement.createdDate}</td>
                            <td className="text-center">
                                <a href={() => false} onClick={() => dispatch(deleteAnnouncement(announcement.id))}>

                                    <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />

                                </a>
                            </td>
                        </tr>
                    </tbody>
                )}
            </tableAnnouncement>
        </div>
    );
}

export default Announcements;