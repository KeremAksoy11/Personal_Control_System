import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPersonal, deletePersonal, updatePersonal } from '../redux/personalSlice'
import { usePersonalLister } from "../config/firebase"
import '../components/mainTable.css'
import {
    changeDraftPersonalName, changeDraftPersonalSurname, changeDraftPersonalBirthday, changeDraftPersonalStartDate, changeDraftPersonalDepartment, changeDraftPersonalPhone, changeDraftPersonalMail, changeUpdatePersonalName,
    changeUpdatePersonalSurname, changeUpdatePersonalBirthday, changeUpdatePersonalStartDate, changeUpdatePersonalDepartment,
    changeUpdatePersonalPhone, changeUpdatePersonalMail, changeDraftPersonalPassword,
} from "../redux/personalSlice"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { changeName, changeEmail, changePassword, register } from '../redux/authSlice'



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
    const personalPassword = useSelector((state) => state.personal.draftPersonal.password);
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

    const registerName = useSelector((state) => state.auth.name)
    const email = useSelector((state) => state.auth.email)
    const password = useSelector((state) => state.auth.password)
    const error = useSelector((state) => state.auth.error)
    const isLoading = useSelector((state) => state.auth.isLoading)

    const handleRegisterNameChange = (e) => {
        dispatch(changeName(e.currentTarget.value))
    }

    const handleEmailChange = (e) => {
        dispatch(changeEmail(e.currentTarget.value))
    }

    const handlePasswordChange = (e) => {
        dispatch(changePassword(e.currentTarget.value))
    }



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

    const handlePersonalPasswordChange = (e) => {
        dispatch(changeDraftPersonalPassword(e.currentTarget.value))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClosePersonalModal();
        let modalMail = document.querySelector("#modalMail").value;
        let confirmMail = document.querySelector("#confirmMail").value;
        let modalPassword = document.querySelector("#modalPassword").value;
        let confirmPassword = document.querySelector("#confirmPassword").value;
        if (modalMail !== confirmMail) {
            alert("Lütfen Maili Doğrulayın.");
            e.preventDefault();
            handleShowPersonalModal();
        }
        else if (modalPassword !== confirmPassword) {
            alert("Lütfen Şifrenizi Doğrulayın.");
            e.preventDefault();
            handleShowPersonalModal();
        }
        else {
            dispatch(register({ registerName, email, password }))
            dispatch(addPersonal({ personalId, name, personalPassword, surname, birthday, startDate, department, phone, mail, createdDate }))
        }

    }

    const handleUpdateSubmit = (e) => {

        e.preventDefault();
        dispatch(updatePersonal(personal.id, updateName, updateSurname, updateBirthday, updateStartDate, updateDepartment, updatePhone, updateMail))

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
                    {error && (
                        <h5 className="small" style={{ color: "red" }}>{error}</h5>
                    )}
                    <form onSubmit={handleSubmit}>
                        <p className="text-center" style={{ color: "#39ace7" }}>Kullanıcı Adı</p>
                        <div class="input-group">
                            <input type="text" id="registerName" class="form-control" name="login" autoFocus onChange={handleRegisterNameChange} />
                        </div>

                        <p className="text-center" style={{ color: "#39ace7" }}>Mail</p>
                        <div class="input-group">
                            <input type="email" id="modalMail" class="form-control" aria-required="true" required
                                onChange={handleEmailChange} />
                        </div>

                        <p className="text-center" style={{ color: "#39ace7" }}>Lütfen Maili Doğrulayınız</p>
                        <div class="input-group">
                            <input type="email" class="form-control" onChange={handleMailChange} id="confirmMail" name="emailConfirm" />
                        </div>

                        <p className="text-center" style={{ color: "#39ace7" }}>Şifre</p>
                        <div class="input-group">
                            <input type="password" id="modalPassword" class="form-control" name="login"
                                onChange={handlePasswordChange} />
                        </div>

                        <p className="text-center" style={{ color: "#39ace7" }}>Lütfen Şifrenizi Doğrulayınız</p>
                        <div class="input-group">
                            <input type="password" id="confirmPassword" class="form-control" name="login"
                                onChange={handlePersonalPasswordChange} />
                        </div>

                        <p className="text-center" style={{ color: "#39ace7" }}>İsim ve Soy İsim</p>
                        <div class="input-group">
                            <input type="text" aria-label="name" class="form-control" onChange={handleNameChange} placeholder="Ad" />
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
                        <br />
                        <div class="col text-center">
                            <button type="submit" disabled={isLoading} onClick={() => dispatch(handleSubmit)} class="btn btn-success">Personeli Ekle</button>
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

            <tableMain>
                <thead>
                    <div>
                        <a href={() => false} onClick={handleShowPersonalModal}>
                            <img src="https://www.svgrepo.com/show/121235/add-user.svg" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                        </a>
                    </div>

                    <tr>
                        <th className="text-center" >İsim</th>
                        <th className="text-center">Soy İsim</th>
                        <th className="text-center">Doğum Tarihi</th>
                        <th className="text-center">Başlangıç</th>
                        <th className="text-center">Bölüm</th>
                        <th className="text-center">Telefon Numarası</th>
                        <th className="text-center">E Posta</th>
                        <th className="text-center">Şifre</th>
                        <th className="text-center">Oluşturulma Tarihi</th>
                        <th className="text-center">Sil</th>
                        <th className="text-center">Güncelleme</th>
                    </tr>
                </thead>

                {personal.map((personal) =>

                    <tbody>
                        <tr>
                            <td className="text-center">{personal.name}</td>
                            <td className="text-center">{personal.surname}</td>
                            <td className="text-center">{personal.birthday}</td>
                            <td className="text-center">{personal.startDate}</td>
                            <td className="text-center">{personal.department}</td>
                            <td className="text-center"><a without rel="noreferrer" target="_blank" href={message + personal.phone + messageText}  >{personal.phone}</a></td>
                            <td className="text-center"><a href={mailto + personal.mail}>{personal.mail}</a></td>
                            <td className="text-center">{personal.password}</td>
                            <td className="text-center">{personal.createdDate}</td>
                            <td className="text-center">
                                <a href={() => false} onClick={() => dispatch(deletePersonal(personal.id))}>
                                    <img src="https://img.icons8.com/fluency/344/delete-forever.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                                </a>
                            </td>
                            <td className="text-center">
                                <a href={() => false} onClick={() => dispatch(handleShowUpdatePersonalModal)}>
                                    <img src="http://cdn.onlinewebfonts.com/svg/img_527780.png" alt="" width="55" height="50" className="d-inline-block align-text-top" />
                                </a>
                            </td>
                        </tr>
                    </tbody>
                )}
            </tableMain>
        </div>
    );
}

export default Main;
