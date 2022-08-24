import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonal, deletePersonal, updatePersonal } from '../redux/personalSlice'
import { usePersonalLister } from "../config/firebase"
import '../components/table.css'
import {
    changeDraftPersonalName,
    changeDraftPersonalSurname,
    changeDraftPersonalBirthday,
    changeDraftPersonalStartDate,
    changeDraftPersonalDepartment,
    changeDraftPersonalPhone,
    changeDraftPersonalMail,

    changeUpdatePersonalName,
    changeUpdatePersonalSurname,
    changeUpdatePersonalBirthday,
    changeUpdatePersonalStartDate,
    changeUpdatePersonalDepartment,
    changeUpdatePersonalPhone,
    changeUpdatePersonalMail,
} from "../redux/personalSlice"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";


/* import { doc, updateDoc } from "firebase/firestore"
import { db } from "../config/firebase"; */


function Main() {
    usePersonalLister()

    const [showPersonal, setPersonal] = useState(false);

    const handleClosePersonalModal = () => setPersonal(false);
    const handleShowPersonalModal = () => setPersonal(true);


    const [showUpdatePersonal, setUpdatePersonal] = useState(false);
    const handleCloseUpdatePersonalModal = () => setUpdatePersonal(false);
    const handleShowUpdatePersonalModal = () => setUpdatePersonal(true);

    const dispatch = useDispatch();



    const personal = useSelector((state) => state.personal.personal);
    const personalId = useSelector((state) => state.personal.draftPersonal.personalId);
    const name = useSelector((state) => state.personal.draftPersonal.name);
    const surname = useSelector((state) => state.personal.draftPersonal.surname);
    const birthday = useSelector((state) => state.personal.draftPersonal.birthday);
    const startDate = useSelector((state) => state.personal.draftPersonal.startDate);
    const department = useSelector((state) => state.personal.draftPersonal.department);
    const phone = useSelector((state) => state.personal.draftPersonal.phone);
    const mail = useSelector((state) => state.personal.draftPersonal.mail);





    const updateName = useSelector((state) => state.personal.updatePersonal.name);
    const updateSurname = useSelector((state) => state.personal.updatePersonal.surname);
    const updateBirthday = useSelector((state) => state.personal.updatePersonal.birthday);
    const updateStartDate = useSelector((state) => state.personal.updatePersonal.startDate);
    const updateDepartment = useSelector((state) => state.personal.updatePersonal.department);
    const updatePhone = useSelector((state) => state.personal.updatePersonal.phone);
    const updateMail = useSelector((state) => state.personal.updatePersonal.mail);



    const handleUpdateNameChange = (e) => {
        dispatch(changeUpdatePersonalName(e.currentTarget.value))
    }

    const handleUpdateSurnameChange = (e) => {
        dispatch(changeUpdatePersonalSurname(e.currentTarget.value))
    }
    const handleUpdateBirthdayChange = (e) => {
        dispatch(changeUpdatePersonalBirthday(e.currentTarget.value))
    }
    const handleUpdateStartDateChange = (e) => {
        dispatch(changeUpdatePersonalStartDate(e.currentTarget.value))
    }
    const handleUpdateDepartmentChange = (e) => {
        dispatch(changeUpdatePersonalDepartment(e.currentTarget.value))
    }
    const handleUpdatePhoneChange = (e) => {
        dispatch(changeUpdatePersonalPhone(e.currentTarget.value))
    }
    const handleUpdateMailChange = (e) => {
        dispatch(changeUpdatePersonalMail(e.currentTarget.value))
    }




    const handleNameChange = (e) => {
        dispatch(changeDraftPersonalName(e.currentTarget.value))
    }
    const handleSurnameChange = (e) => {
        dispatch(changeDraftPersonalSurname(e.currentTarget.value))
    }
    const handleBirthdayChange = (e) => {
        dispatch(changeDraftPersonalBirthday(e.currentTarget.value))
    }
    const handleStartDateChange = (e) => {
        dispatch(changeDraftPersonalStartDate(e.currentTarget.value))
    }
    const handleDepartmentChange = (e) => {
        dispatch(changeDraftPersonalDepartment(e.currentTarget.value))
    }
    const handlePhoneChange = (e) => {
        dispatch(changeDraftPersonalPhone(e.currentTarget.value))
    }
    const handleMailChange = (e) => {
        dispatch(changeDraftPersonalMail(e.currentTarget.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPersonal({ personalId, name, surname, birthday, startDate, department, phone, mail }))
    }


    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log(updateName)
        dispatch(updatePersonal(updateName, updateSurname))
    }


    /*  const updatePersonal1 = async (id, name) => {
         const personalDoc = doc(db, "Personal", id)
         await updateDoc(personalDoc, {name} );
         console.log("Updated");
     } */





    return (

        <div className="container">

            {<Modal show={showPersonal} onHide={handleClosePersonalModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Personel Ekleme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={handleSubmit}>
                                <p className="text-center" style={{ color: "#39ace7" }}>İsim</p>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="addPersonal"
                                    onChange={handleNameChange}
                                    value={name}
                                    required
                                    autoFocus

                                />

                                <p className="text-center" style={{ color: "#39ace7" }}>Soy İsim</p>
                                <Form.Control
                                    type="text"
                                    name="addPersonal"
                                    onChange={handleSurnameChange}
                                    value={surname}
                                    required
                                />

                                <p className="text-center" style={{ color: "#39ace7" }}>Doğum Tarihi</p>
                                <Form.Control
                                    type="text"
                                    name="addPersonal"
                                    onChange={handleBirthdayChange}
                                    value={birthday}
                                    required

                                />

                                <p className="text-center" style={{ color: "#39ace7" }}>İşe Başlangıç Tarihi</p>
                                <Form.Control
                                    type="text"
                                    name="addPersonal"
                                    onChange={handleStartDateChange}
                                    value={startDate}
                                    required

                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>Bölüm</p>
                                <Form.Control
                                    type="text"
                                    name="addPersonal"
                                    onChange={handleDepartmentChange}
                                    value={department}
                                    required

                                />

                                <p className="text-center" style={{ color: "#39ace7" }}>Telefon Numarası</p>
                                <Form.Control
                                    type="text"
                                    name="addPersonal"
                                    onChange={handlePhoneChange}
                                    value={phone}
                                    required

                                />


                                <p className="text-center" style={{ color: "#39ace7" }}>Mail</p>
                                <Form.Control
                                    type="text"
                                    name="addPersonal"
                                    onChange={handleMailChange}
                                    value={mail}
                                    required

                                />
                                <Form.Group>
                                    <Button variant="success" onClick={handleClosePersonalModal} type="submit">Personeli Ekle</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClosePersonalModal}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>}


            {<Modal show={showUpdatePersonal} onHide={handleCloseUpdatePersonalModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Personel Güncelleme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={handleUpdateSubmit}>
                                <p className="text-center" style={{ color: "#39ace7" }}>İsim</p>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdateNameChange}
                                    value={updateName}
                                    required
                                    autoFocus
                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>Soy İsim</p>
                                <Form.Control
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdateSurnameChange}
                                    value={updateSurname}
                                    required
                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>Doğum Tarihi</p>
                                <Form.Control
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdateBirthdayChange}
                                    value={updateBirthday}
                                    required
                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>İşe Başlangıç Tarihi</p>
                                <Form.Control
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdateStartDateChange}
                                    value={updateStartDate}
                                    required
                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>Bölüm</p>
                                <Form.Control
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdateDepartmentChange}
                                    value={updateDepartment}
                                    required
                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>Telefon Numarası</p>
                                <Form.Control
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdatePhoneChange}
                                    value={updatePhone}
                                    required
                                />
                                <p className="text-center" style={{ color: "#39ace7" }}>Mail</p>
                                <Form.Control
                                    type="text"
                                    name="updatePersonal"
                                    onChange={handleUpdateMailChange}
                                    value={updateMail}
                                    required
                                />
                                <Form.Group>
                                    <Button variant="success" onClick={handleCloseUpdatePersonalModal} type="submit">Personeli Güncelle</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseUpdatePersonalModal}>
                        Kapat
                    </Button>
                </Modal.Footer>
            </Modal>}

            <table>

                <thead>
                    <div>
                        <a href={() => false} onClick={handleShowPersonalModal}>
                            <img src="https://www.svgrepo.com/show/121235/add-user.svg" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                        </a>


                    </div>

                    <tr>

                        <th>İsim</th>
                        <th>Soy İsim</th>
                        <th>Doğum Tarihi</th>
                        <th>Başlangıç</th>
                        <th>Bölüm</th>
                        <th>Telefon Numarası</th>
                        <th>E Posta</th>
                        <th>Sil</th>
                        <th>Güncelleme</th>

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
                            <td>
                                <a href={() => false} onClick={() => dispatch(deletePersonal(personal.id))}>

                                    <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />

                                </a>
                            </td>
                            <td>
                                <a href={() => false} onClick={handleShowUpdatePersonalModal}>
                                    <img src="http://cdn.onlinewebfonts.com/svg/img_527780.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                                </a>

                            </td>
                        </tr>
                    </tbody>

                )}
            </table>
        </div>
    );
}

export default Main;
