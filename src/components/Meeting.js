import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeet, deleteMeet } from "../redux/meetingSlice"
import { useMeetLister } from "../config/firebase"
import '../components/table.css'
import {
    changeDraftMeetName,
    changeDraftMeetTime,
    changeDraftMeetLink,
    changeDraftMeetSubject,
    changeDraftMeetDate,
} from "../redux/meetingSlice"


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';

function Meeting() {
    useMeetLister();

    const [showMeet, setMeet] = useState(false);

    const handleCloseMeetModal = () => setMeet(false);
    const handleShowMeetModal = () => setMeet(true);

    const dispatch = useDispatch();

    const meetId = useSelector((state) => state.meet.draftMeet.meetId);
    const name = useSelector((state) => state.meet.draftMeet.name);
    const time = useSelector((state) => state.meet.draftMeet.time);
    const subject = useSelector((state) => state.meet.draftMeet.subject);
    const link = useSelector((state) => state.meet.draftMeet.link);
    const date = useSelector((state) => state.meet.draftMeet.date);

    const meet = useSelector((state) => state.meet.meet)

    const handleNameChange = (e) => {
        dispatch(changeDraftMeetName(e.currentTarget.value))
    }
    const handleTimeChange = (e) => {
        dispatch(changeDraftMeetTime(e.currentTarget.value))
    }
    const handleSubjectChange = (e) => {
        dispatch(changeDraftMeetSubject(e.currentTarget.value))
    }
    const handleLinkChange = (e) => {
        dispatch(changeDraftMeetLink(e.currentTarget.value))
    }
    const handleDateChange = (e) => {
        dispatch(changeDraftMeetDate(e.currentTarget.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMeet({ meetId, name, date, time, subject, link }))
    }


    return (
        <div className="container">

            {<Modal show={showMeet} onHide={handleCloseMeetModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Toplantı Ekle</Modal.Title>
                </Modal.Header>
                <Container >

                    <Modal.Body>

                        <form onSubmit={handleSubmit}>

                            <p className="text-center" style={{ color: "#39ace7" }}>Toplantı Tarihi</p>

                            <div class="input-group">
                                <span class="input-group-text">Tarih ve Saat</span>
                                <input type="date" required aria-label="First name" class="form-control" onChange={handleDateChange} value={date} name="addMeet" />
                                <input type="time" aria-label="Last name" class="form-control" onChange={handleTimeChange} value={time} />
                            </div>

                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>Toplantı Adı ve Konusu</p>
                            <div class="input-group">

                                <input type="text" required aria-label="First name" class="form-control" onChange={handleNameChange} name="addMeet" placeholder="Toplantı Adı" />
                                <input type="text" aria-label="Last name" class="form-control" onChange={handleSubjectChange} placeholder="Toplantı Konusu" />
                            </div>



                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>Toplantı Linki</p>
                            <div class="input-group">
                                <span class="input-group-text">Link:</span>
                                <input type="link" required aria-label="First name" class="form-control" onChange={handleLinkChange} name="addMeet" />
                            </div>

                            <br />
                            <div class="col text-center">
                                <button type="submit" onClick={handleCloseMeetModal} class="btn btn-primary">Toplantıyı Ekle</button>
                            </div>

                        </form>
                    </Modal.Body>
                </Container>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseMeetModal}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>}

            <table>

                <thead>
                    <div>
                        <a href={() => false} onClick={handleShowMeetModal}>
                            <img src="https://cdn4.iconfinder.com/data/icons/mosaicon-09/512/add_group-512.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                        </a>


                    </div>
                    <tr>
                        <th>Toplantı Tarihi</th>
                        <th>Toplantı Saati</th>
                        <th>Toplantı Adı</th>
                        <th>Toplantı Konusu</th>
                        <th>Link</th>
                        <th>Toplantıyı Sil</th>
                    </tr>
                </thead>

                {meet.map((meet) =>
                    <tbody>
                        <tr>
                            <td>{meet.date}</td>
                            <td>{meet.time}</td>
                            <td>{meet.name}</td>
                            <td>{meet.subject}</td>
                            <td><a href={meet.link} rel="noopener noreferrer">Toplantıya Katıl</a></td>
                            <td>
                                <a href={() => false} onClick={() => dispatch(deleteMeet(meet.id))}>

                                    <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />

                                </a>
                            </td>
                        </tr>
                    </tbody>
                )}
            </table>
        </div>
    );
}

export default Meeting;