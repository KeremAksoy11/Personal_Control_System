import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonal, deletePersonal, updatePersonal } from '../redux/personalSlice'
import { usePersonalLister } from "../config/firebase"
import '../components/mainTable.css'
import {
    changeDraftPersonalName, changeDraftPersonalSurname, changeDraftPersonalBirthday, changeDraftPersonalStartDate, changeDraftPersonalDepartment, changeDraftPersonalPhone, changeDraftPersonalMail, changeUpdatePersonalName,
    changeUpdatePersonalSurname, changeUpdatePersonalBirthday, changeUpdatePersonalStartDate, changeUpdatePersonalDepartment,
    changeUpdatePersonalPhone, changeUpdatePersonalMail,
} from "../redux/personalSlice"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
    const createdDate = useSelector((state) => state.personal.draftPersonal.createdDate);
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
        handleClosePersonalModal();
        dispatch(addPersonal({ personalId, name, surname, birthday, startDate, department, phone, mail, createdDate }))
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        console.log(updateName)
        dispatch(updatePersonal(updateName, updateSurname, updateBirthday, updateStartDate, updateDepartment, updatePhone, updateMail))
    }

    const message = "https://wa.me/90"
    const messageText = "?text=Merhaba"
    const mailto = "mailto:"

    return (
        <div className="container">
            {<Modal show={showPersonal} onHide={handleClosePersonalModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Personel Ekleme</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <p className="text-center" style={{ color: "#39ace7" }}>İsim ve Soy Ad</p>
                        <div class="input-group">
                            <input type="text" required aria-label="name" class="form-control" onChange={handleNameChange} placeholder="İsim" />
                            <input type="text" aria-label="surname" class="form-control" onChange={handleSurnameChange} placeholder="Soy Ad" />
                        </div>

                        <hr />

                        <div class="input-group">
                            <span class="input-group-text">Doğum Tarihi</span>
                            <input type="date" required aria-label="birthday" class="form-control" onChange={handleBirthdayChange} />
                        </div>

                        <hr />

                        <div class="input-group">
                            <span class="input-group-text">İşe Başlangıç Tarihi</span>
                            <input type="date" required aria-label="startDate" class="form-control" onChange={handleStartDateChange} />
                        </div>

                        <hr />

                        <p className="text-center" style={{ color: "#39ace7" }}>Departman</p>
                        <div class="input-group">
                            <input type="text" required aria-label="department" class="form-control" onChange={handleDepartmentChange} placeholder="Departman" />
                        </div>

                        <hr />

                        <p className="text-center" style={{ color: "#39ace7" }}>Telefon Numarası</p>
                        <div class="input-group">
                            <input type="text" required aria-label="phone" class="form-control" onChange={handlePhoneChange} placeholder="Telefon Numarası" />
                        </div>

                        <hr />

                        <p className="text-center" style={{ color: "#39ace7" }}>Mail</p>
                        <div class="input-group">
                            <input type="email" required aria-label="mail" class="form-control" onChange={handleMailChange} placeholder="Mail" pattern="[^ @]*@[^ @]*" />
                        </div>

                        <div class="col text-center">
                            <button type="submit" onClick={() => dispatch(handleSubmit)} class="btn btn-success">Personeli Ekle</button>
                        </div>
                    </form>
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
                    <form onSubmit={handleUpdateSubmit}>
                        <p className="text-center" style={{ color: "#39ace7" }}>İsim ve Soy Ad</p>
                        <div class="input-group">
                            <input type="text" required aria-label="name" class="form-control" onChange={handleUpdateNameChange} placeholder="İsim" />
                            <input type="text" aria-label="surname" class="form-control" onChange={handleUpdateSurnameChange} placeholder="Soy Ad" />
                        </div>

                        <hr />

                        <div class="input-group">
                            <span class="input-group-text">Doğum Tarihi</span>
                            <input type="date" required aria-label="birthday" class="form-control" onChange={handleUpdateBirthdayChange} />
                        </div>

                        <hr />

                        <div class="input-group">
                            <span class="input-group-text">İşe Başlangıç Tarihi</span>
                            <input type="date" required aria-label="startDate" class="form-control" onChange={handleUpdateStartDateChange} />
                        </div>

                        <hr />

                        <p className="text-center" style={{ color: "#39ace7" }}>Departman</p>
                        <div class="input-group">
                            <input type="text" required aria-label="department" class="form-control" onChange={handleUpdateDepartmentChange} placeholder="Departman" />
                        </div>

                        <hr />

                        <p className="text-center" style={{ color: "#39ace7" }}>Telefon Numarası</p>
                        <div class="input-group">
                            <input type="text" required aria-label="phone" class="form-control" onChange={handleUpdatePhoneChange} placeholder="Telefon Numarası" />
                        </div>

                        <hr />

                        <p className="text-center" style={{ color: "#39ace7" }}>Mail</p>
                        <div class="input-group">
                            <input type="email" required aria-label="mail" class="form-control" onChange={handleUpdateMailChange} placeholder="Mail" pattern="[^ @]*@[^ @]*" />
                        </div>

                        <div class="col text-center">
                            <button type="submit" onClick={() => dispatch(handleUpdateSubmit)} class="btn btn-success">Personeli Güncelle</button>
                        </div>
                    </form>
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
                        <th>Oluşturulma Tarihi</th>
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
                            <td><a href={message + personal.phone + messageText}  >{personal.phone}</a></td>
                            <td><a href={mailto + personal.mail}>{personal.mail}</a></td>
                            <td>{personal.createdDate}</td>
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
