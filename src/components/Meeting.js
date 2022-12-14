import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMeet, deleteMeet } from "../redux/meetingSlice"
import { useMeetLister } from "../config/firebase"
import {
    changeDraftMeetName,
    changeDraftMeetTime,
    changeDraftMeetLink,
    changeDraftMeetSubject,
    changeDraftMeetDate,
    changeDraftMeetImportance,
} from "../redux/meetingSlice"
import "../components/meetTable.css"


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
    const importance = useSelector((state) => state.meet.draftMeet.importance);
    const createdDate = useSelector((state) => state.meet.draftMeet.createdDate);

    const meet = useSelector((state) => state.meet.meet)

    const handleNameChange = (e) => {
        dispatch(changeDraftMeetName(e.currentTarget.value))
    }
    const handleImportanceChange = (e) => {
        dispatch(changeDraftMeetImportance(e.currentTarget.value))
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
        dispatch(addMeet({ meetId, name, date, time, subject, link, importance, createdDate }))
    }


    return (
        <div className="container">

            {<Modal show={showMeet} onHide={handleCloseMeetModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Toplant?? Ekle</Modal.Title>
                </Modal.Header>
                <Container >

                    <Modal.Body>

                        <form onSubmit={handleSubmit}>

                            <p className="text-center" style={{ color: "#39ace7" }}>Toplant?? Tarihi</p>

                            <div className="input-group">
                                <span className="input-group-text">Tarih ve Saat</span>
                                <input type="date" required aria-label="First name" className="form-control" onChange={handleDateChange} value={date} name="addMeet" />
                                <input type="time" aria-label="Last name" className="form-control" onChange={handleTimeChange} value={time} />
                            </div>

                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>Toplant?? Ad?? ve Konusu</p>
                            <div className="input-group">

                                <input type="text" required aria-label="First name" className="form-control" onChange={handleNameChange} name="addMeet" placeholder="Toplant?? Ad??" />
                                <input type="text" aria-label="Last name" className="form-control" onChange={handleSubjectChange} placeholder="Toplant?? Konusu" />
                            </div>



                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>Toplant?? Linki</p>
                            <div className="input-group">
                                <span className="input-group-text">Link:</span>
                                <input type="link" required aria-label="First name" className="form-control" onChange={handleLinkChange} name="addMeet" />
                            </div>

                            <hr />
                            <p className="text-center" style={{ color: "#39ace7" }}>??nem Derecesi</p>
                            <div className="input-group">

                                <input type="text" required aria-label="importance" className="form-control" onChange={handleImportanceChange} value={importance} list="importance" />
                                <datalist id="importance">
                                    <option>Y??ksek</option>
                                    <option>Normal</option>
                                </datalist>
                            </div>

                            <br />
                            <div className="col text-center">
                                <button type="submit" onClick={handleCloseMeetModal} className="btn btn-primary">Toplant??y?? Ekle</button>
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

            <tableMeet>

                <thead>
                    <div>
                        <a href={() => false} onClick={handleShowMeetModal}>
                            <img src="https://cdn4.iconfinder.com/data/icons/mosaicon-09/512/add_group-512.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                        </a>


                    </div>
                    <tr>
                        <th className="text-center">Toplant?? Tarihi</th>
                        <th className="text-center">Toplant?? Saati</th>
                        <th className="text-center">Toplant?? Ad??</th>
                        <th className="text-center">Toplant?? Konusu</th>
                        <th className="text-center">Toplant?? ??nemi</th>
                        <th className="text-center">Olu??turulma Tarihi</th>
                        <th className="text-center">Link</th>
                        <th className="text-center">Toplant??y?? Sil</th>
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
                            <td className="text-center"><a href={meet.link} without rel="noreferrer" target="_blank">Toplant??ya Kat??l</a></td>
                            <td className="text-center">
                                <a href={() => false} onClick={() => dispatch(deleteMeet(meet.id))}>

                                    <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />

                                </a>
                            </td>
                        </tr>
                    </tbody>
                )}
            </tableMeet>
        </div>
    );
}

export default Meeting;